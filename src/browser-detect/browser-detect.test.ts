import { browserDetect } from './browser-detect';

describe.skip('browserDetect', () => {
  it('should return browser name as string', () => {
    expect(browserDetect()).toEqual('Chrome');
  });
});
