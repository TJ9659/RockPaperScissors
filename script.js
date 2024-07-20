function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);
    if(choice === 1){
        return "ROCK";
    }else if(choice === 2){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}


function getHumanChoice(){
    let select = prompt("Rock, Paper, Scissors! Which do you choose?\n1. Rock\n2. Paper\n3. Scissors");
    return select.toUpperCase();
}




let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
         return "tie";
    }else if(humanChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        return "player";
    }else if(humanChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        return "player";
    }else if(humanChoice === 'PAPER' && computerChoice === 'ROCK'){
        return "player";
    }else if(computerChoice === 'ROCK' && humanChoice === 'SCISSORS'){
       return "computer";
    }else if(computerChoice === 'SCISSORS' && humanChoice === 'PAPER'){
        return "computer";
    }else if(computerChoice === 'PAPER' && humanChoice === 'ROCK'){
        return "computer";
    }else{
        return "invalid";
    }
}


function playGame(){
    for(let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);

        if(winner.toUpperCase() === "PLAYER"){
            console.log("You win!, " + humanSelection.toLowerCase() + " beats " + computerSelection.toLowerCase());
            humanScore++;
        }else if(winner.toUpperCase() === "COMPUTER"){
            console.log("You lose!, " + computerSelection.toLowerCase() + " beats " + humanSelection.toLowerCase());
            computerScore++;
        }else if(winner === "INVALID"){
            console.log("Invalid input");
        }else{
            console.log("You both Tied");
            tieCount++;
        }
        console.log("Current Player Score: " + humanScore);
        console.log("Current Computer Score: " + computerScore);
    }
}

playGame();


console.log("Player Score: " + humanScore);
console.log("Computer Score: " + computerScore);


