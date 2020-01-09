const request = require('request'); // to make API call
const argv = require('yargs').argv;

let apiKey = '8d2de98e089f1c28e1a22fc19a24ef04';
let cityname_or_postalcode = argv.c || 'bengaluru';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname_or_postalcode}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
        let weather = JSON.parse(body)
        let weather_timezoneMessage = `${weather.main.temp} °F in ${weather.name} and GMT ${weather.timezone/3600.0}`;
        console.log(weather_timezoneMessage);
      }
    });
