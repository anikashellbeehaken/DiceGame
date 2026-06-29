console.log("Script is succcessfully running!");

const dice = document.getElementById("dice"); 
const targetText = document.getElementById("target"); 
const totalText = document.getElementById("total");
const gamesText = document.getElementById("games"); 
const message = document.getElementById("message"); 
const resetBtn = document.getElementById("resetBtn"); 

let target = 20; 
let total = 0; 
let gamesPlayed = 0;  
dice.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1; 

  if (total + randomNumber > target) {
    message.innerText = `You rolled ${randomNumber}. Will exceed the target.`;
    return;
  }

  total = total + randomNumber;
  totalText.innerText = total;

  message.innerText = `You rolled ${randomNumber}.`;

  if (total === target) {
    gamesPlayed++;
    gamesText.innerText = gamesPlayed;

    message.innerText = "Target Successfully fulfilled! New game started.";

    total = 0;
    totalText.innerText = total;
  }
}); 

resetBtn.addEventListener("click", function () {
  total = 0;
  gamesPlayed = 0;
  

  totalText.innerText = total;
  gamesText.innerText = gamesPlayed;
  message.innerText = "Game reset! Click the dice to play.";
});



