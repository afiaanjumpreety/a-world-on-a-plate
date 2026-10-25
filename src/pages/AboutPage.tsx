import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../lib/useDocumentTitle';

export function AboutPage() {
  useDocumentTitle('About');
  return (
    <div className="wrap page narrow">
      <header className="page-head">
        <span className="eyebrow">About</span>
        <h1 className="display small">How to read this atlas</h1>
      </header>
      <div className="prose">
        <p>
          Dishes rarely have a single birthday. They move with traders, soldiers, indentured workers, students and
          families, and each place changes them to suit its flour, its fat, its climate and its calendar. This atlas
          groups those relatives into <strong>families</strong> and follows each one outward from where it most likely
          began.
        </p>
        <h2>The map</h2>
        <p>
          On a family's map the hatched country is the origin. Every arc runs from the version a dish grew out of to the
          version it became, so a line from Chennai to Penang to Singapore reads as one road, not three separate facts.
          Arcs show lineage, not exact trade routes.
        </p>
        <p>
          Some families, such as pancakes, compare a shared cooking method across distinct traditions. Their maps show
          regional pins without an origin marker or migration arrows; grouping them together does not claim common descent.
        </p>
        <h2>How sure are we?</h2>
        <p>
          Every origin carries a confidence label. <em>Well established</em> means historians broadly agree.{' '}
          <em>Likely</em> means the best-supported account still has gaps. <em>Contested</em> means more than one place
          has a serious claim, and the history section lays out each one. Popular legends are labelled as legends.
        </p>
        <h2>Sources</h2>
        <p>
          Small numbers in the text point to numbered references at the bottom of each dish page. The{' '}
          <Link to="/sources">research & references</Link> page collects the reading in one place, with notes on what
          each source supports. These include encyclopaedia articles, heritage records and food journalism.
          Wikipedia entries provide an overview and footnotes for further reading. A heritage listing documents a
          tradition; it does not establish who invented it. Historical routes are simplified interpretations.
        </p>
        <h2>Photographs</h2>
        <p>
          The photos come from Wikimedia Commons and selected Flickr photographers under Creative Commons BY/BY-SA, CC0 or public-domain terms, with
          the photographer credited beneath feature photos. The{' '}
          <Link to="/credits">photo credits</Link> page also credits photos used on cards and decorative plates and
          links to each original file and licence. Photos illustrate the dish; they do not show a test of our recipe.
          Where a version has no photograph, its line drawing remains.
        </p>
        <h2>The recipes</h2>
        <p>
          Each version has a home-kitchen recipe written to show what makes it distinct. Quantities are metric and scale
          with the servings control. They are a faithful starting point, not the one true way; every family who makes
          these dishes has its own.
        </p>
        <h2>Adding a dish</h2>
        <p>
          Each family lives in its own file in <code>src/data/families/</code>. Add a file that exports a{' '}
          <code>DishFamily</code> and it appears across the site, on the map and in search. Run{' '}
          <code>npm run validate</code> to check coordinates, lineage and comparison traits.
        </p>
      </div>
    </div>
  );
}
