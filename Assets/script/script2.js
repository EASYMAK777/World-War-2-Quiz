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
      console.log("game over");
    }
  }, 1000);
}
// Starts and displays timer text in el
startButton.addEventListener("click", function () {
  renderQuestion();
  console.log("Game Start");
  console.log(questions[0].question);
  console.log(questions[0].choiceA);
  console.log(questions[0].choiceB);
  console.log(questions[0].choiceC);
  console.log(questions[0].choiceD);
  // console.log(timeLeft);
  // console.log(questions[0].correct);
  //   //////////////////////////////////////////////////////DISPLAYS QUESTION///////////////////////////////////////
  if (timeLeft < 5) timeLeft--;
  setTimerText();
  //renderQuestion();
  // displayQuestion();
});

// Ends game when timer expires
function endGame() {
  if (timeLeft === 0) question.textContent = "game over, submit your score";
  timerEl.textContent = "";

  console.log("Game End");
}

// var playerScore = 0;
// var scoreBoard = "";

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var scoreBoard = document.getElementById("scoreBoard");
var question = document.getElementById("question");

//Question Object

var questions = [
  {
    question: "What year did world war 2 start?",
    choiceA: "1933",
    choiceB: "2020",
    choiceC: "1920",
    choiceD: "1885",
    correct: "A",
  },
];

//Render the Question
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion() {
  let q = questions[runningQuestionIndex];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// runningQuestionIndex = 0;
// renderQuestion();
// runningQuestionIndex++;
// renderQuestion();
