const accountId = 45678
let accountEmail = "asad@google.com"
var accountPassword = "9876"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "kh@n.com"
accountPassword = "9797979"
accountCity = "Bengaluru"

console.log(accountId);

/*
 We would prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


