var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//db
// const db = require('./domain/repositories/repository-mongo')

var crudRouter = require('./routes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// db.db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api/v1', crudRouter)

module.exports = app;