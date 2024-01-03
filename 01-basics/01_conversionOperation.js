let score = "33abs"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abs" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "manali" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



// ************ Operations

let value = 3
let negValue = -value
console.log(negValue);

let str1 = 'hii'
let str2 = " hello"

let str3 = str1 + str2
console.log(str3);

console.log("1" +  2);
console.log(1 + "2");
console.log("1" + "2");
console.log(1 + "2" + 1);

console.log(true);

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
