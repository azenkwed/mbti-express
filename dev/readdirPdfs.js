#!/usr/bin/env node

var readDir   = require('readdir');

console.log(readDir.readSync('data/pdfs/', ['**.pdf']));

