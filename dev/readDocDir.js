#!/usr/bin/env node

var fs   = require('fs'),
	path = require('path');

var p = 'data/pdfs/';

fs.readdir(p, function (err, files) {
	if (err) throw err;
	console.log(files);

	files.map(function (file) { 
		return path.join(p, file);
	})
	.filter(function (file) {
		return fs.statSync(file).isFile();
	})
/*	.filter(function (ext) {
		return /\.pdf/.test(ext);
	})*/
	.forEach(function (file) {
		//console.log("%s", file, path.extname(file));
	});

});