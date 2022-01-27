/**
 * # Exercise 4 #

 * Task: Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

 * console.log('5' + 10);

**/
// Solution 1:
console.log('The value of 5 + 10 is ' + (5 + 10) + '.');

// Solution 2:
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Solution 3:
console.log('The value of 5 + 10 is ' + (parseInt('5') + 10) + '.');