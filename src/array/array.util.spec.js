/* global describe, it */

import chai from 'chai';
import ArrayUtil from './array.util';

chai.expect();

const {
  expect
} = chai;

describe('ARRAY', () => {
  describe('when i run test', () => {
    it('should "Array OK"', () => {
      expect(ArrayUtil.test()).to.be.equal('Array OK');
    });
  });

  describe('toArray', () => {
    it('should covert string to array', () => {
      expect(ArrayUtil.toArray('a,b', ',')).to.deep.equal(['a', 'b']);
      expect(ArrayUtil.toArray('a,b', ',')).to.be.an('array');
    });
  });
});
