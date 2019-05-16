import chai from 'chai';
import colorBrightness from './colorBrightness';

chai.expect();

const { expect } = chai;

describe('colorBrightness', () => {
  it('should throw an error the first value is not a string', () => {
    expect(() => {
      colorBrightness(1);
    }).to.throw(Error);
    expect(() => {
      colorBrightness(null);
    }).to.throw(Error);
    expect(() => {
      colorBrightness(undefined);
    }).to.throw(Error);
    expect(() => {
      colorBrightness([]);
    }).to.throw(Error);
    expect(() => {
      colorBrightness({});
    }).to.throw(Error);
  });

  it('should lighten a hex color', () => {
    expect(colorBrightness('#3CB878', 200)).to.be.equal('#FFFFFF');
    expect(colorBrightness('#F06D06', 20)).to.be.equal('#FF811A');
  });

  it('should darken a hex color', () => {
    expect(colorBrightness('#3CB878', -200)).to.be.equal('#000000');
    expect(colorBrightness('#F06D06', -20)).to.be.equal('#DC5900');
  });

  it('should prepend a pound if no pound is present', () => {
    expect(colorBrightness('F06D06', 20)).to.be.equal('#FF811A');
    expect(colorBrightness('F06D06', -20)).to.be.equal('#DC5900');
  });
});
