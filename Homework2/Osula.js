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



// Lab Exercise: Student Score Analyzer


console.log("\n------ Lab Exercise: Student Score Analyzer -----");

// Create an empty array for student scores
let scores = [];

// Use a for loop to collect five student scores
for (let i = 0; i < 5; i++) {
    let score = Number(prompt("Enter student score " + (i + 1) + ":"));
    scores.push(score);
}

// Function to calculate the average score
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Calculate the average
let averageScore = calculateAverage(scores);

// Display all entered scores
console.log("Scores:", scores.join(","));

// Display the average score
console.log("Average Score:", averageScore);

// Determine if the class passed or failed
if (averageScore >= 70) {
    console.log("class passed");
} else {
    console.log("class failed");
}



// AI Integration Activity


// AI Assistance:
// ChatGPT helped explain how the calculateAverage()
// function works and assisted with debugging.