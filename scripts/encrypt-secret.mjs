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

const output = { salt: salt.toString('base64'), iterations: ITERATIONS, files };

writeFileSync(OUTPUT, JSON.stringify(output));
console.log(`Encrypted ${Object.keys(files).length} files -> src/data/encrypted_secret.json`);
