const test = () => 'Core OK';

const isNull = (val, utilName) => {
  if (val === null || val === undefined) {
    throw Error(`invalid value passed: ${val} at ${utilName}`);
  }
};

const CoreUtil = {
  test,
  isNull
};

export default CoreUtil;
