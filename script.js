  function onvalidateForm(){

      let name = document.getElementById("name").value;
      let birthyear = document.getElementById("birthyear").value;
      let password = document.getElementById("password").value
      let usResident = document.getElementById("usResident").checked;
      let zipcode = document.getElementById("zipcode").value;
      const pizzaType = document.getElementById('pizzaType').value;
      const errorMessages = document.getElementById('errorMessages');
      const successMessage = document.getElementById('successMessage');
      errorMessages.innerHTML='';
      successMessage.innerHTML='';

      if(name.length <3 ){
        errorMessages.innerHTML += 'Name cannot be less than 3 characters';
      }

      if(birthyear < 1900 || birthyear > 2099 || isNaN(birthyear)){
        errorMessages.innerHTML += 'Year of Birth must be greater than and lesser than 2099<br>';
      }

      if (usResident && (zipcode.length !== 5 || isNaN(zipcode))) {
        errorMessages.innerHTML += 'ZipCode must be 5 digit number.<br>';
      }
      
      if (usResident && (zipcode ==='e')) {
        errorMessages.innerHTML += 'ZipCode must not be an exponent';
      }

      if(password.length < 8){
        errorMessages.innerHTML +='Password must be atleast 8 characters long';
      }

      if(pizzaType === ''){
        errorMessages.innerHTML += 'Please select a preferred type of pizza.<br>';
      }

      if(errorMessages.innerHTML ===''){
        successMessage.innerHTML += 'Accepted! Your Pizza is on the way';
      }

      return false;
    }

  function toggleZipcode(){
    if(document.getElementById("zipcode").disabled===false)
      document.getElementById("zipcode").disabled=true;
    else
      document.getElementById("zipcode").disabled=false;
    }