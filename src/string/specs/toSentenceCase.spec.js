/* global describe, it */

import chai from 'chai';
import StringUtil from '../string.util';

chai.expect();

const { expect } = chai;

describe('toSentenceCase', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      StringUtil.toSentenceCase(123);
    }).to.throw(Error);
  });

  it('should convert string to "Sentence case"', () => {
    expect(StringUtil.toSentenceCase('THE QUICK BROWN')).to.be.equal('The quick brown');
  });
});
