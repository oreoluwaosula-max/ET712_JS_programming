

/*
Name: Ore-Oluwa Osula
Course: JavaScript Programming
Lab Experiment: DOM Events and AI Assistance
Date: October 16, 2026
*/

console.log("------ Lab Exercise: Click Counter Circle ------");

// Collect the circle, counter, and reset button
let circle = document.querySelector("#circle");
let counter = document.querySelector("#count");
let resetBtn = document.querySelector("#resetBtn");

// Create the counter variable
let setcounter = 0;

// Increase the counter when the circle is clicked
circle.addEventListener("click", function() {
    setcounter += 1;
    counter.textContent = setcounter;
    circle.textContent = setcounter;
});

// Reset the counter when the Reset button is clicked
resetBtn.addEventListener("click", function() {
    setcounter = 0;
    counter.textContent = 0;
    circle.textContent = 0;
});

/*
AI Assistance:
ChatGPT helped me understand how addEventListener()
works, how to update webpage content using textContent,
and how to style a circle using CSS.
*/
