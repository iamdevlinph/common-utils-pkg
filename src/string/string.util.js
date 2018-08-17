import CoreUtil from '../core/core.util';

import arrToString from './methods/arrToString';
import toSentenceCase from './methods/toSentenceCase';
import toTitleCase from './methods/toTitleCase';

const StringUtil = {
  arrToString: CoreUtil.takes(arrToString, 'array'),
  toSentenceCase: CoreUtil.takes(toSentenceCase, 'string'),
  toTitleCase: CoreUtil.takes(toTitleCase, 'string')
};

export default StringUtil;
