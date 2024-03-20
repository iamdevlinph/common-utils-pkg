/**
 * Convert an array to a string and combine on the delimiter passed.
 *
 * @version 1.0.0
 * @module String
 * @name arrayToString
 * @param {array} array to convert to string
 * @param {string} delimiter characater to use in combining to string
 * @returns {string} from the array.
 * @example
 *
 * arrayToString(['The', 'quick', 'brown'], '-');
 * // => 'The-brown-fox'
 */

export const arrayToString = (array: string[] | number[], delimiter: string) =>
  array.join(delimiter);
