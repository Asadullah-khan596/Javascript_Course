// function -> it helps to reduce the repeatative work

// declaring a function 
function sayName(){
    console.log("K");
    console.log("H") ;
    console.log("A");
    console.log("N");

}

// calling a funtion 
sayName()  // sayName ---> it is a reference to a funtion()

// addition function (using console)
// num1 and num2 are parameter here

function addTWOnum(num1,num2){
    console.log(num1+num2);
}
addTWOnum(14,62)
const res = addTWOnum(5,9) //giving 3 and 5 as argument
console.log("Result:",res);//result--> error undefined because function is not returning anything


//addition function (using return) 

function addTwoNumbers1(num1,num2){
    return num1+num2; //will return and not print 
}
const result1 = addTwoNumbers1(3, 5) //giving 3,5 agrument
console.log("Result: ", result1); //no error will be there now

/*********MORE ABOUT FUNCTIONS **********/
//simple form of function declaration 
function userLoginMsg(username){
    return `${username} has logged in`
}
const ans=userLoginMsg("asad")
console.log(ans) //output-->asad has logged in

//what if 
console.log(userLoginMsg()); //output --> undefined has logged in 

//marking this above error and updating the code
function userLoginMsg1(username){
    if(username=== undefined){ // if-block only exceute when the condition  its true
        //we can also use if(!username)--->(!)->this mark makes true into false and vice-versa
        return "please enter a valid username"
    }
    return `${username} has logged in`
}
 console.log(userLoginMsg1()); //output-->please enter a valid username

//giving default value to the parameter
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage()) //default value will be the output--> sam just logged in 
 console.log(loginUserMessage("asad")) // it will overwrite the default value output-->asad just logged in 
