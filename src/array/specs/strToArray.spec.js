/* global describe, it */

import chai from 'chai';
import strToArray from '../utils/strToArray';

chai.expect();

const { expect } = chai;

describe('strToArray', () => {
  it('should convert string to array', () => {
    expect(strToArray('a,b', ',')).to.deep.equal(['a', 'b']);
    expect(strToArray('a,b', ',')).to.be.an('array');
  });
});
