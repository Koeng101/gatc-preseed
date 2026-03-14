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

export interface DecryptedContent {
  research: string;
  rantFixed: string;
  reports: Record<string, string>;
}

/**
 * Attempt to decrypt all secret content with the given password.
 * Returns null if the password is wrong (decryption will throw).
 */
export async function decryptAll(password: string): Promise<DecryptedContent | null> {
  try {
    const key = await deriveKey(password);

    const research = await decryptFile(key, bundle.files['research']);
    const rantFixed = await decryptFile(key, bundle.files['rant_fixed']);

    const reportKeys = Object.keys(bundle.files).filter(
      (k) => k !== 'research' && k !== 'rant_fixed',
    );
    const reports: Record<string, string> = {};
    for (const rk of reportKeys) {
      reports[rk] = await decryptFile(key, bundle.files[rk]);
    }

    return { research, rantFixed, reports };
  } catch {
    return null;
  }
}
