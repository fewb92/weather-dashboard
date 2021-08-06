var searchEl = document.querySelector(".form-input");
var searchButtonEl = document.querySelector(".submit-search");
var todayDate = document.querySelector('#current-date')
var todayTemp = document.querySelector('#current-temp')
var todayHumidity = document.querySelector('#current-humidity')
var todayWind = document.querySelector('#current-wind')
var todayUv = document.querySelector('#current-uv')
var tomorrowCard = document.getElementById('tomorrow-card')
var cardTitle = document.querySelector('.card-title') 
var countyTitleOne = document.querySelector('.county-title-1') 
var countyTitleTwo = document.querySelector('.county-title-2') 
var countyTitleThree = document.querySelector('.county-title-3') 
var countyTitleFour = document.querySelector('.county-title-4') 
var countyTitleFive = document.querySelector('.county-title-5') 
var cardDateOne = document.querySelector('#forecast-date-1')
var cardDateTwo = document.querySelector('#forecast-date-2')
var cardDateThree = document.querySelector('#forecast-date-3')
var cardDateFour = document.querySelector('#forecast-date-4')
var cardDateFive = document.querySelector('#forecast-date-5')
var tomorrowTemp = document.querySelector('#forecast-temp-1')
var twoTemp = document.querySelector('#forecast-temp-2')
var threeTemp = document.querySelector('#forecast-temp-3')
var fourTemp = document.querySelector('#forecast-temp-4')
var fiveTemp = document.querySelector('#forecast-temp-5')
var tomorrowHum = document.querySelector('#forecast-humidity-1')
var twoHum = document.querySelector('#forecast-humidity-2')
var threeHum = document.querySelector('#forecast-humidity-3')
var fourHum = document.querySelector('#forecast-humidity-4')
var fiveHum = document.querySelector('#forecast-humidity-5')
var tomorrowWind = document.querySelector('#forecast-wind-1')
var twoWind = document.querySelector('#forecast-wind-2')
var threeWind = document.querySelector('#forecast-wind-3')
var fourWind = document.querySelector('#forecast-wind-4')
var fiveWind = document.querySelector('#forecast-wind-5')
var tomorrowUV = document.querySelector('#forecast-uv-1')
var twoUV = document.querySelector('#forecast-uv-2')
var threeUV = document.querySelector('#forecast-uv-3')
var fourUV = document.querySelector('#forecast-uv-4')
var fiveUV = document.querySelector('#forecast-uv-5')
var currentConditions = document.querySelector('#current-conditions')
var tomorrowConditions = document.querySelector('#forecast-conditions-1')
var twoConditions = document.querySelector('#forecast-conditions-2')
var threeConditions = document.querySelector('#forecast-conditions-3')
var fourConditions = document.querySelector('#forecast-conditions-4')
var fiveConditions = document.querySelector('#forecast-conditions-5')
var weatherIcon = document.querySelector('.weather-icon')
var tomorrowIcon = document.querySelector('.forecast-icon-1')
var twoIcon = document.querySelector('.forecast-icon-2')
var threeIcon = document.querySelector('.forecast-icon-3')
var fourIcon = document.querySelector('.forecast-icon-4')
var fiveIcon = document.querySelector('.forecast-icon-5')
var todayCard = document.querySelector('.today-card')
var cardGroup = document.querySelector('.card-group')
var prevSearches = document.querySelector('.prev-search')
var cityList = document.querySelector('.cityname')
var latitude
var longitude
const apiKey = 'e65d424e1ef4600643d29a7a40affd05'
const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q='+'Bronx'+'&appid='+apiKey+'&units=imperial'

let today = new Date();

let month = today.getMonth()+1
let year = today.getFullYear();
let date = today.getDate();
let twoDate = date+1
let threeDate = date+2
let fourDate = date+3
let fiveDate = date+4
let sixDate = date+5

let currentDate = `${month}/${date}/${year}`;
let secondDate = `${month}/${twoDate}/${year}`;
let thirdDate = `${month}/${threeDate}/${year}`;
let fourthDate = `${month}/${fourDate}/${year}`;
let fifthDate = `${month}/${fiveDate}/${year}`;
let sixthDate = `${month}/${sixDate}/${year}`;

searchButtonEl.addEventListener("click", onSearch);
searchEl.addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    onSearch();
  }
});

function onSearch () {
  let city = searchEl.value;
  console.log(city)
  let newCity = document.createElement('option')
  newCity.innerHTML = `<option value="${city}">`
  cityList.appendChild(newCity)

  cardGroup.classList.remove('hidden')
  todayCard.classList.remove('hidden')


  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=imperial')
  .then(function (response) {
      return response.json()
  })
  .then(function (json) {
      console.log(json)
      console.log(cardTitle)
      console.log(json.weather[0].main)
      currentConditions.textContent = json.weather[0].main
      todayDate.textContent = currentDate
      todayTemp.textContent = json.main.temp;
      todayHumidity.textContent = json.main.humidity;
      todayWind.textContent = json.wind.speed;
      cardTitle.textContent = json.name;
      countyTitleOne.textContent = json.name;
      countyTitleTwo.textContent = json.name;
      countyTitleThree.textContent = json.name;
      countyTitleFour.textContent = json.name;
      countyTitleFive.textContent = json.name;
      const icon = json.weather[0].icon
      weatherIcon.innerHTML = `<img src="icons/${icon}.png"></img>`
      console.log(weatherIcon)
      console.log(icon)
      let lat = json.coord.lat
      let lon = json.coord.lon
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log(json)
        console.log(json.daily[0].temp.day)
        cardDateOne.textContent = secondDate
        cardDateTwo.textContent = thirdDate
        cardDateThree.textContent = fourthDate
        cardDateFour.textContent = fifthDate
        cardDateFive.textContent = sixthDate
        tomorrowTemp.textContent = json.daily[0].temp.day
        twoTemp.textContent = json.daily[1].temp.day
        threeTemp.textContent = json.daily[2].temp.day
        fourTemp.textContent = json.daily[3].temp.day
        fiveTemp.textContent = json.daily[4].temp.day
        tomorrowHum.textContent = json.daily[0].humidity
        twoHum.textContent = json.daily[1].humidity
        threeHum.textContent = json.daily[2].humidity
        fourHum.textContent = json.daily[3].humidity
        fiveHum.textContent = json.daily[4].humidity
        tomorrowWind.textContent = json.daily[0].wind_speed
        twoWind.textContent = json.daily[1].wind_speed
        threeWind.textContent = json.daily[2].wind_speed
        fourWind.textContent = json.daily[3].wind_speed
        fiveWind.textContent = json.daily[4].wind_speed
        todayUv.textContent = json.daily[0].uvi
        tomorrowUV.textContent = json.daily[0].uvi
        twoUV.textContent = json.daily[0].uvi
        threeUV.textContent = json.daily[0].uvi
        fourUV.textContent = json.daily[0].uvi
        fiveUV.textContent = json.daily[0].uvi
        tomorrowConditions.textContent = json.daily[0].weather[0].main
        twoConditions.textContent = json.daily[1].weather[0].main
        threeConditions.textContent = json.daily[2].weather[0].main
        fourConditions.textContent = json.daily[3].weather[0].main
        fiveConditions.textContent = json.daily[4].weather[0].main
        const icon = json.daily[0].weather[0].icon
        const iconTwo = json.daily[1].weather[0].icon
        const iconThree = json.daily[2].weather[0].icon
        const iconFour = json.daily[3].weather[0].icon
        const iconFive = json.daily[4].weather[0].icon
        tomorrowIcon.innerHTML = `<img src="icons/${icon}.png"></img>`
        console.log(tomorrowIcon)
        twoIcon.innerHTML = `<img src="icons/${iconTwo}.png"></img>`
        threeIcon.innerHTML = `<img src="icons/${iconThree}.png"></img>`
        fourIcon.innerHTML = `<img src="icons/${iconFour}.png"></img>`
        fiveIcon.innerHTML = `<img src="icons/${iconFive}.png"></img>`
  })
  })
}

