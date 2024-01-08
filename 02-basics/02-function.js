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