
const profile = require('./profile.js');

const users = ["chalkers", "michaldobiezynski", "blabla"];

// users.forEach(username => {
// //     getProfile(username)
// // })

//just use this:

users.forEach(profile.get);