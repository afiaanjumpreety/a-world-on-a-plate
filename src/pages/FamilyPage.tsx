import { Link, useParams } from 'react-router-dom';
import { families, getFamily, photoFor } from '../data';
import { Cited, SourceList } from '../components/Cite';
import { Credit } from '../components/Photo';
import { CompareTable, ConfidenceBadge, CountryTag, FamilyCard, FamilyMap, Reveal, Timeline, VariantCard, familyIndex } from '../components/Dish';
import { Plate } from '../components/Motif';
import { NotFound } from './NotFound';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function FamilyPage() {
  const { familyId } = useParams();
  const family = getFamily(familyId);
  useDocumentTitle(family?.name);
  if (!family) return <NotFound />;

  const countries = [...new Set(family.variants.map((v) => v.country))];
  const others = families.filter((f) => f.id !== family.id).slice(0, 3);
  const i = familyIndex(family);
  const next = families[(i + 1) % families.length];
  const hero = photoFor(family.id);
  const sourceCount = family.sources?.length ?? 0;

  return (
    <article className="family-page" style={{ ['--c' as string]: family.color }}>
      <header className="family-hero">
        <div className="wrap family-hero-inner">
          <div className="family-hero-copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/dishes">Dishes</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{family.name}</span>
            </nav>
            <span className="eyebrow">{family.category} · {family.mapMode === 'comparison' ? family.origin.region : `roots in ${family.origin.region}`}</span>
            <h1 className="display">{family.name}</h1>
            <p className="family-aka">{family.alsoKnownAs.join(' · ')}</p>
            <p className="lede">
              <Cited text={family.intro} family={family} />
            </p>
            <div className="family-hero-meta">
              {family.mapMode === 'comparison' ? <span className="meta-pill">Regional comparison</span> : <ConfidenceBadge level={family.origin.confidence} note={family.origin.confidenceNote} />}
              <span className="meta-pill">{family.origin.era}</span>
              <span className="meta-pill">
                {family.variants.length} versions · {countries.length} countries
              </span>
              {sourceCount > 0 && (
                <a
                  href="#sources"
                  className="meta-pill meta-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sources')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {sourceCount} sources
                </a>
              )}
            </div>
          </div>
          <div className="family-hero-art">
            <Plate motif={family.motif} color={family.color} size={340} pattern={i} className="plate-hero" photo={hero} />
            {hero && <Credit photo={hero} />}
          </div>
        </div>
      </header>

      <section className="wrap section" aria-labelledby="journey-title">
        <div className="section-head">
          <div>
            <h2 id="journey-title" className="section-title">
              {family.mapMode === 'comparison' ? 'Around the table' : 'The journey'}
            </h2>
            <p className="section-sub">
              {family.mapMode === 'comparison'
                ? 'These pins show regional traditions with a shared cooking method. No common birthplace or migration route is claimed. Click a pin to explore a version.'
                : 'The hatched country marks a representative origin. Arcs show interpreted connections, rather than verified travel routes. Click a pin to explore a version.'}
            </p>
          </div>
        </div>
        <FamilyMap family={family} />
      </section>

      <section className="wrap section history" aria-labelledby="history-title">
        <div className="history-main">
          <h2 id="history-title" className="section-title">
            {family.mapMode === 'comparison' ? 'Regional traditions' : 'Where it began'}
          </h2>
          <div className="prose dropcap">
            {family.history.map((p, k) => (
              <p key={k}>
                <Cited text={p} family={family} />
              </p>
            ))}
          </div>
          <aside className="etymology">
            <span className="eyebrow">In a name</span>
            <p>
              <Cited text={family.etymology} family={family} />
            </p>
          </aside>
          <aside className="origin-note">
            <span className="eyebrow">How sure are we?</span>
            <p>
              <Cited text={family.origin.confidenceNote} family={family} />
            </p>
          </aside>
        </div>
        <div className="history-side">
          <h3 className="side-title">{family.mapMode === 'comparison' ? 'Regional snapshots' : 'Timeline'}</h3>
          <Timeline family={family} />
        </div>
      </section>

      <section className="wrap section threads" aria-label="What they share and where they differ">
        <Reveal className="threads-card shared">
          <h2 className="section-title small">What they all share</h2>
          <ul className="check-list">
            {family.commonThreads.map((t, k) => (
              <li key={k}>
                <Cited text={t} family={family} />
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="threads-card diverge" delay={80}>
          <h2 className="section-title small">Where they part ways</h2>
          <dl className="diverge-list">
            {family.divergences.map((d, k) => (
              <div key={k}>
                <dt>{d.title}</dt>
                <dd>
                  <Cited text={d.text} family={family} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="wrap section" aria-labelledby="compare-title">
        <div className="section-head">
          <div>
            <h2 id="compare-title" className="section-title">
              Side by side
            </h2>
            <p className="section-sub">Same idea, different choices. Scroll sideways to compare every version.</p>
          </div>
        </div>
        <CompareTable family={family} />
      </section>

      <section className="wrap section" aria-labelledby="versions-title">
        <div className="section-head">
          <div>
            <h2 id="versions-title" className="section-title">
              Every version, with a recipe
            </h2>
            <p className="section-sub">
              {countries.map((c, k) => (
                <span key={c}>
                  {k > 0 && ' · '}
                  <CountryTag code={c} />
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="variant-grid">
          {family.variants.map((v, k) => (
            <Reveal key={v.id} delay={(k % 3) * 60}>
              <VariantCard family={family} variant={v} />
            </Reveal>
          ))}
        </div>
      </section>

      {sourceCount > 0 && (
        <section className="wrap section" id="sources" aria-labelledby="sources-title">
          <div className="section-head">
            <div>
              <h2 id="sources-title" className="section-title">
                Sources
              </h2>
              <p className="section-sub">
                Follow the numbers in the text to the reading behind this story. Each entry explains what it
                supports. <Link to="/sources">Browse all research & references →</Link>
              </p>
            </div>
          </div>
          <SourceList family={family} />
        </section>
      )}

      <section className="wrap section next-up" aria-label="More dish families">
        <Link to={`/dish/${next.id}`} className="next-card" style={{ ['--c' as string]: next.color }}>
          <span className="eyebrow">Next dish</span>
          <span className="next-title">{next.name} →</span>
          <span className="next-sub">{next.tagline}</span>
        </Link>
        <div className="family-grid compact">
          {others.map((f) => (
            <FamilyCard key={f.id} family={f} compact />
          ))}
        </div>
      </section>
    </article>
  );
}
