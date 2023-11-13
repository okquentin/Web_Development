var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let schedule = [
    {week: 10, dow: "Monday", topic: "Mini Midterm 2"},
    {week: 10, dow: "Wednesday", topic: "Model-view-controller"},
    {week: 10, dow: "Friday", topic: "Templating with Pug"},
    {week: 11, dow: "Monday", topic: "Introduction to Express and NPM"},
    {week: 12, dow: "Wednesday", topic: "MVN architecture of Express"},
    {week: 12, dow: "Wednesday", topic: "Writing Pug in Express"}
  ];
  res.render('schedule', { title: 'Schedule', schedule: schedule, activePage: 'schedule' });
});

module.exports = router;