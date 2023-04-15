var email = [];
var firstNameValues = []; 
var lastNameValues = [];
function submitForm(event){
  event.preventDefault();
  event.stopPropagation();
  form1 = document.getElementById("form-1");

  email_inputs = document.getElementById("email");
  firstName_input = document.getElementById("first_name");
  lastName_input = document.getElementById("last_name");
  for(i=0;i<email_inputs.length;i++){
    var email_value = email_inputs[i].value;
    email.push(email_value);
  }
  for(i=0;i<firstName_input;i++){
      var first_name_value = firstName_input[i].value;
      firstNameValues.push(first_name_value);
  }
    for(i=0;i<lastName_input.length;i++){
      var last_name_value = lastName_input[i].value;
      lastNameValues.push(last_name_value);
  }
  //validates if more then total students enter form 
  newAddmission = false;
  if(email.length>24){
    console.log("Hey!you are not a part of the class! The maximum number of students have already given the form");
    newAddmission=true;
  }
    if(firstNameValues.length>24){
    console.log("Hey you are not a part of the class! The maximum number of students have already given the form");
    newAddmission = true;
  }
    if(lastNameValues.length>24){
    console.log("Hey you are not a part of the class! The maximum number of students have already given the form");
    newAddmission= true;
  }
  //validates if data is reentered or not
  if(email.includes(email_inputs)){
    console.log("You have already given this form");
  }
  if(firstNameValues.includes(firstName_input)){
    console.log("You have already given this form");
  }
  if(lastNameValues.includes(lastName_input)){
    console.log("You have already given this form");
  }
  function formSubmit(){ return form1.submit();}
  setTimeout(formSubmit(),30000);
}