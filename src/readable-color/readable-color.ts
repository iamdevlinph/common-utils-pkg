/**
 * Returns a readable light/dark color based on the provided HEX value. User can provide custom light/dark values.
 *
 * @version 4.2.1
 * @module Color
 * @name readableColor
 * @param {string} hex HEX color to change brightness
 * @param {Object} [options] user provided object to override default colors
 * @param {string} [options.light] light color
 * @param {string} [options.dark] dark color
 * @returns {string} light/dark hex value.
 * @example
 *
 * readableColor('#222001');
 * // => '#ffffff'
 *
 * readableColor('#baebd8');
 * // => '#24292f'
 *
 * readableColor('#261104', { light: '#fcf' });
 * // => '#fcf'
 *
 * readableColor('#fbdbd7', { dark: '#000' });
 * // => '#A8646'
 *
 * readableColor('#013735', { light: '#fcf', dark: '#000' });
 * // => '#fcf'
 *
 * readableColor('#defbf7', { light: '#fcf', dark: '#000' });
 * // => '#000'
 */

export const readableColor = (
  hex: string,
  options?: { light?: string; dark?: string }
) => {
  const { light = '#ffffff', dark = '#24292f' } = options || {};
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 155 ? dark : light;
};
