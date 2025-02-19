// Closures - A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing.

// In more lamen language when a function is binded with it's required data(lexical scope our surrounding data) it is called closures

// let a = "Tab"
function init(){
    let a = "Mobile"
    function displayName(){
        // let a = "Laptop"
        console.log(a);
    }
    displayName();
}
init();