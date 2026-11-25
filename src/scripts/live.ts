import { CONDITIONS } from '../lib/conditions';
import { formatLocalDate } from '../lib/format';
import { createForecast } from '../lib/simulate';
import type { ConditionId, Forecast, ForecastSubject } from '../lib/types';

function setText(root: ParentNode, selector: string, value: string): void {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

/**
 * 用页面中预置的天气图标模板替换当前图标。
 * 这样模拟逻辑只负责天气类型，不需要在客户端重复一份 SVG。
 */
function setIcon(scope: ParentNode | null, condition: ConditionId): void {
  if (!scope) return;
  const current = scope.querySelector('.weather-icon');
  if (!current) return;

  const template = document.querySelector<HTMLTemplateElement>(
    `template[data-wi="${condition}"]`,
  );
  const next = template?.content.firstElementChild?.cloneNode(true) as
    | SVGElement
    | undefined;
  if (!next) return;

  next.setAttribute('width', current.getAttribute('width') ?? '32');
  next.setAttribute('height', current.getAttribute('height') ?? '32');
  next.setAttribute('class', current.getAttribute('class') ?? 'weather-icon');
  current.replaceWith(next);
}

function updateHero(forecast: Forecast): void {
  const condition = forecast.current.condition;

  setText(document, '[data-f="current-temp"]', String(forecast.current.tempC));
  setText(document, '[data-f="current-condition"]', CONDITIONS[condition].label);
  setIcon(document.querySelector('.hero__condition'), condition);
  setText(document, '[data-f="current-high"]', String(forecast.current.highC));
  setText(document, '[data-f="current-low"]', String(forecast.current.lowC));
  setText(document, '[data-f="current-time"]', forecast.current.localTime);
  setText(document, '[data-f="current-wind"]', `${forecast.current.windKph} km/h`);
  setText(document, '[data-f="current-event"]', `${forecast.current.eventPct}%`);

  const alert = document.querySelector<HTMLElement>('[data-f="alert"]');
  if (alert) {
    alert.hidden = !forecast.alert;
    setText(alert, '[data-f="alert-text"]', forecast.alert ?? '');
  }
}

function updateHourly(forecast: Forecast, eventLabel: string): void {
  const list = document.querySelector('.hourly__list');
  const items = list
    ? Array.from(list.querySelectorAll<HTMLLIElement>('.hourly__item'))
    : [];
  if (items.length === 0) return;

  const start = Math.round(forecast.current.localHour) % 24;

  items.forEach((item, index) => {
    const hour = (start + index) % 24;
    const point = forecast.hourly[hour];
    if (!point) return;

    const isNow = index === 0;
    item.dataset.hour = String(hour);
    item.classList.toggle('hourly__item--now', isNow);
    if (isNow) item.setAttribute('aria-current', 'time');
    else item.removeAttribute('aria-current');

    setText(item, '.hourly__time', isNow ? '现在' : point.label);
    setText(item, '.hourly__event', `${point.eventPct}%`);
    setText(item, '.hourly__temp', `${point.tempC}°`);

    const event = item.querySelector('.hourly__event');
    if (event) event.setAttribute('title', `${eventLabel} ${point.eventPct}%`);

    setIcon(item, point.condition);
  });
}

function updateDaily(forecast: Forecast, eventLabel: string): void {
  const rows = Array.from(document.querySelectorAll<HTMLLIElement>('.daily__row'));
  if (rows.length === 0) return;

  const min = Math.min(...forecast.daily.map((day) => day.lowC));
  const max = Math.max(...forecast.daily.map((day) => day.highC));
  const span = Math.max(1, max - min);

  rows.forEach((row, index) => {
    const day = forecast.daily[index];
    if (!day) return;

    const start = ((day.lowC - min) / span) * 100;
    const width = Math.max(7, ((day.highC - day.lowC) / span) * 100);

    setText(row, '.daily__label', day.label);
    setText(row, '.daily__event', `${day.eventPct}%`);
    setText(row, '.daily__low', `${day.lowC}°`);
    setText(row, '.daily__high', `${day.highC}°`);
    setText(
      row,
      '.visually-hidden',
      `${CONDITIONS[day.condition].label}，${eventLabel} ${day.eventPct}%`,
    );

    const event = row.querySelector('.daily__event');
    if (event) event.setAttribute('title', `${eventLabel} ${day.eventPct}%`);

    const bar = row.querySelector<HTMLElement>('.daily__bar');
    if (bar) {
      bar.style.setProperty('--range-start', `${start.toFixed(2)}%`);
      bar.style.setProperty(
        '--range-width',
        `${Math.min(100 - start, width).toFixed(2)}%`,
      );
    }

    setIcon(row.querySelector('.daily__icon'), day.condition);
  });
}

function updateDetails(forecast: Forecast): void {
  const tiles = Array.from(document.querySelectorAll<HTMLElement>('.detail'));

  forecast.details.forEach((detail, index) => {
    const tile = tiles[index];
    if (!tile) return;

    setText(tile, '.detail__label', detail.label);
    setText(tile, '.detail__value', detail.value);

    const sub = tile.querySelector('.detail__sub');
    if (detail.sub) {
      if (sub) {
        sub.textContent = detail.sub;
      } else {
        const element = document.createElement('dd');
        element.className = 'detail__sub';
        element.textContent = detail.sub;
        tile.append(element);
      }
    } else {
      sub?.remove();
    }
  });
}

function updateCards(forecasts: Map<string, Forecast>): void {
  document.querySelectorAll<HTMLElement>('.body-card[data-body-id]').forEach((card) => {
    const forecast = forecasts.get(card.dataset.bodyId ?? '');
    if (!forecast) return;

    const condition = forecast.current.condition;
    setText(card, '[data-f="card-temp"]', `${forecast.current.tempC}°`);
    setText(card, '[data-f="card-condition-label"]', CONDITIONS[condition].label);
    setText(card, '[data-f="card-wind"]', `${forecast.current.windKph} km/h`);
    setText(card, '[data-f="card-time"]', forecast.current.localTime);
    setIcon(card.querySelector('[data-f="card-condition"]'), condition);
  });

  const earth = forecasts.get('earth');
  if (earth && document.querySelector('[data-f="earth-temp"]')) {
    setText(document, '[data-f="earth-temp"]', `${earth.current.tempC}°`);
    setText(
      document,
      '[data-f="earth-condition"]',
      CONDITIONS[earth.current.condition].label,
    );
  }
}

function updateRelations(forecasts: Map<string, Forecast>): void {
  document.querySelectorAll<HTMLElement>('[data-moon-id]').forEach((row) => {
    const forecast = forecasts.get(row.dataset.moonId ?? '');
    if (!forecast) return;

    setText(row, '[data-f="relation-temp"]', `${forecast.current.tempC}°`);
    setText(
      row,
      '[data-f="relation-condition"]',
      CONDITIONS[forecast.current.condition].label,
    );
    setIcon(row.querySelector('.relation__weather'), forecast.current.condition);
  });
}

function updateDates(now: Date): void {
  const label = formatLocalDate(now);

  const homeDate = document.querySelector<HTMLTimeElement>('[data-f="home-date"]');
  if (homeDate) {
    homeDate.textContent = label;
    homeDate.dateTime = now.toISOString();
  }

  const generated = document.querySelector<HTMLTimeElement>(
    'time[data-f="generated"]',
  );
  if (generated) {
    generated.textContent = label;
    generated.dateTime = now.toISOString();
  }
}

function boot(): void {
  const dataElement = document.getElementById('live-bodies');
  if (!dataElement) return;

  let subjects: ForecastSubject[];
  try {
    subjects = JSON.parse(dataElement.textContent ?? '[]') as ForecastSubject[];
  } catch {
    return;
  }
  if (!Array.isArray(subjects) || subjects.length === 0) return;

  const pageBodyId = document.body.dataset.bodyId;
  const currentSubject = pageBodyId
    ? subjects.find((subject) => subject.id === pageBodyId)
    : undefined;
  const eventLabel = currentSubject?.climate.eventLabel ?? '';

  const update = (): void => {
    const now = new Date();
    const forecasts = new Map(
      subjects.map((subject) => [subject.id, createForecast(subject, now)]),
    );

    updateDates(now);
    updateCards(forecasts);
    updateRelations(forecasts);

    if (pageBodyId) {
      const forecast = forecasts.get(pageBodyId);
      if (forecast) {
        updateHero(forecast);
        updateHourly(forecast, eventLabel);
        updateDaily(forecast, eventLabel);
        updateDetails(forecast);
      }
    }
  };

  update();
  window.setInterval(update, 60_000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) update();
  });
}

boot();
