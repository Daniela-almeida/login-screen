function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("themeSwitch").addEventListener("click", switchTheme);
