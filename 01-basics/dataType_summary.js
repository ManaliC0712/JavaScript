// Primitive dataTypes

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt


const heros = ["manali", "mannu", "mona"];
let myObj = {
    name: "kittu",
    age: 22,
}

const myFunction = function(){
console.log("add text");
}

console.log(typeof heros);

// stack primitive 

let myReallName = "Manali123"
let anotherName = myReallName
anotherName = "kittu"
console.log(myReallName);
console.log(anotherName);

let userOne = {
    email: "mn@gmail.com",
    upi: "WW232D"
}

let userTwo = userOne
userTwo.email = "mn11@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);