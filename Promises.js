// It has three states

// Pending,fulfilled,rejected

// Passing an function inside an parenthesis is called callback - avoiding callback hell and handling asynchronous
// operations.

// A promise is created using the Promise constructor, which takes a function called the executor. 
// The executor function takes two arguments: resolve and reject.

// Callback Hell - Nesting 

// scenario - login -> Username and password - In database if username is not available then no need to look for 
// password at this time , so we need to look for data one by one using callback

// let promise = new Promise(function(resolve, reject) {
//     // asynchronous operation
//     let success = true; // This is just for demonstration
  
//     if (success) {
//       resolve("Operation was successful");
//     } else {
//       reject("Operation failed");
//     }
//   });

// callback - second argument can be a callback function and it is repeated one inside onether as an argument and using same paramter to display.
// this is called callback hell

// A bunch of callback is hard to understand
  