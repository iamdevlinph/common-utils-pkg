import { readableColor } from './readable-color';

describe('readableColor', () => {
  it('should return light mode color', () => {
    expect(readableColor('#222001')).toEqual('#ffffff');
    expect(readableColor('#073229')).toEqual('#ffffff');
  });

  it('should return dark mode color', () => {
    expect(readableColor('#baebd8')).toEqual('#24292f');
    expect(readableColor('#6bebf3')).toEqual('#24292f');
  });

  it('should return light mode color from provided object', () => {
    const obj = { light: '#fcf' };
    expect(readableColor('#261104', obj)).toEqual(obj.light);
    expect(readableColor('#5e2d05', obj)).toEqual(obj.light);
  });

  it('should return light mode color from provided object', () => {
    const obj = { dark: '#000' };
    expect(readableColor('#fbdbd7', obj)).toEqual(obj.dark);
    expect(readableColor('#e0c1e7', obj)).toEqual(obj.dark);
  });

  it('should return light/dark mode color from provided object', () => {
    const obj = { light: '#fcf', dark: '#000' };
    expect(readableColor('#013735', obj)).toEqual(obj.light);
    expect(readableColor('#defbf7', obj)).toEqual(obj.dark);
  });
});
