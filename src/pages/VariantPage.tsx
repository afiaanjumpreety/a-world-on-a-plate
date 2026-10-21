import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { childrenOf, countryRefs, getVariant, parentOf } from '../data';
import { country } from '../data/countries';
import type { DishFamily, Variant } from '../data/types';
import { CompareTable, CountryTag, VariantCard, mapLabel, originLabel } from '../components/Dish';
import { RecipeView } from '../components/Recipe';
import { WorldMap, type MapPin } from '../components/WorldMap';
import { useSaved } from '../lib/store';
import { NotFound } from './NotFound';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function VariantPage() {
  const { familyId, variantId } = useParams();
  const ref = getVariant(familyId, variantId);
  useDocumentTitle(ref ? `${ref.variant.name} (${country(ref.variant.country).name})` : undefined);
  const { isSaved, toggle } = useSaved();
  if (!ref) return <NotFound />;
  const { family, variant } = ref;
  const key = `${family.id}/${variant.id}`;
  const saved = isSaved(key);
  const parent = parentOf(family, variant);
  const children = childrenOf(family, variant.id);
  const c = country(variant.country);
  const idx = family.variants.indexOf(variant);
  const prev = family.variants[(idx - 1 + family.variants.length) % family.variants.length];
  const next = family.variants[(idx + 1) % family.variants.length];
  const sameCountry = countryRefs(variant.country).filter((r) => r.family.id !== family.id);
  const cousins = family.variants.filter((v) => v.id !== variant.id);
  const [title, gloss] = splitName(variant.name);

  return (
    <article className="variant-page" style={{ ['--c' as string]: family.color }}>
      <header className="variant-hero">
        <div className="wrap variant-hero-inner">
          <div className="variant-hero-copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/dishes">Dishes</Link>
              <span aria-hidden="true">/</span>
              <Link to={`/dish/${family.id}`}>{family.name}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{variant.name}</span>
            </nav>
            <CountryTag code={variant.country} place={variant.place} />
            <h1 className="display">{title}</h1>
            {gloss && <p className="variant-gloss">{gloss}</p>}
            {variant.native && variant.native.length > 0 && (
              <ul className="native-names">
                {variant.native.map((n, k) => (
                  <li key={k}>
                    <span className="native-text">{n.text}</span>
                    <span className="native-meta">
                      {n.lang}
                      {n.translit ? ` · ${n.translit}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="lede">{variant.summary}</p>
            <div className="variant-actions">
              <a href="#recipe" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('recipe')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Jump to recipe ↓
              </a>
              <button type="button" className={`btn btn-ghost save-btn ${saved ? 'is-saved' : ''}`} onClick={() => toggle(key)} aria-pressed={saved}>
                <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                  <path
                    d="M10 17s-6.5-3.8-6.5-8.6A3.6 3.6 0 0 1 10 6a3.6 3.6 0 0 1 6.5 2.4C16.5 13.2 10 17 10 17z"
                    fill={saved ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                {saved ? 'In your cookbook' : 'Save to cookbook'}
              </button>
            </div>
          </div>
          <div className="variant-hero-map">
            <LineageMap family={family} variant={variant} parent={parent} />
            <p className="lineage-line">
              <span className="eyebrow">Arrived</span>
              {variant.arrival}
              {parent ? (
                <>
                  {' '}
                  Grew out of <Link to={`/dish/${family.id}/${parent.id}`}>{parent.name}</Link>.
                </>
              ) : (
                <> Descends straight from the {family.origin.region} original.</>
              )}
            </p>
          </div>
        </div>
      </header>

      <section className="wrap section variant-story">
        <div className="prose dropcap">
          {variant.story.map((p, k) => (
            <p key={k}>{p}</p>
          ))}
        </div>
        <aside className="variant-facts">
          <div className="fact-card">
            <h2 className="side-title">What makes it this version</h2>
            <ul className="check-list">
              {variant.signature.map((s, k) => (
                <li key={k}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="fact-card">
            <h2 className="side-title">On the table</h2>
            <p className="fact-when">{variant.whenEaten}</p>
            <ul className="chips-static">
              {variant.servedWith.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          {children.length > 0 && (
            <div className="fact-card">
              <h2 className="side-title">Carried onward to</h2>
              <ul className="link-list">
                {children.map((ch) => (
                  <li key={ch.id}>
                    <Link to={`/dish/${family.id}/${ch.id}`}>
                      {ch.name} <span>· {country(ch.country).name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <div className="wrap">
        <RecipeView family={family} variant={variant} />
      </div>

      <section className="wrap section" aria-labelledby="vs-title">
        <div className="section-head">
          <div>
            <h2 id="vs-title" className="section-title">
              How it compares
            </h2>
            <p className="section-sub">{variant.name} is highlighted against its {cousins.length} cousins.</p>
          </div>
          <Link to={`/dish/${family.id}`} className="link-arrow">
            The {family.name} story →
          </Link>
        </div>
        <CompareTable family={family} highlight={variant.id} />
      </section>

      <section className="wrap section" aria-labelledby="cousins-title">
        <h2 id="cousins-title" className="section-title">
          Cousins around the world
        </h2>
        <div className="scroller">
          {cousins.map((v) => (
            <VariantCard key={v.id} family={family} variant={v} />
          ))}
        </div>
      </section>

      {sameCountry.length > 0 && (
        <section className="wrap section" aria-labelledby="same-title">
          <h2 id="same-title" className="section-title">
            Also cooked in {c.name}
          </h2>
          <div className="scroller">
            {sameCountry.map((r) => (
              <VariantCard key={`${r.family.id}-${r.variant.id}`} family={r.family} variant={r.variant} showFamily />
            ))}
          </div>
        </section>
      )}

      <nav className="wrap pager" aria-label="Other versions">
        <Link to={`/dish/${family.id}/${prev.id}`}>
          <span className="eyebrow">← Previous</span>
          {prev.name}
        </Link>
        <Link to={`/dish/${family.id}/${next.id}`} className="pager-next">
          <span className="eyebrow">Next →</span>
          {next.name}
        </Link>
      </nav>
    </article>
  );
}

function LineageMap({ family, variant, parent }: { family: DishFamily; variant: Variant; parent?: Variant }) {
  const layers = useMemo(() => {
    const from = parent?.coords ?? family.origin.coords;
    const fills: Record<string, string> = {};
    const here = country(variant.country).numeric;
    const there = country(parent?.country ?? family.origin.country).numeric;
    if (there) fills[there] = `color-mix(in oklab, ${family.color} 22%, var(--land))`;
    if (here) fills[here] = `color-mix(in oklab, ${family.color} 55%, var(--land))`;
    const pins: MapPin[] = [
      { id: 'from', coords: from, color: family.color, kind: parent ? 'variant' : 'origin', label: parent ? mapLabel(parent.name) : originLabel(family), dim: true },
      { id: 'here', coords: variant.coords, color: family.color, kind: 'variant', label: variant.place },
    ];
    return {
      fills,
      pins,
      arcs: [{ id: `${family.id}/${variant.id}`, from, to: variant.coords, color: family.color, delay: 0.4 }],
      frame: [from, variant.coords],
    };
  }, [family, variant, parent]);
  return (
    <WorldMap
      key={variant.id}
      className="map-mini"
      ariaLabel={`Map: ${variant.name} in ${variant.place}`}
      {...layers}
      labels="all"
      activePinId="here"
      zoomable={false}
      maxFrameZoom={7}
      interactive={new Set()}
    />
  );
}

/** "Doodh Cha (Bangladeshi Milk Tea)" → ["Doodh Cha", "Bangladeshi Milk Tea"] */
function splitName(name: string): [string, string | null] {
  const m = name.match(/^(.*?)\s*\((.+)\)\s*$/);
  return m ? [m[1], m[2]] : [name, null];
}
