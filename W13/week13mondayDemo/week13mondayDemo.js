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

let scheduleSchema = new mongoose.Schema({
	week: Number,
	day_of_week: String,
	topic: String
});

// Create a model (class) from the schema
let Schedule = mongoose.model('Schedule', scheduleSchema);


// Create a instance of the schedule model
let s = new Schedule({
  week: 10,
  dow: "Monday",
  topic: "Mini Midterm 2"
});

// Save the instance to the database
s.save();

