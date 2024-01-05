let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getHours());
console.log(typeof myDate);

let myCreatedDate = new Date("2023-02-12")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Date.now()/1000);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// `${newDate.getDay()}`


newDate.toLocaleString("default", {
    weekday: "long",
})

