// //////////////////////////////////////////TIMER, GAME START GAME END/////////////////////////////////////////

var startButton = document.querySelector("#start");
var timeLeft = 5;
var imageDiv = document.querySelector("#imageDiv");
timerEl = document.querySelector("#timerEl");
// Renders timer element when user clicks start button
function setTimerText() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + "seconds till game ends";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endGame();
      //   console.log("game over");
    }
  }, 1000);
}
// Starts and displays timer text in el
startButton.addEventListener("click", function () {
  console.log("Game Start");
  //   //////////////////////////////////////////////////////DISPLAYS QUESTION///////////////////////////////////////
  displayQuestion();
  if (timeLeft < 5) timeLeft--;
  setTimerText();
});

// Ends game when timer expires
function endGame() {
  if (timeLeft === 0) questionDiv.textContent = "game over, submit your score";
  timerEl.textContent = "";

  console.log("Game End");
}

///////////////////////////////////////QUESTION DIV///////////////////////////////////////////////////
//////////////////////////////THIS DIV SHOULD DISPLAY QUESTIONS, AND ANSWER CHOICES, WHEN USER CLICKS CHOICE THE GAME LOGIC SHOULD DETERMINE IF THE /////////
////////////////////////////(CONT) USER CHOICE WAS CORRECT OR INCORRECT, SWITCH TO NEXT QUESTION//////////////////////

// function that displays question when start button is clicked

let questionList = [
  {
    question1: "What year did world war 2 start?",
    choiceA: "1999",
    choiceB: "2022",
    choiceC: "1933",
    choiceD: "1776",
    correct: "C",
  },
];
function displayQuestion() {}

////////////////////////////////////////////////////SCORE BOARD//////////////////////////////////////////////////////////
//////////////////////////////ADDS TO SCOREBOARD OR TAKES AWAY FROM TIME DEPENDING ON USER INPUT////////////////////////////////
var playerScore = 0;
var scoreBoard = "";

// for (var i = question; i < questionList.question1; i++) {
//   var question = questionList.question1;
//   var answers = questionList.answerChoices;
// }
