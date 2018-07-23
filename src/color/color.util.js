import CoreUtil from '../core/core.util';

import invertHexColor from './utils/invertHexColor';
import randomPastelColor from './utils/randomPastelColor';

const ColorUtil = {
  invertHexColor: CoreUtil.takes(invertHexColor, 'string'),
  randomPastelColor
};

export default ColorUtil;
