import { browserDetect } from './browser-detect';

describe('browserDetect', () => {
  it.skip('should return browser name as string', () => {
    expect(browserDetect()).toBe('Chrome');
  });
});
