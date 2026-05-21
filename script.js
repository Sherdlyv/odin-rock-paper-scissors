function getComputerChoice(){
      let choice =Math.floor(Math.random()*3);

      if (choice===0){
return "rock";
      }
      else if(choice===1){
        return "paper";
      }
    else{
        return "scissors";
    }
}

// console.log(getComputerChoice());


function getHumanChoice(){

let userChoice=prompt("rock, paper or scissors?");

 choice=userChoice.toLowerCase();

    if (choice==="rock"){
        return "rock";
    }
    else if(choice==="paper"){
      return "paper";
    }
    else{
        return "scissors";
    }
    
}
// console.log(getHumanChoice());


function playRound(humanChoice, computerChoice){

     console.log("Joueur:", humanChoice, " | Ordinateur:", computerChoice);

    if(humanChoice === computerChoice){
        return "We chose the same";
    }
   
    if(
        (humanChoice ==="rock" && computerChoice==="paper") || 
        (humanChoice === "scissors" && computerChoice==="rock") ||
        (humanChoice === "paper" && computerChoice === "scissors")
    ) {
       computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
       
    }
    
else{
    humanScore++;
        return "You win";
}

}


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));

