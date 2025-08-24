let played = 0;
let won = 0;
let lost = 0;

let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

const gamesWon = document.getElementById("games-won");
const gamesPlayed = document.getElementById("games-played");
const gamesLost = document.getElementById("games-lost");

gamesPlayed.textContent = played.toString();
gamesWon.textContent = won.toString();
gamesLost.textContent = lost.toString();

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
            won++;
        } else if (humanScore < computerScore) {
            alert("Sorry! You lost the game.");
            lost++;
        } else {
            alert("It's a tie game!");
            won++;
            lost++;
        }
        played++;
        updateUISpecs();
    }
}

function updateUISpecs() {
    gamesPlayed.textContent = played.toString();
    gamesWon.textContent = won.toString();
    gamesLost.textContent = lost.toString();
    resetGame();
}

function restartGame() {
    played = 0;
    won = 0;
    lost = 0;
    gamesPlayed.textContent = played.toString();
    gamesWon.textContent = won.toString();
    gamesLost.textContent = lost.toString();
}
