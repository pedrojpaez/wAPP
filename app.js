/*jshint node:true*/


// This application uses express as it's web server
// for more info, see: http://expressjs.com
var express = require('express');



/*var StrategyGoogle = require('passport-google-openidconnect').Strategy;
passport.use(new StrategyGoogle({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  function(iss, sub, profile, accessToken, refreshToken, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));*/

// create a new express server
var app = express();
app.use(express.static('public'));
// serve the files out of ./public as our main files

app.get('/', function (req, res) {
    //res.send('hola todos');
    res.redirect('http://127.0.0.1:5000/cents');
  //res.render('home', {title: websiteTitle.getTitle()});
});

//app.get('/login', fucntion(req, res))

// start server on the specified port and binding host
app.listen(8010, function() {

	// print a message when the server starts listening
  console.log("server starting on localhost: 8010");
});