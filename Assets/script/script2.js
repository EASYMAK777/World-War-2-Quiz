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
