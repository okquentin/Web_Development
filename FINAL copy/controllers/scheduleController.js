const Schedule = require("../models/schedule");
const asyncHandler = require('express-async-handler')


// Display list of all days of the schedule.
exports.schedule_list = asyncHandler(async (req, res, next) => {

  let fullSchedule = await Schedule.find({}, "week dow topic").sort('week').exec();

  const dowOrder = ['monday', 'wednesday', 'friday']

  fullSchedule.sort((a, b) => {
    if (a.week === b.week) {
      return dowOrder.indexOf(a.dow.toLowerCase()) - dowOrder.indexOf(b.dow.toLowerCase());
    }
    return 0;
  });

  fullSchedule = fullSchedule.map((obj) => {
    // TODO any pre-processing of the schedule data 
    return obj;
  })

  res.render('schedule', {title: 'Schedule', activePage: 'schedule', "schedule": fullSchedule});
});

