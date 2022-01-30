/**
 * # Exercise 3 #

 * Task: Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

**/

// Solution 1:
let evenOrOdd = (num) => {
  if (!Number.isInteger(num)) {
    console.log('Error. Not a valid integer.');
    return;
  }

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

evenOrOdd(40);
evenOrOdd(13);
evenOrOdd('10');