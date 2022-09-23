// https://stackoverflow.com/a/196991/4620773

/**
 * Converts a string to a Title Case.
 *
 * @version 1.0.0
 * @module String
 * @name toTitleCase
 * @param {String} string string to convert to Title Case
 * @returns {String} Returns a Tile Case string.
 * @example
 *
 * toTitleCase('the quick brown fox');
 * // => 'The Quick Brown Fox'
 */
export const toTitleCase = (string: string) =>
  string
    .toLowerCase()
    .replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
