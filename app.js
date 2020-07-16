var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
let empRoute=require('./routes/routeEmp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/emp',empRoute);

/// catch 404 and forwarding to error handler
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



let mongoose=require('mongoose');
let dbImport=require('./config/db');
let opts={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
};

mongoose.connect(dbImport.dbUrl,opts,async(err)=>
{

    if(err)
    {
        console.log('error in mongodb connection\t',err);
    }
    else 
    {
        console.log('=================================')
        console.log(`mongodb url: ${dbImport.dbUrl}`);
        console.log('=================================')
    }

});

let port=5600;
app.listen(port,async(err)=>
{
    if(!err)
    {
        console.log('=================================')
        console.log(`Server is running on port ${port}`);
        console.log('=================================')
    }
    else if(err)
    {
        console.error(err);
    }

});


module.exports = app;
