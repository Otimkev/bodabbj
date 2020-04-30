/**
 * Defining a function that validates
 * the supervisor Registration form
 */

let supervisorValidation = function(){
 let fname = document.myform1.username;
 let lname = document.myform1.lastname;
 let currentDate = document.myform1.currentDate;
 let pwd = document.myform1.password;
 let pwdCheck = document.myform1.password2;
 let id = document.myform1.id;
 let phone = document.myform1.phone;
 let workingdays = document.myform1.workingdays;
 let dob = document.myform1.dob;


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
  document.getElementById('parasp1').innerHTML =''
  input.style.border='1px solid green'
  return true
 }
 else{
 
  input.focus()
  document.getElementById('parasp1').innerHTML = 'First Name must have alphbet characters only'
  input.style.border='1px solid red'
  input.focus();
  return false
 }
}

function Lastname(input){
 var letters = /^[A-Za-z]+$/;
 if(input.value.match(letters)){
  document.getElementById('parasp2').innerHTML =''
  input.style.border='1px solid green'
  return true
 }
 else{
 
  input.focus()
  document.getElementById('parasp2').innerHTML = 'First Name must have alphbet characters only'
  input.style.border='1px solid red'
  input.focus();
  return false
 }
}

function CurrentDate(input)
{
if(input.value == "")
{
  document.getElementById('parasp3').innerHTML = 'Please select the current date'
  input.style.border='1px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('parasp3').innerHTML = ''
  input.style.border='1px solid green'
return true;
}
}

function Password(input,a,b)
{
if (input.value.length == 0 || input.value.length <=a || input.value.length < b)
{
 document.getElementById('parasp4').innerHTML = 'Password should no be empty/ length be between 6 and 12'
 input.style.border='1px solid red'
input.focus();
return false;
}
 document.getElementById('parasp4').innerHTML = ''
 input.style.border='1px solid green'
return true;
}

function PasswordCheck(input){
 if(input.value === document.myform1.password.value){
  document.getElementById('parasp5').innerHTML = ''
  input.style.border='1px solid green'
 return true;
 }
 document.getElementById('parasp5').innerHTML = 'Passwords do not match'
 input.style.border='1px solid red'
 input.focus();
}


function IdCheck(input,a,b)
{
if (input.value.length == 0 || input.value.length <=a || input.value.length < b)
{
 document.getElementById('parasp6').innerHTML = 'Id should no be empty/ length be between 6 and 12'
 input.style.border='1px solid red'
input.focus();
return false;
}
 document.getElementById('parasp6').innerHTML = ''
 input.style.border='1px solid green'
return true;
}

function Phone(input)
{ 
var letters = /^[0-9]+$/;
if(input.value.match(letters))
{
 document.getElementById('parasp7').innerHTML = ''
 input.style.border='1px solid green'
return true;
}
document.getElementById('parasp7').innerHTML = 'Phone Number should be numeric characters only'
input.style.border='1px solid red'
input.focus();
return false;
}

function WorkingDays(input)
{ 
var letters = /^[0-9]+$/;
if(input.value.match(letters))
{
 document.getElementById('parasp8').innerHTML = ''
 input.style.border='1px solid green'
return true;
}
document.getElementById('parasp8').innerHTML = 'Working days should be numeric characters only'
input.style.border='1px solid red'
input.focus();
return false;
}

function DoB(input)
{
if(input.value == "")
{
  document.getElementById('parasp9').innerHTML = 'Please select date of birth'
  input.style.border='1px solid red'
input.focus();
return false;
}
else
{
  document.getElementById('parasp9').innerHTML = ''
  input.style.border='1px solid green'
return true;
}
}

