import { Link } from 'react-router-dom';
import { Plate } from '../components/Motif';

export function NotFound() {
  return (
    <div className="wrap page not-found">
      <Plate motif="teacup" color="var(--accent)" size={140} />
      <h1 className="display small">This plate is empty</h1>
      <p className="lede">We couldn't find that dish. It may have wandered off to another country.</p>
      <Link to="/" className="btn btn-primary">
        Back to the atlas
      </Link>
    </div>
  );
}
