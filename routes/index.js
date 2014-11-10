var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Moxtra Meet' });
});

router.get('/meet', function(req, res) {
  res.render('meet', { title: 'Moxtra Meet' });
});

router.get('/join', function(req, res) {
  res.render('join', { title: 'Moxtra Meet' });
});


module.exports = router;
