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

let userScore = 0;
let computerScore = 0;

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const playGame = playRound(playerSelection, computerSelection);

console.log(computerSelection, computerScore, userScore);
console.log(playGame);

//for (let i = 0; i < 5; i++) {}