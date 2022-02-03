/**
 * # Exercise 4 #

 * Task: Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.
**/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj);

let upperCaseKeys = keys.map((key) => key.toUpperCase());

console.log(keys);
console.log(upperCaseKeys);
console.log(obj);