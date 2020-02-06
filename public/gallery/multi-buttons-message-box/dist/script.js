"use strict";
var card = document.querySelector(".card");
var textarea = document.querySelector(".card .textarea");
var sendButton = document.querySelector("#send");
sendButton.addEventListener("click", function () {
    if (textarea.checkValidity()) {
        card.classList.add("sent");
    }
});