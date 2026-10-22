/**
 * Downloads freely licensed dish photos from Wikimedia Commons or explicitly
 * selected Flickr photo pages and records their attribution.
 *
 *   npm run photos -- paratha samosa     # specific families
 *   npm run photos                       # every manifest
 *
 * Input:  scripts/photos/<familyId>.json — a list of
 *           { "key": "paratha" | "paratha/roti-canai", "file": "File:Name.jpg", "alt": "…" }
 *         A fallback may specify "flickr": "https://www.flickr.com/photos/author/id"
 *         instead of "file"; its current structured licence must pass the same policy.
 *         `key` is the family id (hero photo) or "familyId/variantId".
 * Output: public/images/<familyId>/<variantId|_family>.<ext>
 *         src/data/photos/<familyId>.json  (Photo records keyed by `key`)
 *
 * Only public domain, CC0, CC BY and CC BY-SA are accepted.
 * Unknown, GFDL-only, non-commercial and no-derivatives licences are rejected.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Photo } from '../src/data/types';
import { normalizeLicenseUrl, reusablePhotoLicense } from '../src/lib/photoLicense';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const manifestDir = join(root, 'scripts/photos');
const outData = join(root, 'src/data/photos');
const UA = 'AWorldOnAPlate/0.1 (personal educational project; contact via repository)';
const WIDTH = 960;

interface Entry {
  key: string;
  file?: string;
  /** Original Flickr page; its current structured licence is checked. */
  flickr?: string;
  alt: string;
  attribution?: string;
}

const NOT_FREE = /\b(nc|nd|non-?commercial|no-?deriv|fair use)\b/i;

const stripHtml = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

interface ImageInfo {
  title?: string;
  thumburl?: string;
  thumbwidth?: number;
  thumbheight?: number;
  url: string;
  width: number;
  height: number;
  mime: string;
  descriptionurl: string;
  extmetadata: Record<string, { value: string }>;
}

const infoCache = new Map<string, ImageInfo>();
const revisionCache = new Map<string, string>();
const titleOf = (file: string) => (file.startsWith('File:') ? file : `File:${file}`).replaceAll('_', ' ');
const entryKey = (entry: Entry) => entry.file ? titleOf(entry.file) : `flickr:${entry.flickr}`;

async function fetchWithRetry(url: string): Promise<Response> {
  for (let attempt = 0; ; attempt++) {
    const response = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(30000) });
    if (![429, 502, 503, 504].includes(response.status) || attempt === 3) return response;
    await response.body?.cancel();
    const retryAfter = Number(response.headers.get('retry-after'));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2000 * (attempt + 1);
    await new Promise((resolve) => setTimeout(resolve, Math.min(delay, 10000)));
  }
}

async function loadInfo(files: string[]) {
  const titles = [...new Set(files.map(titleOf))];
  for (let start = 0; start < titles.length; start += 40) {
    const url =
      'https://commons.wikimedia.org/w/api.php?' +
      new URLSearchParams({
        action: 'query',
        titles: titles.slice(start, start + 40).join('|'),
        prop: 'imageinfo|revisions',
        rvprop: 'ids',
        iiprop: 'url|extmetadata|size|mime',
        iiurlwidth: String(WIDTH),
        format: 'json',
        formatversion: '2',
      });
    const res = await fetchWithRetry(url);
    if (!res.ok) throw new Error(`Commons metadata request failed (${res.status})`);
    const json = (await res.json()) as {
      query: { pages: { title: string; missing?: boolean; imageinfo?: ImageInfo[]; revisions?: { revid: number }[] }[] };
    };
    for (const page of json.query.pages) {
      if (page.imageinfo?.[0]) infoCache.set(titleOf(page.title), page.imageinfo[0]);
      if (page.revisions?.[0]) revisionCache.set(titleOf(page.title), `https://commons.wikimedia.org/w/index.php?oldid=${page.revisions[0].revid}`);
    }
  }
}

async function loadFlickr(entry: Entry) {
  if (!entry.flickr || !/^https:\/\/www\.flickr\.com\/photos\/[^/]+\/\d+\/?$/.test(entry.flickr)) throw new Error('Invalid Flickr source page');
  const response = await fetchWithRetry(entry.flickr);
  if (!response.ok) throw new Error(`Flickr source request failed (${response.status})`);
  const html = await response.text();
  interface FlickrImage { '@type': string; contentUrl: string; license: string; author: { name: string }; acquireLicensePage: string }
  let photo: FlickrImage | undefined;
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(match[1]) as { '@graph'?: FlickrImage[] };
    photo ??= data['@graph']?.find((item) => item['@type'] === 'ImageObject');
  }
  if (!photo || !photo.contentUrl?.startsWith('https://live.staticflickr.com/') || photo.acquireLicensePage.replace(/\/$/, '') !== entry.flickr.replace(/\/$/, '')) throw new Error('Flickr image/source information is incomplete');
  const licenseUrl = normalizeLicenseUrl(photo.license);
  const cc = licenseUrl?.match(/^https:\/\/creativecommons\.org\/licenses\/by(-sa)?\/(\d\.\d)$/);
  const license = cc ? `CC BY${cc[1] ? '-SA' : ''} ${cc[2]}` : licenseUrl === 'https://creativecommons.org/publicdomain/zero/1.0' ? 'CC0' : '';
  if (!reusablePhotoLicense(license, licenseUrl)) throw new Error('Flickr licence is not approved for reuse');
  const title = stripHtml(html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ?? '');
  const width = Number(html.match(/<meta property="og:image:width" content="(\d+)"/)?.[1]);
  const height = Number(html.match(/<meta property="og:image:height" content="(\d+)"/)?.[1]);
  if (!title || !width || !height || !photo.author?.name) throw new Error('Flickr title, dimensions or attribution is missing');
  infoCache.set(entryKey(entry), {
    title, url: photo.contentUrl, width, height, mime: 'image/jpeg', descriptionurl: entry.flickr,
    extmetadata: { Artist: { value: photo.author.name }, LicenseShortName: { value: license }, LicenseUrl: { value: licenseUrl! } },
  });
  revisionCache.set(entryKey(entry), entry.flickr);
}

let failures = 0;
async function run(familyId: string) {
  const manifest = JSON.parse(readFileSync(join(manifestDir, `${familyId}.json`), 'utf8')) as Entry[];
  const outPath = join(outData, `${familyId}.json`);
  const existing: Record<string, Photo> = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf8')) : {};
  const result: Record<string, Photo> = {};
  const imgDir = join(root, 'public/images', familyId);
  mkdirSync(imgDir, { recursive: true });

  for (const entry of manifest) {
    const [, variant = '_family'] = entry.key.split('/');
    try {
      const ii = infoCache.get(entryKey(entry));
      if (!ii) throw new Error(`photo source not found: ${entry.file ?? entry.flickr}`);
      const meta = ii.extmetadata;
      const license = stripHtml(meta.LicenseShortName?.value ?? '');
      const usage = stripHtml(meta.UsageTerms?.value ?? '');
      const licenseUrl = normalizeLicenseUrl(meta.LicenseUrl?.value);
      if (!reusablePhotoLicense(license, licenseUrl) || NOT_FREE.test(`${license} ${usage}`)) {
        throw new Error(`licence is not approved for reuse: ${license}`);
      }
      const permission = stripHtml(meta.Permission?.value ?? '');
      if (/please provide a link to the original file/i.test(permission)) throw new Error('original-source information is incomplete');
      if (meta.Restrictions?.value?.trim()) throw new Error('additional reuse restrictions need review');
      const revision = revisionCache.get(entryKey(entry));
      if (!revision) throw new Error('licence source revision is missing');
      const author = stripHtml(meta.Artist?.value ?? '');
      if (!author) throw new Error('photographer attribution is missing');
      const ext = ii.mime === 'image/png' ? 'png' : ii.mime === 'image/webp' ? 'webp' : 'jpg';
      const rel = `images/${familyId}/${variant}.${ext}`;
      const sourceUrl = ii.descriptionurl;
      // Skip the download if this exact file is already on disk.
      if (!(existing[entry.key]?.sourceUrl === sourceUrl && existsSync(join(root, 'public', rel)))) {
        const img = await fetchWithRetry(ii.thumburl ?? ii.url);
        if (!img.ok) throw new Error(`download failed (${img.status})`);
        if (!img.headers.get('content-type')?.startsWith('image/')) throw new Error('response is not an image');
        writeFileSync(join(root, 'public', rel), Buffer.from(await img.arrayBuffer()));
      }
      result[entry.key] = {
        title: ii.title ?? titleOf(entry.file!).replace(/^File:/, ''),
        src: rel,
        width: ii.thumbwidth ?? ii.width,
        height: ii.thumbheight ?? ii.height,
        alt: entry.alt,
        author,
        ...(entry.attribution ? { attribution: entry.attribution } : {}),
        license,
        licenseUrl,
        sourceUrl,
        licenseRevision: revision,
        licenseChecked: new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dhaka', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()),
        changes: 'Resized; may be cropped in page layouts.',
      };
      console.log(`  ✓ ${entry.key}  ${license}  ${author.slice(0, 40)}`);
    } catch (e) {
      failures++;
      // Do not keep a rejected licence in the active manifest. Preserve known,
      // audited records only when refreshing the same original failed.
      const previous = existing[entry.key];
      const sameSource = entry.file ? titleOf(entry.file) === titleOf(decodeURIComponent(previous?.sourceUrl.split('/wiki/')[1] ?? '')) : entry.flickr === previous?.sourceUrl;
      if (previous?.licenseRevision && previous.licenseChecked && reusablePhotoLicense(previous.license, previous.licenseUrl) && sameSource && existsSync(join(root, 'public', previous.src)) && !/licence|restrictions|incomplete|attribution/i.test((e as Error).message)) result[entry.key] = previous;
      console.log(`  ✗ ${entry.key}: ${(e as Error).message}`);
    }
    await new Promise((r) => setTimeout(r, 150)); // be polite to the API
  }
  mkdirSync(outData, { recursive: true });
  writeFileSync(outPath, JSON.stringify(result, null, 2) + '\n');
  console.log(`${familyId}: ${Object.keys(result).length}/${manifest.length} photos → src/data/photos/${familyId}.json`);
}

const args = process.argv.slice(2);
const ids = args.length ? args : readdirSync(manifestDir).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
const entries = ids.flatMap((id) => JSON.parse(readFileSync(join(manifestDir, `${id}.json`), 'utf8')) as Entry[]);
for (const entry of entries) if (Boolean(entry.file) === Boolean(entry.flickr)) throw new Error(`${entry.key}: choose one original photo source`);
await loadInfo(entries.flatMap((entry) => entry.file ? [entry.file] : []));
for (const entry of entries.filter((e) => e.flickr)) await loadFlickr(entry);
for (const id of ids) {
  console.log(`\n${id}`);
  await run(id);
}
process.exitCode = failures ? 1 : 0;
