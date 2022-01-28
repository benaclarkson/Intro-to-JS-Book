/**
 * # Exercise 2 #

 * Task: Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

 * You are 20 years old.
 * In 10 years, you will be 30 years old.
 * In 20 years, you will be 40 years old.
 * In 30 years, you will be 50 years old.
 * In 40 years, you will be 60 years old.
**/

const AGE = 20;

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