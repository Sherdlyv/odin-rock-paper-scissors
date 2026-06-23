let humanScore = 0;
let computerScore = 0; 

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    return "scissors";
}

function playGame(){
       
    function playRound(humanChoice, computerChoice){
        console.log("Gamer:", humanChoice, " | Computer:", computerChoice);

        if(humanChoice === computerChoice){
            return "We chose the same";
        }
       
        if(
            (humanChoice === "rock" && computerChoice === "paper") || 
            (humanChoice === "scissors" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "scissors")
        ) {
            computerScore++;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            humanScore++;
            return "You win";
        }
    }

    function getHumanChoice(){
        const rockButton = document.querySelector("#rock");
        const resultat = document.querySelector(".result");

        rockButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const result = playRound("rock", computerSelection);
            resultat.textContent = `${result} | Human: ${humanScore} | Computer: ${computerScore}`;
            endGame(result); 
        });

        const paperButton = document.querySelector("#paper");
        paperButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const result = playRound("paper", computerSelection);
            resultat.textContent = `${result} | Human: ${humanScore} | Computer: ${computerScore}`;
            endGame(result);
        });

        const scissorsButton = document.querySelector("#scissors");
        scissorsButton.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            const result = playRound("scissors", computerSelection);
            resultat.textContent = `${result} | Human: ${humanScore} | Computer: ${computerScore}`;
            endGame(result);
        });
    }

    getHumanChoice();

    function endGame(resultPhrase){
        const resultat = document.querySelector(".result");
        
        if(humanScore === 5){
            resultat.textContent = `${resultPhrase} | Human: ${humanScore} | Computer: ${computerScore} -> YOU WIN THE GAME! `;
            desabledButton();
            resetGame(); 
        }
        else if(computerScore === 5){
            resultat.textContent = `${resultPhrase} | Human: ${humanScore} | Computer: ${computerScore} -> COMPUTER WINS THE GAME! `;
            desabledButton();
            resetGame(); 
        }
    }

    function desabledButton() {
        const boutons = document.querySelectorAll("button");
        boutons.forEach(bouton => {
            bouton.disabled = true;
        });
    }
}

function resetGame() {
    
    const play = document.querySelector(".play");
    
    
    if (document.querySelector("#reset-btn")) return;

    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Play Again ";
    

    resetBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        
        const resultat = document.querySelector(".result");
        resultat.textContent = "Start Playing";
        
        const boutons = document.querySelectorAll("button");
        boutons.forEach(bouton => {
            bouton.disabled = false;
        });
        
        resetBtn.remove(); 
    });

    play.appendChild(resetBtn);
}

playGame();
