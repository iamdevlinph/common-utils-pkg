import CoreUtil from '../core/core.util';

import arrToString from './methods/arrToString';
import toSentenceCase from './methods/toSentenceCase';
import toTitleCase from './methods/toTitleCase';

const StringUtil = {
  arrToString: CoreUtil.takes(
    arrToString, 'arrToString',
    { 0: 'array', 1: 'string' }
  ),

  toSentenceCase: CoreUtil.takes(
    toSentenceCase, 'toSentenceCase',
    { 0: 'string' }
  ),

  toTitleCase: CoreUtil.takes(
    toTitleCase, 'toTitleCase',
    { 0: 'string' }
  )
};

export default StringUtil;
