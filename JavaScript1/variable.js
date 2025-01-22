// Variable in java script can be created by these three ways
console.log("variable Type - ")
var a = 50;
let b = 60;
const c = 70;
console.log(a, b, c);

// 1 -> var Type
    // * can be either function scoped or global scoped
    // * cannot be block scoped
    // * re-assignment is possible

function solve(){
    var b = 20;
    var b = 100;
    console.log(a, b);
}
solve();

// 2 -> let Type
    // * can only be bock scoped
    // * re-assignment is not possible but manipulation is possible

{
    let e = 99;
    console.log(e);
    let a = 10;
    a = "Hello, World!"
    console.log(a);
}

// 3 -> const Type
    // * value cannot be changed
    // * manipulation redefinition, redeclaration not possible

const d = 80;
console.log(d)

// Data Types
// 1 -> Number
console.log("Data Types - ")
let z = 5;
console.log("Number Data Type - " + z);

let y = 5.342;
console.log("Float Data Type - " + y);

let x = "Sahil Ansari";
console.log("String Data Type - " + x);

let w = true;
console.log("Boolean Data Type - " + w);

let v = 5345324532134423133; // range  > 2^53 -1
console.log("BigINT Data Type - " + v);

let u = null;
console.log("NULL Data Type - " + u);

let t;
console.log("Undefined Data Type - " + t);
