// Async-Await - 
// Using this feature in JS we can run our assynchronous code sequentially

// async function getData() {
//     setTimeout(() => {
//         console.log("Asynchronous Function");
//     }, 3000)
// }

// let promise = getData();
// console.log(promise);

async function getData() {
    // get request - async
    let response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // parse json - async
    let data = await response.json();
    console.log(data)
}

// Lets understand a scnerio
// Step -1 - Prepare Url/ api endpoint -> sync
// Step -2 - fetch data -> network call -> async
// Step -3 - Process the data -> sync


// So here the data will take some time to come
// till then step 3 3will be completed giving us 
// undefined results so we have to put a condition 
// until data comes the further code will not be executed



