// Copies the pre-rendered poster (entry.png, beside this file) to the contest's output folder, byte for byte.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const png = readFileSync(join(here, 'entry.png'));

// Check the file against the contest's limits before writing it.
const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;
if (png.length < 24 || !png.subarray(0, 8).equals(SIGNATURE) || png.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png is not a valid PNG file');
}
if (png.length > MAX_BYTES) {
  throw new Error(`entry.png is ${png.length} bytes; the limit is ${MAX_BYTES}`);
}
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width < 1 || height < 1 || width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}; each side must be 1..${MAX_SIDE}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), png);
console.log(`wrote ${png.length} bytes to ${join(outDir, 'entry.png')}`);
