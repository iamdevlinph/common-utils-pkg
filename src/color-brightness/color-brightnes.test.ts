import { colorBrightness } from './color-brightness';

describe('colorBrightness', () => {
  it('should lighten a hex color', () => {
    expect(colorBrightness('#3CB878', 200)).toBe('#FFFFFF');
    expect(colorBrightness('#F06D06', 20)).toBe('#FF811A');
  });

  it('should darken a hex color', () => {
    expect(colorBrightness('#3CB878', -200)).toBe('#000000');
    expect(colorBrightness('#F06D06', -20)).toBe('#DC5900');
  });

  it('should prepend a pound if no pound is present', () => {
    expect(colorBrightness('F06D06', 20)).toBe('#FF811A');
    expect(colorBrightness('F06D06', -20)).toBe('#DC5900');
  });
});
