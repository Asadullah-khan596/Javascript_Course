const accountId = 24567
let accountEmail = "asad@google.com"
var accountPassword = "9876"
accountCity = "Hyderabad"
let accountState;

accountEmail = "abc@kh.com"
accountPassword = "979797"
accountCity = "Bengaluru"


// account = 4 // not allowed

console.log(accountId);

/*
We will prefer not use var
because of issue in block scope and functional scope
*/

console.log([accountId,accountEmail,accountPassword,accountCity,accountState])