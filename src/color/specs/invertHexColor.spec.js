/* global describe, it */

import chai from 'chai';
import ColorUtil from '../color.util';

chai.expect();

const { expect } = chai;

describe('invertHexColor', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      ColorUtil.invertHexColor(1);
    }).to.throw(Error);
  });

  it('should throw an error if the value passed is not a valid hex color', () => {
    expect(() => {
      ColorUtil.invertHexColor('the quick brown');
    }).to.throw(Error);
  });

  it('should return a hex color', () => {
    expect(ColorUtil.invertHexColor('E3CCA8')).to.include('#');
    expect(ColorUtil.invertHexColor('#E3CCA8')).to.include('#');
  });

  it('should convert a hex color to an opposite color', () => {
    expect(ColorUtil.invertHexColor('E3CCA8')).to.be.equal('#1C3357');
    expect(ColorUtil.invertHexColor('ccc')).to.be.equal('#333333');
  });
});
