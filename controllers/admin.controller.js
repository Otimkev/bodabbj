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


//get supervisor reg
exports.addsupervisor = async(req,res)=>{
  try{
res.status(200).render('supervisorReg',{title:'Supervisor Registration'})
  }catch(error){
    console.log(error)
  }
}

//get list of all superviosrs
exports.supervisor_list = async(req,res)=>{
  try{
User.find({role:{$in:'supervisor'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('supervisorList',{title:'Supervisor list',user:user})
})
  }catch(error){

  }
}

//get list of all supervisors
exports.sales_list = async(req,res)=>{
  try{
User.find({role:{$in:'supervisor'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('salesList',{title:'Supervisor list',user:user})
})
  }catch(error){

  }
}