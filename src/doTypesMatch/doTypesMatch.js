// bypass dependency cycle
// doTypesMatch requires expects
// expects requires doTypesMatch
import doTypesMatch from './doTypesMatchFn';
import expects from '../expects/expects';

export default expects(
  doTypesMatch,
  'doTypesMatch',
  {
    0: 'any',
    1: 'string'
  }
);
