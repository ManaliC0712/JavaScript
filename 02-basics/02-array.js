//array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["kittu", "pooja"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice
// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1)
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);


const class_name = ["first", "second", "third", "fourth"]
const subject = ["math", "english", "marathi", "hindi"]

class_name.push(subject)
// console.log(class_name);
// console.log(class_name[3][1]);

const allClass = class_name.concat(subject);
// console.log(allClass)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, [9, 10]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("MANU"))
console.log(Array.from("MANU"))
console.log(Array.from({name: "MANU"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));