const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

exports.salesPanel = async(req,res)=>{
try{
await User.find({role:{$all:['sales executive','supervisor']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('salesPanel',{user:user})
  }
})
}catch(error){
 console.log(error)
}
}