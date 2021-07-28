const currentDate = moment().format('ddd MMMM DD' + ', ' + 'YYYY');
const currentTime = moment().format('LT');
const searchEl = document.querySelector('#search-field')
var todayDate = document.querySelector('#current-date')
var todayTemp = document.querySelector('#current-temp')
var todayHumidity = document.querySelector('#current-humidity')
var todayWind = document.querySelector('#current-wind')
var todayUv = document.querySelector('#current-uv')
var latitude
var longitude
const apiKey = 'e65d424e1ef4600643d29a7a40affd05'
const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q='+'Bronx'+'&appid='+apiKey
const fullWeatherAPI= 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'

fetch(weatherAPI)
  .then(function (response) {
      return response.json()
  })
  .then(function (json) {
      console.log(json)
      todayTemp.textContent = json.main.temp;
      todayHumidity.textContent = json.main.humidity;
      todayWind.textContent = json.wind.speed;
      todayUv.textContent = json.main.temp;
  })

console.log(searchEl)

// const getCoordinates = () => {
//   fetch(weatherAPI)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (json) {
//     var lat = json.coord.lat
//     var lon = json.coord.lon
//     console.log(lat, lon)
//   })
// }

// getCoordinates()

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
  } else {
    locationFail();
  }
}

// function for startup if statement - success
function locationSuccess(position) {
  lat = position.coords.latitude.toString();
  long = position.coords.longitude.toString();
  getWeather(lat, long);
}
// function for startup if statement - fail, opens modal
function locationFail(error) {
  //show the modal here. You might not really need to use the error param here, makes sense to me to just launch the modal regardless
  showModal.classList.add('show-modal');
  searchModal.addEventListener('submit', function (e) {
    e.preventDefault();
    let zipCode = modalInput.value;
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=93fbb945657a5e5ca75650241870b021`;

    fetch(currentWeatherURL).then(function (response) {
      return response.json().then(function (data) {
        getWeather(data.coord.lat, data.coord.lon);
        searchForm.reset();
        showModal.classList.remove('show-modal');
      });
    });
  });
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