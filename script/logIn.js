const form = document.querySelector("#contactForm");
const success = document.querySelector(".formSuccess");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

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
    window.setTimeout(function () {
      window.location.href = "browseFilms.html";
    }, 200);
  } else {
    success.style.display = "none";
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
