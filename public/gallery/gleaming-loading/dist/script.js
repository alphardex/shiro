var loading = document.querySelector('.loading');
var letters = loading.textContent.split('');
loading.innerHTML = letters.map(function (e, i) { return "<span style='animation-delay: " + i / 5 + "s'>" + e + "</span>"; }).join('');