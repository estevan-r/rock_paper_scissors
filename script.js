function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)+1;

    if (randomNum === 1) {
        console.log("Rock!");
    } else if (randomNum === 2) {
        console.log("Paper!");
    } else if (randomNum === 3) {
        console.log("Scissors!");
    } else {
        console.log("Not Working.");
    }
}