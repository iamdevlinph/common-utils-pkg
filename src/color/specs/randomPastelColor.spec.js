/* global describe, it */

import chai from 'chai';
import randomPastelColor from '../utils/randomPastelColor';

chai.expect();

const { expect } = chai;

describe('randomPastelColor', () => {
  it('should return random HSL color', () => {
    expect(randomPastelColor()).to.include('hsl');
  });
});