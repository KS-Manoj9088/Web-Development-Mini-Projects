let lowerCaseLetters = document.getElementById("lowerCaseLetters");
let upperCaseLetters = document.getElementById("upperCaseLetters");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let finalPassword = document.querySelector(".password");




const passwordLength = 12;
//const includeLowerCase = true;
//const includeUpperCase = true;
//const includeNumbers = true;
//const includeSymbols = true;

function generatePassword()
{
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    if(lowerCaseLetters.checked){
        allowedChars += lowerCaseChars;
    }
    if(upperCaseLetters.checked){
        allowedChars += upperCaseChars;
    }
    if(numbers.checked){
        allowedChars += numberChars;
    }
    if(symbols.checked){
        allowedChars += symbolChars;
    }

    if(passwordLength <= 0)
    {
        finalPassword.innerHTML = "Password length should be atleast 1.";
        finalPassword.style.display = "block";
        return;
    }

    if(allowedChars.length===0){
        finalPassword.innerHTML = "Please select at least one character type.";
        finalPassword.style.display = "block";
        return;
    }

    for(let i = 0;i < passwordLength;i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    finalPassword.innerHTML = password;
    finalPassword.style.display = "block";
}
