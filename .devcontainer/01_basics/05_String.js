const name = "vishnu"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('vishnu_pa')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  vishnu    "
console.log(newStringOne);
console.log(newStringOne.trim());

 const url = "https://vishnu.com/vishnu%20patidar"


console.log (url.replace('%20', '_'));

console.log(url.includes('vishnu'));

console.log(gameName.split('_'));
