"use strict";
var passwordInput = document.querySelector("input#password");
var checkPasswordConfirm = function (input) {
    if (passwordInput.value !== input.value) {
        input.setCustomValidity("Password should be the same");
    }
    else {
        input.setCustomValidity("");
    }
};