/**
 * # Exercise 4 #

 * Task: Does the following code produce an error? Why or why not? What output does this code send to the console?

 * Solution: The following code does not produce an error. Although it is written strangely, it does increment the variable `i` by `1` upon each iteration. It outputs the integers 1 through 5 to the console.
**/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}