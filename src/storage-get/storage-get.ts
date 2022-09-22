import LZString from 'lz-string';

/**
 * Retrieves data from the local storage.
 *
 * @module Storage
 * @name storageGet
 * @param key key to retrieve
 * @returns Returns data from the local storage. Returns '' if key is not found
 * @example
 *
 * storageGet('key');
 */
export const storageGet = (key: string): unknown | string => {
  let value = LZString.decompress(window.localStorage.getItem(key));
  try {
    value = JSON.parse(value);
  } catch (e) {
    console.error('[storageGet] key was not found in the storage');
  }

  return value;
};
