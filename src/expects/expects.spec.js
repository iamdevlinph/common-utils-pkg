import chai from 'chai';
import expects from './expects';

const func = {
  array: expects(() => {}, 'array', { 0: 'array' }),
  boolean: expects(() => {}, 'boolean', { 0: 'boolean' }),
  number: expects(() => {}, 'number', { 0: 'number' }),
  object: expects(() => {}, 'object', { 0: 'object' }),
  string: expects(() => {}, 'string', { 0: 'string' }),
  null: expects(() => {}, 'null', { 0: 'null' }),
  undefined: expects(() => {}, 'undefined', { 0: 'undefined' }),
  // multiple args
  testOne: expects(() => {}, 'testOne', { 0: 'array', 1: 'boolean' }, { 2: 'string' }),
  testTwo: expects(() => {}, 'testTwo', { 0: 'string' }, { 1: 'boolean', 2: 'object' })
};


chai.expect();

const { expect } = chai;

describe('expects', () => {
  it('should throw an error if any argument type does not match the expected types', () => {
    expect(() => { func.array(1); }).to.throw(Error);
    expect(() => { func.boolean(null); }).to.throw(Error);
    expect(() => { func.number('test'); }).to.throw(Error);
    expect(() => { func.object('a'); }).to.throw(Error);
    expect(() => { func.string(1); }).to.throw(Error);
    expect(() => { func.null(undefined); }).to.throw(Error);
    expect(() => { func.undefined(null); }).to.throw(Error);

    // multiple
    expect(() => { func.testOne([], null, 'string'); }).to.throw(Error);
    expect(() => { func.testTwo('true', null, 1); }).to.throw(Error);
  });

  it('should return a function if all argument types matches the expected types and should not throw', () => {
    expect(() => { func.array([]); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.boolean(true); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.number(1); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.object({}); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.string('a'); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.null(null); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.undefined(undefined); }).to.be.a('function').and.to.not.throw();

    // multiple
    expect(() => { func.testOne([], true); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.testTwo('123', true, {}); }).to.be.a('function').and.to.not.throw();
  });
});
