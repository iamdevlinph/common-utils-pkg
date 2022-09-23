import LZString from 'lz-string';

/**
 * Retrieves data from the local storage.
 *
 * @version 1.9.0
 * @module Storage
 * @name storageGet
 * @param {String} key key to retrieve
 * @returns {Any} Returns data from the local storage. Returns '' if key is not found
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
