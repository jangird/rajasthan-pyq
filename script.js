let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const scoreText = document.getElementById("score");

function loadQuestion() {
  optionsBox.innerHTML = "";

  let q = questions[currentQuestion];
  questionText.innerText = q.question;

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => checkAnswer(option);

    optionsBox.appendChild(btn);
  });

  // Prev button hide on first question
  prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
}

function checkAnswer(selected) {
  let correct = questions[currentQuestion].answer;

  if (selected === correct) {
    score++;
    alert("✅ Correct Answer!");
  } else {
    alert("❌ Wrong! Correct Answer: " + correct);
  }

  scoreText.innerText = "Score: " + score;

  // Disable options after answering
  let allButtons = optionsBox.querySelectorAll("button");
  allButtons.forEach(btn => btn.disabled = true);
}

// Next Button
nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionText.innerText = "🎉 Quiz Finished!";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
};

// Previous Button
prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

// Load First Question
loadQuestion();
