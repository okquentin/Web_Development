let mongoose = require('mongoose');

console.log("mongoose version =", mongoose.version);

let connectionStr = 
	"mongodb+srv://qosterhage:WZe3gP2HNpc7wnzW@cluster0.yesff4b.mongodb.net/";

console.log("Connecting to database...")

mongoose.connect(connectionStr);

mongoose.connection.on('error', function(){
	console.log("Error connecting to database");
});

mongoose.connection.on('open', function(){
	console.log("Successfully connected to database");
});
