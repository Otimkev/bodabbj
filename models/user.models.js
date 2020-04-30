const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const AdminSchema = new mongoose.Schema({
 username:String,
//  firstname:String,
lastname:String,
 currentDate:{
  type:String,
 },
 password:String,
 id:String,
 email:String,
 phone:Number,
 supervisor:String,
 workingdays:Number,
 dob:{
   type:String,
 },
 role:{
   type:String,
  enum:['admin','sales executive','supervisor']
 },
 //boda register
 nationality:String,
 nin:String,
 vehicle:{
   type:String,
   enum:['bodaboda','tukutuku']
 },
 ref_firstname:String,
 ref_lastname:String,
 ref_phone:String,
 ref_occupation:String,
 ref_dob:String,
 downpay:Number,
 marital_status:String,
 other_loans:String,
 stage_name:{
   type:String,
  //  enum:['lc1','lc3']
 },
 //extras
 balance:Number,
 next_pay:Date,
 customer_id:String,
 projection:String,
 salesname:String,
})
 AdminSchema.virtual('fullname').get(function(){
   return this.username+this.lastname
 });

 AdminSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
  done(err, isMatch);
  });
  };
 
AdminSchema.virtual('remainingBal').get(function(){
  let customer = this;
  if(customer.vehicle == 'bodaboda'){
    return customer.balance = 6000160-customer.downpay
  }else{
    return customer.balance = 7070160-customer.downpay
  }
})



AdminSchema.virtual('next').get(function(){
  let customer = this
  let date = new Date(customer.currentDate)
    var d = date.getDate();
    date.setMonth(date.getMonth() + +1);
     if (date.getDate() != d) {
      date.setDate(0);
     }
    return date;

})
 



const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;

