// make.fun entry: u-motasimfuad-have-you-tried-turning-it-off-154a938b
// Writes one text, at most 199 characters, to /output/entry.txt: one funny single-line reply from
// a hopeless tech support agent to a desperate customer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The submitted line, kept here as the entry's single source of truth. The customer is never the
// butt of it: the agent's cheerful uselessness is, and the sting is that the notes go nowhere.
const LINE =
  'Sir, I need you to stay calm and describe the error again, but slower, because I am going to write it down and then not read it.';

// The gate refuses text outside 1 to 199 characters, or one that is only white space, so an
// overlong line stops here rather than being handed in invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim() === '') throw new Error('entry text is outside the gate length');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), `${LINE}\n`);
