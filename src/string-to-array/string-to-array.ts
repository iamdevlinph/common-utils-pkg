/**
 * Splits a string to an array based on the delimiter passed.
 *
 * @ignore Removed v4.2.0
 * @version 1.0.0
 * @module Array
 * @name stringToArray
 * @param {string} string to convert to array
 * @param {string} delimiter character where to split the string
 * @returns {array} of the split string.
 * @example
 *
 * stringToArray('apple;banana;orange', ';');
 * // => ['apple', 'banana', 'orange']
 */
export const stringToArray = (string: string, delimiter: string) =>
  string.split(delimiter);
