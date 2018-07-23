/* global describe, it */

import chai from 'chai';
import StringUtil from '../string.util';

chai.expect();

const { expect } = chai;

describe('toTitleCase', () => {
  it('should throw an error if the value pased is not a string', () => {
    expect(() => {
      StringUtil.toTitleCase(123);
    }).to.throw(Error);
  });

  it('should convert string to "Title Case"', () => {
    expect(StringUtil.toTitleCase('the quick brown')).to.be.equal('The Quick Brown');
  });
});
