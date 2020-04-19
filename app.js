const express = require('express');
const mongoose = require('mongoose');
const session  = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyparser = require('body-parser')
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pug = require('pug')
const app = express();
const path = require('path')
const methodOveride = require('method-override')
const bcrypt = require('bcryptjs')

//public files
app.use(express.static(path.join(__dirname, 'public')));
//setting up rendering engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//method override
app.use(methodOveride('_method',{methods:['POST','GET']}))

//connnecting to mongodb
mongoose.set('useNewUrlParser','true');
mongoose.set('useUnifiedTopology','ture')
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_STRING);

let db = mongoose.connection;
db.on('error',console.error.bind(console, 'faild'));
db.once('open',()=>{
 console.log('connection success')
})


const User = require('./models/user.models')

//session setup
const sessionStore = new MongoStore({ mongooseConnection: mongoose.connection, collection: 'sessions' })
//const sesionStore = new mongoStore({mongooseConnection:connections,collection:"sessions"})


app.use(session({
 secret:'cats',
 resave:true,
 saveUninitialized:true,
 cookie: {
  maxAge: 1000 * 30
}
}));
app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser(function(user, done) {
  done(null, user._id);
  }); 
  passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
  done(err, user);
  });
  });

  passport.use("login", new LocalStrategy(
    function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) {
    return done(null, false,
    { message: "No user has that username!" });
    }
    user.checkPassword(password, function(err, isMatch) {
    if (err) { return done(err); }
    if (isMatch) {
    return done(null, user);
    
    } else {
    return done(null, false,
    { message: "Invalid password." });
    
    }
    });
    });
    }))


//import routes
const authRoute = require('./routes/auth.routes')
const userRoute = require('./routes/user.routes')

//using routes
app.use('/api/auth/',authRoute)
app.use('/api/user/',userRoute)




// Logout form
app.get('/logout', (req, res) => {
  if (req.session) {
      req.session.destroy(function (err) {
          if (err) {
          } else {
             return res.redirect('/login');
          }
      })
  }  
})






PORT = process.env.PORT || 2001;

app.listen(PORT,()=>{
 console.log(`listening on port ${PORT}`)
})
