/* global describe, it */

import chai from 'chai';
import convertBytes from '../utils/convertBytes';

chai.expect();

const { expect } = chai;

describe('convertBytes', () => {
  it('should convert bytes to readable format', () => {
    expect(convertBytes(1)).to.be.equal('1 byte(s)');
    expect(convertBytes(1024)).to.be.equal('1 kB');
    expect(convertBytes(1234)).to.be.equal('1.205078125 kB');
    expect(convertBytes(1234, 2)).to.be.equal('1.21 kB');
    expect(convertBytes(1234, 3)).to.be.equal('1.205 kB');
    expect(convertBytes(1048576)).to.be.equal('1 MB');
    expect(convertBytes(1073741824)).to.be.equal('1 GB');
    expect(convertBytes(1099511627776)).to.be.equal('1 TB');
    expect(convertBytes(1125899906842624)).to.be.equal('1 PB');
  });
});
