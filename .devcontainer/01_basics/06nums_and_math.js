const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString(). length);
console.log(balance.toFixed(2) );

const otherNumber = 123.8988

console.log(otherNumber.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));

//+++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // Only negative value convert into positive not positive value convert 
console.log(Math.round(4.6));  
console.log(Math.ceil(4.2));  
console.log(Math.floor(4.9));  
console.log(Math.min(4, 3, 6, 8, 10));
console.log(Math.max(4, 3, 6, 8, 10));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

console.log();


