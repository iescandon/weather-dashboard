var citiesArray = ['Austin', 'Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta'];
var cityName = "Houston";

$('#current-date').text(moment().format('dddd, MMMM Do YYYY'));

displayCityInfo();

citiesArray.forEach(function(city) {
    var btnDiv = $('<div>');
    var cityBtn = $('<button>');
    cityBtn.addClass('cityBtn');
    cityBtn.attr('data-state', city);
    cityBtn.text(city);
    btnDiv.append(cityBtn);
    $('.city-buttons').append(btnDiv);
})

function retrieveCityInfo (event) {
    event.preventDefault();
    var userCity = $('#city-search-input').val().trim();
    cityName = userCity;
    $('#city-search-input').val("");
    displayCityInfo();
}

function chooseCity () {
    var city = $(this).attr('data-state');
    cityName = city;
    displayCityInfo();
}

function displayCityInfo () {
    // var days = 6;
    var apiKey = "96e27da4f61bebe5c6e5c7c18c453252";
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    // var queryUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${cityName}&cnt=${days}&appid=${apiKey}`;
    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).then(renderCityInfo)
}

function renderCityInfo (data) {
    console.log(data);
    var currentHour = moment().hours();
    var cityName = data.name;
    $('.city-name-date').text(cityName);
    var tempF = Math.floor((data.main.temp - 273.15) * 1.8 + 32);
    $('.temp-data').text(`Temperature: ${tempF}° F`);
    var humidity = data.main.humidity;
    $('.humidity-data').text(`Humidity: ${humidity}%`);
    var windSpeed = data.wind.speed;
    $('.wind-data').text(`Wind Speed: ${windSpeed} MPH`);
    // var uvIndex =;
    // $('.uv-index').text(`UV Index: ${uvIndex}`);
    // console.log(data.weather[0].main)
    if (data.weather[0].main === 'Clouds') {
        $('#weather-icon').attr('src', './assets/images/cloudy.png');
    } else if (data.weather[0].main === "Rain") {
        $('#weather-icon').attr('src', './assets/images/rainy.png');
    } else if (data.weather[0].main === "Clear") {
        if (currentHour < 20) {
            $('#weather-icon').attr('src', './assets/images/sunny.png');
        } else {
            $('#weather-icon').attr('src', './assets/images/moon.png');
        }
    } else if (data.weather[0].main === "Thunderstorms") {
        $('#weather-icon').attr('src', './assets/images/thunderstorm.png');
    } else {
        $('#weather-icon').attr('src', './assets/images/earth.png');
    }
}

$('.cityBtn').click(chooseCity);
$('.searchBtn').click(retrieveCityInfo);