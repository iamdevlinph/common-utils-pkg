/* global describe, it */

import chai from 'chai';
import ColorUtil from '../color.util';

chai.expect();

const { expect } = chai;

describe('brightness', () => {
  it('should throw an error the first value is not a string', () => {
    expect(() => {
      ColorUtil.brightness(1);
    }).to.throw(Error);
    expect(() => {
      ColorUtil.brightness(null);
    }).to.throw(Error);
    expect(() => {
      ColorUtil.brightness(undefined);
    }).to.throw(Error);
    expect(() => {
      ColorUtil.brightness([]);
    }).to.throw(Error);
    expect(() => {
      ColorUtil.brightness({});
    }).to.throw(Error);
  });

  it('should lighten a hex color', () => {
    expect(ColorUtil.brightness('#3CB878', 200)).to.be.equal('#FFFFFF');
  });

  it('should darken a hex color', () => {
    expect(ColorUtil.brightness('#3CB878', -200)).to.be.equal('#000000');
  });

  it('should return the same hex color if no amount passed', () => {
    expect(ColorUtil.brightness('#3CB878')).to.be.equal('#3CB878');
    expect(ColorUtil.brightness('3CB878')).to.be.equal('#3CB878');
  });
});
