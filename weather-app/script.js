const apiKey = "22313e921b28d2559ab79166c0f9b6d2"
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


async function getWatherByLocation(city){
    const resp = await fetch(url(city))
    const respData = await resp.json()

    addWeatherToPage(respData)
}

function addWeatherToPage(data) {
    const temp = getTemp(data.main.temp)
    const weather = document.createElement("div")
    weather.classList.add("weather")

    weather.innerHTML = `
        <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">${temp} °C</h2>
        <small>${data.weather[0].main}</small>
    `

    //cleanup
    main.innerHTML = ""
    main.appendChild(weather)    
}

function getTemp(data) {
    return Math.floor(data)
}

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const city = search.value

    if(city){
        getWatherByLocation(city)
    }

})