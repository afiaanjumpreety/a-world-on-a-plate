import { useState } from 'react';
import type { Photo as PhotoData } from '../data/types';

const url = (src: string) => `${import.meta.env.BASE_URL}${src}`;

/** Short attribution line, linked to the original photograph and its licence. */
export function Credit({ photo }: { photo: PhotoData }) {
  return (
    <span className="photo-credit">
      <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">Photo: {photo.attribution ?? photo.author}</a>
      {' · '}<a href={photo.licenseUrl ?? photo.licenseRevision} target="_blank" rel="noopener noreferrer">{photo.license}</a>
      {' · '}<a href={`${import.meta.env.BASE_URL}#/credits`}>Full credits</a>
    </span>
  );
}

/** A photo that fades in once loaded and hides itself if the file is missing. */
export function PhotoImg({ photo, className = '', eager = false, sizes }: { photo: PhotoData; className?: string; eager?: boolean; sizes?: string }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      className={`photo-img ${loaded ? 'is-loaded' : ''} ${className}`}
      src={url(photo.src)}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}

export function PhotoFigure({ photo, className = '', eager = false }: { photo: PhotoData; className?: string; eager?: boolean }) {
  return (
    <figure className={`photo-figure ${className}`}>
      <div className="photo-frame">
        <PhotoImg photo={photo} eager={eager} />
      </div>
      <figcaption>
        <Credit photo={photo} />
      </figcaption>
    </figure>
  );
}
