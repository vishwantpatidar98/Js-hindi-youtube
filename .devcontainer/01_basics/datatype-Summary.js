// Primitive

// 7 types: String, Nummber, Boolean, null, undefined, symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32636742987323486n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vishnu",
    age: 20,

}

const myFunction = function(){
    console.log("Hello vishnu");
    
}

console.log(typeof scoreValue);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "MAMABHANJATRADERS.COM"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne  = {
    email: "user@google.com"
    
}

let userTwo = userOne

userTwo.email = "vishnu@google.com"

console.log(userOne.email);
console.log(userTwo.email);
