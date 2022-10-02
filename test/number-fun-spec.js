// Your code here
const chai = require('chai');
const expect = chai.expect;
const numberFun = require('../problems/number-fun')


describe('function returnsThree', () => {
  let returnsThree = numberFun.returnsThree
  it ('returns 3 on any input', () => {
    expect(returnsThree(3)).to.equal(3)
    expect(returnsThree(-1000)).to.equal(3)
    expect(returnsThree('string')).to.equal(3)
    expect(returnsThree(null)).to.equal(3)
    expect(returnsThree({})).to.equal(3)
  })
})

describe('function reciprocal (1/x, x from 1 to 1.000.000)', () => {
  let reciprocal = numberFun.reciprocal

  context('normal cases', () => {    
    it ('returns 1/x on positive numberinput', () => {
      expect(reciprocal(3)).to.equal(1/3)
      expect(reciprocal(125.5)).to.equal(1/125.5)
      expect(reciprocal(1000000)).to.equal(1/1000000)    
    })
  });

  context("invalid inputs, returns TypeError, 'must be number in 1 - 1.000.000 range'", () => {    
    it ('returns TypeError if not a number', () => {
      expect(() => reciprocal('str')).to.throw(TypeError, 'must be number in 1 - 1.000.000 range')
      expect(() => reciprocal()).to.throw(TypeError, 'must be number in 1 - 1.000.000 range')
      expect(() => reciprocal(['str'])).to.throw(TypeError, 'must be number in 1 - 1.000.000 range')     
    })
    it ('returns TypeError if not in range', () => {
      expect(() => reciprocal(0)).to.throw(TypeError,'must be number in 1 - 1.000.000 range')
      expect(() => reciprocal(-99999)).to.throw(TypeError,'must be number in 1 - 1.000.000 range')
      expect(() => reciprocal(1000000.1)).to.throw(TypeError,'must be number in 1 - 1.000.000 range')     
    })

  });


})