"use strict:";
// My first attempt at RPS with an UI

//DOM selectors
const computerQ = document.querySelector(".computer--q");
const computerRock = document.querySelector(".rock");
const computerPaper = document.querySelector(".paper");
const computerScissor = document.querySelector(".scissor");
const selectRock = document.querySelector(".player--rock");
const selectPaper = document.querySelector(".player--paper");
const selectScissor = document.querySelector(".player--scissor");
const playerScoreBoard = document.querySelector(".player--scores");
const computerScoreBoard = document.querySelector(".computer--scores");
const computerTotal = document.querySelector(".computer--total");
const playerTotal = document.querySelector(".player--total");
const newP = document.createElement("p");
//The computer chooses randomly rock, paper or scissor.
function computerPlay() {
  const computerChoiceList = ["Rock", "Paper", "Scissor"];
  let computerChoice = [Math.floor(Math.random() * computerChoiceList.length)];
  return computerChoiceList[computerChoice];
}
let computerScore = 0;
let playerScore = 0;
let totalScore = 0;
let playerCurrent = 0;
let computerCurrent = 0;

//Play 1 round of RPS

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Both picked ${playerSelection}`);
    totalScore++;
    computerCurrent = 0;
    playerCurrent = 0;

    return outcome;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Rock beats scissor`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Scissor beats paper`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Paper beats rock`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Computer wins`);
    computerCurrent = 1;
    playerCurrent = 0;
    computerScore++;
    totalScore++;

    return outcome;
  }
}
function roundCount() {
  document.querySelector(
    ".info h3"
  ).textContent = `This is round ${totalScore}`;
}

function addToPlayerScore() {
  let content = document.createElement("p");
  if (playerCurrent > computerCurrent) {
    content.textContent = `✓`;
    playerScoreBoard.appendChild(content);
  } else if (playerCurrent < computerCurrent) {
    content.textContent = `x`;
    playerScoreBoard.appendChild(content);
  } else {
    content.textContent = `-`;
    playerScoreBoard.appendChild(content);
  }
}
function addToComputerScore() {
  let content = document.createElement("p");
  if (playerCurrent < computerCurrent) {
    content.textContent = `✓`;
    computerScoreBoard.appendChild(content);
  } else if (playerCurrent > computerCurrent) {
    content.textContent = `x`;
    computerScoreBoard.appendChild(content);
  } else if (playerCurrent === computerCurrent) {
    content.textContent = `-`;
    computerScoreBoard.appendChild(content);
  }
}

function paper() {
  computerRock.classList.add("hidden");
  computerScissor.classList.add("hidden");
  computerPaper.classList.remove("hidden");
}
function rock() {
  computerPaper.classList.add("hidden");
  computerScissor.classList.add("hidden");
  computerRock.classList.remove("hidden");
}
function scissor() {
  computerPaper.classList.add("hidden");
  computerRock.classList.add("hidden");
  computerScissor.classList.remove("hidden");
}
//Player selection
selectRock.addEventListener("click", () => {
  selection = "Rock";
  game();
});
selectPaper.addEventListener("click", () => {
  selection = "Paper";
  game();
});
selectScissor.addEventListener("click", () => {
  selection = "Scissor";
  game();
});

//Lets play
function game() {
  playerCurrent = 0;
  computerCurrent = 0;
  let computerSelection = computerPlay();
  computerQ.classList.add("hidden");
  //See what the computer chose
  switch (computerSelection) {
    case "Rock":
      rock();
      break;
    case "Paper":
      paper();
      break;
    case "Scissor":
      scissor();
      break;
    default:
      computerQ.classList.add("hidden");
  }

  playRound(selection, computerSelection);
  addToComputerScore();
  addToPlayerScore();
  playerTotal.textContent = `${playerScore}`;
  computerTotal.textContent = `${computerScore}`;
  roundCount();
  gameOver();
}
//Game ends
function gameOver() {
  if (totalScore === 5 || playerScore >= 5 || computerScore >= 5) {
    computerPaper.classList.add("hidden");
    computerRock.classList.add("hidden");
    computerScissor.classList.add("hidden");
    computerQ.classList.remove("hidden");
    alert("Game is over");
    playerTotal.textContent = ``;
    computerTotal.textContent = ``;
    totalScore = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = "";
    computerScoreBoard.textContent = "";
  }
}
