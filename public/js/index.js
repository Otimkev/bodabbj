function validate(){
  let firstname = document.myform.username
  let lastname = document.myform.lastname
  let current_date = document.myform.currentDate;
  let phone = document.myform.phone
  let nationality = document.myform.nationality
  let dob = document.myform.dob
  let nin = document.myform.nin
  let vehicle = document.myform.vehicle
  let ref_firstname = document.myform.ref_firstname
  let ref_lastname = document.myform.ref_lastname
  let ref_phone = document.myform.ref_phone
  let ref_occupation = document.myform.ref_occupation
  let ref_dob = document.myform.ref_dob
  let downpay = document.myform.downpay
  let other_loans = document.myform.other_loans
  let stage_name = document.myform.stage_name
  let generateId = document.myform.id

 
  
  if(Firstname(firstname)){
   if(Lastname(lastname)){
     if(CurrentDate(current_date)){
      if(Phone(phone)){
        if(Nationality(nationality)){
         if(DateOfBirth(dob)){
          if(NIN(nin)){
           if(Vehicle(vehicle)){
            if(Ref_fname(ref_firstname)){
             if(Ref_lname(ref_lastname)){
              if(Ref_phone(ref_phone)){
               if(Ref_work(ref_occupation)){
                if(Ref_dob(ref_dob)){
                  if(DownPay(downpay)){
                    if(Other_loans(other_loans)){
                      if(Stage_name(stage_name)){
                         if(GenerateId(generateId)){
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
  
  function Firstname(input,para1){
   var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters)){
    input.style.border='2px solid green'
    document.getElementById('para1').innerHTML =''
    return true
   }
   else{
    document.getElementById('para1').innerHTML = 'First Name must have alphanumeric characters only'
    input.style.border='2px solid red'
    input.focus()
    return false
   }
  }
  
  function Lastname(input){
   var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters)){
     input.style.border='2px solid green'
     document.getElementById('para2').innerHTML = ''
    return true
   }
   else{
    document.getElementById('para2').innerHTML = 'Last Name must have alphanumeric characters only'
    input.style.border='2px solid red'
    input.focus()
    return false
   }
  }
  
  function CurrentDate(input)
  {
  if(input.value == "")
  {
  document.getElementById('para3').innerHTML = 'Select Current Date from the list'
  input.style.border='2px solid red'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para3').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  }


  
  function Phone(input)
  { 
  var letters = /^[0-9]+$/;
  if(input.value.match(letters))
  { 
    input.style.border='2px solid green'
    document.getElementById('para4').innerHTML = ''
  return true;
  }
  else
  {
    document.getElementById('para4').innerHTML = 'Phone No must be numeric characters only and must be 10 digits'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }}
  
  
  function Nationality(input)
  {
  if(input.value == "Default")
  {
  document.getElementById('para5').innerHTML = 'Select your country from the list'
  input.style.border='2px solid red'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para5').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  }
  
  
  function DateOfBirth(input)
  {
  if(input.value == "")
  {
    document.getElementById('para6').innerHTML = 'Input Date of birth from the list'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }
  else
  {
    document.getElementById('para6').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  }
  
  
  function NIN(input)
  {
  if(input.value == "")
  {
    document.getElementById('para7').innerHTML = 'Input NIN number'
    input.style.border='2px solid red'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para7').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  }
  
  
  function Vehicle(input)
  {
  if(input.value == "Default")
  {
    document.getElementById('para8').innerHTML = 'Select vehicle from the list'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }
  else
  {
    document.getElementById('para8').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  }
  
  
  function Ref_fname(input)
  { 
   var letters = /^[A-Za-z]+$/;
  if(input.value.match(letters))
  {
    document.getElementById('para9').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  else
  {
    document.getElementById('para9').innerHTML = 'First Name must have alphanumeric characters only'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }}
  
  
  function Ref_lname(input)
  { 
   var letters = /^[A-Za-z]+$/;
  if(input.value.match(letters))
  {
    document.getElementById('para10').innerHTML = ''
    input.style.border='2px solid green'
  return true;
  }
  else
  {
    document.getElementById('para10').innerHTML = 'Last Name must have alphanumeric characters only'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }}
  
  
  function Ref_phone(input)
  { 
  var letters =  /^[0-9]+$/;
  if(input.value.match(letters))
  {
    document.getElementById('para11').innerHTML =''
    input.style.border='2px solid green'
  return true;
  }
  else
  {
    document.getElementById('para11').innerHTML = 'Referee Phone No. must have alphanumeric characters only'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }}
  
  
  function Ref_work(input)
  { 

  if(input.value == '')
  {
    document.getElementById('para12').innerHTML = 'Fill in occupation'
    input.style.border='2px solid red'
  input.focus();
  return false;
  }
  else
  {
  document.getElementById('para12').innerHTML = ''
  input.style.border='2px solid green'
  return true
  }}
  

  function Ref_dob(input)
  { 
    if(input.value == '')
  {
    document.getElementById('para13').innerHTML = 'Select date of birth from the list'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }
  else
  {
    document.getElementById('para13').innerHTML = ''
    input.style.border='2px solid green'
  return true
  }}
  
  function DownPay(input)
  { 
    if(input.value == 850000 || input.value == 950000)
  {
    document.getElementById('para14').innerHTML = ''
    input.style.border='2px solid green'
  return true
  }
  else
  {
    document.getElementById('para14').innerHTML = '850,000 for bodaboda and 950,000 for tukutuku'
    input.style.border='2px solid red'
    input.focus();
  return false;

  }}

  
  function Other_loans(input)
  { 
  
  if(input.value == '')
  {
    document.getElementById('para16').innerHTML = 'Fill in Other loans details'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }
  else
  {
    document.getElementById('para16').innerHTML = ''
    input.style.border='2p solid green'

  return true
  }}
  
  
  function Stage_name(input)
  { 
  
  if(input.value == 'Default')
  {
    document.getElementById('para17').innerHTML = 'Select Stage Name from the list'
    input.style.border='2px solid red'
    input.focus();
  return false;
  }
  else
  {
    document.getElementById('para17').innerHTML = ''
    input.style.border='2px solid green'
  return true
  }}


let button = document.getElementById('generate')
let input = document.getElementById('generateId')
let stageName = document.myform.stage_name;
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
 button.addEventListener('click',()=>{

input.value = fname.value + lname.value + new Date().getFullYear().toString() + new Date().getMonth().toString() + stageName.value
 })


  function GenerateId(input)
  { 
  
  if(input.value == '')
  {
    document.getElementById('para18').innerHTML = 'Click on generate button to generate customer id'
    input.style.border='2px solid red'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para18').innerHTML = ''
    input.style.border='2px solid green'
  return true
  }}