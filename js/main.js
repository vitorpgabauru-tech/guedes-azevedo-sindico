// Abre e fecha o menu mobile (hamburguer) no header
const menuToggle = document.querySelector('.header__menu-toggle');
const menuLinks = document.querySelector('.header__links');

menuToggle.addEventListener('click', () => {
  const isOpen = menuLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
