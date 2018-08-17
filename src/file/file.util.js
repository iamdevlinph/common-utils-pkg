import CoreUtil from '../core/core.util';

import convertBytes from './methods/convertBytes';

const FileUtil = {
  convertBytes: CoreUtil.takes(convertBytes, 'number')
};

export default FileUtil;
