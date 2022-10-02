// Your code here
const chai = require("chai")
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const myMap = require('../problems/my-map')

describe ('MyMap(arr, callback)', function() {
  let arr// = [1, 2, 3];
  let callback// = (el) => el * 2;
  let actual
  let spyMap, spyCb
  beforeEach(() => {
      arr = [1, 2, 3];
      callback = (el) => el * 2;
      spyMap = chai.spy.on(arr, "map"); 
      spyCb = chai.spy(callback); 
      actual = myMap(arr, spyCb)
    });    
   
    it ('Should return new mapped array', () => {    
      expect(actual).to.eql([2, 4, 6]);       
    });
    it ('Should keep orig arr', () => {             
      expect(arr).to.eql([1, 2, 3]);
    })
    it ('Should not use built in map', () => {  
      expect(spyMap).to.have.not.been.called();       
    });
    it ('Should invoce callback once on every el', () => {  
      expect(spyCb).to.have.been.called.exactly(arr.length);       
    });
})