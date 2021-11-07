var createError = require('http-errors');
var express = require('express');
var path = require('path');
const sessions = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var mongo = require('mongodb');
var monk = require('monk');

var db = monk(process.env.MONGODB_HOST);


var indexRouter = require('./routes/index');
var loginRouter = require('./auths/login');
var registerRouter = require('./auths/register');
var resetRouter = require('./auths/reset');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));


// Make our db accessible to our router
//monk middleware
app.use(function(req,res,next){
  req.db = db;
  next();
});


app.use('/', indexRouter);
 app.use('/login', loginRouter);
 app.use('/register', registerRouter);
  app.use('/reset', resetRouter);


//handel erorr 404 when ask for get function dosen't exsist
  app.all('*', (req, res) => {
    return res.sendFile(path.join(__dirname + '/views/erorr_pages/404.html'));  });

  app.use(function(err, req, res, next) {
    if(err.status = 404){
      //handel erorr 404 when there a get function put the html in function dosen't exist 
      return res.sendFile(path.join(__dirname + '/views/erorr_pages/404.html'));
    }
    //handel erorr 500
    else if(err.status = 500){
      return res.sendFile(path.join(__dirname + '/views/erorr_pages/500.html'));
    }
  });
  

module.exports = app;
