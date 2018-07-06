/* global describe, it */

import chai from 'chai';
import CoreUtil from './core.util';

chai.expect();

const { expect } = chai;

describe('CORE', () => {
  describe.skip('takes', () => {
    it('should return true if the value is the expected type', () => {
      expect(CoreUtil.takes(1, 'string')).to.be.equal(false);
      expect(CoreUtil.takes('not number', 'number')).to.be.equal(false);
      expect(CoreUtil.takes(1, 'number')).to.be.equal(true);
      expect(CoreUtil.takes('string', 'string')).to.be.equal(true);
      expect(CoreUtil.takes(null, 'string')).to.be.equal(false);
      expect(CoreUtil.takes(null, 'number')).to.be.equal(false);
    });
  });
});
