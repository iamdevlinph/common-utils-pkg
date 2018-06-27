const test = () => 'Common OK';

const isNull = (val) => {
  if (val === null || val === undefined) {
    throw Error(`invalid value passed: + ${val}`);
  }
};

const CommonUtil = {
  test,
  isNull
};

export default CommonUtil;
