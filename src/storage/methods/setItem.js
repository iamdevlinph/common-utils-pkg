import LZString from 'lz-string';

/**
 * Stores data to the local storage.
 *
 * @module StorageUtil
 * @name setItem
 * @param {String} key name of the entry
 * @param {*} data data to store in the local storage
 * @example
 *
 * StorageUtill.setItem('key', data);
 */
const setItem = (key, data) => window.localStorage.setItem(key, LZString.compress(JSON.stringify(data)));

export default setItem;
