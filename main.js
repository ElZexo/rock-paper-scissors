console.log("This is the first Rock Paper Scissors log")

let playerWins;
//let humanSelection = getHumanChoice();
//let computerSelection = getComputerChoice();

playGame()

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
    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + computerChoice)
    if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors.");
        playerWins = true;
    }
    else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        playerWins = true;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");
        playerWins = true;
    }
    else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        playerWins = false;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper.");
        playerWins = false;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors.");
        playerWins = false;
    }
    else {
        console.log("That's a tie!")
        playerWins = undefined;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (i=1; i<=5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        if( playerWins == true) {
            humanScore++;
        }
        else if (playerWins == false) {
            computerScore++;
        }
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if(humanScore > computerScore) {
        console.info("The human player wins!")
    }
    else if(humanScore < computerScore) {
        console.info("The computer wins!")
    }
    else console.info("The players tie.")
}   

