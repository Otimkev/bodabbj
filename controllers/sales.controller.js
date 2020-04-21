const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
const agenda = require('agenda')
const mongoose = require('mongoose')

var snn
exports.salesPanel = async(req,res)=>{
try{


snn = req.user
console.log(snn)
await User.find({salesname:{$eq:`${snn.username}`}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('salesPanel',{title:`welcome ${snn.username}`,user:user,})
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

//register sales
exports.registerSales = async(req,res)=>{
  try{
 let newUser = await new User(req.body)
 let hashpassword = bcrypt.hashSync(req.body.password,10)
  newUser.password = hashpassword
  newUser.save((err,user)=>{
    if(err) return res.status(500).send({message:'server error wtf'})
     if(user){
       return res.status(200).redirect('/api/user/sales_list')
     }
  })
  }catch(error){
console.log(error)
  }
}

//get sales reg
exports.salesList = async(req,res)=>{
  try{
    await User.find({role:{$eq:'sales executive'}},(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
      if(user) return res.status(200).render('salesList',{title:'Sales Executive List',user:user})
    })
  }catch(error){
    console.log(error)
  }
}

//get detail view of sales
exports.salesDetail = async(req,res)=>{
  try{
    await User.findById(req.params.salesId,(err,user)=>{
      if(err) res.status(500).send({message:'server error'})
       if(user) res.status(200).render('salesDetail',{title:user.username,user:user})
    })
  }catch(error){
    console.log(error)
  }
}


//get customer registration
exports.customerReg = async(req,res)=>{
  snn = req.user;
  console.log(snn)
  try{
    await User.find({role:{$eq:'sales execuitves'}},(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.render('customerReg',{title:'Customer Registration',snn:snn})
    })
 
  }catch(error){
    
  }
}

//add customer
exports.customerRegister = async(req,res)=>{
  try{
 let newUser = await new User(req.body)
  newUser.save((err,user)=>{
    if(err) return res.status(500).send({message:'server error wtf'})
     if(user){
       return res.status(200).redirect('/api/user/salespanel')
     }
  })
  }catch(error){
console.log(error)
  }
}

//get cutomer detail
exports.customerDetail = async(req,res)=>{
  try{
    await User.findById(req.params.customerId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.render('customerDetail',{title:'detail',user:user})
    })
 
  }catch(error){
    console.log(error)
  }
}

//get customer edit
exports.customerEdit = async(req,res)=>{
  try{
    await User.findById(req.params.customerId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.render('customerEdit',{title:user.username,user:user})
    })
 
  }catch(error){
    console.log(error)
  }
}

//post customer edit
exports.customerEditUpdate = async(req,res)=>{
  try{
    await User.findByIdAndUpdate(req.params.customerId,req.body,{new:true},(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.status(200).redirect(`/api/user/customer/${user._id}`)
    })
 
  }catch(error){
    console.log(error)
  }
}

//delete customer
exports.customerDelete = async(req,res)=>{
  try{
    await User.findByIdAndRemove(req.params.customerId,(err,user)=>{
      if(err) return res.status(500).send({message:'server error'})
       if(user) return res.redirect('..')
    })
 
  }catch(error){
    console.log(error)
  }
}