

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = $("#result");

let temp;


function convert()
{
    if(toFahrenheit.checked)
    {
        temp = Number(textBox.value);
        temp = (temp * 9)/5 + 32;
        result.text(temp);
    }
    else if(toCelsius.checked)
    {
        temp = Number(textBox.value);
        temp = (5*(temp - 32)) / 9;
        result.text(temp + "");
    }
    else
    {
        result.text("Select a unit please!");
    }
}