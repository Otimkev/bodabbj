const express = require('express')
const router = express.Router()
const CheckAdmin = require('../middleware/UsernameCheck')
const CheckUsername = require('../middleware/UsernameCheck')
const controller = require('../controllers/auth.controller')
const control = require('../controllers/admin.controller')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
var setUpPassport = require('../middleware/passport')


//signup
router.get('/signup',controller.get_signup)
router.post('/signup',[CheckUsername],controller.signup)

//signin
router.get('/signin',[CheckAdmin],controller.get_signin)
router.post("/signin", passport.authenticate("login",{
 failureRedirect:'/api/auth/signin',
 successRedirect:'/api/auth/check'
},));

 router.get('/check',(req,res)=>{
  let user = req.user;
  if(user){
   if(user.role == 'admin') return res.status(200).redirect('/api/user/adminpanel')
   if(user.role == 'sales executive') return res.status(200).send({message:'hello sales executive'})
   if(user.role == 'supervisor') return res.status(200).send({message:'hello supervisor'})
    else{
return res.status(200).send({message:'fuck'})
    }
  }
  
 })

//singout
router.get('/logout',(req,res)=>{
 req.logout();
 res.redirect('/api/auth/sigin')
})

router.use(function(req, res, next) {
 res.locals.currentUser = req.user;
 next();
 });

//ensure authenticated
function ensureAuthenticated(req,res,next){
 if(req.isAuthenticated()){
  next()
 }else{
  res.redirect('/login')
 }
}

module.exports = router;