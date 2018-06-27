const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const Twit = require('twit');
const app = express();

const spotify_modelRouter = require('./routes/spotify_model');
const twitter_modelRouter = require('./routes/twitter_model')


const spotifyOauthRouter = require('./routes/spotifyOauth');
//const twitterSearchRouter = require('./routes/twitterSearch');



app.use(express.static(__dirname + '/public'))
    .use(cors())
    .use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/spotify_model', spotify_modelRouter);
app.use('/twitter_model', twitter_modelRouter);

app.use('/', spotifyOauthRouter);
//app.use('/twitterSearch', twitterSearchRouter);


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
