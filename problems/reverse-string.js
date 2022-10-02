  module.exports = function reverseString(string) {
    // Your code here
    if(typeof string !== 'string') throw new TypeError('not a string')
    //string to array, array function reverse and back to string
    return string.split('').reverse().join('');
    
  };
  

