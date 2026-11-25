import { CONDITIONS } from './conditions';
import { clamp, hashString, mulberry32, pickWeighted } from './random';
import type {
  Body,
  ConditionId,
  DayPoint,
  Detail,
  Forecast,
  HourPoint,
} from './types';

const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;

const DAY_LABELS = ['今天', '明天', '第 3 天', '第 4 天', '第 5 天', '第 6 天', '第 7 天'];

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

/** 用 COS 昼夜曲线模拟近地表温度：约 14 时最高、02 时最低 */
function curveTemp(meanC: number, amplitudeC: number, hour: number): number {
  return meanC + amplitudeC * Math.cos((2 * Math.PI * (hour - 14)) / 24);
}

function hourSamples(meanC: number, amplitudeC: number): number[] {
  return Array.from({ length: 24 }, (_, hour) => curveTemp(meanC, amplitudeC, hour));
}

function pressureDetail(hpa: number | null): Detail {
  if (hpa === null) {
    return { label: '气压', value: '≈ 0', sub: '无稳定大气' };
  }
  if (hpa >= 1000) {
    const bar = Number((hpa / 1000).toFixed(1));
    return {
      label: '气压',
      value: `${bar} bar`,
      sub: hpa === 1000 ? '1 bar 参考层' : '近地表',
    };
  }
  if (hpa < 1) {
    return { label: '气压', value: `${(hpa * 100).toFixed(1)} Pa`, sub: '近地表' };
  }
  return { label: '气压', value: `${hpa} hPa`, sub: '近地表' };
}

/**
 * 基于真实气候档案生成一天的“模拟预报”。
 *
 * 同一天 + 同一天体 = 同一份预报（构建可复现）；数据本身不是真实实测，
 * 只保证量级、风、气压等与观测统计一致。
 */
export function createForecast(body: Body, now: Date = new Date()): Forecast {
  const dateKey = now.toISOString().slice(0, 10);
  const rng = mulberry32(hashString(`${body.id}|${dateKey}`));
  const climate = body.climate;

  // 天体自转周期不同，这里把 UTC 映射成该站的“本地太阳时”
  const localHour =
    ((((now.getTime() / HOUR_MS) / body.rotationHours) * 24 +
      body.localPhase * 24) %
      24 +
      24) %
    24;

  const dailyMean =
    climate.meanC + (rng() * 2 - 1) * (climate.dayNoiseC ?? 1.2);
  const todayCondition = pickWeighted<ConditionId>(rng, climate.weights);

  const hourly: HourPoint[] = Array.from({ length: 24 }, (_, hour) => {
    const condition: ConditionId =
      rng() < 0.68 ? todayCondition : pickWeighted<ConditionId>(rng, climate.weights);
    const noise = (rng() * 2 - 1) * (climate.noiseC ?? 1.5);
    const tempC = curveTemp(dailyMean, climate.diurnalC, hour) + noise;
    const eventPct = clamp(
      Math.round(
        climate.baseEventPct +
          (CONDITIONS[condition].event ? 28 : -14) +
          (rng() * 2 - 1) * 12,
      ),
      0,
      100,
    );
    return {
      hour,
      label: `${pad(hour)}:00`,
      tempC: Math.round(tempC),
      condition,
      eventPct,
    };
  });

  const current = hourly[Math.round(localHour) % 24];

  const highs = hourly.map((hour) => hour.tempC);
  const highC = Math.max(...highs);
  const lowC = Math.min(...highs);

  const windKph = Math.max(
    0,
    Math.round(climate.windKph * (0.82 + rng() * 0.36)),
  );
  const gustKph = Math.max(
    windKph,
    Math.round(climate.gustKph * (0.85 + rng() * 0.3)),
  );

  let previous: ConditionId = todayCondition;
  const daily: DayPoint[] = Array.from({ length: 7 }, (_, index) => {
    if (index > 0) {
      previous =
        rng() < 0.35
          ? previous
          : pickWeighted<ConditionId>(rng, climate.weights);
    }
    const dayMean =
      dailyMean +
      (index > 0 ? (rng() * 2 - 1) * (climate.dayNoiseC ?? 1.2) * 1.6 : 0) +
      Math.sin((index / 6) * Math.PI) * 0.8;
    const samples = hourSamples(dayMean, climate.diurnalC);
    const dayHigh = Math.round(Math.max(...samples));
    const dayLow = Math.round(Math.min(...samples));
    const eventPct = clamp(
      Math.round(
        climate.baseEventPct +
          (CONDITIONS[previous].event ? 26 : -12) +
          (rng() * 2 - 1) * 10,
      ),
      0,
      100,
    );
    return {
      index,
      label: DAY_LABELS[index],
      highC: dayHigh,
      lowC: dayLow,
      condition: previous,
      eventPct,
      windKph: Math.max(
        0,
        Math.round(climate.windKph * (0.75 + rng() * 0.55)),
      ),
    };
  });

  const referenceLayer = climate.pressureHpa === 1000;
  const details: Detail[] = [
    {
      label: '风速',
      value: `${windKph} km/h`,
      sub: windKph === 0 ? '外逸层，无环流' : referenceLayer ? '参考层平均' : '近地表平均',
    },
    {
      label: '阵风',
      value: `${gustKph} km/h`,
      sub: gustKph === 0 ? '—' : '短时峰值',
    },
    pressureDetail(climate.pressureHpa),
    {
      label: '能见度',
      value: climate.visibilityKm === null ? '—' : `${climate.visibilityKm} km`,
      sub: climate.visibilityKm === null
        ? '无大气散射'
        : referenceLayer
          ? '1 bar 参考层'
          : '近地表',
    },
    {
      label: '湿度',
      value: climate.humidityPct === null ? '—' : `${climate.humidityPct}%`,
      sub: climate.humidityPct === null
        ? climate.pressureHpa === null
          ? '无大气'
          : '不适用'
        : '相对湿度',
    },
    {
      label: '本地日长',
      value: body.dayLengthLabel,
      sub: '逐时预报的时间尺度',
    },
    {
      label: '太阳辐照',
      value: `${climate.solarRatio} × 地球`,
      sub: '大气层顶',
    },
    {
      label: '重力',
      value: `${climate.gravity.toFixed(2)} m/s²`,
      sub: `${(climate.gravity / 9.807).toFixed(2)} g`,
    },
  ];

  // 让“今天”和当前实况使用同一组高低温与概率，避免同一页内自相矛盾
  daily[0] = {
    ...daily[0],
    highC,
    lowC,
    condition: current.condition,
    eventPct: current.eventPct,
    windKph,
  };

  const alert = climate.hazards?.[current.condition];

  return {
    current: {
      tempC: current.tempC,
      highC,
      lowC,
      condition: current.condition,
      windKph,
      gustKph,
      eventPct: current.eventPct,
      localHour,
      localTime: `${pad(Math.floor(localHour))}:${pad(
        Math.floor((localHour % 1) * 60),
      )}`,
    },
    hourly,
    daily,
    details,
    alert,
    generatedAt: new Date(
      Math.floor(now.getTime() / DAY_MS) * DAY_MS,
    ).toISOString(),
  };
}
