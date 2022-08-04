var questionDiv = document.getElementById("questionDiv");
var questionDiv = document.querySelector("questionDiv");
var imgEl = document.querySelectorAll(".image");

var questionObject = {
  firstQuestion: "What year did World War 1 Start?",
  secondQuestion: "What year did USA enter World War 2",
  thirdQuestion: "What was the first country Germany invaded?",
  fourthQuestion: "Which countries made up the Axis powers?",
};

// for (var i = 0; i < questionObject.length; i++) {}

// console.log(questionObject);
// console.log(imgEl);
// console.log(questionDiv);

var questionArray = [
  {
    element: questionDiv,
    title: "firstQuestion",
    answer: "July 28, 1914",
  },
];

// APPEND?
// for (var i = 0; i < questionArray.length; i++) {}

// RENDERQUESTION
// function renderQuestion()

// TIMER

var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById(".container");

// How much time is left when the timer starts
var timeLeft = 30;

// Function used to display how much time is left on screen
function setTime() {
  var timerInterval = setInterval(function () {
    // This allows it to display whatever time thats in the variable on line 38
    secondsLeft--;
    // displays a div with a string and the time
    timeEl.textContent = secondsLeft + "seconds till game end";
    // Displays a message after timer hits 0
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// Function to display players score in a div
function displayScore() {
  // creates a text Element
  timeEl.textContent = "";
  // Replaces questions with original image after timer ends
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "/Assets/img/soldier.png");
  mainEl.appendChild(imgEl);
}
// Calling the function above
setTime();
