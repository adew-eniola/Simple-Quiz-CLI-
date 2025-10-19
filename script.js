"use strict";

const questions = [
  "What is the capital of France?",
  "What does JS stand for?",
  "What is 5 + 3?",
  "What keyword is used to declare a variable in JavaScript?",
  "Which data type is this: [1, 2, 3]?",
];

const answers = ["Paris", "JavaScript", "8", "let", "array"];

function checkAnswer(questionIndex, userAnswer) {
  let correctAnswer = answers[questionIndex];
  return userAnswer === correctAnswer ? "Correct" : "Incorrect";
}

let result = checkAnswer(2, "8");
console.log(result);
