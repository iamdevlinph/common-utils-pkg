import CoreUtil from '../core/core.util';

import arrToString from './utils/arrToString';
import toSentenceCase from './utils/toSentenceCase';
import toTitleCase from './utils/toTitleCase';

const StringUtil = {
  arrToString: CoreUtil.takes(arrToString, 'array'),
  toSentenceCase: CoreUtil.takes(toSentenceCase, 'string'),
  toTitleCase: CoreUtil.takes(toTitleCase, 'string')
};

export default StringUtil;
