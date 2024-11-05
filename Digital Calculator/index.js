const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;              //display here is a input tag so here we use display.value
}

function clearDisplay(){
    display.value=null;  // "" is also valid.
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "ERROR";
    }
}