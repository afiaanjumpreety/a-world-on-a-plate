import { Link } from 'react-router-dom';
import { families } from '../data';
import { SourceLine } from '../components/Cite';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function SourcesPage() {
  useDocumentTitle('Research & references');
  const count = new Set(families.flatMap((f) => f.sources?.map((s) => s.url) ?? [])).size;
  return (
    <div className="wrap page">
      <header className="page-head">
        <span className="eyebrow">Read, trace, verify</span>
        <h1 className="display small">Research & references</h1>
        <p className="lede">Explore the reading behind {families.length} dish families: heritage records, food histories and reference articles. Follow a source to check the evidence for yourself.</p>
        <p className="section-sub">{count} distinct references · Numbered citations on dish pages · <Link to="/credits">Photography credits →</Link></p>
      </header>
      <aside className="research-note prose">
        <h2>Food travels. The evidence has gaps.</h2>
        <p>Sources describe ingredients, customs and historical accounts; they do not prove every journey drawn on the map. Some dishes developed in parallel. Origin labels express uncertainty, and map arcs are a simplified interpretation. Recipes are editorial home-kitchen adaptations, rather than reproductions from these references.</p>
        <p>Wikipedia entries are secondary starting points: their own footnotes lead to further reading. Heritage listings document a living tradition, rather than establishing who invented a dish.</p>
      </aside>
      <nav className="reference-index" aria-label="References by dish family">
        {families.map((f) => <a key={f.id} href={`#references-${f.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`references-${f.id}`)?.scrollIntoView({ behavior: 'smooth' }); }}>{f.name} <span>{f.sources?.length ?? 0}</span></a>)}
      </nav>
      {families.map((f) => (
        <section key={f.id} id={`references-${f.id}`} className="section reference-family" aria-labelledby={`reference-title-${f.id}`}>
          <div className="section-head">
            <h2 id={`reference-title-${f.id}`} className="section-title small">{f.name}</h2>
            <Link className="link-arrow" to={`/dish/${f.id}#sources`}>Read the story & citations →</Link>
          </div>
          <ol className="sources">{f.sources?.map((s, i) => <li key={s.url} value={i + 1}><SourceLine source={s} /></li>)}</ol>
        </section>
      ))}
    </div>
  );
}
