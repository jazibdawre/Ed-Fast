var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var passport = require('passport');
const cors = require('cors');

//Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRouter');
var studentsRouter = require('./routes/studentRouter');
var professorsRouter = require('./routes/professorRouter');
var coursesRouter = require('./routes/courseRouter');
var videoRouter = require('./routes/videoRouter');

//MongoDB
var config = require('./config/mongodb');
const mongoose = require('mongoose');

const url = config.mongoUrl;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connect.then(
  (db) => {
    console.log('Connected to Mongo Database!\n');
  },
  (err) => {
    console.log(err);
  }
);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(passport.initialize()); //Authentication

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);
app.use('/professors', professorsRouter);
app.use('/courses', coursesRouter);
app.use('/course/:id', videoRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
