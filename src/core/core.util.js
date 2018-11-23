import argTypesMatch from './methods/argTypesMatch';
import takes from './methods/takes';

const CoreUtil = {
  argTypesMatch: takes(
    argTypesMatch, 'argTypesMatch',
    { 0: 'any', 1: 'string' }
  ),

  takes
};

export default CoreUtil;
