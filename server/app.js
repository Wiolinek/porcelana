var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var offersRouter = require('./routes/offers');
var recommendationsRouter = require('./routes/recommendations');
var categoriesRouter = require('./routes/categories');
var shopFooterRouter = require('./routes/shop_footer');
var mainMenuRouter = require('./routes/main_menu');
var deliveryOptionsRouter = require('./routes/delivery_options');

var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/offers', offersRouter);
app.use('/recommendations', recommendationsRouter);
app.use('/categories', categoriesRouter);
app.use('/shop_footer', shopFooterRouter);
app.use('/main_menu', mainMenuRouter);
app.use('/delivery_options', deliveryOptionsRouter);


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
  res.render('error');
});

module.exports = app;
