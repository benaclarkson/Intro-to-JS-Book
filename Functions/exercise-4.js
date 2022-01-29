/**
 * # Exercise 4 #

 * Task: What does the following code log to the console?

 * function scream(words) {
 *   words = words + '!!!!';
 *   return;
 *   console.log(words);
 * }
 *
 * scream('Yipeee');
 
 * Solution: The code logs nothing to the console and returns `undefined` due to the `return` statement on `line 3`. Because of that `return` statement, the call stack never reaches `line 4`.
**/