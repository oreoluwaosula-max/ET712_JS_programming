
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
    // Stop the browser from submitting and reloading the page.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Clear old messages before checking again.
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Check that the name is not empty.
    if (name === "") {
        nameError.textContent = "Please enter your full name.";
        isValid = false;
    }

    // Check the email format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Require at least 5 characters and one #, $, or % symbol.
    const passwordPattern = /^(?=.*[#$%]).{5,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Use at least 5 characters and include #, $, or %.";
        isValid = false;
    }

    // Display a success message only if every field is valid.
    if (isValid) {
        successMessage.textContent = "Success! All fields are valid.";
    }
});

/*
AI assistance reflection:
I used ChatGPT to understand event.preventDefault(),
regular expressions, form validation, and how to display
error and success messages using JavaScript and the DOM.
I tested the code and checked how the validation works.
*/
