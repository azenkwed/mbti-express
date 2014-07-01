
var express = require('express');
var router = express.Router();

var docList   = require('readdir').readSync('data/pdfs/', ['**.pdf']);

/* GET docs listing. */
router.get('/', function (req, res) {
  res.render('docs/index', {
  	title: 'List of documents available',
  	pdfs: docList
  });
});



module.exports = router;