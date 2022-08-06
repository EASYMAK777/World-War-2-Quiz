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

var questionDiv = document.querySelector("#questionDiv");
var questionDiv = document.getElementById("questionDiv");

// Question Object  || array?//

var questionList = [
  {
    question: "What year did ww1 start?",
    answers:[1992,1122,1933, 2023],
    correctAnswer:1933
  }
   
];
// function that displays question when start button is clicked
function displayQuestion() {
  questionDiv.textContent = questionList[question];
  
  
  
  // questionDiv.textContent = questionList;
  //   console.log(questionList[0]);

}
////////////////////////////////////////////////////SCORE BOARD//////////////////////////////////////////////////////////
//////////////////////////////ADDS TO SCOREBOARD OR TAKES AWAY FROM TIME DEPENDING ON USER INPUT////////////////////////////////
var playerScore = 0;
var scoreBoard = "";
