var express = require('express');
var router = express.Router();

// Reading Markdown Note Files
var marked = require('marked');
var fs = require('fs');

var mdHTML = fs.readFileSync('./public/files/md/HTML.md', 'utf8');
var htmlHTML = marked(mdHTML);

var mdHTTP = fs.readFileSync('./public/files/md/HTTP.md', 'utf8');
var htmlHTTP = marked(mdHTTP);

var mdMVC = fs.readFileSync('./public/files/md/MVC.md', 'utf8');
var htmlMVC = marked(mdMVC);

router.get('/', function(req, res, next) {
  res.render('study', { 
    title: 'Study Guide', 
    activePage: 'study', 
    mdOne: htmlHTML,
    mdTwo: htmlHTTP,
    mdThree: htmlMVC
  });
});

module.exports = router;