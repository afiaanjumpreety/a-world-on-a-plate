import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Confidence, DishFamily, Variant } from '../data/types';
import { country, countryByNumeric } from '../data/countries';
import { countryRefs, families, photoFor } from '../data';
import { Cited, stripCites } from './Cite';
import { PhotoImg } from './Photo';
import { Plate } from './Motif';
import { WorldMap, type MapArc, type MapPin } from './WorldMap';
import { formatMinutes, plural, totalMinutes } from '../lib/format';


export const familyIndex = (f: DishFamily) => families.indexOf(f);

/* ---------- Reveal-on-scroll ---------- */

export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'li'; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Small pieces ---------- */

const CONFIDENCE: Record<Confidence, { label: string; hint: string }> = {
  established: { label: 'Well established', hint: 'Historians broadly agree on this origin.' },
  likely: { label: 'Likely', hint: 'The best-supported account, with some gaps.' },
  contested: { label: 'Contested', hint: 'Several places have a serious claim.' },
};

export function ConfidenceBadge({ level, note }: { level: Confidence; note?: string }) {
  const c = CONFIDENCE[level];
  return (
    <span className={`confidence confidence-${level}`} title={note ?? c.hint}>
      <span className="confidence-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      Origin: {c.label}
    </span>
  );
}

export function CountryTag({ code, place }: { code: string; place?: string }) {
  const c = country(code);
  return (
    <Link to={`/country/${code}`} className="country-tag">
      <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
        <path d="M6 11s4-3.6 4-6.4A4 4 0 0 0 2 4.6C2 7.4 6 11 6 11z" fill="currentColor" />
        <circle cx="6" cy="4.6" r="1.4" fill="var(--paper)" />
      </svg>
      {place ? `${place}, ` : ''}
      {c.name}
    </Link>
  );
}

/* ---------- Cards ---------- */

export function FamilyCard({ family, compact = false }: { family: DishFamily; compact?: boolean }) {
  const countries = new Set(family.variants.map((v) => v.country)).size;
  return (
    <Link to={`/dish/${family.id}`} className={`family-card ${compact ? 'is-compact' : ''}`} style={{ ['--c' as string]: family.color }}>
      <div className="family-card-plate">
        <Plate motif={family.motif} color={family.color} size={compact ? 92 : 128} pattern={familyIndex(family)} photo={photoFor(family.id)} />
      </div>
      <div className="family-card-body">
        <span className="eyebrow">{family.category}</span>
        <h3>{family.name}</h3>
        <p className="family-card-aka">{family.alsoKnownAs.slice(0, 4).join(' · ')}</p>
        {!compact && <p className="family-card-tagline">{family.tagline}</p>}
        <div className="family-card-meta">
          <span>{plural(family.variants.length, 'version')}</span>
          <span>{plural(countries, 'country', 'countries')}</span>
        </div>
      </div>
    </Link>
  );
}

export function VariantCard({ family, variant, showFamily = false }: { family: DishFamily; variant: Variant; showFamily?: boolean }) {
  const c = country(variant.country);
  const native = variant.native?.[0];
  const photo = photoFor(family.id, variant.id);
  return (
    <Link to={`/dish/${family.id}/${variant.id}`} className={`variant-card ${photo ? 'has-photo' : ''}`} style={{ ['--c' as string]: family.color }}>
      {photo && (
        <div className="variant-card-photo">
          <PhotoImg photo={photo} />
        </div>
      )}
      <div className="variant-card-body">
        <div className="variant-card-top">
          <span className="variant-card-country">{c.name}</span>
          <span className="variant-card-time">{formatMinutes(totalMinutes(variant.recipe))}</span>
        </div>
        <h3>{variant.name}</h3>
        {native && native.text !== variant.name && (
          <p className="variant-card-native" lang="und">
            {native.text}
          </p>
        )}
        <p className="variant-card-summary">{stripCites(variant.summary)}</p>
        <div className="variant-card-foot">
          {showFamily ? <span className="chip-dot">{family.name}</span> : <span>{variant.place}</span>}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- Comparison table ---------- */

export function CompareTable({ family, highlight }: { family: DishFamily; highlight?: string }) {
  return (
    <div className="compare-scroll" tabIndex={0} role="region" aria-label={`${family.name} versions compared`}>
      <table className="compare">
        <thead>
          <tr>
            <th scope="col" className="compare-corner">
              <span className="sr-only">Trait</span>
            </th>
            {family.variants.map((v) => (
              <th key={v.id} scope="col" className={v.id === highlight ? 'is-highlight' : ''}>
                <Link to={`/dish/${family.id}/${v.id}`}>
                  <span className="compare-name">{v.name}</span>
                  <span className="compare-country">{country(v.country).name}</span>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {family.compareAxes.map((axis) => (
            <tr key={axis.key}>
              <th scope="row">{axis.label}</th>
              {family.variants.map((v) => (
                <td key={v.id} className={v.id === highlight ? 'is-highlight' : ''}>
                  {stripCites(v.traits[axis.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Timeline({ family }: { family: DishFamily }) {
  return (
    <ol className="timeline" style={{ ['--c' as string]: family.color }}>
      {family.timeline.map((e, i) => (
        <li key={i}>
          <span className="timeline-when">{e.when}</span>
          <p>
            <Cited text={e.event} family={family} />
          </p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Maps built from a family ---------- */

/** Short map labels: "Noon Chai (Kashmiri Pink Tea)" → "Noon Chai". */
export const mapLabel = (name: string) => name.replace(/\s*\(.*\)\s*$/, '');
export const originLabel = (f: DishFamily) => f.origin.region.split(/,|\(| and /)[0].trim();

export function familyLayers(family: DishFamily, focusId?: string | null) {
  const comparison = family.mapMode === 'comparison';
  const fills: Record<string, string> = {};
  for (const v of family.variants) {
    const n = country(v.country).numeric;
    if (n) fills[n] = `color-mix(in oklab, ${family.color} 42%, var(--land))`;
  }
  const originNum = country(family.origin.country).numeric;
  const hatch: Record<string, string> = originNum && !comparison ? { [originNum]: family.color } : {};

  const byId = new Map(family.variants.map((v) => [v.id, v]));
  const depth = (v: Variant, seen = new Set<string>()): number => {
    const p = byId.get(v.from);
    if (!p || seen.has(p.id)) return 0;
    seen.add(p.id);
    return 1 + depth(p, seen);
  };

  const pins: MapPin[] = [
    ...(!comparison ? [{ id: '__origin', coords: family.origin.coords, label: originLabel(family), color: family.color, kind: 'origin' as const }] : []),
    ...family.variants.map((v) => ({
      id: v.id,
      coords: v.coords,
      label: mapLabel(v.name),
      color: family.color,
      kind: 'variant' as const,
      dim: !!focusId && focusId !== v.id,
    })),
  ];
  const arcs: MapArc[] = comparison ? [] : family.variants.map((v) => {
    const parent = byId.get(v.from);
    return {
      id: `${family.id}/${v.id}`,
      from: parent ? parent.coords : family.origin.coords,
      to: v.coords,
      color: family.color,
      delay: 0.3 + depth(v) * 0.7 + (family.variants.indexOf(v) % 4) * 0.12,
      dim: !!focusId && focusId !== v.id,
    };
  });
  const frame = [...(!comparison ? [family.origin.coords] : []), ...family.variants.map((v) => v.coords)];
  return { fills, hatch, pins, arcs, frame };
}

export function CountryTooltip({ numeric, name, familyId }: { numeric: string; name: string; familyId?: string }) {
  const code = countryByNumeric(numeric)?.code;
  const refs = code ? countryRefs(code).filter((r) => !familyId || r.family.id === familyId) : [];
  return (
    <>
      <strong>{code ? country(code).name : name}</strong>
      {refs.length > 0 ? (
        <ul>
          {refs.slice(0, 7).map((r) => (
            <li key={`${r.family.id}-${r.variant.id}`} style={{ ['--c' as string]: r.family.color }}>
              {r.variant.name}
              {!familyId && <span> · {r.family.name}</span>}
            </li>
          ))}
          {refs.length > 7 && <li className="more">+{refs.length - 7} more</li>}
        </ul>
      ) : (
        <span className="map-tip-empty">No dishes here yet</span>
      )}
    </>
  );
}

export function FamilyMap({ family, focusId, height = 'tall', zoomable = true }: { family: DishFamily; focusId?: string | null; height?: 'tall' | 'short'; zoomable?: boolean }) {
  const navigate = useNavigate();
  const [hoverPin, setHoverPin] = useState<string | null>(null);
  const layers = useMemo(() => familyLayers(family, focusId), [family, focusId]);
  const active = hoverPin ?? focusId ?? null;
  const interactive = useMemo(() => new Set(Object.keys(layers.fills)), [layers]);
  return (
    <WorldMap
      className={`map-${height}`}
      ariaLabel={family.mapMode === 'comparison' ? `Map of regional ${family.name.toLowerCase()} traditions` : `Map of how ${family.name} travelled from ${family.origin.region}`}
      {...layers}
      zoomable={zoomable}
      labels="all"
      activePinId={active}
      interactive={interactive}
      maxFrameZoom={5}
      tooltip={(n, name) => <CountryTooltip numeric={n} name={name} familyId={family.id} />}
      onPinClick={(id) => id !== '__origin' && navigate(`/dish/${family.id}/${id}`)}
      onPinHover={setHoverPin}
      onCountryClick={(n) => {
        const code = countryByNumeric(n)?.code;
        if (code) navigate(`/country/${code}`);
      }}
    />
  );
}
