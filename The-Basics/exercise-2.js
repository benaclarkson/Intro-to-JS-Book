/**
 * # Exercise 2 #

 * Task: Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

 * thousands place is 4
 * hundreds place is 9
 * tens place is 3
 * ones place is 6

**/

// Solution 1:
let number = 4936;
let ones = number % 10;
let tens = ((number - ones) / 10) % 10;
let hundreds = ((number - tens) / 10) % 10;
let thousands = (number - hundreds) / 10;

