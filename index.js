let textbox = document.querySelector(".textbox");
let playerSpan = document.querySelector(".player");
let comSpan = document.querySelector(".com");

// audio files

let rockAudio = document.querySelector("#rockAudio");
let paperAudio = 0;
let scissorsAudio = 0;

// Set scores

let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerSelection = "";
let gameover = false;

<<<<<<< HEAD
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
=======
let reset = function () {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerSelection = "";
  playerSpan.innerText = playerScore;
  comSpan.innerText = computerScore;
  textbox.innerText = "Start playing by clicking !";
  gameover = false;
};
// set choices

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

// Play one round - check winner

const checkWinner = function (playerSelection, computerSelection) {
>>>>>>> rps-uiTest
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
  if (!gameover) {
    let computerSelection = getComputerChoice();
    let result = checkWinner(playerSelection, computerSelection);
    if (result.includes("win")) {
<<<<<<< HEAD
      console.log(`Round ${i + 1}! `, result);
=======
>>>>>>> rps-uiTest
      playerScore = playerScore + 1;
      playerSpan.innerText = playerScore;
    } else {
<<<<<<< HEAD
      console.log(`Round ${i + 1}! `, result);
=======
>>>>>>> rps-uiTest
      computerScore = computerScore + 1;
      comSpan.innerText = computerScore;
    }
    console.log(result);
    round++;
    textbox.innerText = `Round ${round}`;
    if (round == 5) {
      playerScore > computerScore
        ? (textbox.innerText = `Player won with ${playerScore} vs ${computerScore} ! Click for new game !`)
        : (textbox.innerText = `Computer won with ${computerScore} vs ${playerScore} ! Click for new game !`);
      gameover = true;
      textbox.addEventListener("click", function () {
        reset();
      });
    }
  }
<<<<<<< HEAD
  playerScore > computerScore
    ? console.log(`You won ${playerScore} to ${computerScore} !`)
    : console.log(`You lost ${computerScore} to ${playerScore} !`);
=======
};

// Get player choice and play one round
if (!gameover) {
  rock.addEventListener("click", function () {
    let audio = new Audio("audio/stone.mp3");
    audio.play();
    playerSelection = "rock";
    console.log("rock");
    game();
  });
  paper.addEventListener("click", function () {
    let audio = new Audio("audio/paper.mp3");
    audio.play();
    playerSelection = "paper";
    console.log("paper");
    game();
  });
  scissor.addEventListener("click", function () {
    let audio = new Audio("audio/scissors.mp3");
    audio.play();
    playerSelection = "scissors";
    console.log("scissors");
    game();
  });
}
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
>>>>>>> rps-uiTest
};
