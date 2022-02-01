/**
 * # Exercise 3 #

 * Task: Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

 * How old are you? 22
 * You are 22 years old.
 * In 10 years, you will be 32 years old.
 * In 20 years, you will be 42 years old.
 * In 30 years, you will be 52 years old.
 * In 40 years, you will be 62 years old.
**/

let rlSync = require('readline-sync');

const AGE = Number(rlSync.question('How old are you? '));

// Solution 1:
console.log(`You are ${AGE} years old.`);

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${years + AGE} years old.`);
}

// Solution 2:
console.log(`You are ${AGE} years old.`);
let years = 10

while (years <= 40) {
  console.log(`In ${years} years, you will be ${years + AGE} years old.`);
  years += 10;
}