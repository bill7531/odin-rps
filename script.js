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
    let event = new CustomEvent("computer", {
        detail:{
            computer: result
        }
    })
    computer.dispatchEvent(event)
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

let round = 0
let humanScore = 0;
let computerScore = 0;

const menu = document.querySelector("#menu")
const footer = document.querySelector("#result")
const computer = document.querySelector("#computer")

menu.addEventListener("click", (event)=>{
    let target = event.target
    if (target.tagName !== "BUTTON") {
        return
    }
    //console.log(event)
    let result = playRound(target.id, getComputerChoice())
    let score = new CustomEvent('score', {
        detail: {
            
            whoWin: result
        }
    })
    footer.dispatchEvent(score)
    
})

footer.addEventListener("score", function(e){
    if (e.detail.whoWin == "computer") computerScore+=1
    else if (e.detail.whoWin =="human") humanScore+=1
    round +=1
    footer.textContent = `Rounds: ${round} Human: ${humanScore} Computer: ${computerScore}`
})

computer.addEventListener("computer", function(e){
    let result = e.detail.computer.toUpperCase()
    computer.textContent = `Computer: ${result}`
    console.log(e.detail.computer)
})
