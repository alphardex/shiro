"use strict";
var searchBar = document.querySelector('.search-bar');
var searchInput = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', function () {
    if (!searchBar.classList.contains('active')) {
        searchBar.classList.add('active');
        searchInput.focus();
    }
    else {
        searchBar.classList.remove('active');
    }
});