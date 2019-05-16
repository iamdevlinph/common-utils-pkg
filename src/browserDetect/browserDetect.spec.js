import chai from 'chai';
import browserDetect from './browserDetect';

chai.expect();

const { expect } = chai;

describe('browserDetect', () => {
  it.skip('should return browser name as string', () => {
    expect(browserDetect()).to.be.equal('Chrome');
  });
});
