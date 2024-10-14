const keyAPI = "80b5e4352e6a4109835183057241410"; //https://www.weatherapi.com/signup.aspx
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

function setTextElement (id, text){
    document.getElementById(id).textContent = text
}

function fillData(data, city) {
    const temperature = data.current.temp_c
    const condition = data.current.condition.text;
    const humidity = data.current.humidity
    const windSpeed = data.current.wind_kph
    const conditionIcon = data.current.condition.icon

    setTextElement("city", city)

    setTextElement("temperature", `${temperature.toFixed(0)} °C`)

    setTextElement("climate-condition", condition)

    setTextElement("humidity", `${humidity}%`)

    setTextElement("wind-speed", `${windSpeed} km/h`)

    document.getElementById("climate-icon").setAttribute("src", conditionIcon)
}