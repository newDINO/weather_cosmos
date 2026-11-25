import type { Body } from '../../lib/types';

const uranus: Body = {
  id: 'uranus',
  name: '天王星',
  en: 'Uranus',
  kind: 'planet',
  tagline: '侧躺自转，极夜长达 42 年',
  station: '南半球 · 1 bar 云层',
  palette: {
    skyTop: '#0d2a2c',
    skyMid: '#14505a',
    skyBottom: '#071519',
    accent: '#9ff2ef',
    orb1: '#c5f2ee',
    orb2: '#7ec9cf',
    orb3: '#2b6d78',
    glow: 'rgba(159, 242, 239, 0.28)',
  },
  orb: { style: 'hazy', rings: 'uranus' },
  rotationHours: 17.24,
  dayLengthLabel: '17 小时 14 分',
  localPhase: 0.5,
  facts: [
    { label: '1 bar 处温度', value: '-195 °C' },
    { label: '轴倾角', value: '97.8°' },
    { label: '公转周期', value: '84 个地球年' },
    { label: '极区季节', value: '42 年极昼 / 极夜' },
  ],
  observations: [
    {
      year: '1986',
      title: 'Voyager 2 唯一一次飞掠',
      text: '旅行者 2 号发现天王星几乎侧躺着自转，磁场轴也大幅偏离自转轴，并拍下暗淡的环系。',
    },
    {
      year: '2023',
      title: 'JWST 拍摄天王星环',
      text: '韦布望远镜的红外观测让 13 条环与极区云层同时显现，为长期大气监测提供新基线。',
    },
    {
      year: '2024',
      title: '极区季节监测',
      text: '地面与太空望远镜持续追踪天王星缓慢变化的云带，它的下一个至点要等到 2028 年。',
    },
  ],
  sources: [
    { label: 'NASA · Uranus Facts', url: 'https://science.nasa.gov/uranus/facts/' },
    { label: 'NASA · Webb', url: 'https://science.nasa.gov/mission/webb/' },
  ],
  climate: {
    meanC: -195,
    diurnalC: 1.5,
    noiseC: 0.7,
    dayNoiseC: 0.8,
    windKph: 300,
    gustKph: 900,
    pressureHpa: 1000,
    humidityPct: null,
    visibilityKm: 40,
    solarRatio: 0.0027,
    gravity: 8.69,
    eventLabel: '风暴概率',
    baseEventPct: 22,
    weights: {
      haze: 32,
      cloudy: 25,
      windy: 25,
      aurora: 8,
      clear: 10,
    },
    hazards: {
      windy: '高层大气风速可达 900 km/h；在这个侧躺的世界里，季节变化以几十年计。',
    },
  },
};

export default uranus;
