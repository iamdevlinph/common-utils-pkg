/* global describe, it */

import chai from 'chai';
import BooleanUtil from './boolean.util';

chai.expect();

const {
  expect
} = chai;

describe('BOOLEAN', () => {
  describe('when i run test', () => {
    it('should "Boolean OK"', () => {
      expect(BooleanUtil.test()).to.be.equal('Boolean OK');
    });
  });
});
