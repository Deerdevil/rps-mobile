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
function playerInput() {
  let input = prompt("Rock paper or scissor?").toLowerCase();
  return input.charAt(0).toUpperCase().concat(input.slice(1));
}

document.querySelector(".btn").addEventListener("click", game);
function game() {
  let total = 0;

  if (total < 5) {
    for (let i = 0; i < 5; i++) {
      total++;
      let playerSelection = playerInput();
      let computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
      console.log(
        `Player picks: ${playerSelection} and has ${playerScore} points`
      );
      console.log(
        `Computer picks: ${computerSelection} and has ${computerScore} points`
      );
      console.log(total);
    }
  }

  if (playerScore > computerScore) {
    console.log(`Player wins with ${playerScore} to ${computerScore}`);
  } else if (playerScore === computerScore) {
    console.log(`The game was a draw`);
  } else {
    console.log(`Computer wins with ${computerScore} to ${playerScore}`);
  }
}
