// Promise is a object representing the eventual completion or failure of an 
// assynchronous operation, provides a better way to manage assynchronous code 
// It has three states - 
// 1. Pending - Initial state neither fulfiled nor rejected
// 2. Fulfilled - meaning that the operation was completed successfully
// 3. Rejected - operation failed


// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Hello");
// });


// function printMyName(){
//     console.log("My name is Sahil Ansari");
// }

// let myPromise = new Promise((resolve, rejsct) =>{
//     setTimeout(printMyName, 5000);
//     resolve(1);
// })

let promiseX = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("Promise Resolved")
    }
    else{
        reject("Promise Rejected")
    }
})

promiseX.then((message) => {
    console.log("Message of then - " +message)
}).catch((message) => {
    console.log("Message of Catch - " + message)
}).finally((message) =>{
    console.log("Inside of finally block")
})


let promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "FirstPromise")
})

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "SecondPromise")
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "ThirdPromise")
})

Promise.all([promise1, promise2, promise3]).then((message) =>{
    console.log(message);
}).catch((error) =>{
    console.log("Error - " + error)
})