/**
 * # Exercise 2 #

 * Task: Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

**/

// Solution 1:
// Using a function declaration
function evenOrOdd(num) {
  let remainder = num % 2;

  switch (remainder) {
    case 0:
      console.log('even');
      break;
    default:
      console.log('odd');
      break;
  }
}

// Solution 2:
Using a function expression
let evenOrOdd = function(num) {
  let remainder = num % 2;

  switch (remainder) {
    case 0:
      console.log('even');
      break;
    default:
      console.log('odd');
      break;
  }
}

// Solution 3:
// Using an arrow function
let evenOrOdd = (num) => {
  let remainder = num % 2;

  switch (remainder) {
    case 0:
      console.log('even');
      break;
    default:
      console.log('odd');
      break;
  }
}