import { randomPastelColor } from './random-pastel-color';

describe('randomPastelColor', () => {
  it('should return random HSL color', () => {
    expect(randomPastelColor()).toContain('hsl');
  });
});
