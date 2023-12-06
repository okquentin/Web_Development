var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('study', { title: 'Study Guide', activePage: 'study' });
});

module.exports = router;