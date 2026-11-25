import type { Body } from '../../lib/types';

const saturn: Body = {
  id: 'saturn',
  name: '土星',
  en: 'Saturn',
  kind: 'planet',
  tagline: '六边形极涡与每小时 1,800 公里的急流',
  station: '赤道急流 · 1 bar 云层',
  palette: {
    skyTop: '#2a2416',
    skyMid: '#4a3d22',
    skyBottom: '#13100a',
    accent: '#ffe3a3',
    orb1: '#f2e3bd',
    orb2: '#cdb27a',
    orb3: '#6d5a39',
    glow: 'rgba(255, 227, 163, 0.28)',
  },
  orb: { style: 'banded', rings: 'saturn' },
  rotationHours: 10.56,
  dayLengthLabel: '10 小时 33 分',
  localPhase: 0.74,
  facts: [
    { label: '1 bar 处温度', value: '-138 °C' },
    { label: '赤道风速', value: '约 1,800 km/h' },
    { label: '北极六边形', value: '宽约 3 万 km' },
    { label: '自转周期', value: '10 小时 33 分' },
  ],
  observations: [
    {
      year: '2004–2017',
      title: 'Cassini 长期驻守',
      text: '卡西尼号用 13 年时间追踪土星的风暴季节、极涡与环系，记录下完整的季节变化。',
    },
    {
      year: '2010–2011',
      title: '北半球“龙形风暴”',
      text: '一场巨大的对流风暴在数周内环绕北半球，成为土星观测史上最强烈的风暴之一。',
    },
    {
      year: '2017',
      title: 'Cassini 大结局',
      text: '探测器主动坠入土星大气，在最后时刻传回大气密度与风场数据。',
    },
  ],
  sources: [
    { label: 'NASA · Saturn Facts', url: 'https://science.nasa.gov/saturn/facts/' },
    { label: 'NASA · Cassini', url: 'https://science.nasa.gov/mission/cassini/' },
  ],
  climate: {
    meanC: -138,
    diurnalC: 2,
    noiseC: 0.9,
    dayNoiseC: 1,
    windKph: 600,
    gustKph: 1800,
    pressureHpa: 1000,
    humidityPct: null,
    visibilityKm: 30,
    solarRatio: 0.011,
    gravity: 10.44,
    eventLabel: '风暴概率',
    baseEventPct: 30,
    weights: {
      cloudy: 25,
      windy: 25,
      storm: 20,
      aurora: 10,
      haze: 20,
    },
    hazards: {
      storm: '赤道急流增强：云顶风速可达 1,800 km/h，环系上方出现明显剪切。',
    },
  },
};

export default saturn;
