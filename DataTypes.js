// Let , const and var 

// ** Note : Formatting code extension - Prettier code formatter 

// Documentation : Recommended - javascript mdn , official : tc39.es

// if found these keywords javascript will assign it into memory
// value of let can be replaced 
// use let and const in js don't perfer var since it has issue in scope and functional scope.
// "use strict" - by writing this it follows the newer version of javascript.
// console.table([a, b , c]) - To print multiple variables 

// var a = 5;
// console.log(a);

// const b = 2
// console.log(b);

// for(let a = 0; a<5; a++){
//     console.log(a*2);
// }

// let a = 2; 

// for(a = 0;a<3;a++){
//     console.log(a);
// }

// Primitive Data types 

//Number - 2 to power 53 (capability to store values)
//bigint
//Boolean
//String
//Undefined
//null
//symbol - unique

// Non-primitive Data type 

// Arrays, functions, objects

//Questions 

// typeOf null is Object
// typeOf undefined is undefined
// Datatype of non-primitive would be function and datatype of function is object function

// Datatype conversion 

// Number = converts the value to number from string
// Boolean = converts to boolean value - true ->1 , false - 0 & "" - false , "value" - true
// String = converts into string 


// score = "33"
// scoreplus = "33abc"
// let valueInnumber = Number(scoreplus);
// console.log(valueInnumber);

// string can be converted into number but number with string value will also be converted into number - Not strict check in js


// Stack and Heap Memory 

// Stack - Primitive datatype & Heap - Non-primitive data type 

// primitive data type holds a copy of value 

// Non - primitive datatype holds a original value since it is reference to function

// stack primitive

// If you assign variable instead of value it will take as copy and if you reassign any value to its variable 
// it will take that last assigned value as current value
// let uniquevar = "uzma"

// let secondvar = uniquevar;
// secondvar = "jawweriya"
// secondvar = "Asgari"
// console.log(uniquevar);
// console.log(secondvar);

let uniqueone = {
    mail:"unique@1",
    id:1
}

let uniquetwo = uniqueone;

uniquetwo.mail= "mail@2"

console.log(uniqueone.mail);