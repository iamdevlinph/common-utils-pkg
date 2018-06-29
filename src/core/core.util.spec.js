/* global describe, it */

import chai from 'chai';
import CoreUtil from './core.util';

chai.expect();

const {
  expect
} = chai;

describe('CORE', () => {
  describe.skip('isExpected', () => {
    it('should return true if the value is the expected type', () => {
      expect(CoreUtil.isExpected(1, 'string')).to.be.equal(false);
      expect(CoreUtil.isExpected('not number', 'number')).to.be.equal(false);
      expect(CoreUtil.isExpected(1, 'number')).to.be.equal(true);
      expect(CoreUtil.isExpected('string', 'string')).to.be.equal(true);
      expect(CoreUtil.isExpected(null, 'string')).to.be.equal(false);
      expect(CoreUtil.isExpected(null, 'number')).to.be.equal(false);
    });
  });
});
