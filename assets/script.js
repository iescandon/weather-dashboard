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
    var apiKey = "96e27da4f61bebe5c6e5c7c18c453252";
    // var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
    $.ajax({
        url: queryUrl,
        method: 'GET',
    }).then(renderCityInfo)
}

function renderCityInfo (data) {
    console.log(data);
    var currentHour = moment().hours();
    var cityName = data.name;
    // var cityName = data.city.name;
    var currentWeather = data.weather[0].main;
    // var currentWeather = data.list[0].weather[0].main;
    $('.city-name-date').text(cityName);
    var temp = Math.ceil(data.main.temp);
    // var tempF = Math.floor(data.list[0].main.temp);
    $('.temp-data').text(`Temperature: ${temp}° F`);
    var humidity = data.main.humidity;
    // var humidity = data.list[0].main.humidity;
    $('.humidity-data').text(`Humidity: ${humidity}%`);
    var windSpeed = data.wind.speed;
    // var windSpeed = data.list[0].wind.speed;
    $('.wind-data').text(`Wind Speed: ${windSpeed} MPH`);
    if (currentWeather === 'Clouds') {
        $('#weather-icon').attr('src', './assets/images/cloudy.png');
    } else if (currentWeather === "Rain") {
        $('#weather-icon').attr('src', './assets/images/rainy.png');
    } else if (currentWeather === "Clear") {
        if (currentHour < 20 && currentHour > 6) {
            $('#weather-icon').attr('src', './assets/images/sunny.png');
        } else {
            $('#weather-icon').attr('src', './assets/images/moon.png');
        }
    } else if (currentWeather === "Thunderstorms") {
        $('#weather-icon').attr('src', './assets/images/thunderstorm.png');
    } else {
        $('#weather-icon').attr('src', './assets/images/earth.png');
    }
}

for (var i = 1; i < 6; i++) {
    var dayDiv = $('<div>');
    dayDiv.addClass('col dayBlock');
    var pDate = $('<p>');
    pDate.addClass('row justify-content-center mt-3 mb-3 tiny-date');
    var day = moment().add(i, 'days').format('l');
    pDate.text(day);
    var weatherImg = $('<img>');
    weatherImg.addClass('row justify-content-center mb-3 tiny-icon');
    weatherImg.attr('src','./assets/images/thunderstorm.png');
    var pTemp = $('<p>');
    pTemp.addClass('row justify-content-center mb-3');
    pTemp.text(`Temp: xyz`);
    var pHumidity = $('<p>');
    pHumidity.addClass('row justify-content-center mb-3');
    pHumidity.text(`Humidity: 123`);
    dayDiv.append(pDate);
    dayDiv.append(weatherImg);
    dayDiv.append(pTemp);
    dayDiv.append(pHumidity);
    $('#bottom-row').append(dayDiv);
}

$('.cityBtn').click(chooseCity);
$('.searchBtn').click(retrieveCityInfo);