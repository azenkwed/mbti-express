require('newrelic')
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logfmt = require('logfmt');

var routes = require('./routes/index');
var mbtis  = require('./routes/mbtis');
var admin  = require('./routes/admin');
var docs  = require('./routes/docs');
var personalities  = require('./routes/personalities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/foundation')));
app.use(logfmt.requestLogger());

// ROUTES
app.use('/', routes)
app.use('/mbtis', mbtis);
app.use('/admin', admin);
app.use('/docs', docs);
app.use('/personalities', personalities);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.locals.ucfirst = function(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
};
app.locals.toUpperCase = function(value){
    return value.toUpperCase();
};
app.locals.toLowerCase = function(value){
    return value.toLowerCase();
};

module.exports = app;