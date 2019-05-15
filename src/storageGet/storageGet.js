import LZString from 'lz-string';

/**
 * Retrieves data from the local storage.
 *
 * @module Storage
 * @name storageGet
 * @param {String} key key to retrieve
 * @returns {Any} Returns data from the local storage. Returns '' if key is not found
 * @example
 *
 * storageGet('key');
 */
const storageGet = (key) => {
  let value = LZString.decompress(window.localStorage.storageGet(key));
  try {
    value = JSON.parse(value);
  } catch (e) {
    console.error('[storageGet] key was not found in the storage');
  }

  return value;
};

export default storageGet;
