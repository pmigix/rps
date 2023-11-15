// keep score
let playerWins = 0, computerWins = 0;

// create key-value pairs ("winner","loser")
const outcomes = new Map();
outcomes.set("Scissors", "Paper");
outcomes.set("Paper", "Rock");
outcomes.set("Rock", "Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    // return a random number from 0 to 2 (inclusive)
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Scissors" && computerSelection === outcomes.get("Scissors")) {
        console.log("You win! Scissors beats Paper");
        playerWins++;
    }
    else if (playerSelection === "Paper" && computerSelection === outcomes.get("Paper")) {
        console.log("You win! Paper beats Rock");
        playerWins++;
    }
    else if (playerSelection === "Rock" && computerSelection === outcomes.get("Rock")) {
        console.log("You win! Rock beats Scissors");
        playerWins++;
    }
    else if (computerSelection === "Scissors" && playerSelection === outcomes.get("Scissors")) {
        console.log("You lose! Scissors beats Paper");
        computerWins++;
    }
    else if (computerSelection === "Paper" && playerSelection === outcomes.get("Paper")) {
        console.log("You lose! Paper beats Rock");
        computerWins++;
    }
    else if (computerSelection === "Rock" && playerSelection === outcomes.get("Rock")) {
        console.log("You lose! Rock beats Scissors");
        computerWins++;
    }
    else {
        console.log("Draw!");
    }
}

function game() {

    const btns = document.querySelectorAll("button");

    for (const btn of btns) {
        btn.addEventListener("click", () => {
            playerSelection = btn.textContent;
            console.log(playerSelection);
            const computerSelection = getComputerChoice();
            console.log(computerSelection);
            playRound(playerSelection, computerSelection);
        })
    }

    // let results = `SCORE: ${playerWins}-${computerWins}`;

    // if (playerWins > computerWins) {
    //     console.log(results+"\nYOU WIN!");
    // }
    // else if (playerWins < computerWins) {
    //     console.log(results+"\nCOMPUTER WINS!");
    // }
    // else {
    //     console.log(results+"\nDRAW");
    // }
}

game();