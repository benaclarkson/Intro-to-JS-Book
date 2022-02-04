/**
 * # Exercise 5 #

 * Task: What does the following function do?

 * Solution: The following function allows for one argument, `string`. The `split()` function is called on `string` with `' '` as a delimeter, which returns an array of all the words in the string which were previously separated by single spaces.
 * The `reverse()` function is then called on that array, which reverses the order in which the elements are listed in the array.
 * `map()` is then called on the array that `reverse()` returned, which iterates through said array and returns a new array comprised of elements representing the length of each element from the reversed array.`
**/

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}