const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "b75dba61a32a967047c007698dfa1695";

weatherForm.addEventListener("submit",async event => {
    event.preventDefault(); //To prevent webpage from refreshing
    const city = cityInput.value.trim();
    if (city) {
        try{
            const weatherData = await getWeatherData(city); // getWeatherData is a async function
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
});

// API lo unna data ne fetch cheyyali antae API call cheyyali first -- adhi ekkada undho mana input ke batti correct API ne select chesi backticks lo pettali
// along with this apikey initial ga vadinadhi kuda set cheyyali -- manam set chesa API-URL lo
// ee "API-URL" ne manam fetch() function ke input ga istham.
// you should return a response.json() in return to the caller function to work properly.

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const weatherData = await response.json();
    return weatherData;
}

function displayWeatherInfo(data){
    // To access data we us destructuring of JS objects since data is in form of nested js objects.
    // Check the data.json() carefully understand the structure whether its a array of objects (or) nested objects etc...
    const {name : city,
           main : {temp, humidity},
           weather : [{description,id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);
    cityDisplay.textContent = `${city}`;


    const tempDisplay = document.createElement("p");
    tempDisplay.textContent = `${((temp - 273.15)* (9/5)+32).toFixed(1)}°F`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);


    const humidityDisplay = document.createElement("p");
    humidityDisplay.textContent = `${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    const descDisplay = document.createElement("p");
    descDisplay.textContent = `${description}`;
    descDisplay.classList.add("descriptionDisplay");
    card.appendChild(descDisplay);

    const emojiDisplay = document.createElement("p");
    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("weatherEmoji");
    card.appendChild(emojiDisplay);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case weatherId >= 200 && weatherId < 300 :
            return "⛈️";
        case weatherId >= 300 && weatherId < 400 :
            return  "🌧️";
        case weatherId >= 500 && weatherId < 600 :
            return  "🌦️";
        case weatherId >= 600 && weatherId < 700 :
            return  "❄️";
        case weatherId >= 700 && weatherId < 800 :
            return  "🌊";
        case weatherId === 800:
            return "☀️";
        case weatherId >= 801 && weatherId < 810 :
            return "🌫️";
        default:
            return "❓";
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}