/**
 * # Exercise 4 #

 * Task: What does the following code log to the console, and why?

 * Solution: The code logs the following to the console:

 * `Product2`
 * `Product3`
 * `Product not found!`
 
 * This is due to the fact that no `break` statements are used to stop the fall through of each case.
**/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
