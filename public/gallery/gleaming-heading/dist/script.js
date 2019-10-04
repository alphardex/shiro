var heading = document.querySelector('h1.gleaming');
var letters = heading.textContent.split('');
heading.innerHTML = letters.map(function (e, i) { return "<span style='animation-delay: " + _.random(1, 1000) + "ms'>" + e + "</span>"; }).join('');