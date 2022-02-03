/**
 * # Exercise 7 #

 * Task: Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
 
 * Solution: Snippet 1 and Snippet 2 do not produce the same output. The code in Snippet 1 will only log `qux` to the console. However, due to the fact that `for/in` loops iterate through all properties of an object's prototype object, `qux`, `foo`, and `bar` will be logged to the console in Snippet 2.
**/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

let objKeys = Object.keys(myObj);

objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}