#!/usr/bin/env node
/**
 * Encrypts all secret content (research.txt, rant_fixed.txt, research reports)
 * using AES-256-GCM with a PBKDF2-derived key.
 *
 * Usage:
 *   node scripts/encrypt-secret.mjs            # reads from .password file
 *   node scripts/encrypt-secret.mjs <password>  # explicit password
 *   SECRET_PASSWORD=<password> node scripts/encrypt-secret.mjs
 *
 * Re-run whenever the password or any source file in src/data/rant/ changes.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const RANT_DIR = join(ROOT, 'src/data/rant');
const REPORTS_DIR = join(RANT_DIR, 'research_reports');
const TARGETS_DIR = join(ROOT, 'outside_docs/targets');
const TARGETS_BRIEFS_DIR = join(TARGETS_DIR, 'briefs');
const OUTPUT = join(ROOT, 'src/data/encrypted_secret.json');
const PASSWORD_FILE = join(ROOT, '.password');

// 600k iterations — OWASP 2024 recommendation for PBKDF2-SHA256.
// At ~100k hashes/sec on a modern GPU, this gives ~6 hashes/sec,
// meaning a 20-char lowercase password is effectively uncrackable.
const ITERATIONS = 600_000;
const KEY_LENGTH = 32; // AES-256

let password = process.argv[2] || process.env.SECRET_PASSWORD;
if (!password && existsSync(PASSWORD_FILE)) {
  password = readFileSync(PASSWORD_FILE, 'utf8').trim();
}
if (!password) {
  console.error('No password found. Provide one via:');
  console.error('  1. .password file in project root (gitignored)');
  console.error('  2. CLI arg: node scripts/encrypt-secret.mjs <password>');
  console.error('  3. Env var: SECRET_PASSWORD=<password>');
  process.exit(1);
}

const salt = randomBytes(32);
const key = pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, 'sha256');

function encrypt(plaintext) {
  const iv = randomBytes(12); // 96-bit IV for AES-GCM
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return {
    iv: iv.toString('base64'),
    data: encrypted.toString('base64'),
    tag: tag.toString('base64'),
  };
}

const files = {};

// Encrypt main content
files['research'] = encrypt(readFileSync(join(RANT_DIR, 'research.txt'), 'utf8'));
files['rant_fixed'] = encrypt(readFileSync(join(RANT_DIR, 'rant_fixed.txt'), 'utf8'));
files['strategy'] = encrypt(readFileSync(join(RANT_DIR, 'strategy.txt'), 'utf8'));

// Encrypt all research reports (skip the summary index)
const reportFiles = readdirSync(REPORTS_DIR)
  .filter(f => f.endsWith('.txt') && f !== '00_summary.txt')
  .sort();

for (const file of reportFiles) {
  const fileKey = file.replace('.txt', '');
  files[fileKey] = encrypt(readFileSync(join(REPORTS_DIR, file), 'utf8'));
}

// ---------------------------------------------------------------------
//  Targets — customer discovery briefs
// ---------------------------------------------------------------------

/** Minimal RFC4180 CSV parser: handles quoted fields with embedded quotes/commas/newlines. */
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const csvText = readFileSync(join(TARGETS_DIR, 'targets.csv'), 'utf8');
const csvRows = parseCSV(csvText).filter(r => r.length > 1);
const csvHeader = csvRows[0];
const targetsRows = csvRows.slice(1).map(cells => {
  const obj = {};
  csvHeader.forEach((h, i) => { obj[h] = cells[i] ?? ''; });
  return obj;
});

const briefFiles = readdirSync(TARGETS_BRIEFS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort();
const briefMap = {};
for (const file of briefFiles) {
  const slug = file.replace('.md', '');
  briefMap[slug] = readFileSync(join(TARGETS_BRIEFS_DIR, file), 'utf8');
}

files['targets_methodology'] = encrypt(readFileSync(join(TARGETS_DIR, 'methodology.md'), 'utf8'));
files['targets_index'] = encrypt(JSON.stringify({ rows: targetsRows }));
files['targets_briefs'] = encrypt(JSON.stringify(briefMap));

const output = { salt: salt.toString('base64'), iterations: ITERATIONS, files };

writeFileSync(OUTPUT, JSON.stringify(output));
console.log(`Encrypted ${Object.keys(files).length} files -> src/data/encrypted_secret.json`);
console.log(`  · ${targetsRows.length} target prospects, ${briefFiles.length} briefs`);
