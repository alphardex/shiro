var btn = document.querySelector(".login");
btn.addEventListener("click", function (e) {
    btn.classList.add('active');
    setTimeout(function () {
        btn.classList.add("verified");
    }, 3000);
});