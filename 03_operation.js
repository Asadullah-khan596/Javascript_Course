let value = 32
let negVlaue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2**2);  //power


let str1 = "hello"
let str2 = "asad"

// let str3 = str1+str2
// console.log(str3); // concatenation of strings

// conversion depends on first serve

// console.log(1+"2"); //converts into strings --> output=12
// console.log("1"+2); //converts into string -->output=12

// console.log(1+2"2); //output will be 32

/*
avoid this use paranthesis for these type of situation
*/


/***********************postfix-----> use and then increment */
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// expected output: "x:4", y:3"

// prefix ---> increement and then use

let a= 3;
const b = ++a;

console.log(`a:${a},b:${b}`);
// Expected output: "a:4, b:4"