let chars = document.querySelectorAll(".chars .char");
let result = document.querySelector(".result");
chars.forEach(char => {
  char.addEventListener("keyup", e => {
    if (
      (char as HTMLInputElement).value.toString().length === 1 ||
      (e as KeyboardEvent).code === "Space"
    ) {
      (char.nextElementSibling as HTMLInputElement)?.focus();
    }
    if ((e as KeyboardEvent).code === "Backspace") {
      (char.previousElementSibling as HTMLInputElement)?.focus();
    }
    let value = Array.from(chars)
      .map(char => (char as HTMLInputElement).value)
      .join("");
    result.setAttribute("value", value);
  });
});
