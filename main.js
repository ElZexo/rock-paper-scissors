console.log("This is the first Rock Paper Scissors log")

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

function getComputerChoice() {
    let computerMove = 0;
    let moveValue = Math.random();
    if (moveValue <= 0.33) {
        computerMove = "rock";
    }
    else if (moveValue <= 0.67) {
        computerMove = "paper";
    }
    else {
        computerMove = "scissors";
    }
    return computerMove;
}

function getHumanChoice() {
    let userMove = prompt("Choose your move!").toLowerCase()
    if (userMove == "rock" || userMove == "paper" || userMove == "scissors") {
        return userMove;
    }
    else {
        alert("Invalid move, please choose again.");
        getHumanChoice();
    }
}

function playRound (humanChoice, computerChoice) {
    console.log("GAME")
    console.log(humanChoice)
    console.log(computerChoice)
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors.")
    }
    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.")
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.")
    }
    else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.")
    }
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.")
    }
    else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.")
    }
    else console.log("That's a tie!")
}

