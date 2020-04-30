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
exports.sales_list = async(req,res)=>{
  try{
User.find({role:{$in:'sales executive'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('supervisorList',{title:'Supervisor list',user:user})
})
  }catch(error){

  }
}

//show bodaboda numbers
exports.boda_list = async(req,res)=>{
  try{
User.find({vehicle:{$in:'bodaboda'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('bodaNo',{title:'Bodaboda Customers',user:user})
})
  }catch(error){

  }
}

//show tukutuku numbers
exports.tukutuku_list = async(req,res)=>{
  try{
User.find({vehicle:{$in:'tukutuku'}},(err,user)=>{
  if(err) return res.status(500).send({message:'server error'})
   if(user) return res.status(200).render('tukuNo',{title:'Tukutuku Customers',user:user})
})
  }catch(error){

  }
}

//show bodaboda list detail
exports.bodaDetailAdmin = async(req,res)=>{
  try{
    await User.findById(req.params.bodaId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.render('bodaDetail',{title:user.username,user:user})
    })
 
  }catch(error){
    console.log(error)
  }
}

//show tukutuku list detail
exports.tukuDetailAdmin = async(req,res)=>{
  try{
    await User.findById(req.params.tukuId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.render('tukuDetail',{title:user.username,user:user})
    })
 
  }catch(error){
    console.log(error)
  }
}