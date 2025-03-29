// Change the RPS Project

function rpsProject() {
  let userInput = prompt("please inter rock, peper or seaser:");
  let userChoice = userInput.toLocaleLowerCase();

  let computerChoice = Math.floor(Math.random() * 3 + 1);
  let computerInput = "";
  if (computerChoice === 1) {
    computerInput += "rock";
  } else if (computerChoice === 2) {
    computerInput += "peper";
  } else if (computerChoice === 3) {
    computerInput += "seaser";
  }

  console.log(computerInput);
  console.log(computerChoice);
}
rpsProject();

// 2. Build the Secret Number Guessing Game

function neew(params) {}
