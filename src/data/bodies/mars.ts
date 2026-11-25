import type { Body } from '../../lib/types';

const mars: Body = {
  id: 'mars',
  name: '火星',
  en: 'Mars',
  kind: 'planet',
  tagline: '稀薄二氧化碳大气与全球沙尘暴',
  station: '耶泽罗撞击坑 · 漫游车气象站',
  palette: {
    skyTop: '#2a1a14',
    skyMid: '#4a2a1c',
    skyBottom: '#120b09',
    accent: '#ff9a6b',
    orb1: '#e8a276',
    orb2: '#b45f3f',
    orb3: '#5d2b1c',
    glow: 'rgba(255, 154, 107, 0.3)',
  },
  orb: { style: 'rocky' },
  rotationHours: 24.66,
  dayLengthLabel: '24 小时 39 分',
  localPhase: 0.61,
  facts: [
    { label: '平均温度', value: '-63 °C' },
    { label: '地表气压', value: '约 6.1 hPa' },
    { label: '大气成分', value: '95% CO₂' },
    { label: '1 sol', value: '24 小时 39 分' },
  ],
  observations: [
    {
      year: '1976',
      title: 'Viking 首次长期监测火星天气',
      text: '两台着陆器记录到气压的季节变化：冬季二氧化碳在极区凝华，大气被“抽薄”。',
    },
    {
      year: '2018',
      title: '全球沙尘暴',
      text: '一场席卷火星的沙尘暴让天空变成暗橙色，依靠太阳能的机遇号最终失联。',
    },
    {
      year: '2021–',
      title: '毅力号 MEDA 气象站',
      text: '耶泽罗撞击坑的传感器持续记录尘卷风、昼夜温差与近地表风速，为火星天气预报提供实测样本。',
    },
  ],
  sources: [
    { label: 'NASA · Mars Facts', url: 'https://science.nasa.gov/mars/facts/' },
    { label: 'NASA · Perseverance 科学仪器', url: 'https://science.nasa.gov/mission/mars-2020-perseverance/science-instruments/' },
  ],
  climate: {
    meanC: -62,
    diurnalC: 70,
    noiseC: 4,
    dayNoiseC: 3,
    windKph: 25,
    gustKph: 90,
    pressureHpa: 6.1,
    humidityPct: 0.04,
    visibilityKm: 10,
    solarRatio: 0.43,
    gravity: 3.71,
    eventLabel: '扬尘概率',
    baseEventPct: 22,
    weights: {
      clear: 30,
      dust: 20,
      'dust-storm': 10,
      'partly-cloudy': 15,
      'co2-frost': 10,
      windy: 10,
      cloudy: 5,
    },
    hazards: {
      'dust-storm': '区域性沙尘暴：能见度可能降至 1 km 以下，太阳阵列输出下降。',
      windy: '近地表大风：风速可达 80 km/h，但稀薄大气带来的动压仍然有限。',
    },
  },
};

export default mars;
