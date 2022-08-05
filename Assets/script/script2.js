// //////////////////////////////////////////EVENT LISTENER THAT DISPLAYS TIMER IN DIV/////////////////////////////////////////

var startButton = document.querySelector("#start");
var timeLeft = 5;
timerEl = document.querySelector("#timerEl");

function setTimerText() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + "seconds till game ends";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      //   endGame();
      console.log("game over");
    }
  }, 1000);
}

startButton.addEventListener("click", function () {
  console.log(timeLeft);

  if (timeLeft < 5) timeLeft--;
  setTimerText();
});

///////////////////////////////////////TIMER THAT COUNTS DOWN WHEN BUTTON IS CLICKED AND TIME IS DISPLAYED
