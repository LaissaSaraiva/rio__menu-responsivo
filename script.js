const botao = document.getElementById("nav__botao");

function alternarMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

botao.addEventListener("click", alternarMenu);
