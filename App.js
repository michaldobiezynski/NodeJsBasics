// console.log('Hello world!');
// console.error("Ooooops something went wrong..");
// console.dir({name: 'Michal', age:33});

const https = require('https');
const username = "michaldobiezynski";

//Function to print message to the console

function printMessage(username, badgeCount, points) {
   const message =  `${username} has ${badgeCount} total ` +
                    `badge(s) and ${points} points in JavaScript`;
   console.log(message)
}



//Connect to the API URL
const request = https.get(`https://teamtreehouse.com/${username}.json`,
    response => {

    let body = "";


        response.on('data', data => {

            body += data.toString();
        });

        response.on('end', () => {

        console.log(body);
        
        });


    }




);

