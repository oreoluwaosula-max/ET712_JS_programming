// BRAINYBUDS: FOUR LEARNING CATEGORIES
const lessons = {
  math: {
    title: "Math Adventure",
    intro: "Let's count from 1 to 10!",
    items: [
      ["1", "One", "☝️", "One bright sun!"],
      ["2", "Two", "✌️", "Two little shoes!"],
      ["3", "Three", "🦋", "Three butterflies!"],
      ["4", "Four", "🍎", "Four yummy apples!"],
      ["5", "Five", "⭐", "Five shiny stars!"],
      ["6", "Six", "🐞", "Six tiny ladybugs!"],
      ["7", "Seven", "🌈", "Seven rainbow colors!"],
      ["8", "Eight", "🐙", "Eight octopus arms!"],
      ["9", "Nine", "🎈", "Nine colorful balloons!"],
      ["10", "Ten", "🎉", "Ten cheers for you!"]
    ]
  },

  english: {
    title: "English & Words",
    intro: "Learn letters A to J!",
    items: [
      ["A", "A is for Apple", "🍎", "A is for apple."],
      ["B", "B is for Bear", "🐻", "B is for bear."],
      ["C", "C is for Cat", "🐱", "C is for cat."],
      ["D", "D is for Dog", "🐶", "D is for dog."],
      ["E", "E is for Egg", "🥚", "E is for egg."],
      ["F", "F is for Fish", "🐟", "F is for fish."],
      ["G", "G is for Grapes", "🍇", "G is for grapes."],
      ["H", "H is for Hat", "🎩", "H is for hat."],
      ["I", "I is for Igloo", "🧊", "I is for igloo."],
      ["J", "J is for Jellyfish", "🪼", "J is for jellyfish."]
    ]
  },

  animals: {
    title: "Animal World",
    intro: "Meet ten amazing animal friends!",
    items: [
      ["Dog", "Dog", "🐶", "Dogs can be playful friends."],
      ["Cat", "Cat", "🐱", "Cats can purr when happy."],
      ["Lion", "Lion", "🦁", "A lion is a big cat."],
      ["Elephant", "Elephant", "🐘", "Elephants have long trunks."],
      ["Giraffe", "Giraffe", "🦒", "Giraffes have long necks."],
      ["Monkey", "Monkey", "🐵", "Monkeys can climb trees."],
      ["Penguin", "Penguin", "🐧", "Penguins are birds that cannot fly."],
      ["Frog", "Frog", "🐸", "Frogs can jump."],
      ["Butterfly", "Butterfly", "🦋", "Butterflies have colorful wings."],
      ["Turtle", "Turtle", "🐢", "Turtles have protective shells."]
    ]
  },

  shapes: {
    title: "Shape Safari",
    intro: "Explore ten different shapes!",
    items: [
      ["Circle", "Circle", "🔴", "A circle is round like a wheel."],
      ["Square", "Square", "🟦", "A square has four equal sides."],
      ["Triangle", "Triangle", "🔺", "A triangle has three sides."],
      ["Rectangle", "Rectangle", "▰", "A rectangle has four sides."],
      ["Oval", "Oval", "🥚", "An oval looks like a stretched circle."],
      ["Star", "Star", "⭐", "A star shape has points."],
      ["Heart", "Heart", "❤️", "A heart reminds us of love."],
      ["Diamond", "Diamond", "💎", "A diamond looks like a tilted square."],
      ["Crescent", "Crescent", "🌙", "A crescent looks like a curved moon."],
      ["Hexagon", "Hexagon", "⬡", "A hexagon has six sides."]
    ]
  }
};

// PAGE ELEMENTS
const categoryGrid = document.getElementById("categoryGrid");
const activitiesSection = document.getElementById("activitiesSection");
const activityGrid = document.getElementById("activityGrid");
const activitiesTitle = document.getElementById("activitiesTitle");
const sectionHint = document.getElementById("sectionHint");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const learnDialog = document.getElementById("learnDialog");
const infoDialog = document.getElementById("infoDialog");
const modalContent = document.getElementById("modalContent");
const infoContent = document.getElementById("infoContent");
const toast = document.getElementById("toast");

let currentCategory = null;
let favorites = JSON.parse(
  localStorage.getItem("brainybuds-favorites") || "[]"
);
let completed = JSON.parse(
  localStorage.getItem("brainybuds-completed") || "[]"
);
let soundEnabled =
  localStorage.getItem("brainybuds-sound") !== "false";

let toastTimer;

// FEATURE 1: SHOW A MESSAGE
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// SAVE FAVORITES AND PROGRESS
function saveData() {
  localStorage.setItem(
    "brainybuds-favorites",
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    "brainybuds-completed",
    JSON.stringify(completed)
  );
}

// FEATURE 2: SPEAK LEARNING WORDS
function speak(text) {
  if (!soundEnabled) {
    showToast("Sound is turned off 🔇");
    return;
  }

  if (!("speechSynthesis" in window)) {
    showToast("Speech is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const voice = new SpeechSynthesisUtterance(text);
  voice.rate = 0.8;
  voice.pitch = 1.15;

  window.speechSynthesis.speak(voice);
}

// RETURN TO THE HOME PAGE
function showCategories() {
  currentCategory = null;
  categoryGrid.hidden = false;
  activitiesSection.hidden = true;
  emptyState.hidden = true;
  searchInput.value = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// FEATURE 3: OPEN A LEARNING CATEGORY
function openCategory(category) {
  currentCategory = category;

  const lesson = lessons[category];

  categoryGrid.hidden = true;
  activitiesSection.hidden = false;
  emptyState.hidden = true;

  activitiesTitle.textContent = lesson.title;
  sectionHint.textContent = lesson.intro;
  searchInput.value = "";

  renderActivities();

  activitiesSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// DISPLAY THE TEN ACTIVITIES
function renderActivities(filter = "") {
  if (!currentCategory) return;

  const lesson = lessons[currentCategory];
  const query = filter.toLowerCase().trim();

  const items = lesson.items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) =>
      item.join(" ").toLowerCase().includes(query)
    );

  activityGrid.innerHTML = "";

  items.forEach(({ item, index }) => {
    const id = `${currentCategory}-${index}`;

    const card = document.createElement("button");
    card.className = "activity-card";
    card.type = "button";

    card.innerHTML = `
      <span class="item-emoji">${item[2]}</span>
      <span class="item-name">${item[1]}</span>
      <span class="item-sub">
        ${completed.includes(id) ? "⭐ Learned!" : "Tap to explore"}
      </span>
      ${favorites.includes(id) ? "<span>💗</span>" : ""}
    `;

    card.addEventListener("click", () => {
      openLessonItem(currentCategory, index);
    });

    activityGrid.appendChild(card);
  });

  emptyState.hidden = items.length > 0;
}

// FEATURE 4: OPEN AN INTERACTIVE LESSON
function openLessonItem(category, index) {
  const item = lessons[category].items[index];
  const id = `${category}-${index}`;
  const isFavorite = favorites.includes(id);

  modalContent.innerHTML = `
    <div class="modal-emoji">${item[2]}</div>

    ${category === "math"
      ? `<div class="big-number">${item[0]}</div>`
      : ""}

    <h2>${item[1]}</h2>
    <p>${item[3]}</p>

    <div class="modal-actions">
      <button class="pill-button" id="speakBtn">
        🔊 Hear it
      </button>

      <button class="pill-button secondary" id="favoriteItemBtn">
        ${isFavorite ? "💗 Favorited" : "☆ Add favorite"}
      </button>

      <button class="pill-button" id="learnedBtn">
        ${completed.includes(id) ? "✓ Learned!" : "🌟 I learned this!"}
      </button>
    </div>
  `;

  learnDialog.showModal();

  document.getElementById("speakBtn").addEventListener("click", () => {
    speak(`${item[1]}. ${item[3]}`);
  });

  // FEATURE 5: FAVORITES
  document.getElementById("favoriteItemBtn").addEventListener("click", () => {
    if (favorites.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
    } else {
      favorites.push(id);
    }

    saveData();

    document.getElementById("favoriteItemBtn").textContent =
      favorites.includes(id) ? "💗 Favorited" : "☆ Add favorite";

    renderActivities(searchInput.value);

    showToast(
      favorites.includes(id)
        ? "Added to favorites! 💗"
        : "Removed from favorites."
    );
  });

  // FEATURE 6: TRACK LEARNING PROGRESS
  document.getElementById("learnedBtn").addEventListener("click", () => {
    if (!completed.includes(id)) {
      completed.push(id);
    }

    saveData();

    document.getElementById("learnedBtn").textContent = "✓ Learned!";

    renderActivities(searchInput.value);
    showToast("Great job, BrainyBud! ⭐");
  });
}

// OPEN AN INFORMATION POP-UP
function openInfo(title, body) {
  infoContent.innerHTML = `<h2>${title}</h2>${body}`;
  infoDialog.showModal();
}

// FEATURE 7: VIEW FAVORITES
function showFavorites() {
  const list = [];

  Object.entries(lessons).forEach(([category, lesson]) => {
    lesson.items.forEach((item, index) => {
      if (favorites.includes(`${category}-${index}`)) {
        list.push(
          `<li>${item[2]} <strong>${item[1]}</strong> — ${lesson.title}</li>`
        );
      }
    });
  });

  openInfo(
    "💗 My Favorites",
    list.length
      ? `<p>Your special learning picks:</p>
         <ul class="progress-list">${list.join("")}</ul>`
      : "<p>No favorites yet. Open a lesson and tap Add favorite!</p>"
  );
}

// FEATURE 8: VIEW PROGRESS
function showProgress() {
  const total = 40;
  const count = completed.length;
  const percent = Math.round((count / total) * 100);

  const rows = Object.entries(lessons).map(([key, lesson]) => {
    const amount = lesson.items.filter((_, index) =>
      completed.includes(`${key}-${index}`)
    ).length;

    return `<li>${lesson.title}: <strong>${amount}/10</strong></li>`;
  }).join("");

  openInfo(
    "🏆 My Learning Progress",
    `
      <p>You've learned <strong>${count} of ${total}</strong> activities!</p>

      <div class="progress-track">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>

      <p><strong>${percent}% complete</strong> — great work!</p>
      <ul class="progress-list">${rows}</ul>

      <button class="pill-button secondary" id="closeProgressBtn">
        Keep learning!
      </button>
    `
  );

  document.getElementById("closeProgressBtn").addEventListener("click", () => {
    infoDialog.close();
  });
}

// FEATURE 9: SETTINGS
function showSettings() {
  openInfo(
    "⚙️ Settings",
    `
      <p>Make BrainyBuds just right for you.</p>

      <label class="setting-row">
        <span>🔊 Spoken learning</span>
        <input id="soundToggle" type="checkbox"
          ${soundEnabled ? "checked" : ""}>
      </label>

      <p>Your favorites and progress are saved on this device.</p>

      <button class="pill-button secondary" id="resetProgressBtn">
        Reset progress
      </button>
    `
  );

  document.getElementById("soundToggle").addEventListener("change", event => {
    soundEnabled = event.target.checked;

    localStorage.setItem("brainybuds-sound", String(soundEnabled));

    showToast(soundEnabled ? "Sound is on! 🔊" : "Sound is off 🔇");
  });

  document.getElementById("resetProgressBtn").addEventListener("click", () => {
    completed = [];
    favorites = [];

    saveData();
    infoDialog.close();

    if (currentCategory) {
      renderActivities(searchInput.value);
    }

    showToast("Progress and favorites reset.");
  });
}

// CATEGORY BUTTONS
categoryGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-category]");

  if (card) {
    openCategory(card.dataset.category);
  }
});

// HEADER BUTTONS AND NAVIGATION
document.getElementById("homeBtn").addEventListener("click", showCategories);
document.getElementById("backBtn").addEventListener("click", showCategories);

document.getElementById("favoritesBtn").addEventListener("click", showFavorites);
document.getElementById("progressBtn").addEventListener("click", showProgress);
document.getElementById("settingsBtn").addEventListener("click", showSettings);

// FEATURE 10: GO TO TOP
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FEATURE 11: RANDOM LEARNING ACTIVITY
document.getElementById("surpriseBtn").addEventListener("click", () => {
  const categories = Object.keys(lessons);

  const category = categories[
    Math.floor(Math.random() * categories.length)
  ];

  const index = Math.floor(
    Math.random() * lessons[category].items.length
  );

  openCategory(category);
  openLessonItem(category, index);
});

// FEATURE 12: SEARCH ACTIVITIES
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (currentCategory) {
    renderActivities(query);
    return;
  }

  if (!query) {
    showCategories();
    return;
  }

  const matches = [];

  Object.entries(lessons).forEach(([category, lesson]) => {
    lesson.items.forEach((item, index) => {
      const text = `${lesson.title} ${item.join(" ")}`.toLowerCase();

      if (text.includes(query)) {
        matches.push({ category, lesson, item, index });
      }
    });
  });

  categoryGrid.hidden = true;
  activitiesSection.hidden = false;
  activitiesTitle.textContent = "Search results";
  sectionHint.textContent = `${matches.length} discoveries found!`;
  activityGrid.innerHTML = "";

  matches.forEach(({ category, lesson, item, index }) => {
    const card = document.createElement("button");

    card.className = "activity-card";
    card.type = "button";

    card.innerHTML = `
      <span class="item-emoji">${item[2]}</span>
      <span class="item-name">${item[1]}</span>
      <span class="item-sub">${lesson.title}</span>
    `;

    card.addEventListener("click", () => {
      openLessonItem(category, index);
    });

    activityGrid.appendChild(card);
  });

  emptyState.hidden = matches.length > 0;
});

// CLOSE POP-UP BUTTONS
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.close).close();
  });
});

// CLOSE A POP-UP BY CLICKING OUTSIDE IT
[learnDialog, infoDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});