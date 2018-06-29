const { stack } = new Error();

const argTypesMatch = (arg, expectedType) => {
  let flag = false;
  const argType = typeof arg;
  switch (expectedType) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'object':
      flag = argType === expectedType;
      break;
    case 'array':
      flag = Array.isArray(arg);
      break;
  }
  return flag;
};

// currently only checks the first aguments
// to do:
// pass an array of expected types
// check if the arguments match the array of expected tyes
const isExpected = (someFunction, expected) => {
  // eslint-disable-next-line func-names
  const wrappedFunction = function () {
    // eslint-disable-next-line prefer-rest-params
    const arg = [...arguments][0]; // this will only get the 1st parameter
    const argType = typeof arg;
    if (argTypesMatch(arg, expected)) {
      // eslint-disable-next-line prefer-rest-params
      return someFunction(...arguments);
    }
    const errorFn = () => {
      const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
      throw (new Error(`Expected '${expected}' but received '${argType}' ${caller}`));
    };
    return errorFn();
  };
  return wrappedFunction;
};

const CoreUtil = {
  isExpected
};

export default CoreUtil;
