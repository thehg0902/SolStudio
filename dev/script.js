/* script.js — Development page. Shared nav + entrance animation come from
   shared/main.js. No page-specific behaviour yet. */

/* ---- portfolio: card loops play only while on screen ----
   No autoplay attribute on purpose: with autoplay, browsers ignore
   preload="none" and fetch all six clips at page load. play() here is what
   triggers the download. Reduced-motion users, no-IO browsers and JS-off
   visitors all keep the static poster. */
(function () {
  var vids = document.querySelectorAll("[data-card-loop]");
  if (!vids.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {}); // blocked autoplay = poster stays
      } else {
        v.pause();
      }
    });
  }, { rootMargin: "200px 0px" });

  vids.forEach(function (v) { io.observe(v); });
})();
