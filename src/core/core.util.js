const { stack } = new Error();

const test = () => 'Core OK';

const isNull = (val, utilName) => {
  let flag = false;
  if (val === null || val === undefined) {
    if (utilName) {
      const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
      console.error(`null or undefined passed on ${utilName} ${caller}()`);
    }
    flag = true;
  }
  return flag;
};

/**
 *
 * @param {String} val value to check
 * @param {String} expectedType expected type of value
 */
const isExpected = (val, expectedType) => {
  let flag = false;
  const valType = typeof val;
  if (!isNull(val) && valType === expectedType) {
    flag = true;
  } else {
    const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
    console.error(`expected ${expectedType} but received ${valType} at ${caller}`);
  }
  return flag;
};

const CoreUtil = {
  test,
  isNull,
  isExpected
};

export default CoreUtil;
