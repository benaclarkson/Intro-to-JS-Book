/**
 * # Exercise 1 #

 * Task: Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

 * $ node greeter.js
 * Good Morning, Victor.
 * Good Afternoon, Victor.
 * Good Evening, Victor.
**/

const NAME = 'Victor';

// Solution 1:
console.log(`Good Morning, ${NAME}.`);
console.log(`Good Afternoon, ${NAME}.`);
console.log(`Good Evening, ${NAME}.`);

// Solution 2:
let greetings = ['Good Morning, ', 'Good Afternoon, ', 'Good Evening, '];
greetings.forEach((greeting) => {
  console.log(greeting + NAME + '.');
})