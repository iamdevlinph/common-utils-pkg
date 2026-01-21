/**
 * Removes provided element from an array.
 *
 * @version 4.0.8
 * @module Array
 * @name arrayRemoveItem
 * @param {array} array of strings | numbers to remove element from
 * @param {string | number} toRemove to remove from the array
 * @returns {array} without the removed element.
 * @example
 *
 * arrayRemoveItem(['The', 'quick', 'brown'], 'The');
 * // => ['quick', 'brown']
 *
 * arrayRemoveItem([2, 4, 1], 4);
 * // => [2, 1]
 */

export const arrayRemoveItem = <T extends string | number>(
  array: T[],
  toRemove: T
) => {
  return array.filter((item) => item !== toRemove);
};
