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

//Plays one round
const computerSelection = computerPlay();
const playerSelection = playerInput();
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor") {
    playerScore++;
    let result = "Player wins. Rock beats scissor";
    return result;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    playerScore++;
    let result = "Player wins. Scissor beats paper";
    return result;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    let result = "Player wins. Paper beats rock";
    return result;
  } else if (playerSelection === computerSelection) {
    let result = "No one wins this round";
    return result;
  } else {
    computerScore++;
    let result = "Computer wins this round";
    return result;
  }
}
// playRound(playerSelection, computerSelection);

// // Plays the game 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
    if (playerScore > computerScore) {
      console.log(`Player has ${playerScore} wins`);
    } else if (playerScore < computerScore) {
      console.log(`Computer has ${computerScore} wins`);
    }
  }
}

game();
