var express = require('express');
var router = express.Router();

var mbtisData = require('../data/json/mbtis.min.json') //cause error
var mbtis = mbtisData.mbtis;

router.get('/', function (req, res) {
  	res.render('mbtis/index', { json: mbtis });
});


router.get('/:mbti_id', function (req, res, next) {
	var param = mbtis[req.params.mbti_id];
	
	for (var i in param) console.log(i);
	
	if (param) {
		res.render('mbtis/mbti', { mbti: param });
	}
	else {
		next();
	}
});

router.post('/result', function (req, res) {
	var E = 0, I = 0, N = 0 , S = 0, T = 0, F = 0, P = 0, J = 0;	
	for ( var key in req.body) {
		if (req.body[key] === 'e' ) E++;
		if (req.body[key] === 'i' ) I++;
		if (req.body[key] === 'n' ) N++;
		if (req.body[key] === 's' ) S++;
		if (req.body[key] === 't' ) T++;
		if (req.body[key] === 'f' ) F++;
		if (req.body[key] === 'p' ) P++;
		if (req.body[key] === 'j' ) J++;
	};
	var str1 = '', str2 = '', str3 = '', str4 = '';
	if (E === I || E < I) str1 = 'i'; else srt1 = 'e';
	if (S === N || S < N) str2 = 'n'; else str2 = 's';
	if (T === F || T < F) str3 = 'f'; else str3 = 't';
	if (J === P || J < P) str4 = 'p'; else str4 = 'j';
	var result = str1.concat(str2, str3, str4);

	console.log(result);
	
	res.render('personalities/'+result, { title: result, result: result });

});


module.exports = router;
