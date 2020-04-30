/**
 * Defining a function that validates
 * the sales Registration form
 */

let salesValidation = function(){
 let fname = document.myform.username;
 let lname = document.myform.lastname;
 let currentDate = document.myform.currentDate;
 let pwd = document.myform.password;
 let pwdCheck = document.myform.password2;
 let id = document.myform.id;
 let phone = document.myform.phone;
 let workingdays = document.myform.workingdays;
 let dob = document.myform.dob;


 if(Firstname(fname)){
  if(Lastname(lname)){
   if(CurrentDate(currentDate)){
    if(Password(pwd,6,12)){
     if(PasswordCheck(pwdCheck)){
      if(IdCheck(id,6,12)){
       if(Phone(phone)){
        if(WorkingDays(workingdays)){
         if(DoB(dob)){
          return true
         }
        }
       }
      }
     }
    }
   }
  }
 }
 return false
}

function Firstname(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters)){
  document.getElementById('paras1').innerHTML =''
  input.style.border='1px solid green'
  return true
 }
 else{
 
  input.focus()
  document.getElementById('paras1').innerHTML = 'First Name must have alphbet characters only'
  input.style.border='1px solid red'
  input.focus();
  return false
 }
}

function Lastname(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters)){
  document.getElementById('paras2').innerHTML =''
  input.style.border='1px solid green'
  return true
 }
 else{
 
  input.focus()
  document.getElementById('paras2').innerHTML = 'First Name must have alphbet characters only'
  input.style.border='1px solid red'
  input.focus();
  return false
 }
}

function CurrentDate(input)
{
if(input.value == "")
{
  document.getElementById('paras3').innerHTML = 'Please select the current date'
  input.style.border='1px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('paras3').innerHTML = ''
  input.style.border='1px solid green'
return true;
}
}

function Password(input,a,b)
{
if (input.value.length == 0 || input.value.length <=a || input.value.length < b)
{
 document.getElementById('paras4').innerHTML = 'Password should no be empty/ length be between 6 and 12'
 input.style.border='1px solid red'
input.focus();
return false;
}
 document.getElementById('paras4').innerHTML = ''
 input.style.border='1px solid green'
return true;
}

function PasswordCheck(input){
 if(input.value === document.myform.password.value){
  document.getElementById('paras5').innerHTML = ''
  input.style.border='1px solid green'
 return true;
 }
 document.getElementById('paras5').innerHTML = 'Passwords do not match'
 input.style.border='1px solid red'
 input.focus();
}


function IdCheck(input,a,b)
{
if (input.value.length == 0 || input.value.length <=a || input.value.length < b)
{
 document.getElementById('paras6').innerHTML = 'Id should no be empty/ length be between 6 and 12'
 input.style.border='1px solid red'
input.focus();
return false;
}
 document.getElementById('paras6').innerHTML = ''
 input.style.border='1px solid green'
return true;
}

function Phone(input)
{ 
var letters = /^[0-9]+$/;
if(input.value.match(letters))
{
 document.getElementById('paras7').innerHTML = ''
 input.style.border='1px solid green'
return true;
}
document.getElementById('paras7').innerHTML = 'Phone Number should be numeric characters only'
input.style.border='1px solid red'
input.focus();
return false;
}

function WorkingDays(input)
{ 
var letters = /^[0-9]+$/;
if(input.value.match(letters))
{
 document.getElementById('paras8').innerHTML = ''
 input.style.border='1px solid green'
return true;
}
document.getElementById('paras8').innerHTML = 'Working days should be numeric characters only'
input.style.border='1px solid red'
input.focus();
return false;
}

function DoB(input)
{
if(input.value == "")
{
  document.getElementById('paras9').innerHTML = 'Please select date of birth'
  input.style.border='1px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('paras9').innerHTML = ''
  input.style.border='1px solid green'
return true;
}
}

