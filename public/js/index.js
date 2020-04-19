function validate(){
  let firstname = document.myform.username
  let lastname = document.myform.lastname
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
  let other_loans = document.myform.other_loans
  let stage_name = document.myform.stage_name


 
  
  if(Firstname(firstname)){
   if(Lastname(lastname)){
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
              if(Other_loans(other_loans)){
               if(Stage_name(stage_name)){
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
  
  return false
  }
  
  function Firstname(input,para1){
   var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters)){
    document.getElementById('para1').innerHTML =''
    return true
   }
   else{
   
    input.focus()
    document.getElementById('para1').innerHTML = 'First Name must have alphanumeric characters only'
    return false
   }
  }
  
  function Lastname(input){
   var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters)){
     document.getElementById('para2').innerHTML = ''
    return true
   }
   else{
    document.getElementById('para2').innerHTML = 'Last Name must have alphanumeric characters only'
    input.focus()
    return false
   }
  }
  
  function Phone(uadd)
  { 
  var letters = /^[0-9a-zA-Z]+$/;
  if(uadd.value.match(letters))
  {
    document.getElementById('para4').innerHTML = ''
  return true;
  }
  else
  {
    document.getElementById('para4').innerHTML = 'Phone No must be numeric characters only'
  uadd.focus();
  return false;
  }}
  
  
  function Nationality(ucountry)
  {
  if(ucountry.value == "Default")
  {
  document.getElementById('para5').innerHTML = 'Select your country from the list'
  ucountry.focus();
  return false;
  }
  else
  {
    document.getElementById('para5').innerHTML = ''
  return true;
  }
  }
  
  
  function DateOfBirth(input)
  {
  if(input.value == "")
  {
    document.getElementById('para6').innerHTML = 'Input your Date of birth from the list'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para6').innerHTML = ''
  return true;
  }
  }
  
  
  function NIN(input)
  {
  if(input.value == "")
  {
    document.getElementById('para7').innerHTML = 'Input NIN number'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para7').innerHTML = ''
  return true;
  }
  }
  
  
  function Vehicle(input)
  {
  if(input.value == "Default")
  {
    document.getElementById('para8').innerHTML = 'Select vehicle from the list'
  input.focus();
  return false;
  }
  else
  {
    document.getElementById('para8').innerHTML = ''
  return true;
  }
  }
  
  
  function Ref_fname(uadd)
  { 
   var letters = /^[A-Za-z]+$/;
  if(uadd.value.match(letters))
  {
    document.getElementById('para9').innerHTML = ''
  return true;
  }
  else
  {
    document.getElementById('para9').innerHTML = 'First Name must have alphanumeric characters only'
  uadd.focus();
  return false;
  }}
  
  
  function Ref_lname(uadd)
  { 
   var letters = /^[A-Za-z]+$/;
  if(uadd.value.match(letters))
  {
    document.getElementById('para10').innerHTML = ''
  return true;
  }
  else
  {
    document.getElementById('para10').innerHTML = 'Last Name must have alphanumeric characters only'
  uadd.focus();
  return false;
  }}
  
  
  function Ref_phone(uadd)
  { 
  var letters = /^[0-9a-zA-Z]+$/;
  if(uadd.value.match(letters))
  {
    document.getElementById('para11').innerHTML =''
  return true;
  }
  else
  {
    document.getElementById('para11').innerHTML = 'Referee Phone No. must have alphanumeric characters only'
  uadd.focus();
  return false;
  }}
  
  
  function Ref_work(uadd)
  { 

  if(uadd.value == '')
  {
    document.getElementById('para12').innerHTML = 'Fill in occupation'
  uadd.focus();
  return false;
  }
  else
  {
  document.getElementById('para12').innerHTML = ''
  return true
  }}
  

  function Ref_dob(uadd)
  { 
    if(uadd.value == '')
  {
    document.getElementById('para13').innerHTML = 'Select date of birth'
  uadd.focus();
  return false;
  }
  else
  {
    document.getElementById('para13').innerHTML = ''
  return true
  }}
  
  
  function Other_loans(uadd)
  { 
  
  if(uadd.value == '')
  {
    document.getElementById('para16').innerHTML = 'Fill in Other loans details'
  uadd.focus();
  return false;
  }
  else
  {
    document.getElementById('para16').innerHTML = ''
  return true
  }}
  
  
  function Stage_name(uadd)
  { 
  
  if(uadd.value == 'Default')
  {
    document.getElementById('para17').innerHTML = 'Select Stage Name from the list'
  uadd.focus();
  return false;
  }
  else
  {
    document.getElementById('para17').innerHTML = ''
  return true
  }}

