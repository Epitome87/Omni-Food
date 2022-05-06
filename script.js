// const navButton = document.querySelector('.button--mobile-nav');
const navOpenButton = document.querySelector("[name='menu-outline']");
const navCloseButton = document.querySelector("[name='close-outline']");
const header = document.querySelector('.header');
const navList = document.querySelector('.main-nav');

function handleOpenNavigation(event) {
  header.classList.add('nav-open');
}

function handleCloseNavigation(event) {
  // Only close navigation if we didn't click the Nav Open button AND
  // we didn't click anywhere inside the header
  if (event.target !== navList && event.target !== navOpenButton) {
    header.classList.remove('nav-open');
  }
}

navOpenButton.addEventListener('click', handleOpenNavigation);
navCloseButton.addEventListener('click', handleCloseNavigation);
window.addEventListener('click', handleCloseNavigation);
