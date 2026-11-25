import type { Body } from '../../lib/types';
import mercury from './mercury';
import venus from './venus';
import earth from './earth';
import mars from './mars';
import jupiter from './jupiter';
import saturn from './saturn';
import uranus from './uranus';
import neptune from './neptune';
import pluto from './pluto';
import moon from './moon';
import europa from './europa';
import io from './io';
import titan from './titan';
import enceladus from './enceladus';
import triton from './triton';

/** 展示顺序：由内向外排列行星，随后是卫星 */
export const BODIES: Body[] = [
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
  moon,
  europa,
  io,
  titan,
  enceladus,
  triton,
];

export const PLANETS: Body[] = BODIES.filter(
  (body) => body.kind === 'planet' || body.kind === 'dwarf',
);

export const MOONS: Body[] = BODIES.filter((body) => body.kind === 'moon');

export function getBody(id: string): Body | undefined {
  return BODIES.find((body) => body.id === id);
}

export function getNeighbors(id: string): { prev: Body; next: Body } {
  const index = BODIES.findIndex((body) => body.id === id);
  const safeIndex = index < 0 ? 0 : index;
  return {
    prev: BODIES[(safeIndex - 1 + BODIES.length) % BODIES.length],
    next: BODIES[(safeIndex + 1) % BODIES.length],
  };
}

export function bodyKindLabel(body: Body): string {
  if (body.kind === 'dwarf') return '矮行星';
  if (body.kind === 'moon') return `卫星 · ${body.parent ?? ''}`.trim();
  return '行星';
}
