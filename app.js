var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//db
const db = require('./db')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tesRouter = require('./routes/tes')
var crudRouter = require('./routes/crud')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tes',tesRouter)
app.use('/crud',crudRouter)

module.exports = app;
