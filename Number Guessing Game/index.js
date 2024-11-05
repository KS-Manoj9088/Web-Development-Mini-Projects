const minNum = 1;
const maxNum = 100;

// Our aim to create a random number between 1 and 100

const answer = Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;
//console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running)
{   
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        windowalert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a number between 1 and 100");
    }
    else{
        attempts++;
        if(guess < answer)
        {
            window.alert("Too low, try again");
        }
        else if(guess > answer)
        {
            window.alert("Too high, try again");
        }
        else
        {
            window.alert(`The answer is ${answer} .You guessed it in ${attempts} attempts.`);
            running = false;
            break;
        }
    }
    
}