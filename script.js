function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)+1;

    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    } else {
        return "Not Working";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(user, computer) {
    if (user.toLowerCase() === "rock" && computer === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (computer === "rock" && user.toLowerCase() === "scissors") {
        return "You Lose! Rock beats Scissors"
    } else if (user.toLowerCase() === "paper" && computer === "rock") {
        return "Youn Win! Paper beats Rock";
    } else if (computer === "paper" && user.toLowerCase() === "rock") {
        return "You Lose! Paper beats Rock";
    } else if (user.toLowerCase() === "scissors" && computer === "paper") {
        return "You Win! Scissors beat paper";
    } else if (computer === "scissors" && user.toLowerCase() === "paper") {
        return "You Lose! Scissors beat paper";
    } else {
        return "It's a Draw! Play again";
    }
}

const playGame = playRound(playerSelection, computerSelection);

console.log(computerSelection);
console.log(playGame);