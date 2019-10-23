

const weather = require('./weather');

const cities = [
    {
        name: "London",
        countryCode: "uk"
    },
    {
        name: "New York",
        countryCode: "us"
    },
    {
        name: "Madrid",
        countryCode: "es"
    },
];


cities.forEach(city => {
    weather.get(city.name, city.countryCode);
});
