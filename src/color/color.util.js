import CoreUtil from '../core/core.util';

import invertHexColor from './methods/invertHexColor';
import randomPastelColor from './methods/randomPastelColor';

const ColorUtil = {
  invertHexColor: CoreUtil.takes(invertHexColor, 'string'),
  randomPastelColor
};

export default ColorUtil;
