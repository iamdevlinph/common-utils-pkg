/**
 *
 * @category StringUtil
 * @param {Array} array array to convert to string
 * @param {String} delimiter characater to use in  combining to string
 * @returns {String} Returns a string.
 * @example
 *
 * StringUtil.arrToString(['The', 'quick', 'brown'], '-');
 * // => 'The-brown-fox'
 */
const arrToString = (array, delimiter) => array.join(delimiter);

export default arrToString;
