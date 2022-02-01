/**
 * # Exercise 2 #

 * Task: Log all of the even values from myArray to the console.
**/

let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

// Solution 1:
myArray.forEach((element) => { if (element % 2 === 0) console.log(element) });

// Solution 2:
let evenElements = myArray.filter(element => element % 2 === 0)
console.log(evenElements);
evenElements.forEach((el) => { console.log(el) });