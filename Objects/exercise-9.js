/**
 * # Exercise 9 #

 * Task: What does the following program log to the console? Why?
 
 * Solution: The following program logs `hi` then `hello` to the console. This is because on `line 17` the property of the key `a` within the `foo` object is changed to `'hi'`. Because primitive values, such as strings are immutable, the reassignment that occurs on `line 18` does not change the value of the variable `qux`.
**/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);