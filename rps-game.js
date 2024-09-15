const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const compRockEl = document.getElementById('computerRock');
const compPaperEl = document.getElementById('computerPaper');
const compScissorsEl = document.getElementById('computerScissors')

const winnerText = document.getElementById('winnerText');

let i = 0;
let j = 0;

playGame = function(clicked) {
  compRockEl.style.cssText = "background-color: black; color: white; border-color: white;"
  compPaperEl.style.cssText = "background-color: black; color: white; border-color: white;"
  compScissorsEl.style.cssText = "background-color: black; color: white; border-color: white;"

  let userChoice = clicked;
  
  let randomNumber = Math.floor(Math.random() * 3);

  let computerChoice;
  if (randomNumber === 0) {
    computerChoice = 'rockBtn';
  } else if (randomNumber === 1) {
    computerChoice = 'paperBtn';
  } else computerChoice = 'scissorsBtn';

  switch(computerChoice) {
    case 'rockBtn': compRockEl.style.cssText = "background-color: white; color: black; border-color: black;"
    break;

    case 'paperBtn': compPaperEl.style.cssText = "background-color: white; color: black; border-color: black;"
    break;

    case 'scissorsBtn': compScissorsEl.style.cssText = "background-color: white; color: black; border-color: black;"
    break;
  }
  
  if (userChoice === computerChoice) {
    return winnerText.textContent = "Draw!";
  }
  
  if (userChoice === 'rockBtn') {
    if (computerChoice === 'paperBtn') {
      j++;
      computerScore.textContent = j;
      return winnerText.textContent = "Computer Wins!";
    } else {
      i++;
      playerScore.textContent = i;
      return winnerText.textContent = 'You Win!';
    }
  }
  
  if (userChoice === 'paperBtn') {
    if (computerChoice === 'scissorsBtn') {
      j++;
      computerScore.textContent = j;
      return winnerText.textContent = 'Computer Wins!';
    } else {
      i++;
      playerScore.textContent = i;
      return winnerText.textContent = 'You Win!';
    }
  }

  if (userChoice === 'scissorsBtn') {
    if (computerChoice === 'rockBtn') {
      j++;
      computerScore.textContent = j;
      return winnerText.textContent = 'Computer Wins!';
    } else {
      i++;
      playerScore.textContent = i;
      return winnerText.textContent = 'You Win!';
    }
  }

  
}

