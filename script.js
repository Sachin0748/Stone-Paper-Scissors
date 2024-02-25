let userResult = 0; 
let compResult = 0; 

const choices = document.querySelectorAll(".choice");

let comp = (()=>{
    let options = [ "rock" , "paper" , "scissor" ];
    let num = Math.floor(Math.random()*3);
    return options[num];
});

let message = document.querySelector("#text");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");



let btn = document.createElement("button");
btn.innerText = "reset";
btn.style.backgroundColor = "#081b31";
btn.style.color = "white";
btn.style.margin = '50px';
btn.style.padding = '10px';
btn.style.borderRadius = '10px';
document.body.appendChild(btn);

btn.addEventListener("click", ()=>{
    location.reload();
});
btn.addEventListener("mouseover", ()=>{
    btn.style.cursor="pointer";
});



let drawGame = () =>{
    message.innerText = "Match draw , Play again .";
    message.style.backgroundColor = "#081b31";
}
let userWin = ( userChoice , compChoice ) =>{
    message.innerText = `You Win! 😄 Your ${userChoice} beats ${compChoice} .`;
    userResult++;
    userScore.innerText = userResult;
    message.style.backgroundColor = "green";
}

let compWin = ( userChoice , compChoice ) =>{
    message.innerText = `You lose 😔 ${compChoice} beats your ${userChoice} .`;
    compResult++;
    compScore.innerText = compResult;
    message.style.backgroundColor = "red";
}

choices.forEach ((choice) => {

    choice.addEventListener("click",() =>{ 

        let userChoice = choice.getAttribute("id");
        let compChoice = comp();

        if( userChoice == compChoice )
        {
            drawGame();
        }
        else if(userChoice == "rock" && compChoice == "scissor" )
        {
            userWin( userChoice , compChoice );
        }
        else if(userChoice == "scissor" && compChoice == "paper")
        {
            userWin( userChoice , compChoice );
        }
        else if(userChoice == "paper" && compChoice == "rock")
        {
            userWin( userChoice , compChoice );
        }
        else
        {
            compWin( userChoice , compChoice );
        }
    });
});
