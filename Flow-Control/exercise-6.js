/**
 * # Exercise 6 #

 * Task: What does this code output to the console?

 * Solution: The code outputs the string 'Not Empty' to the console. This is because an empty array is still truthy (it evaluates to `true`). 
**/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);