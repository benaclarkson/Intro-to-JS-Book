/**
 * # Exercise 1 #

 * Task: What does this code log to the console? Why?
 
 * Solution: The following code logs `[1, 4, 3]` to the console. This happens because the original array `[1, 2, 3]` that both `array1` and `array2` reference is being mutated.
**/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);