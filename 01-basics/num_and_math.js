const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 234.5566
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// Maths

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.random()*10);

const min = 20
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)