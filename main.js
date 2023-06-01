let playgame = confirm("shall we play rock,paper,scissor?");
if(playgame){
    let playerchoice=prompt("please enter rock,paper,scissor");
    if(playerchoice){
        let playerone=playerchoice.trim().toLowerCase();
        if( playerone === "rock" || playerone === "paper" || playerone === "scissor"  ){
           let computerchoice = Math.floor(Math.random() * 3+1);
           
           let computer = computerchoice === 1 ? "rock" : computerchoice === 2 ? "paper" : "scissor";
           let result =
          playerone === computer? "tie game!" :

           playerone === "rock" && computer === "paper" ? `playerone : ${playerone}\n computer: ${computer}\n computer wins!!` : 
           playerone === "paper" && computer === "scissor" ? `playerone : ${playerone}\n computer: ${computer}\n computer wins!!` :
          playerone === "scissor" && computer === "rock" ? `playerone : ${playerone}\n computer: ${computer}\n computer wins!!` :
          `playerone : ${playerone}\n computer: ${computer}\n player wins!!` 
          alert(result);
          let playagain = confirm("play again");
          playagain ? location.reload() : alert(" ok, thanks for playing.");
        }
        else{
            alert("i guess you changed your mind.  may be next time.");
        }
    }else {
        alert("you didn't enter rock , paper , scissor.");
    }
     
}else {
    alert("ok, may be next time.");
}