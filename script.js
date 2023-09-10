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

function playRound(user, computer) {
    if (user === "Rock" && computer === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (computer === "Rock" && user === "Scissors") {
        return "You Lose! Rock beats Scissors"
    } else if (user === "Paper" && computer === "Rock") {
        return "Youn Win! Paper beats Rock";
    } else if (computer === "Paper" && user === "Rock") {
        return "You Lose! Paper beats Rock";
    } else if (user === "Scissors" && computer === "Paper") {
        return "You Win! Scissors beat paper";
    } else if (computer === "Scissors" && user === "Paper") {
        return "You Lose! Scissors beat paper";
    } else {
        return "It's a Draw! Play again";
    }
}

const playGame = playRound(playerSelection, computerSelection);

console.log(computerSelection);
console.log(playGame);