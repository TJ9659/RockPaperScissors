let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#player-rock");
const paper = document.querySelector("#player-paper");
const scissors = document.querySelector("#player-scissors");
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const container = document.querySelector("#container");
const score = document.querySelector("#result");
const pScore = document.querySelector("#player-score");
const cScore = document.querySelector("#computer-score");
const outcome = document.querySelector("#outcome");
const playAgainButton = document.querySelector("#play-again-button");
const selectEffect = new Audio("./sound-effect/select-effect.wav");
const winEffect = new Audio("./sound-effect/win.wav")
const loseEffect = new Audio("./sound-effect/lose.wav")

const buttons = document.querySelectorAll(".player-selection");


function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  let choice;

  if (computerChoice === 0) {
    choice = "rock";
    computerRock.classList.add("computer-selection-click");
    setTimeout(function(){
      computerRock.classList.remove("computer-selection-click");
    }, 100)
  } else if (computerChoice === 1) {
    choice = "paper";
    computerPaper.classList.add("computer-selection-click");
    setTimeout(function(){
      computerPaper.classList.remove("computer-selection-click");
    }, 100)
  } else if (computerChoice === 2) {
    computerScissors.classList.add("computer-selection-click");
    setTimeout(function(){
      computerScissors.classList.remove("computer-selection-click");
    }, 100)
    choice = "scissors";
  }

  return choice;
}

function playRound(humanChoice) {
  const selections = ["Rock", "Paper", "Scissors"];
  let humanWin = false;
  let computerChoice = getComputerChoice();

  const scoreContainer = document.querySelector("#result-container");

  if (computerChoice === "rock" && humanChoice === "scissors") {
    score.textContent = `You lose! ${selections[0]} beats ${selections[2]}`;
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    score.textContent = `You win! ${selections[0]} beats ${selections[2]}`;
    humanWin = true;
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    score.textContent = `You lose! ${selections[1]} beats ${selections[0]}`;
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    score.textContent = `You win! ${selections[1]} beats ${selections[0]}`;
    humanWin = true;
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    score.textContent = `You lose! ${selections[2]} beats ${selections[1]}`;
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    score.textContent = `You win! ${selections[1]} beats ${selections[0]}`;
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    score.textContent = `You win! ${selections[2]} beats ${selections[1]}`;
    humanWin = true;
    humanScore++;
  } else {
    score.textContent = "You drawed.";
    return null;
  }
  scoreContainer.appendChild(score);

  return humanWin;
}

function playGame() {
  if (humanScore !== 5 && computerScore !== 5) {
    pScore.innerHTML = humanScore;
    cScore.innerHTML = computerScore;
  } else {
    pScore.innerHTML = humanScore;
    cScore.innerHTML = computerScore;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    

    if (humanScore === 5) {
      outcome.textContent = "Player Wins! Man Beats Machine!";
      winEffect.cloneNode().play();
    } else {
      outcome.textContent = "Computer Wins! Beep Boop Beep!";
      loseEffect.cloneNode().play();
    }

    playAgainButton.style.display = "block";

    

    buttons.forEach((button) => {
      button.classList.remove("player-selection-hover");
      button.style.cursor = "default"
    })

    playAgainButton.addEventListener("click", resetGame);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  pScore.innerHTML = humanScore;
  cScore.innerHTML = computerScore;
  

  buttons.forEach((button) => {
    button.classList.add("player-selection-hover");
    button.style.cursor = "pointer";
    button.disabled = false;
  })
  
  playAgainButton.style.display = "none";
  score.textContent = "";
  outcome.textContent = "";
}

function main() {
  rock.addEventListener("click", (e) => {
    selectEffect.cloneNode().play();
    playRound("rock");
    playGame();
  });

  paper.addEventListener("click", (e) => {
    selectEffect.cloneNode().play();
    playRound("paper");
    playGame();
  });

  scissors.addEventListener("click", (e) => {
    selectEffect.cloneNode().play();
    playRound("scissors");
    playGame();
  });
}

main();
