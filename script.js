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

// ========================================
// OPEN POPUP
// ========================================

openBtn.addEventListener('click', () => {

  popup.classList.add('active');

  document.body.style.overflow = 'hidden';

});

// ========================================
// CLOSE FUNCTION
// ========================================

function closeForm() {

  popup.classList.remove('active');

  document.body.style.overflow = 'auto';

}

// ========================================
// CLOSE EVENTS
// ========================================

closeBtn.addEventListener(
  'click',
  closeForm
);

closeOverlay.addEventListener(
  'click',
  closeForm
);

// ========================================
// ESC KEY CLOSE
// ========================================

document.addEventListener('keydown', (e) => {

  if (
    e.key === 'Escape' &&
    popup.classList.contains('active')
  ) {

    closeForm();

  }

});

// ========================================
// FORM SUBMIT
// ========================================

form.addEventListener('submit', () => {

  const submitBtn =
    form.querySelector('.submit-btn');

  submitBtn.disabled = true;

  submitBtn.innerText =
    'Submitting...';

  setTimeout(() => {

    submitBtn.disabled = false;

    submitBtn.innerText =
      'Join Early Access';

    const formContainer =
      popup.querySelector('.form-container');

    formContainer.innerHTML = `

      <button
        class="close-btn"
        id="successCloseBtn"
      >
        ×
      </button>

      <h2>
        Join Fable Early Families
      </h2>

      <p class="form-subtext">
        Selected families may receive early access before public launch.
      </p>

      <div class="success-message">

        <h3>
          You're on the list.
        </h3>

        <p>
          We'll reach out when early access begins.
        </p>

      </div>

    `;

    document
      .getElementById('successCloseBtn')
      .addEventListener(
        'click',
        closeForm
      );

  }, 700);

});
