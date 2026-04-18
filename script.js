// Efeito de sombra no cabeçalho ao rolar a página
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    header.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.05)";
    header.style.background = "rgba(255, 255, 255, 0.9)";
  }
});

// =========================================
// LÓGICA DO MENU HAMBÚRGUER (MOBILE)
// =========================================
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// Abrir/Fechar menu e animar o botão ao clicar no hambúrguer
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

// Fechar o menu automaticamente ao clicar em qualquer link (Início, Serviços, Contato)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('is-active');
        navMenu.classList.remove('active');
    });
});

// =========================================
// ANIMAÇÃO DE SCROLL (Intersection Observer)
// =========================================
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15, // Dispara quando 15% do elemento estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Anima apenas uma vez
    }
  });
}, observerOptions);

// Seleciona todos os elementos com a classe 'hidden' e os observa
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});