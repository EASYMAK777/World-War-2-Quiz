//get timerEl from html
var timerEl = document.getElementById("timeLeft");
var scoreEl = document.getElementById("score");
var answerChoicesEl = document.getElementById("answers");

//set timer to 75 seconds
var timeLeft = 5;
var score = 0;

//display time in timeLeft element
timerEl.textContent = timeLeft;
scoreEl.textContent = score;

//turn questionEl button into onclick function for startGame()
startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {
  startGame();
};

//start game function to start timer and display first question
function startGame() {
  //start timer
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    //if timer runs out, end game
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
  //display first question and answers from the array
  displayQuestion();
  document.getElementById("startBtn").style.display = "none";
}

//end game function to stop timer and console log "game over"
function endGame() {
  console.log("game over");
}

//create array of questions
var questions = [
  {
    question: "What year did world war 2 start?",
    answers: ["1938", "2012", "1939", "1776"],
    correctAnswer: "1939    ",
  },
  {
    question: "What country was not involved in world war 2?",
    answers: ["Spain", "Germany", "Japan", "USA"],
    correctAnswer: "Spain",
  },
  {
    question: "What country did operation overlord take place in?",
    answers: ["Portugal", "France", "Yugoslavia", "London"],
    correctAnswer: "France",
  },
];

//create function to display questions and answers as buttons in answerChoicesEl
function displayQuestion() {
  //clear answerChoicesEl
  answerChoicesEl.innerHTML = "";
  //display question
  answerChoicesEl.textContent = questions[0].question;
  //create button for each answer
  for (i = 0; i < questions[0].answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.textContent = questions[0].answers[i];
    answerChoicesEl.appendChild(answerBtn);
  }
}

//add styling to answer buttons
var answerBtns = document.querySelectorAll("button"); //select all buttons
for (i = 0; i < answerBtns.length; i++) {
  answerBtns[i].classList.add(
    "answerBtn",
    "btn-primary",
    "btn-lg",
    "btn-block"
  );
}
