import chai from 'chai';
import doTypesMatch from './doTypesMatchFn';

chai.expect();

const { expect } = chai;

describe('doTypesMatch', () => {
  it('should return true if the type of the value matches the expected type', () => {
    expect(doTypesMatch('abc', 'string')).to.be.equal(true);
    expect(doTypesMatch(1, 'number')).to.be.equal(true);
  });

  it('should return false if the type of the value does not match the expected type', () => {
    expect(doTypesMatch('abc', 'number')).to.be.equal(false);
    expect(doTypesMatch(1, 'string')).to.be.equal(false);
  });
});
