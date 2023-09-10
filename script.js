function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)+1;

    if (randomNum === 1) {
        return "Rock";
    } else if (randomNum === 2) {
        return "Paper";
    } else if (randomNum === 3) {
        return "Scissors";
    } else {
        return "Not Working";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Youn Win! Paper beats Rock";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beat paper";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lose! Scissors beat paper";
    } else {
        return "It's a Draw! Play again";
    }
}