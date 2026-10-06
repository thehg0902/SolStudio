/* main.js — shared init used on every page: mobile nav overlay + the
   css-only entrance animation trigger. Page-specific behaviour lives in
   each page's own script.js. */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* mobile overlay nav */
  var toggle = document.getElementById('navToggle');
  var overlay = document.getElementById('navOverlay');
  var closeBtn = document.getElementById('navClose');
  if (toggle && overlay) {
    var open = function () { overlay.classList.add('is-open'); toggle.setAttribute('aria-expanded', 'true'); };
    var close = function () { overlay.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* entrance animation — reveal [data-animate] as it scrolls into view.
     Skipped entirely for reduced-motion users (content stays visible). */
  if (!reduced && 'IntersectionObserver' in window) {
    document.body.classList.add('anim-ready');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('[data-animate]').forEach(function (el) { io.observe(el); });
  }
})();
