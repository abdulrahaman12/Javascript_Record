//Number
//1.Number 
// Creates the number object where the value data type will be strictly a number and it has some property
// let n1 = new Number(1234);
// console.log(n1);

//2.toString.length
// let s1 = 12345;
// console.log(s1.toString().length); - Remember for parenthesis () for toString.

//3.toFixed
// Eg: 1002345.00 - toFixed(2) - Paramater defines to fix the number of integers after decimal.

// let n2 = 10000;
// Output = 10000.00
// console.log(n2.toFixed(2));

//4.toprecision

// If founds the paramater specific value eg: 123.50 it will round the value and return only 3 integers as output
// In case the value is more than 3 -> It will still prefer creating decimal among 3 integers rest will be exponential.
// let precise = 123412; // output - 124
// console.log(precise.toPrecision(3));

//5.toLocaleString
// It will return indian standard value and can pass different paramaters value 
// let time = 123450000;
// console.log(time.toLocaleString('en-IN'));

//Math

//Power
//sqrt
//abs
//ceil
//floor
//min
//max
//random
//trunc
