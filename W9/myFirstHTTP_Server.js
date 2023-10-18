/**
* Goal of this program is to send a message to a user
* that says "Hello HTTP" when they visit the website
* in a browser
**/

let http = require("http");

let server = http.createServer((req,res) => {

	// The content of this function is what will be ran 
	// when the website is visited

	console.log("Request Recieved");

	res.end();

});

let portNumber = 3000;

server.listen(portNumber);