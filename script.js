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
    const rock = document.querySelector('#player-rock');
    const paper = document.querySelector('#player-paper');
    const scissors = document.querySelector('#player-scissors');
    let humanChoice;

    rock.addEventListener("click", (e) => {
        playRound("rock")
    })

    paper.addEventListener("click", (e) => {
        playRound("paper")
    })

    scissors.addEventListener("click", (e) => {
        playRound("scissors")
    })

}





function playRound(humanChoice){
    const selections = ["Rock", "Paper", "Scissors"];
    let humanWin = false;
    let computerChoice = getComputerChoice();
    const score = document.querySelector("#result")
    const scoreContainer = document.querySelector("#result-container")

    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You lose! ${selections[0]} beats ${selections[2]}`);
        score.textContent = `You lose! ${selections[0]} beats ${selections[2]}`
    }else if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log(`You win! ${selections[0]} beats ${selections[2]}`);
        score.textContent = `You win! ${selections[0]} beats ${selections[2]}`
        humanWin = true;
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log(`You lose! ${selections[1]} beats ${selections[0]}`);
        score.textContent = `You lose! ${selections[1]} beats ${selections[0]}`
    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You win! ${selections[1]} beats ${selections[0]}`);
        score.textContent = `You win! ${selections[1]} beats ${selections[0]}`
        humanWin = true;
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log(`You lose! ${selections[2]} beats ${selections[1]}`);
        score.textContent = `You lose! ${selections[2]} beats ${selections[1]}`
    }else if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log(`You win! ${selections[2]} beats ${selections[1]}`);
        score.textContent = `You win! ${selections[2]} beats ${selections[1]}`
        humanWin = true;
    }else{
        console.log("You drawed.");
        score.textContent = "You drawed."
        return null;
    }
    scoreContainer.appendChild(score)
    

    return humanWin;

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
}

/*
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    

    for(let i = 0; i < 5; i++){

        while(humanScore < 5 && computerScore < 5){
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
    }
        

        
    }

    if(humanScore > computerScore){
        console.log("Human Wins!");
    }else if(computerScore > humanScore){
        console.log("Computer Wins!");
    }else{
        console.log("Draw!");
    }
}

*/

getHumanChoice()


