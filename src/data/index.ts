import type { CountryCode, DishFamily, Photo, Variant } from './types';
import { country } from './countries';

// Every file in ./families that exports a DishFamily is picked up automatically,
// so adding a dish is just adding a file.
const modules = import.meta.glob<Record<string, unknown>>('./families/*.ts', { eager: true });

/** Preferred display order; families not listed here follow alphabetically. */
const ORDER = [
  'paratha',
  'dumplings',
  'pilaf',
  'samosa',
  'noodle-soup',
  'spit-roast',
  'kofta',
  'empanada',
  'rice-pudding',
  'jalebi',
  'milk-tea',
  'flan',
];

function isFamily(value: unknown): value is DishFamily {
  return (
    typeof value === 'object' &&
    value !== null &&
    'variants' in value &&
    'compareAxes' in value &&
    Array.isArray((value as DishFamily).variants)
  );
}

export const families: DishFamily[] = Object.values(modules)
  .flatMap((mod) => Object.values(mod).filter(isFamily))
  .sort((a, b) => {
    const ia = ORDER.indexOf(a.id);
    const ib = ORDER.indexOf(b.id);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    return a.name.localeCompare(b.name);
  });

export interface VariantRef {
  family: DishFamily;
  variant: Variant;
}

export const allVariants: VariantRef[] = families.flatMap((family) =>
  family.variants.map((variant) => ({ family, variant })),
);

const familyById = new Map(families.map((f) => [f.id, f]));

export function getFamily(id: string | undefined): DishFamily | undefined {
  return id ? familyById.get(id) : undefined;
}

export function getVariant(familyId: string | undefined, variantId: string | undefined): VariantRef | undefined {
  const family = getFamily(familyId);
  const variant = family?.variants.find((v) => v.id === variantId);
  return family && variant ? { family, variant } : undefined;
}

/** All variants grouped by country code. */
export const variantsByCountry: Map<CountryCode, VariantRef[]> = (() => {
  const map = new Map<CountryCode, VariantRef[]>();
  for (const ref of allVariants) {
    const list = map.get(ref.variant.country) ?? [];
    list.push(ref);
    map.set(ref.variant.country, list);
  }
  return map;
})();

/** Countries that appear in the data, most dishes first. */
export const activeCountries = [...variantsByCountry.entries()]
  .map(([code, refs]) => ({
    ...country(code),
    refs,
    familyIds: [...new Set(refs.map((r) => r.family.id))],
  }))
  .sort((a, b) => b.refs.length - a.refs.length || a.name.localeCompare(b.name));

export function countryRefs(code: CountryCode): VariantRef[] {
  return variantsByCountry.get(code) ?? [];
}

/** The variant (or origin) a variant descends from. */
export function parentOf(family: DishFamily, variant: Variant): Variant | undefined {
  return family.variants.find((v) => v.id === variant.from);
}

export function childrenOf(family: DishFamily, id: string): Variant[] {
  return family.variants.filter((v) => v.from === id);
}

// Photos are written by scripts/fetch-photos.ts, one JSON file per family.
const photoModules = import.meta.glob<Record<string, Photo>>('./photos/*.json', { eager: true, import: 'default' });
const photos: Record<string, Photo> = Object.assign({}, ...Object.values(photoModules));

/** The family's hero photo, or a variant's photo when `variantId` is given. */
export function photoFor(familyId: string, variantId?: string): Photo | undefined {
  return photos[variantId ? `${familyId}/${variantId}` : familyId];
}

export const allPhotos = Object.entries(photos)
  .map(([key, photo]) => {
    const [familyId, variantId] = key.split('/');
    return { key, photo, family: getFamily(familyId), variant: variantId ? getVariant(familyId, variantId)?.variant : undefined };
  })
  .filter((p) => p.family);

export const stats = {
  families: families.length,
  variants: allVariants.length,
  countries: variantsByCountry.size,
};
