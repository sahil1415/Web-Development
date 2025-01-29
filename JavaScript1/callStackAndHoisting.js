// Hoisting is nothing but is a process by which it shifts
// the variable and function declaration to the top of their scope

// In JavaScript, hoisting refers to the behavior where variable and 
// function declarations are moved to the top of their containing 
// scope during the compile phase, before the code is executed.

// console.log(x); // undefined, because of hoisting
// var x = 5;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// var variables are hoisted to the top of their scope and initialized with undefined.
// let and const are also hoisted, but they remain in the temporal dead zone until the 
// line where they are declared. Accessing them before declaration results in a ReferenceError.

// foo(); // Works because function declaration is hoisted

// function foo() {
//   console.log('Hello!');
// }

// 2. Function Hoisting:
// Function declarations (using function keyword) are hoisted completely, meaning both the function name and its body are moved to the top.
// Function expressions (e.g., assigning a function to a variable) are not hoisted in the same way. Only the variable declaration is hoisted,
//  but the assignment to the function happens at runtime.


// Class level hoisting is also not possible

// In Java Script Functions are treated as a First Class Citizens because -

// 1. Can be assigned to a variable
// 2. Passed as arguments to other functions
// 3. Returned from other functions
// 4. Stored in dataStructures
// 5. Can be defined as a property in Object
// 6. Anonymous Function
// 7. Function Expression 


// 1. Assigned to a variable
// let greet = function(){
//     console.log("Hello, World!");
// }

// // 2. Passed as an argument to another function
// function greetMe(greet1, FName){
//     greet1();
//     console.log("Hello, My name is "+FName);
// }

// function greet1(){
//     console.log("Hello, World!");
// }

// greetMe(greet1, "Sahil Ansari");

// 3. Can be returned from another function

// function solve(number1, number2){
//     return function(number1, number2){
//         return number1 + number2;
//     }
// }

// let ans = solve(4, 5);
// let finalAns = ans(10, 20);
// console.log(finalAns);


// // 4. Can be stored in data Structures
// const arr = [
//     function(a, b){
//         return a+b;
//     },
//     function(a, b){
//         return a-b;
//     },
//     function (a, b){
//         return a*b;
//     }
// ]
// arr.forEach(value =>{
//     console.log(value(20, 10));
// });

// 5. can be defined as a property inside an object 
let obj = {
    name : "Sahil Ansari",
    age : 21,
    color : "Brown",
    height : "5ft, 6inch",
    weight : "62kg",
    sayHii : () => {
        console.log("Hello!!")
    }
}

console.log(obj);