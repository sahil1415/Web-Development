                        //   -> conditional statements
// Control Statement -> 
                        //   -> looping statements

let a= 10;
if(a > 5){
    console.log("Greater than 5");
}
else if(a < 10){
    console.log("less than 10");
}
else{
    console.log("Unknown")
}

let b = 1;
switch(b){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
}


for(let c = 0; c<5; c++){
    console.log("for loop");
}

let d = 0;
while(d < 5){
    console.log("While loop")
    d++;
}

let e = 0;
do {
    console.log("Do while loop");
    e++;
} while (e < 5);
