import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import type { DishFamily, Source } from '../data/types';

const CITE = /\s?\[(\d+(?:\s*,\s*\d+)*)\]/g;

export function citedNumbers(...texts: string[]): number[] {
  const out = new Set<number>();
  for (const t of texts) for (const m of t.matchAll(CITE)) m[1].split(',').forEach((n) => out.add(Number(n.trim())));
  return [...out].sort((a, b) => a - b);
}

/** Plain text with citation markers removed, for cards, tooltips and meta. */
export const stripCites = (text: string) => text.replace(CITE, '');

/**
 * Renders "…in 1610 [2, 5]." with superscript links to the numbered sources.
 * On a family page they jump to #sources; elsewhere they link to it.
 */
export function Cited({ text, family, onPage = true }: { text: string; family: DishFamily; onPage?: boolean }) {
  const sources = family.sources ?? [];
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(CITE)) {
    parts.push(text.slice(last, m.index));
    const nums = m[1].split(',').map((n) => Number(n.trim()));
    parts.push(
      <sup key={m.index} className="cite">
        {nums.map((n, i) => {
          const s = sources[n - 1];
          const label = s ? `${s.publisher}: ${s.title}` : `Source ${n}`;
          return (
            <Fragment key={n}>
              {i > 0 && <span aria-hidden="true">,</span>}
              {onPage ? (
                <a href={`#src-${n}`} title={label} aria-label={`Source ${n}: ${label}`} onClick={(e) => jump(e, n)}>
                  {n}
                </a>
              ) : (
                <Link to={`/dish/${family.id}#sources`} title={label} aria-label={`Source ${n}: ${label}`}>
                  {n}
                </Link>
              )}
            </Fragment>
          );
        })}
      </sup>,
    );
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
}

// Hash routing owns location.hash, so scroll to the reference by hand.
function jump(e: React.MouseEvent, n: number) {
  const el = document.getElementById(`src-${n}`);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.remove('is-flash');
  void el.offsetWidth;
  el.classList.add('is-flash');
}

export function SourceList({ family, only }: { family: DishFamily; only?: number[] }) {
  const sources = family.sources ?? [];
  if (!sources.length) return null;
  const items = sources.map((s, i) => ({ s, n: i + 1 })).filter(({ n }) => !only || only.includes(n));
  if (!items.length) return null;
  return (
    <ol className="sources">
      {items.map(({ s, n }) => (
        <li key={n} id={`src-${n}`} value={n}>
          <SourceLine source={s} />
        </li>
      ))}
    </ol>
  );
}

function SourceLine({ source: s }: { source: Source }) {
  return (
    <>
      <a href={s.url} target="_blank" rel="noopener noreferrer" className="source-title">
        {s.title}
      </a>
      <span className="source-meta">
        {[s.author, s.publisher, s.year].filter(Boolean).join(' · ')}
        <span className="source-host">{hostOf(s.url)}</span>
      </span>
      <span className="source-supports">{s.supports}</span>
    </>
  );
}

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};
