/**
 * # Exercise 6 #

 * Task: Will this program produce an error when run? Why or why not?

 * const FOO = 'bar';
 * {
 *   const FOO = 'qux';
 * }
 * 
 * console.log(FOO);

 * Solution:
 * The program will not produce an error because of the variable shadowing that occurs when the new `const FOO` variable is declared on `line 8`.
 * When `line 11` executes, `'bar'` is logged to the console and `undefined` is returned.
**/