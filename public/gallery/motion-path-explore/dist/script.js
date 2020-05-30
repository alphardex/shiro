"use strict";
var d = document.querySelector("#path").children[0].getAttribute("d");
var stage = document.querySelector(".stage");
stage.style.setProperty("--d", "path('" + d + "')");
var goForthBtn = document.querySelector("#go-forth");
var hero = document.querySelector(".hero");
var currentCheckPointId = 0;
goForthBtn.addEventListener("click", function () {
    currentCheckPointId++;
    if (currentCheckPointId <= 5) {
        hero.classList.add("check-" + currentCheckPointId);
    }
});