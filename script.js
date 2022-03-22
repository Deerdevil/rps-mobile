"use strict:";
//The computer chooses randomly rock, paper or scissor.
function computerPlay() {
  const computerChoiceList = ["Rock", "Paper", "Scissor"];
  let computerChoice = [Math.floor(Math.random() * computerChoiceList.length)];
  console.log(computerChoiceList[computerChoice]);
  return computerChoiceList[computerChoice];
  // return computerFinal;
}
//Player inputs choice
function playerInput() {
  //Takes input from user and capitalizes it.
  let input = prompt("Rock paper or scissor?").toLowerCase();
  let firstOfInput = input.charAt(0).toUpperCase();
  let output = firstOfInput + input.slice(1);

  return output;
}

const computerSelection = computerPlay();
const playerSelection = playerInput();
//Plays one round

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log("Rock beats scissor");
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log("Scissor beats paper");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("Paper beats rock");
  } else if (playerSelection === computerSelection) {
    console.log("It`s a draw");
  } else {
    console.log("Computer wins this round");
  }
}

// Plays the game 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}
game();
