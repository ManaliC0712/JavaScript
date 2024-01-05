//singleton

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "manu",
    "full_name": "manali chahande",
    [mySym]: "mykey1",
    age: 24,
    loacation: "Nagpur",
    email: "manali.c@veerit.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full_name"])
console.log(JsUser[mySym])

JsUser.email = "mn@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "manali@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Add code here");
}

JsUser.greeting2 = function(){
    console.log(`Add code here, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting2);