function myMap(inputArray, callback) {
  // Your code here    
  let outputArray = []
  for (const el of inputArray) {
    outputArray.push(callback(el))  
  }
  return outputArray;
}

/*let arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr); // prints [1,2,3]
*/



module.exports = myMap;