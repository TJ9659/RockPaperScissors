let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector('#player-rock');
const paper = document.querySelector('#player-paper');
const scissors = document.querySelector('#player-scissors');
const container = document.querySelector("#container");


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







function playRound(humanChoice){
    const selections = ["Rock", "Paper", "Scissors"];
    let humanWin = false;
    let computerChoice = getComputerChoice();
    const score = document.querySelector("#result")
    const scoreContainer = document.querySelector("#result-container")

    if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You lose! ${selections[0]} beats ${selections[2]}`);
        score.textContent = `You lose! ${selections[0]} beats ${selections[2]}`
        computerScore++;
    }else if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log(`You win! ${selections[0]} beats ${selections[2]}`);
        score.textContent = `You win! ${selections[0]} beats ${selections[2]}`
        humanWin = true;
        humanScore++;
    }else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log(`You lose! ${selections[1]} beats ${selections[0]}`);
        score.textContent = `You lose! ${selections[1]} beats ${selections[0]}`
        computerScore++;

    }else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log(`You win! ${selections[1]} beats ${selections[0]}`);
        score.textContent = `You win! ${selections[1]} beats ${selections[0]}`
        humanWin = true;
        humanScore++;
    }else if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log(`You lose! ${selections[2]} beats ${selections[1]}`);
        score.textContent = `You lose! ${selections[2]} beats ${selections[1]}`
        humanScore++;
    }else if(computerChoice === "rock" && humanChoice === "paper"){
        console.log(`You win! ${selections[1]} beats ${selections[0]}`);
        score.textContent = `You win! ${selections[1]} beats ${selections[0]}`
        computerScore++;
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log(`You win! ${selections[2]} beats ${selections[1]}`);
        score.textContent = `You win! ${selections[2]} beats ${selections[1]}`
        humanWin = true;
        humanScore++;
    }else{
        console.log("You drawed.");
        score.textContent = "You drawed."
        return null;
    }
    scoreContainer.appendChild(score)
    

    return humanWin;

}

function playGame(){
    const pScore = document.querySelector('#player-score');
    const cScore = document.querySelector('#computer-score');
    
    if(humanScore !== 5 && computerScore !== 5){
        pScore.innerHTML = humanScore
        cScore.innerHTML = computerScore
    }else{
        pScore.innerHTML = humanScore
        cScore.innerHTML = computerScore
        rock.setAttribute("disabled", 1)
        paper.setAttribute("disabled", 1)
        scissors.setAttribute("disabled", 1)
        
        const outcome = document.querySelector("#outcome");
        
        if(humanScore === 5){
            outcome.textContent = "Player Wins! Man Beats Machine!"
        }else{
            outcome.textContent = "Computer Wins! Beep Boop Beep!"
        }

        playAgain.setAttribute("opacity: 100")

        

       
    }
    
    

    
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;

    rock.setAttribute("enabled", 1)
    paper.setAttribute("enabled", 1)
    scissors.setAttribute("enabled", 1)
}

function main(){
    
    

    rock.addEventListener("click", (e) => {
        playRound("rock")
        playGame();
    })

    paper.addEventListener("click", (e) => {
        playRound("paper")
        playGame();
    })

    scissors.addEventListener("click", (e) => {
        playRound("scissors")
        playGame();
    })


    

}

main();



