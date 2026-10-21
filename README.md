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

## A note on accuracy

The history was written to be careful rather than colourful. Legends are labelled as legends, and debated origins
are marked as contested. It is still worth checking claims against primary sources before treating them as settled.
