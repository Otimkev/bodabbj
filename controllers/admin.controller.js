const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

exports.adminPanel = async(req,res)=>{
try{
await User.find({role:{$in:['sales executive','supervisor']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
    console.log(user)
   return res.status(200).render('adminPanel',{title:'Admin panel',user:user})
  }
})
}catch(error){
 console.log(error)
}
}
//get sales reg
exports.addSales = async(req,res)=>{
  try{
    await User.find({role:{$all:'supervisor'}},(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
      if(user) return res.status(200).render('salesReg',{title:'Sales Executive Registration',user:user})
    })
  }catch(error){
    console.log(error)
  }
}

//get supervisor reg
exports.addsupervisor = async(req,res)=>{
  try{
res.status(200).render('supervisorReg',{title:'Supervisor Registration'})
  }catch(error){
    console.log(error)
  }
}

