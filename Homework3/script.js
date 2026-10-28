

/*
Name: Ore-Oluwa Osula
Course: JavaScript Programming
Lab Experiment: Simple Calculator and AI Assistance
Date: October 16, 2026
*/

console.log("------ Lab Exercise 6: Simple Calculator ------");

// Collect the input fields and result element
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

// Collect the four operation buttons
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

// Create a function to perform a calculation
function calculate(operation) {

    // Check whether both input fields contain values
    if (num1.value.trim() === "" || num2.value.trim() === "") {
        result.textContent = "Error: Please enter both numbers.";
        return;
    }

    // Convert the input values to numbers
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);

    // Check for division by zero
    if (operation === "divide" && number2 === 0) {
        result.textContent = "Error: Cannot divide by zero.";
        return;
    }

    // Perform the selected calculation
    let answer;

    if (operation === "add") {
        answer = number1 + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
    } else if (operation === "divide") {
        answer = number1 / number2;
    }

    // Display the result
    result.textContent = "Result: " + answer;
}

// Add click event listeners to the four buttons
addBtn.addEventListener("click", function () {
    calculate("add");
});

subtractBtn.addEventListener("click", function () {
    calculate("subtract");
});

multiplyBtn.addEventListener("click", function () {
    calculate("multiply");
});

divideBtn.addEventListener("click", function () {
    calculate("divide");
});

// Collect the operation buttons
const buttons = [addBtn, subtractBtn, multiplyBtn, divideBtn];

// Add mouseover and mouseout event listeners
buttons.forEach(function (button) {

    // Save the original button color
    const originalColor = getComputedStyle(button).backgroundColor;

    // Change the button color when the mouse moves over it
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "orange";
    });

    // Restore the original color when the mouse leaves
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = originalColor;
    });

});

/*
AI Assistance:

AI helped me understand how JavaScript event listeners work
and how to connect button clicks to a calculation function.
I used the suggestion to convert input values to numbers
before performing calculations. I also used a function to
perform all four arithmetic operations. AI helped me handle
empty inputs, prevent division by zero, and change button
colors when the mouse moves over them.
*/
