const User = require('../models/user.models')
const bcrypt = require('bcryptjs')

exports.superPanel = async(req,res)=>{
try{
await User.find({role:{$all:['sales Exec','supervisor']}},(err,user)=>{
 if(err) return res.status(500).send({message:'server error'})
  if(user){
   return res.status(200).render('adminPanel',{user:user})
  }
})
}catch(error){
 console.log(error)
}
}

agenda.define('send email report', {priority: 'high', concurrency: 10}, async job => {
  const {to} = job.attrs.data;
  await emailClient.send({
    to,
    from: 'example@example.com',
    subject: 'Email Report',
    body: '...'
  });
});

(async function() {
  const weeklyReport = agenda.create('send email report', {to: 'example@example.com'});
  await agenda.start();
  await weeklyReport.repeatEvery('1 week').save();
})();