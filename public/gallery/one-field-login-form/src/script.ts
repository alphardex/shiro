let login = document.querySelector(".login");
let form = document.querySelector("form");
let emailInput = document.querySelector("input#email");
let passwordInput = document.querySelector("input#password");

login.addEventListener("click", () => {
  login.classList.add("email-input");
});

form.addEventListener("keydown", e => {
  if (e.code === "Enter") {
    if (login.classList.contains("password-input")) {
      login.classList.remove("password-input");
      login.classList.add("submit");
    }
    if (
      login.classList.contains("email-input") &&
      (emailInput as HTMLInputElement).checkValidity()
    ) {
      login.classList.remove("email-input");
      login.classList.add("password-input");
    }
  }
});
