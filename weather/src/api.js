var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=d2b78d02189449db6382f53468fd5d7c';

var _ = require('lodash');

var kelvinToC = function(kelvin) {
    return Math.round(kelvin - 273.15) + '˚C';
}

module.exports = function(latitude, longitude) {
    var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then(res => res.json())
        .then(function(json) {
            return {
                city: json.name,
                temperature: kelvinToC(json.main.temp),
                description:  _.capitalize(json.weather[0].description)
            };
        });
};
