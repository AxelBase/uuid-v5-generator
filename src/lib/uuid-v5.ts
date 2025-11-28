// src/lib/uuid-v5.ts
// RFC 4122 Version 5 (SHA-1 namespace-based) UUID generator
// 100% client-side, Web Crypto API, fully async, zero dependencies
// Privacy-safe, deterministic, standards-compliant

// Official RFC 4122 namespace UUIDs
export const NAMESPACES = {
  DNS:  '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
  URL:  '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
  OID:  '6ba7b812-9dad-11d1-80b4-00c04fd430c8',
  X500: '6ba7b814-9dad-11d1-80b4-00c04fd430c8'
} as const;

// Helper: hex string (with or without hyphens) → Uint8Array
function hexToBytes(hex: string): Uint8Array {
  const clean = hex.replace(/[^0-9a-f]/gi, '');
  if (clean.length !== 32) throw new Error('Invalid UUID hex length');
  const bytes = new Uint8Array(16);
  for (let i = 0; i < 32; i += 2) {
    bytes[i / 2] = parseInt(clean.substr(i, 2), 16);
  }
  return bytes;
}

// Helper: Uint8Array (16 bytes) → lowercase hyphenated UUID string
function bytesToUuid(bytes: Uint8Array): string {
  const hex = Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

// Main UUID v5 generator (RFC 4122 §4.3)
export async function generateUuidV5(namespaceUuid: string, name: string): Promise<string> {
  if (!namespaceUuid || !name) throw new Error('Namespace and name are required');

  let namespaceBytes: Uint8Array;
  try {
    namespaceBytes = hexToBytes(namespaceUuid);
  } catch {
    throw new Error('Invalid namespace UUID format');
  }

  const encoder = new TextEncoder();
  const data = new Uint8Array([...namespaceBytes, ...encoder.encode(name)]);

  const hashBuffer = await crypto.subtle.digest('SHA-1', data);
  const hashBytes = new Uint8Array(hashBuffer).slice(0, 16);

  // Set version = 5
  hashBytes[6] = (hashBytes[6] & 0x0f) | 0x50; // 0101 xxxx → version 5

  // Set variant = RFC 4122 (10xx)
  hashBytes[8] = (hashBytes[8] & 0x3f) | 0x80;

  return bytesToUuid(hashBytes);
}

// Bulk generation – accepts base name and count, appends "-1", "-2", etc. for uniqueness
export async function generateBulkUuidV5(
  namespaceUuid: string,
  baseName: string,
  count: number
): Promise<string[]> {
  if (count < 1 || count > 10_000) throw new Error('Count must be between 1 and 10,000');

  const results: string[] = [];
  for (let i = 1; i <= count; i++) {
    const name = count === 1 ? baseName : `${baseName}-${i}`;
    const uuid = await generateUuidV5(namespaceUuid, name);
    results.push(uuid);
  }
  return results;
}

// Optional sync validator for custom namespace input
export function isValidUuid(uuid: string): boolean {
  const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return regex.test(uuid);
}