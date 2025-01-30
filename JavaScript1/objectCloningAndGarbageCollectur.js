// Object Cloning can be done in three ways:
//   1 -> Spread Operator // Creates a shallow copy
//   2 -> Object.assign() // Creates a shallow copy while maintaining instance type
//   3 -> Iterations
//   4 -> JSON Serialization // Creates a deep copy (removes methods)

class Me {
    name = "Sahil Ansari";
    age = 21;
    height = "5ft, 7inch";ig
}

console.log("Shallow Copy - Spread Operator");
let src = new Me();
let dest = { ...src }; // Creates a new plain object, not an instance of Me

console.log("Before modification:");
console.log("src - ", src);
console.log("dest - ", dest);

dest.age = 22; // Modifying the copied object

console.log("After modifying dest.age:");
console.log("src - ", src);  // No change
console.log("dest - ", dest); // Change reflects here


console.log("\nShallow Copy - Object.assign()");
let dest2 = Object.assign(new Me(), src); // Creates a new Me instance with copied properties

console.log("Before modification:");
console.log("src - ", src);
console.log("dest2 - ", dest2);

dest2.age = 22; // Modifying the copied object

console.log("After modifying dest2.age:");
console.log("src - ", src);  // No change
console.log("dest2 - ", dest2); // Change reflects here


console.log("\nDeep Copy - JSON Serialization");
let dest3 = JSON.parse(JSON.stringify(src)); // Deep copy, removes methods

console.log("Before modification:");
console.log("src - ", src);
console.log("dest3 - ", dest3);

dest3.age = 22; // Modifying the copied object

console.log("After modifying dest3.age:");
console.log("src - ", src);  // No change
console.log("dest3 - ", dest3); // Change reflects here

console.log("Object Copy using Iteration")
let dest4 = {};

for(let key in src){
    let newKey = key;
    let newValue = src[key];
    dest4[newKey] = newValue;
}
console.log(dest4);


// 1. Shallow Copy
// In a shallow copy, only the top-level properties (data members) of the object are copied. If any of those properties are references to other objects (like arrays or nested objects), only the reference to the nested object is copied, not the nested object itself.

// What is copied: Only the direct properties (data members) of the object.
// What is not copied: Nested objects or arrays. They remain shared between the original and the copied object.

// 2. Deep Copy
// In a deep copy, everything is copied, including nested objects and arrays. The key difference here is that nested objects are also copied recursively, so the copied object gets completely independent copies of the nested objects, instead of just copying references.

// What is copied: Everything—top-level properties as well as any nested objects or arrays.
// What is not copied: Methods (since methods can't be serialized in JSON serialization).



// Garbage Collector -> Free's the memmory which is no longr in use to prevent memory leak.
// Memory leak - It means we cannot use a memory which is not in use
// We have no control over garbage collector and always wroks in bacckground