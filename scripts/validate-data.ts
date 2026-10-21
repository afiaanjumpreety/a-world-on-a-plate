/**
 * Checks every dish family for the mistakes that are easy to make by hand:
 * swapped lng/lat, pins outside their country, broken lineage, missing traits.
 * Run with `npm run validate`.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature } from 'geojson';
import type { DishFamily, Unit } from '../src/data/types';
import { COUNTRIES } from '../src/data/countries';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dir = join(root, 'src/data/families');
const topo = JSON.parse(readFileSync(join(root, 'node_modules/world-atlas/countries-50m.json'), 'utf8'));
const shapes = (feature(topo, topo.objects.countries) as unknown as { features: Feature[] }).features;
const UNITS: Unit[] = ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup', 'piece', 'clove', 'pinch', 'sprig', 'stick', 'pod', 'leaf', 'slice', 'bunch'];

let errors = 0;
let warnings = 0;
const err = (m: string) => (errors++, console.log(`  ✗ ${m}`));
const warn = (m: string) => (warnings++, console.log(`  ! ${m}`));

function checkPoint(label: string, code: string, [lng, lat]: [number, number]) {
  const c = COUNTRIES[code];
  if (!c) return err(`${label}: unknown country code ${code} (add it to src/data/countries.ts)`);
  if (Math.abs(lat) > 75 || Math.abs(lng) > 180) return err(`${label}: coords [${lng}, ${lat}] out of range`);
  const shape = shapes.find((s) => String(s.id) === c.numeric);
  if (!shape) return warn(`${label}: no map shape for ${c.name}`);
  if (geoContains(shape, [lng, lat])) return;
  if (geoContains(shape, [lat, lng])) return err(`${label}: coords look swapped — should be [${lat}, ${lng}]`);
  // Coastal cities and small islands can sit just outside 1:50m outlines:
  // accept the point if a nudge of ~35 km in any direction lands inside.
  const d = 0.32;
  const offsets = [[d, 0], [-d, 0], [0, d], [0, -d], [d, d], [-d, -d], [d, -d], [-d, d]];
  if (!offsets.some(([x, y]) => geoContains(shape, [lng + x, lat + y])))
    warn(`${label}: [${lng}, ${lat}] is not inside ${c.name}`);
}

const files = readdirSync(dir).filter((f) => f.endsWith('.ts'));
for (const file of files) {
  const mod = await import(pathToFileURL(join(dir, file)).href);
  for (const fam of Object.values(mod) as DishFamily[]) {
    if (!fam || typeof fam !== 'object' || !('variants' in fam)) continue;
    console.log(`\n${fam.name} (${file}) — ${fam.variants.length} variants`);
    if (`${fam.id}.ts` !== file) warn(`id "${fam.id}" does not match file name`);
    checkPoint('origin', fam.origin.country, fam.origin.coords);
    const ids = new Set<string>();
    for (const v of fam.variants) {
      const label = v.id;
      if (ids.has(v.id)) err(`${label}: duplicate id`);
      ids.add(v.id);
      checkPoint(label, v.country, v.coords);
      for (const axis of fam.compareAxes) if (!v.traits[axis.key]) err(`${label}: missing trait "${axis.key}"`);
      for (const key of Object.keys(v.traits))
        if (!fam.compareAxes.some((a) => a.key === key)) warn(`${label}: trait "${key}" is not a compare axis`);
      for (const g of v.recipe.ingredients)
        for (const ing of g.items) if (ing.unit && !UNITS.includes(ing.unit)) err(`${label}: bad unit ${ing.unit}`);
      if (v.recipe.steps.length < 4) warn(`${label}: only ${v.recipe.steps.length} steps`);
    }
    for (const v of fam.variants) {
      if (v.from !== 'origin' && !ids.has(v.from)) err(`${v.id}: from "${v.from}" does not exist`);
      // Walk up the lineage to catch cycles.
      const seen = new Set<string>();
      let cur: string = v.id;
      while (cur !== 'origin') {
        if (seen.has(cur)) {
          err(`${v.id}: lineage cycle`);
          break;
        }
        seen.add(cur);
        cur = fam.variants.find((x) => x.id === cur)?.from ?? 'origin';
      }
    }
  }
}

console.log(`\n${errors} errors, ${warnings} warnings across ${files.length} files`);
process.exit(errors ? 1 : 0);
