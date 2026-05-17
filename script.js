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

 choice=userChoice.toLocaleLowerCase();

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


