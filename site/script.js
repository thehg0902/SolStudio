/* script.js — HOME page. Wires the fixed-backdrop intro-loop hero video
   (hero-media skill / intro-loop.js): the intro plays once, then an rAF
   crossfade hands off to the seamless loop. Reduced-motion or blocked
   autoplay → the poster stands. Shared nav + entrance animation are in
   shared/main.js. */
(function () {
  var wrap = document.querySelector("[data-intro-loop]");
  if (!wrap) return;
  var intro = wrap.querySelector("[data-il-intro]");
  var loop = wrap.querySelector("[data-il-loop]");
  if (!intro || !loop) return;
  var FADE_MS = 500, LEAD = 0.4, rafId = null, handedOff = false;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.removeAttribute("autoplay"); intro.pause(); loop.pause();
    return; // poster stands
  }

  function crossfade() {
    if (handedOff) return;
    handedOff = true;
    var p = loop.play();
    if (p && p.catch) p.catch(function () {});
    var start = null;
    function step(ts) {
      if (start === null) start = ts;
      var f = Math.min((ts - start) / FADE_MS, 1);
      loop.style.opacity = String(f);
      intro.style.opacity = String(1 - f);
      if (f < 1) rafId = requestAnimationFrame(step);
      else intro.pause();
    }
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(step);
  }

  intro.addEventListener("timeupdate", function () {
    var left = intro.duration - intro.currentTime;
    if (left <= LEAD && left > 0) crossfade();
  });
  intro.addEventListener("ended", crossfade); // safety if timeupdate misses

  // if autoplay was blocked, the poster stands; nothing else to do
  var pp = intro.play();
  if (pp && pp.catch) pp.catch(function () {});
})();
