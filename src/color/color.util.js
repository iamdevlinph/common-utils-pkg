import CoreUtil from '../core/core.util';

import brightness from './methods/brightness';
import invertHexColor from './methods/invertHexColor';
import randomPastelColor from './methods/randomPastelColor';

const ColorUtil = {
  brightness: CoreUtil.takes(
    brightness,
    { 0: 'string', 1: 'number' }
  ),

  invertHexColor: CoreUtil.takes(
    invertHexColor,
    { 0: 'string' }
  ),

  randomPastelColor
};

export default ColorUtil;
