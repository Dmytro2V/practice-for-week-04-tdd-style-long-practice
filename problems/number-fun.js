function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if(typeof n !== 'number' || n < 1 || n > 1000000) {
    throw new TypeError('must be number in 1 - 1.000.000 range')
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};