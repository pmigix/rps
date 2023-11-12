// keep score
let playerWins = 0, computerWins = 0;

// create key-value pairs ("winner","loser")
const outcomes = new Map();
outcomes.set("scissors", "paper");
outcomes.set("paper", "rock");
outcomes.set("rock", "scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    // return a random number from 0 to 2 (inclusive)
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "scissors" && computerSelection === outcomes.get("scissors")) {
        console.log("You win! Scissors beats Paper");
        playerWins++;
    }
    else if (playerSelection === "paper" && computerSelection === outcomes.get("paper")) {
        console.log("You win! Paper beats Rock");
        playerWins++;
    }
    else if (playerSelection === "rock" && computerSelection === outcomes.get("rock")) {
        console.log("You win! Rock beats Scissors");
        playerWins++;
    }
    else if (computerSelection === "scissors" && playerSelection === outcomes.get("scissors")) {
        console.log("You lose! Scissors beats Paper");
        computerWins++;
    }
    else if (computerSelection === "paper" && playerSelection === outcomes.get("paper")) {
        console.log("You lose! Paper beats Rock");
        computerWins++;
    }
    else if (computerSelection === "rock" && playerSelection === outcomes.get("rock")) {
        console.log("You lose! Rock beats Scissors");
        computerWins++;
    }
    else {
        console.log("Draw!");
    }
}

function game() {
    let playerSelection, computerSelection;

    for (let round = 1; round <= 5; round++) {
        // input validation
        do {
            playerSelection = prompt(`ROUND ${round}: Rock (r), Paper (p), Scissors (s)?`).toLowerCase();
        }
        while (playerSelection != "rock" &&
               playerSelection != "paper" &&
               playerSelection != "scissors" &&
               playerSelection != "r" &&
               playerSelection != "p" &&
               playerSelection != "s");

        playerSelection = (playerSelection === "r") ? "rock" :
                          (playerSelection === "p") ? "paper" :
                          (playerSelection === "s") ? "scissors":
                           playerSelection;

        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    let results = `SCORE: ${playerWins}-${computerWins}`;

    if (playerWins > computerWins) {
        console.log(results+"\nYOU WIN!");
    }
    else if (playerWins < computerWins) {
        console.log(results+"\nCOMPUTER WINS!");
    }
    else {
        console.log(results+"\nDRAW");
    }
}

game();