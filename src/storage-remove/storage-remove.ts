/**
 * Removes an entry from the local storage.
 *
 * @module Storage
 * @name storageRemove
 * @param key key of the entry to remove
 * @example
 *
 * storageRemove('key');
 */
export const storageRemove = (key: string) =>
  window.localStorage.removeItem(key);
