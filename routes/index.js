var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'MBTI-Express&copy;' });
});

router.get('/about', function (req, res) {
	res.render('pages/about');
});

router.get('/more', function (req, res) {
	res.render('pages/more');
});

router.get('/preferences', function (req, res) {
	res.render('pages/preferences');
});

module.exports = router;
