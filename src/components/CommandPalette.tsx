import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { activeCountries, allVariants, families } from '../data';
import { country } from '../data/countries';
import { Motif } from './Motif';

interface Item {
  key: string;
  kind: 'Dish' | 'Version' | 'Country';
  title: string;
  meta: string;
  haystack: string;
  to: string;
  color?: string;
  motif?: (typeof families)[number]['motif'];
}

const normalise = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

function buildIndex(): Item[] {
  const items: Item[] = [];
  for (const f of families) {
    items.push({
      key: `f-${f.id}`,
      kind: 'Dish',
      title: f.name,
      meta: `${f.variants.length} versions · ${f.alsoKnownAs.slice(0, 3).join(', ')}`,
      haystack: normalise([f.name, ...f.alsoKnownAs, f.tagline, f.category].join(' ')),
      to: `/dish/${f.id}`,
      color: f.color,
      motif: f.motif,
    });
  }
  for (const { family, variant } of allVariants) {
    const c = country(variant.country);
    items.push({
      key: `v-${family.id}-${variant.id}`,
      kind: 'Version',
      title: variant.name,
      meta: `${family.name} · ${c.name}`,
      haystack: normalise(
        [variant.name, family.name, c.name, variant.place, ...(variant.native ?? []).flatMap((n) => [n.text, n.translit ?? ''])].join(' '),
      ),
      to: `/dish/${family.id}/${variant.id}`,
      color: family.color,
      motif: family.motif,
    });
  }
  for (const c of activeCountries) {
    items.push({
      key: `c-${c.code}`,
      kind: 'Country',
      title: c.name,
      meta: `${c.refs.length} dishes · ${c.region}`,
      haystack: normalise(`${c.name} ${c.region} ${c.code}`),
      to: `/country/${c.code}`,
    });
  }
  return items;
}

export function CommandPalette({ onClose }: { onClose: () => void }) {
  const index = useMemo(buildIndex, []);
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const results = useMemo(() => {
    const terms = normalise(q).split(/\s+/).filter(Boolean);
    if (!terms.length) return index.filter((i) => i.kind === 'Dish');
    return index
      .map((item) => {
        if (!terms.every((t) => item.haystack.includes(t))) return null;
        const title = normalise(item.title);
        const score = (title.startsWith(terms[0]) ? 3 : title.includes(terms[0]) ? 2 : 0) + (item.kind === 'Dish' ? 1 : 0);
        return { item, score };
      })
      .filter((x): x is { item: Item; score: number } => x !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map((x) => x.item);
  }, [q, index]);

  useEffect(() => setSel(0), [q]);
  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [sel]);

  const go = (item: Item | undefined) => {
    if (!item) return;
    navigate(item.to);
    onClose();
  };

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Search dishes, versions and countries"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="palette-input">
          <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="m13 13 4 4" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Try “prata”, “Bangladesh”, “পরোটা” or “dumpling”"
            aria-controls="palette-results"
            aria-activedescendant={results[sel] ? `pr-${results[sel].key}` : undefined}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSel((s) => Math.min(results.length - 1, s + 1));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSel((s) => Math.max(0, s - 1));
              } else if (e.key === 'Enter') go(results[sel]);
              else if (e.key === 'Escape') onClose();
            }}
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-results" id="palette-results" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="palette-empty">Nothing on the menu for “{q}”.</li>}
          {results.map((r, i) => (
            <li
              key={r.key}
              id={`pr-${r.key}`}
              role="option"
              aria-selected={i === sel}
              onMouseMove={() => setSel(i)}
              onClick={() => go(r)}
            >
              <span className="palette-icon" style={{ color: r.color ?? 'var(--ink-3)' }}>
                {r.motif ? (
                  <Motif id={r.motif} size={22} />
                ) : (
                  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="10" cy="10" r="7" />
                    <ellipse cx="10" cy="10" rx="3" ry="7" />
                    <path d="M3 10h14" />
                  </svg>
                )}
              </span>
              <span className="palette-text">
                <span className="palette-title">{r.title}</span>
                <span className="palette-meta">{r.meta}</span>
              </span>
              <span className="palette-kind">{r.kind}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
