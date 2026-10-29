// BRAINYBUDS: FOUR LEARNING CATEGORIES
const lessons = {
  math: {
    title: "Math Adventure",
    quizCategory: "Math",
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
    quizCategory: "English & Words",
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
      ["J", "J is for Jam", "🍯", "J is for Jam."]
    ]
  },

  animals: {
    title: "Animal World",
    quizCategory: "Animals",
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
    quizCategory: "Shapes",
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

// QUIZ QUESTIONS: Shapes, Animals, English & Words, and Math
const quizQuestions = [
  // SHAPES
  { category: "Shapes", question: "Which shape has three sides?", answers: ["Circle", "Triangle", "Square"], correct: "Triangle" },
  { category: "Shapes", question: "Which shape is round?", answers: ["Rectangle", "Triangle", "Circle"], correct: "Circle" },
  { category: "Shapes", question: "How many sides does a square have?", answers: ["3", "4", "5"], correct: "4" },
  { category: "Shapes", question: "Which shape has four equal sides?", answers: ["Square", "Circle", "Triangle"], correct: "Square" },
  { category: "Shapes", question: "Which shape looks like a ball?", answers: ["Circle", "Rectangle", "Triangle"], correct: "Circle" },

  // ANIMALS
  { category: "Animals", question: "Which animal says 'meow'?", answers: ["Dog", "Cat", "Cow"], correct: "Cat" },
  { category: "Animals", question: "Which animal has a long trunk?", answers: ["Elephant", "Lion", "Rabbit"], correct: "Elephant" },
  { category: "Animals", question: "Which animal gives us wool?", answers: ["Sheep", "Fish", "Chicken"], correct: "Sheep" },
  { category: "Animals", question: "Which animal can fly?", answers: ["Dog", "Bird", "Cow"], correct: "Bird" },
  { category: "Animals", question: "Which animal lives in water?", answers: ["Fish", "Horse", "Cat"], correct: "Fish" },

  // ENGLISH & WORDS
  { category: "English & Words", question: "Which letter comes after A?", answers: ["C", "B", "D"], correct: "B" },
  { category: "English & Words", question: "Which word names a fruit?", answers: ["Apple", "Chair", "Pencil"], correct: "Apple" },
  { category: "English & Words", question: "Which word starts with the letter B?", answers: ["Dog", "Ball", "Cat"], correct: "Ball" },
  { category: "English & Words", question: "Which one is a color?", answers: ["Happy", "Blue", "Jump"], correct: "Blue" },
  { category: "English & Words", question: "Which letter comes before D?", answers: ["C", "E", "F"], correct: "C" },

  // MATH
  { category: "Math", question: "What is 2 + 3?", answers: ["4", "5", "6"], correct: "5" },
  { category: "Math", question: "What is 5 + 1?", answers: ["7", "6", "4"], correct: "6" },
  { category: "Math", question: "What is 8 - 3?", answers: ["4", "6", "5"], correct: "5" },
  { category: "Math", question: "How many fingers are on one hand?", answers: ["5", "10", "4"], correct: "5" },
  { category: "Math", question: "What is 4 + 4?", answers: ["6", "8", "9"], correct: "8" }
];

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

// QUIZ ELEMENTS
const quizSection = document.getElementById("quizSection");
const quizTitle = document.getElementById("quizTitle");
const quizHint = document.getElementById("quizHint");
const questionNumber = document.getElementById("questionNumber");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const quizResults = document.getElementById("quizResults");
const quizScore = document.getElementById("quizScore");
const restartQuizBtn = document.getElementById("restartQuizBtn");
const backToActivitiesBtn = document.getElementById("backToActivitiesBtn");
const startQuizBtn = document.getElementById("startQuizBtn");

let currentCategory = null;
let favorites = JSON.parse(localStorage.getItem("brainybuds-favorites") || "[]");
let completed = JSON.parse(localStorage.getItem("brainybuds-completed") || "[]");
let soundEnabled = localStorage.getItem("brainybuds-sound") !== "false";

let toastTimer;

// QUIZ PROGRESS
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ---------- INTRO BUBBLE GAME ----------

const intro = document.getElementById("intro");
const introHint = document.getElementById("introHint");
const introWelcome = document.getElementById("introWelcome");
const mainBubble = document.getElementById("mainBubble");

let bubbleTimer;

// Make one small floating bubble that rises up the screen
function spawnSmallBubble() {
  if (!intro || intro.classList.contains("leaving")) return;

  const bubble = document.createElement("button");
  const size = 40 + Math.random() * 50;

  bubble.type = "button";
  bubble.className = "bubble bubble-small";
  bubble.setAttribute("aria-label", "Pop a small bubble");
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 90 + "%";
  bubble.style.animationDuration = 7 + Math.random() * 6 + "s";

  // Small bubbles are just for fun: pop one and a new one floats up
  bubble.addEventListener("click", () => {
    bubble.classList.add("pop");
    introHint.textContent = "Nice pop! Now find the BIG bubble 🫧";
    setTimeout(() => bubble.remove(), 350);
    setTimeout(spawnSmallBubble, 600);
  });

  // Remove it when it floats away and replace it
  bubble.addEventListener("animationend", event => {
    if (event.animationName === "rise") {
      bubble.remove();
      spawnSmallBubble();
    }
  });

  intro.appendChild(bubble);
}

function startIntro() {
  for (let i = 0; i < 7; i++) {
    setTimeout(spawnSmallBubble, i * 500);
  }
}

// Popping the big bubble shows the welcome message, then opens the site
mainBubble.addEventListener("click", () => {
  mainBubble.classList.add("pop");
  introHint.hidden = true;
  introWelcome.hidden = false;

  clearTimeout(bubbleTimer);

  bubbleTimer = setTimeout(() => {
    intro.classList.add("leaving");
    document.body.classList.remove("intro-active");

    setTimeout(() => {
      intro.hidden = true;
    }, 700);
  }, 1800);
});

startIntro();

// ---------- HELPERS ----------

// SHOW A MESSAGE
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
  localStorage.setItem("brainybuds-favorites", JSON.stringify(favorites));
  localStorage.setItem("brainybuds-completed", JSON.stringify(completed));
}

// PICK A SOFT, FRIENDLY FEMALE VOICE
// Browsers load their voices a moment after the page opens,
// so we look for the best one each time we need it.
const preferredVoices = [
  "Samantha", "Ava", "Allison", "Susan", "Karen", "Tessa", "Moira", "Fiona",
  "Google US English", "Microsoft Aria", "Microsoft Jenny", "Microsoft Zira", "Female"
];

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  const english = voices.filter(v => v.lang.toLowerCase().startsWith("en"));

  for (const name of preferredVoices) {
    const match = english.find(v => v.name.includes(name));
    if (match) return match;
  }

  return english[0] || voices[0] || null;
}

// Warm up the voice list as soon as the browser has it
if ("speechSynthesis" in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", pickVoice);
}

// SPEAK LEARNING WORDS (slow, gentle, kids-show style)
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

  // Commas add small pauses so it sounds like she is talking to a little one
  const gentleText = text.replace(/\. /g, "... ").replace(/!/g, "!...");

  const voice = new SpeechSynthesisUtterance(gentleText);
  const chosen = pickVoice();

  if (chosen) {
    voice.voice = chosen;
    voice.lang = chosen.lang;
  }

  voice.rate = 0.72;   // slow and clear
  voice.pitch = 1.45;  // soft and high, like a kids show host
  voice.volume = 1;

  window.speechSynthesis.speak(voice);
}

// RETURN TO THE HOME PAGE
function showCategories() {
  currentCategory = null;
  categoryGrid.hidden = false;
  activitiesSection.hidden = true;
  quizSection.hidden = true;
  emptyState.hidden = true;
  searchInput.value = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// OPEN A LEARNING CATEGORY
function openCategory(category) {
  currentCategory = category;

  const lesson = lessons[category];

  categoryGrid.hidden = true;
  activitiesSection.hidden = false;
  quizSection.hidden = true;
  emptyState.hidden = true;

  activitiesTitle.textContent = lesson.title;
  sectionHint.textContent = lesson.intro;
  startQuizBtn.hidden = false;
  searchInput.value = "";

  renderActivities();

  activitiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// DISPLAY THE TEN ACTIVITIES
function renderActivities(filter = "") {
  if (!currentCategory) return;

  const lesson = lessons[currentCategory];
  const query = filter.toLowerCase().trim();

  const items = lesson.items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.join(" ").toLowerCase().includes(query));

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

// OPEN AN INTERACTIVE LESSON
function openLessonItem(category, index) {
  const item = lessons[category].items[index];
  const id = `${category}-${index}`;
  const isFavorite = favorites.includes(id);

  modalContent.innerHTML = `
    <div class="modal-emoji">${item[2]}</div>

    ${category === "math" ? `<div class="big-number">${item[0]}</div>` : ""}

    <h2>${item[1]}</h2>
    <p>${item[3]}</p>

    <div class="modal-actions">
      <button class="pill-button" id="speakBtn">🔊 Hear it</button>

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

  // FAVORITES
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
      favorites.includes(id) ? "Added to favorites! 💗" : "Removed from favorites."
    );
  });

  // TRACK LEARNING PROGRESS
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

// VIEW FAVORITES
function showFavorites() {
  const list = [];

  Object.entries(lessons).forEach(([category, lesson]) => {
    lesson.items.forEach((item, index) => {
      if (favorites.includes(`${category}-${index}`)) {
        list.push(`<li>${item[2]} <strong>${item[1]}</strong> — ${lesson.title}</li>`);
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

// VIEW PROGRESS
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

      <button class="pill-button secondary" id="closeProgressBtn">Keep learning!</button>
    `
  );

  document.getElementById("closeProgressBtn").addEventListener("click", () => {
    infoDialog.close();
  });
}

// SETTINGS
function showSettings() {
  openInfo(
    "⚙️ Settings",
    `
      <p>Make BrainyBuds just right for you.</p>

      <label class="setting-row">
        <span>🔊 Spoken learning</span>
        <input id="soundToggle" type="checkbox" ${soundEnabled ? "checked" : ""}>
      </label>

      <p>Your favorites and progress are saved on this device.</p>

      <button class="pill-button secondary" id="resetProgressBtn">Reset progress</button>
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

// ---------- QUIZ ----------

// START A QUIZ FOR A CATEGORY
function startQuiz(category) {
  currentQuestions = quizQuestions.filter(item => item.category === category);

  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  quizTitle.textContent = category + " Quiz";
  quizHint.textContent = "Choose the correct answer!";
  quizSection.hidden = false;

  // Hide the activities while the quiz is open
  activitiesSection.hidden = true;
  emptyState.hidden = true;

  showQuestion();

  quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// DISPLAY A QUESTION
function showQuestion() {
  answered = false;

  const item = currentQuestions[currentQuestionIndex];

  questionNumber.textContent =
    `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  quizQuestion.textContent = item.question;
  quizAnswers.innerHTML = "";
  quizFeedback.textContent = "";

  nextQuestionBtn.hidden = true;
  quizResults.hidden = true;

  item.answers.forEach(answer => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quiz-answer";
    button.textContent = answer;

    button.addEventListener("click", () => checkAnswer(button, answer));

    quizAnswers.appendChild(button);
  });
}

// CHECK THE CHILD'S ANSWER
function checkAnswer(button, answer) {
  if (answered) return;

  answered = true;

  const item = currentQuestions[currentQuestionIndex];
  const buttons = quizAnswers.querySelectorAll(".quiz-answer");

  buttons.forEach(answerButton => {
    answerButton.disabled = true;

    if (answerButton.textContent === item.correct) {
      answerButton.classList.add("correct");
    }
  });

  if (answer === item.correct) {
    score++;
    quizFeedback.textContent = "🎉 Great job! That's correct!";
  } else {
    button.classList.add("incorrect");
    quizFeedback.textContent = `Good try! The correct answer is ${item.correct}.`;
  }

  nextQuestionBtn.textContent =
    currentQuestionIndex === currentQuestions.length - 1
      ? "See My Score"
      : "Next Question →";

  nextQuestionBtn.hidden = false;
}

// MOVE TO THE NEXT QUESTION
nextQuestionBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// SHOW THE FINAL SCORE
function showResults() {
  quizAnswers.innerHTML = "";
  quizQuestion.textContent = "Quiz completed!";
  questionNumber.textContent = "You finished the quiz!";
  quizFeedback.textContent = "";
  nextQuestionBtn.hidden = true;
  quizResults.hidden = false;

  quizScore.textContent = `You scored ${score} out of ${currentQuestions.length}!`;

  quizHint.textContent =
    score === currentQuestions.length
      ? "Amazing! You got every question right! 🌟"
      : "Great effort! Keep practicing and try again! 💪";
}

// RESTART THE SAME QUIZ
restartQuizBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  quizHint.textContent = "Choose the correct answer!";
  showQuestion();
});

// START THE QUIZ FOR THE CATEGORY YOU ARE IN
startQuizBtn.addEventListener("click", () => {
  if (currentCategory) {
    startQuiz(lessons[currentCategory].quizCategory);
  }
});

// RETURN TO THE ACTIVITIES SECTION
backToActivitiesBtn.addEventListener("click", () => {
  quizSection.hidden = true;
  activitiesSection.hidden = false;
  activitiesSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ---------- BUTTONS AND SEARCH ----------

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

// GO TO TOP
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// RANDOM LEARNING ACTIVITY
document.getElementById("surpriseBtn").addEventListener("click", () => {
  const categories = Object.keys(lessons);

  const category = categories[Math.floor(Math.random() * categories.length)];
  const index = Math.floor(Math.random() * lessons[category].items.length);

  openCategory(category);
  openLessonItem(category, index);
});

// SEARCH ACTIVITIES
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  // Searching closes the quiz
  quizSection.hidden = true;

  if (currentCategory) {
    activitiesSection.hidden = false;
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
  startQuizBtn.hidden = true; // no quiz button on search results
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
