let userOption = prompt("Write your option: rock, paper or scissors.")

const pcOption = getComputerChoice()
alert("Option by PC: " + pcOption)

switch(userOption){
    case "rock":
        if(pcOption == "rock"){
            alert("TIE")
            break
        } else if(pcOption == "paper") {
            alert("YOU LOSE")
            break
        } else {
            alert("YOU WIN")
            break
        }
    case "paper":
        if(pcOption == "rock"){
            alert("YOU WIN")
            break
        } else if(pcOption == "paper") {
            alert("TIE")
            break
        } else {
            alert("YOU LOSE")
            break
        }
    case "scissors":
        if(pcOption == "rock"){
            alert("YOU LOSE")
            break
        } else if(pcOption == "paper") {
            alert("YOU WIN")
            break
        } else {
            alert("TIE")
            break
        }
    default: 
        alert("Incorrect word! Write again") 
        break
}

// 0 - rock; 1 - paper; 2 - scissors
function getComputerChoice() {
    let option = Math.floor(Math.random()*3)
    if(option < 2){
        if(option < 1){
            return "rock"
        } else {
            return "paper"
        }
    } else {
        return "scissors"
    }
}