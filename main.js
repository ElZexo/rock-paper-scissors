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

function getHumanChoice() {
    let userMove = prompt("Choose your move!").toLowerCase()
    if (userMove == "rock" || userMove == "paper" || userMove == "scissors") {
        return userMove
    }
    else {
        console.log("Invalid move, please choose again.")
        getHumanChoice()
    }
}

getHumanChoice()

console.log(getComputerChoice())