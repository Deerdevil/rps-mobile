"use strict:";
const computerQ = document.querySelector(".computer--q");
const computerRock = document.querySelector(".rock");
const computerPaper = document.querySelector(".paper");
const computerScissor = document.querySelector(".scissor");
const selectRock = document.querySelector(".player--rock");
const selectPaper = document.querySelector(".player--paper");
const selectScissor = document.querySelector(".player--scissor");
const playerScoreBoard = document.querySelector(".player--score");
const computerScoreBoard = document.querySelector(".computer--score");
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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Both picked ${playerSelection}`);
    totalScore++;
    return outcome;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Rock beats scissor`);
    playerScore++;
    totalScore++;
    return outcome;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Scissor beats paper`);
    playerScore++;
    totalScore++;
    return outcome;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Paper beats rock`);
    playerScore++;
    totalScore++;
    return outcome;
  } else {
    let outcome = (document.querySelector(
      ".info h1"
    ).textContent = `Computer wins`);
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
  content.textContent = `${playerScore}`;
  playerScoreBoard.appendChild(content);
}
function addToComputerScore() {
  let content = document.createElement("p");
  content.textContent = `${computerScore}`;
  computerScoreBoard.appendChild(content);
}
function gameOver() {
  if (totalScore === 5 || playerScore >= 5 || computerScore >= 5) {
    alert("Game is over");
    totalScore = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = "";
    computerScoreBoard.textContent = "";
  }
}
function game() {
  const computerSelection = computerPlay();
  console.log(computerSelection);

  if (computerSelection === "Rock") {
    computerRock.classList.remove("hidden");
    computerPaper.classList.add("hidden");
    computerScissor.classList.add("hidden");
    computerQ.classList.add("hidden");
  } else if (computerSelection === "Paper") {
    computerPaper.classList.remove("hidden");
    computerRock.classList.add("hidden");
    computerScissor.classList.add("hidden");
    computerQ.classList.add("hidden");
  } else if (computerSelection === "Scissor") {
    computerScissor.classList.remove("hidden");
    computerRock.classList.add("hidden");
    computerPaper.classList.add("hidden");
    computerQ.classList.add("hidden");
  }
  playRound(selection, computerSelection);
  addToPlayerScore();
  addToComputerScore();
  roundCount();
  gameOver();
}
selectRock.addEventListener("click", function () {
  selection = "Rock";
  game();
});
selectPaper.addEventListener("click", function () {
  selection = "Paper";
  game();
});
selectScissor.addEventListener("click", function () {
  selection = "Scissor";
  game();
});

// function game() {
//   let total = 0;

//   if (total < 5) {
//     // for (let i = 0; i < 1; i++) {
//     total++;
//     let playerSelection = selection;
//     let computerSelection = computerPlay();
//     playerScoreBoard.appendChild(newP);
//     computerScoreBoard.appendChild(newP);

//     // document.querySelector(".player--score p").textContent = `${playerScore}`;
//     console.log(computerScoreBoard);
//     console.log(playerScoreBoard);
//     playRound(playerSelection, computerSelection);

//     console.log(
//       `Player picks: ${playerSelection} and has ${playerScore} points`
//     );
//     console.log(
//       `Computer picks: ${computerSelection} and has ${computerScore} points`
//     );
//     console.log(total);
//     // }
//   }

//   if (playerScore > computerScore) {
//     console.log(`Player wins with ${playerScore} to ${computerScore}`);
//   } else if (playerScore === computerScore) {
//     console.log(`The game was a draw`);
//   } else {
//     console.log(`Computer wins with ${computerScore} to ${playerScore}`);
//   }
// }
