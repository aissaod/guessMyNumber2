'use strict';
//console.log(guess);
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

console.log(secretNumber);
//edge case-> if user entered nothing
// exclamation means negation
//exclamation makes true to false
//exclamation makes false to true
//guess has null value->guess will be true
//LOGIC
function displayMessage(msg){
  document.querySelector('.message').textContent = msg;
}
//1 i need to select check button -> document.query('.check')
//2. i need to play the game when it is clicked 
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.score').textContent=20;
  document.querySelector('.highscore').textContent=0;
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
    displayMessage('Start playing');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;

  if(guess < 1 || guess > 20)
  {
    displayMessage('nombre invalide');
  }
  else if(guess == secretNumber) 
  {
    displayMessage('vous avez perdu CHEH!');
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = '#34CC17';

      if(score > highscore) 
      {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  } 
  else if (guess !== secretNumber)
  {
      if(score > 1)
      {
       displayMessage(guess > secretNumber ? 'Trop élevé!' : 'Trop bas!');
       score--;
       document.querySelector('.score').textContent = score;
      }
      else 
      {
       displayMessage('Vous avez perdu!');
       document.querySelector('.score').textContent=0;
      }
  }
});

//LOGIC 3 - CHECK FOR SCORE HIGHSCORE
// i want my score to decrease if my number is wrong
//
// LOGIC 4 -  DISPLAY RELEVANT MSGS




