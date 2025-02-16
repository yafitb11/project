
const form = document.getElementById("form");
const namef = document.getElementById('name');
const nameHelper = document.getElementById('nameHelper');
const email = document.getElementById('email');
const emailHelper = document.getElementById('emailHelper');
const phone = document.getElementById('phone');
const phoneHelper = document.getElementById('phoneHelper');
const message = document.getElementById('message');
const messageHelper = document.getElementById('messageHelper');
const submitButton = document.getElementById('submitBtn');

const checkNameValid = () => {
    const value = namef.value;
    console.log(value);

    if (value.trim().length < 2) {
        nameHelper.innerText = 'Username must be at least 2 characters long';
        nameHelper.style.color = "white";
        namef.style.border = "red solid 2px";
        return false;
    } else {
        nameHelper.innerText = '';
        namef.style.border = "none";
        return true;
    }
}
namef.addEventListener('input', checkNameValid);

const checkEmailValid = () => {
    const value = email.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(value)) {
        emailHelper.innerText = 'Email must be a valid email address';
        emailHelper.style.color = "white";
        email.style.border = "red solid 2px";
        return false;
    }
    else {
        emailHelper.innerText = '';
        email.style.border = "none";
        return true;
    }
}
email.addEventListener('input', checkEmailValid);



const checkPhoneValid = () => {
    const value = phone.value;
    if (value[0] != 0 || value[1] != 5 || value.length != 10) {
        phoneHelper.innerText = 'please enter a valid mobile phone number';
        phoneHelper.style.color = "white";
        phone.style.border = "red solid 2px";
        return false;
    }
    else {
        phoneHelper.innerText = '';
        phone.style.border = "none";
        return true;
    }

}
phone.addEventListener('input', checkPhoneValid);



const checkFormValid = (event) => {
    const isValid = checkNameValid() && checkEmailValid() && checkPhoneValid();
    if (!isValid) {
        submitButton.disabled = true;
        event.preventDefault();
    }
};
form.addEventListener('submit', checkFormValid);