// https://css-tricks.com/snippets/javascript/lighten-darken-color/
/* eslint-disable no-bitwise, eqeqeq */

/**
 * Brightens or darkens a HEX color based on the amount specified. Behaves like the SASS lighen and darken.
 *
 * @module ColorUtil
 * @name brightness
 * @param {String} hex HEX color to change brightness
 * @param {Number} amount positive or negative percentage
 * @returns {String} Returns a manipulated HEX color
 * @example
 *
 * ColorUtil.brightness('#3CB878', 50);
 * // => '#6EEAAA'
 *
 * ColorUtil.brightness('#3CB878', -50);
 * // => '#A8646'
 */
const brightness = (hex, amount) => {
  let usePound = false;
  let col = hex;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
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
  return ((usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16).padStart(6, 0)).toUpperCase();
};

export default brightness;
