
const form = document.getElementById("form");
const namef = document.getElementById('name');
const nameHelper = document.getElementById('nameHelper');
const email = document.getElementById('email');
const emailHelper = document.getElementById('emailHelper');
const phone = document.getElementById('phone');
const phoneHelper = document.getElementById('phoneHelper');
const message = document.getElementById('message');
const messageHelper = document.getElementById('messageHelper');


const checkNameValid = () => {
    const value = namef.value;
    console.log(value);

    if (value.trim().length < 2) {
        nameHelper.innerText = 'Username must be at least 2 characters long';
        return false;
    } else {
        nameHelper.innerText = '';
        return true;
    }
}
namef.addEventListener('input', checkNameValid);

const checkEmailValid = () => {
    const value = email.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(value)) {
        emailHelper.innerText = 'Email must be a valid email address';
        return false;
    }
    else {
        emailHelper.innerText = '';
        return true;
    }
}
email.addEventListener('input', checkEmailValid);



const checkPhoneValid = () => {
    const value = phone.value;
    if (value[0] != 0 || value[1] != 5 || value.length != 10) {
        phoneHelper.innerText = 'please enter a valid mobile phone';
        return false;
    }
    else {
        phoneHelper.innerText = '';
        return true;
    }

}
phone.addEventListener('input', checkPhoneValid);



const checkMessageValid = () => {
    const value = message.value;
    if (value === "") {
        messageHelper.innerText = 'please add a message';
        return false;
    }
    else {
        messageHelper.innerText = '';
        return true;
    }

}



const checkFormValid = () => {
    if (checkNameValid() && checkEmailValid() && checkPhoneValid() && checkMessageValid()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
};
form.addEventListener('submit', checkFormValid);