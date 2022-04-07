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
const modal = document.querySelector(".modal");
const blur = document.querySelector(".blur");
const exit = document.querySelector(".exit");
const newRound = document.querySelector(".new--round");
const finalMessage = document.querySelector(".computer h1");
const roundWinner = document.querySelector(".roundwinner");
const scoreBoard = document.querySelector(".score");
const bottom = document.querySelector(".bottom");

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
      ".roundwinner"
    ).textContent = `Draw! Both picked ${playerSelection}!`);
    totalScore++;
    computerCurrent = 0;
    playerCurrent = 0;

    return outcome;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    let outcome = (roundWinner.textContent = `Nice! Rock beats scissors!`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    let outcome =
      (roundWinner.textContent = `Well played. Scissors beats paper!`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    let outcome = (roundWinner.textContent = `Woah, paper beats rock!`);
    computerCurrent = 0;
    playerCurrent = 1;
    playerScore++;
    totalScore++;

    return outcome;
  } else {
    let outcome =
      (roundWinner.textContent = `Computer wins with ${computerSelection} vs ${playerSelection}`);
    computerCurrent = 1;
    playerCurrent = 0;
    computerScore++;
    totalScore++;

    return outcome;
  }
}
function roundCount() {
  document.querySelector(".round--number").textContent = `${totalScore + 1}`;
}

function addToPlayerScore() {
  let content = document.createElement("p");
  if (playerCurrent > computerCurrent) {
    content.textContent = `✓`;
    content.style.color = "green";
    playerScoreBoard.appendChild(content);
  } else if (playerCurrent < computerCurrent) {
    content.textContent = `x`;
    content.style.color = "red";
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
    content.style.color = "green";

    computerScoreBoard.appendChild(content);
  } else if (playerCurrent > computerCurrent) {
    content.textContent = `x`;
    content.style.color = "red";
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
function question() {
  computerPaper.classList.add("hidden");
  computerRock.classList.add("hidden");
  computerScissor.classList.add("hidden");
  computerQ.classList.remove("hidden");
}

function modalRemove() {
  modal.classList.remove("hidden");
  blur.classList.remove("hidden");
  scoreBoard.classList.remove("hidden");
  bottom.classList.add("hidden");
}
function computerIsPicking() {
  question();
  swapImg();
  newRound.classList.add("hidden");
  if (totalScore >= 4) {
    finalMessage.textContent = "Last round!";
  } else {
    finalMessage.textContent = "Computer thinking!";
  }

  roundWinner.textContent = "";
}
//Clickables
selectRock.addEventListener("click", () => {
  selection = "Rock";

  modalRemove();
  computerIsPicking();

  setTimeout("game()", 4000);
});
selectPaper.addEventListener("click", () => {
  selection = "Paper";
  modalRemove();
  computerIsPicking();
  setTimeout("game()", 4000);
});
selectScissor.addEventListener("click", () => {
  selection = "Scissor";
  modalRemove();
  computerIsPicking();

  setTimeout("game()", 4000);
});
function closeModal() {
  modal.classList.add("hidden");
  blur.classList.add("hidden");
}
blur.addEventListener("click", closeModal);
exit.addEventListener("click", closeModal);
newRound.addEventListener("click", closeModal);

//Functions to loop thru computer thinking

function swapImg() {
  setTimeout("swapRock()", 500);
  setTimeout("swapScissor()", 1000);
  setTimeout("swapPaper()", 1500);
  setTimeout("swapQ()", 2000);
}
function swapRock() {
  computerQ.classList.add("hidden");
  computerRock.classList.remove("hidden");
}
function swapScissor() {
  computerRock.classList.add("hidden");
  computerScissor.classList.remove("hidden");
}
function swapPaper() {
  computerPaper.classList.remove("hidden");
  computerScissor.classList.add("hidden");
}

function swapQ() {
  computerQ.classList.remove("hidden");
  computerPaper.classList.add("hidden");
}

//Lets play
function game() {
  newRound.classList.remove("hidden");
  finalMessage.textContent = "Computer picks!";
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
  roundCount();
  gameOver();
}
//Game ends
function gameOver() {
  if (totalScore === 5 || playerScore >= 3 || computerScore >= 3) {
    blur.addEventListener("click", newGame);
    exit.addEventListener("click", newGame);
    newRound.addEventListener("click", newGame);
    newRound.textContent = "New game";

    scoreBoard.classList.add("hidden");
    bottom.classList.remove("hidden");
    playerScoreBoard.textContent = "";
    computerScoreBoard.textContent = "";
    roundWinner.textContent = "";
    if (playerScore > computerScore) {
      finalMessage.textContent = `Congrats!`;
      roundWinner.textContent = `You beat the computer with ${playerScore} to ${computerScore}`;
    } else if (playerScore < computerScore) {
      finalMessage.textContent = `You lost`;
      roundWinner.textContent = `Computer beat you with ${computerScore} to ${playerScore}  `;
    } else {
      finalMessage.textContent = `A boring draw`;
      roundWinner.textContent = `The score was ${playerScore} to ${computerScore}`;
    }

    computerPaper.classList.add("hidden");
    computerRock.classList.add("hidden");
    computerScissor.classList.add("hidden");
    totalScore = 0;
    playerScore = 0;
    computerScore = 0;
    playerCurrent = 0;
    computerCurrent = 0;
  }
}

function newGame() {
  newRound.textContent = "New round";

  document.querySelector(".round--number").textContent = `${totalScore + 1}`;
  finalMessage.textContent = "Computer picks!";
}
