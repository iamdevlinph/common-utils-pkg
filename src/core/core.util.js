const test = () => 'Core OK';

const isNull = (val, utilName) => {
  if (val === null || val === undefined) {
    const { stack } = new Error();
    const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
    throw Error(`invalid value of ${val} passed: ${utilName} ${caller}()`);
  }
};

const CoreUtil = {
  test,
  isNull
};

export default CoreUtil;
