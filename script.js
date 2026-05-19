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

console.log(getComputerChoice());


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
console.log(getHumanChoice());


let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
   
    if(humanChoice ==="rock" && computerChoice==="paper"){
       computerScore++;
        return "You lose! Paper beats Rock";
       
    }
    
else{
    humanScore++;
        return "You win";
}

}

setTimeout(() => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
}, 1000);