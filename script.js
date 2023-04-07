'use strict';


let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore= 0;

const displayMessage = (message) => document.querySelector(".message").textContent = message;



document.querySelector(".check").addEventListener("click", (e) => {

    e.preventDefault;

    const  inputValue = Number(document.querySelector(".guess").value);


    
    //When the player wins the game
     if (inputValue === randomNumber) {

        document.querySelector(".number").textContent = randomNumber;

        displayMessage(`Correct 🎉🥳`);

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = `30rem`;

        if (score>highScore) {
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    //when the player guesses the wrong number
    else if (inputValue !== randomNumber) {
            //warn the player to inter a correct input
        if (!inputValue) {
            displayMessage(`please enter a number`);
        }
            if (score > 1) {
         
            score--;
           displayMessage(inputValue> randomNumber ?`too high`: `too Low`);
        document.querySelector(".score").textContent = score;
        } else {
            displayMessage(`You lost the game`);
             document.querySelector(".score").textContent = 0;
        }
    }   
})
//to restart the game
document.querySelector(".again").addEventListener("click",(e)=>{

    e.preventDefault;

    randomNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20

    document.querySelector("body").style.backgroundColor = "#222";

displayMessage(`Start guessing...`)

    document.querySelector(".number").textContent = `?`;

    document.querySelector(".number").style.width = `15rem`;

    document.querySelector(".guess").value="";

    document.querySelector(".score").textContent = score;

})

