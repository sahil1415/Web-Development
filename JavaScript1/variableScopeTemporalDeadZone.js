// GLobal socpe
var a = 10;
console.log(a);

{
    console.log(a);
}

{
    var b = 20;
    console.log(b);
}
console.log(b);

// Function Scope
function myFunction(){
    var fName = "Sahil Ansari";
    console.log(fName);
}
myFunction();
// console.log(fName);

// Blocked Scope
// let and const are blocked scope
{
    let Fname = "Ash Ketchum";
    console.log(Fname);
}
// console.log(Fname);

// The Temporal Dead Zone (TDZ) refers to the period during which a 
// variable is declared using let or const but is not yet initialized. 
// During this phase, attempting to access the variable will result in 
// a ReferenceError.

console.log(c);
console.log(d);
let c = 10;              // line no 36 to line no 38 is called temporal deadzone
const d = 20;
