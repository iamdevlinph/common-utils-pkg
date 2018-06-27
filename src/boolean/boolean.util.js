import CommonUtil from '../common/common.util';

const test = () => 'Boolean OK';

const toBool = (val) => {
  CommonUtil.isNull(val);
  const valToTest = val.toString().toLowerCase();
  const trueValesArr = ['true', 'yes', 'y', '1'];
  return trueValesArr.includes(valToTest);
};

const BooleanUtil = {
  test,
  toBool
};

export default BooleanUtil;
