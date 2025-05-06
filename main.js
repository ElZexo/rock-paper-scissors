console.log("This is the first Rock Paper Scissors log")

function getComputerChoice() {
    let moveValue = Math.random();
    console.log(moveValue)
    if (moveValue <= 0.33) {
        return "rock"
    }
    else if (moveValue <= 0.67) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

console.log(getComputerChoice())