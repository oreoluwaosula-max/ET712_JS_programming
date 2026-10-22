
// Get the gallery and arrow buttons
const gallery = document.querySelector(".gallerycontainer");
const btnright = document.querySelector(".btnright");
const btnleft = document.querySelector(".btnleft");

// Move the gallery left or right
function scrollGallery(pixels) {
    gallery.scrollBy({
        left: pixels,
        behavior: "smooth"
    });
}

// Right arrow: next season
btnright.addEventListener("click", function () {
    scrollGallery(500);
});

// Left arrow: previous season
btnleft.addEventListener("click", function () {
    scrollGallery(-500);
});

// Get the form elements
const myForm = document.querySelector("#myForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const passwordmsg = document.querySelector(".passwordmsg");
const submitbtn = document.querySelector(".submitbtn");
const welcomeMessage = document.querySelector("#welcomeMessage");

// Check whether both fields are valid
function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const validUsername = username.length > 0;
    const validPassword = password.length >= 8;

    submitbtn.disabled = !(validUsername && validPassword);
    submitbtn.classList.toggle("disablebtn", submitbtn.disabled);

    return { validUsername, validPassword };
}

// Check the username when the user types
usernameInput.addEventListener("input", function () {
    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Please enter a username.";
    } else {
        usernameError.textContent = "";
    }

    validateForm();
});

// Check the password when the user types
passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    if (password.length < 8) {
        passwordError.textContent =
            "Password must be at least 8 characters.";
        passwordmsg.style.display = "block";
    } else {
        passwordError.textContent = "";
        passwordmsg.style.display = "none";
    }

    validateForm();
});

// Handle form submission
myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const { validUsername, validPassword } = validateForm();

    if (!validUsername) {
        usernameError.textContent = "Please enter a username.";
        usernameInput.focus();
        return;
    }

    if (!validPassword) {
        passwordError.textContent =
            "Password must be at least 8 characters.";
        passwordInput.focus();
        return;
    }

    // Show a welcome message using the username
    welcomeMessage.textContent =
        `Welcome to JS, ${usernameInput.value.trim()}!`;

    // Clear the fields after successful submission
    myForm.reset();

    usernameError.textContent = "";
    passwordError.textContent = "";
    passwordmsg.style.display = "block";

    validateForm();
});

// Set the initial form state
passwordmsg.style.display = "block";
welcomeMessage.textContent = "Welcome!";
validateForm();


// AI Integration Activity

// AI Assistance:
// ChatGPT helped improve the HTML structure, CSS styling,
// JavaScript form validation, and image gallery.
// It also assisted with troubleshooting image paths
// and debugging errors.