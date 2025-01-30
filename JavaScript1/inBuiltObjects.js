console.log("In Built Objects");
console.log("PI value - " + Math.PI);
console.log("Abs value - " + Math.abs(5-7));
console.log("Max value - " + Math.max(34, 421,12, 21, 211));
console.log("Min value - " + Math.min(-34, 45, 32, 23));
console.log("Round off value - " + Math.round(1.4))
console.log("Floor value - " + Math.floor(4.5));
console.log("Ceil value - " + Math.ceil(4.5));

console.log("Random Number - "+ Math.random());
console.log("Square - "+ Math.sqrt(25));
console.log("Power - "+ Math.pow(2, 5));

let currDate = new Date();
console.log(currDate);

let specialDate = new Date(2023, 6, 7, 12);
console.log("Special Date1 - "+specialDate);

let specialDate2 = new Date("June 20 2024 7");
console.log("Special Date2 - "+specialDate2);
console.log(specialDate.getDate());
console.log(specialDate.getDay());