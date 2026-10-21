import type { Ingredient, Recipe, Unit } from '../data/types';

const FRACTIONS: [number, string][] = [
  [0.125, '⅛'],
  [0.25, '¼'],
  [1 / 3, '⅓'],
  [0.5, '½'],
  [2 / 3, '⅔'],
  [0.75, '¾'],
];

const trim = (s: string) => s.replace(/\.0+$/, '').replace(/(\.\d*?)0+$/, '$1');

/** Turn a scaled quantity into something a cook would write down. */
export function formatQty(qty: number, unit?: Unit): string {
  if (unit === 'g' || unit === 'ml') {
    if (qty >= 100) return String(Math.round(qty / 5) * 5);
    if (qty >= 10) return String(Math.round(qty));
    return trim(qty.toFixed(1));
  }
  if (unit === 'kg' || unit === 'l') return trim(qty.toFixed(2));

  let whole = Math.floor(qty);
  const frac = qty - whole;
  if (frac < 0.06) return String(whole || trim(qty.toFixed(2)));
  if (frac > 0.94) return String(whole + 1);
  let best = FRACTIONS[0];
  for (const f of FRACTIONS) if (Math.abs(f[0] - frac) < Math.abs(best[0] - frac)) best = f;
  if (Math.abs(best[0] - frac) > 0.08) return trim(qty.toFixed(1));
  return `${whole > 0 ? whole : ''}${best[1]}`;
}

const PLURAL: Partial<Record<Unit, string>> = {
  cup: 'cups',
  clove: 'cloves',
  pinch: 'pinches',
  sprig: 'sprigs',
  stick: 'sticks',
  pod: 'pods',
  leaf: 'leaves',
  slice: 'slices',
  bunch: 'bunches',
};

export function formatUnit(unit: Unit | undefined, qty: number): string {
  if (!unit || unit === 'piece') return '';
  if (qty > 1 && PLURAL[unit]) return PLURAL[unit]!;
  return unit;
}

export function formatIngredientAmount(ing: Ingredient, scale: number): string {
  if (ing.qty === undefined) return '';
  const q = ing.qty * scale;
  return [formatQty(q, ing.unit), formatUnit(ing.unit, q)].filter(Boolean).join(' ');
}

export function formatMinutes(m: number): string {
  if (m <= 0) return '—';
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return rest ? `${h} hr ${rest} min` : `${h} hr`;
}

export function totalMinutes(r: Recipe): number {
  return r.prepMinutes + r.cookMinutes + r.restMinutes;
}

export function plural(n: number, one: string, many = `${one}s`): string {
  return `${n} ${n === 1 ? one : many}`;
}
