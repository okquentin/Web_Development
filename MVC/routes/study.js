var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('study', { title: 'Study' });
});

module.exports = router;