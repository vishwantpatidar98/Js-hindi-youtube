const accountId = 144553
let accountEmail = "vishwant@gmail.com"
var accountpassward = "12345"
accountCity = "Balipur"
let accountState;



// accountId = 2 It is not allowed 

accountEmail = "vishnu@gmail.com"
accountpassward = "9755"
accountCity = "Manawar"

console.log(accountId);

/*
perfer not use var
because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail, accountpassward, accountCity, accountState])
