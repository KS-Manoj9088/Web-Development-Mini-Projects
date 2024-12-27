document.addEventListener("DOMContentLoaded", () => {
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.fontWeight = "bold";
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "space-between";
});

// Creating H1 tag for website
let heading = document.createElement("h1");
heading.textContent = "Rock-Paper-Scissors";
heading.style.color = "hsl(0,0%,20%)";
heading.id = "h1";
heading.style.fontSize = "3rem";
heading.style.marginBottom = "30px";
document.body.appendChild(heading);

// Creating a div to store R-P-S buttons
let div1 = document.createElement("div");
div1.style.width = "100%";
div1.style.height = "100px";
div1.classList.add("choices");
div1.style.marginBottom = "30px";
document.body.appendChild(div1);

// Creating R-P-S buttons, adding functionality, appending to div1
let rock = document.createElement("button");
rock.classList.add("button");
rock.textContent = "👊";

let paper = document.createElement("button");
paper.classList.add("button");
paper.textContent = "📰";

let scissor = document.createElement("button");
scissor.classList.add("button");
scissor.textContent = "✂";

paper.onclick = () => playGame("paper");    // Assign onclick functions
rock.onclick = () => playGame("rock");
scissor.onclick = () => playGame("scissor");

div1.style.width = "100%";
div1.style.height = "25%";
div1.style.paddingLeft = "33%";
div1.style.marginBottom = "35px";
div1.appendChild(rock);  // Directly appending to div1
div1.appendChild(paper);
div1.appendChild(scissor);
//

// Creating another playerDiv, computerDiv, resultDiv for displaying results
let playerDiv = document.createElement("div");
playerDiv.style.width = "100%";
playerDiv.style.paddingLeft = "45%";
playerDiv.id = "playerDisplay";
document.body.appendChild(playerDiv);

let computerDiv = document.createElement("div");
computerDiv.style.width = "100%";
computerDiv.style.paddingLeft = "45%";
computerDiv.id = "computerDisplay";
document.body.appendChild(computerDiv);

let resultDiv = document.createElement("div");
resultDiv.style.width = "100%";
resultDiv.id = "resultDisplay";
resultDiv.style.paddingLeft = "45%";
resultDiv.style.marginBottom = "30px";
resultDiv.textContent = null;
document.body.appendChild(resultDiv);


// Adding Button Effects and CSS
let buttons = document.querySelectorAll(".choices .button");
buttons.forEach( (button) => {
    button.style.fontSize = "5rem";
    button.style.minWidth = "160px";

    button.style.marginTop = "0px";
    button.style.marginBottom = "0px";
    button.style.marginLeft = "10px";
    button.style.marginRight = "10px";

    button.style.borderRadius = "50%";
    button.style.backgroundColor = "hsl(200,100%,50%)";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.5s ease";

    button.addEventListener("mouseover", ()=>{
        button.style.backgroundColor = "hsl(200,100%,70%)";
    });
    button.addEventListener("mouseout", ()=>{
        button.style.backgroundColor = "hsl(200,100%,50%)";
    });
});

playerDiv.style.fontSize = "30px";
computerDiv.style.fontSize = "30px";

resultDiv.style.fontSize = "50px";
resultDiv.style.marginTop = "30px";
resultDiv.style.marginBottom = "30px";

//CODE

const choices = ["rock", "paper", "scissor"];
playerDiv = document.getElementById("playerDisplay");
computerDiv = document.getElementById("computerDisplay");
resultDiv = document.getElementById("resultDisplay");


let playerPoints = 0;
let computerPoints = 0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
        playerPoints = 0;
        computerPoints = 0;
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            default : 
                console.log("Invalid choice");
                break;
        }
        resultDiv.classList.remove("green","red");
    if(result === "YOU WIN!"){
        playerPoints++;
        resultDiv.classList.add("green");
    }
    else{
        computerPoints++;
        resultDiv.classList.add("red");
    }
    }
    playerDiv.textContent = `Player Choice : ${playerChoice} Score : ${playerPoints}`;
    computerDiv.textContent = `Computer Choice : ${computerChoice} Score : ${computerPoints}`;
    resultDiv.textContent = result;
}

