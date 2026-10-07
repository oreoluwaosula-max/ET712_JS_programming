console.log("----- Example 1: object ")
// create an object 'car'
const car = {
    type:"Fiat",
    model: "500",
    color: "white",


    // methods
    carname: function() {
        return this.type + " " + this.model
    }
}

// call the property of object car
console.log(car.color)
console.log(car["type"])
console.log(car.carname())

console.log("----- Example 2: object constructor ")
function Course(title, instructor, code, session, students) {
    this.t = title
    this.i = instructor
    this.c = code
    this.s = session
    this.number_students = students
}
// create an object of the constructor Course
let course1 = new Course(" Computer Application", "Prof. Wu", "Tech100", "M1", 20)
let course2 = new Course("JS programming", "prof. Novak", "ET712", "C3", 18)

// access to the Course value
console.log(course1.i)
console.log(course2.number_students)

console.log("----- Example 3: medthods of an object ")
const Square = {
     // methods 
     area(side) {return side * side},
     perimeter(side) {return 4 * side},
     }

// access to the methods of an object
let s = 9
let area1 = Square.area(s)
let perimeter1 = Square.perimeter(s)
console.log(`The Square with side ${s} has an area of ${area1} and a perimeter of ${perimeter1}`)

console.log("----- Example 4: methods of an object using 'this' statement ")
const hen = {
    // properties
    name: "Helen",
    eggcount : 0,

    // method
    lay_an_egg(){
        this.eggcount ++
        return 'EGG'}
}


console.log("----- LAB EXERCISE 1 -----");

const mycalculator = {
    // properties 
    message: "Square calculator",
    side: 2,
    description: "Calculates the area of a square and the volume given the side length",

    // methods
    area_square() {
        return Math.pow(this.side, 2);
    },

    volume_cube() {
        return Math.pow(this.side, 3);
    }
};

// Display results 
console.log("Area of square:", mycalculator.area_square());
console.log("Volume of cube:", mycalculator.volume_cube());


console.log("\n------ Lab Exercise 2: Exception Handling -----");

function readProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        return "Error accessing property";
    }
}

// Example 1
const student = {
    name: "Ore",
    age: 19
};

console.log(readProperty(student, "name"));

console.log(readProperty(student, "age"));    

// Example 2
console.log(readProperty(null, "name"));


// AI assistance
// AI assistance to help explain the formulas or debug the object methods if needed.
// AI assistance: Explain how Math.pow() works in JavaScript.
// AI assistance: How do you calculate powers in JavaScript using Math.pow()?

/* Reflection:
1) AI helped me understand object methods.
2) AI helped me understand Math.pow() and how powers are calculated.
3) AI helped me understand exception handling and try-catch.
4) AI helped me debug errors in my JavaScript code.
*/