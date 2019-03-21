import LZString from 'lz-string';

/**
 * Retrieves data from the local storage.
 *
 * @module StorageUtil
 * @name getItem
 * @param {String} key key to retrieve
 * @returns {Any} Returns data from the local storage. Returns '' if key is not found
 * @example
 *
 * StorageUtil.getItem('key');
 */
const getItem = (key) => {
  let value = LZString.decompress(window.localStorage.getItem(key));
  try {
    value = JSON.parse(value);
  } catch (e) {
    console.error('[getItem] key was not found in the storage');
  }

  return value;
};

export default getItem;
