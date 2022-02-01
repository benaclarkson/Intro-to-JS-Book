/**
 * # Exercise 7 #

 * Task: Use reduce to compute the sum of the squares of all of the numbers in an array:
**/

let sumOfSquares = (arr) => {
  return arr.reduce((acc, curr) => acc + curr * curr, 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83