// ========================================
// FADE ANIMATION
// ========================================

const fadeElements =
  document.querySelectorAll('.fade-element');

const observer =
  new IntersectionObserver(

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

// ========================================
// FORM POPUP
// ========================================

const popup =
  document.getElementById('formPopup');

const openBtn =
  document.getElementById('openFormBtn');

const closeBtn =
  document.getElementById('closeBtn');

const closeOverlay =
  document.getElementById('closePopup');

const form =
  document.getElementById('earlyAccessForm');

// OPEN POPUP

openBtn.addEventListener('click', () => {

  popup.classList.add('active');

  document.body.style.overflow = 'hidden';

});

// CLOSE FUNCTION

function closeForm() {

  popup.classList.remove('active');

  document.body.style.overflow = 'auto';

}

// CLOSE EVENTS

closeBtn.addEventListener('click', closeForm);

closeOverlay.addEventListener('click', closeForm);

// ========================================
// FORM SUBMIT
// ========================================

form.addEventListener('submit', () => {

  setTimeout(() => {

    form.innerHTML = `

      <div class="success-message">

        <h3>
          You're on the list.
        </h3>

        <p>
          We'll reach out when early access begins.
        </p>

      </div>

    `;

  }, 1200);

});
