/*
function game() {
    while (userScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Choose Rock, Paper or Scissors");
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    }
}

function gameWinner() {
    if (userScore > computerScore) {
        alert(`You Won the match!
User: ${userScore} - Computer: ${computerScore} Refresh page to play again`);
    } else if (computerScore > userScore) {
        alert(`You Lost the match!
User: ${userScore} - Computer: ${computerScore} Refresh page to play again`);
    }
}
*/
'use strict';

let playerScore = 0;
let computerScore = 0;
let playing = true;
let player;
let computer;

const btnChoices = document.querySelectorAll('.btn');
const results = document.querySelector('.results');

btnChoices.forEach(button => button.addEventListener('click', function () {
    player = button.textContent;
    computerSelection();
    //console.log(player, computer);
    results.textContent = playRound();
    //console.log(playerScore, computerScore);
}));

const computerSelection = function () {
    const randomNum = Math.trunc(Math.random() * 3)+1;

    if (randomNum === 1) {
        return computer = "🪨 Rock";
    } else if (randomNum === 2) {
        return computer = "📄 Paper";
    } else if (randomNum === 3) {
        return computer = "✂️ Scissors";
    }
}

function playRound() {
    const winStatement = `You Win! ${player} beats ${computer}`;
    const loseStatement = `You Lose! ${computer} beats ${player}`;

    if (player === computer) {
        return "It's a Draw!";
    } else if (player === "🪨 Rock" && computer === "✂️ Scissors") {
        playerScore += 1;
        return winStatement;
    } else if (player === "📄 Paper" && computer === "🪨 Rock") {
        playerScore += 1;
        return winStatement;
    } else if (player === "✂️ Scissors" && computer === "📄 Paper") {
        playerScore += 1;
        return winStatement;
    } else {
        computerScore += 1;
        return loseStatement;
    }
};