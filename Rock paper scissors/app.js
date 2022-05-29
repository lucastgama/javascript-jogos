const computerChoiseDisplay = document.getElementById("computer-choice");
const userChoiseDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiseDisplay.innerHTML = userChoice;
    genereteComputerChoice();
    getResult();
  })
);

function genereteComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiseDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its draw!!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you win!!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost!!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!!";
  }
  resultDisplay.innerHTML = result
}
