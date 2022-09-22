const predefinedTrueValues = [true, 'true', 'yes', 'y', '1', 1];

/**
 * Converts any value to a Boolean equivalent.
 *
 * **Note:** If no user-defined array is passed, the default true values are:
 *
 * [true, 'true', 'yes', 'y', '1', 1].
 *
 * @module Boolean
 * @name toBoolean
 * @param val value to check if true or false
 * @param trueValuesArr optional array of user defined true values
 * @returns returns a boolean equivalent of the value.
 */
export const toBoolean = (
  val: boolean | string | number,
  trueValuesArr = predefinedTrueValues
) => {
  let valToTest;
  try {
    valToTest = val.toString().toLowerCase();
  } catch (e) {
    valToTest = val;
  }
  return (
    ([...predefinedTrueValues, ...trueValuesArr] as string[]).indexOf(
      valToTest
    ) > -1
  );
};
