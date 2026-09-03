document.addEventListener('DOMContentLoaded', function () {
  // Inject shared header & footer (defined once in partials.js)
  var headerMount = document.getElementById('site-header');
  var footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = HEADER_HTML;
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  var menuIcon = document.getElementById('menuIcon');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (menuIcon) {
        menuIcon.classList.toggle('fi-rr-menu-burger', !isOpen);
        menuIcon.classList.toggle('fi-rr-cross-small', isOpen);
      }
    });
  }

  // Active nav link highlighting based on <body data-page="...">
  var current = document.body.getAttribute('data-page');
  if (current) {
    document.querySelectorAll('[data-nav="' + current + '"]').forEach(function (el) {
      el.classList.add('text-[var(--pine-700)]', 'font-semibold');
    });
  }
});
