"use strict";
var menus = document.querySelectorAll('.menu');
menus.forEach(function (menu) {
    var menuItems = menu.querySelectorAll('.menu-item');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            menuItems.forEach(function (item) { return item.classList.remove('active'); });
            var target = e.target;
            target.classList.add('active');
        });
    });
});