const apiKey = "6b3f1ae3c32fa291866c54b985be26c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const WeatherIcon = document.getElementById("WeatherIcon")

async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% <br> Humidity"; ;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h <br> Wind Speed";

    if (data.weather[0].main == "Clouds") {
        WeatherIcon.src = "images/clouds.png";

    }

    else if (data.weather[0].main == "Clear") {
        WeatherIcon.src = "images/clear.png";

    }

    else if (data.weather[0].main == "Rain") {
        WeatherIcon.src = "images/rain.png";

    }

    else if (data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "images/drizzle.png";

    }

    else if (data.weather[0].main == "Mist") {
        WeatherIcon.src = "images/mist.png";

    }

    else if (data.weather[0].main == "Snow") {
        WeatherIcon.src = "images/snow.png";

    }
}    

searchButton.addEventListener("click", () => {
    if (searchInput.value.length == 0) {
        alert("Please enter a city name");
    }
    
    else {
        getWeatherData(searchInput.value);
        document.getElementById("WeatherIcon").style.display = "block";
    }

    searchInput.value = "";
    
})
