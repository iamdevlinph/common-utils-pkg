import LZString from 'lz-string';

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

  try {
    return JSON.parse(decompressed);
  } catch (e) {
    console.error('[storageGet] Failed to parse value for key:', key, e);
    return decompressed;
  }
};
