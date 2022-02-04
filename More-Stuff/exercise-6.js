/**
 * # Exercise 6 #

 * Task: Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.
**/

function allMatches(arr, reg) {
  return arr.filter((str) => str.match(reg))
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']