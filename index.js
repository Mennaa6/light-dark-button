let button = document.querySelector("button");
let body = document.querySelector("body");
let isDark = false;

button.addEventListener("click", () => {
  if (isDark) {
    body.style.backgroundColor = "white";
    button.classList.replace("btn-light", "btn-dark");
    button.innerHTML = "dark";
  } else {
    body.style.backgroundColor = "black";
    button.classList.replace("btn-dark", "btn-light");
    button.innerHTML = "light";
  }
  isDark = !isDark;
});
