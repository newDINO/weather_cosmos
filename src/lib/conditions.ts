import type { ConditionMeta, ConditionId } from './types';

export const CONDITIONS: Record<ConditionId, ConditionMeta> = {
  clear: { label: '晴', icon: 'sun', tone: '#ffd479' },
  'partly-cloudy': { label: '局部多云', icon: 'partly', tone: '#ffe0a3' },
  cloudy: { label: '多云', icon: 'cloud', tone: '#d7dbe4' },
  overcast: { label: '阴', icon: 'overcast', tone: '#b9c0cd' },
  haze: { label: '霾', icon: 'haze', tone: '#c7b9a1', event: true },
  fog: { label: '雾', icon: 'haze', tone: '#c9d3d9', event: true },
  dust: { label: '浮尘', icon: 'dust', tone: '#e0b183', event: true },
  'dust-storm': {
    label: '沙尘暴',
    icon: 'dust',
    tone: '#eea05f',
    event: true,
    severe: true,
  },
  rain: { label: '小雨', icon: 'rain', tone: '#8fd0ff', event: true },
  'acid-rain': {
    label: '硫酸雨',
    icon: 'rain',
    tone: '#dbe58a',
    event: true,
    severe: true,
  },
  'methane-rain': {
    label: '甲烷阵雨',
    icon: 'rain',
    tone: '#96e3c2',
    event: true,
  },
  thunderstorm: {
    label: '雷暴',
    icon: 'storm',
    tone: '#ffd479',
    event: true,
    severe: true,
  },
  snow: { label: '雪', icon: 'snow', tone: '#dcefff', event: true },
  'co2-frost': {
    label: '干冰霜',
    icon: 'frost',
    tone: '#d8e8f5',
    event: true,
  },
  windy: { label: '大风', icon: 'wind', tone: '#b9d8ee', event: true },
  storm: {
    label: '风暴',
    icon: 'storm',
    tone: '#ffc978',
    event: true,
    severe: true,
  },
  aurora: { label: '极光', icon: 'aurora', tone: '#9ff0d4' },
  volcanic: {
    label: '火山喷发',
    icon: 'volcano',
    tone: '#ff9a5c',
    event: true,
    severe: true,
  },
  geyser: { label: '冰喷泉', icon: 'geyser', tone: '#bdefff', event: true },
  'solar-wind': {
    label: '太阳风增强',
    icon: 'sparkle',
    tone: '#c2b9ff',
    event: true,
  },
  'ice-haze': { label: '冰雾', icon: 'frost', tone: '#d7d9f2', event: true },
};

export function conditionLabel(condition: ConditionId): string {
  return CONDITIONS[condition].label;
}
