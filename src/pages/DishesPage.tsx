import { useMemo, useState } from 'react';
import { allVariants, families } from '../data';
import { REGIONS, country, type Region } from '../data/countries';
import type { Category } from '../data/types';
import { FamilyCard, VariantCard } from '../components/Dish';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { totalMinutes } from '../lib/format';

const CATEGORY_LABEL: Record<Category, string> = {
  bread: 'Breads',
  dumpling: 'Dumplings',
  rice: 'Rice',
  pastry: 'Pastries',
  grill: 'Grills & meat',
  noodles: 'Noodles',
  dessert: 'Sweets',
  drink: 'Drinks',
};

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function DishesPage() {
  useDocumentTitle('All dishes');
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<Category | 'all'>('all');
  const [region, setRegion] = useState<Region | 'all'>('all');
  const [quick, setQuick] = useState(false);

  const cats = [...new Set(families.map((f) => f.category))];
  const regions = REGIONS.filter((r) => allVariants.some((v) => country(v.variant.country).region === r));

  const results = useMemo(() => {
    const terms = norm(q).split(/\s+/).filter(Boolean);
    return allVariants.filter(({ family, variant }) => {
      if (cat !== 'all' && family.category !== cat) return false;
      if (region !== 'all' && country(variant.country).region !== region) return false;
      if (quick && totalMinutes(variant.recipe) > 60) return false;
      if (!terms.length) return true;
      const hay = norm(
        [variant.name, family.name, ...family.alsoKnownAs, country(variant.country).name, variant.place, variant.summary, ...(variant.native ?? []).map((n) => `${n.text} ${n.translit ?? ''}`)].join(' '),
      );
      return terms.every((t) => hay.includes(t));
    });
  }, [q, cat, region, quick]);

  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">The menu</span>
        <h1 className="display small">Every dish, every version</h1>
        <p className="lede">Start with a family to learn its story, or filter all {allVariants.length} versions to find something to cook tonight.</p>
      </header>

      <div className="family-grid">
        {families.map((f) => (
          <FamilyCard key={f.id} family={f} compact />
        ))}
      </div>

      <section className="section" aria-labelledby="all-title">
        <h2 id="all-title" className="section-title">
          All versions
        </h2>
        <div className="filters">
          <label className="search-field">
            <span className="sr-only">Search versions</span>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, country or ingredient story…" type="search" />
          </label>
          <div className="chip-row" role="group" aria-label="Category">
            <button type="button" className={`chip ${cat === 'all' ? 'is-on' : ''}`} onClick={() => setCat('all')} aria-pressed={cat === 'all'}>
              All kinds
            </button>
            {cats.map((c) => (
              <button type="button" key={c} className={`chip ${cat === c ? 'is-on' : ''}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
                {CATEGORY_LABEL[c]}
              </button>
            ))}
          </div>
          <div className="filter-row">
            <label className="select-field">
              <span>Region</span>
              <select value={region} onChange={(e) => setRegion(e.target.value as Region | 'all')}>
                <option value="all">Anywhere</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="toggle-field">
              <input type="checkbox" checked={quick} onChange={(e) => setQuick(e.target.checked)} />
              <span>Ready in an hour or less</span>
            </label>
            <span className="result-count">{results.length} versions</span>
          </div>
        </div>
        {results.length ? (
          <div className="variant-grid">
            {results.map(({ family, variant }) => (
              <VariantCard key={`${family.id}-${variant.id}`} family={family} variant={variant} showFamily />
            ))}
          </div>
        ) : (
          <p className="empty">Nothing matches those filters. Try clearing one.</p>
        )}
      </section>
    </div>
  );
}
