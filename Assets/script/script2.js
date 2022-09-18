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

  //display first question
  displayQuestion(0);
  displayAnswerChoices(0);
}

//end game function to stop timer and console log "game over"
function endGame() {
  console.log("game over");
}

//question object with question, answer choices, and correct answer
var question1 = {
  question: "What year did world war 2 start?",
  choices: ["1939", "1940", "1941"],
  answer: "1939",
};

//function to display question in questionEl
function displayQuestion(questionNum) {
  //get questionEl from html
  var questionEl = document.getElementById("question");
  //display question
  questionEl.textContent = question1.question;
}

//function to display choices from question object in answers div
function displayAnswerChoices(questionNum) {
  //get answerChoicesEl from html
  var answerChoicesEl = document.getElementById("answers");
  //display answer choices
  answerChoicesEl.textContent = question1.choices;
}
