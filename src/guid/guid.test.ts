import { guid } from './guid';

describe('guid', () => {
  it('should generate a guid string', () => {
    expect(typeof guid()).toBe('string');
  });
});
