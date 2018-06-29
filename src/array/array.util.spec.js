/* global describe, it */

import chai from 'chai';
import ArrayUtil from './array.util';

chai.expect();

const {
  expect
} = chai;

describe('ARRAY', () => {
  describe('strToArray', () => {
    it('should covert string to array', () => {
      expect(ArrayUtil.strToArray('a,b', ',')).to.deep.equal(['a', 'b']);
      expect(ArrayUtil.strToArray('a,b', ',')).to.be.an('array');
    });
  });
});
