/**
 * Removes provided element from an array.
 *
 * @version 4.0.8
 * @module Array
 * @name arrayRemoveItem
 * @param {array} array of strings to remove element from
 * @param {string} toRemove to remove from the array
 * @returns {array} of strings without the removed element.
 * @example
 *
 * arrayRemoveItem(['The', 'quick', 'brown'], 'The');
 * // => ['quick', 'brown']
 */

export const arrayRemoveItem = (array: string[], toRemove: string) => {
  return array.filter((item) => item !== toRemove);
};
