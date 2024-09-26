// Funtions and object

/**********SHOPING CART --->not knowing how many to pass in the function****/

// passing single value
function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(400));//no error output will be --->400

console.log(calculateCartPrice(200,400,600,2000))//error will be there as 200 will get printed rest of them gets neglected

// Now how to tackle this problem use "rest operator"

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,2000))// it will return the array containing all the argument values -->[200,400,600,2000]

//Another Case
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600,2000))//output will be num1=[600,2000] "val1" will take 200 and "val2" will take 400

// Now we will deal with Objects
// accessing the elements of object "syntax needs to be checked"
const user= {
    username:"asad",
    prices:399
}

function handleObject(anyobj){
    console.log(`username is${anyobj.username} and price is ${anyobj.prices}`);
}

// calling funtion with user argument
handleObject(user) //output -->username is asad and price is 399

// Directly passing object
handleObject({
    usename:"khan",
    prices:199
})//output -->username is sam and price is undefined 

/******Now PASSING ARRAY */

const array=[100,200,400]

function arrayDate(getArray){
    return getArray[1];
}
console.log(arrayDate(array))// output -->200