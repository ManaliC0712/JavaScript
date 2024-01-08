function addTwoNumber(number1, number2){
    console.log(number1 + number2)
}
const result = addTwoNumber(3, 6)


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("mannu"))


function calculateCartPrice(val1, va2,...num1){
return num1
}
console.log(calculateCartPrice(200, 300, 400, 500, 600))

const user ={
    username: "manu",
    price: 777
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "kittu",
    price: 299
})
const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([100, 200, 300 ,400]));


// scope {}


// var c = 300
let a = 20
if ( true) {
    let  a = 10
    const b = 20
console.log("INNER: ", a);

}

console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "kittu"

    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website);

    two()
}
 
// one()

if (true) {
    const username = "kittu"
    if(username === "kittu"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5))
function addone (num){
    return num + 1
}


const addTwo = function(num1){
    return num1 + 2
}
addTwo(5)