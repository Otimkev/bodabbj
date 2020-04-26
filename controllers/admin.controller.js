const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
exports.adminPanel = async(req,res)=>{
try{


await User.find({role:{$in:['sales executive','supervisor']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
    User.countDocuments({role:{$in:'supervisor'}},(err,num)=>{
      if(err) console.log(err)
       User.countDocuments({role:{$in:'sales executive'}},(err,num1)=>{
         if(err) console.log(err)
          User.countDocuments({vehicle:{$in:'bodaboda'}},(err,boda)=>{
            if(err) console.log(err)
            User.countDocuments({vehicle:{$in:'tukutuku'}},(err,tuku)=>{
              if(err) console.log(err)
              return res.status(200).render('adminPanel',{title:'Admin panel',user:user,num:num,num1:num1,boda:boda,tuku:tuku})
            })
          })
       })
    })   
  }
})
}catch(error){
 console.log(error)
}
}


//Admin profile
exports.adminRgister = async(req,res)=>{
  try{
res.status(200).render('signup',{title:'Register Admin'})
  }catch(error){
    console.log(error)
  }
}

exports.profileDetail = async(req,res)=>{
  try{
    await User.findById(req.params.adminId,(err,user)=>{
      if(err) res.status(500).send({message:'server error fuck'})
       if(user) res.status(200).render('adminRegister',{title:user.username,user:user})
    })
  }catch(error){
    console.log(error)
  }
}



//get list of all supervisors
exports.sales_lis = async(req,res)=>{
  try{
User.find({role:{$in:'sales executive'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('supervisorList',{title:'Supervisor list',user:user})
})
  }catch(error){

  }
}

