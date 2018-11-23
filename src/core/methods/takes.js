import argTypesMatch from './argTypesMatch';

let errorMsg = '';

const getType = (val) => {
  let type = typeof val;
  if (val && Array.isArray(val)) {
    type = 'array';
  }
  if (val && val.constructor === Object) {
    type = 'object';
  }
  if (val === null) {
    type = 'null';
  }
  return type;
};

const generateErrorMessage = (type, caller, expectType, idx, receivedType) => `Method [${caller}] `
  + `expects [${expectType}] type on ${type} parameter [${+idx + 1}] `
  + `but received [${receivedType}]`;

const doTypesMatch = (args, fnName, reqArgs, optArgs) => {
  let theyMatch = true;
  const allArgs = { ...reqArgs, ...optArgs };
  Object.keys(allArgs).forEach((val) => {
    const receivedType = getType(args[val]);
    // only return first occurence of error
    // start from required
    if (typeof args[val] === 'undefined' && Object.prototype.hasOwnProperty.call(optArgs, val)) {
      // do nothing
      // if undefined but arg is optional
    } else if (reqArgs[val] === 'any') {
      // do nothing
      // accepts any type
    } else if (theyMatch
      && (Object.prototype.hasOwnProperty.call(reqArgs, val)
      && !argTypesMatch(args[val], reqArgs[val]))) {
      // checking for required args
      errorMsg = generateErrorMessage('required', fnName, reqArgs[val], val, receivedType);
      theyMatch = false;
    } else if (theyMatch
      && (Object.prototype.hasOwnProperty.call(optArgs, val)
      && !argTypesMatch(args[val], optArgs[val]))) {
      // if arg has value and it is an optional arg
      errorMsg = generateErrorMessage('optional', fnName, optArgs[val], val, receivedType);
      theyMatch = false;
    }
  });

  return theyMatch;
};

/**
 *
 * @ignore
 * @param {Function} someFunction function to wrap
 * @param {String} fnName name of method
 * @param {Object} reqArgs object of required types
 * @param {Object} [optArgs=null] object of expected types
 */
const takes = (someFunction, fnName, reqArgs, optArgs = {}) => {
  // eslint-disable-next-line func-names
  const wrappedFunction = function () {
    // eslint-disable-next-line prefer-rest-params
    if (!doTypesMatch(arguments, fnName, reqArgs, optArgs)) {
      throw new Error(errorMsg);
    } else {
      // return the function if the types match
      // eslint-disable-next-line prefer-rest-params
      return someFunction(...arguments);
    }
  };
  return wrappedFunction;
};

export default takes;
