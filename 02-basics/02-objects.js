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


//singleton

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "kittu"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "manali.c@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kittu",
            lastname: "kittu1234"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj4);

const users = [
    {
        id: 1,
        email: "manali@gmail.com"
    },
    {
        id: 2,
        email: "manali@gmail.com"
    },
    {
        id: 3,
        email: "manali@gmail.com"
    },
    {
        id: 4,
        email: "manali@gmail.com"

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "english",
    price: "999",
    courseInstructor: "manali"
}

const {courseInstructor} = course
console.log(courseInstructor)

// const navbar = () => {

// }
// navbar(company = "M1")

