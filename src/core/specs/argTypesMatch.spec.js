/* global describe, it */

import chai from 'chai';
import argTypesMatch from '../utils/argTypesMatch';

chai.expect();

const { expect } = chai;

describe('argTypesMatch', () => {
  it('should return true if the type of the value matches the expected type', () => {
    expect(argTypesMatch('abc', 'string')).to.be.equal(true);
    expect(argTypesMatch(1, 'number')).to.be.equal(true);
  });

  it('should return false if the type of the value does not match the expected type', () => {
    expect(argTypesMatch('abc', 'number')).to.be.equal(false);
    expect(argTypesMatch(1, 'string')).to.be.equal(false);
  });
});
