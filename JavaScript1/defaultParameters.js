function displayName(firstName, lastName = "Ansari"){
    console.log(firstName +" "+ lastName);
}

displayName("Sahil");
displayName("Arshiya Sahil");


function getAge(){
    return 21;
}

function displayAge(name = "sahil", age = getAge()){
    console.log(name + " "+ age);
}

displayAge();