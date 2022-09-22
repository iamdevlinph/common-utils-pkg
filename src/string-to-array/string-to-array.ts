/**
 * Splits a string to an array based on the delimiter passed.
 *
 * @module Array
 * @name stringToArray
 * @param string string to convert to array
 * @param delimiter where to split the string
 * @returnsr returns an array version of the string
 * @example
 *
 * stringToArray('apple;banana;orange', ';');
 * // => ['apple', 'banana', 'orange']
 */
export const stringToArray = (string: string, delimiter: string) =>
  string.split(delimiter);
