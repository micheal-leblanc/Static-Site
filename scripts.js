function validateEmail() {
   let email = document.querySelector("#email").value;
   let confirmEmail = document.querySelector("#confirm-email").value;
   let confirmEmailField = document.querySelector("#confirm-email");

   if (confirmEmail != email) {
      confirmEmailField.style.backgroundColor = '#cf1515b5';
   }

   else {
      confirmEmailField.style.backgroundColor = 'white';
   }
}

let confirmEmail = document.querySelector("#confirm-email");

confirmEmail.addEventListener("blur", validateEmail);