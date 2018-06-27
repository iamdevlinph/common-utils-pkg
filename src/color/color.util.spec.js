/* global describe, it */

import chai from 'chai';
import Color from './color.util';

chai.expect();

const {
  expect
} = chai;

describe('COLOR', () => {
  describe('when i run test', () => {
    it('should "Color OK"', () => {
      expect(Color.test()).to.be.equal('Color OK');
    });
  });
});
