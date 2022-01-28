/**
 * # Exercise 5 #

 * Task: Take a look at this code snippet:

 * let foo = 'bar';
 * {
 *   let foo = 'qux';
 * }
 * 
 * console.log(foo);
 
 * What does this program log to the console? Why?

 * Solution:
 * The program logs `'bar'` to the console because `let` variables have block scope, and thus when `console.log(foo)` is called, the function accesses the initial variable declaration and not the declaration within the block.
**/