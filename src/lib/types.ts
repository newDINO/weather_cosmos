export type ConditionId =
  | 'clear'
  | 'partly-cloudy'
  | 'cloudy'
  | 'overcast'
  | 'haze'
  | 'fog'
  | 'dust'
  | 'dust-storm'
  | 'rain'
  | 'acid-rain'
  | 'methane-rain'
  | 'thunderstorm'
  | 'snow'
  | 'co2-frost'
  | 'windy'
  | 'storm'
  | 'aurora'
  | 'volcanic'
  | 'geyser'
  | 'solar-wind'
  | 'ice-haze';

export type IconName =
  | 'sun'
  | 'partly'
  | 'cloud'
  | 'overcast'
  | 'haze'
  | 'rain'
  | 'storm'
  | 'snow'
  | 'dust'
  | 'wind'
  | 'frost'
  | 'aurora'
  | 'volcano'
  | 'geyser'
  | 'sparkle';

export interface ConditionMeta {
  label: string;
  icon: IconName;
  /** 用于图标/强调色 */
  tone: string;
  /** 是否会作为可统计的“天气事件”展示概率 */
  event?: boolean;
  severe?: boolean;
}

export type BodyKind = 'planet' | 'dwarf' | 'moon';

export interface ClimateProfile {
  /** 参考层平均温度（°C） */
  meanC: number;
  /** 昼夜曲线相对平均值的振幅（°C） */
  diurnalC: number;
  /** 逐时温度抖动（°C） */
  noiseC?: number;
  /** 逐日平均温度抖动（°C） */
  dayNoiseC?: number;
  windKph: number;
  gustKph: number;
  /** null 表示几乎没有稳定大气 */
  pressureHpa: number | null;
  humidityPct: number | null;
  visibilityKm: number | null;
  /** 相对地球的太阳辐照 */
  solarRatio: number;
  gravity: number;
  /** “降水概率”在各天体上的叫法 */
  eventLabel: string;
  baseEventPct: number;
  weights: Partial<Record<ConditionId, number>>;
  /** 特定天气下的提示语 */
  hazards?: Partial<Record<ConditionId, string>>;
}

export interface Observation {
  year: string;
  title: string;
  text: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface OrbStyle {
  style: 'rocky' | 'banded' | 'icy' | 'volcanic' | 'hazy';
  rings?: 'saturn' | 'uranus';
}

export interface Palette {
  skyTop: string;
  skyMid: string;
  skyBottom: string;
  accent: string;
  orb1: string;
  orb2: string;
  orb3: string;
  glow: string;
}

export interface Body {
  id: string;
  name: string;
  en: string;
  kind: BodyKind;
  parent?: string;
  tagline: string;
  station: string;
  palette: Palette;
  orb: OrbStyle;
  /** 自转/公转周期，用于本地太阳时与日长说明（小时） */
  rotationHours: number;
  dayLengthLabel: string;
  /** 本地时相位偏移，0..1，用于让各站时钟错开 */
  localPhase: number;
  facts: { label: string; value: string }[];
  observations: Observation[];
  sources: Source[];
  climate: ClimateProfile;
}

export interface HourPoint {
  hour: number;
  label: string;
  tempC: number;
  condition: ConditionId;
  eventPct: number;
}

export interface DayPoint {
  index: number;
  label: string;
  highC: number;
  lowC: number;
  condition: ConditionId;
  eventPct: number;
  windKph: number;
}

export interface Detail {
  label: string;
  value: string;
  sub?: string;
}

export interface CurrentConditions {
  tempC: number;
  highC: number;
  lowC: number;
  condition: ConditionId;
  windKph: number;
  gustKph: number;
  eventPct: number;
  localHour: number;
  localTime: string;
}

export interface Forecast {
  current: CurrentConditions;
  hourly: HourPoint[];
  daily: DayPoint[];
  details: Detail[];
  alert?: string;
  generatedAt: string;
}
