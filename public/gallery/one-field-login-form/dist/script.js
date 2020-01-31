"use strict";
var login = document.querySelector(".login");
var form = document.querySelector("form");
var emailInput = document.querySelector("input#email");
var passwordInput = document.querySelector("input#password");
login.addEventListener("click", function () {
    login.classList.add("email-input");
});
form.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        if (login.classList.contains("password-input")) {
            login.classList.remove("password-input");
            login.classList.add("submit");
        }
        if (login.classList.contains("email-input") &&
            emailInput.checkValidity()) {
            login.classList.remove("email-input");
            login.classList.add("password-input");
        }
    }
});