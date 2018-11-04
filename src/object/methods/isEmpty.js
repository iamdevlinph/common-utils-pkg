// https://stackoverflow.com/a/32108184/4110257
/**
 * Check if a given object is empty.
 *
 * @module ObjectUtil
 * @name isEmpty
 * @param {Object} object object to check
 * @returns {Boolean} Returns a boolean if the object is empty or not.
 * @example
 *
 * ObjectUtil.isEmpty({});
 * // => true
 *
 * ObjectUtil.isEmpty({ a: 1 });
 * // => false
 */
const isEmpty = object => Object.keys(object).length === 0 && object.constructor === Object;

export default isEmpty;
