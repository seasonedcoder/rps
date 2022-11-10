
let computer =0;
let player = 0;
let result = "";
let winner = [];
// disabling the buttons
function disablebtn(){
    btn.forEach(element => {
        btn.addEventListener('click', () =>{
            element.disabled = true;
        })
    })
}
 

function getComputerChoice(){
    let rchoice = getRandomValue();
    if(rchoice == 1){
        return "rock";
    }else if(rchoice == 2){
        return "paper";
    }
    else {
        return "scissor"
    }
}


function getRandomValue(){
    return Math.floor(Math.random() * 3);
}
// ui elememts
const buttons = document.querySelectorAll("[data-choice]");
const pscore = document.querySelector('.pscore');
const cscore = document.querySelector('.cscore');
const declare = document.querySelector('.declare');


buttons.forEach(button => {
    button.addEventListener("click", function(){
        playerSelection = this.value;
        playRound(playerSelection);
    })
})


function playRound(playerSelection){
   
    let pchoice = playerSelection;
    let cchoice = getComputerChoice();


   let wins= checkwinner(pchoice,cchoice);
   winner.push(wins);   
}


function checkwinner(pchoice,cchoice){
    if( pchoice === cchoice){
        declare.textContent="It's a tie";
    }
    
    else if((pchoice=== "rock" && cchoice === 'paper') || (pchoice === 'paper' && cchoice === 'scissor')||
    (pchoice === 'scissor' && cchoice === "rock")){
        computer++;
        cscore.textContent=`${computer}`;
        declare.textContent = `you lose! ${cchoice} beats ${pchoice}`;
        return "computer"

    }
    
    else if((pchoice === 'rock' && cchoice === 'scissor') || (pchoice === "paper" && cchoice === "rock") || (pchoice === "scissor" && cchoice === "paper")){
        player++;
        pscore.textContent=`${player}`;
        declare.textContent = `you win! ${cchoice} beats ${pchoice}`
        return "player"
      
    }
    
}

