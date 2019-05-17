import chai from 'chai';
import guid from './guid';

chai.expect();

const { expect } = chai;

describe('guid', () => {
  it('should generate a guid', () => {
    expect(guid()).to.be.a('string');
  });
});
