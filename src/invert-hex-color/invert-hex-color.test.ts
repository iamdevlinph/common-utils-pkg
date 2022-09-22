import { invertHexColor } from './invert-hex-color';

describe('invertHexColor', () => {
  it('should return a hex color', () => {
    expect(invertHexColor('E3CCA8')).toContain('#');
    expect(invertHexColor('#E3CCA8')).toContain('#');
  });

  it('should convert a hex color to an opposite color', () => {
    expect(invertHexColor('E3CCA8')).toEqual('#1C3357');
    expect(invertHexColor('ccc')).toEqual('#333333');
  });
});
