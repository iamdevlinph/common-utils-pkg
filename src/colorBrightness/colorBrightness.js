import expects from '../expects/expects';

// https://css-tricks.com/snippets/javascript/lighten-darken-color/
/* eslint-disable no-bitwise, eqeqeq */

/**
 * Brightens or darkens a HEX color based on the amount specified. Behaves like the SASS lighen and darken.
 * Will always return with # symbol.
 *
 * @module Color
 * @name colorBrightness
 * @param {String} hex HEX color to change brightness
 * @param {Number} amount positive or negative percentage
 * @returns {String} Returns a manipulated HEX color
 * @example
 *
 * colorBrightness('#3CB878', 50);
 * // => '#6EEAAA'
 *
 * colorBrightness('#3CB878', -50);
 * // => '#A8646'
 */
const colorBrightness = (hex, amount) => {
  let col = hex;

  if (col[0] == '#') {
    col = col.slice(1);
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  // pad 0's to the left to make it a valid 6 character hex
  // issue pointed out in the comments under the source code
  return (`#${(g | (b << 8) | (r << 16)).toString(16).padStart(6, 0)}`).toUpperCase();
};

export default expects(
  colorBrightness,
  'colorBrightness',
  {
    0: 'string',
    1: 'number'
  }
);
