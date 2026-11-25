import type { Body } from '../../lib/types';

const io: Body = {
  id: 'io',
  name: '木卫一 · 艾奥',
  en: 'Io',
  kind: 'moon',
  parent: '木星',
  tagline: '太阳系火山活动最剧烈的天体',
  station: '洛基火山口 · 熔岩平原站',
  palette: {
    skyTop: '#2a2110',
    skyMid: '#4a3413',
    skyBottom: '#140e06',
    accent: '#ffcf5c',
    orb1: '#ffe08a',
    orb2: '#d9a03c',
    orb3: '#6a4516',
    glow: 'rgba(255, 207, 92, 0.3)',
  },
  orb: { style: 'volcanic' },
  rotationHours: 42.5,
  dayLengthLabel: '1.77 个地球日',
  localPhase: 0.05,
  facts: [
    { label: '表面温度', value: '约 -143 °C' },
    { label: '活火山', value: '400 座以上' },
    { label: '大气', value: '微量 SO₂（约 10⁻⁹ bar）' },
    { label: '公转周期', value: '1.77 个地球日' },
  ],
  observations: [
    {
      year: '1979',
      title: 'Voyager 1 发现活火山',
      text: '旅行者 1 号拍到洛基火山口喷出的硫磺羽流，首次证明地球之外仍有活跃火山活动。',
    },
    {
      year: '2007',
      title: 'New Horizons 记录巨型羽流',
      text: '飞往冥王星途中，新视野号在艾奥南极看到高达 300 km 的火山喷发柱。',
    },
    {
      year: '2023–2024',
      title: '朱诺号近距离飞掠',
      text: '朱诺号多次掠过艾奥，拍到熔岩湖、火山岛与喷发后的地表变化。',
    },
  ],
  sources: [
    { label: 'NASA · Io Facts', url: 'https://science.nasa.gov/jupiter/moons/io/facts/' },
    { label: 'NASA · Juno', url: 'https://science.nasa.gov/mission/juno/' },
  ],
  climate: {
    meanC: -143,
    diurnalC: 18,
    noiseC: 4,
    dayNoiseC: 2,
    windKph: 0,
    gustKph: 0,
    pressureHpa: null,
    humidityPct: null,
    visibilityKm: null,
    solarRatio: 0.037,
    gravity: 1.8,
    eventLabel: '喷发概率',
    baseEventPct: 40,
    weights: { volcanic: 35, haze: 25, dust: 20, clear: 20 },
    hazards: {
      volcanic: '火山喷发：熔岩流与 SO₂ 羽流活跃，避开洛基火山口下风向。',
      haze: '二氧化硫霾：局部能见度下降，呼吸设备需过滤酸性气溶胶。',
    },
  },
};

export default io;
