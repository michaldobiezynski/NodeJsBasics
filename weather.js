const weatherApiKey = "fbcfd7e05f7edae93096af50733bf6ec";
const https = require('https');
const http = require('http');

function printWeather(weather) {
    const message = `Current temperature in ${weather.name} is ${weather.main.temp} C`;
    console.log(message);
}

function printError(error) {
    console.error(error.message);
}

function getBodyFromWeatherApp(city, countryCode) {
    try {
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${weatherApiKey}&units=metric`,
            response => {

            if(response.statusCode === 200) {
                let body = "";

                response.on('data', data => {
                    body += data.toString();
                });

                response.on('end', () => {
                    const weather = JSON.parse(body);
                    printWeather(weather);
                })
            } else {
                const statusCodeError
                    = `There was an error getting the message for
                     ${city} ${countryCode}.
                     (${http.STATUS_CODES[response.statusCode]})`;
                printError(statusCodeError);
            }
        });


    } catch (error) {
        printError(error);
    }
}

// getBodyFromWeatherApp("London", "uk");

module.exports.get = getBodyFromWeatherApp;