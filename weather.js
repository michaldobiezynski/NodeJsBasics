const weatherApiKey = "fbcfd7e05f7edae93096af50733bf6ec";

const https = require('https');

function printWeather(weather) {
    const message = `Current temperature in ${weather.name} is ${weather.main.temp} F`;
    console.log(message);
}

function getBodyFromWeatherApp(city, countryCode) {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${weatherApiKey}`,
        response => {
            let body = "";

            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                const weather = JSON.parse(body);
                printWeather(weather);
            })
        } );


}

// getBodyFromWeatherApp("London", "uk");

module.exports.get = getBodyFromWeatherApp;