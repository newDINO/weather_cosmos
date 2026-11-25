import type { Body } from '../../lib/types';

const neptune: Body = {
  id: 'neptune',
  name: '海王星',
  en: 'Neptune',
  kind: 'planet',
  tagline: '太阳系最狂暴的超音速风',
  station: '赤道带 · 1 bar 云层',
  palette: {
    skyTop: '#0b1b3a',
    skyMid: '#12366b',
    skyBottom: '#060c18',
    accent: '#8fb8ff',
    orb1: '#9cc4ff',
    orb2: '#3e6fd1',
    orb3: '#142a5e',
    glow: 'rgba(143, 184, 255, 0.3)',
  },
  orb: { style: 'banded' },
  rotationHours: 16.11,
  dayLengthLabel: '16 小时 6 分',
  localPhase: 0.19,
  facts: [
    { label: '1 bar 处温度', value: '-201 °C' },
    { label: '最高风速', value: '约 2,100 km/h' },
    { label: '公转周期', value: '165 个地球年' },
    { label: '自转周期', value: '16 小时 6 分' },
  ],
  observations: [
    {
      year: '1989',
      title: 'Voyager 2 发现大暗斑',
      text: '旅行者 2 号在海王星南半球看到一个地球大小的暗斑，并测得太阳系最快的行星风。',
    },
    {
      year: '1994',
      title: '大暗斑消失',
      text: '哈勃的后续观测发现原来的暗斑已经不见，而北半球又出现了新的暗斑与明亮云团。',
    },
    {
      year: '2022',
      title: 'JWST 首次清晰拍到海王星环',
      text: '红外观测同时显示出高空甲烷云与环系的细节，补上了旅行者 2 号之后的长期空白。',
    },
  ],
  sources: [
    { label: 'NASA · Neptune Facts', url: 'https://science.nasa.gov/neptune/facts/' },
    { label: 'NASA · Webb', url: 'https://science.nasa.gov/mission/webb/' },
  ],
  climate: {
    meanC: -201,
    diurnalC: 1.5,
    noiseC: 0.8,
    dayNoiseC: 0.8,
    windKph: 800,
    gustKph: 2100,
    pressureHpa: 1000,
    humidityPct: null,
    visibilityKm: 30,
    solarRatio: 0.0011,
    gravity: 11.15,
    eventLabel: '风暴概率',
    baseEventPct: 38,
    weights: {
      storm: 25,
      windy: 30,
      cloudy: 25,
      thunderstorm: 10,
      haze: 10,
    },
    hazards: {
      storm: '超音速风：云顶风速可达 2,100 km/h，超过海王星上的声速。',
    },
  },
};

export default neptune;
