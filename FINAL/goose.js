let mongoose = require('mongoose');

console.log("mongoose version =", mongoose.version);

let connectionStr = mongodb+srv://ECCS2441Students:qmqW0yC9Fz3Yxpd@expressdb.rhdtl9l.mongodb.net/?retryWrites=true&w=majority

let scheduleSchema = new mongoose.Schema({
  week: Number,
  dow: String,
  topic: String
});

// Create a model (class) from the schema
let Schedule = mongoose.model('Schedule', scheduleSchema);

