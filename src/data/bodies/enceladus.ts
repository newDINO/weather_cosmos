import type { Body } from '../../lib/types';

const enceladus: Body = {
  id: 'enceladus',
  name: '土卫二 · 恩克拉多斯',
  en: 'Enceladus',
  kind: 'moon',
  parent: '土星',
  tagline: '南极虎纹喷出冰粒，喂养土星 E 环',
  station: '虎纹裂隙 · 南极站',
  palette: {
    skyTop: '#101f2b',
    skyMid: '#1c3a4a',
    skyBottom: '#060d12',
    accent: '#d6f4ff',
    orb1: '#f2fbff',
    orb2: '#bfe0ec',
    orb3: '#5f7f8c',
    glow: 'rgba(214, 244, 255, 0.28)',
  },
  orb: { style: 'icy' },
  rotationHours: 32.9,
  dayLengthLabel: '1.37 个地球日',
  localPhase: 0.71,
  facts: [
    { label: '表面温度', value: '约 -198 °C' },
    { label: '喷泉流量', value: '约 250 kg/s' },
    { label: '供给', value: '土星 E 环冰粒' },
    { label: '公转周期', value: '1.37 个地球日' },
  ],
  observations: [
    {
      year: '2005',
      title: 'Cassini 发现南极喷泉',
      text: '卡西尼号在土卫二南极看到四条“虎纹”裂缝，冰粒与水汽持续喷向太空。',
    },
    {
      year: '2015',
      title: '穿越羽流',
      text: '卡西尼号直接穿过喷流，探测到氢气、盐与有机分子，暗示冰下存在热液环境。',
    },
    {
      year: '2023',
      title: 'JWST 看到超长水汽羽流',
      text: '韦布望远镜观测到一条延伸约 1 万公里的水汽羽流，远超探测器此前测到的范围。',
    },
  ],
  sources: [
    { label: 'NASA · Enceladus Facts', url: 'https://science.nasa.gov/saturn/moons/enceladus/facts/' },
    { label: 'NASA · Cassini', url: 'https://science.nasa.gov/mission/cassini/' },
  ],
  climate: {
    meanC: -198,
    diurnalC: 2,
    noiseC: 1,
    dayNoiseC: 0.8,
    windKph: 0,
    gustKph: 0,
    pressureHpa: null,
    humidityPct: null,
    visibilityKm: null,
    solarRatio: 0.011,
    gravity: 0.11,
    eventLabel: '喷泉概率',
    baseEventPct: 45,
    weights: { geyser: 40, clear: 38, snow: 12, 'ice-haze': 10 },
    hazards: {
      geyser: '南极虎纹喷泉活跃：冰粒喷发高度可达数百公里，着陆区能见度骤降。',
    },
  },
};

export default enceladus;
