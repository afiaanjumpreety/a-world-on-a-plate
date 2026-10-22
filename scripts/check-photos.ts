/** Validate the actual photographs and the attribution shipped with the site. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Photo } from '../src/data/types';
import { reusablePhotoLicense } from '../src/lib/photoLicense';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const photoDir = join(root, 'src/data/photos');
const errors: string[] = [];
let count = 0;
const originals = new Set<string>();
for (const file of readdirSync(photoDir).filter((f) => f.endsWith('.json'))) {
  const photos = JSON.parse(readFileSync(join(photoDir, file), 'utf8')) as Record<string, Photo>;
  const selections = JSON.parse(readFileSync(join(root, 'scripts/photos', file), 'utf8')) as { key: string; file?: string; flickr?: string; attribution?: string }[];
  for (const selection of selections) if (!photos[selection.key]) errors.push(`${selection.key}: selected photo is missing`);
  for (const [key, photo] of Object.entries(photos)) {
    count++;
    originals.add(photo.sourceUrl);
    if (!reusablePhotoLicense(photo.license, photo.licenseUrl)) errors.push(`${key}: unapproved licence or mismatched licence URL`);
    if (!photo.title || !photo.author || !photo.alt || !photo.changes) errors.push(`${key}: missing attribution or description`);
    const isCommons = /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(photo.sourceUrl);
    const isFlickr = /^https:\/\/www\.flickr\.com\/photos\/[^/]+\/\d+\/?$/.test(photo.sourceUrl);
    if (!isCommons && !isFlickr) errors.push(`${key}: original source is missing`);
    if (isCommons ? !/^https:\/\/commons\.wikimedia\.org\/w\/index\.php\?oldid=\d+$/.test(photo.licenseRevision) : !isFlickr || photo.licenseRevision !== photo.sourceUrl) errors.push(`${key}: licence evidence is missing`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(photo.licenseChecked)) errors.push(`${key}: licence audit date is missing`);
    const selection = selections.find((s) => s.key === key);
    if (!selection || (selection.file ? selection.file.replaceAll('_', ' ').replace(/^File:/, '') !== photo.title : selection.flickr !== photo.sourceUrl)) errors.push(`${key}: attribution belongs to a different selection`);
    if (selection?.attribution && selection.attribution !== photo.attribution) errors.push(`${key}: requested credit line is missing`);
    if (!photo.src.startsWith('images/') || photo.src.includes('..')) { errors.push(`${key}: invalid image path`); continue; }
    const path = join(root, 'public', photo.src);
    if (!existsSync(path)) { errors.push(`${key}: image file is missing`); continue; }
    const bytes = readFileSync(path);
    const isImage = bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff])) || bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) || (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP');
    if (!isImage || photo.width <= 0 || photo.height <= 0) errors.push(`${key}: invalid image data or dimensions`);
  }
}
for (const error of errors) console.error(`✗ ${error}`);
console.log(`${count} photo placements, ${originals.size} original photographs; ${errors.length} licence/asset problems.`);
process.exitCode = errors.length ? 1 : 0;
