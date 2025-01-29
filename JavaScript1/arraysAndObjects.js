// Reference Types -> Objects, Arrays, Functions
// The actual data contained in reference variables is stored in heap memory
// Reference variables themselves are stored in stack memory

// Objects in JavaScript are collections of key-value pairs
let obj = {
    name: "Sahil Ansari",
    age: "21",
    height: "5ft 7inch",
    weight: "62kg",
    "skin color": "brown",

    greet: function () {
        console.log("Hello, World!");
    }
};

// Reference Copy
console.log("Original Object:");
console.log(obj);
obj.greet();

let obj1 = obj; // Reference copy
console.log("Reference Copy (obj1):");
console.log(obj1);

// Shallow Copy using the spread operator
let obj2 = { ...obj }; 
obj2.age = 30;

console.log("Original Object after modifying shallow copy:");
console.log(obj);
console.log("Shallow Copy (obj2):");
console.log(obj2);

// Deep Copy using JSON methods
let obj3 = JSON.parse(JSON.stringify(obj));
obj3.age = 45;

console.log("Original Object after modifying deep copy:");
console.log(obj);
console.log("Deep Copy (obj3):");
console.log(obj3);


// Creation of Array
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

let brr = new Array(1, 2, 'Sahil Ansari', 4.53, true);
console.log(brr);
console.log(typeof(arr), typeof(brr));

let crr = new Array(1, 2, 3, 4, 5);

crr.push(6); // add element at the back
crr.pop();   // removes the last entered element
crr.shift(); // removes the left most element
crr.unshift(7); // adds element at the left

let drr = crr.slice(2, 4);
console.log("Slice - "+drr); // Shallow copy

crr.splice(1,2, 100); // remove values from 1 to 2 index and insert 100
console.log(crr);


let err = [10, 20, 30];
let frr = err.map((number) => {
    return number*number;
})
console.log(err);
console.log(frr);

let grr = err.map((number, index) =>{
    console.log(number," " +index)
})

let hrr = [1, 2, 3, 4, 5, 6, 7, 8]

let irr = hrr.filter((number) => {
    return number % 2 === 0;
})
console.log(hrr);
console.log(irr);

let jrr = [1, 2, 3, 4, 5]

let ans = jrr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(ans);

let krr = [3, 4, 2, 1, 1, 3, 4, 5 ,6, 0, 9]
console.log(krr)
krr.sort();
krr.sort((a, b) => {
    return b-a;
});


console.log(krr)

krr.forEach((index, value) => {
    console.log(index," "+ value);
})

for(let key in obj){
    console.log(key, " -  ", obj[key]);
}

let lrr = [1, 2 ,3, 4, 5, 5, 7];
for(let value of lrr){
    console.log(value);
}

let mrr = [10, 20, 30, 40, 50]

function getSum(mrr){
    let ans = 0;
    // let length = mrr.length;
    // for(let i=0; i<length; i++){
    //     ans += mrr[i];
    // }
    // return ans;
    mrr.forEach(element => {
        ans += element;
    })
    return ans;
}

let sum = getSum(mrr);
console.log(sum);