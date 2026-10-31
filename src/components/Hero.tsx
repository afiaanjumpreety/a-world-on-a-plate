import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { families, photoFor, stats } from '../data';
import { country } from '../data/countries';
import { Plate } from './Motif';
import { plural } from '../lib/format';

/** Families shown on the hero ruler, one "tablespoon" each. */
const FEATURED = families.slice(0, 8);
/** Covers that read better than the family default at plate size. */
const COVER: Record<string, string> = { paratha: 'lachha-paratha' };
const RING = 7;

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/**
 * The home hero, styled as a butter-stick wrapper. A dish sits on the centre plate with its regional
 * versions plated around it; the ruler below picks the dish and advances on its own unless paused.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const [stopped, setStopped] = useState(false);
  const reduced = usePrefersReducedMotion();
  const autoplay = !reduced && !stopped;
  const family = FEATURED[index];
  const ring = family.variants.slice(0, RING);
  const countries = new Set(family.variants.map((v) => v.country)).size;
  const journey = family.mapMode !== 'comparison';
  const next = () => setIndex((i) => (i + 1) % FEATURED.length);

  const hold = { onPointerEnter: () => setHeld(true), onPointerLeave: () => setHeld(false), onFocus: () => setHeld(true), onBlur: () => setHeld(false) };

  return (
    <section className="hero" aria-label="Introduction">
      {/* Full-bleed butter-stick wrapper; each band keeps its content on the page grid. */}
      <div className="hero-pack" style={{ ['--c' as string]: family.color }}>
        <div className="hero-inner">
          {/* The dish's other names, printed huge and drifting along the bottom like a wrapper wordmark. */}
          <div className="hero-wordmark" aria-hidden="true" key={`w-${family.id}`}>
            <div className="hero-wordmark-track">
              {[0, 1].map((copy) => (
                <span key={copy}>
                  {[family.name, ...family.alsoKnownAs].map((n) => (
                    <span key={n}>{n} · </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 className="display hero-title">
                One dish, <em>many</em> homes.
              </h1>
              <p className="lede">
                The paratha you tear in Dhaka, the roti canai flipped in Penang and the buss-up-shut of Port of Spain
                are one idea, carried by traders, workers and families. Trace where each dish began, see how every
                country made it its own, then cook every version.
              </p>

              {/* Now plating: what is on the stage. The thin line along the bottom counts down to the next dish. */}
              <div className={`hero-now ${autoplay && !held ? '' : 'is-held'}`} {...hold}>
                <div className="hero-now-head">
                  <span className="hero-now-tag">Now plating</span>
                  {!reduced && (
                    <button type="button" className="hero-pause" onClick={() => setStopped((v) => !v)}>
                      {stopped ? '▶ Play' : '❚❚ Pause'}
                    </button>
                  )}
                </div>
                <p className="hero-now-info" key={`n-${family.id}`}>
                  <strong>{family.name}</strong>
                  <span className="hero-now-detail">
                    {plural(family.variants.length, 'version')} in {plural(countries, 'country', 'countries')}
                    {journey ? `, from ${family.origin.region}` : ''}
                  </span>
                </p>
                {autoplay && <i className="hero-now-progress" key={`p-${index}`} aria-hidden="true" onAnimationEnd={next} />}
              </div>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => document.getElementById('atlas')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })}
                >
                  Explore the atlas <span aria-hidden="true">↓</span>
                </button>
                <Link to={`/dish/${family.id}`} className="btn btn-ghost btn-lg">
                  Read about {family.name}
                </Link>
              </div>
            </div>

            <div className="hero-stage" key={`s-${family.id}`} {...hold}>
              <span className="hero-orbit" aria-hidden="true" />
              {journey && (
                <svg className="hero-routes" viewBox="0 0 100 100" aria-hidden="true">
                  {ring.map((v, i) => {
                    const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 50 + Math.cos(a) * 41;
                    const y = 50 + Math.sin(a) * 41;
                    // Bow each route slightly so they read as journeys, not spokes.
                    const cx = 50 + Math.cos(a + 0.5) * 24;
                    const cy = 50 + Math.sin(a + 0.5) * 24;
                    return (
                      <path
                        key={v.id}
                        pathLength={100}
                        d={`M50 50 Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`}
                        style={{ ['--i' as string]: i }}
                      />
                    );
                  })}
                </svg>
              )}
              <Link to={`/dish/${family.id}`} className="hero-center" aria-label={`${family.name}: read the full story`}>
                <Plate
                  motif={family.motif}
                  color={family.color}
                  size={300}
                  pattern={index}
                  className="hero-plate"
                  photo={photoFor(family.id, COVER[family.id]) ?? photoFor(family.id)}
                />
              </Link>
              <ul className="hero-ring" aria-label={`Versions of ${family.name}`}>
                {ring.map((v, i) => {
                  const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <li
                      key={v.id}
                      style={{
                        ['--x' as string]: `${50 + Math.cos(a) * 41}%`,
                        ['--y' as string]: `${50 + Math.sin(a) * 41}%`,
                        ['--i' as string]: i,
                      }}
                    >
                      <Link to={`/dish/${family.id}/${v.id}`} title={`${v.name}, ${v.place}`}>
                        <Plate motif={family.motif} color={family.color} size={76} pattern={i + 1} photo={photoFor(family.id, v.id)} />
                        <span className="hero-ring-tag">{country(v.country).name}</span>
                        <span className="sr-only">{v.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="hero-bar">
          <div className="wrap hero-bar-main">
            <p>
              <strong>{stats.families}</strong> dish families = <strong>{stats.variants}</strong> regional versions ={' '}
              <strong>{stats.countries}</strong> countries
            </p>
            <p className="hero-bar-links">
              <Link to="/sources">Explore the research ↗</Link>
              <Link to="/credits">Meet the photographers ↗</Link>
            </p>
          </div>
          <div className="hero-fine">
            <div className="wrap">
              <span>An atlas of dishes that travelled</span>
              <span>Where historians disagree, we say so</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
