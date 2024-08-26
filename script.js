
const user = document.getElementById('user').value;
const Password1 = document.getElementById('Password1').value;
const Password2 = document.getElementById('Password2').value;
const mobilenumber = document.getElementById('mobilenumber').value;
const email = document.getElementById('email');
const date = document.getElementById('date');

const dateInput = document.getElementById("date");

const handleFormData = (e) => {
    e.preventDefault();

    if (user == null || user == "") {
        document.getElementById('uname').innerHTML = "Please fill the username feild";
        return false;
    }
    if ((user.length <= 2) || (user.length >= 30)) {
        document.getElementById('uname').innerHTML = "Username lenght must be between 3 and 30 ";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('uname').innerHTML = "only character is allowed ";
        return false;
    }


    if (Password1 == null || Password1 == "") {
        document.getElementById('pass1').innerHTML = "Please fill the Password feild";
        return false;
    }
    if (Password1.length <= 5 || Password1.length >= 20) {
        document.getElementById('pass1').innerHTML = "Password lenght must be between 5 and 20";
        return false;
    }


    if (Password1 != Password2) {
        document.getElementById('pass2').innerHTML = "Password are not matching please enter correct password";
        return false;
    }
    if (Password2 == null || Password2 == "") {
        document.getElementById('pass2').innerHTML = "Please fill the Confirm Password feild";
        return false;
    }


    if (mobilenumber == null || mobilenumber == "") {
        document.getElementById('mobileno').innerHTML = "Please fill the mobilenumber feild";
        return false;
    }
    if (isNaN(mobilenumber)) {
        document.getElementById('mobileno').innerHTML = "mobile number should be in digits";
        return false;
    }
    if (mobilenumber.length != 10) {
        document.getElementById('mobileno').innerHTML = "mobile number should be in 10 digits not more or less than 10.";
        return false;
    }


    if (email == null || email == "") {
        document.getElementById('emailid').innerHTML = "Please fill the email feild";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailid').innerHTML = "@ indvalid position";
        return false;
    }

    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        document.getElementById('emailid').innerHTML = " . invalid position";
        return false;
    }


    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }


    if (gender === "") {
        showError(genderInput, "Select your gender");
    }


    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    form.submit();
}

passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

form.addEventListener("submit", handleFormData);