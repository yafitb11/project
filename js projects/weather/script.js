
const API_KEY = "6a9be2818d2079089ad0676d2f5dd889";
const URL1 = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;

const q = document.getElementById("inputCity");
const button = document.querySelector("button");
const h1 = document.getElementById("city");
const time = document.getElementById("time");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");
const container = document.getElementById("container");

async function getWeather(city) {
    const response = await fetch(URL1 + city);
    const data = await response.json();
    displayWeather(data);
    getCityTime(city);
}

function displayWeather(weatherData) {
    if (weatherData.cod === 200) {
        errorMessage.innerText = "";
        h1.innerText = weatherData.name;
        temp.innerText = Math.round(weatherData.main.temp) + "°C";
        description.innerText = weatherData.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        weatherIcon.alt = weatherData.name;
        console.log(weatherData);
    } else {
        h1.innerText = "";
        temp.innerText = "";
        description.innerText = "";
        weatherIcon.src = "";
        weatherIcon.alt = "";
        errorMessage.innerText = "City not found";
    }
}

button.addEventListener("click", () => {
    getWeather(q.value);
});


const geoApiKey = 'c44d36e04abc4cbbab5df8461478bc11';
const timeZoneApiKey = 'AU9281OJU3WT';


async function getCityTime(city) {

    const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${geoApiKey}`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (geoData.results.length === 0) {
        console.log('City not found!');
        return;
    }

    const { lat, lng } = geoData.results[0].geometry;

    const timeZoneUrl = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timeZoneApiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;

    const timeZoneResponse = await fetch(timeZoneUrl);
    const timeZoneData = await timeZoneResponse.json();
    const cityTimeFull = timeZoneData.formatted;
    const cityTime1 = cityTimeFull.split(' ')[1];
    time.innerText = `The local time is: ${cityTime1}`;

    const [hours, minutes, seconds] = cityTime1.split(":");
    const cityTime = new Date();
    cityTime.setHours(hours, minutes, seconds, 0);
    const morningTime = new Date();
    morningTime.setHours(6, 0, 0, 0);
    const noonTime = new Date();
    noonTime.setHours(12, 0, 0, 0);
    const eveningTime = new Date();
    eveningTime.setHours(17, 0, 0, 0);
    const nightTime = new Date();
    nightTime.setHours(23, 59, 59, 59);

    if (cityTime < noonTime && cityTime >= morningTime) { container.style.backgroundImage = "url('./pics/morning.png')"; }
    else if (cityTime >= noonTime && cityTime < eveningTime) { container.style.backgroundImage = "url('./pics/noon.png')"; }
    else if (cityTime >= eveningTime && cityTime < nightTime) { container.style.backgroundImage = "url('./pics/evening.png')"; }
    else { container.style.backgroundImage = "url('./pics/night.png')"; }
}

