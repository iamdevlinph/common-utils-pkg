import LZString from 'lz-string';

/**
 * Retrieves data from the local storage.
 *
 * @module StorageUtil
 * @name getItem
 * @param {String} key key to retrieve
 * @returns {*} Returns data from the local storage.
 * @example
 *
 * StorageUtil.getItem('key');
 */
const getItem = key => LZString.decompress(window.location.getItem(key));

export default getItem;
