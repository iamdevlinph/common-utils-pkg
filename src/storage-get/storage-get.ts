import LZString from 'lz-string';

import { safeJsonParse } from '../safe-json-parse/safe-json-parse';

/**
 * Retrieves data from the local storage.
 *
 * @version 1.9.0
 * @module Storage
 * @name storageGet
 * @param {string} key to retrieve
 * @returns {*} data from the local storage. Returns '' if key is not found
 * @example
 *
 * storageGet('key');
 */

export const storageGet = (key: string): unknown | string => {
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;

  const decompressed = LZString.decompress(raw);
  if (!decompressed) return null;

  const jsonParseResult = safeJsonParse(decompressed);
  if (jsonParseResult.ok) return jsonParseResult.value;

  console.error(
    '[storageGet] Failed to parse value for key:',
    key,
    jsonParseResult.error
  );
  return decompressed;
};
