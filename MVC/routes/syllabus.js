var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('syllabus', { title: 'Syllabus' });
});

module.exports = router;