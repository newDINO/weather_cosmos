import type { Body } from '../../lib/types';

const moon: Body = {
  id: 'moon',
  name: '月球',
  en: 'The Moon',
  kind: 'moon',
  parent: '地球',
  tagline: '没有风，只有昼夜 300 度的温差',
  station: '静海 · 月面站',
  palette: {
    skyTop: '#17171c',
    skyMid: '#2a2830',
    skyBottom: '#0a0a0d',
    accent: '#e7e3d8',
    orb1: '#d8d4c9',
    orb2: '#8f8b82',
    orb3: '#46443f',
    glow: 'rgba(231, 227, 216, 0.22)',
  },
  orb: { style: 'rocky' },
  rotationHours: 708.7,
  dayLengthLabel: '29.5 个地球日',
  localPhase: 0.95,
  facts: [
    { label: '表面温度', value: '-173 – 127 °C' },
    { label: '大气', value: '无（极稀薄外逸层）' },
    { label: '太阳日', value: '29.5 个地球日' },
    { label: '表面重力', value: '1.62 m/s²' },
  ],
  observations: [
    {
      year: '1969–1972',
      title: 'Apollo 月面实验',
      text: '阿波罗任务在月面部署温度与热流传感器，首次连续记录月昼与月夜的温度变化。',
    },
    {
      year: '2009',
      title: 'LCROSS 确认极区水冰',
      text: '月球勘测轨道器与 LCROSS 撞击永久阴影坑，探测到水冰与含氢物质。',
    },
    {
      year: '2019',
      title: '嫦娥四号实测月夜',
      text: '玉兔二号在月球背面记录到低至约 -190 °C 的月夜地表温度，为热模型提供新数据。',
    },
  ],
  sources: [
    { label: 'NASA · Moon Facts', url: 'https://science.nasa.gov/moon/facts/' },
    { label: 'NASA · LRO', url: 'https://science.nasa.gov/mission/lro/' },
  ],
  climate: {
    meanC: -23,
    diurnalC: 150,
    noiseC: 3,
    dayNoiseC: 2,
    windKph: 0,
    gustKph: 0,
    pressureHpa: null,
    humidityPct: null,
    visibilityKm: null,
    solarRatio: 1,
    gravity: 1.62,
    eventLabel: '太阳风事件概率',
    baseEventPct: 20,
    weights: { clear: 72, 'solar-wind': 18, dust: 10 },
    hazards: {
      'solar-wind': '太阳风事件：月面直接暴露，舱外活动需关注辐射剂量。',
    },
  },
};

export default moon;
