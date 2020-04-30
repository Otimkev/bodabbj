const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

exports.superPanel = async(req,res)=>{
try{
await User.find({role:{$all:['sales executive']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('supervisorPanel',{user:user})
  }
})
}catch(error){
 console.log(error)
}
}
//get supervisor registration form
exports.addsupervisor = async(req,res)=>{
  try{
res.status(200).render('supervisorReg',{title:'Supervisor Registration'})
  }catch(error){
    console.log(error)
  }
}

//get list of all supervisors
exports.supervisor_list = async(req,res)=>{
  try{
User.find({role:{$in:'supervisor'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('supervisorList',{title:'Supervisor list',user:user})
})
  }catch(error){

  }
}

//register supervisor
exports.registerSuper = async(req,res)=>{
  try{
 let newUser = await new User(req.body)
 let hashpassword = bcrypt.hashSync(req.body.password,10)
  newUser.password = hashpassword
  newUser.save((err,user)=>{
    if(err) return res.status(500).send({message:'server error wtf'})
     if(user){
       return res.status(200).redirect('/api/user/supervisor_list')
     }
  })
  }catch(error){
console.log(error)
  }
}

//get detail view of supervisor
exports.supervisorDetail = async(req,res)=>{
  try{
    await User.findById(req.params.superId,(err,user)=>{
      if(err) res.status(500).send({message:'server error'})
       if(user) res.status(200).render('supervisorDetail',{title:user.username,user:user})
    })
  }catch(error){
    console.log(error)
  }
}

//supervisor edit
exports.superEditUpdate = async(req,res)=>{
  try{
    await User.findByIdAndUpdate(req.params.superId,req.body,{new:true},(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.status(200).redirect('/api/user/supervisor_list')
    })
 
  }catch(error){
    console.log(error)
  }
}

//supervisor delete
exports.superDelete = async(req,res)=>{
  try{
    await User.findByIdAndRemove(req.params.superId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.redirect('/api/user/supervisor_list')
    })
 
  }catch(error){
    console.log(error)
  }
}