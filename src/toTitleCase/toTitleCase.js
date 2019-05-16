import expects from '../expects/expects';

// https://stackoverflow.com/a/196991/4620773

/**
 * Converts a string to a Title Case.
 *
 * @module String
 * @name toTitleCase
 * @param {String} string string to convert to Title Case
 * @returns {String} Returns a Tile Case string.
 * @example
 *
 * toTitleCase('the quick brown fox');
 * // => 'The Quick Brown Fox'
 */
const toTitleCase = string => string.toLowerCase().replace(
  /\w\S*/g,
  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
);

export default expects(
  toTitleCase,
  'toTitleCase',
  {
    0: 'string'
  }
);
