let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)+1;

    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

function playRound(user, computer) {
    const winStatement = `You Win! ${user} beats ${computer}`;

    if (user.toLowerCase() === computer) {
        return "It's a Draw!";
    } else if (user.toLowerCase() === "rock" && computer === "scissors") {
        userScore += 1;
        return winStatement;
    } else if (user.toLowerCase() === "paper" && computer === "rock") {
        userScore += 1;
        return winStatement;
    } else if (user.toLowerCase() === "scissors" && computer === "paper") {
        userScore += 1;
        return winStatement;
    } else {
        computerScore += 1;
        return `You Lose! ${computer} beats ${user}`;
    }
}

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
User: ${userScore} - Computer: ${computerScore}

Refresh page to play again`);
    } else if (computerScore > userScore) {
        alert(`You Lost the match!
User: ${userScore} - Computer: ${computerScore}

Refresh page to play again`);
    }
}

game();
gameWinner();