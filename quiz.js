let questions = [
  {
    question: "Rajasthan Police was established in which year?",
    options: ["1949", "1952", "1965", "1971"],
    answer: 0
  },
  {
    question: "Rajasthan's capital is?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Kota"],
    answer: 1
  },
  {
    question: "Rajasthan Police Headquarters is located in?",
    options: ["Ajmer", "Bikaner", "Jaipur", "Alwar"],
    answer: 2
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    questions[index].question;

  let buttons = document.querySelectorAll(".option");

  buttons.forEach((btn, i) => {
    btn.innerText = questions[index].options[i];
    btn.style.background = "#f2f2f2";
    btn.disabled = false;
  });

  document.getElementById("next-btn").style.display = "none";

  // Progress bar
  document.getElementById("progress-bar").style.width =
    ((index) / questions.length) * 100 + "%";
}

function checkAnswer(selected) {
  let buttons = document.querySelectorAll(".option");

  if (selected === questions[index].answer) {
    score++;
    buttons[selected].style.background = "green";
  } else {
    buttons[selected].style.background = "red";
    buttons[questions[index].answer].style.background = "green";
  }

  buttons.forEach(btn => btn.disabled = true);

  document.getElementById("score-box").innerText = "Score: " + score;
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML = `
      <h2>🎉 Quiz Completed!</h2>
      <p>Your Score: <b>${score}</b> / ${questions.length}</p>
      <button onclick="location.reload()">Restart Quiz</button>
    `;
  }
}

loadQuestion();

