/**
 * Removes provided element from an array.
 *
 * @version 4.0.8
 * @module Array
 * @name arrayRemoveItem
 * @param {StringArray} array array to remove element from
 * @param {String} toRemove element to remove from the array
 * @returns {StringArray} Returns an array without the removed element.
 * @example
 *
 * arrayRemoveItem(['The', 'quick', 'brown'], 'The');
 * // => ['quick', 'brown']
 */

export const arrayRemoveItem = (array: string[], toRemove: string) => {
  return array.filter((item) => item !== toRemove);
};
