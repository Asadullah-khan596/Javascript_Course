// stack (Primitive--->copy of a variable is created), Heap(for Non-Primitive---> reference is created for a variable)

/****** stack (primitive example) *****/
let name1= "Asadullah"
let name2= name1; // copy is created 
name2="Khan" // only name2 will be changed and name1 remains the same

//console.log(name1,name2);

/****** heap (non-primitive example) *****/


let userOne={
    email:"khan@gmail.com",
    number:875463022,
}

let userTwo=userOne // reference is created 
userTwo.number=29567035 //it will change userOne number also 

console.log(userTwo);
console.log(userOne);