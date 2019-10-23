

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
        name: "Madridss",
        countryCode: "es"
    },
];


cities.forEach(city => {
    weather.get(city.name, city.countryCode);
});
