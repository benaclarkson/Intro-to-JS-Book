/**
 * # Exercise 4 #

 * Task: What happens when you run the following code? Why?

 * const NAME = 'Victor';
 * console.log('Good Morning, ' + NAME);
 * console.log('Good Afternoon, ' + NAME);
 * console.log('Good Evening, ' + NAME);
 * 
 * NAME = 'Joe';
 * console.log('Good Morning, ' + NAME);
 * console.log('Good Afternoon, ' + NAME);
 * console.log('Good Evening, ' + NAME);
 
 * Solution:
 * The above code logs lines 7-9, but then results in an error due to the fact that on `line 11`, the code attempts to reassign the `const` variable `NAME`. This is not valid because `const` variables cannot be reassigned.
**/