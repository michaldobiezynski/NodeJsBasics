// console.log('Hello world!');
// console.error("Ooooops something went wrong..");
// console.dir({name: 'Michal', age:33});

const https = require('https');

//print error messages
function printError(error) {
    console.error(error.message);
}

//Function to print message to the console

function printMessage(username, badgeCount, points) {
   const message =  `${username} has ${badgeCount} total ` +
                    `badge(s) and ${points} points in JavaScript`;
   console.log(message)
}

function getProfile(username) {
    try {
        //Connect to the API URL
        const request = https
            .get(`https://teamtreehouse.com/${username}.json`,
                response => {

                    let body = "";

                    response.on('data', data => {

                        body += data.toString();
                    });

                    response.on('end', () => {

                        try {
                            const profile = JSON.parse(body);
                            printMessage(
                                username,
                                profile.badges.length,
                                profile.points.JavaScript)
                        } catch (e) {
                            printError(e);
                        }


                    });
                }
            );
        request.on('error',
            error =>
                console.error(`Problem with request ${error.message}`));
    } catch (error) {
        printError(error);
    }
}

const users = ["chalkers", "michaldobiezynski"]

// users.forEach(username => {
// //     getProfile(username)
// // })

//just use this:

users.forEach(getProfile);



