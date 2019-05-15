import expects from '../expects/expects';

// https://stackoverflow.com/a/35970186/4110257

const padZero = (str, len) => {
  let newLen = len;
  newLen = newLen || 2;
  const zeros = new Array(newLen).join('0');
  return (zeros + str).slice(-newLen);
};

/**
 * Inverts a HEX color.
 *
 * @module Color
 * @name invertColor
 * @param {String} hex hex color to convert
 * @returns {String} Returns a HEX color string.
 * @example
 *
 * invertColor('#E3CCA8');
 * // => '#1C3357'
 *
 * invertColor('ccc');
 * // => '#333333'
 */
const invertColor = (hex) => {
  let newHex = hex;
  if (newHex.indexOf('#') === 0) {
    newHex = newHex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (newHex.length === 3) {
    newHex = newHex[0] + newHex[0] + newHex[1] + newHex[1] + newHex[2] + newHex[2];
  }
  if (newHex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  const r = (255 - parseInt(newHex.slice(0, 2), 16)).toString(16);
  const g = (255 - parseInt(newHex.slice(2, 4), 16)).toString(16);
  const b = (255 - parseInt(newHex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return `#${padZero(r)}${padZero(g)}${padZero(b)}`.toUpperCase();
};

export default expects(
  invertColor,
  'invertColor',
  {
    0: 'string'
  }
);
