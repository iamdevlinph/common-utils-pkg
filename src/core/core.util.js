const test = () => 'Core OK';

const isNull = (val, utilName) => {
  let flag = false;
  if (val === null || val === undefined) {
    if (utilName) {
      const { stack } = new Error();
      const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
      console.error(`invalid value of ${val} passed: ${utilName} ${caller}()`);
    }
    flag = true;
  }
  return flag;
};

const CoreUtil = {
  test,
  isNull
};

export default CoreUtil;
