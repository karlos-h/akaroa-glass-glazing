/* ==========================================================================
   Akaroa Glass and Glazing — main.js
   Vanilla JS, no dependencies. Everything here is progressive enhancement:
   with JS off the nav stays expanded and the hamburger is hidden (see the
   .js class rules in styles.css), and the quote form shows a <noscript>
   message pointing at the phone number.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. Mobile nav toggle
     ------------------------------------------------------------------ */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  if (toggle && nav) {
    var desktop = window.matchMedia('(min-width: 60em)');

    function closeNav() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openNav() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function () {
      if (toggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
      } else {
        openNav();
      }
    });

    // tapping a link closes the panel
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a') && !desktop.matches) {
        closeNav();
      }
    });

    // Escape closes it and returns focus to the button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
        toggle.focus();
      }
    });

    // clicking outside closes it
    document.addEventListener('click', function (event) {
      if (desktop.matches) return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (event.target.closest('#primaryNav') || event.target.closest('#navToggle')) return;
      closeNav();
    });

    // resizing up to desktop resets state so the CSS takes over cleanly.
    // Safari 13 and older only have the deprecated addListener; calling the
    // missing method there would throw and kill everything below this point.
    function onBreakpointChange(event) {
      if (event.matches) closeNav();
    }
    if (desktop.addEventListener) {
      desktop.addEventListener('change', onBreakpointChange);
    } else if (desktop.addListener) {
      desktop.addListener(onBreakpointChange);
    }
  }

  /* ------------------------------------------------------------------
     2. Shadow under the sticky header once the page scrolls
     ------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');

  if (header) {
    var ticking = false;

    function updateHeader() {
      header.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    updateHeader();
  }

  /* ------------------------------------------------------------------
     3. Quote form
     Client-side validation only — there is no backend yet.
     TODO before launch: point the form at a handler (Formspree, Netlify
     Forms, or whatever the host provides) and delete the fake submit
     below. Until then the phone number is the real path.
     ------------------------------------------------------------------ */
  var form = document.getElementById('quote-form');

  if (form) {
    var status = document.getElementById('quote-form-status');

    var checks = [
      { id: 'qf-name', error: 'qf-name-error' },
      { id: 'qf-contact', error: 'qf-contact-error' },
      { id: 'qf-job', error: 'qf-job-error' }
    ];

    function setFieldState(check, valid) {
      var input = document.getElementById(check.id);
      var error = document.getElementById(check.error);
      if (!input || !error) return;

      input.closest('.field').classList.toggle('is-invalid', !valid);
      error.hidden = valid;
      if (valid) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-errormessage');
      } else {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-errormessage', check.error);
      }
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstInvalid = null;

      checks.forEach(function (check) {
        var input = document.getElementById(check.id);
        if (!input) return;
        var valid = input.value.trim().length > 0;
        setFieldState(check, valid);
        if (!valid && !firstInvalid) firstInvalid = input;
      });

      if (firstInvalid) {
        if (status) status.textContent = '';
        firstInvalid.focus();
        return;
      }

      // No backend wired up yet — say so plainly rather than pretending.
      if (status) {
        status.textContent =
          'This form isn’t connected yet — ring Johnny on 027 000 0000 ' +
          'or email johnny@akaroaglass.co.nz and he’ll sort you out.';
      }
    });

    // clear an error as soon as the person starts fixing it
    checks.forEach(function (check) {
      var input = document.getElementById(check.id);
      if (!input) return;
      input.addEventListener('input', function () {
        if (input.value.trim().length > 0) setFieldState(check, true);
      });
    });
  }

  /* ------------------------------------------------------------------
     4. Footer year
     ------------------------------------------------------------------ */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

})();
