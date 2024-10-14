const keyAPI = "GENERATE_YOUR_KEY"; //https://www.weatherapi.com/signup.aspx
const baseURL = "http://api.weatherapi.com/v1"
const language = "pt"

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async () => {
    const city = document.getElementById("search-input").value;

    if(!city) return;

    const data = await searchCityData(city);

    if (data) fillData(data, city);

});


async function searchCityData(city) {
    const apiURL = `${baseURL}/current.json?key=${keyAPI}&q=${city}&aqi=no&lang=${language}`;

    const response = await fetch(apiURL);

    if(response.status !== 200) return;

    const data = response.json();

    return data;
}

function fillData(data, city) {
    const temperature = data.current.temp_c
    const condition = data.current.condition.text;
    const humidity = data.current.humidity
    const windSpeed = data.current.wind_kph
    const conditionIcon = data.current.condition.icon

    document.getElementById("city").textContent = city

    document.getElementById("temperature").textContent = `${temperature.toFixed(0)} °C`

    document.getElementById("climate-condition").textContent = condition

    document.getElementById("humidity").textContent = `${humidity}%`

    document.getElementById("wind-speed").textContent = `${windSpeed} km/h`

    document.getElementById("climate-icon").setAttribute("src", conditionIcon)
}