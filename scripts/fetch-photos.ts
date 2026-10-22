/**
 * Downloads freely licensed dish photos from Wikimedia Commons and records
 * their attribution.
 *
 *   npm run photos -- paratha samosa     # specific families
 *   npm run photos                       # every manifest
 *
 * Input:  scripts/photos/<familyId>.json — a list of
 *           { "key": "paratha" | "paratha/roti-canai", "file": "File:Name.jpg", "alt": "…" }
 *         `key` is the family id (hero photo) or "familyId/variantId".
 * Output: public/images/<familyId>/<variantId|_family>.<ext>
 *         src/data/photos/<familyId>.json  (Photo records keyed by `key`)
 *
 * Only free licences are accepted (CC0, CC BY, CC BY-SA, public domain, GFDL).
 * Non-commercial or no-derivatives files are rejected.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Photo } from '../src/data/types';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const manifestDir = join(root, 'scripts/photos');
const outData = join(root, 'src/data/photos');
const UA = 'AWorldOnAPlate/0.1 (personal educational project; contact via repository)';
const WIDTH = 960;

interface Entry {
  key: string;
  file: string;
  alt: string;
}

const FREE = /^(cc0|cc[ -]by(-sa)?( \d(\.\d)?)?|cc[ -]by-sa|public domain|pd|gfdl|attribution|cc-by-sa-\d)/i;
const NOT_FREE = /\b(nc|nd|non-?commercial|no-?deriv|fair use)\b/i;

const stripHtml = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

async function info(file: string) {
  const title = file.startsWith('File:') ? file : `File:${file}`;
  const url =
    'https://commons.wikimedia.org/w/api.php?' +
    new URLSearchParams({
      action: 'query',
      titles: title,
      prop: 'imageinfo',
      iiprop: 'url|extmetadata|size|mime',
      iiurlwidth: String(WIDTH),
      format: 'json',
      formatversion: '2',
    });
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const json = (await res.json()) as {
    query: { pages: { missing?: boolean; imageinfo?: Record<string, unknown>[] }[] };
  };
  const page = json.query.pages[0];
  if (page.missing || !page.imageinfo) throw new Error(`not found on Commons: ${title}`);
  return page.imageinfo[0] as {
    thumburl: string;
    thumbwidth: number;
    thumbheight: number;
    mime: string;
    descriptionurl: string;
    extmetadata: Record<string, { value: string }>;
  };
}

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
      const ii = await info(entry.file);
      const meta = ii.extmetadata;
      const license = stripHtml(meta.LicenseShortName?.value ?? '');
      const usage = stripHtml(meta.UsageTerms?.value ?? '');
      if (!FREE.test(license) || NOT_FREE.test(`${license} ${usage}`)) {
        console.log(`  ✗ ${entry.key}: licence "${license}" is not free to reuse — pick another file`);
        continue;
      }
      const ext = ii.mime === 'image/png' ? 'png' : ii.mime === 'image/webp' ? 'webp' : 'jpg';
      const rel = `images/${familyId}/${variant}.${ext}`;
      const sourceUrl = ii.descriptionurl;
      // Skip the download if this exact file is already on disk.
      if (!(existing[entry.key]?.sourceUrl === sourceUrl && existsSync(join(root, 'public', rel)))) {
        const img = await fetch(ii.thumburl, { headers: { 'User-Agent': UA } });
        if (!img.ok) throw new Error(`download failed (${img.status})`);
        writeFileSync(join(root, 'public', rel), Buffer.from(await img.arrayBuffer()));
      }
      const author = stripHtml(meta.Artist?.value ?? '') || stripHtml(meta.Credit?.value ?? '') || 'Unknown';
      result[entry.key] = {
        src: rel,
        width: ii.thumbwidth,
        height: ii.thumbheight,
        alt: entry.alt,
        author: author.length > 80 ? `${author.slice(0, 77)}…` : author,
        license,
        licenseUrl: meta.LicenseUrl?.value,
        sourceUrl,
      };
      console.log(`  ✓ ${entry.key}  ${license}  ${author.slice(0, 40)}`);
    } catch (e) {
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
for (const id of ids) {
  console.log(`\n${id}`);
  await run(id);
}
