// //////////////////////////////////////////EVENT LISTENER THAT DISPLAYS TIMER IN DIV/////////////////////////////////////////
var questionDiv = document.querySelector("#questionDiv");
var startButton = document.querySelector("#start");
var timeLeft = 5;
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
  console.log(timeLeft);

  if (timeLeft < 5) timeLeft--;
  setTimerText();
});

// Ends game when timer expires
function endGame() {
  if (timeLeft === 0) questionDiv.textContent = "game over, submit your score";
  timerEl.textContent = "";
}

///////////////////////////////////////TIMER THAT COUNTS DOWN WHEN BUTTON IS CLICKED AND TIME IS DISPLAYED