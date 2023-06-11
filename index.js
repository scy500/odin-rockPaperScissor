// Set scores

let playerScore = 0;
let computerScore = 0;

// Getting the computer choice

const getComputerChoice = function () {
  const number = Math.floor(Math.random() * 3) + 1;
  let choice = undefined;
  if (number == 1) {
    choice = "rock";
  } else if (number == 2) {
    choice = "paper";
  } else if (number == 3) {
    choice = "scissors";
  }
  return choice;
};

// Play one round

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a draw!";
  } else if (playerSelection == "rock") {
    return computerSelection == "paper"
      ? "You loose! Paper beats Rock!"
      : "You win! Rock beats Scissors!";
  } else if (playerSelection == "paper") {
    return computerSelection == "scissors"
      ? "You loose! Scissors beats Paper!"
      : "You win! Paper beats Rock!";
  } else if (playerSelection == "scissors") {
    return computerSelection == "rock"
      ? "You loose! Rock beats Scissors!"
      : "You win! Scissors beats Paper!";
  }
};

// Play the game

const game = function () {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Rock Paper Scissors! What do you choose?"
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      console.log(`Round ${i + 1}! `, result);
      playerScore = playerScore + 1;
    } else {
      console.log(`Round ${i + 1}! `, result);
      computerScore = computerScore + 1;
    }
  }
  playerScore > computerScore
    ? console.log(`You won ${playerScore} to ${computerScore} !`)
    : console.log(`You lost ${computerScore} to ${playerScore} !`);
};
