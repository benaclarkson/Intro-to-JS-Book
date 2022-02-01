let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);

for (let idx = 0; idx < names.length; idx += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}