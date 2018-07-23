/* global describe, it */

import chai from 'chai';
import toBool from '../utils/toBool';

chai.expect();

const { expect } = chai;

describe('toBool', () => {
  it('should return Bolean', () => {
    expect(toBool(true)).to.be.equal(true);
    expect(toBool('true')).to.be.equal(true);
    expect(toBool('yes')).to.be.equal(true);
    expect(toBool('y')).to.be.equal(true);
    expect(toBool(1)).to.be.equal(true);
    expect(toBool('1')).to.be.equal(true);

    expect(toBool(false)).to.be.equal(false);
    expect(toBool('false')).to.be.equal(false);
    expect(toBool('no')).to.be.equal(false);
    expect(toBool('n')).to.be.equal(false);
    expect(toBool(0)).to.be.equal(false);
    expect(toBool('0')).to.be.equal(false);

    // user-supplied array of true values
    expect(toBool('a', ['a'])).to.be.equal(true);
    expect(toBool('b', ['a'])).to.be.equal(false);
    expect(toBool('c', ['a', 'b', 'c'])).to.be.equal(true);

    expect(toBool(null)).to.be.equal(false);
    expect(toBool(undefined)).to.be.equal(false);
  });
});
