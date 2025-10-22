"use strict";
const prompt = require("prompt-sync")();
console.log("Play a quick and simple Quiz: (enter q to quit)");
const Quiz = {
  "What is the capital of France? ": "Paris",
  "What does JS stand for? ": "JavaScript",
  "What is 5 + 3? ": "8",
  "What keyword is used to declare a variable in JavaScript? ": "let",
  "Which data type is this: [1, 2, 3]? ": "array",
};

let questions = Object.keys(Quiz);
let answers = Object.values(Quiz);
let score = 0;
for (let i = 0; i < questions.length; i++) {
  let userInput = prompt(questions[i]).toLowerCase();
  if (userInput === answers[i].toLowerCase()) {
    console.log("You are correct! 😀");
    score++;
  } else if (userInput === "q") {
    break;
  } else {
    console.log("Incorrect! 🙁");
    console.log(`Answer is: ${answers[i]}`);
  }
}

console.log(`Your total score is ${score}/${questions.length}.`);
