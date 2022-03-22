"use strict:";
//The computer chooses randomly rock, paper or scissor.
function computerPlay() {
  const computerChoiceList = ["Rock", "Paper", "Scissor"];
  let computerChoice = [Math.floor(Math.random() * computerChoiceList.length)];
  console.log(computerChoiceList[computerChoice]);
  return computerChoiceList[computerChoice];
  // return computerFinal;
}
