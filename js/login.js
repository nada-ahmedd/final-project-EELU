const patterns = {
    namePattern: /^[A-Za-z]{3,}$/,
    emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phonePattern: /^(\+?\d{1,3})?\d{10}$/,
    datePattern: /^\d{4}-\d{2}-\d{2}$/,
    passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    addressPattern: /^[A-Za-z0-9\s,.'-]{5,}$/,
    cityPattern: /^[A-Za-z\s]{2,}$/,
    postalCodePattern: /^[0-9]{5,6}$/,
    countryPattern: /^[A-Za-z\s]{2,}$/
};

const patternMessages = {
    namePattern: "Name must be at least 3 letters.",
    emailPattern: "Enter a valid email address (e.g., example@domain.com).",
    phonePattern: "Phone number should be 10 digits or include country code.",
    datePattern: "Enter a valid date (YYYY-MM-DD).",
    passwordPattern: "Password must be at least 8 characters, include uppercase, lowercase, a digit, and a special character.",
    addressPattern: "Address must be at least 5 characters long.",
    cityPattern: "City must be at least 2 letters.",
    postalCodePattern: "Postal code must be 5 or 6 digits.",
    countryPattern: "Country must be at least 2 letters."
};

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const isValid = validateForm();

    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        Swal.fire({
            icon: 'error',
            title: 'Terms not accepted',
            text: 'You must agree to the Terms of Service and Privacy Policy to submit the form.'
        });
        return;
    }

    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Submitted',
            text: 'Your registration has been successfully submitted!',
        });
    }
});

function validateField(value, pattern, messageElement, message) {
    if (pattern.test(value)) {
        messageElement.textContent = 'Valid';
        messageElement.classList.add('valid');
        messageElement.classList.remove('invalid');
        return true;
    } else {
        messageElement.textContent = message;
        messageElement.classList.add('invalid');
        messageElement.classList.remove('valid');
        return false;
    }
}

function validateForm() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const postalCode = document.getElementById('postalCode');
    const country = document.getElementById('country');
    const password = document.getElementById('Password');

    const isFirstNameValid = validateField(firstName.value.trim(), patterns.namePattern, document.getElementById('firstNameMessage'), patternMessages.namePattern);
    const isLastNameValid = validateField(lastName.value.trim(), patterns.namePattern, document.getElementById('lastNameMessage'), patternMessages.namePattern);
    const isEmailValid = validateField(email.value.trim(), patterns.emailPattern, document.getElementById('emailMessage'), patternMessages.emailPattern);
    const isPhoneValid = validateField(phone.value.trim(), patterns.phonePattern, document.getElementById('phoneMessage'), patternMessages.phonePattern);
    const isAddressValid = validateField(address.value.trim(), patterns.addressPattern, document.getElementById('addressMessage'), patternMessages.addressPattern);
    const isCityValid = validateField(city.value.trim(), patterns.cityPattern, document.getElementById('cityMessage'), patternMessages.cityPattern);
    const isPostalCodeValid = validateField(postalCode.value.trim(), patterns.postalCodePattern, document.getElementById('postalCodeMessage'), patternMessages.postalCodePattern);
    const isCountryValid = validateField(country.value.trim(), patterns.countryPattern, document.getElementById('countryMessage'), patternMessages.countryPattern);
    const isPasswordValid = validateField(password.value.trim(), patterns.passwordPattern, document.getElementById('passwordMessage'), patternMessages.passwordPattern);

    firstName.classList.toggle('valid', isFirstNameValid);
    firstName.classList.toggle('invalid', !isFirstNameValid);
    lastName.classList.toggle('valid', isLastNameValid);
    lastName.classList.toggle('invalid', !isLastNameValid);
    email.classList.toggle('valid', isEmailValid);
    email.classList.toggle('invalid', !isEmailValid);
    phone.classList.toggle('valid', isPhoneValid);
    phone.classList.toggle('invalid', !isPhoneValid);
    address.classList.toggle('valid', isAddressValid);
    address.classList.toggle('invalid', !isAddressValid);
    city.classList.toggle('valid', isCityValid);
    city.classList.toggle('invalid', !isCityValid);
    postalCode.classList.toggle('valid', isPostalCodeValid);
    postalCode.classList.toggle('invalid', !isPostalCodeValid);
    country.classList.toggle('valid', isCountryValid);
    country.classList.toggle('invalid', !isCountryValid);
    password.classList.toggle('valid', isPasswordValid);
    password.classList.toggle('invalid', !isPasswordValid);

    return isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isAddressValid && isCityValid && isPostalCodeValid && isCountryValid && isPasswordValid;
}

document.querySelectorAll('#registrationForm input').forEach(input => {
    input.addEventListener('blur', () => {
        validateForm();
    });
});

const togglePasswordOpen = document.getElementById('togglePasswordOpen');
const togglePasswordClosed = document.getElementById('togglePasswordClosed');
const passwordInput = document.getElementById('Password');

togglePasswordOpen.addEventListener('click', function () {
    const isPasswordHidden = passwordInput.getAttribute('type') === 'password';
    if (isPasswordHidden) {
        passwordInput.setAttribute('type', 'text');
        togglePasswordOpen.style.display = 'none';
        togglePasswordClosed.style.display = 'inline';
    }
});

togglePasswordClosed.addEventListener('click', function () {
    const isPasswordVisible = passwordInput.getAttribute('type') === 'text';
    if (isPasswordVisible) {
        passwordInput.setAttribute('type', 'password');
        togglePasswordClosed.style.display = 'none';
        togglePasswordOpen.style.display = 'inline';
    }
});
