import CoreUtil from '../core/core.util';

import convertBytes from './methods/convertBytes';

const FileUtil = {
  convertBytes: CoreUtil.takes(
    convertBytes,
    { 0: 'number' },
    { 1: 'number' }
  )
};

export default FileUtil;
