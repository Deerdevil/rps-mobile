"use strict:";

let computerScore = 0;
let playerScore = 0;

//The computer chooses randomly rock, paper or scissor.
function computerPlay() {
  const computerChoiceList = ["Rock", "Paper", "Scissor"];
  let computerChoice = [Math.floor(Math.random() * computerChoiceList.length)];
  return computerChoiceList[computerChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = `Both picked ${playerSelection}`;

    return outcome;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    let outcome = "Rock beats scissor";
    playerScore++;
    return outcome;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    let outcome = "Scissor beats paper";
    playerScore++;
    return outcome;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    let outcome = "Paper beats rock";
    playerScore++;
    return outcome;
  } else {
    let outcome = "Computer wins";
    computerScore++;
    return outcome;
  }
}
// const computerSelection = computerPlay();
// let playerSelection = "Rock";
document.querySelector(".btn").addEventListener("click", game);
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Input answer");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Player picks: ${playerSelection} and has ${playerScore} points`
    );
    console.log(
      `Computer picks: ${computerSelection} and has ${computerScore} points`
    );
  }
  if (playerScore > computerScore) {
    console.log(`Player wins with ${playerScore} to ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`The game was a draw`);
  } else {
    console.log(`Computer wins with ${computerScore} to ${playerScore}`);
  }
}
