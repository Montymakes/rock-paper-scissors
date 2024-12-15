# Eock-Paper-Scissors
## Goal: A game of Rock, Paper, Scissors between the user and the computer.


## Psuedo Code
- [X] Initialize an option array that contains the strings: "Rock", "Paper", and "Scissors".

- [X] Create a function, getComputerChoice, that: 
    - Sets a random index between 0 and the last index of the options array. 
    - Returns the computer's choice as the string located at the random index in the options array.

- [X] Create a function, getHumanChoice that:
    - Initializes an input variable that allows the user to pick a write in their option. 
        - Input must exist in options array.
        - Is case insensitive.
    - Return the match from from the options array.

- [X] Initialize variables for score keeping.
    - Set humanScore to 0.
    - Initialize computerScore to 0.

- [X] Create a function, playRound, that accepts humanChoice and computerChoice as parameters and logs a message to the console that indicates who won and why.
    - If humanChoice is rock and computerChoice is scissors, or humanChoice is scissors and computerChoice is paper, or humanChoice is paper and computerChoice is rock. 
     - Log "You win! humanChoice beats computerChoice." Replace choices with their actual values.
     - Increment humanScore.
    - Else if computerChoice is rock and humanChoice is scissors, or computerChoice is scissors and humanChoice is paper, or computerChoice is paper and humanChoice is rock.
        - Log "You lose! computerChoice beats humanChoice." Replace choices with their actual values.
        - Increment computerScore.
    - Else log "It's a tie!"

- [ ] Write a function, playGame that:
    - Contains  the playRound function and score variables within it.
    - Initalizes a currentRound variable to 1 and a totalRounds variable to 5.
    - While currentRound is less than or equal to totalRounds.
        - Call playRound function.
        - Increment currentRound variable.
    - Log the result of the game.
        - If computerScore is less than humanScore, log "You win the game!"
        - Else if computerScore is more than humanScore, log "You lose! Computer won the game."
        - Else log "It's a tie."







