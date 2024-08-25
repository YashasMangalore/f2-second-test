function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value;
    const successMessage = document.getElementById('successMessage');

    // Reset error message first
    emailError.textContent = '';
    successMessage.textContent = ''; // Reset success message

    // Show error message only if the user has started typing
    if (emailValue.length > 0) {
        if (emailValue.length <= 3 || !emailValue.includes('@') || !emailValue.includes('.')) {
            emailError.textContent = "Make sure email is more than 3 characters and contains '@' and '.' ";
        }
    }

    // Show success message if email is valid and no error in password
    if (emailError.textContent === '' && passwordError.textContent === '') {
        successMessage.textContent = 'All good to go!';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordValue = passwordInput.value;
    const successMessage = document.getElementById('successMessage');

    // Reset error message first
    passwordError.textContent = '';
    successMessage.textContent = ''; // Reset success message

    // Show error message only if the user has started typing
    if (passwordValue.length > 0) {
        if (passwordValue.length <= 8) {
            passwordError.textContent = 'Make sure password is more than 8 characters.';
        }
    }

    // Show success message if password is valid and no error in email
    if (passwordError.textContent === '' && emailError.textContent === '') {
        successMessage.textContent = 'All good to go!';
    }
}

function handleSubmit(event) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('successMessage');
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // Prevent form submission
    event.preventDefault();

    // Validate fields again in case they changed
    validateEmail();
    validatePassword();

    if (!emailValue.includes('@') || !emailValue.includes('.') || emailValue.length <= 3) {
        alert("Make sure email is more than 3 characters and contains '@' and '.' ");
        return false;
    }

    if (passwordValue.length <= 8) {
        alert("Make sure password is more than 8 characters.");
        return false;
    }

    // If all validations pass
    if (confirm('Are you sure you want to sign up?')) {
        alert('Successful signup!');
        // Clear form
        emailInput.value = '';
        passwordInput.value = '';
        successMessage.textContent = ''; // Clear success message on form submission
        return true;
    }

    return false;
}
