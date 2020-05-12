var citiesArray = ['Austin', 'Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta'];
var apiKey = "96e27da4f61bebe5c6e5c7c18c453252";
var cityName = "Atlanta";
var queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;


citiesArray.forEach(function(city) {
    var btnDiv = $('<div>');
    var cityBtn = $('<button>');
    cityBtn.addClass('cityBtn')
    cityBtn.text(city);
    btnDiv.append(cityBtn);
    $('.city-buttons').append(btnDiv);
})


$.ajax({
    url: queryUrl,
    method: 'GET',
}).then(function(response){
    console.log(response);
})
