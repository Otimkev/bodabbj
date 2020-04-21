const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Agenda = require('agenda');

mongoose.set('useUnifiedTopology', true);

const connectionString = `mongodb://127.0.0.1/applesdb`;

const agenda = new Agenda({
    db: {address: connectionString, collection: 'ourScheduleCollectionName'},
    processEvery: '2 seconds'
});

const AdminSchema = new mongoose.Schema({
 username:String,
//  firstname:String,
lastname:String,
 currentDate:{
  type:Date,
  default:Date.now()
 },
 password:String,
 id:String,
 email:String,
 phone:Number,
 supervisor:String,
 workingdays:Number,
 dob:{
   type:Date,
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


AdminSchema.virtual('dewdate').get(function(){
  agenda.define('nextPayReminder', {priority: 'high', concurrency: 10}, async job => {
    //const {to} = job.attrs.data;
    await User.send({

    });
  });
  
  (async function() {
    const weeklyReport = agenda.create('send email report');
    await agenda.start();
    await weeklyReport.repeatEvery('12 seconds').save();
  })();
  
})
const Admin = mongoose.model('Admin',AdminSchema);
module.exports = Admin;

