const contactForm = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");


function validateForm(event) {
    event.preventDefault();

    if(!validateLength(name.value, 1)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
    if(!validateEmail(email.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
    if(!validateLength(subject.value, 10)) {
        subjectError.style.display = "block";
    } else {
        subjectError.style.display = "none";
    }
    successMessage();
}
contactForm.addEventListener("submit", validateForm);


function successMessage() {
    if(validateLength(name.value, 1) && validateEmail(email.value) && validateLength(subject.value, 10)) {
        
        contactForm.innerHTML = `<div class="success-message">
                                    <p>The form was successfully submitted.<br>
                                    Thanks for getting in touch!</p>
                                </div>
                                `;
    }
}

function validateLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contolEmailInput = regEx.test(email);
    return contolEmailInput;
}