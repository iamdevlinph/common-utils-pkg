/**
 * Get a random pastel color.
 *
 * @version 1.0.0
 * @module Color
 * @name randomPastelColor
 * @returns {String} Returns an HSL color.
 * @example
 *
 * randomPastelColor();
 * // => 'hsl(85.78009756824814,31.861668997564585%,90.94781190317771%)'
 */
export const randomPastelColor = () => {
  const pastel = `hsl(${360 * Math.random()},${25 + 70 * Math.random()}%,${
    85 + 10 * Math.random()
  }%)`;
  return pastel;
};
