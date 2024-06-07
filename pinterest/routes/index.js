var express = require('express');
var router = express.Router();
const userModel = require('./users')
const passport = require('passport');
const localStrategy = require("passport-local")
const upload = require("./multer")

passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
  res.render('profile', {user});
});

router.get('/feed', isLoggedIn, function(req, res, next) {
  res.render('feed');
});

router.post('/upload', upload.single("file"), function(req, res, next) {
  if(!req.file){
    return res.status(404).send("No files were given")
  };
  res.send("File uploaded sucessfully")
});

router.post('/register', async function(req, res) {
  let { username, email, fullname } = req.body;
  const userdata = new userModel({ username, email, fullname });
  userModel.register(userdata, req.body.password)
  .then(function(){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/profile')
    })
  })
});

router.get('/login', function(req, res) {
  res.render('login', {error: req.flash('error')})
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
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
