// 1. Synchronous Code
// Synchronous code executes line by line, in the order it appears. Each operation must complete before the next one starts.

// Example of Synchronous Code:
// js
// Copy
// console.log("First");
// console.log("Second");
// console.log("Third");


// 2. Asynchronous Code
// Asynchronous code allows certain operations (like reading files, making API requests, or set timeouts) to run in the background, without blocking the execution of other tasks. It doesn't stop the flow of the program and allows you to do other work while waiting for something to finish.

// Example of Asynchronous Code:
// js
// Copy
// console.log("First");

// setTimeout(() => {
//     console.log("Second");
// }, 2000);

// console.log("Third");


// 3. Event Loop
// The event loop is a fundamental part of JavaScript’s concurrency model. It allows JavaScript to execute non-blocking code, even though JavaScript is single-threaded. The event loop continuously checks if the call stack is empty, and if it is, it will execute the tasks in the message queue (or task queue).

// How the Event Loop Works:
// Call Stack: When you execute a function, it gets pushed onto the call stack. Functions in the call stack are executed one at a time. When the function finishes, it's popped from the stack.

// Message Queue: Asynchronous operations like setTimeout, network requests, etc., are pushed to the message queue once they are ready to be executed. They are executed after the call stack is empty.

// Event Loop: The event loop checks the call stack. If it's empty, it pushes tasks from the message queue to the call stack.