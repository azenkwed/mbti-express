// personlities.js

var express = require('express');
var router = express.Router();

/* GET Personalities Index*/

router.get('/', function (req, res) {
  res.render('personalities/index');
})

/* GET personlities. */
router.get('/enfj', function (req, res) {
  res.render('personalities/enfj');
})

router.get('/enfp', function (req, res) {
  res.render('personalities/enfp');
})

router.get('/entj', function (req, res) {
  res.render('personalities/entj');
})

router.get('/entp', function (req, res) {
  res.render('personalities/entp');
})

router.get('/esfj', function (req, res) {
  res.render('personalities/esfj');
})

router.get('/esfp', function (req, res) {
  res.render('personalities/esfp');
})

router.get('/estj', function (req, res) {
  res.render('personalities/estj');
})

router.get('/estp', function (req, res) {
  res.render('personalities/estp');
})

router.get('/infj', function (req, res) {
  res.render('personalities/infj');
})

router.get('/infp', function (req, res) {
  res.render('personalities/infp');
})

router.get('/intj', function (req, res) {
  res.render('personalities/intj');
})

router.get('/intp', function (req, res) {
  res.render('personalities/intp');
})

router.get('/isfj', function (req, res) {
  res.render('personalities/isfj');
})

router.get('/isfp', function (req, res) {
  res.render('personalities/isfp');
})

router.get('/istj', function (req, res) {
  res.render('personalities/istj');
})

router.get('/istp', function (req, res) {
  res.render('personalities/istp');
})

module.exports = router;