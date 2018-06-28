import CoreUtil from '../core/core.util';

const utilName = 'BoolUtil';
const test = () => 'Boolean OK';

const toBool = (val) => {
  let retToBool = new Error('value can\'t be parsed to boolean');
  if (!CoreUtil.isNull(val, utilName)) {
    const valToTest = val.toString().toLowerCase();
    const trueValesArr = ['true', 'yes', 'y', '1'];
    retToBool = trueValesArr.includes(valToTest);
  }
  return retToBool;
};

const BoolUtil = {
  test,
  toBool
};

export default BoolUtil;
