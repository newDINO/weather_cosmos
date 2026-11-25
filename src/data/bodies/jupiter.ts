import type { Body } from '../../lib/types';

const jupiter: Body = {
  id: 'jupiter',
  name: '木星',
  en: 'Jupiter',
  kind: 'planet',
  tagline: '没有地面的气体巨人，风暴比地球还大',
  station: '赤道带 · 1 bar 云层',
  palette: {
    skyTop: '#2b2013',
    skyMid: '#4a3520',
    skyBottom: '#140f0a',
    accent: '#ffd08a',
    orb1: '#e9d3b4',
    orb2: '#c99a6a',
    orb3: '#6b4630',
    glow: 'rgba(255, 208, 138, 0.3)',
  },
  orb: { style: 'banded' },
  rotationHours: 9.925,
  dayLengthLabel: '9 小时 56 分',
  localPhase: 0.27,
  facts: [
    { label: '1 bar 处温度', value: '-108 °C' },
    { label: '赤道风速', value: '约 500 km/h' },
    { label: '自转周期', value: '9 小时 56 分' },
    { label: '大红斑', value: '约 1.6 万 km 宽' },
  ],
  observations: [
    {
      year: '1995',
      title: 'Galileo 探针进入木星大气',
      text: '探针在下降过程中测量了风速、温度与云层结构，发现木星大气比预想的更干燥、更狂暴。',
    },
    {
      year: '2016–',
      title: '朱诺号发现极区气旋群',
      text: '朱诺号在北极看到 8 个环绕极点的气旋，并在云顶之下探测到浅层闪电。',
    },
    {
      year: '2021',
      title: '哈勃持续追踪大红斑',
      text: '这个持续了至少数百年的反气旋仍在缓慢缩小，但边缘风速依然可达 400 km/h 以上。',
    },
  ],
  sources: [
    { label: 'NASA · Jupiter Facts', url: 'https://science.nasa.gov/jupiter/facts/' },
    { label: 'NASA · Juno', url: 'https://science.nasa.gov/mission/juno/' },
  ],
  climate: {
    meanC: -108,
    diurnalC: 2.5,
    noiseC: 1,
    dayNoiseC: 1,
    windKph: 350,
    gustKph: 500,
    pressureHpa: 1000,
    humidityPct: null,
    visibilityKm: 30,
    solarRatio: 0.037,
    gravity: 24.79,
    eventLabel: '风暴概率',
    baseEventPct: 35,
    weights: {
      storm: 26,
      cloudy: 26,
      thunderstorm: 14,
      windy: 18,
      aurora: 8,
      'partly-cloudy': 8,
    },
    hazards: {
      storm: '赤道带强风暴：云顶风速超过 400 km/h，闪电活动增强。',
    },
  },
};

export default jupiter;
