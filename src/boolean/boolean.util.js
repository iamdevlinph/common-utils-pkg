// import CoreUtil from '../core/core.util';
// const utilName = 'BoolUtil';

const toBool = (val) => {
  let valToTest;
  try {
    valToTest = val.toString().toLowerCase();
  } catch (e) {
    valToTest = val;
  }
  const trueValuesArr = ['true', 'yes', 'y', '1'];
  return trueValuesArr.includes(valToTest);
};

const BoolUtil = {
  toBool
};

export default BoolUtil;
