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
// Tests:
console.log(`You picked ${getHumanChoice()}`);
console.log(`Computer's choice is ${getComputerChoice()}`);
