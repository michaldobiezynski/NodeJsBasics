const weatherApiKey = "fbcfd7e05f7edae93096af50733bf6ec";

const https = require('https');

function getBodyFromWeatherApp(city, countryCode) {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${weatherApiKey}`,
        response => {
            let body = "";

            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                const weather = JSON.parse(body);
                console.dir(weather);
            })
        } );


}

// getBodyFromWeatherApp("London", "uk");

module.exports.get = getBodyFromWeatherApp;