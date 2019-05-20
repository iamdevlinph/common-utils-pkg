import expects from '../expects/expects';

/**
 * Convert an array to a string and combine on the delimiter passed.
 *
 * @module String
 * @name arrayToString
 * @param {AnyArray} array array to convert to string
 * @param {String} delimiter characater to use in  combining to string
 * @returns {String} Returns a string from the array.
 * @example
 *
 * arrayToString(['The', 'quick', 'brown'], '-');
 * // => 'The-brown-fox'
 */
const arrayToString = (array, delimiter) => array.join(delimiter);

export default expects(
  arrayToString,
  'arrayToString',
  {
    0: 'array',
    1: 'string'
  }
);
