/* global describe, it */

import chai from 'chai';
import toTitleCase from '../utils/toTitleCase';

chai.expect();

const { expect } = chai;

describe('toTitleCase', () => {
  it('should convert string to "Title Case"', () => {
    expect(toTitleCase('the quick brown')).to.be.equal('The Quick Brown');
  });
});
