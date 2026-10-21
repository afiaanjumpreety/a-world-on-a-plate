import { Link } from 'react-router-dom';
import { activeCountries, getFamily } from '../data';
import { REGIONS } from '../data/countries';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { plural } from '../lib/format';

export function CountriesPage() {
  useDocumentTitle('Countries');
  const byRegion = REGIONS.map((r) => ({ region: r, list: activeCountries.filter((c) => c.region === r).sort((a, b) => a.name.localeCompare(b.name)) })).filter((g) => g.list.length);

  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">By place</span>
        <h1 className="display small">Countries at the table</h1>
        <p className="lede">Each dot is a dish family that has made a home there. The more dots, the more roads crossed.</p>
      </header>
      {byRegion.map((g) => (
        <section key={g.region} className="region-block" aria-labelledby={`r-${g.region}`}>
          <h2 id={`r-${g.region}`} className="region-title">
            {g.region}
          </h2>
          <ul className="country-grid">
            {g.list.map((c) => (
              <li key={c.code}>
                <Link to={`/country/${c.code}`} className="country-card">
                  <span className="country-card-name">{c.name}</span>
                  <span className="country-card-meta">{plural(c.refs.length, 'dish', 'dishes')}</span>
                  <span className="dot-row">
                    {c.familyIds.map((id) => (
                      <i key={id} style={{ background: getFamily(id)?.color }} title={getFamily(id)?.name} />
                    ))}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
