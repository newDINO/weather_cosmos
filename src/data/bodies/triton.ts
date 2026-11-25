import type { Body } from '../../lib/types';

const triton: Body = {
  id: 'triton',
  name: '海卫一 · 特里同',
  en: 'Triton',
  kind: 'moon',
  parent: '海王星',
  tagline: '逆向公转的冰封世界，氮气喷泉直冲 8 公里',
  station: '坎特卢普地形 · 极区站',
  palette: {
    skyTop: '#1a1426',
    skyMid: '#2c2140',
    skyBottom: '#0b0812',
    accent: '#d9c8ff',
    orb1: '#e6dcf5',
    orb2: '#b7a6d6',
    orb3: '#5b4d76',
    glow: 'rgba(217, 200, 255, 0.26)',
  },
  orb: { style: 'icy' },
  rotationHours: 141,
  dayLengthLabel: '5.88 个地球日',
  localPhase: 0.4,
  facts: [
    { label: '表面温度', value: '约 -235 °C' },
    { label: '氮气喷泉', value: '高达 8 km' },
    { label: '大气', value: '约 14 µbar N₂' },
    { label: '轨道', value: '逆向公转' },
  ],
  observations: [
    {
      year: '1989',
      title: 'Voyager 2 飞掠',
      text: '旅行者 2 号拍到“坎特卢普地形”与南极附近的黑色喷泉痕迹，发现这颗卫星仍在活动。',
    },
    {
      year: '1990s',
      title: '太阳加热驱动喷泉',
      text: '分析认为，稀薄氮气被阳光加热后从冰面喷出，携带暗色尘埃形成 8 km 高的羽流。',
    },
    {
      year: '2022',
      title: '重新审视冰下海洋',
      text: '后续研究持续讨论特里同冰壳下是否仍保留液态水海洋，它是少数可能拥有地下海洋的卫星之一。',
    },
  ],
  sources: [
    { label: 'NASA · Triton Facts', url: 'https://science.nasa.gov/neptune/moons/triton/facts/' },
    { label: 'NASA · Voyager', url: 'https://science.nasa.gov/mission/voyager/' },
  ],
  climate: {
    meanC: -235,
    diurnalC: 5,
    noiseC: 1.5,
    dayNoiseC: 1,
    windKph: 10,
    gustKph: 30,
    pressureHpa: 0.014,
    humidityPct: null,
    visibilityKm: 10,
    solarRatio: 0.0011,
    gravity: 0.78,
    eventLabel: '氮喷泉概率',
    baseEventPct: 35,
    weights: {
      geyser: 30,
      clear: 35,
      snow: 15,
      'ice-haze': 10,
      windy: 10,
    },
    hazards: {
      geyser: '氮气喷泉可达 8 km 高，喷发区能见度骤降并伴随局部风切变。',
    },
  },
};

export default triton;
