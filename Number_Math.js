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
// 2 to the power of 6
// let power = Math.pow(2,6);
// console.log(power);

//sqrt
// To know the square root of 64 // output is 4 
// let sqrt = (64);
// console.log(sqrt);

//abs
// Converts the value to positive if it is negative
// let abs = Math.abs(-4);
// console.log(abs);

//ceil 
// Rounds the value even if single is present after decimal 
// let ceil = 123.10
// console.log(Math.ceil(ceil));

//floor
// Returns the only value which is before decimal
// let floor = 1.5234;
// console.log(Math.floor(floor));

//min and max

// console.log(Math.min(2, 3, 1));
// // Expected output: 1

// console.log(Math.min(-2, -3, -1));
// // Expected output: -3

//random  = Generates a random value between 0 to 1
// let randomVal = Math.floor(Math.random()*2+1);
// console.log(randomVal);

//trunc - Remove the fractional digits i.e after decimal value

// let trunc = 1234.567;
// console.log(Math.trunc(trunc));
