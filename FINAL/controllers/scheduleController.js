const Schedule = require("../models/schedule");
const asyncHandler = require('express-async-handler')


// Display list of all days of the schedule.
exports.schedule_list = asyncHandler(async (req, res, next) => {

  let fullSchedule = await Schedule.find({}, "week dow topic").exec();

  fullSchedule = fullSchedule.map((obj) => {
    // TODO any pre-processing of the schedule data 

    return obj;
  })

  res.render('schedule', {"schedule": fullSchedule});

});

