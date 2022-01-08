const form = document.querySelector("#contactForm");
const success = document.querySelector(".formSuccess");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const loading = document.querySelector(".loadingForm");
const loadingMessage = document.querySelector(".loadingMessage");

function formInputValidation(event) {
  event.preventDefault();

  if (lenControll(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (lenControll(address.value, 10) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (lenControll(password.value, 8) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (
    lenControll(password.value, 8) === true &&
    lenControll(address.value, 10) === true &&
    emailValidation(email.value) === true &&
    lenControll(name.value, 0) === true
  ) {
    success.style.display = "block";
    loading.style.display = "block";
    loadingMessage.style.display = "block";
    window.setTimeout(function () {
      window.location.href = "browseFilms.html";
    }, 2000);
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

console.log("Hello World!");
