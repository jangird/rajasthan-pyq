let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
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
}

function checkAnswer(selected) {
  let correct = questions[currentQuestion].answer;

  if (selected === correct) {
    score++;
    alert("✅ Correct Answer!");
  } else {
    alert("❌ Wrong! Correct: " + correct);
  }

  scoreText.innerText = "Score: " + score;
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionText.innerText = "🎉 Quiz Finished!";
    optionsBox.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();

