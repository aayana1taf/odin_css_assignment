//script.js

//add functionality to buttons
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const resetButton = document.getElementById('reset');
//get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//play a round
function playRound(humanSelection, computerSelection) {
    let result;
    if (humanSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = `You win! ${humanSelection} beats ${computerSelection}`;
        humanScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${humanSelection}`;
        computerScore++;
    }
    resultDiv.textContent = result;
    scoreDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
    if (humanScore === 5) {
        resultDiv.textContent = "Congratulations! You reached 5 points and won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry! The computer reached 5 points and won the game!";
        resetGame();
    }
}

//reset game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Score - You: ${humanScore} Computer: ${computerScore}`;
}

//initialize scores
let humanScore = 0;
let computerScore = 0;

//example round
const humanSelection = 'rock'; //this would be dynamic based on user input
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



resetButton.addEventListener('click', resetGame);
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});