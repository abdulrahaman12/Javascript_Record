// This and Arrow function

// using this keyword to access the value under the current context 
// using this keyword out of scope returns empty object 
// Note : using this keyword in node returns empty object but in console it has some properties
// window will be global object inside browser object.


// const username = {
//     "names": "Sheikh",
//     "Age":18,
//     currentMessage:function add(){
//         console.log(`My name is ${this.names} and my age is ${this.Age}`)
//         console.log(this);
//     } 
// }
// console.log(this);
// username.currentMessage();

// Arrow function

// Basic function 

// const Arrowfunction = (a,b)=>{
//  return a+b
// }
// console.log(Arrowfunction(2,3));

// Implicit return function
// const arrayfunc = (num1,num2) => (num1 + num2) 
// console.log(arrayfunc(30,40))

// returns the parenthesis based on the paramaters
// const arrayfuncs = (num1,num2) => ({name:"salman"}) 
// console.log(arrayfuncs(30,40))

// IIFE - Function which executes immediately and to avoid pollution of variables in a global scope
// Simple term - Instead of calling function chai() directly access using parenthesis().
// ()() - (function expression)(execution)

// named IIFE 

(function chai(){
    console.log("Basic IIFE Execution");
})();

// Arrow IIFE
((shop)=>{
    console.log(`This icecream is available at ${shop}`)
})('Ibacco')

// Execution context and call stack - How does javascript code runs

// Javascript is single threaded.

// 1.Global execution context
// 2.Function Execution context
// 3.Eval execution context

 