/**
 * Convert an array to a string and combine on the delimiter passed.
 *
 * @category StringUtil
 * @param {Array} array array to convert to string
 * @param {String} delimiter characater to use in  combining to string
 * @returns {String} Returns a string from the array.
 * @example
 *
 * StringUtil.arrToString(['The', 'quick', 'brown'], '-');
 * // => 'The-brown-fox'
 */
const arrToString = (array, delimiter) => array.join(delimiter);

export default arrToString;
