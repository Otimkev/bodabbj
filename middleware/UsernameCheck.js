const User = require('../models/user.models')

checkUsername = (req,res,next)=>{
 let check = User.findOne({username:req.body.username},(err,user)=>{
  if(err) return res.status(500).send({message:'Server error'})
   if(user){
     return res.status(403).send({message:'Username is already being used'})
    }
    if(!user){
      req.check = check;
    } return next()
 })


}






checkAdmin = (req,res,next)=>{
  User.findOne({role:{$eq:'admin'}},(err,user)=>{
    if(err) return res.status(500).send({message:'Server error'})
     if(user){
      return res.render('signin',{user:user})
     }else{ res.render('signin')}
   })
   next();
}

module.exports = checkUsername