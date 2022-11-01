let userWins = 0;
let computerWins = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");
const result = document.getElementById("result");
const userImg = document.getElementById("userImg");
const cpImg = document.getElementById("cpImg");
const start = document.getElementById("start");
const userText = document.getElementById("userText");
const computerText = document.getElementById("computerText");

start.addEventListener("click", ()=>{
    startGame();
});

rock.addEventListener("click", ()=>{
    play("rock");
});

paper.addEventListener("click", ()=>{
    play("paper");
});

scissor.addEventListener("click", ()=>{
    play("scissors");
});

function startGame(){
    userWins = 0;
    computerWins = 0;

    start.style.visibility='hidden';
    rock.style.visibility='visible';
    paper.style.visibility='visible';
    scissor.style.visibility='visible';

    userText.innerHTML = "Welcome!";
    userText.innerHTML = "User: " + userWins;
    computerText.innerHTML = "Computer: " + computerWins;
}



function roundResult(pcOption, userOption){
    let pc = false;
    let user = false;

    switch(userOption){
        case "rock":
            if(pcOption == "rock"){
                result.innerHTML = "TIE";
                break
            } else if(pcOption == "paper") {
                pc = true;
                break
            } else {
                user = true;
                break
            }
        case "paper":
            if(pcOption == "rock"){
                user = true;
                break
            } else if(pcOption == "paper") {
                result.innerHTML = "TIE";
                break
            } else {
                pc = true;
                break
            }
        case "scissors":
            if(pcOption == "rock"){
                pc = true;
                break
            } else if(pcOption == "paper") {
                user = true;
                break
            } else {
                result.innerHTML = "TIE";
                break
            }
    }

    if(pc){
        computerWins++;
        result.innerHTML = "You loose";
        computerText.innerHTML = "Computer: " + computerWins; 
    }

    else if(user){
        userWins++;
        result.innerHTML = "You win";
        userText.innerHTML = "User: " + userWins;
    }
}



function play(userOption){
    
    pcOption = getComputerChoice();
     
    switch(userOption){
        case "rock":
            userImg.src = "images/rock.png";
        break;

        case "paper":
            userImg.src = "images/paper.png";
        break;

        case "scissors":
            userImg.src = "images/scissors.png";
        break;
    }

    switch(pcOption){
        case "rock":
            cpImg.src = "images/rock.png";
        break;

        case "paper":
            cpImg.src = "images/paper.png";
        break;

        case "scissors":
            cpImg.src = "images/scissors.png";
        break;
    }

    if(userWins < 3 && computerWins < 3){
        roundResult(pcOption,userOption);
    }else{
        if(userWins == 3)
            result.innerHTML = "Winner: User";
        else
            result.innerHTML = "Winner: Computer";

        start.style.visibility ='visible';
        rock.style.visibility ='hidden';
        paper.style.visibility ='hidden';
        scissor.style.visibility ='hidden';
    }
    
}


// 0 - rock; 1 - paper; 2 - scissors
function getComputerChoice() {
    let option = Math.floor(Math.random()*3);
    if(option < 2){
        if(option < 1){
            return "rock";
        } else {
            return "paper";
        }
    } else {
        return "scissors";
    }
}