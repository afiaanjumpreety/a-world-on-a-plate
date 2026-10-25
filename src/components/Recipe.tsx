import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { DishFamily, Variant } from '../data/types';
import { formatIngredientAmount, formatMinutes, totalMinutes } from '../lib/format';

export function RecipeView({ family, variant }: { family: DishFamily; variant: Variant }) {
  const r = variant.recipe;
  const [serves, setServes] = useState(r.serves);
  const [have, setHave] = useState<Set<string>>(new Set());
  const [done, setDone] = useState<Set<number>>(new Set());
  const [cooking, setCooking] = useState(false);
  const scale = serves / r.serves;

  // Reset state when moving between recipes.
  useEffect(() => {
    setServes(r.serves);
    setHave(new Set());
    setDone(new Set());
  }, [r]);

  const toggle = <T,>(set: Set<T>, v: T, apply: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    apply(next);
  };

  const stats = [
    { label: 'Prep', value: formatMinutes(r.prepMinutes) },
    ...(r.restMinutes > 0 ? [{ label: 'Rest', value: formatMinutes(r.restMinutes) }] : []),
    { label: 'Cook', value: formatMinutes(r.cookMinutes) },
    { label: 'Total', value: formatMinutes(totalMinutes(r)) },
    { label: 'Level', value: r.difficulty },
  ];

  return (
    <section className="recipe" id="recipe" style={{ ['--c' as string]: family.color }} aria-labelledby="recipe-title">
      <header className="recipe-head">
        <div>
          <span className="eyebrow">The recipe</span>
          <h2 id="recipe-title">Cook {variant.name.replace(/\s*\(.*\)\s*$/, '')} at home</h2>
          <p className="recipe-yield">Makes {r.yield}</p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => setCooking(true)}>
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9h12v2a6 6 0 0 1-12 0zM10 5V3M6.5 6 5.5 4.5M13.5 6l1-1.5" />
          </svg>
          Start cook mode
        </button>
      </header>

      <dl className="recipe-stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
        <div className="recipe-serves">
          <dt>Serves</dt>
          <dd>
            <button type="button" aria-label="Fewer servings" onClick={() => setServes((s) => Math.max(1, s - 1))} disabled={serves <= 1}>
              −
            </button>
            <output aria-live="polite">{serves}</output>
            <button type="button" aria-label="More servings" onClick={() => setServes((s) => Math.min(48, s + 1))}>
              +
            </button>
          </dd>
        </div>
      </dl>

      <div className="recipe-body">
        <div className="ingredients">
          <h3>Ingredients</h3>
          {scale !== 1 && <p className="scale-note">Scaled ×{Number(scale.toFixed(2))} from {r.serves} servings</p>}
          {r.ingredients.map((g, gi) => (
            <div key={gi} className="ing-group">
              {g.title && <h4>{g.title}</h4>}
              <ul>
                {g.items.map((ing, ii) => {
                  const key = `${gi}-${ii}`;
                  const amount = formatIngredientAmount(ing, scale);
                  return (
                    <li key={key}>
                      <label className={have.has(key) ? 'is-checked' : ''}>
                        <input type="checkbox" checked={have.has(key)} onChange={() => toggle(have, key, setHave)} />
                        <span className="ing-amount">{amount}</span>
                        <span className="ing-item">
                          {ing.item}
                          {ing.note && <span className="ing-note">, {ing.note}</span>}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="method">
          <h3>Method</h3>
          <ol>
            {r.steps.map((s, i) => (
              <li key={i} className={done.has(i) ? 'is-done' : ''}>
                <button type="button" className="step-num" onClick={() => toggle(done, i, setDone)} aria-pressed={done.has(i)} aria-label={`Mark step ${i + 1} ${done.has(i) ? 'not done' : 'done'}`}>
                  {done.has(i) ? '✓' : i + 1}
                </button>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          {r.tips.length > 0 && (
            <aside className="tips">
              <h4>From the cook</h4>
              <ul>
                {r.tips.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>

      {cooking && createPortal(<CookMode family={family} variant={variant} onClose={() => setCooking(false)} />, document.body)}
    </section>
  );
}

/** Full-screen, one step at a time, keeps the screen awake where supported. */
function CookMode({ family, variant, onClose }: { family: DishFamily; variant: Variant; onClose: () => void }) {
  const steps = variant.recipe.steps;
  const [i, setI] = useState(0);

  useEffect(() => {
    let lock: { release: () => Promise<void> } | null = null;
    const nav = navigator as Navigator & { wakeLock?: { request: (t: 'screen') => Promise<{ release: () => Promise<void> }> } };
    nav.wakeLock?.request('screen').then((l) => (lock = l)).catch(() => {});
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') setI((x) => Math.min(steps.length - 1, x + 1));
      if (e.key === 'ArrowLeft') setI((x) => Math.max(0, x - 1));
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      lock?.release().catch(() => {});
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [steps.length, onClose]);

  const s = steps[i];
  return (
    <div className="cook-mode" role="dialog" aria-modal="true" aria-label={`Cook mode: ${variant.name}`} style={{ ['--c' as string]: family.color }}>
      <div className="cook-top">
        <span>
          {variant.name} · Step {i + 1} of {steps.length}
        </span>
        <button type="button" className="btn btn-ghost" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="cook-progress" aria-hidden="true">
        <span style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
      </div>
      <div className="cook-step" key={i}>
        <span className="cook-num">{String(i + 1).padStart(2, '0')}</span>
        <h2>{s.title}</h2>
        <p>{s.text}</p>
      </div>
      <div className="cook-nav">
        <button type="button" className="btn btn-ghost" onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0}>
          ← Previous
        </button>
        {i < steps.length - 1 ? (
          <button type="button" className="btn btn-primary" onClick={() => setI((x) => x + 1)}>
            Next step →
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Done. Time to eat
          </button>
        )}
      </div>
    </div>
  );
}
