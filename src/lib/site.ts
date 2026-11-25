import { BUILD_DATE } from './format';

const rawBase = import.meta.env.BASE_URL;

export const BASE_PATH = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export const SITE_NAME = '星际天气';

/** 拼接站内绝对路径，兼容 GitHub Pages 的子路径部署 */
export function url(path = ''): string {
  return `${BASE_PATH}${path.replace(/^\/+/, '')}`;
}

export const BUILD_DATE_LABEL = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
}).format(BUILD_DATE);
