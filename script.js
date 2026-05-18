// script.js

const fadeElements = document.querySelectorAll('.fade-element');

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }

    });

  },
  {
    threshold: 0.12
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});