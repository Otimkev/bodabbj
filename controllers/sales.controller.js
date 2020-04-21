const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
var snn;

exports.salesPanel = async(req,res)=>{
try{
  snn = req.user;

await User.find({role:{$eq:'sales executive'}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('salesPanel',{title:`welcome`,user:user})
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

