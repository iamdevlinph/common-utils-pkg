import LZString from 'lz-string';
import expects from '../expects/expects';

/**
 * Stores data to the local storage.
 *
 * @module Storage
 * @name storageSet
 * @param {String} key name of the entry
 * @param {*} data data to store in the local storage
 * @example
 *
 * storageSet('key', data);
 */
const storageSet = (key, data) => window.localStorage.setItem(key, LZString.compress(JSON.stringify(data)));

export default expects(
  storageSet,
  'storageSet',
  {
    0: 'string',
    1: 'any'
  }
);
