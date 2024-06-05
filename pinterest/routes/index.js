var express = require('express');
var router = express.Router();
const userModel = require('./users')
const passport = require('passport');
const localStrategy = require("passport-local")

passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  res.render('profile');
});

router.post('/register', function(req, res) {
  const { username, email, fullname } = req.body;
  const userdata = new userModel({ username, email, fullname });
  userModel.register(userdata, req.body.password)
  .then(function(){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/profile')
    })
  })
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/profile',
  failureRedirect: '/'
}), function(req, res) { 
});

router.get('/logout', function(req,res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/')
}

module.exports = router;
