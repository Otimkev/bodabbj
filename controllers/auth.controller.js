const User = require('../models/user.models')
const bcrypt = require('bcryptjs')



exports.signup = async(req,res)=>{
  try{
 let newUser = await new User(req.body)
 let hashpassword = bcrypt.hashSync(req.body.password,10)
  newUser.password = hashpassword
  newUser.save((err,user)=>{
    if(err) return res.status(500).send({message:'server error wtf'})
     if(user){
       return res.status(200).redirect('/api/auth/signin')
     }
  })
  }catch(error){
console.log(error)
  }
}

exports.get_signin = async(req,res)=>{
  try{
 res.status(200).render('signin')
  }catch(error){
    console.log(error)
  }

}

exports.get_signup = async(req,res)=>{
 res.render('signup')
}




