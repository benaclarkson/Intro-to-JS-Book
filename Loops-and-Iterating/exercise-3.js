/**
 * # Exercise 3 #

 * Task: The following code causes an infinite loop (a loop that never stops iterating). Why?

 * Solution: The following code causes an infinite loop because within the argument passed into the `while` loop, the `counter` variable is reassigned to the integer `1`.
**/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}