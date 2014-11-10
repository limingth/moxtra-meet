var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/meet', function(req, res) {
  res.render('meet', { title: 'Express' });
});

router.get('/join', function(req, res) {
  res.render('join', { title: 'Express' });
});


module.exports = router;
