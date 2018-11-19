import CoreUtil from '../core/core.util';

import brightness from './methods/brightness';
import invertHexColor from './methods/invertHexColor';
import randomPastelColor from './methods/randomPastelColor';

const ColorUtil = {
  brightness: CoreUtil.takes(brightness, 'string'),
  invertHexColor: CoreUtil.takes(invertHexColor, 'string'),
  randomPastelColor
};

export default ColorUtil;
