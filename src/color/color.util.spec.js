/* global describe, it */

import chai from 'chai';
import ColorUtil from './color.util';

chai.expect();

const {
  expect
} = chai;

describe('COLOR', () => {
  describe('randomPastelColor', () => {
    it('should return random HSL color', () => {
      expect(ColorUtil.randomPastelColor()).to.include('hsl');
    });
  });
});
