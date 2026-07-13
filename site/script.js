/* script.js — HOME page. (1) Wires the fixed-backdrop intro-loop hero video
   (hero-media skill / intro-loop.js): the intro plays once, then an rAF
   crossfade hands off to the seamless loop. Reduced-motion or blocked
   autoplay → the poster stands. (2) Drives the pinned magnetic process dock.
   Shared nav + entrance animation are in shared/main.js. */
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

/* process dock — pinned magnetic card carousel. The rendered focus value f
   chases a snapped target (dock detents while scrolling, nearest card once
   input idles); scroll position itself is never touched, so native/keyboard
   scrolling keeps working. If this never runs (reduced motion, no
   IntersectionObserver, JS off), the section stays a plain vertical list. */
(function () {
  var section = document.querySelector("[data-process-dock]");
  if (!section) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  var steps = [].slice.call(section.querySelectorAll(".process-step"));
  var dots = [].slice.call(section.querySelectorAll(".process-dots i"));
  if (steps.length < 2) return;

  var HOLD_IN = 0.10, HOLD_OUT = 0.12; // runway dead zones: card 1 / card 4 hold at the edges
  var IDLE_MS = 140, LERP_TAU = 110;
  var N = steps.length, LAST = N - 1;
  var runway = 1, f = 0, rafId = null, lastTs = null, lastScrollTs = 0;
  var activeDot = -1, inView = false;

  section.setAttribute("data-dock-active", "");

  function measure() {
    runway = Math.max(section.offsetHeight - window.innerHeight, 1);
  }
  function rawT() {
    var raw = Math.min(Math.max(-section.getBoundingClientRect().top / runway, 0), 1);
    var p = Math.min(Math.max((raw - HOLD_IN) / (1 - HOLD_IN - HOLD_OUT), 0), 1);
    return p * LAST;
  }
  // quadratic pull toward integers: cards stick near center, release between
  function magnet(t) {
    var n = Math.round(t), d = t - n;
    return n + Math.sign(d) * 0.5 * Math.pow(Math.abs(d) * 2, 2);
  }
  function render() {
    for (var i = 0; i < N; i++) {
      var d = i - f, ad = Math.abs(d);
      var o = ad <= 0.5 ? 1 : Math.max(1 - (ad - 0.5) * 0.9, 0);
      var st = steps[i].style;
      st.setProperty("--dock-x", d.toFixed(4));
      st.setProperty("--dock-s", Math.max(1 - 0.45 * ad, 0.4).toFixed(4));
      st.setProperty("--dock-o", o.toFixed(4));
      st.setProperty("--dock-fade", Math.max(1 - 2 * ad, 0).toFixed(4));
      st.zIndex = String(N - Math.round(ad));
      st.visibility = o <= 0.001 ? "hidden" : "visible";
    }
    var cur = Math.round(f);
    if (cur !== activeDot) {
      activeDot = cur;
      for (var j = 0; j < dots.length; j++) dots[j].classList.toggle("is-active", j === cur);
    }
  }
  function tick(ts) {
    rafId = null;
    var dt = lastTs === null ? 16 : Math.min(ts - lastTs, 64);
    lastTs = ts;
    var t = rawT();
    var idle = performance.now() - lastScrollTs > IDLE_MS;
    var target = idle ? Math.round(t) : magnet(t);
    f += (target - f) * (1 - Math.exp(-dt / LERP_TAU)); // frame-rate-normalized ease
    if (idle && Math.abs(target - f) < 0.001) { f = target; render(); lastTs = null; return; }
    render();
    rafId = requestAnimationFrame(tick);
  }
  function kick() {
    if (inView && rafId === null) rafId = requestAnimationFrame(tick);
  }

  new IntersectionObserver(function (entries) {
    inView = entries[0].isIntersecting;
    if (inView) { measure(); kick(); }
    else if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; lastTs = null; }
  }, { rootMargin: "50% 0px" }).observe(section);

  window.addEventListener("scroll", function () {
    lastScrollTs = performance.now();
    kick();
  }, { passive: true });
  window.addEventListener("resize", function () { measure(); kick(); }, { passive: true });

  measure();
  f = Math.round(rawT()); // seed for mid-page reloads / #process deep links
  render();
})();
