/**
 * # Exercise 1 #

 * Task: What do the following error message and stack trace tell you?

 * $ node exercise2.js
 * /Users/wolfy/tmp/exercise2.js:4
 *   console.log(greeting);
 *               ^
 * 
 * ReferenceError: greeting is not defined
 *     at hello (/Users/wolfy/tmp/exercise2.js:4:15)
 *     at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
 *     at Module._compile (internal/modules/cjs/loader.js:721:30)
 *     at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
 *     at Module.load (internal/modules/cjs/loader.js:620:32)
 *     at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
 *     at Function.Module._load (internal/modules/cjs/loader.js:552:3)
 *     at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
 *     at executeUserCode (internal/bootstrap/node.js:342:17)
 *     at startExecution (internal/bootstrap/node.js:276:5)
 
 * Solution: The stack trace tells me that a ReferenceError error occurred in the `exercise2.js` file. The error occured on line 4 of the program. The `^` character points to where JS believes the issue stems from.
 * The stack trace also tells me that that `greeting` is not defined and that the error occurred in the `hello` function 
**/