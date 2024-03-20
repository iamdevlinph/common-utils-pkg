/**
 * Removes an entry from the local storage.
 *
 * @version 1.9.0
 * @module Storage
 * @name storageRemove
 * @param {string} key of the entry to remove
 * @example
 *
 * storageRemove('key');
 */
export const storageRemove = (key: string) =>
  window.localStorage.removeItem(key);
