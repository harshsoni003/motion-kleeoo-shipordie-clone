/* ============================================================
   SHIP OR DIE — scene engine
   Scroll-driven hero choreography + reveal lighting + rain + lightning
   ============================================================ */
(function () {
  'use strict';

  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var inv   = function (v, a, b) { return clamp((v - a) / (b - a), 0, 1); }; // normalised ramp
  var ease  = function (t) { return t * t * (3 - 2 * t); };                  // smoothstep

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var top = document.getElementById('top');
  var slacker = document.getElementById('slackerSprite');
  var slackerFrame = -1;
  var SLACKER_SRC = 'https://www.ship-or-die.com/landing/pirate/slacker-frame-';

  /* ---------- build rain ---------- */
  var rain = document.querySelector('.rain');
  if (rain) {
    var drops = 60;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < drops; i++) {
      var s = document.createElement('span');
      var dur = 600 + Math.random() * 320;
      s.style.cssText =
        '--x:' + (Math.random() * 100).toFixed(2) + '%;' +
        '--t:' + (-12 + Math.random() * 28).toFixed(2) + '%;' +
        '--h:' + (11 + Math.random() * 10).toFixed(0) + 'px;' +
        '--o:' + (0.34 + Math.random() * 0.18).toFixed(2) + ';' +
        '--dur:' + dur.toFixed(0) + 'ms;' +
        '--delay:' + (-Math.random() * dur).toFixed(0) + 'ms;' +
        '--drift:' + (-(17 + Math.random() * 10)).toFixed(0) + 'vw;';
      frag.appendChild(s);
    }
    rain.appendChild(frag);
  }

  /* ---------- hero choreography ---------- */
  var lastStorm = 0;

  function updateHero() {
    if (!top) return;
    var rect = top.getBoundingClientRect();
    var track = top.offsetHeight - window.innerHeight;
    var p = clamp(-rect.top / track, 0, 1);

    var storm  = ease(inv(p, 0.08, 0.58));
    var rainV  = ease(inv(p, 0.12, 0.52)) * (1 - inv(p, 0.84, 1.0));
    var cueOp  = 1 - inv(p, 0.02, 0.12);
    var shipOp = 1 - ease(inv(p, 0.50, 0.72));
    var dieOp  = ease(inv(p, 0.60, 0.82));

    // doomed pirate: walk the plank, then fall, then splash
    var walk = ease(inv(p, 0.28, 0.50));   // 0..1 along the plank
    var fall = ease(inv(p, 0.50, 0.74));   // 0..1 plunge
    var px = 14 + walk * 128 + fall * 36;
    var py = fall * fall * 320;
    var rot = fall * 150;
    var splash = (function () {
      var up = inv(p, 0.68, 0.78);
      var dn = 1 - inv(p, 0.82, 0.92);
      return ease(up) * dn;
    })();
    var splashScale = 0.5 + ease(inv(p, 0.68, 0.86)) * 0.7;

    // swap the falling-pirate sprite frame
    if (slacker) {
      var fr = fall <= 0.001 ? 0 : Math.min(5, Math.floor(fall * 6));
      if (fr !== slackerFrame) { slackerFrame = fr; slacker.src = SLACKER_SRC + fr + '.png'; }
    }

    top.style.setProperty('--p', p.toFixed(3));
    top.style.setProperty('--storm', storm.toFixed(3));
    top.style.setProperty('--rain', rainV.toFixed(3));
    top.style.setProperty('--cue-op', cueOp.toFixed(3));
    top.style.setProperty('--ship-op', shipOp.toFixed(3));
    top.style.setProperty('--die-op', dieOp.toFixed(3));
    top.style.setProperty('--pirate-x', px.toFixed(1) + 'px');
    top.style.setProperty('--pirate-y', py.toFixed(1) + 'px');
    top.style.setProperty('--pirate-rot', rot.toFixed(1) + 'deg');
    top.style.setProperty('--splash', splash.toFixed(3));
    top.style.setProperty('--splash-scale', splashScale.toFixed(3));
    top.style.setProperty('--slacker-op', (ease(inv(p,0.22,0.30)) * (1 - inv(p,0.86,0.94))).toFixed(3));

    lastStorm = storm;
  }

  /* ---------- reveal lighting ---------- */
  var revealSection = document.querySelector('.reveal-section');
  var revealLines = revealSection ? [].slice.call(revealSection.querySelectorAll('.reveal-line')) : [];

  function updateReveal() {
    if (!revealSection || !revealLines.length) return;
    var rect = revealSection.getBoundingClientRect();
    var track = rect.height - window.innerHeight;
    var p = clamp(-rect.top / track, 0, 1);
    // map progress across lines with a moving lit window
    var n = revealLines.length;
    var head = p * (n + 1.5);
    for (var i = 0; i < n; i++) {
      var d = head - i;
      var lit = d > -0.1 && d < (n + 2); // lit once reached, stays lit till near end
      // fade the very last ones back out at the tail
      if (p > 0.9) lit = d > (p - 0.9) * n * 1.2;
      revealLines[i].classList.toggle('is-lit', lit);
    }
  }

  /* ---------- raf loop ---------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateHero();
      updateReveal();
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateHero();
  updateReveal();

  /* ---------- lightning ---------- */
  if (!reduceMotion && top) {
    (function flashLoop() {
      var wait = 2600 + Math.random() * 4200;
      setTimeout(function () {
        if (lastStorm > 0.35) {
          var intensity = 0.5 + lastStorm * 0.5;
          var seq = [intensity, 0, intensity * 0.7, 0, intensity * 0.4, 0];
          var t = 0;
          seq.forEach(function (v, idx) {
            t += idx === 0 ? 0 : (idx % 2 ? 70 : 120);
            setTimeout(function () { top.style.setProperty('--flash', v.toFixed(2)); }, t);
          });
        }
        flashLoop();
      }, wait);
    })();
  }

  /* ---------- live spots counter (cosmetic) ---------- */
  var spots = document.querySelector('.js-spots');
  if (spots) {
    var base = 58;
    setInterval(function () {
      if (Math.random() < 0.4 && base > 31) {
        base -= 1;
        spots.textContent = base;
        spots.animate(
          [{ transform: 'scale(1.5)', color: '#f3e6c9' }, { transform: 'scale(1)', color: '#76c893' }],
          { duration: 600, easing: 'ease-out' }
        );
      }
    }, 9000);
  }
})();
