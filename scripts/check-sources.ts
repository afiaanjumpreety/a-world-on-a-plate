/**
 * Checks every family's references: each URL must load, and every "[n]"
 * citation in the text must point at a real source.
 *
 *   npm run sources -- paratha      # one family
 *   npm run sources                 # all
 */
import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { DishFamily } from '../src/data/types';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dir = join(root, 'src/data/families');
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36';
const CITE = /\[(\d+(?:\s*,\s*\d+)*)\]/g;

/** Every string in the family that may carry citations. */
function texts(f: DishFamily): { where: string; text: string }[] {
  const out = [
    { where: 'intro', text: f.intro },
    { where: 'etymology', text: f.etymology },
    { where: 'confidenceNote', text: f.origin.confidenceNote },
    ...f.history.map((t, i) => ({ where: `history[${i}]`, text: t })),
    ...f.commonThreads.map((t, i) => ({ where: `commonThreads[${i}]`, text: t })),
    ...f.timeline.map((t, i) => ({ where: `timeline[${i}]`, text: t.event })),
    ...f.divergences.map((d, i) => ({ where: `divergences[${i}]`, text: d.text })),
  ];
  for (const v of f.variants) {
    out.push({ where: `${v.id}.arrival`, text: v.arrival });
    out.push({ where: `${v.id}.summary`, text: v.summary });
    v.story.forEach((t, i) => out.push({ where: `${v.id}.story[${i}]`, text: t }));
    v.signature.forEach((t, i) => out.push({ where: `${v.id}.signature[${i}]`, text: t }));
  }
  return out;
}

async function status(url: string): Promise<number> {
  for (const method of ['HEAD', 'GET']) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', headers: { 'User-Agent': UA, Accept: 'text/html,*/*' }, signal: AbortSignal.timeout(15000) });
      if (res.ok || method === 'GET') return res.status;
    } catch {
      if (method === 'GET') return 0;
    }
  }
  return 0;
}

let errors = 0;
const offline = process.argv.includes('--offline');
const only = process.argv.slice(2).filter((arg) => arg !== '--offline');
const urlStatuses = new Map<string, Promise<number>>();
for (const file of readdirSync(dir).filter((f) => f.endsWith('.ts'))) {
  const mod = await import(pathToFileURL(join(dir, file)).href);
  for (const fam of Object.values(mod) as DishFamily[]) {
    if (!fam || typeof fam !== 'object' || !('variants' in fam)) continue;
    if (only.length && !only.includes(fam.id)) continue;
    const sources = fam.sources ?? [];
    console.log(`\n${fam.name}: ${sources.length} sources`);
    if (!sources.length) {
      console.log('  ✗ no sources');
      errors++;
      continue;
    }
    const used = new Set<number>();
    for (const v of fam.variants) {
      if (!v.sourceRefs?.length) {
        console.log(`  ✗ ${v.id}: no reference links`);
        errors++;
      }
      for (const n of v.sourceRefs ?? []) {
        used.add(n);
        if (!Number.isInteger(n) || n < 1 || n > sources.length) {
          console.log(`  ✗ ${v.id}: reference ${n} does not exist`);
          errors++;
        }
      }
    }
    for (const s of sources) {
      if (!s.title || !s.publisher || !s.supports || !/^https:\/\//.test(s.url)) {
        console.log(`  ✗ incomplete reference: ${s.title}`);
        errors++;
      }
    }
    for (const { where, text } of texts(fam))
      for (const m of text.matchAll(CITE))
        for (const n of m[1].split(',').map((s) => Number(s.trim()))) {
          used.add(n);
          if (n < 1 || n > sources.length) {
            console.log(`  ✗ ${where}: cites [${n}] but there are ${sources.length} sources`);
            errors++;
          }
        }
    if (offline) {
      console.log(`  ✓ ${used.size} referenced entries; all citation numbers resolve`);
      continue;
    }
    const results = await Promise.all(sources.map((s) => {
      if (!urlStatuses.has(s.url)) urlStatuses.set(s.url, status(s.url));
      return urlStatuses.get(s.url)!;
    }));
    sources.forEach((s, i) => {
      const code = results[i];
      // 401/403/429 are usually bot-blocking on a live page; flag them for a manual look.
      const mark = code >= 200 && code < 400 ? '✓' : [401, 403, 429].includes(code) ? '?' : '✗';
      if (mark === '✗') errors++;
      console.log(`  ${mark} [${i + 1}] ${code || 'ERR'} ${s.publisher} — ${s.title}${used.has(i + 1) ? '' : '  (never cited)'}`);
    });
  }
}
console.log(`\n${errors} problems`);
process.exit(errors ? 1 : 0);
