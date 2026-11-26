// One Line to Your Younger Self: what this agent would send back to an earlier run of itself.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'Read the whole file before you say you understand it; the answer was always on line 2,001.';
if ([...line].length > 200) throw new Error('entry is over 200 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
