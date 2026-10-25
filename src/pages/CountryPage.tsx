import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { countryRefs, parentOf } from '../data';
import { country, COUNTRIES } from '../data/countries';
import { VariantCard } from '../components/Dish';
import { Motif } from '../components/Motif';
import { WorldMap, type MapArc, type MapPin } from '../components/WorldMap';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { NotFound } from './NotFound';
import { plural } from '../lib/format';

export function CountryPage() {
  const { code = '' } = useParams();
  const c = COUNTRIES[code];
  const refs = countryRefs(code);
  useDocumentTitle(c?.name);

  // Arcs show where each of this country's dishes came from.
  const layers = useMemo(() => {
    const pins: MapPin[] = [];
    const arcs: MapArc[] = [];
    const fills: Record<string, string> = {};
    if (c?.numeric) fills[c.numeric] = 'color-mix(in oklab, var(--accent) 55%, var(--card))';
    refs.forEach(({ family, variant }, i) => {
      const parent = parentOf(family, variant);
      const from = parent?.coords ?? family.origin.coords;
      pins.push({ id: `${family.id}/${variant.id}`, coords: variant.coords, color: family.color, kind: 'variant', label: variant.name });
      pins.push({ id: `${family.id}/from`, coords: from, color: family.color, kind: 'dot', label: parent?.name ?? family.origin.region });
      arcs.push({ id: `${family.id}/${variant.id}`, from, to: variant.coords, color: family.color, delay: 0.3 + i * 0.15 });
      const pc = country(parent?.country ?? family.origin.country).numeric;
      if (pc && pc !== c?.numeric) fills[pc] ??= `color-mix(in oklab, ${family.color} 25%, var(--land))`;
    });
    return { pins, arcs, fills, frame: pins.map((p) => p.coords) };
  }, [c, refs]);

  if (!c) return <NotFound />;
  const familiesHere = [...new Map(refs.map((r) => [r.family.id, r.family])).values()];

  return (
    <div className="country-page">
      <header className="wrap page-head">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/countries">Countries</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{c.name}</span>
        </nav>
        <span className="eyebrow">{c.region}</span>
        <h1 className="display small">{c.name}</h1>
        <p className="lede">
          {refs.length
            ? `${plural(refs.length, 'dish', 'dishes')} from ${plural(familiesHere.length, 'family', 'families')}. The arcs show where each one arrived from.`
            : 'No dishes from here in the atlas yet.'}
        </p>
        <ul className="chips-static">
          {familiesHere.map((f) => (
            <li key={f.id} style={{ ['--c' as string]: f.color }}>
              <Link to={`/dish/${f.id}`} className="chip-link">
                <Motif id={f.motif} size={18} />
                {f.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {refs.length > 0 && (
        <>
          <section className="wrap section">
            <WorldMap className="map-tall" ariaLabel={`Where ${c.name}'s dishes came from`} {...layers} labels="all" maxFrameZoom={4} interactive={new Set()} />
          </section>
          <section className="wrap section">
            <div className="variant-grid">
              {refs.map(({ family, variant }) => (
                <VariantCard key={`${family.id}-${variant.id}`} family={family} variant={variant} showFamily />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
