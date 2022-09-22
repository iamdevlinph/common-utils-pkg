import { validate } from 'uuid';

import { guid } from './guid';

describe('guid', () => {
  it('should generate a guid', () => {
    expect(validate(guid())).toEqual(true);
  });
});
