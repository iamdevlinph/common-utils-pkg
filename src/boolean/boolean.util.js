import CoreUtil from '../core/core.util';

const utilName = 'BoolUtil';
const test = () => 'Boolean OK';

const toBool = (val) => {
  CoreUtil.isNull(val, utilName);
  const valToTest = val.toString().toLowerCase();
  const trueValesArr = ['true', 'yes', 'y', '1'];
  return trueValesArr.includes(valToTest);
};

const BoolUtil = {
  test,
  toBool
};

export default BoolUtil;
