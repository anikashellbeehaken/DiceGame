console.log("JS file is connected");

console.log("Script is successfully running!");

const dice = document.getElementById("dice");
const targetText = document.getElementById("target");
const totalText = document.getElementById("total");
const gamesText = document.getElementById("games");
const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");


let target = Math.floor(Math.random() * 21) + 10;
let total = 0;
let gamesPlayed = 0;


targetText.innerText = target;
totalText.innerText = total;
gamesText.innerText = gamesPlayed;

dice.addEventListener("click", function () {

  if (total === target) {
    message.innerText = " You already completed this game! Click 'New Game' to play again.";
    return;
  }


  const randomNumber = Math.floor(Math.random() * 6) + 1;

  
  gamesPlayed++;
  gamesText.innerText = gamesPlayed;

  
  if (total + randomNumber > target) {
    message.innerText =
      ` You rolled ${randomNumber}. It exceeds the target, so this roll was skipped.`;
    return;
  }

  
  total += randomNumber;
  totalText.innerText = total;

  
  message.innerText = `You rolled ${randomNumber}.`;

  
  if (total === target) {
    message.innerText =
      " Target successfully fulfilled! Click 'New Game' to play again.";
  }

});


resetBtn.addEventListener("click", function () {


  target = Math.floor(Math.random() * 21) + 10;

  
  total = 0;
  gamesPlayed = 0;

  
  targetText.innerText = target;
  totalText.innerText = total;
  gamesText.innerText = gamesPlayed;

  message.innerText = "New game started! Click the dice to play.";
});


