function print(){
    console.log("I am a function");
}

print();

function add(num1 ,num2){
    console.log("Sum - "+ num1+num2)
}
add(4, 5);

function addition(a, b, c){
    return a+b+c;
}

let ans = addition(4, 5, 6);
console.log(ans);

// Variable Function
let getAns = function(a, b){
    return a*b;
}
console.log("Variable Function - "+getAns(5, 4))

// Arrow Function
let printAns = (a, b) => {
    return a*b;
}
console.log(printAns(4, 6));