// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);   //date is a type of object

let myCreatdDate = new Date(2026, 0, 11)
let myCreatdDateTime = new Date(2026, 0, 11, 5, 30, 33)
let myConvertedDate = new Date("2026-01-11")
let myBirthdayDate = new Date("11-01-2026")
console.log(myCreatdDate.toDateString());
console.log(myCreatdDateTime.toLocaleString());
console.log(myCreatdDateTime.toLocaleString());
console.log(myConvertedDate.toLocaleString());
console.log(myBirthdayDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatdDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//'${newDate.getDay()} and the time'

newDate.toLocaleString('default', {
    weekday: "long",
    })

    