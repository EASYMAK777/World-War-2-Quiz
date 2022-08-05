var startButton = document.querySelector("#start");
var TimeLeft = 5;
TimerEl = document.querySelector("#timerEl");

function setTimerText() {
  TimerEl.textContent = TimeLeft;
}

startButton.addEventListener("click", function () {
  console.log(TimeLeft);

  if (TimeLeft < 5) TimeLeft--;
  setTimerText();
});
