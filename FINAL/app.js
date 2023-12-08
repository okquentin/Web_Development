// Mongoose stuff
let mongoose = require("mongoose");
let connectionStr = "mongodb+srv://ECCS2441Students:qmqW0yC9Fz3Yxpd@expressdb.rhdtl9l.mongodb.net/?retryWrites=true&w=majority";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var scheduleRouter = require('./routes/schedule');
var syllabusRouter = require('./routes/syllabus');
var studyRouter = require('./routes/study');

var app = express();

// Wait for Mongoose Connection
mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(connectionStr);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/', homeRouter);
app.use('/schedule', scheduleRouter);
app.use('/syllabus', syllabusRouter);
app.use('/study', studyRouter);

app.use(express.static('public')); // for favicon

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

