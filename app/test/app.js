var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //log for every req and res
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');




var indexRouter = require('./routes/main');
var aboutRouter = require('./routes/about');
var shopRoutes = require('./routes/shop');
var adminData = require('./routes/admin');



var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');//used jade once but eventiallu used pug instead





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/admin', adminData);
app.use('/shop', shopRoutes);
app.use('/about', aboutRouter);





// catch 404 and forward to error handler
app.use(errorController.get404);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404');
});

module.exports = app;
