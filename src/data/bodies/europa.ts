import type { Body } from '../../lib/types';

const europa: Body = {
  id: 'europa',
  name: '木卫二 · 欧罗巴',
  en: 'Europa',
  kind: 'moon',
  parent: '木星',
  tagline: '冰壳下的海洋，向太空喷出水汽',
  station: '康纳马拉混沌 · 冰面站',
  palette: {
    skyTop: '#14202a',
    skyMid: '#233a4a',
    skyBottom: '#080f14',
    accent: '#c8ecff',
    orb1: '#e8f6ff',
    orb2: '#a9cede',
    orb3: '#557085',
    glow: 'rgba(200, 236, 255, 0.28)',
  },
  orb: { style: 'icy' },
  rotationHours: 85.2,
  dayLengthLabel: '3.55 个地球日',
  localPhase: 0.58,
  facts: [
    { label: '表面温度', value: '约 -160 °C' },
    { label: '大气', value: '极稀薄 O₂（约 10⁻¹² bar）' },
    { label: '冰壳厚度', value: '约 15–25 km' },
    { label: '公转周期', value: '3.55 个地球日' },
  ],
  observations: [
    {
      year: '1979',
      title: 'Voyager 2 看到冰裂纹',
      text: '旅行者 2 号拍下纵横交错的褐色条纹，暗示冰壳之下存在流动的海洋。',
    },
    {
      year: '2013–2016',
      title: '哈勃疑似发现水汽羽流',
      text: '多次紫外观测在欧罗巴南极附近看到水汽吸收信号，可能与冰壳裂缝喷发有关。',
    },
    {
      year: '2024',
      title: 'Europa Clipper 发射',
      text: 'NASA 的欧罗巴快船正在前往木星系统，计划于 2030 年抵达并评估冰下海洋的宜居性。',
    },
  ],
  sources: [
    { label: 'NASA · Europa Facts', url: 'https://science.nasa.gov/jupiter/moons/europa/facts/' },
    { label: 'NASA · Europa Clipper', url: 'https://science.nasa.gov/mission/europa-clipper/' },
  ],
  climate: {
    meanC: -160,
    diurnalC: 12,
    noiseC: 2,
    dayNoiseC: 1.5,
    windKph: 0,
    gustKph: 0,
    pressureHpa: null,
    humidityPct: null,
    visibilityKm: null,
    solarRatio: 0.037,
    gravity: 1.31,
    eventLabel: '喷泉概率',
    baseEventPct: 30,
    weights: { clear: 48, geyser: 32, 'ice-haze': 10, aurora: 10 },
    hazards: {
      geyser: '水汽羽流活动：冰面站外作业需避开喷流方向，木星辐射带同时处于高位。',
    },
  },
};

export default europa;
