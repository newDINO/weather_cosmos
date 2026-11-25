import type { Body, ForecastSubject } from './types';

/** 只把预报需要的字段发给浏览器，避免把来源、长文等一并塞进页面 */
export function toForecastSubject(body: Body): ForecastSubject {
  return {
    id: body.id,
    rotationHours: body.rotationHours,
    localPhase: body.localPhase,
    dayLengthLabel: body.dayLengthLabel,
    climate: body.climate,
  };
}
