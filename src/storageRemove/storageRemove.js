/**
 * Removes an entry from the local storage.
 *
 * @module Storage
 * @name storageRemove
 * @param {String} key key of the entry to remove
 * @example
 *
 * storageRemove('key');
 */
const storageRemove = key => window.localStorage.removeItem(key);

export default storageRemove;
