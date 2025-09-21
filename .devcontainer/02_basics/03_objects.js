// singleton

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "vishnu",
    "full nmae": "Vishnu Patidar",
    [mySym]: "myKey1",
    age: 20,
    location: "Balipur",
    email: "vishnu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full nmae"]);
console.log( JsUser [mySym]);


JsUser.email = "vishnu@google.com"
// Object.freeze(JsUser)
JsUser.email = "vishnu@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}   
JsUser.greetingTwo = function(){
    console.log('Hello JS user, {this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 

