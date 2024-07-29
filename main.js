const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .links", {
  ...scrollRevealOption,
  delay: 2000,
});

// Theme Color Change
const colorSelectors = document.querySelectorAll(".theme-switcher .color");

colorSelectors.forEach(colorSelector => {
  colorSelector.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary-color", colorSelector.dataset.color);
  });
});

// Scroll Reveal for other sections
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});
ScrollReveal().reveal(".about__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".services__container h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__item", {
  ...scrollRevealOption,
  interval: 300,
  delay: 1000,
});

ScrollReveal().reveal(".portfolio__item", {
  ...scrollRevealOption,
  interval: 300,
  delay: 500,
});

ScrollReveal().reveal(".footer__container, .footer__bottom", {
  ...scrollRevealOption,
  delay: 500,
});
document.addEventListener('DOMContentLoaded', () => {
  const colorElements = document.querySelectorAll('.color');
  
  colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', () => {
      const newColor = colorElement.getAttribute('data-color');
      document.documentElement.style.setProperty('--background-color', newColor);
    });
  });
});
