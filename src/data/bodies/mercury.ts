import type { Body } from '../../lib/types';

const mercury: Body = {
  id: 'mercury',
  name: '水星',
  en: 'Mercury',
  kind: 'planet',
  tagline: '没有大气，只有极端温差与太阳风',
  station: '卡洛里盆地 · 中纬站',
  palette: {
    skyTop: '#191820',
    skyMid: '#2c2422',
    skyBottom: '#0b0a0f',
    accent: '#ffb877',
    orb1: '#d6cbc2',
    orb2: '#8d817a',
    orb3: '#3b3633',
    glow: 'rgba(255, 184, 119, 0.28)',
  },
  orb: { style: 'rocky' },
  rotationHours: 4224,
  dayLengthLabel: '176 个地球日',
  localPhase: 0.13,
  facts: [
    { label: '表面温度', value: '-173 – 427 °C' },
    { label: '大气', value: '外逸层（O、Na、H、He、K）' },
    { label: '太阳日', value: '176 个地球日' },
    { label: '表面重力', value: '3.7 m/s²' },
  ],
  observations: [
    {
      year: '1974',
      title: 'Mariner 10 首次飞掠',
      text: '人类第一次近距离看到水星布满撞击坑的表面，并确认它几乎没有大气、昼夜温差极端。',
    },
    {
      year: '2011–2015',
      title: 'MESSENGER 发现极区水冰',
      text: '探测器在永久阴影坑中确认水冰，同时记录到太阳风与微流星体不断补充钠、氧等外逸层成分。',
    },
    {
      year: '2018',
      title: 'BepiColombo 启程',
      text: 'ESA 与 JAXA 的联合任务正在补充水星磁场、外逸层与表面成分的长期观测。',
    },
  ],
  sources: [
    { label: 'NASA · Mercury Facts', url: 'https://science.nasa.gov/mercury/facts/' },
    { label: 'NASA · MESSENGER', url: 'https://science.nasa.gov/mission/messenger/' },
    { label: 'ESA · BepiColombo', url: 'https://www.esa.int/Science_Exploration/Space_Science/BepiColombo' },
  ],
  climate: {
    meanC: 130,
    diurnalC: 297,
    noiseC: 6,
    dayNoiseC: 3,
    windKph: 0,
    gustKph: 0,
    pressureHpa: null,
    humidityPct: null,
    visibilityKm: null,
    solarRatio: 6.7,
    gravity: 3.7,
    eventLabel: '太阳风事件概率',
    baseEventPct: 18,
    weights: { clear: 58, 'solar-wind': 27, dust: 15 },
    hazards: {
      'solar-wind': '太阳风增强：外逸层被剥离，无磁场屏蔽区域的辐射水平升高。',
    },
  },
};

export default mercury;
