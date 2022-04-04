"use strict:";

let computerScore = 0;
let playerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    let outcome = `Both picked ${playerSelection}`;

    return outcome;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    let outcome = "Rock beats scissor";
    playerScore++;
    // playerScore = +1;
    return outcome;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    let outcome = "Scissor beats paper";
    playerScore = +1;
    return outcome;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    let outcome = "Paper beats rock";
    playerScore = +1;
    return outcome;
  } else {
    let outcome = "Computer wins";
    computerScore = computerScore + 1;
    return outcome;
  }
}
// let selection;
// function playerInput() {
//   let input = selection;
//   return input;
// }

selectRock.addEventListener("click", function () {
  selection = "Rock";

  let computerSelection = computerPlay();
  playRound(selection, computerSelection);
  console.log(playRound(selection, computerSelection));
  console.log(playerScore);
  if (playerScore > computerScore) {
    console.log("Players wins this round");
  }
});
selectPaper.addEventListener("click", function () {
  selection = "Paper";

  let computerSelection = computerPlay();
  playRound(selection, computerSelection);
});
selectScissor.addEventListener("click", function () {
  selection = "Scissor";

  let computerSelection = computerPlay();
  playRound(selection, computerSelection);
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
