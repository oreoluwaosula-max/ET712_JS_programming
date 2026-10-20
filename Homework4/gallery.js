
const galleryTrack = document.getElementById("galleryTrack");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 0;
const totalPages = 2;

// Move the gallery and update the page number.
function updateGallery() {
    const galleryWindow = document.querySelector(".gallery-window");
    const moveDistance = galleryWindow.clientWidth + 20;

    galleryTrack.style.transform =
        "translateX(-" + (currentPage * moveDistance) + "px)";

    pageNumber.textContent =
        "Page " + (currentPage + 1) + " of " + totalPages;
}

// Move to the next three cards.
rightButton.addEventListener("click", function() {
    currentPage++;

    if (currentPage >= totalPages) {
        currentPage = 0;
    }

    updateGallery();
});

// Move to the previous three cards.
leftButton.addEventListener("click", function() {
    currentPage--;

    if (currentPage < 0) {
        currentPage = totalPages - 1;
    }

    updateGallery();
});

// Keep the gallery correctly positioned when the window changes size.
window.addEventListener("resize", updateGallery);

/*
AI assistance reflection:
I used ChatGPT to understand click event listeners,
CSS transforms, and how to move between groups of cards.
I learned how to use a page counter and looping logic
so users can navigate forward and backward.
*/
