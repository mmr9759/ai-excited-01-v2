// ai-excited-01 v2 — "Aurora Phoenix over the Sleeping Village" (Node 22, stdlib only).
// The entry image lives beside this file; the program places an exact copy at
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
// Nothing is drawn at run time, so both runs write byte-identical output.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
