import type { Body } from '../../lib/types';

const earth: Body = {
  id: 'earth',
  name: '地球',
  en: 'Earth',
  kind: 'planet',
  tagline: '唯一拥有真正天气预报的世界',
  station: '赤道太平洋 · 参考浮标',
  palette: {
    skyTop: '#0b1d33',
    skyMid: '#123a56',
    skyBottom: '#071019',
    accent: '#7bd7ff',
    orb1: '#79c7ff',
    orb2: '#1e6fa8',
    orb3: '#0b3550',
    glow: 'rgba(123, 215, 255, 0.3)',
  },
  orb: { style: 'rocky' },
  rotationHours: 24,
  dayLengthLabel: '24 小时',
  localPhase: 0.08,
  facts: [
    { label: '平均温度', value: '约 15 °C' },
    { label: '大气成分', value: '78% N₂ / 21% O₂' },
    { label: '海平面气压', value: '1013 hPa' },
    { label: '自转周期', value: '23 小时 56 分' },
  ],
  observations: [
    {
      year: '1958',
      title: '基林曲线开始',
      text: '夏威夷莫纳罗亚观测站持续记录大气 CO₂ 浓度，成为气候系统最长的连续观测之一。',
    },
    {
      year: '1972',
      title: 'Landsat 持续观测地表',
      text: '数十年的卫星影像让云系、海冰、植被与城市扩张的变化可以被逐日比较。',
    },
    {
      year: '2025',
      title: '2024 年首次全年突破 1.5 °C',
      text: 'Copernicus 气候服务确认，2024 年是有记录以来最热的一年，也是首个比工业化前高 1.5 °C 以上的日历年。',
    },
  ],
  sources: [
    { label: 'NASA · Earth Facts', url: 'https://science.nasa.gov/earth/facts/' },
    { label: 'Copernicus Climate', url: 'https://climate.copernicus.eu/' },
  ],
  climate: {
    meanC: 15,
    diurnalC: 6,
    noiseC: 1.2,
    dayNoiseC: 1,
    windKph: 18,
    gustKph: 45,
    pressureHpa: 1013,
    humidityPct: 62,
    visibilityKm: 20,
    solarRatio: 1,
    gravity: 9.81,
    eventLabel: '降水概率',
    baseEventPct: 30,
    weights: {
      clear: 22,
      'partly-cloudy': 30,
      cloudy: 18,
      rain: 14,
      thunderstorm: 5,
      windy: 5,
      fog: 6,
    },
    hazards: {
      thunderstorm: '强对流天气：注意雷暴、短时强降水与阵风。',
    },
  },
};

export default earth;
