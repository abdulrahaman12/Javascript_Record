// Declaring the value in the paramtere will be default value.
// if return is declared inside a scope then it will execute untill that scope. 
// function loginUser(username="sheikh"){
//     if(username === undefined){
//         console.log("Please enter the username");
//         return 
//     }
//     return `user ${username} has already logged in` 
// }

// console.log(loginUser()) 

// Functions with object and array 
// Object - Passing paramater 
let cart = {
    product:"Vaseline",
    price:200
}
// 1.Method
// function addcart(anyobject){
//     return `The product added is ${anyobject.product} and its price is ${anyobject.price}.`
// }
// console.log(addcart(cart))
// // ---------OR---------
// console.log(addcart( {
//     product:"Vaseline",
//     price:200
// }))

// Arrays -  Passing paramater 

// let productprice = [100,112, 664,346,118];

// function ProductCart(getArray){
//     return getArray[2]
// }
// console.log(ProductCart(productprice)); 