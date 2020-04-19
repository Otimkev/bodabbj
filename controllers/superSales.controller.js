const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

exports.superPanel = async(req,res)=>{
try{
await User.find({role:{$all:['sales Exec','supervisor']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('adminPanel',{user:user})
  }
})
}catch(error){
 console.log(error)
}
}