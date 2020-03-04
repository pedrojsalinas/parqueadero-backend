var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser')
var empresasRouter = require('./lib/frameworks_drivers/webserver/empresas');
var tarjetasRouter = require('./lib/frameworks_drivers/webserver/tarjetas');
var serviciosRouter = require('./lib/frameworks_drivers/webserver/servicios_adicionales');
var pagosRouter = require('./lib/frameworks_drivers/webserver/pagos');
var usuariosRouter = require('./lib/frameworks_drivers/webserver/usuarios');
var reservasRouter = require('./lib/frameworks_drivers/webserver/reservas');
var espaciosRouter = require('./lib/frameworks_drivers/webserver/espacios');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(cors());

// parse application/json
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/empresas', empresasRouter);
app.use('/servicios', serviciosRouter);
app.use('/tarjetas', tarjetasRouter);
app.use('/pagos', pagosRouter);
app.use('/usuarios', usuariosRouter);
app.use('/reservas', reservasRouter);
app.use('/espacios', espaciosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
