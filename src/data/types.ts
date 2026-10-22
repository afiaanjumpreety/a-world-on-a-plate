/**
 * Data model for A World on a Plate.
 *
 * A DishFamily is one idea that travelled (e.g. laminated flatbread). Each
 * Variant is how one place makes it. Variants form a lineage through `from`,
 * which the atlas draws as journey arcs.
 */

/** [longitude, latitude] in decimal degrees. Longitude first. */
export type LngLat = [number, number];

/** ISO 3166-1 alpha-3 country code, e.g. "BGD", "MYS", "TTO". */
export type CountryCode = string;

export type Category =
  | 'bread'
  | 'dumpling'
  | 'rice'
  | 'pastry'
  | 'grill'
  | 'noodles'
  | 'dessert'
  | 'drink';

/** Line-art motif drawn for the family. One per family. */
export type Motif =
  | 'flatbread'
  | 'samosa'
  | 'dumpling'
  | 'noodles'
  | 'rice'
  | 'meatball'
  | 'spit'
  | 'halfmoon'
  | 'pudding'
  | 'spiral'
  | 'teacup'
  | 'flan';

/** How settled the origin story is among food historians. */
export type Confidence = 'established' | 'likely' | 'contested';

export type Difficulty = 'Easy' | 'Medium' | 'Challenging';

/** Units allowed in ingredient lists. Use metric; `piece`/`pinch` for counts. */
export type Unit =
  | 'g'
  | 'kg'
  | 'ml'
  | 'l'
  | 'tsp'
  | 'tbsp'
  | 'cup'
  | 'piece'
  | 'clove'
  | 'pinch'
  | 'sprig'
  | 'stick'
  | 'pod'
  | 'leaf'
  | 'slice'
  | 'bunch';

export interface NativeName {
  /** As written locally, e.g. "পরোটা". Use Latin text if that is the local script. */
  text: string;
  /** Language name in English, e.g. "Bengali". */
  lang: string;
  /** Latin transliteration, e.g. "porota". Omit when `text` is already Latin. */
  translit?: string;
}

export interface Ingredient {
  /** Numeric amount so the recipe can be scaled. Omit for "to taste" items. */
  qty?: number;
  unit?: Unit;
  /** The ingredient itself, lower case: "plain flour (maida)". */
  item: string;
  /** Prep or substitution note: "finely chopped", "or neutral oil". */
  note?: string;
}

export interface IngredientGroup {
  /** e.g. "Dough", "Filling", "To serve". Omit for a single ungrouped list. */
  title?: string;
  items: Ingredient[];
}

export interface Step {
  /** Short imperative heading: "Rest the dough". */
  title: string;
  /** 1-3 sentences of instruction. */
  text: string;
}

export interface Recipe {
  serves: number;
  /** Minutes of hands-on prep (include resting time separately in `restMinutes`). */
  prepMinutes: number;
  cookMinutes: number;
  /** Passive time: resting, marinating, proving, chilling. 0 if none. */
  restMinutes: number;
  difficulty: Difficulty;
  /** What you end up with: "8 parathas", "1 large pot". */
  yield: string;
  ingredients: IngredientGroup[];
  steps: Step[];
  tips: string[];
}

export interface Variant {
  /** Unique within the family, kebab-case: "roti-canai". Used in the URL. */
  id: string;
  /** Common English-alphabet name: "Roti Canai". */
  name: string;
  native?: NativeName[];
  country: CountryCode;
  /** Representative city or region: "Penang". */
  place: string;
  /** Pin location for that place. [lng, lat] — longitude first. */
  coords: LngLat;
  /**
   * Lineage parent: another variant's `id` in this family, or "origin" if it
   * descends straight from the family origin. Drawn as a journey arc.
   */
  from: string;
  /** When and how it arrived: "Late 1800s, with Tamil Muslim traders". */
  arrival: string;
  /** One sentence, shown on cards. */
  summary: string;
  /** 2-3 short paragraphs on this version's history and place in daily life. */
  story: string[];
  /** 3-5 bullet points: what sets this version apart from its cousins. */
  signature: string[];
  /** One short value (max ~6 words) for EVERY key in the family's `compareAxes`. */
  traits: Record<string, string>;
  servedWith: string[];
  /** When it is eaten: "Breakfast at mamak stalls, any hour". */
  whenEaten: string;
  /** Family source numbers supporting this version's description and context. */
  sourceRefs?: number[];
  recipe: Recipe;
}

export interface CompareAxis {
  /** Key used in each variant's `traits`. camelCase: "fat". */
  key: string;
  /** Row label: "Fat used". */
  label: string;
}

export interface TimelineEvent {
  /** Free text so ranges and uncertainty are allowed: "c. 1200s", "1960s". */
  when: string;
  event: string;
}

/**
 * A reference that was actually read and supports specific claims.
 * Text fields cite it with markers like "[2]" or "[1, 3]" (1-based index into `sources`).
 */
export interface Source {
  /** Article, page or book title. */
  title: string;
  /** Site or publisher: "Wikipedia", "Encyclopaedia Britannica", "BBC Travel". */
  publisher: string;
  author?: string;
  /** Publication year if known: "2019". */
  year?: string;
  url: string;
  /** Plain description of what it supports: "Mughal-era spread; Tamil migration to Penang". */
  supports: string;
  /** Date this reference was consulted, in YYYY-MM-DD format. */
  accessed?: string;
}

export interface DishFamily {
  /** kebab-case, matches the file name: "paratha". Used in the URL. */
  id: string;
  /** Display name: "Paratha". */
  name: string;
  /** Names it goes by across the family: ["Porota", "Roti Canai", "Prata"]. */
  alsoKnownAs: string[];
  /** Under 12 words, evocative but plain. */
  tagline: string;
  category: Category;
  motif: Motif;
  /** Accent colour (hex). Assigned by the site editor. */
  color: string;
  origin: {
    /** "Punjab and the North Indian plains" */
    region: string;
    country: CountryCode;
    coords: LngLat;
    /** "By the 1500s (Mughal era)" */
    era: string;
    confidence: Confidence;
    /** One sentence on why the origin is settled or debated. */
    confidenceNote: string;
  };
  /** One-paragraph hook for the family page header. */
  intro: string;
  /** 3-4 paragraphs: origin and how it spread. */
  history: string[];
  /** Etymology: where the name(s) come from. 1-2 sentences. */
  etymology: string;
  timeline: TimelineEvent[];
  /** 3-5 things every variant shares. */
  commonThreads: string[];
  /** 3-5 axes along which the variants diverge, each with an explanation. */
  divergences: { title: string; text: string }[];
  /** 5-7 axes for the side-by-side comparison table. */
  compareAxes: CompareAxis[];
  variants: Variant[];
  /** Numbered references for the family and all its variants. Cited as "[n]" in text. */
  sources?: Source[];
}

/** A freely licensed photo, downloaded by scripts/fetch-photos.ts. */
export interface Photo {
  /** Original file title, retained for attribution. */
  title: string;
  /** Path under public/: "images/paratha/roti-canai.jpg". */
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Photographer as credited on the original photo page (plain text). */
  author: string;
  /** A requested credit line, when the photographer specifies one. */
  attribution?: string;
  /** "CC BY-SA 4.0", "CC0", "Public domain". */
  license: string;
  licenseUrl?: string;
  /** Original photograph page on Wikimedia Commons or Flickr. */
  sourceUrl: string;
  /** Licence evidence: a Commons revision or original Flickr photo page. */
  licenseRevision: string;
  licenseChecked: string;
  /** Changes made for display; adaptations retain the photograph's licence. */
  changes: string;
}
