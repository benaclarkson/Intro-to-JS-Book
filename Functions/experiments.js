// function changeFirstElement(array) {
//   array[0] = 9;
// }

// function addToArray(array) {
//   return array.concat(10);
// }

// let oneToFive = [1, 2, 3, 4, 5];
// console.log(addToArray(oneToFive));
// console.log(oneToFive);


// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// let sum = add(20, 45);
// console.log(sum);

// let difference = subtract(80, 10);
// console.log(difference);

// function times(num1, num2) {
//   return num1 * num2;
// }

// console.log(times(add(20, 45), subtract(80, 10)));


function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();