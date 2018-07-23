/* global describe, it */

import chai from 'chai';
import toSentenceCase from '../utils/toSentenceCase';

chai.expect();

const { expect } = chai;

describe('toSentenceCase', () => {
  it('should convert string to "Sentence case"', () => {
    expect(toSentenceCase('THE QUICK BROWN')).to.be.equal('The quick brown');
  });
});
