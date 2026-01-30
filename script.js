let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score");

const progressBar = document.getElementById("progress-bar");

/* Load Question */
function loadQuestion() {
  optionsBox.innerHTML = "";

  let q = questions[currentQuestion];
  questionText.innerText = q.question;

  // Update Progress
  let progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  // Show Options
  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => checkAnswer(btn, option);

    optionsBox.appendChild(btn);
  });

  // Hide Prev on first question
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
}

/* Check Answer */
function checkAnswer(button, selected) {
  let correct = questions[currentQuestion].answer;

  let allButtons = optionsBox.querySelectorAll("button");

  allButtons.forEach(btn => {
    btn.disabled = true;

    // Highlight correct answer
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    }
  });

  if (selected === correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  scoreText.innerText = "Score: " + score;
}

/* Next Question */
nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
};

/* Previous Question */
prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

/* Finish Quiz */
function finishQuiz() {
  questionText.innerText = "🎉 Quiz Completed!";
  optionsBox.innerHTML = `
    <h2>Your Final Score:</h2>
    <h1>${score} / ${questions.length}</h1>
    <p>Great Job! ✅</p>
  `;

  nextBtn.style.display = "none";
  prevBtn.style.display = "none";

  restartBtn.style.display = "block";
}

/* Restart Quiz */
restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;

  scoreText.innerText = "Score: 0";

  nextBtn.style.display = "inline-block";

  restartBtn.style.display = "none";

  loadQuestion();
};

/* Start Quiz */
loadQuestion();
