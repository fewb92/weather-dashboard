const currentDate = moment().format('ddd MMMM DD' + ', ' + 'YYYY');
const currentTime = moment().format('LT');
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
var latitude
var longitude
const apiKey = 'e65d424e1ef4600643d29a7a40affd05'
const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q='+'Bronx'+'&appid='+apiKey+'&units=imperial'


searchButtonEl.addEventListener("click", onSearch);

function onSearch () {
  let city = searchEl.value;
  console.log(city)

  fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=imperial')
  .then(function (response) {
      return response.json()
  })
  .then(function (json) {
      console.log(json)
      console.log(cardTitle)
      todayTemp.textContent = json.main.temp;
      todayHumidity.textContent = json.main.humidity;
      todayWind.textContent = json.wind.speed;
      todayUv.textContent = json.main.temp;
      cardTitle.textContent = json.name;
      countyTitleOne.textContent = json.name;
      countyTitleTwo.textContent = json.name;
      countyTitleThree.textContent = json.name;
      countyTitleFour.textContent = json.name;
      countyTitleFive.textContent = json.name;
      let lat = json.coord.lat
      let lon = json.coord.lon
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log(json)
        console.log(json.daily[0].temp.day)
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
        tomorrowUV.textContent = json.daily[0].uvi
        twoUV.textContent = json.daily[0].uvi
        threeUV.textContent = json.daily[0].uvi
        fourUV.textContent = json.daily[0].uvi
        fiveUV.textContent = json.daily[0].uvi
  })
  })
}



// variable to hold our search history !searchHistory.includes(city)

// get the history from localStorage and update the searchHistory variable - if there are no results -> [] (make sure to parse JSON)

// function to add location to localStorage (addToStorage)
	// accept a location as a parameter
	// add the passed in parameter to exisitingHistory array
	// update localStorage (don't forget to stringify JSON)

// function to add an item to searchHistory (addToHistory)
	// accept a location as a parameter
	// create an li
	// add any classes
	// set textContent to value of parameter
	// append it to the history-list

// loop through searchHistory -> call addToHistory(searchHistory[i])


// function to get our coordinates (getCoordinates)
	// accept location as a parameter
	
	// create a url -> 'http://api.openweathermap.org/geo/1.0/direct?q=' + location + '&limit=1&appid=' + appid;
	
	// fetch call

		// first then -> accept response as a parameter -> return response.json()

		/* second then
			-> accept data as a parameter
			-> access data[0]
			-> .name, .lat, .lon
			-> pass those as arguments to getWeather
		*/

// function that gets our weather data (getWeather)
	// accepts name, lat, lon as parameters
	
	// create url - 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat '&lon=' + lon + '&exclude=hourly,minutely,alerts&units=imperial&appid=' + appid
	
	// fetch call

		// first then -> accept response as a parameter -> return response.json()

		/* second then
			-> accept data as a parameter
			-> access data
			-> .current .daily
			-> pass those as arguments to renderToday(name, current) and renderForecast(daily)
		*/


// function to render the current data - renderToday
	// accept location name and current object from getWeather as parameters

	// clear out the today container -> innerHTML = ''

	/*
		create a div (.card)
    -> add any bootstrap or custom classes

    create a div for the card body (.card-body)
    -> add any bootstrap or custom classes

    create a heading
    -> add any bootstrap or custom classes (.card-title)
    -> set textContent to location name (location parameter) and the current date (moment or new Date().toLocaleDateString())
    
    create img for icon
    -> set src attribute to the icon - 'http://openweathermap.org/img/w/' + current.weather.icon + '.png';
    -> https://openweathermap.org/weather-conditions
    
    create three p for windspeed, temp, humidity (.card-text)
    -> add any bootstrap or custom classes
    -> set text content to label and  data property (i.e. 'Temperature: ' + current.temp' + ' °F')

    create p for uv index
    -> add any classes (.card-text)
    -> set text content to label
    
    create span
    -> add any classes (.btn)
    -> set textContent to uv index property
    -> if, else statement to set the color to green if under 3, yellow if between 3 and 7, or red if above 7 (.btn-danger, .btn-warning, .btn-success)

    append img to heading
    append heading to card body
    append the paragraphs for wind, temp, and humidity to the card body
    append span to the paragraph for UV Index
    append paragraph for UV Index to card body
    append the card body to the card
    append the card to the today div
	*/

// function to render the five-day forecast - renderForecast
	// accept daily object from getWeather as a parameter

	// set the innerHTMl of the forecast div to a header that says 5-day forecast

	// create a div for the row of cards -> add any classes

	/*
    loop over data
      create a div for each col
      -> add any classes

      create a div for the card body
      -> add any classes

      create a div for the card
      -> add any classes

      create a heading for the title
      -> add any classes
      -> set textContent to the date (using moment or new Date(property).toLocaleDateString();)

      create img for the icon
      -> set src attribute to the icon
      -> https://openweathermap.org/weather-conditions

      create paragraphs for the wind, temp, and humidity
      -> add classes
      -> set textContent to label and property from data

      append the title, image,and paragraphs to the card body
      append the card body to the card
      append the card to the col
      append the col to the row
  */

// function to handle the form submission - handleSubmit
  /*
    accept event object as a parameter
    preventDefault

    get the value of the input using the children property (DOM Traversal) - searchForm.children[0].value

    check if the value already exists in the history array
    -> if not, call addToHistory and addToHistoryList

  	call getCoordinates -> pass in the searchValue
  	clear the input - searchForm.children[0].value = ''
  */

// add event handler to the form searchForm.addEventListener('submit', handleSubmit)

// add an event listener to the history ul
  /*
    on click
    pass event parameter to the function
    check that the event.target is an li (event.target.matches('li'))
    get the id or textContent and call getCoordinates
  */