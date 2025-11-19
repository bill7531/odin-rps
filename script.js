function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let result
    if (choice == 1){
        result = "rock";
    }

    else if (choice == 2){
        result = "paper";
    }
        
    else {
        result = "scissors";
    
    }
    console.log(`computer: ${result}`);
    return result;
}

function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors?");
    choice = choice.toLowerCase();
    console.log(`human: ${choice}`);
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock"){
        if (computerChoice=="rock")
        {
            console.log("tie");
            return "tie";
        }
        else if (computerChoice=="paper")
        {
            console.log("computer wins");
            return "computer";
        }
        else{
            console.log("human wins");
            return "human";
        }
    }
    else if(humanChoice=="paper"){
        if (computerChoice=="rock"){
            console.log("human wins");
            return "human";
        }
        else if (computerChoice=="paper"){
            console.log("tie");
            return "tie";
        }
        else{
            console.log("computer wins");
            return "computer";
        }
    }
    else if(humanChoice == "scissors"){
        if (computerChoice=="rock"){
            console.log("computer wins");
            return "computer";
        }
        else if (computerChoice=="paper"){
            console.log("human wins");
            return "human";
        }
        else{
            console.log("tie");
            return "tie";
        }
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let result = playRound(getHumanChoice(), getComputerChoice())
        if (result == "human"){
            humanScore++;
        }
        else if (result == "computer"){
            computerScore++;
        }
        else{
            continue;
        }
    }
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
}

playGame();


