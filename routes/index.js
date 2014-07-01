var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'MBTI-Express&copy;' });
});

router.get('/about', function (req, res) {
	res.render('pages/about');
});

module.exports = router;
