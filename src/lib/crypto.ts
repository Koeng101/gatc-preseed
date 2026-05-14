import encryptedBundle from '../data/encrypted_secret.json';

interface EncryptedFile {
  iv: string;
  data: string;
  tag: string;
}

interface EncryptedBundle {
  salt: string;
  iterations: number;
  files: Record<string, EncryptedFile>;
}

const bundle = encryptedBundle as EncryptedBundle;

function b64ToUint8(b64: string): Uint8Array<ArrayBuffer> {
  const bin = atob(b64);
  const buf = new ArrayBuffer(bin.length);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return arr;
}

async function deriveKey(password: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: b64ToUint8(bundle.salt),
      iterations: bundle.iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  );
}

async function decryptFile(key: CryptoKey, file: EncryptedFile): Promise<string> {
  const iv = b64ToUint8(file.iv);
  const data = b64ToUint8(file.data);
  const tag = b64ToUint8(file.tag);

  // WebCrypto AES-GCM expects auth tag appended to ciphertext
  const combined = new Uint8Array(data.length + tag.length);
  combined.set(data);
  combined.set(tag, data.length);

  const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, combined);
  return new TextDecoder().decode(plainBuf);
}

export interface TargetRow {
  score: string;
  tier: string;
  company: string;
  modality: string;
  stage: string;
  outreach_difficulty: string;
  hq_city: string;
  hq_country: string;
  founded_year: string;
  total_raised_usd: string;
  last_round_type: string;
  last_round_amount_usd: string;
  last_round_date: string;
  bench_headcount: string;
  in_house_dna_synth: string;
  in_house_protein_prod: string;
  service_fit_summary: string;
  max_estimated_annual_orders: string;
  hiring_wet_lab: string;
  contact_count: string;
  contacts: string;
  confidence: string;
  recommended_pitch: string;
  rationale: string;
  brief_path: string;
}

export interface DecryptedContent {
  research: string;
  rantFixed: string;
  strategy: string;
  reports: Record<string, string>;
  targetsMethodology: string;
  targetsRows: TargetRow[];
  targetsBriefs: Record<string, string>;
}

const TARGETS_KEYS = new Set(['targets_methodology', 'targets_index', 'targets_briefs']);
const RESERVED_KEYS = new Set(['research', 'rant_fixed', 'strategy', ...TARGETS_KEYS]);

/**
 * Attempt to decrypt all secret content with the given password.
 * Returns null if the password is wrong (decryption will throw).
 */
export async function decryptAll(password: string): Promise<DecryptedContent | null> {
  try {
    const key = await deriveKey(password);

    const research = await decryptFile(key, bundle.files['research']);
    const rantFixed = await decryptFile(key, bundle.files['rant_fixed']);
    const strategy = await decryptFile(key, bundle.files['strategy']);

    const targetsMethodology = await decryptFile(key, bundle.files['targets_methodology']);
    const targetsIndexJson = await decryptFile(key, bundle.files['targets_index']);
    const targetsBriefsJson = await decryptFile(key, bundle.files['targets_briefs']);
    const { rows: targetsRows } = JSON.parse(targetsIndexJson) as { rows: TargetRow[] };
    const targetsBriefs = JSON.parse(targetsBriefsJson) as Record<string, string>;

    const reportKeys = Object.keys(bundle.files).filter((k) => !RESERVED_KEYS.has(k));
    const reports: Record<string, string> = {};
    for (const rk of reportKeys) {
      reports[rk] = await decryptFile(key, bundle.files[rk]);
    }

    return { research, rantFixed, strategy, reports, targetsMethodology, targetsRows, targetsBriefs };
  } catch {
    return null;
  }
}
