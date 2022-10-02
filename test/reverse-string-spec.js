// Your code here
const chai = require("chai")
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')

describe ('Reverse function', function() {
  it ('Should reverse a string', () => {
    expect(reverseString('fun')).to.equal('nuf');
  });
  it ('Should throw an TypeError if input is not a string', () => {
    const boole = true;
    const array = ['array'];
    const obj = {key: 'value'}
    const nul = null;
    const nan = NaN;
    expect(() => reverseString(boole)).to.throw(TypeError, 'not a string')
    expect(() => reverseString(array)).to.throw(TypeError, 'not a string')
    expect(() => reverseString(obj)).to.throw(TypeError, 'not a string')
    expect(() => reverseString(nul)).to.throw(TypeError, 'not a string')
    expect(() => reverseString(nan)).to.throw(TypeError, 'not a string')
    
    
  })
})