import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { activeCountries, countryRefs, families, getFamily, stats } from '../data';
import { country, countryByNumeric } from '../data/countries';
import { WorldMap, type MapPin } from '../components/WorldMap';
import { CountryTooltip, FamilyCard, Reveal, familyLayers, ConfidenceBadge } from '../components/Dish';
import { Motif, Plate } from '../components/Motif';
import { plural } from '../lib/format';

const STEPS = [22, 38, 54, 70, 86];
function shade(n: number) {
  const i = n >= 8 ? 4 : n >= 6 ? 3 : n >= 4 ? 2 : n >= 2 ? 1 : 0;
  return `color-mix(in oklab, var(--accent) ${STEPS[i]}%, var(--land))`;
}

export function HomePage() {
  const [familyId, setFamilyId] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [hoverPin, setHoverPin] = useState<string | null>(null);
  const family = getFamily(familyId ?? undefined);

  const overview = useMemo(() => {
    const fills: Record<string, string> = {};
    for (const c of activeCountries) if (c.numeric) fills[c.numeric] = shade(c.refs.length);
    const pins: MapPin[] = activeCountries.flatMap((c) =>
      c.refs.map((r) => ({
        id: `${r.family.id}/${r.variant.id}`,
        coords: r.variant.coords,
        color: r.family.color,
        kind: 'dot' as const,
        label: r.variant.name,
      })),
    );
    return { fills, pins, hatch: {}, arcs: [], frame: [] };
  }, []);

  const layers = useMemo(() => (family ? familyLayers(family) : overview), [family, overview]);
  const interactive = useMemo(() => new Set(Object.keys(layers.fills)), [layers]);
  const refsHere = countryCode ? countryRefs(countryCode).filter((r) => !family || r.family.id === family.id) : [];
  const frame = countryCode && refsHere.length ? refsHere.map((r) => r.variant.coords) : layers.frame;

  const pickFamily = (id: string | null) => {
    setFamilyId(id);
    setCountryCode(null);
  };

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">An atlas of dishes that travelled</span>
            <h1 className="display">
              One dish, <em>many</em> homes.
            </h1>
            <p className="lede">
              The paratha you tear in Dhaka, the roti canai flipped in Penang and the buss-up-shut of Port of Spain are
              one idea, carried by traders, workers and families. Trace where each dish began, see how every country
              made it its own, then cook every version.
            </p>
            <div className="hero-stats">
              <div>
                <strong>{stats.families}</strong>
                <span>dish families</span>
              </div>
              <div>
                <strong>{stats.variants}</strong>
                <span>regional versions</span>
              </div>
              <div>
                <strong>{stats.countries}</strong>
                <span>countries</span>
              </div>
            </div>
          </div>
          <div className="hero-plates" aria-hidden="true">
            {families.slice(0, 5).map((f, i) => (
              <Plate key={f.id} motif={f.motif} color={f.color} pattern={i} size={[200, 132, 116, 104, 92][i]} className={`hero-plate hp-${i}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="atlas wrap" aria-labelledby="atlas-title">
        <div className="atlas-head">
          <h2 id="atlas-title" className="section-title">
            The atlas
          </h2>
          <p className="section-sub">
            {family
              ? `Follow ${family.name} from ${family.origin.region}. Arcs trace how each version arrived.`
              : 'Darker countries hold more dishes. Pick a dish to see its journey, or click a country.'}
          </p>
        </div>

        <div className="chip-row" role="toolbar" aria-label="Choose a dish to map">
          <button type="button" className={`chip ${!family ? 'is-on' : ''}`} onClick={() => pickFamily(null)} aria-pressed={!family}>
            All dishes
          </button>
          {families.map((f) => (
            <button
              type="button"
              key={f.id}
              className={`chip ${familyId === f.id ? 'is-on' : ''}`}
              style={{ ['--c' as string]: f.color }}
              onClick={() => pickFamily(familyId === f.id ? null : f.id)}
              aria-pressed={familyId === f.id}
            >
              <Motif id={f.motif} size={18} />
              {f.name}
            </button>
          ))}
        </div>

        <div className="atlas-grid">
          <WorldMap
            className="map-hero"
            ariaLabel={family ? `Journey map for ${family.name}` : 'World map of dishes by country'}
            fills={layers.fills}
            hatch={layers.hatch}
            pins={layers.pins}
            arcs={layers.arcs}
            frame={frame}
            maxFrameZoom={family ? 4.5 : 4}
            labels={family ? 'all' : 'active'}
            activePinId={hoverPin}
            interactive={interactive}
            selectedNumeric={countryCode ? country(countryCode).numeric : null}
            tooltip={(n, name) => <CountryTooltip numeric={n} name={name} familyId={family?.id} />}
            onCountryClick={(n) => {
              const c = countryByNumeric(n);
              if (c) setCountryCode((cur) => (cur === c.code ? null : c.code));
            }}
            onPinHover={setHoverPin}
          >
            {!family && (
              <div className="map-legend" aria-hidden="true">
                <span>Dishes per country</span>
                <div className="legend-scale">
                  {['1', '2–3', '4–5', '6–7', '8+'].map((l, i) => (
                    <span key={l}>
                      <i style={{ background: `color-mix(in oklab, var(--accent) ${STEPS[i]}%, var(--land))` }} />
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <p className="map-hint">Drag to pan · pinch or ⌘-scroll to zoom</p>
          </WorldMap>

          <aside className="atlas-panel" aria-live="polite">
            {countryCode ? (
              <CountryPanel code={countryCode} familyId={family?.id} onClose={() => setCountryCode(null)} />
            ) : family ? (
              <div className="panel-family" style={{ ['--c' as string]: family.color }}>
                <span className="eyebrow">{family.category}</span>
                <h3>{family.name}</h3>
                <p className="panel-aka">{family.alsoKnownAs.join(' · ')}</p>
                <p>{family.tagline}</p>
                <ConfidenceBadge level={family.origin.confidence} note={family.origin.confidenceNote} />
                <ol className="panel-list">
                  {family.variants.map((v) => (
                    <li key={v.id} onMouseEnter={() => setHoverPin(v.id)} onMouseLeave={() => setHoverPin(null)}>
                      <Link to={`/dish/${family.id}/${v.id}`}>
                        <span className="panel-list-name">{v.name}</span>
                        <span className="panel-list-meta">{country(v.country).name}</span>
                      </Link>
                    </li>
                  ))}
                </ol>
                <Link to={`/dish/${family.id}`} className="btn btn-primary btn-block">
                  Read the full story →
                </Link>
              </div>
            ) : (
              <div className="panel-overview">
                <span className="eyebrow">Where routes cross</span>
                <h3>Busiest kitchens</h3>
                <p>Countries where the most of these dish families have taken root.</p>
                <ol className="panel-list ranked">
                  {activeCountries.slice(0, 8).map((c) => (
                    <li key={c.code}>
                      <button type="button" onClick={() => setCountryCode(c.code)}>
                        <span className="panel-list-name">{c.name}</span>
                        <span className="dot-row" aria-label={`${c.familyIds.length} dish families`}>
                          {c.familyIds.map((id) => (
                            <i key={id} style={{ background: getFamily(id)?.color }} />
                          ))}
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
                <Link to="/countries" className="link-arrow">
                  All countries →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="families-title">
        <div className="section-head">
          <h2 id="families-title" className="section-title">
            Dish families
          </h2>
          <Link to="/dishes" className="link-arrow">
            Browse every version →
          </Link>
        </div>
        <div className="family-grid">
          {families.map((f, i) => (
            <Reveal key={f.id} delay={(i % 3) * 70}>
              <FamilyCard family={f} />
            </Reveal>
          ))}
        </div>
      </section>

      <Crossroads />
    </>
  );
}

function CountryPanel({ code, familyId, onClose }: { code: string; familyId?: string; onClose: () => void }) {
  const c = country(code);
  const refs = countryRefs(code);
  const shown = familyId ? refs.filter((r) => r.family.id === familyId) : refs;
  return (
    <div className="panel-country">
      <button type="button" className="panel-close" onClick={onClose} aria-label="Close country">
        ×
      </button>
      <span className="eyebrow">{c.region}</span>
      <h3>{c.name}</h3>
      <p>
        {plural(refs.length, 'dish', 'dishes')} from {plural(new Set(refs.map((r) => r.family.id)).size, 'family', 'families')}
        {familyId && shown.length !== refs.length ? `, ${shown.length} shown` : ''}.
      </p>
      <ul className="panel-list">
        {shown.map((r) => (
          <li key={`${r.family.id}-${r.variant.id}`} style={{ ['--c' as string]: r.family.color }}>
            <Link to={`/dish/${r.family.id}/${r.variant.id}`}>
              <span className="panel-list-name">
                <i className="swatch" />
                {r.variant.name}
              </span>
              <span className="panel-list-meta">{r.family.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/country/${code}`} className="btn btn-primary btn-block">
        Explore {c.name} →
      </Link>
    </div>
  );
}

/** Pairs of countries that share the most dish families: the intersections. */
function Crossroads() {
  const pairs = useMemo(() => {
    const out: { a: string; b: string; shared: string[] }[] = [];
    const list = activeCountries.filter((c) => c.familyIds.length >= 2);
    for (let i = 0; i < list.length; i++)
      for (let j = i + 1; j < list.length; j++) {
        const shared = list[i].familyIds.filter((id) => list[j].familyIds.includes(id));
        if (shared.length >= 2) out.push({ a: list[i].code, b: list[j].code, shared });
      }
    return out.sort((x, y) => y.shared.length - x.shared.length).slice(0, 6);
  }, []);
  if (!pairs.length) return null;
  return (
    <section className="wrap section crossroads" aria-labelledby="cross-title">
      <div className="section-head">
        <div>
          <h2 id="cross-title" className="section-title">
            Shared tables
          </h2>
          <p className="section-sub">Neighbours, old trading partners and diaspora links show up in the food they share.</p>
        </div>
      </div>
      <div className="cross-grid">
        {pairs.map((p, i) => (
          <Reveal key={`${p.a}-${p.b}`} delay={(i % 3) * 70}>
            <div className="cross-card">
              <div className="cross-names">
                <Link to={`/country/${p.a}`}>{country(p.a).name}</Link>
                <span aria-hidden="true">&amp;</span>
                <Link to={`/country/${p.b}`}>{country(p.b).name}</Link>
              </div>
              <p>
                Both cook {p.shared.length} of the same dish families
              </p>
              <ul>
                {p.shared.map((id) => {
                  const f = getFamily(id)!;
                  return (
                    <li key={id} style={{ ['--c' as string]: f.color }}>
                      <Link to={`/dish/${id}`}>
                        <Motif id={f.motif} size={20} />
                        {f.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
