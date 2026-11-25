import type { Body } from '../../lib/types';

const titan: Body = {
  id: 'titan',
  name: '泰坦',
  en: 'Titan',
  kind: 'moon',
  parent: '土星',
  tagline: '甲烷雨落在冰原与湖泊之间',
  station: '克拉肯海 · 湖岸站',
  palette: {
    skyTop: '#2a210f',
    skyMid: '#4a3518',
    skyBottom: '#120d06',
    accent: '#ffd27a',
    orb1: '#f0c77a',
    orb2: '#c98f3c',
    orb3: '#5c3b17',
    glow: 'rgba(255, 210, 122, 0.28)',
  },
  orb: { style: 'hazy' },
  rotationHours: 382.7,
  dayLengthLabel: '15.9 个地球日',
  localPhase: 0.33,
  facts: [
    { label: '地表温度', value: '-179 °C' },
    { label: '地表气压', value: '1.45 bar' },
    { label: '大气成分', value: '95% N₂ / 5% CH₄' },
    { label: '公转周期', value: '15.9 个地球日' },
  ],
  observations: [
    {
      year: '2005',
      title: 'Huygens 着陆',
      text: '惠更斯号穿过橙色雾霾降落在冰原上，拍到被甲烷冲刷出的河道与圆润的冰卵石。',
    },
    {
      year: '2006–2017',
      title: 'Cassini 观测湖泊与云',
      text: '卡西尼号在北极发现克拉肯海等液态甲烷湖泊，并追踪到随季节移动的甲烷云系。',
    },
    {
      year: '2024',
      title: '蜻蜓号准备启程',
      text: 'NASA 的旋翼着陆器计划前往泰坦，直接采样湖岸有机物并研究甲烷循环。',
    },
  ],
  sources: [
    { label: 'NASA · Titan Facts', url: 'https://science.nasa.gov/saturn/moons/titan/facts/' },
    { label: 'ESA · Huygens', url: 'https://www.esa.int/Science_Exploration/Space_Science/Cassini-Huygens' },
  ],
  climate: {
    meanC: -179,
    diurnalC: 1.5,
    noiseC: 0.8,
    dayNoiseC: 0.8,
    windKph: 15,
    gustKph: 40,
    pressureHpa: 1450,
    humidityPct: 45,
    visibilityKm: 2,
    solarRatio: 0.011,
    gravity: 1.35,
    eventLabel: '甲烷雨概率',
    baseEventPct: 35,
    weights: {
      'methane-rain': 25,
      overcast: 25,
      haze: 20,
      cloudy: 15,
      storm: 10,
      clear: 5,
    },
    hazards: {
      'methane-rain': '甲烷阵雨：地表径流与湖泊水位可能快速上升，湖岸站注意排水。',
      storm: '甲烷风暴：阵风可达 40 km/h，卷起有机沙尘。',
    },
  },
};

export default titan;
