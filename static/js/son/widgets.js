/*
 * Présentation « Son » (2nde) : animations interactives.
 * Chaque widget se place avec :  <div class="sw" data-w="nom"></div>
 * (construit par core.js ; tick() n'est appelé que lorsque la diapo est affichée).
 */
(function () {
  'use strict';
  var SonW = window.SonW, fmt = SonW.fmt;
  var C = { cyan: '#37d6ff', violet: '#a794ff', pink: '#ff6fb5', amber: '#ffc43a', green: '#35e08a', red: '#ff644e' };

  function mk(w, h) {
    var c = document.createElement('canvas');
    c.width = w * 2; c.height = h * 2; c.style.width = w + 'px'; c.style.height = h + 'px';
    var x = c.getContext('2d'); x.scale(2, 2);
    return { c: c, x: x, w: w, h: h };
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function btn(txt, cls, attrs) { return '<button type="button" class="w-btn ' + (cls || '') + '" ' + (attrs || '') + '>' + txt + '</button>'; }
  // durée en secondes avec un nombre de chiffres adapté
  function dur(s) { return fmt(s, s < 0.1 ? 3 : s < 1 ? 2 : s < 10 ? 1 : 0) + ' s'; }

  /* =================================================================== */
  /* Propagation : les particules oscillent sur place, l'onde avance      */
  /* =================================================================== */
  var MILIEUX = {
    vide:  { nom: 'Vide',  dens: 0,    c: 0,    col: '#fff',    r: 2,   txt: 'Aucune particule : rien ne peut transmettre la vibration, donc <b style="color:#ff644e">pas de son</b>.' },
    air:   { nom: 'Air',   dens: 0.42, c: 120,  col: '#7fd6ff', r: 2.3, txt: 'Air : $v\\approx 340\\ \\mathrm{m/s}$, particules <b>peu serrées</b>.' },
    eau:   { nom: 'Eau',   dens: 0.70, c: 530,  col: '#5b8dff', r: 2.7, txt: 'Eau : $v\\approx 1500\\ \\mathrm{m/s}$, particules plus serrées.' },
    acier: { nom: 'Acier', dens: 1,    c: 2050, col: '#cfd8ea', r: 3.1, txt: 'Acier : $v\\approx 5800\\ \\mathrm{m/s}$, particules très serrées.' }
  };
  SonW.def('onde', {
    build: function (el, I) {
      var cv = mk(880, 250), s = I.s;
      s.cv = cv; s.mil = 'air'; s.clock = 0; s.t0 = 0; s.f = 2; s.A = 9;
      s.cols = 70; s.rows = 8; s.x0 = 70; s.dx = 11; s.y0 = 38; s.dy = 25; s.trac = 30;
      s.parts = [];
      for (var i = 0; i < s.cols; i++) for (var j = 0; j < s.rows; j++) s.parts.push({ i: i, j: j, r: Math.random(), jx: (Math.random() - .5) * 4, jy: (Math.random() - .5) * 6 });
      el.innerHTML = '<div class="w-box"></div>';
      var box = $('.w-box', el);
      box.appendChild(cv.c);
      box.insertAdjacentHTML('beforeend',
        '<div class="w-row"><span class="w-lab">Milieu :</span>' +
        ['vide', 'air', 'eau', 'acier'].map(function (m) { return btn(MILIEUX[m].nom, m === 'air' ? 'on' : '', 'data-m="' + m + '"'); }).join('') +
        btn('🔊 Émettre', 'go', 'data-e="1"') + '</div><div class="w-note"></div>');
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-m')) {
          s.mil = b.getAttribute('data-m');
          $$('button[data-m]', box).forEach(function (x) { x.classList.toggle('on', x === b); });
          maj(el, s);
        }
        s.t0 = s.clock;
      });
      maj(el, s);
    },
    enter: function (el, I) { I.s.t0 = I.s.clock; },
    tick: function (el, I, t, dt) {
      var s = I.s, x = s.cv.x, W = s.cv.w, H = s.cv.h, m = MILIEUX[s.mil];
      s.clock += dt;
      var tt = s.clock - s.t0, f = s.f;
      x.clearRect(0, 0, W, H);
      // haut-parleur
      x.font = '34px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText('🔈', 30, s.y0 + (s.rows - 1) * s.dy / 2);
      var xEnd = s.x0 + (s.cols - 1) * s.dx;
      // position de repos de la particule suivie
      var xt = s.x0 + s.trac * s.dx;
      if (m.dens > 0) {
        x.strokeStyle = 'rgba(255,100,78,.45)'; x.setLineDash([4, 5]); x.lineWidth = 1.5;
        x.beginPath(); x.moveTo(xt, 14); x.lineTo(xt, H - 52); x.stroke(); x.setLineDash([]);
      }
      // particules
      for (var k = 0; k < s.parts.length; k++) {
        var p = s.parts[k];
        var suivi = p.i === s.trac;
        if (!suivi && p.r > m.dens) continue;
        if (m.dens === 0 && !suivi) continue;
        if (m.dens === 0) continue;
        var x0 = s.x0 + p.i * s.dx, tau = tt - (x0 - s.x0) / m.c, u = 0;
        if (tau > 0) u = s.A * Math.min(1, tau * f * 2) * Math.sin(2 * Math.PI * f * tau);
        var px = x0 + (suivi ? 0 : p.jx) + u, py = s.y0 + p.j * s.dy + (suivi ? 0 : p.jy);
        x.beginPath();
        x.fillStyle = suivi ? C.red : m.col;
        x.shadowColor = suivi ? C.red : m.col; x.shadowBlur = suivi ? 10 : 4;
        x.arc(px, py, m.r + (suivi ? 1.6 : 0), 0, 6.2832); x.fill();
      }
      x.shadowBlur = 0;
      if (m.dens === 0) {
        x.fillStyle = 'rgba(255,255,255,.55)'; x.font = '300 22px Outfit, sans-serif';
        x.fillText('(aucune particule)', W / 2, s.y0 + (s.rows - 1) * s.dy / 2);
      }
      // front d'onde
      if (m.c > 0) {
        var xf = s.x0 + m.c * tt;
        if (xf < xEnd + 6) {
          x.strokeStyle = 'rgba(255,255,255,.55)'; x.setLineDash([6, 6]); x.lineWidth = 2;
          x.beginPath(); x.moveTo(xf, 8); x.lineTo(xf, H - 52); x.stroke(); x.setLineDash([]);
          x.fillStyle = 'rgba(255,255,255,.8)'; x.font = '300 16px Outfit, sans-serif'; x.fillText('front de l\u2019onde', Math.min(xf, W - 70), H - 40);
        }
      }
      // légende de la particule suivie
      if (m.dens === 0) return;
      x.fillStyle = C.red; x.font = '600 17px Outfit, sans-serif'; x.textAlign = 'center';
      x.fillText('↕ cette particule ne fait qu\u2019osciller sur place', Math.min(Math.max(xt, 200), W - 200), H - 14);
    }
  });
  function maj(el, s) {
    var n = $('.w-note', el); n.innerHTML = MILIEUX[s.mil].txt;
    if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([n]).catch(function () { });
  }

  /* =================================================================== */
  /* Course du son dans l'air, l'eau et l'acier                           */
  /* =================================================================== */
  var COURSE = [
    { nom: 'Air', ico: '🌬️', v: 340, col: C.cyan },
    { nom: 'Eau', ico: '🌊', v: 1500, col: C.violet },
    { nom: 'Acier', ico: '🔩', v: 5800, col: C.amber }
  ];
  SonW.def('course', {
    build: function (el, I) {
      var s = I.s; s.d = 1000; s.run = false; s.clock = 0; s.t0 = 0;
      var h = '<div class="w-box" style="width:860px"><div class="w-ctrl"><span class="w-lab">Distance</span>' +
        '<input class="w-range" type="range" min="100" max="3000" step="100" value="1000"><span class="w-val"></span></div>';
      COURSE.forEach(function (c, i) {
        h += '<div class="lane" style="--c:' + c.col + '"><span class="ln">' + c.ico + ' ' + c.nom + '</span>' +
          '<div class="track"><i class="dot"></i></div><span class="lr"></span></div>';
      });
      h += '<div class="w-row">' + btn('▶ Top départ !', 'go big') + '</div>' +
        '<div class="w-note">Avant l\u2019arrivée : calculez de tête $\\Delta t=d/v$ pour chaque milieu !</div></div>';
      el.innerHTML = h;
      var rng = $('input', el), val = $('.w-val', el);
      function reset() {
        s.run = false; s.d = +rng.value;
        val.textContent = fmt(s.d) + ' m';
        $$('.lane', el).forEach(function (l) { l.classList.remove('fin'); $('.dot', l).style.left = '0'; $('.lr', l).textContent = ''; });
      }
      rng.addEventListener('input', reset);
      $('.go', el).addEventListener('click', function () { reset(); s.run = true; s.t0 = s.clock; SonW.bip(660, .12, .12); });
      s.reset = reset; reset();
    },
    leave: function (el, I) { I.s.reset(); },
    tick: function (el, I, t, dt) {
      var s = I.s; s.clock += dt; if (!s.run) return;
      var el_ = s.clock - s.t0, base = 7, k = base / (s.d / 340), fini = 0;
      $$('.lane', el).forEach(function (l, i) {
        var tv = s.d / COURSE[i].v, tvis = tv * k, f = Math.min(1, el_ / tvis);
        $('.dot', l).style.left = 'calc(' + (f * 100).toFixed(2) + '% - ' + (f * 26).toFixed(1) + 'px)';
        if (f >= 1) {
          if (!l.classList.contains('fin')) {
            l.classList.add('fin'); SonW.bip(500 + 250 * i, .15, .14);
            $('.lr', l).innerHTML = '$\\Delta t=\\dfrac{' + s.d + '}{' + COURSE[i].v + '}\\approx ' + dur(tv).replace(' s', '').replace(',', '{,}') + '\\ \\mathrm{s}$';
            if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$('.lr', l)]).catch(function () { });
          }
          fini++;
        }
      });
      if (fini === COURSE.length) s.run = false;
    }
  });

  /* =================================================================== */
  /* Éclair et tonnerre                                                   */
  /* =================================================================== */
  SonW.def('eclair', {
    build: function (el, I) {
      var s = I.s; s.d = 1; s.run = false;
      el.innerHTML = '<div class="w-box ecl" style="width:700px"><div class="ecl-flash"></div>' +
        '<div class="w-ctrl"><span class="w-lab">Orage à</span><input class="w-range" type="range" min="0.5" max="6" step="0.5" value="1"><span class="w-val"></span></div>' +
        '<div class="ecl-chrono">0,00 s</div>' +
        '<div class="w-row">' + btn('⚡ Éclair !', 'go big') + '</div>' +
        '<div class="w-res">&nbsp;</div></div>';
      var rng = $('input', el), val = $('.w-val', el);
      function reset() { s.run = false; s.d = +rng.value; val.textContent = fmt(s.d, 1) + ' km'; $('.ecl-chrono', el).textContent = '0,00 s'; $('.w-res', el).innerHTML = '&nbsp;'; }
      rng.addEventListener('input', reset);
      $('.go', el).addEventListener('click', function () {
        reset(); s.run = true; s.t0 = performance.now(); s.dt = s.d * 1000 / 340; s.sonne = false;
        var fl = $('.ecl-flash', el); fl.classList.remove('on'); void fl.offsetWidth; fl.classList.add('on');
        $('.w-res', el).innerHTML = 'Comptez à voix haute : « 1… 2… 3… »';
        SonW.audio();
      });
      s.reset = reset; reset();
    },
    leave: function (el, I) { I.s.reset(); },
    tick: function (el, I) {
      var s = I.s; if (!s.run) return;
      var e = (performance.now() - s.t0) / 1000;
      $('.ecl-chrono', el).textContent = fmt(Math.min(e, s.dt), 2) + ' s';
      if (e >= s.dt && !s.sonne) {
        s.sonne = true; s.run = false;
        var a = new Audio('/tonnerre.mp3'); a.volume = 0.8;
        var p = a.play(); if (p && p.catch) p.catch(function () { SonW.bip(70, 1.2, 0.35); });
        var r = $('.w-res', el);
        r.innerHTML = '$\\Delta t=\\dfrac{d}{v}=\\dfrac{' + (s.d * 1000) + '}{340}\\approx ' + fmt(s.dt, 1).replace(',', '{,}') + '\\ \\mathrm{s}$ soit environ <b style="color:#ffc43a">3 s par km</b>.';
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([r]).catch(function () { });
      }
    }
  });

  /* =================================================================== */
  /* Générateur de sons avec oscillogramme                                */
  /* =================================================================== */
  var FORMES = {
    sine:     { nom: 'Sinus',        f: function (p) { return Math.sin(2 * Math.PI * p); }, g: 1 },
    square:   { nom: 'Carré',        f: function (p) { return (p - Math.floor(p)) < .5 ? 1 : -1; }, g: .4 },
    triangle: { nom: 'Triangle',     f: function (p) { return 1 - 4 * Math.abs((p + .25) - Math.floor(p + .25) - .5); }, g: 1 },
    sawtooth: { nom: 'Dent de scie', f: function (p) { return 2 * (p - Math.floor(p)) - 1; }, g: .45 }
  };
  var NOTES = ['Do', 'Do♯', 'Ré', 'Ré♯', 'Mi', 'Fa', 'Fa♯', 'Sol', 'Sol♯', 'La', 'La♯', 'Si'];
  function note(f) {
    if (f < 30 || f > 4200) return '';
    var n = 12 * Math.log(f / 440) / Math.LN2 + 69, r = Math.round(n);
    var cents = Math.round((n - r) * 100);
    return '≈ ' + NOTES[((r % 12) + 12) % 12] + (Math.floor(r / 12) - 1) + (Math.abs(cents) > 8 ? ' (' + (cents > 0 ? '+' : '') + cents + ' cents)' : '');
  }
  SonW.def('generateur', {
    build: function (el, I) {
      var s = I.s, cv = mk(860, 220);
      s.cv = cv; s.forme = 'sine'; s.f = 440; s.vol = 50; s.on = false; s.scroll = 0;
      s.minv = Math.log(20); s.maxv = Math.log(20000);
      el.innerHTML = '<div class="w-box"></div>';
      var box = $('.w-box', el);
      box.appendChild(cv.c);
      box.insertAdjacentHTML('beforeend',
        '<div class="w-row"><span class="gen-big"><span class="g-f" style="color:#ffc43a"></span></span>' +
        '<span class="w-lab">$T=\\dfrac{1}{f}=$</span><span class="gen-big g-t" style="color:#ff6fb5"></span><span class="w-lab g-n"></span></div>' +
        '<div class="w-ctrl"><span class="w-lab">Fréquence</span><input class="w-range g-fr" type="range" min="0" max="1000" value="500"></div>' +
        '<div class="w-row">' + [100, 440, 1000, 5000, 10000, 15000].map(function (f) { return btn(f >= 1000 ? fmt(f / 1000) + '\u202fkHz' : f + '\u202fHz', '', 'data-f="' + f + '"'); }).join('') + '</div>' +
        '<div class="w-ctrl"><span class="w-lab">Volume</span><input class="w-range pink g-vo" type="range" min="0" max="100" value="50"><span class="w-val g-v"></span>' +
        '<button type="button" class="gen-play" aria-label="Lecture">►</button></div>' +
        '<div class="w-row"><span class="w-lab">Forme du signal :</span>' +
        Object.keys(FORMES).map(function (k) { return btn(FORMES[k].nom, k === 'sine' ? 'on' : '', 'data-s="' + k + '"'); }).join('') + '</div>');
      var fr = $('.g-fr', box), vo = $('.g-vo', box), play = $('.gen-play', box);
      function setF(f) {
        s.f = Math.max(20, Math.min(20000, f));
        fr.value = Math.round((Math.log(s.f) - s.minv) / (s.maxv - s.minv) * 1000);
        aff(); audio();
      }
      function aff() {
        $('.g-f', box).textContent = (s.f >= 1000 ? fmt(s.f / 1000, 2) + ' kHz' : fmt(s.f, s.f < 100 ? 1 : 0) + ' Hz');
        var T = 1000 / s.f;
        $('.g-t', box).textContent = T >= 0.1 ? fmt(T, T < 10 ? 2 : 1) + ' ms' : fmt(T * 1000, 0) + ' µs';
        $('.g-n', box).textContent = note(s.f);
        $('.g-v', box).textContent = s.vol;
      }
      function audio() {
        if (!s.osc) return;
        var ac = SonW.audio(), t = ac.currentTime;
        s.osc.frequency.setTargetAtTime(s.f, t, 0.02);
        s.osc.type = s.forme;
        s.gain.gain.setTargetAtTime(Math.pow(s.vol / 100, 2) * 0.4 * FORMES[s.forme].g, t, 0.03);
      }
      function stop() {
        if (!s.osc) return;
        var ac = SonW.audio(), o = s.osc, g = s.gain;
        g.gain.setTargetAtTime(0, ac.currentTime, 0.02);
        setTimeout(function () { try { o.stop(); o.disconnect(); g.disconnect(); } catch (e) { } }, 200);
        s.osc = null; s.on = false; play.classList.remove('on'); play.textContent = '►';
      }
      s.stop = stop;
      fr.addEventListener('input', function () { s.f = Math.exp(s.minv + (s.maxv - s.minv) * fr.value / 1000); aff(); audio(); });
      vo.addEventListener('input', function () { s.vol = +vo.value; aff(); audio(); });
      play.addEventListener('click', function () {
        if (s.on) { stop(); return; }
        var ac = SonW.audio(); if (!ac) return;
        s.osc = ac.createOscillator(); s.gain = ac.createGain(); s.gain.gain.value = 0;
        s.osc.connect(s.gain); s.gain.connect(ac.destination); s.osc.start();
        s.on = true; play.classList.add('on'); play.textContent = '❚❚'; audio();
      });
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-f')) setF(+b.getAttribute('data-f'));
        if (b.getAttribute('data-s')) {
          s.forme = b.getAttribute('data-s');
          $$('button[data-s]', box).forEach(function (x) { x.classList.toggle('on', x === b); });
          audio();
        }
      });
      setF(440); aff();
      if (window.MathJax && MathJax.typesetPromise) { var tp = function () { MathJax.typesetPromise([box]).catch(function () { }); }; if (MathJax.startup && MathJax.startup.promise) MathJax.startup.promise.then(tp); else tp(); }
    },
    leave: function (el, I) { I.s.stop(); },
    tick: function (el, I, t, dt) {
      var s = I.s, x = s.cv.x, W = s.cv.w, H = s.cv.h, mid = H / 2, nP = 3;
      s.scroll += dt * (s.on ? 0.5 : 0.12);
      x.clearRect(0, 0, W, H);
      // repère
      x.strokeStyle = 'rgba(255,255,255,.35)'; x.lineWidth = 1.5;
      x.beginPath(); x.moveTo(30, mid); x.lineTo(W - 12, mid); x.moveTo(30, 12); x.lineTo(30, H - 10); x.stroke();
      x.fillStyle = 'rgba(255,255,255,.55)'; x.font = '300 14px Outfit, sans-serif'; x.textAlign = 'left';
      x.fillText('amplitude', 38, 22); x.textAlign = 'right'; x.fillText('temps', W - 14, mid + 18);
      // période : repères verticaux pointillés
      var span = W - 40, per = span / nP, ph0 = s.scroll % 1;
      x.setLineDash([3, 6]); x.strokeStyle = 'rgba(255,111,181,.35)'; x.lineWidth = 1;
      for (var k = 0; k <= nP; k++) { var xx = 30 + (k - ph0) * per; if (xx > 34 && xx < W - 10) { x.beginPath(); x.moveTo(xx, 30); x.lineTo(xx, H - 34); x.stroke(); } }
      x.setLineDash([]);
      // signal
      var A = 88 * s.vol / 100, F = FORMES[s.forme].f;
      x.beginPath(); x.lineWidth = 3.2; x.strokeStyle = C.amber; x.shadowColor = C.amber; x.shadowBlur = 12; x.lineJoin = 'round';
      for (var px = 32; px <= W - 14; px += 1) {
        var ph = (px - 30) / per + ph0, y = mid - A * F(ph);
        if (px === 32) x.moveTo(px, y); else x.lineTo(px, y);
      }
      x.stroke(); x.shadowBlur = 0;
      // accolade de la période
      var x1 = 30 + (1 - ph0) * per; if (x1 < 40) x1 += per;
      var x2 = x1 + per;
      if (x2 < W - 8) {
        x.strokeStyle = C.pink; x.fillStyle = C.pink; x.lineWidth = 2.5;
        var yb = H - 20;
        x.beginPath(); x.moveTo(x1, yb); x.lineTo(x2, yb); x.moveTo(x1, yb - 6); x.lineTo(x1, yb + 6); x.moveTo(x2, yb - 6); x.lineTo(x2, yb + 6); x.stroke();
        x.font = '800 18px Outfit, sans-serif'; x.textAlign = 'center'; x.fillText('T', (x1 + x2) / 2, yb - 8);
      }
    }
  });

  /* =================================================================== */
  /* Chronomètre : mesurer la période d'un signal                         */
  /* =================================================================== */
  SonW.def('chrono', {
    build: function (el, I) {
      var s = I.s; s.tops = [];
      el.innerHTML = '<div class="w-box" style="width:360px"><div class="chrono-digits">0,00 s</div>' +
        '<div class="w-row">' + btn('⏱ Top !', 'go big') + btn('↺', '', 'data-r="1"') + '</div>' +
        '<div class="chrono-list">Cliquez à chaque fois que le cercle redevient rose.</div>' +
        '<div class="w-res"></div></div>';
      var box = $('.w-box', el);
      function aff() {
        var l = $('.chrono-list', box), r = $('.w-res', box);
        if (!s.tops.length) { l.textContent = 'Cliquez à chaque fois que le cercle redevient rose.'; r.innerHTML = ''; return; }
        l.innerHTML = s.tops.map(function (t, i) { return 'Top ' + (i + 1) + '\u202f: ' + fmt((t - s.tops[0]) / 1000, 2) + '\u202fs'; }).join(' · ');
        var N = s.tops.length - 1;
        if (N >= 1) {
          var T = (s.tops[N] - s.tops[0]) / N / 1000;
          r.innerHTML = 'Sur ' + N + ' période' + (N > 1 ? 's' : '') + '\u202f: $T\\approx ' + fmt(T, 2).replace(',', '{,}') + '\\ \\mathrm{s}$<br>$f=\\dfrac{1}{T}\\approx ' + fmt(1 / T, 2).replace(',', '{,}') + '\\ \\mathrm{Hz}$';
          if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([r]).catch(function () { });
        } else r.innerHTML = '';
      }
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-r')) s.tops = []; else s.tops.push(performance.now());
        aff();
      });
    },
    tick: function (el, I) {
      var s = I.s, d = $('.chrono-digits', el);
      d.textContent = fmt(s.tops.length ? (s.tops[s.tops.length - 1] - s.tops[0]) / 1000 : 0, 2) + ' s';
    }
  });

  /* =================================================================== */
  /* Pouls : toucher en rythme                                            */
  /* =================================================================== */
  SonW.def('pouls', {
    build: function (el, I) {
      var s = I.s; s.taps = [];
      el.innerHTML = '<div class="w-box" style="width:520px"><button type="button" class="heart-btn" aria-label="Battement">🫀</button>' +
        '<div class="w-note">Trouvez votre pouls (poignet ou cou), puis touchez le cœur à chaque battement.</div>' +
        '<div class="w-res">&nbsp;</div><div class="w-row">' + btn('↺ Recommencer', '', 'data-r="1"') + '</div></div>';
      var box = $('.w-box', el), h = $('.heart-btn', box), res = $('.w-res', box), note = $('.w-note', box);
      h.addEventListener('click', function () {
        var now = performance.now();
        if (s.taps.length && now - s.taps[s.taps.length - 1] > 3000) s.taps = [];
        s.taps.push(now); if (s.taps.length > 12) s.taps.shift();
        h.classList.remove('beat'); void h.offsetWidth; h.classList.add('beat'); SonW.bip(300, .06, .06);
        if (s.taps.length >= 3) {
          var T = (s.taps[s.taps.length - 1] - s.taps[0]) / (s.taps.length - 1) / 1000, f = 1 / T;
          res.innerHTML = '<b style="color:#ff6fb5">' + fmt(f * 60) + ' battements par minute</b><br>$f\\approx ' + fmt(f, 2).replace(',', '{,}') + '\\ \\mathrm{Hz}$ et $T\\approx ' + fmt(T, 2).replace(',', '{,}') + '\\ \\mathrm{s}$';
          if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([res]).catch(function () { });
          note.textContent = '';
        } else note.textContent = 'Continuez…';
      });
      box.addEventListener('click', function (e) {
        if (e.target.closest('[data-r]')) { s.taps = []; res.innerHTML = '&nbsp;'; note.textContent = 'Trouvez votre pouls (poignet ou cou), puis touchez le cœur à chaque battement.'; }
      });
    }
  });

  /* =================================================================== */
  /* Trompettes : intensité sonore et niveau d'intensité sonore           */
  /* =================================================================== */
  SonW.def('trompettes', {
    build: function (el, I) {
      var s = I.s; s.n = 1;
      el.innerHTML = '<div class="w-box" style="width:860px"><div class="trp-row"></div>' +
        '<div class="w-row">' + btn('−', '', 'data-d="-1"') + '<span class="w-val trp-n"></span>' + btn('+', '', 'data-d="1"') + btn('× 2', 'on', 'data-m="2"') + btn('↺ 1', '', 'data-m="0"') + '</div>' +
        '<div class="trp-bars">' +
        '<span style="color:#7bd88f"><b>Intensité</b> $I$</span><div class="trp-bar"><b class="bi" style="background:linear-gradient(90deg,#1f9d55,#7bd88f)"></b></div><span class="w-val ti" style="color:#7bd88f"></span>' +
        '<span style="color:#ff42a1"><b>Niveau</b> $L$</span><div class="trp-bar"><b class="bl" style="background:linear-gradient(90deg,#c01b78,#ff6fb5)"></b></div><span class="w-val tl" style="color:#ff6fb5"></span></div>' +
        '<div class="w-note tx"></div></div>';
      var box = $('.w-box', el);
      function aff() {
        var n = s.n, L = 80 + 10 * Math.log(n) / Math.LN10;
        $('.trp-row', box).textContent = new Array(Math.min(n, 24) + 1).join('🎺') + (n > 24 ? ' …' : '');
        $('.trp-n', box).textContent = n + (n > 1 ? ' trompettes' : ' trompette');
        $('.bi', box).style.width = Math.max(2, n / 32 * 100) + '%';
        $('.bl', box).style.width = (L / 120 * 100) + '%';
        $('.ti', box).innerHTML = n === 1 ? '$I_1$' : '$' + n + 'I_1$';
        $('.tl', box).textContent = fmt(Math.round(L * 10) / 10, L % 1 < .05 || L % 1 > .95 ? 0 : 1) + ' dB';
        $('.tx', box).textContent = n === 1 ? 'Une trompette seule : 80 dB.' : 'Intensité ×' + n + ', mais niveau augmenté de ' + fmt(Math.round((L - 80) * 10) / 10, (L - 80) % 1 < .05 || (L - 80) % 1 > .95 ? 0 : 1) + ' dB seulement !';
        if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([$('.trp-bars', box)]).catch(function () { });
      }
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-d')) s.n = Math.max(1, Math.min(32, s.n + (+b.getAttribute('data-d'))));
        if (b.getAttribute('data-m') === '2') s.n = Math.min(32, s.n * 2);
        if (b.getAttribute('data-m') === '0') s.n = 1;
        aff();
      });
      aff();
    }
  });
})();
