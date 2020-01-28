"use strict";
var prevLink = document.querySelector(".prev");
var nextLink = document.querySelector(".next");
var pagination = document.querySelector(".pagination");
var pageNumberLinks = document.querySelectorAll(".page-number a");
var maxPageIndex = pageNumberLinks.length - 1;
pageNumberLinks.forEach(function (pageNumberLink, activeIndex) {
    pageNumberLink.addEventListener("click", function () {
        pageNumberLinks.forEach(function (pageNumberLink) {
            return pageNumberLink.parentElement.classList.remove("active");
        });
        pageNumberLink.parentElement.classList.add("active");
        pagination.style.setProperty("--active-index", "" + activeIndex);
    });
});
prevLink.addEventListener("click", function () {
    pageNumberLinks.forEach(function (pageNumberLink) {
        return pageNumberLink.parentElement.classList.remove("active");
    });
    var activeIndex = Number(pagination.style.getPropertyValue("--active-index"));
    activeIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    pageNumberLinks[activeIndex].parentElement.classList.add("active");
    pagination.style.setProperty("--active-index", "" + activeIndex);
});
nextLink.addEventListener("click", function () {
    pageNumberLinks.forEach(function (pageNumberLink) {
        return pageNumberLink.parentElement.classList.remove("active");
    });
    var activeIndex = Number(pagination.style.getPropertyValue("--active-index"));
    activeIndex = activeIndex < maxPageIndex ? activeIndex + 1 : maxPageIndex;
    pageNumberLinks[activeIndex].parentElement.classList.add("active");
    pagination.style.setProperty("--active-index", "" + activeIndex);
});