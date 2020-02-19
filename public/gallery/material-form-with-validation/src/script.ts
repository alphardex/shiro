let passwordInput = document.querySelector("input#password");
let checkPasswordConfirm = (input: HTMLInputElement) => {
  if ((passwordInput as HTMLInputElement).value !== input.value) {
    input.setCustomValidity("Password should be the same");
  } else {
    input.setCustomValidity("");
  }
};
