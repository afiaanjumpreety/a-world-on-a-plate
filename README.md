# A World on a Plate

An atlas of dishes that travelled. Each **dish family** (paratha, dumplings, pilaf, jalebi…) has:

- an origin story with an honest confidence label (well established / likely / contested)
- a journey map: arcs run from each version to the version it grew out of
- a timeline, what every version shares, and where they part ways
- a side-by-side comparison table
- a page for every country's version, with a scalable recipe and a step-by-step cook mode

The home page is an interactive world map: countries are shaded by how many dishes they hold, and picking a dish
redraws the map as that dish's journey. Click any country to see everything cooked there.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/, deployable anywhere (uses hash routing)
npm run validate   # checks the dish data (coordinates, lineage, traits, units)
npm run sources    # validates citations and checks reference URLs
npm run sources -- --offline # validates references without network access
```

## Adding or editing dishes

Every family is one file in `src/data/families/`, typed by `src/data/types.ts`. Any file there that exports a
`DishFamily` is picked up automatically: it appears on the map, in search and in every index.

- `coords` are **[longitude, latitude]**. `npm run validate` flags swapped pairs and pins outside their country.
- `country` is an ISO alpha-3 code. New countries need a row in `src/data/countries.ts`.
- `from` is the variant a version descends from (or `"origin"`); it draws the journey arcs.
- `traits` must fill every key in the family's `compareAxes`.
- Display order lives in the `ORDER` list in `src/data/index.ts`.

## Stack

Vite, React and TypeScript. The map is D3 (`d3-geo` Equal Earth projection, `d3-zoom`) over Natural Earth 1:50m
boundaries from `world-atlas`. Fonts: Fraunces and Inter. Saved recipes and the theme choice stay in the browser's
local storage.

## References and photographs

The References page (`#/sources`) collects the reading behind every family. Numbered citations link to the
corresponding sources on dish pages; each version also lists its relevant references. Sources include UNESCO,
Singapore's National Heritage Board, Hong Kong's Intangible Cultural Heritage Office, Encyclopaedia Iranica,
reference articles and food journalism. Each entry explains what it supports. Heritage recognition documents a
tradition, not proof of its invention. Recipes are editorial home-kitchen adaptations.

Real dish photographs are stored locally in `public/images/`, with photographer, licence, original source and
descriptive alt text in `src/data/photos/`. All images are credited at `#/credits`. To refresh selected photos:

```bash
npm run photos -- paratha samosa
npm run photos:check # validates image files, licences and attribution; also runs during build
```

Selections live in `scripts/photos/`. The downloader retrieves Commons attribution in batches and accepts only
public domain, CC0, CC BY and CC BY-SA with matching licence URLs. It rejects unknown, non-commercial,
no-derivatives and GFDL-only licences, missing author credits, incomplete original-source information and explicit
additional restrictions. It preserves an audited record after a transient failure only for the same original.
Every family has a cover; versions without a suitable, verified photograph retain their illustration.
An entry can specify `flickr` instead of `file` for an original Flickr photo page. For these fallbacks the downloader
reads the original page's structured author and Creative Commons licence data and rejects unapproved terms;
it never treats a Flickr search result as evidence of a licence. Transient rate-limit failures are retried.

These are **free-to-reuse photographs, not all copyright-free/public-domain photographs**. CC BY requires
attribution; CC BY-SA also requires adaptations to retain the same licence. The credits page provides each
original title, photographer, requested credit line, licence link, change notice and the Commons page revision or
original Flickr page used in the audit. Display crops and resized versions retain the stated photograph licence. The per-photo records
include the date of the licence check. Re-run `npm run photos` to refresh them from their original sources.

## A note on accuracy

Legends are labelled as legends, and debated origins are marked as contested. Map arcs are simplified interpretations
of relationships between dishes. Reference articles offer starting points for further reading, rather than proof
of every proposed historical connection.
