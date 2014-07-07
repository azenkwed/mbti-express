/*admin.js*/

var express = require('express');
var router = express.Router();

/* GET mbtis listing. */
router.get('/', function (req, res) {
  res.render('admin/index');
});

router.get('/login', function (req, res) {
	res.render('admin/login');
});

module.exports = router;