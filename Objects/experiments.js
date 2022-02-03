let person = {
  name: 'Bob',
  age: 45,
  height: '6ft',
}

let otherPerson = Object.create(person);

console.log(otherPerson.values);