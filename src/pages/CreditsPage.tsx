import { Link } from 'react-router-dom';
import { allPhotos, families } from '../data';
import { PhotoImg } from '../components/Photo';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function CreditsPage() {
  useDocumentTitle('Photo credits');
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">Credits</span>
        <h1 className="display small">Photographs</h1>
        <p className="lede">
          These photographs are either public domain, dedicated under CC0, or freely licensed under Creative Commons
          BY or BY-SA. All allow commercial reuse. The BY and BY-SA photographs retain their copyright and require
          credit; BY-SA also requires adaptations to retain the same licence.
        </p>
        <p className="section-sub">Sourced from Wikimedia Commons and selected Creative Commons photographers on Flickr. Follow each source and licence link to check its terms. Resized or cropped versions keep the photograph’s listed licence. Photographs illustrate dishes, rather than the results of our recipes.</p>
      </header>
      {families.map((f) => {
        const list = allPhotos.filter((p) => p.family?.id === f.id);
        if (!list.length) return null;
        return (
          <section key={f.id} className="region-block" aria-labelledby={`cr-${f.id}`}>
            <h2 id={`cr-${f.id}`} className="region-title">
              <Link to={`/dish/${f.id}`}>{f.name}</Link>
            </h2>
            <ul className="credit-grid">
              {list.map(({ key, photo, variant }) => (
                <li key={key} className="credit-card">
                  <div className="credit-thumb">
                    <PhotoImg photo={photo} />
                  </div>
                  <div>
                    <strong>{variant ? variant.name : `${f.name} (cover)`}</strong>
                    <span>{photo.title}</span>
                    <span>{photo.attribution ?? photo.author}</span>
                    <span>
                      {photo.licenseUrl ? (
                        <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
                          {photo.license}
                        </a>
                      ) : (
                        photo.license
                      )}{' '}
                      ·{' '}
                      <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Source file
                      </a>
                    </span>
                    <span>{photo.changes}</span>
                    <span><a href={photo.licenseRevision} target="_blank" rel="noopener noreferrer">Licence record</a> · Checked {photo.licenseChecked}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {allPhotos.length === 0 && <p className="empty">Photos are on their way.</p>}
    </div>
  );
}
