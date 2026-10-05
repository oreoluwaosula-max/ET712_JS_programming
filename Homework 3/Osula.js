 /*
Name: Ore-Oluwa Osula
Course: JavaScript Programming
Lab Experiment 4: Arrays, Functions, and AI Assistance
Date: October 5, 2026
*/


// Class Example 1: Creating an Array


console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);



// Class Example 2: Using a Loop with Arrays


console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


// Class Example 3: Functions and Return Values


console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));



// Lab Exercise: Student Score Analyzer with AI


console.log("\n------ Lab Exercise: Student Score Analyzer -----");

let scores = [];

// Collect five student scores.
for (let i = 0; i < 5; i++) {
    let score = Number(prompt("Enter student score " + (i + 1) + ":"));
    scores.push(score);
}

// Calculate the average of the scores.
function calculateAverage() {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Display the scores and average.
let averageScore = calculateAverage();

console.log("Scores:", scores.join(", "));
console.log("Average Score:", averageScore);

// Determine whether the class passed or failed.
if (averageScore >= 70) {
    console.log("Class Passed");
} else {
    console.log("Class Failed");
}



// AI Integration Activity


// AI Assistance:
// ChatGPT helped organize the JavaScript program, explain the
// for loop and calculateAverage() function, and check the code
// for syntax and formatting errors.