function getComputerChoice(){
    const computerChoice = (Math.floor(Math.random() * 3));
    let choice;

    if(computerChoice === 0){
        choice = "rock";
    }else if(computerChoice === 1){
        choice = "paper";
    }else if(computerChoice === 2){
        choice = "scissors"
    }

    return choice;
}

function getHumanChoice(){
    let humanChoice = Number(prompt("PLEASE SELECT \n 1. ROCK \n 2. PAPER \n 3. SCISSORS"));
    let choice;

    while(humanChoice !== 1 && humanChoice !== 2 && humanChoice !== 3){
        humanChoice = Number(prompt("INVALID, PLEASE SELECT \n 1. ROCK \n 2. PAPER \n 3. SCISSORS"));
    }

    if(humanChoice === 1){
        choice = "rock"
    }else if (humanChoice === 2){
        choice = "paper"
    }else if (humanChoice === 3){
        choice = "scissors"
    }
    

    return choice;
}





function playRound(humanChoice, computerChoice){
    const selections = ["Rock", "Paper", "Scissors"];
    let humanWin = false;

    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You lose! ${selections[0]} beats ${selections[2]}`);
    }else if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log(`You win! ${selections[0]} beats ${selections[2]}`);
        humanWin = true;
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log(`You lose! ${selections[1]} beats ${selections[0]}`);
    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You win! ${selections[1]} beats ${selections[0]}`);
        humanWin = true;
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log(`You lose! ${selections[2]} beats ${selections[1]}`);
    }else if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log(`You win! ${selections[2]} beats ${selections[1]}`);
        humanWin = true;
    }else{
        console.log("You drawed.");
        return null;
    }

    return humanWin;

}





function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let humanWin = playRound(humanSelection, computerSelection)

        if(humanWin){
            humanScore++;
        }else if(humanWin === false){
            computerScore++;
        }

        console.log(`Current Computer Score: ${computerScore}`)
        console.log(`Current Human Score: ${humanScore}`)
        

        if(humanScore > computerScore){
            console.log("Human Wins!");
        }else if(computerScore > humanScore){
            console.log("Computer Wins!");
        }else{
            console.log("Draw!");
        }
    }
}

playGame();