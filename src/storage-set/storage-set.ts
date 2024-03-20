import LZString from 'lz-string';

/**
 * Stores data to the local storage.
 *
 * @version 1.9.0
 * @module Storage
 * @name storageSet
 * @param {string} key name of the entry
 * @param {*} data data to store in the local storage
 * @example
 *
 * storageSet('key', data);
 */
export const storageSet = (key: string, data: unknown) =>
  window.localStorage.setItem(key, LZString.compress(JSON.stringify(data)));
