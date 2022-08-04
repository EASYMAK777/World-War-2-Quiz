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

// var timeEl = document.querySelector(".timer");
// var mainEl = document.getElementById(".container");

// var timeLeft = 30;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + "seconds till game end";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }
