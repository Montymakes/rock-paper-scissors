const options = ["Rock", "Paper", "Scissors"];
const results = document.querySelector("#result");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const humanChoice = document.querySelectorAll("button");


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function restartGame() {
    results.textContent = "";
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    humanChoice.forEach(node => {
        node.addEventListener("click", playGame);
        node.removeEventListener("click", restartGame)
        node.textContent = node.id;
    });
}

function gameOver(humanScore, computerScore) {
    results.textContent = "";

    if(humanScore > computerScore) {
        results.textContent = `You win! You beat the computer by ${humanScore-computerScore} points.`;
    }
    else {
        results.textContent = `You lose! The computer bested you by ${computerScore-humanScore} points.`;

    }
  
    humanChoice.forEach(node => {
        node.removeEventListener("click", playGame);
        node.addEventListener("click", restartGame)
        node.textContent = "PLAY AGAIN?";
    });

}

function playGame(event) { 
    let humanScore = parseInt(humanScoreDisplay.innerText);
    const humanChoice = event.target.id;
    let computerScore = parseInt(computerScoreDisplay.innerText);
    const computerChoice = getComputerChoice();

    results.textContent = "";

    if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock" )
    || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        results.innerText += `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        humanScoreDisplay.innerText = humanScore.toString();

        if (humanScore === 5) {
            gameOver(humanScore, computerScore);
        }
    }
    else if ((computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock" )
    || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        results.innerText += `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computerScoreDisplay.innerText = computerScore.toString();

        if (computerScore === 5) {
            gameOver(humanScore, computerScore);
        }
    }
    else {
        results.innerText += `It's a tie! You both chose ${humanChoice}. \n`;
    }
}

humanChoice.forEach(node => node.addEventListener("click", playGame));
