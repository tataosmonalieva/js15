//const handLeRes = async () => {
   // try {
      //  const res = await fetch()
      //  const data = await res.json()
      //  console.log(data,'data')
   // } catch (err) {
    //    console.log(err,'error')
   // } finally {
      //  form.innerText = 'Finished'
    //}
//}

function validateForm() {
    var username = document.getElementById('username').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (
        username.length >= 3 &&
        firstName.length >= 3 &&
        lastName.length >= 3 &&
        email.length > 0 &&
        password.length >= 3 && password.length <= 8 &&
        confirmPassword.length >= 3 && confirmPassword.length <= 8 &&
        password === confirmPassword
    ) {
        alert("Form submitted successfully!\n\nUser Name: " + username + "\nFirst Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email);
    } else {
        alert("Please check the form for errors.");
    }
}


