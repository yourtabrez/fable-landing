// script.js

const fadeElements = document.querySelectorAll('.fade-element');

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Stop watching once visible — no need to re-check
        observer.unobserve(entry.target);
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
