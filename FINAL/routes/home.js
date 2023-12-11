var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'ECCS 2441', activePage: 'home'});
});

module.exports = router;