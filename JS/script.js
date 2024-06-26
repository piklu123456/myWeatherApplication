const apiKey = "95cff25e03e0de4658f2e8372193ebe6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

// Get HTML elements
let searchBox = document.getElementById('city');
let searchButton = document.getElementById('search');
let resultBox = document.getElementById("result");

let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');
let temperatureElement = document.getElementById('temperature');
let windSpeedElement = document.getElementById('windspeed');

const getWeather = async (city) => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);

        humidityElement.innerText = data.main.humidity;
        pressureElement.innerText = data.main.pressure;
        temperatureElement.innerText = data.main.temp;
        windSpeedElement.innerText = data.wind.speed;
    } catch (error) {
        Swal.fire({
            title: "No such city exists!",
            icon: "error"
        });
        humidityElement.innerText = "";
        pressureElement.innerText = "";
        temperatureElement.innerText = "";
        windSpeedElement.innerText = "";
    }

}


searchButton.addEventListener('click', (event) => {
    if ((searchBox.value == "") || (isNaN(searchBox.value) == false)) {
        Swal.fire({
            title: "Please Enter valid City name",
            icon: "error"
        });
        humidityElement.innerText = "";
        pressureElement.innerText = "";
        temperatureElement.innerText = "";
        windSpeedElement.innerText = "";
    } else {

        getWeather(searchBox.value);
        resultBox.style.display = "block";
    }

})