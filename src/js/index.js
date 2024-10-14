const keyAPI = "80b5e4352e6a4109835183057241410";
const language = "pt"

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async () =>{
    const city = document.getElementById("search-input").value;

    const data = await searchCityData(city);

    console.log(data);
    
});


async function searchCityData(city){
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${city}&aqi=no&lang=${language}`;

    const response = await fetch(apiURL);

    const data = response.json();

    return data;
}