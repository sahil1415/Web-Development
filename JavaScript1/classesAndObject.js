// Classes and Objects

class Human {

    age; // Public field
    name; // Public field;
    #height;// Private field
    // Constructor to initialize fields
    constructor(age, name, height) {
        this.age = age; // Public field
        this.name = name; // Public field
        this.#height = height; // Private field
    }

    // Data members are by default public
    // To make them private, add a `#` before the variable name


    // Setter for height
    setheight(height) {
        this.#height = height;
    }

    // Getter for height
    getHeight() {
        return this.#height;
    }

    // Method for walking
    walking() {
        console.log("I am walking");
    }

    // Method for running
    running() {
        console.log("I am running");
    }
}

// Creating an object and initializing fields using the constructor
let obj = new Human(21, "Sahil Ansari", "5ft, 7inch");

console.log(obj.name);      // Accessing public field, output: Sahil Ansari
console.log(obj.age);       // Accessing public field, output: 25

// Attempting to access private field directly
// console.log(obj.#height); // This will throw an error because #height is private

// Modifying the private field using the setter
obj.setheight("6ft"); // Setting new height
console.log(obj.getHeight()); // Accessing private field through getter, output: 6ft

// Accessing public methods
obj.walking(); // Output: I am walking
obj.running(); // Output: I am running
