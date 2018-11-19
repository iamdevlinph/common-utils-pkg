/**
 * Removes an entry from the local storage.
 *
 * @module StorageUtil
 * @name removeItem
 * @param {String} key key of the entry to remove
 * @example
 *
 * StorageUtil.removeItem('key');
 */
const removeItem = key => window.localStorage.removeItem(key);

export default removeItem;
