const predefinedTrueValues = ['true', 'yes', 'y', '1'];
const toBool = (val, trueValuesArr = predefinedTrueValues) => {
  let valToTest;
  try {
    valToTest = val.toString().toLowerCase();
  } catch (e) {
    valToTest = val;
  }
  return trueValuesArr.includes(valToTest);
};

const BoolUtil = {
  toBool
};

export default BoolUtil;
