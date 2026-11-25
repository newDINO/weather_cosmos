import type { Body } from '../../lib/types';

const pluto: Body = {
  id: 'pluto',
  name: '冥王星',
  en: 'Pluto',
  kind: 'dwarf',
  tagline: '氮冰升华驱动的稀薄大气',
  station: '斯普特尼克平原 · 冰原站',
  palette: {
    skyTop: '#241d24',
    skyMid: '#3c2f3a',
    skyBottom: '#110d12',
    accent: '#e8c9b8',
    orb1: '#e7d6c8',
    orb2: '#b49a8a',
    orb3: '#5d4a44',
    glow: 'rgba(232, 201, 184, 0.25)',
  },
  orb: { style: 'icy' },
  rotationHours: 153.3,
  dayLengthLabel: '6.4 个地球日',
  localPhase: 0.86,
  facts: [
    { label: '表面温度', value: '约 -229 °C' },
    { label: '大气', value: '约 1 Pa（N₂/CH₄/CO）' },
    { label: '公转周期', value: '248 个地球年' },
    { label: '自转周期', value: '6.4 个地球日' },
  ],
  observations: [
    {
      year: '2015',
      title: 'New Horizons 飞掠',
      text: '新视野号揭开了“心形” Tombaugh Regio：斯普特尼克平原由氮冰构成，表面几乎没有撞击坑。',
    },
    {
      year: '2016',
      title: '氮冰冰川仍在流动',
      text: '地形分析显示，斯普特尼克平原的氮冰会像冰川一样缓慢对流，并不断重塑表面。',
    },
    {
      year: '2021',
      title: '大气随轨道呼吸',
      text: '研究认为冥王星稀薄大气会随公转过程中的日照变化而升华、凝结，形成以 248 年为周期的“呼吸”。',
    },
  ],
  sources: [
    { label: 'NASA · Pluto Facts', url: 'https://science.nasa.gov/dwarf-planets/pluto/facts/' },
    { label: 'NASA · New Horizons', url: 'https://science.nasa.gov/mission/new-horizons/' },
  ],
  climate: {
    meanC: -229,
    diurnalC: 5,
    noiseC: 1.5,
    dayNoiseC: 1.2,
    windKph: 10,
    gustKph: 30,
    pressureHpa: 0.01,
    humidityPct: null,
    visibilityKm: 5,
    solarRatio: 0.0006,
    gravity: 0.62,
    eventLabel: '氮霜概率',
    baseEventPct: 28,
    weights: {
      'ice-haze': 30,
      clear: 28,
      snow: 20,
      windy: 12,
      geyser: 10,
    },
    hazards: {
      geyser: '氮冰喷发可能发生：斯普特尼克平原边缘的冰火山活动仍存在争议。',
    },
  },
};

export default pluto;
