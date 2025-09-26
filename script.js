let score = { human: 0, computer: 0 };
function playRound(humanChoice, computerChoice) {
  // your code here!
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        score.human++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        score.computer++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    console.log(`Score - You: ${score.human}, Computer: ${score.computer}`);
}
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let input = prompt("Enter rock, paper, or scissors:").toLowerCase();
  while (!choices.includes(input)) {
    input = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return input;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);