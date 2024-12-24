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
playerDiv.textContent = "PLAYER :";
playerDiv.style.width = "100%";
playerDiv.style.paddingLeft = "45%";
playerDiv.id = "playerDisplay";
document.body.appendChild(playerDiv);

let computerDiv = document.createElement("div");
computerDiv.textContent = "COMPUTER :";
computerDiv.style.width = "100%";
computerDiv.style.paddingLeft = "45%";
computerDiv.id = "computerDisplay";
document.body.appendChild(computerDiv);

let resultDiv = document.createElement("div");
resultDiv.style.width = "100%";
resultDiv.id = "resultDisplay";
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

