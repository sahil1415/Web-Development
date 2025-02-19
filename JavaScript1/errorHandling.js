// Error -> Error is an event or an unforseen situation that interupts the normal flow or the program at runtime.
// It is of basically two types

// 1. Compilt time error 
// ex - Syntax error
// console.log(;

// 2. Runtime error
// ex - Reference error
// console.log(x);


// Error Handling
try{
    console.log("Try starts here - ");
    console.log(x);
    console.log("try ends here - ");
}
catch(e){
    console.log("Error Occured - ");
    console.log(e);
}

// finally blocks runss every time whether error occurs or not
finally{
    console.log("Finally Block");
}

// Custom Exception
let errCode = 100;
if(errCode == 100){
    throw new Error("Invalid Jason");
}

try{
    if(erroCode == 100){
        throw new Error("Invalid Jason");
    }
}
catch(err){
    console.log(e);
}