let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let userChoice;
    do {
        userChoice = prompt(`Enter your choice (${choices.join(', ')}):`).toLowerCase();
    } while (!choices.includes(userChoice));
    return userChoice;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice();

    if (userChoice === computerChoice) {
        alert(`It's a tie! Both chose ${userChoice}.`);
        humanScore++;
        computerScore++;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert(`You win! ${userChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        alert(`You lose! ${computerChoice} beats ${userChoice}.`);
        computerScore++;
    }

    roundCount++;
    launchGame();
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 1;
}

function launchGame() {
    if(roundCount <= 5) {
        playRound()
    } else {
        if (humanScore > computerScore) {
            alert("Congratulations! You won the game!");
        } else if (humanScore < computerScore) {
            alert("Sorry! You lost the game.");
        } else {
            alert("It's a tie game!");
        }
        resetGame();
    }
}

launchGame();