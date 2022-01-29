/**
 * # Exercise 3 #

 * Task: Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers and result as a simple equation.
 
 * $ node multiply.js
 * Enter the first number: 3.141592653589793
 * Enter the second number: 2.718281828459045
 * 3.141592653589793 * 2.718281828459045 = 8.539734222673566
**/

let multiply = (num1, num2) => num1 * num2;

let getNumber = (prompt) => {
  let rlSync = require('readline-sync');
  return rlSync.question(prompt);
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);