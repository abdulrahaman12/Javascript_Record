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

//Questions 

// typeOf null is Object
// typeOf undefined is undefined

// Datatype conversion 

// Number = converts the value to number from string
// Boolean = converts to boolean value - true ->1 , false - 0 & "" - false , "value" - true


score = "33"
scoreplus = "33abc"
let valueInnumber = Number(scoreplus);
console.log(valueInnumber);

// string can be converted into number but number with string value will also be converted into number - Not strict check in js



