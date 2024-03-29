
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var patternsRouter = require('./routes/patterns');
var projectsRouter = require('./routes/projects');
var categoriesRouter = require('./routes/categories');
var craftsRouter = require('./routes/crafts');
var imagesRouter = require('./routes/images');
const jwt = require('jsonwebtoken'); 

var app = express();
app.use(cors());


app.use('/static', express.static(path.join(__dirname, 'public/images')));
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patterns', patternsRouter);
app.use('/projects', projectsRouter);
app.use('/categories', categoriesRouter);
app.use('/crafts', craftsRouter);
app.use('/images', imagesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // console.log('AAA'+err)
  // console.log('AAA'+path.join(__dirname, 'public'))  
  res.render('error');
});

module.exports = app;
