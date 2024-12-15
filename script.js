const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getHumanChoice() {
    const humanInput= prompt("Type in your choice of Rock, Paper, or Scissors:");
    const pattern = /[^a-zA-z]/g
    const cleanInput = humanInput.replace(pattern, "").toLowerCase();
    for (option of options) {
        if (cleanInput === option.toLowerCase()) return option;
    }
    alert('Please type a valid option!')
    
    return getHumanChoice();
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock" )
    || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else if ((computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock" )
    || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
    else {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    }
}

// Tests:
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(`You picked ${humanChoice}`);
console.log(`Computer's choice is ${computerChoice}`);
playRound(humanChoice, computerChoice);
console.log(`Your score is: ${humanScore}`);
console.log(`Computer's score is: ${computerScore}`);