/* global describe, it */

import chai from 'chai';
import CoreUtil from '../core.util';

const func = {
  array: CoreUtil.takes(() => {}, { 0: 'array' }),
  boolean: CoreUtil.takes(() => {}, { 0: 'boolean' }),
  number: CoreUtil.takes(() => {}, { 0: 'number' }),
  object: CoreUtil.takes(() => {}, { 0: 'object' }),
  string: CoreUtil.takes(() => {}, { 0: 'string' }),
  null: CoreUtil.takes(() => {}, { 0: 'null' }),
  undefined: CoreUtil.takes(() => {}, { 0: 'undefined' }),
  // multiple args
  testOne: CoreUtil.takes(() => {}, { 0: 'array', 1: 'boolean' }, { 2: 'string' }),
  testTwo: CoreUtil.takes(() => {}, { 0: 'string' }, { 1: 'boolean', 2: 'object' })
};


chai.expect();

const { expect } = chai;

describe('takes', () => {
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
