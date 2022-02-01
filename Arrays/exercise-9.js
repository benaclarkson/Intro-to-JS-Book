/**
 * # Exercise 9 #

 * Task: Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
**/

function checkForThrees(arr) {
  return arr.includes(3) ? true : false
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkForThrees(numbers1));
console.log(checkForThrees(numbers2));
console.log(checkForThrees(numbers3));