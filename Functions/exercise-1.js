/**
 * # Exercise 1 #

 * Task: What does this code log to the console? Does executing the foo function affect the output? Why or why not?

 * let bar = 1;
 * function foo() {
 *   let bar = 2;
 * } * 
 *
 * foo();
 * console.log(bar);
 
 * Solution: This code logs `1` to the console. On `line 1`, the variable `bar` is declared as the value `1`. On `line 2`, the function `foo` is declared. Within that function body, a new variable with block scope, `bar` is declared and assigned the value `2`. On `line 6`, the `foo()` function is invoked, which returns `undefined` and logs nothing to the console. On `line 7`, when `bar` is passed into the `console.log()` function, it is the `bar` variable defined on `line 1`, not `line 3`. This is an example of how scope can significantly affect ones code.
**/