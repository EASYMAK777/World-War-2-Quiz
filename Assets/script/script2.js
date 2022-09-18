//get timerEl from html
var timerEl = document.getElementById("timeLeft");
var scoreEl = document.getElementById("score");

//set timer to 75 seconds
var timeLeft = 75;
var score = 0;

//display time in timeLeft element
timerEl.textContent = timeLeft;
scoreEl.textContent = score;
