import type { Body } from '../../lib/types';

const venus: Body = {
  id: 'venus',
  name: '金星',
  en: 'Venus',
  kind: 'planet',
  tagline: '92 个大气压下的永恒硫酸天空',
  station: '阿佛洛狄忒台地 · 地表站',
  palette: {
    skyTop: '#3a2418',
    skyMid: '#5a3416',
    skyBottom: '#16100c',
    accent: '#ffcb6b',
    orb1: '#f6d79a',
    orb2: '#d99b4c',
    orb3: '#7a4a1c',
    glow: 'rgba(255, 203, 107, 0.3)',
  },
  orb: { style: 'hazy' },
  rotationHours: 2802,
  dayLengthLabel: '117 个地球日',
  localPhase: 0.42,
  facts: [
    { label: '地表温度', value: '464 °C' },
    { label: '地表气压', value: '92 bar' },
    { label: '大气成分', value: '96.5% CO₂ / 3.5% N₂' },
    { label: '云顶风速', value: '约 360 km/h' },
  ],
  observations: [
    {
      year: '1970',
      title: 'Venera 7 首次从金星表面传回数据',
      text: '苏联探测器在 92 bar、约 464 °C 的环境中工作了约 23 分钟，证明金星地表并非可居住的湿热丛林。',
    },
    {
      year: '1982',
      title: 'Venera 13 拍摄彩色全景',
      text: '探测器在表面存活约 127 分钟，传回橙黄色天空下的玄武岩碎石画面。',
    },
    {
      year: '2006–2014',
      title: 'Venus Express 追踪云顶环流',
      text: 'ESA 探测器长期监测硫酸云的超级旋转：云顶约 4 天绕金星一周，而地表自转需要 243 天。',
    },
  ],
  sources: [
    { label: 'NASA · Venus Facts', url: 'https://science.nasa.gov/venus/facts/' },
    { label: 'ESA · Venus Express', url: 'https://www.esa.int/Science_Exploration/Space_Science/Venus_Express' },
  ],
  climate: {
    meanC: 464,
    diurnalC: 1.5,
    noiseC: 0.8,
    dayNoiseC: 0.5,
    windKph: 3,
    gustKph: 6,
    pressureHpa: 92000,
    humidityPct: 0,
    visibilityKm: 3,
    solarRatio: 1.9,
    gravity: 8.87,
    eventLabel: '硫酸雨概率',
    baseEventPct: 42,
    weights: {
      overcast: 38,
      'acid-rain': 27,
      haze: 22,
      thunderstorm: 8,
      cloudy: 5,
    },
    hazards: {
      'acid-rain': '硫酸雨在约 30 km 高度蒸发，通常不会落到地面；云顶仍有强酸气溶胶。',
      thunderstorm: '云层中存在强对流与闪电活动的迹象，地表气压依然稳定在 92 bar。',
    },
  },
};

export default venus;
