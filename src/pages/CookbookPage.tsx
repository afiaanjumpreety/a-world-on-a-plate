import { Link } from 'react-router-dom';
import { getVariant } from '../data';
import { VariantCard } from '../components/Dish';
import { useSaved } from '../lib/store';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function CookbookPage() {
  useDocumentTitle('My cookbook');
  const { saved } = useSaved();
  const refs = saved.map((k) => getVariant(...(k.split('/') as [string, string]))).filter((r) => r !== undefined);

  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">Saved on this device</span>
        <h1 className="display small">My cookbook</h1>
        <p className="lede">Recipes you have saved, ready for the next time you cook.</p>
      </header>
      {refs.length ? (
        <div className="variant-grid">
          {refs.map(({ family, variant }) => (
            <VariantCard key={`${family.id}-${variant.id}`} family={family} variant={variant} showFamily />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nothing saved yet. Open any version and press “Save to cookbook”.</p>
          <Link to="/dishes" className="btn btn-primary">
            Browse dishes
          </Link>
        </div>
      )}
    </div>
  );
}
