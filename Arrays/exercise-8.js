/**
 * # Exercise 8 #

 * Task: Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.
**/

let oddLengths = (array) => {
  return array.reduce((previousVal, currentVal) => {
    if (currentVal.length % 2 === 1) {
      previousVal.push(currentVal.length);
    }

    return previousVal;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]