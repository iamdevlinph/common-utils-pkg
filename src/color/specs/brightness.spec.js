/* global describe, it */

import chai from 'chai';
import ColorUtil from '../color.util';

chai.expect();

const { expect } = chai;

describe('brightness', () => {
  it('should lighten a hex color', () => {
    expect(ColorUtil.brightness('#3CB878', 200)).to.be.equal('#FFFFFF');
  });

  it('should darken a hex color', () => {
    expect(ColorUtil.brightness('#3CB878', -200)).to.be.equal('#000000');
  });
});
