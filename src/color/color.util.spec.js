/* global describe, it */

import chai from 'chai';
import ColorUtil from './color.util';

chai.expect();

const {
  expect
} = chai;

describe('COLOR', () => {
  describe('when i run test', () => {
    it('should "Color OK"', () => {
      expect(ColorUtil.test()).to.be.equal('Color OK');
    });
  });

  describe('randomPastelColor', () => {
    it('should return random HSL color', () => {
      expect(ColorUtil.randomPastelColor()).to.include('hsl');
    });
  });
});
