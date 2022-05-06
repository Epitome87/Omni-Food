// Elements required for mobile navigation
const navOpenButton = document.querySelector("[name='menu-outline']");
const navCloseButton = document.querySelector("[name='close-outline']");
const header = document.querySelector('.header');
const navList = document.querySelector('.main-nav');

// Elements required for Intersection Observer animations
const revealElements = document.querySelectorAll('.reveal');

// Functions required for mobile navigation
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

// Creates IntersectionObserver and attaches it to appropriate elements
function createObserver() {
  let options = {
    root: null,
    rootMargin: '0px',
    thresholds: '50px',
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  revealElements.forEach((revealElement) => observer.observe(revealElement));
}

let prevRatio = 0.0;

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio <= 0) {
      // Do this if we want the animation to occur EVERY time in view
      // entry.target.classList.remove('active');
    } else {
      entry.target.classList.add('active');
    }
  });
}

// Event Listeners required for mobile navigation
navOpenButton.addEventListener('click', handleOpenNavigation);
navCloseButton.addEventListener('click', handleCloseNavigation);
window.addEventListener('click', handleCloseNavigation);

createObserver();
