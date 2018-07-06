import CoreUtil from '../core/core.util';

import convertBytes from './utils/convertBytes';

const FileUtil = {
  convertBytes: CoreUtil.takes(convertBytes, 'number')
};

export default FileUtil;
