const user = {
    username: "mannu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "kittu"
// user.welcomeMessage()

// function one1(){
//     let username = "manu"
//     console.log(this)
// }
// one1()

const kit1 = () => {
    let username = "manu"
    console.log(this)
}
kit1()

 const addTwo = (num1, num2) => num1 + num2
 
 console.log(addTwo(2, 3))

//  const myArray = [2, 3, 4, 5, 6]

