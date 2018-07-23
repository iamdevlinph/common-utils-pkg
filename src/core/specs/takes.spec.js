/* global describe, it */

import chai from 'chai';
import CoreUtil from '../core.util';

const func = {
  array: CoreUtil.takes(() => {}, 'array'),
  boolean: CoreUtil.takes(() => {}, 'boolean'),
  number: CoreUtil.takes(() => {}, 'number'),
  object: CoreUtil.takes(() => {}, 'object'),
  string: CoreUtil.takes(() => {}, 'string')
};

chai.expect();

const { expect } = chai;

describe('takes', () => {
  // should error
  it('should throw an error if the typeof argument passed is not the expected type', () => {
    expect(() => { func.array('a'); }).to.throw(Error);
    expect(() => { func.boolean('a'); }).to.throw(Error);
    expect(() => { func.number('a'); }).to.throw(Error);
    expect(() => { func.object('a'); }).to.throw(Error);
    expect(() => { func.string(1); }).to.throw(Error);
  });

  // should pass
  it('should return a function if the typeof argument passed matches the expected type\nand should not throw', () => {
    expect(() => { func.array([]); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.boolean(true); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.number(1); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.object({}); }).to.be.a('function').and.to.not.throw();
    expect(() => { func.string('a'); }).to.be.a('function').and.to.not.throw();
  });
});
