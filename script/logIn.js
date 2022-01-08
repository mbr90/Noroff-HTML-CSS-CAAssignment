const form = document.querySelector("#contactForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const failed = document.querySelector("#failedMessage");
const success = document.querySelector("#successMessage");

function formInputValidation(event) {
  event.preventDefault();

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (lenControll(password.value, 8) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (
    lenControll(password.value, 8) === true &&
    emailValidation(email.value) === true
  ) {
    failed.style.display = "none";
    success.style.display = "block";
    window.setTimeout(function () {
      window.location.href = "browseFilms.html";
    }, 500);
  } else {
    failed.style.display = "block";
  }
}

function lenControll(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(mail) {
  const regEx = /\S+@\S+\.\S+/;
  const regExMatch = regEx.test(mail);
  return regExMatch;
}

form.addEventListener("submit", formInputValidation);
