// keep score
let player = 0, computer = 0, victory = 5;

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
        player++;
        display("You win! Scissors beats Paper");
    }
    else if (playerSelection === "Paper" && computerSelection === outcomes.get("Paper")) {
        player++;
        display("You win! Paper beats Rock");
    }
    else if (playerSelection === "Rock" && computerSelection === outcomes.get("Rock")) {
        player++;
        display("You win! Rock beats Scissors");
    }
    else if (computerSelection === "Scissors" && playerSelection === outcomes.get("Scissors")) {
        computer++;
        display("You lose! Scissors beats Paper");
    }
    else if (computerSelection === "Paper" && playerSelection === outcomes.get("Paper")) {
        computer++;
        display("You lose! Paper beats Rock");
    }
    else if (computerSelection === "Rock" && playerSelection === outcomes.get("Rock")) {
        computer++;
        display("You lose! Rock beats Scissors");
    }
    else {
        display("Draw!");
    }
}

function display(message) {
    const results = document.querySelector(".results");
    results.textContent = `${message}`;

    const score = document.querySelector(".score");
    score.textContent = `SCORE: ${player}-${computer}`;
}

function game() {
    const btns = document.querySelectorAll("button");
    const controller = new AbortController();

    for (const btn of btns) {
            btn.addEventListener("click", () => {
            playerSelection = btn.textContent;
            const computerSelection = getComputerChoice();

            playRound(playerSelection, computerSelection);

            if (player === victory || computer === victory) {
                // remove event listener to end the game
                controller.abort();

                const endResults = document.querySelector(".results");
                endResults.textContent = (player > computer) ? "YOU WIN!" : "COMPUTER WINS!";
            }
        }, { signal: controller.signal })
    }
}

game();