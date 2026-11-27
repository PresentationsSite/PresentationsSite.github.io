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
        SonW.preload('/tonnerre.mp3');
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
        SonW.play('/tonnerre.mp3', 0.8);
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
      var s = I.s, cv = mk(860, 170);
      s.cv = cv; s.forme = 'sine'; s.f = 440; s.vol = 50; s.on = false; s.scroll = 0;
      s.minv = Math.log(20); s.maxv = Math.log(20000);
      el.innerHTML = '<div class="w-box"></div>';
      var box = $('.w-box', el);
      box.appendChild(cv.c);
      box.insertAdjacentHTML('beforeend',
        '<div class="w-row"><button type="button" class="gen-play" aria-label="Écouter ou arrêter le son"><span class="gp-ico"></span><span class="gp-lab">Écouter</span><span class="gp-eq"><b></b><b></b><b></b><b></b><b></b></span></button>' +
        '<span class="gen-big" style="margin-left:.8em"><span class="g-f" style="color:#ffc43a"></span></span>' +
        '<span class="w-lab">$T=\\dfrac{1}{f}=$</span><span class="gen-big g-t" style="color:#ff6fb5"></span><span class="w-lab g-n"></span></div>' +
        '<div class="w-ctrl long"><span class="w-lab">20 Hz</span><input class="w-range g-fr" type="range" min="0" max="1000" value="500" aria-label="Fréquence"><span class="w-lab">20 kHz</span></div>' +
        '<div class="w-row">' + [100, 440, 1000, 5000, 10000, 15000].map(function (f) { return btn(f >= 1000 ? fmt(f / 1000) + '\u202fkHz' : f + '\u202fHz', '', 'data-f="' + f + '"'); }).join('') + '</div>' +
        '<div class="w-ctrl long"><span class="w-lab">Volume</span><input class="w-range pink g-vo" type="range" min="0" max="100" value="50" aria-label="Volume"><span class="w-val g-v"></span></div>' +
        '<div class="w-row"><span class="w-lab">Forme du signal&nbsp;:</span>' +
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
        s.osc = null; s.on = false; play.classList.remove('on'); $('.gp-lab', play).textContent = 'Écouter';
      }
      s.stop = stop;
      fr.addEventListener('input', function () { s.f = Math.exp(s.minv + (s.maxv - s.minv) * fr.value / 1000); aff(); audio(); });
      vo.addEventListener('input', function () { s.vol = +vo.value; aff(); audio(); });
      play.addEventListener('click', function () {
        if (s.on) { stop(); return; }
        var ac = SonW.audio(); if (!ac) return;
        s.osc = ac.createOscillator(); s.gain = ac.createGain(); s.gain.gain.value = 0;
        s.osc.connect(s.gain); s.gain.connect(ac.destination); s.osc.start();
        s.on = true; play.classList.add('on'); $('.gp-lab', play).textContent = 'Arrêter'; audio();
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
      var A = 66 * s.vol / 100, F = FORMES[s.forme].f;
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
      var s = I.s; s.etat = 'attente'; s.t0 = 0; s.dt = 0; s.N = 1; s.hist = [];
      el.innerHTML = '<div class="w-box" style="width:440px"><div class="chrono-digits">0,00 s</div>' +
        '<div class="chrono-zone"></div><div class="chrono-hist"></div></div>';
      var box = $('.w-box', el), zone = $('.chrono-zone', box), hist = $('.chrono-hist', box);
      function typeset(n) { if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([n]).catch(function () { }); }
      var d2 = function (x) { return fmt(x, 2).replace(',', '{,}'); };
      function aff() {
        if (s.etat === 'attente') zone.innerHTML = '<div class="w-row">' + btn('▶ Top !', 'go big', 'data-a="top"') + '</div>';
        else if (s.etat === 'marche') zone.innerHTML = '<div class="w-row">' + btn('⏹ Top !', 'go big', 'data-a="top"') + '</div>';
        else if (s.etat === 'question') {
          zone.innerHTML = '<div class="w-res">Combien de <b style="color:#ffc43a">périodes</b> se sont écoulées&nbsp;?</div>' +
            '<div class="w-row chrono-step">' + btn('−', '', 'data-a="moins"') + '<span class="chrono-n">' + s.N + '</span>' + btn('+', '', 'data-a="plus"') + '</div>' +
            '<div class="w-row">' + btn('✓ Valider', 'go', 'data-a="ok"') + '</div>';
        } else {
          var T = s.dt / s.N, inc = 0.2 / s.N;
          zone.innerHTML = '<div class="w-res">$T=\\tfrac{\\Delta t}{N}=\\tfrac{' + d2(s.dt) + '}{' + s.N + '}\\approx ' + d2(T) + '\\ \\mathrm{s}$ &nbsp; $f=\\tfrac{1}{T}\\approx ' + d2(1 / T) + '\\ \\mathrm{Hz}$</div>' +
            '<div class="w-row">' + btn('↺ Nouvelle mesure', 'go', 'data-a="nouv"') + '</div>';
          typeset(zone);
        }
        histo();
      }
      function histo() {
        if (!s.hist.length) { hist.innerHTML = ''; return; }
        var best = Math.max.apply(null, s.hist.map(function (h) { return h.N; }));
        hist.innerHTML = '<table class="chrono-tab"><tr><th>N</th><th>T mesurée</th><th>incertitude sur T</th></tr>' +
          s.hist.slice(-3).map(function (h) { return '<tr' + (s.hist.length > 1 && h.N === best ? ' class="best"' : '') + '><td>' + h.N + '</td><td>' + fmt(h.T, 2) + ' s</td><td>± ' + fmt(0.2 / h.N, 2) + ' s</td></tr>'; }).join('') + '</table>' +
          (s.hist.length > 1 ? '<div class="w-note">Plus $N$ est grand, plus <b>T</b> est précise.</div>' : '');
        typeset(hist);
      }
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        var a = b.getAttribute('data-a');
        if (a === 'top') {
          if (s.etat === 'attente') { s.etat = 'marche'; s.t0 = performance.now(); }
          else if (s.etat === 'marche') { s.dt = (performance.now() - s.t0) / 1000; s.etat = 'question'; s.N = 1; }
        } else if (a === 'moins') s.N = Math.max(1, s.N - 1);
        else if (a === 'plus') s.N = Math.min(99, s.N + 1);
        else if (a === 'ok') { s.etat = 'fini'; s.hist.push({ N: s.N, T: s.dt / s.N }); }
        else if (a === 'nouv') { s.etat = 'attente'; s.dt = 0; }
        if (a === 'moins' || a === 'plus') { $('.chrono-n', zone).textContent = s.N; return; }
        aff();
      });
      aff();
    },
    leave: function (el, I) { if (I.s.etat === 'marche') { I.s.etat = 'attente'; $('.chrono-zone', el).innerHTML = '<div class="w-row">' + btn('▶ Top !', 'go big', 'data-a="top"') + '</div>'; } },
    tick: function (el, I) {
      var s = I.s, d = $('.chrono-digits', el);
      var v = s.etat === 'marche' ? (performance.now() - s.t0) / 1000 : s.dt;
      d.textContent = fmt(v, 2) + ' s';
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

  /* =================================================================== */
  /* Découpage d'un signal en périodes (reproduction fidèle du gif)       */
  /* =================================================================== */
  // Une période du signal (relevée sur la figure d'origine) : suite de (u, v) en unités de la figure 1080 × 608.
  var PER_T = 189.44, PER_X0 = 156.77, PER_Y0 = 303.71;
  var PER_PTS = [0,-0.1,3.9,1.2,8.2,5.2,11.2,9.7,11.5,9.6,11.5,10.8,12.1,10.6,12.4,12.3,12.4,11,12.9,13.4,12.9,12,13.2,12.6,13.5,14.5,13.5,13.1,14.1,15.7,14.1,14.2,14.3,14.8,14.6,16.9,14.6,15.3,14.9,15.9,15.2,18.2,15.2,16.5,15.4,17.1,15.7,19.5,15.7,17.7,16,18.3,16.3,20.8,16.3,19,16.6,19.7,16.9,22.2,16.9,20.3,17.1,21,17.4,23.6,17.4,21.6,17.7,22.3,17.7,24.3,18,25.1,18,23,18.3,23.7,18.5,26.6,18.5,24.4,18.8,25.1,19.1,28.1,19.1,25.8,19.7,29.6,19.7,27.4,19.9,28.1,20.2,31.2,20.2,28.9,20.5,29.6,20.8,32.9,20.8,30.4,21.1,31.2,21.4,34.6,21.4,32.1,21.6,32.9,21.9,36.2,21.9,33.7,22.2,34.5,22.5,37.9,22.5,35.3,22.8,36.2,23,39.8,23,37.1,23.3,37.9,23.6,41.5,23.6,38.8,23.9,39.7,24.2,43.3,24.2,40.6,24.4,41.4,24.7,45.2,24.7,42.4,25,43.3,25.3,47.1,25.3,44.2,25.6,45,25.6,48,25.9,48.9,25.9,46.1,26.1,47,26.4,51,26.4,47.9,26.7,51.9,27,52.9,27,49.8,27.2,50.8,27.5,54.8,27.5,51.7,28.1,56.8,28.1,53.7,28.4,54.6,28.4,57.8,28.7,58.8,28.7,55.6,28.9,59.8,29.2,60.7,29.2,57.6,29.5,58.5,29.8,62.9,29.8,59.6,30.1,63.8,30.3,64.8,30.3,61.6,30.9,66.9,30.9,63.6,31.2,67.9,31.5,68.9,31.5,65.7,31.8,69.9,32,71,32,67.7,32.3,68.7,32.3,72,32.6,73,32.6,69.8,32.9,74,33.1,75.1,33.1,71.7,33.4,76.1,33.7,77,33.7,73.8,34,74.8,34,78.1,34.3,79.2,34.3,75.8,34.6,80.1,34.8,81.1,34.8,77.9,35.1,82.1,35.4,83.1,35.4,79.9,35.7,84.2,36,85.2,36,82,36.2,86.2,36.5,87.1,36.5,84,36.8,85,36.8,88.2,37.1,89.1,37.1,86,37.4,90,37.6,91,37.6,87.9,38.2,92.9,38.2,89.9,38.5,93.8,38.8,94.7,38.8,91.9,39,95.7,39.3,96.6,39.3,93.7,39.6,94.7,39.6,97.5,39.9,98.3,39.9,95.6,40.2,99.2,40.5,100.1,40.5,97.4,41,101.8,41,99.2,41.3,102.6,41.6,103.4,41.6,100.9,42.1,105.1,42.1,102.6,42.4,105.8,42.7,106.6,42.7,104.3,43,107.3,43.3,108,43.3,105.9,43.5,108.8,43.8,109.4,43.8,107.4,44.1,110.1,44.4,110.8,44.4,108.8,44.7,111.4,45,112,45,110.2,45.2,112.6,45.5,113.2,45.5,111.5,45.8,113.7,46.1,114.2,46.1,112.8,46.4,113.4,46.4,114.8,46.6,115.2,46.6,114,48,116.9,50.3,119.1,52.8,120.1,55.4,119.8,57.6,118.1,60.1,114.4,60.4,114.6,60.4,113.3,60.7,112.8,60.7,114.1,61,113.6,61.2,111.7,61.2,113.1,61.8,110.7,61.8,112.1,62.1,111.5,62.1,110.2,62.4,109.7,62.4,111,62.6,110.5,62.6,109.2,62.9,108.7,62.9,109.9,63.5,107.7,63.5,109,63.8,108.4,63.8,107.2,64.1,107.3,66.9,103,70.8,98.9,73.9,96.7,79,94.6,83.7,93.7,90.2,94,95.2,96.2,97.5,98,101.1,103.1,101.4,102.9,101.4,104.2,101.7,104.8,101.7,103.4,102,103.9,102.3,106.1,102.3,104.5,102.5,105,102.5,106.8,102.8,107.5,102.8,105.6,103.1,106.3,103.4,109.2,103.4,107,103.7,107.7,104,110.9,104,108.4,104.2,109.1,104.5,112.9,104.5,109.9,104.8,110.8,105.1,115.3,105.1,111.8,105.4,112.7,105.6,118.1,105.6,113.8,106.2,121.5,106.2,116.1,106.5,117.5,106.8,125.6,106.8,118.9,107,120.4,107.3,131.1,107.3,122.1,107.6,124.1,107.9,139.2,107.9,126.2,108.2,128.7,108.5,149.1,108.5,131.6,108.7,135,109,155.5,109,139.4,109.3,157.3,109.6,158.6,109.6,149.4,109.8,159.5,110.1,160.1,110.1,156.2,110.4,160.6,110.7,160.9,110.7,159.4,111.5,161.3,112.1,160.7,112.4,161,112.7,157.8,112.7,160.7,112.9,160.2,113.2,154.5,113.2,159.4,113.5,158.4,113.8,150.4,113.8,157.1,114.3,145.7,114.3,153.8,114.9,140.4,114.9,149.8,115.2,147.5,115.5,134.6,115.5,145.2,116,128.4,116,139.9,116.3,137.1,116.6,121.8,116.6,134.2,116.9,131.1,117.2,114.8,117.2,128,117.4,124.8,117.7,107.7,117.7,121.4,118,118,118,103.9,118.3,100.1,118.3,114.5,118.6,110.9,118.8,92.2,118.8,107.3,119.1,103.5,119.4,84.4,119.4,99.8,119.7,95.8,120,76.2,120,92,120.2,88,120.5,67.8,120.5,84,120.8,80,121.1,59.3,121.1,75.9,121.4,71.7,121.7,50.7,121.7,67.6,121.9,63.4,122.2,42,122.2,59.1,122.5,54.8,122.8,33.2,122.8,50.5,123.1,46.2,123.3,24.4,123.3,41.8,123.6,37.4,123.9,15.5,123.9,33,124.2,28.6,124.5,6.5,124.5,24.1,124.8,19.7,125,-2.4,125,15.2,125.3,10.8,125.6,-11.2,125.6,6.4,125.9,1.9,126.2,-20.2,126.2,-2.5,126.4,-7,126.7,-29,126.7,-11.5,127,-16,127.3,-37.9,127.3,-20.3,127.5,-24.8,127.8,-46.6,127.8,-29.2,128.1,-33.7,128.4,-55.2,128.4,-38,128.7,-42.5,128.7,-59.5,129,-63.7,129,-46.8,129.2,-51.2,129.5,-71.8,129.5,-55.4,129.8,-75.8,130.1,-79.7,130.1,-63.9,130.4,-83.5,130.7,-87.3,130.7,-72.2,130.9,-91.1,131.2,-94.8,131.2,-80,131.5,-83.9,131.5,-98.4,131.8,-101.8,131.8,-87.6,132.1,-105.1,132.3,-108.3,132.3,-95.1,132.6,-111.5,132.9,-114.4,132.9,-102.2,133.2,-117.1,133.4,-119.7,133.4,-108.8,133.7,-122.2,134,-124.3,134,-114.9,134.3,-126.2,134.6,-127.9,134.6,-120.3,134.9,-129.2,135.1,-130.2,135.1,-125,135.4,-130.8,135.7,-131,135.7,-128.6,136,-130.5,136.6,-131,136.6,-129.1,136.8,-130.7,137.1,-125.4,137.1,-130.3,137.4,-129.5,137.7,-120.5,137.7,-128.4,137.9,-126.8,138.2,-114,138.2,-124.8,138.8,-106.3,138.8,-119.9,139.3,-97.5,139.3,-113.6,139.6,-109.9,139.9,-87.6,139.9,-106,140.5,-76.9,140.5,-97.3,140.8,-92.5,141,-65.5,141,-87.5,141.3,-82.3,141.6,-53.6,141.6,-76.9,141.9,-71.3,142.2,-41.3,142.2,-65.6,142.4,-59.7,142.7,-28.8,142.7,-53.7,143,-47.7,143.3,-16.4,143.3,-41.5,143.6,-35.2,143.8,-4,143.8,-29,144.1,-22.8,144.4,8,144.4,-16.5,144.7,-10.3,144.7,13.9,145,19.5,145,-4.3,145.2,1.8,145.2,25.1,145.5,30.4,145.5,7.9,146.1,40.4,146.1,19.6,146.4,45,146.7,49.4,146.7,30.4,146.9,53.6,147.2,57.5,147.2,40.5,147.5,61.2,147.8,64.6,147.8,49.7,148.1,67.6,148.3,70.4,148.3,57.8,148.6,72.7,148.9,74.9,148.9,65,149.2,76.7,149.5,78,149.5,70.9,149.8,79.1,150,79.8,150,75.5,150.3,80.3,150.6,80.6,150.6,78.8,151.2,80.7,152.3,80.1,152.8,79.2,153.1,79.5,153.4,76.5,153.4,79.1,153.7,78.5,154,73.4,154,77.8,154.5,69.5,154.5,75.8,154.8,74.4,155.1,66,155.1,72.7,155.4,64.7,155.7,63.5,155.7,68.9,155.9,62.4,156.2,61.5,156.2,65.3,156.5,60.8,156.8,60.2,156.8,62.6,157.3,59.1,157.3,60.8,157.6,58.7,159.9,56.7,161.6,56.1,163.5,56.5,164.9,58.1,165.2,57.9,165.5,60.2,165.5,58.4,165.8,58.9,166.1,62.7,166.1,59.5,166.3,60.2,166.6,67.1,166.6,61.1,166.9,62.1,166.9,72.5,167.2,63.4,167.4,88.6,167.4,65.1,168,92.1,168,72,168.3,93,168.6,93.5,168.6,89,168.9,93.9,169.1,94.2,169.1,93,169.7,94.4,170.5,93.9,170.8,94.2,170.8,92.3,171.1,93.9,171.4,88.5,171.4,93.4,171.9,82.8,171.9,91.5,172.2,90.1,172.5,74.7,172.5,88.2,172.8,85.6,173.1,65.5,173.1,82.5,173.3,78.7,173.6,56.6,173.6,74.4,173.9,52.6,174.2,48.8,174.2,65.3,174.5,60.7,174.5,45.4,174.8,42.2,174.8,56.3,175,39.3,175.3,36.6,175.3,48.5,175.6,34.1,175.9,31.8,175.9,41.8,176.2,29.6,176.4,27.7,176.4,36,176.7,25.7,177,23.9,177,31.2,177.6,20.8,177.6,26.8,177.8,19.3,178.1,18,178.1,23.2,178.7,15.5,178.7,20,179,14.4,179.2,13.4,179.2,17.2,179.5,12.4,179.8,11.5,179.8,14.7,180.1,10.5,180.4,9.7,180.4,12.5,180.7,8.9,180.9,8.2,180.9,10.6,181.2,7.5,181.5,6.8,181.5,8.9,181.8,6.2,182.1,5.7,182.1,7.4,182.6,4.6,182.6,6,182.9,4,183.2,4.3,185.2,1.5,187.4,-0,189.1,-0.3];

  // interpolation monotone par morceaux (Fritsch-Carlson) : pas de dépassement entre deux mesures
  function pchip(tab) {
    var n = tab.length, h = [], dl = [], m = [], i;
    for (i = 0; i < n - 1; i++) { h[i] = tab[i + 1][0] - tab[i][0]; dl[i] = (tab[i + 1][1] - tab[i][1]) / h[i]; }
    m[0] = dl[0]; m[n - 1] = dl[n - 2];
    for (i = 1; i < n - 1; i++) {
      if (dl[i - 1] * dl[i] <= 0) m[i] = 0;
      else { var w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1]; m[i] = (w1 + w2) / (w1 / dl[i - 1] + w2 / dl[i]); }
    }
    return function (x) {
      if (x <= tab[0][0]) return tab[0][1];
      if (x >= tab[n - 1][0]) return tab[n - 1][1];
      var j = 0; while (x > tab[j + 1][0]) j++;
      var t = (x - tab[j][0]) / h[j], t2 = t * t, t3 = t2 * t;
      return (2 * t3 - 3 * t2 + 1) * tab[j][1] + (t3 - 2 * t2 + t) * h[j] * m[j] + (-2 * t3 + 3 * t2) * tab[j + 1][1] + (t3 - t2) * h[j] * m[j + 1];
    };
  }
  // Chronologie relevée image par image sur le gif d'origine (377 images de 30 ms)
  var PER_NF = 377;
  var XRED = pchip([[0, 458], [8, 467], [16, 494], [24, 539], [32, 594], [40, 644], [48, 681], [56, 698], [60, 699.5], [64, 697], [72, 672], [80, 619], [88, 545], [96, 466], [104, 401], [112, 361], [120, 348], [328, 348], [336, 351], [344, 368], [352, 397], [360, 430], [368, 451], [376, 458], [377, 458]]);
  var WOB = pchip([[-1, 0], [0, 0], [2, 40], [5, 74], [8, 91], [11, 84], [14, 64], [17, 37], [20, 4], [23, -24], [26, -22], [29, -2], [32, 0], [33, 0]]);
  var SCOP = pchip([[213, 0], [216, .016], [219, .042], [222, .074], [225, .121], [228, .176], [231, .242], [234, .316], [237, .4], [240, .484], [243, .568], [246, .653], [249, .732], [252, .8], [255, .858], [258, .911], [261, .947], [264, 1]]);
  var BEXIT = pchip([[287, 0], [288, 3], [296, 59], [304, 185], [312, 346], [320, 474], [328, 600]]);
  var BAND_TOP = 91.5, BAND_H = 384, BAND_X0 = 158.8;
  var COL_ROUGE = 'rgba(254,100,78,.25)', COL_BLEU = 'rgba(85,193,253,.25)';

  SonW.def('periode', {
    swipe: true,
    build: function (el, I) {
      var s = I.s, cv = mk(1080, 608);
      s.cv = cv; s.clock = 0; s.pause = false;
      cv.c.className = 'plein'; cv.c.style.cursor = 'pointer';
      cv.c.title = 'Cliquer pour mettre en pause / relancer';
      el.appendChild(cv.c);
      s.fit = function () { var d = plein(1080 / 608); cv.c.style.width = d.w + 'px'; cv.c.style.height = d.h + 'px'; };
      s.fit(); if (window.Reveal && Reveal.on) Reveal.on('resize', s.fit);
      cv.c.addEventListener('click', function () { s.pause = !s.pause; });
      if (document.fonts && document.fonts.load) { document.fonts.load('30px "Gochi Hand"'); document.fonts.load('17px "Gochi Hand"'); }
    },
    enter: function (el, I) { I.s.clock = 0; I.s.rt = 0; I.s.st = -1; I.s.fit(); },
    tick: function (el, I, t, dt) {
      var s = I.s, st = etape(el);
      s.rt = (s.rt || 0) + dt;
      // étape 0 : le signal seul ; étape 1 (1er swipe) : la bande « une période » apparaît ; étape 2 (2e swipe) : animation du gif
      if (st !== s.st) { s.st = st; s.tst = s.rt; if (st < 2) s.clock = 0; }
      if (!s.pause && st >= 2) s.clock += dt;
      var f = st >= 2 ? (s.clock / 0.03) % PER_NF : 0, X = s.cv.x;
      X.clearRect(0, 0, 1080, 608);
      var xr = XRED(f), ap = st === 1 ? clamp01((s.rt - s.tst) / 0.6) : 1;      // ap : avancement de l'apparition de la bande

      // --- bandes (une période chacune)
      function bande(x, dy, h, col, ombre) {
        if (h <= 0) return;
        var y = BAND_TOP + dy;
        if (h < BAND_H) { // bord inférieur adouci pendant le déploiement
          var g = X.createLinearGradient(0, y, 0, y + h);
          g.addColorStop(0, col); g.addColorStop(Math.max(0, 1 - 16 / h), col); g.addColorStop(1, ombre);
          X.fillStyle = g;
        } else X.fillStyle = col;
        X.fillRect(x, y, PER_T, h);
      }
      var ROUGE0 = 'rgba(254,100,78,0)', BLEU0 = 'rgba(85,193,253,0)';
      var hb1 = Math.max(0, Math.min(BAND_H, (f - 122) * 13.9)), hb3 = Math.max(0, Math.min(BAND_H, (f - 128) * 13.9)), hr4 = Math.max(0, Math.min(BAND_H, (f - 134) * 13.9));
      var sortie = f >= 287 && f < 328, dyb = sortie ? BEXIT(f) : 0;
      if (f >= 122 && f < 328) {
        bande(BAND_X0, dyb, hb1, COL_BLEU, BLEU0);
        bande(BAND_X0 + 2 * PER_T, dyb, hb3, COL_BLEU, BLEU0);
        bande(BAND_X0 + 3 * PER_T, -0.97 * dyb, hr4, COL_ROUGE, ROUGE0);
      }
      if (st >= 1) bande(xr, 0, BAND_H * facil(ap), COL_ROUGE, ROUGE0);

      // --- axes
      var g1 = X.createLinearGradient(128, 0, 1020, 0);
      g1.addColorStop(0, 'rgba(213,213,213,0)'); g1.addColorStop(.06, 'rgba(213,213,213,.95)'); g1.addColorStop(.9, 'rgba(213,213,213,.95)'); g1.addColorStop(1, 'rgba(213,213,213,0)');
      X.strokeStyle = g1; X.lineWidth = 2.2; X.lineCap = 'round';
      X.beginPath(); X.moveTo(128, PER_Y0); X.lineTo(1022, PER_Y0); X.stroke();
      var g2 = X.createLinearGradient(0, 98, 0, 487);
      g2.addColorStop(0, 'rgba(213,213,213,.35)'); g2.addColorStop(.25, 'rgba(213,213,213,.95)'); g2.addColorStop(.85, 'rgba(213,213,213,.95)'); g2.addColorStop(1, 'rgba(213,213,213,.15)');
      X.strokeStyle = g2; X.lineWidth = 2;
      X.beginPath(); X.moveTo(184, 98); X.lineTo(184, 487); X.stroke();
      X.fillStyle = '#d5d5d5'; X.lineJoin = 'round';
      X.beginPath(); X.moveTo(1030, PER_Y0); X.lineTo(1019.5, PER_Y0 - 5); X.lineTo(1019.5, PER_Y0 + 5); X.closePath(); X.fill();
      X.beginPath(); X.moveTo(184, 88.5); X.lineTo(178.8, 98.5); X.lineTo(189.2, 98.5); X.closePath(); X.fill();
      X.font = '17px "Gochi Hand", "Patrick Hand", cursive'; X.textAlign = 'center'; X.textBaseline = 'alphabetic';
      X.fillText('amplitude', 183.8, 77); X.fillText('temps', 987.5, 326);

      // --- signal : 4 périodes, avec « vague » de décalage, copies qui se superposent
      function courbe(k, dx, dy, alpha, lw) {
        X.globalAlpha = alpha; X.strokeStyle = '#5dcb34'; X.lineWidth = lw; X.lineJoin = 'round'; X.lineCap = 'round';
        X.beginPath();
        var ox = PER_X0 + k * PER_T + dx, oy = PER_Y0 + dy;
        for (var i = 0; i < PER_PTS.length; i += 2) {
          var px = ox + PER_PTS[i], py = oy - PER_PTS[i + 1];
          if (i === 0) X.moveTo(px, py); else X.lineTo(px, py);
        }
        X.stroke(); X.globalAlpha = 1;
      }
      var ghost = f < 212 ? 1 : f < 220 ? 1 - 0.68 * (f - 212) / 8 : f < 273 ? 0.32 : f < 288 ? 0.32 + 0.68 * (f - 273) / 15 : 1;
      for (var k = 0; k < 4; k++) {
        var off = WOB(f - 163 - 6 * k);
        courbe(k, 0, -off, k === 1 ? 1 : ghost, 1.7);
      }
      if (f >= 213 && f < 274) {
        var sc = SCOP(f);
        [0, 2, 3].forEach(function (k) { courbe(k, (1 - k) * PER_T * sc, 0, 1, 1.7); });
      }

      // --- flèche de la période et lettre T (suivent la bande rouge mobile) ; au 1er swipe la flèche se trace du centre vers les bords
      if (st >= 1) {
        var pf = st === 1 ? facil((s.rt - s.tst - 0.25) / 0.45) : 1, pl = st === 1 ? facil((s.rt - s.tst - 0.6) / 0.35) : 1;
        var ya = 130.8, xc = xr + PER_T / 2, xa = xc - (PER_T / 2 - 1) * pf, xb = xc + (PER_T / 2 - 1) * pf;
        X.strokeStyle = '#fe644e'; X.fillStyle = '#fe644e'; X.lineWidth = 2.4; X.lineCap = 'butt';
        if (pf > 0.02) {
          X.beginPath(); X.moveTo(xa + 8 * pf, ya); X.lineTo(xb - 8 * pf, ya); X.stroke();
          X.beginPath(); X.moveTo(xa, ya); X.lineTo(xa + 12 * pf, ya - 5.8 * pf); X.lineTo(xa + 12 * pf, ya + 5.8 * pf); X.closePath(); X.fill();
          X.beginPath(); X.moveTo(xb, ya); X.lineTo(xb - 12 * pf, ya - 5.8 * pf); X.lineTo(xb - 12 * pf, ya + 5.8 * pf); X.closePath(); X.fill();
        }
        X.globalAlpha = pl; X.font = '30px "Gochi Hand", "Patrick Hand", cursive'; X.textAlign = 'center';
        X.fillText('T', xc, 124 + 8 * (1 - pl)); X.globalAlpha = 1;
      }
    }
  });

  /* =================================================================== */
  /* Oscillation : balle, signal sinusoïdal et lampe (remplace GeoGebra)  */
  /* =================================================================== */
  SonW.def('oscillation', {
    build: function (el, I) {
      var s = I.s, cv = mk(900, 350);
      s.cv = cv; s.f = 0.5; s.tt = 0; s.play = true; s.TW = 5;
      el.innerHTML = '<div class="w-box"></div>';
      var box = $('.w-box', el);
      box.appendChild(cv.c);
      box.insertAdjacentHTML('beforeend',
        '<div class="w-ctrl long"><span class="w-lab">Fréquence</span><input class="w-range osc-f" type="range" min="0.2" max="2" step="0.05" value="0.5"><span class="w-val osc-v"></span></div>' +
        '<div class="w-row"><span class="w-lab">$T=\\dfrac{1}{f}=$</span><span class="w-val osc-t"></span>' + btn('⏸ Pause', '', 'data-p="1"') + '</div>');
      var rng = $('.osc-f', box);
      function aff() { s.f = +rng.value; $('.osc-v', box).textContent = fmt(s.f, 2) + ' Hz'; $('.osc-t', box).textContent = fmt(1 / s.f, 2) + ' s'; }
      rng.addEventListener('input', aff); aff();
      box.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-p]'); if (!b) return;
        s.play = !s.play; b.textContent = s.play ? '⏸ Pause' : '▶ Lecture';
      });
      if (window.MathJax && MathJax.startup && MathJax.startup.promise) MathJax.startup.promise.then(function () { MathJax.typesetPromise([box]).catch(function () { }); });
    },
    tick: function (el, I, t, dt) {
      var s = I.s, X = s.cv.x, W = s.cv.w, H = s.cv.h;
      if (s.play) s.tt = (s.tt + dt) % s.TW;
      var f = s.f, TW = s.TW, mid = 165, A = 110, px0 = 250, pw = 610;
      var tt = s.tt, y = Math.sin(2 * Math.PI * f * tt);        // le point est toujours sur la courbe y = sin(2πft)
      var xt = function (tm) { return px0 + tm / TW * pw; };
      X.clearRect(0, 0, W, H);
      X.lineCap = 'round'; X.lineJoin = 'round';

      // axe « amplitude » avec la balle
      X.strokeStyle = 'rgba(255,255,255,.6)'; X.lineWidth = 2;
      X.beginPath(); X.moveTo(110, 28); X.lineTo(110, 302); X.stroke();
      X.fillStyle = 'rgba(255,255,255,.7)'; X.beginPath(); X.moveTo(110, 20); X.lineTo(104, 32); X.lineTo(116, 32); X.closePath(); X.fill();
      X.font = '300 16px Outfit, sans-serif'; X.textAlign = 'center'; X.fillText('amplitude', 110, 14);
      X.strokeStyle = 'rgba(255,255,255,.25)'; X.lineWidth = 1.5;
      X.beginPath(); X.moveTo(96, mid); X.lineTo(124, mid); X.stroke();

      // axe du temps et graduations
      X.strokeStyle = 'rgba(255,255,255,.55)'; X.lineWidth = 2;
      X.beginPath(); X.moveTo(px0 - 10, mid); X.lineTo(px0 + pw + 20, mid); X.stroke();
      X.fillStyle = 'rgba(255,255,255,.7)'; X.beginPath(); X.moveTo(px0 + pw + 30, mid); X.lineTo(px0 + pw + 18, mid - 6); X.lineTo(px0 + pw + 18, mid + 6); X.closePath(); X.fill();
      X.fillStyle = 'rgba(255,255,255,.65)'; X.font = '300 15px Outfit, sans-serif';
      for (var k = 1; k <= TW; k++) {
        X.strokeStyle = 'rgba(255,255,255,.4)'; X.lineWidth = 1.5; X.beginPath(); X.moveTo(xt(k), mid - 5); X.lineTo(xt(k), mid + 5); X.stroke();
        X.fillText(k + ' s', xt(k), mid + 22);
      }
      X.textAlign = 'left'; X.fillText('temps', px0 + pw - 40, mid - 12); X.textAlign = 'center';

      // courbe y = sin(2πft) sur la fenêtre
      X.beginPath(); X.lineWidth = 3; X.strokeStyle = C.violet; X.shadowColor = C.violet; X.shadowBlur = 10;
      for (var i = 0; i <= 300; i++) { var tm = i / 300 * TW, yy = mid - A * Math.sin(2 * Math.PI * f * tm); if (i === 0) X.moveTo(xt(tm), yy); else X.lineTo(xt(tm), yy); }
      X.stroke(); X.shadowBlur = 0;

      // période T (accolade rose sous la courbe)
      var T = 1 / f;
      if (T <= TW) {
        var yb = 318;
        X.strokeStyle = C.pink; X.fillStyle = C.pink; X.lineWidth = 2.5;
        X.beginPath(); X.moveTo(xt(0), yb); X.lineTo(xt(T), yb); X.moveTo(xt(0), yb - 6); X.lineTo(xt(0), yb + 6); X.moveTo(xt(T), yb - 6); X.lineTo(xt(T), yb + 6); X.stroke();
        X.setLineDash([3, 6]); X.lineWidth = 1.2; X.strokeStyle = 'rgba(255,111,181,.5)';
        X.beginPath(); X.moveTo(xt(0), mid); X.lineTo(xt(0), yb); X.moveTo(xt(T), mid); X.lineTo(xt(T), yb); X.stroke(); X.setLineDash([]);
        X.font = '800 18px Outfit, sans-serif'; X.fillText('T', (xt(0) + xt(T)) / 2, yb - 9);
      }

      // point sur la courbe, balle sur l'axe, liaison pointillée
      var py = mid - A * y, bx = 110, by = mid - A * y;
      X.setLineDash([5, 6]); X.strokeStyle = 'rgba(255,196,58,.55)'; X.lineWidth = 1.5;
      X.beginPath(); X.moveTo(bx, by); X.lineTo(xt(tt), py); X.stroke(); X.setLineDash([]);
      X.fillStyle = C.amber; X.shadowColor = C.amber; X.shadowBlur = 16;
      X.beginPath(); X.arc(bx, by, 15, 0, 6.2832); X.fill();
      X.beginPath(); X.arc(xt(tt), py, 8, 0, 6.2832); X.fill(); X.shadowBlur = 0;

      // lampe : bleue quand le signal est positif, rouge quand il est négatif
      var pos = y >= 0, lc = pos ? '#3a8dff' : '#ff3b3b', lx = 110, ly = 332;
      X.fillStyle = lc; X.shadowColor = lc; X.shadowBlur = 26;
      X.beginPath(); X.arc(lx, ly, 13, 0, 6.2832); X.fill(); X.shadowBlur = 0;
      X.fillStyle = 'rgba(255,255,255,.75)'; X.font = '300 15px Outfit, sans-serif'; X.textAlign = 'left';
      X.fillText(pos ? 'signal positif' : 'signal négatif', lx + 24, ly + 5); X.textAlign = 'center';
    }
  });

  /* =================================================================== */
  /* Vidéo lue une seule fois (image finale figée), puis son (tonnerre)   */
  /* =================================================================== */
  // Taille « plein écran » en unités de diapo (équivalent d'un fond d'écran en background-size: contain)
  function plein(ratio) {
    var sc = (window.Reveal && Reveal.getScale && Reveal.getScale()) || 1, vw = window.innerWidth / sc, vh = window.innerHeight / sc;
    var w = Math.min(vw, vh * ratio);
    return { w: w, h: w / ratio, vw: vw, vh: vh };
  }
  // étape courante d'une diapo à fragments : nombre de fragments « étape » déjà affichés (un swipe = une étape)
  function etape(el) { var sec = el.closest('section'); return sec ? sec.querySelectorAll('.fragment.visible').length : 0; }
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  function facil(x) { x = clamp01(x); return 1 - Math.pow(1 - x, 3); }
  function stopTimers(s) { s.timers.forEach(clearTimeout); s.timers = []; }
  SonW.def('videoonce', {
    swipe: true,                       // plein écran : le glissement doit rester possible
    build: function (el, I) {
      var s = I.s, mp4 = el.getAttribute('data-mp4'), webm = el.getAttribute('data-webm');
      s.snd = el.getAttribute('data-sound'); s.delay = parseFloat(el.getAttribute('data-delay') || '2'); s.jeton = 0; s.timers = [];
      el.innerHTML = '<div class="gifonce"><video muted playsinline preload="auto" disablepictureinpicture>' +
        (mp4 ? '<source src="' + mp4 + '" type="video/mp4">' : '') + (webm ? '<source src="' + webm + '" type="video/webm">' : '') + '</video></div>';
      s.v = $('video', el); s.box = $('.gifonce', el);
      s.fit = function () { var d = plein(1); s.box.style.width = d.vw + 'px'; s.box.style.height = d.vh + 'px'; };
      s.fit(); if (window.Reveal && Reveal.on) Reveal.on('resize', s.fit);
      s.v.addEventListener('ended', function () {
        var j = s.jeton;
        if (s.snd) s.timers.push(setTimeout(function () { if (j === s.jeton) SonW.play(s.snd, 0.9); }, s.delay * 1000));   // le tonnerre retentit seul
      });
      if (s.snd) SonW.preload(s.snd);
    },
    enter: function (el, I) {
      var s = I.s; s.jeton++; stopTimers(s); s.fit();
      try { s.v.currentTime = 0; } catch (e) { }
      var p = s.v.play(); if (p && p.catch) p.catch(function () { });
    },
    leave: function (el, I) { var s = I.s; s.jeton++; stopTimers(s); s.v.pause(); }
  });

  /* =================================================================== */
  /* Sphère qui pulse dans un nuage de particules (reproduction du gif)   */
  /* Mesuré sur le gif d'origine en suivant les points d'une image à      */
  /* l'autre : chaque particule oscille radialement autour de sa position */
  /* de repos r0 avec une amplitude de 54 px (constante), une longueur     */
  /* d'onde de 93 px et la phase  ωt − k·r0 − 1,353  (période 3,33 s).    */
  /* Le rayon de la sphère varie de 46,5 ± 11,65 px (maximum à 0,135 T).   */
  /* =================================================================== */
  var SPH = { A: 54.1, k: 0.06767, c: 1.353, T: 3.33, R: 46.5, dR: 11.65, ph: 0.135, dens: 0.0068, rouge: 0.014, M: 80 };
  function semisSphere(s) {
    // positions de repos uniformes dans un disque de 485 px de rayon (comme dans le gif), densité 0,0072 point/px²
    var R = 485;
    s.Wl = 540 * s.vw / s.vh;                       // repère logique : hauteur 540, largeur selon l'écran
    s.n = Math.round(0.0072 * Math.PI * R * R);
    s.ux = new Float32Array(s.n); s.uy = new Float32Array(s.n); s.r0 = new Float32Array(s.n); s.px = new Float32Array(s.n); s.py = new Float32Array(s.n); s.rouge = new Uint8Array(s.n);
    for (var i = 0; i < s.n; i++) {
      var r = R * Math.sqrt(Math.random()) + 1e-3, a = Math.random() * 6.2832;
      s.px[i] = r * Math.cos(a); s.py[i] = r * Math.sin(a); s.r0[i] = r; s.rouge[i] = Math.random() < SPH.rouge ? 1 : 0;
    }
  }
  SonW.def('sphere', {
    build: function (el, I) {
      var s = I.s; s.clock = 0; s.pause = false;
      var c = document.createElement('canvas'); c.className = 'plein'; c.style.cursor = 'pointer';
      c.title = 'Cliquer pour mettre en pause / relancer'; el.appendChild(c); s.c = c;
      s.fit = function () {
        var d = plein(1), sc = (window.Reveal && Reveal.getScale && Reveal.getScale()) || 1;
        s.vw = d.vw; s.vh = d.vh; c.style.width = d.vw + 'px'; c.style.height = d.vh + 'px';
        var q = Math.min(2, Math.max(1, Math.round(sc * 2) / 2 + 0.5));            // résolution d'affichage
        c.width = Math.round(d.vw * sc * q); c.height = Math.round(d.vh * sc * q); s.q = sc * q;
        semisSphere(s);
      };
      s.fit(); if (window.Reveal && Reveal.on) Reveal.on('resize', s.fit);
      c.addEventListener('click', function () { s.pause = !s.pause; });
    },
    enter: function (el, I) { I.s.clock = 0; I.s.fit(); },
    tick: function (el, I, t, dt) {
      var s = I.s; if (!s.pause) s.clock += dt;
      var X = s.c.getContext('2d');
      var k = s.c.height / 540;                          // pixels du canvas par unité logique
      X.setTransform(1, 0, 0, 1, 0, 0); X.clearRect(0, 0, s.c.width, s.c.height);
      X.setTransform(k, 0, 0, k, s.c.width / 2, s.c.height / 2);
      var ph = 2 * Math.PI * s.clock / SPH.T, rs = SPH.R + SPH.dR * Math.cos(ph - 2 * Math.PI * SPH.ph), mi = rs + 5, i, u, f, x, y, bleu = new Path2D(), rouge = new Path2D();
      for (i = 0; i < s.n; i++) {
        u = SPH.A * Math.cos(ph - SPH.k * s.r0[i] - SPH.c);
        f = (s.r0[i] + u) / s.r0[i]; x = s.px[i] * f; y = s.py[i] * f;
        if (x * x + y * y < mi * mi || x < -s.Wl / 2 - 3 || x > s.Wl / 2 + 3 || y < -273 || y > 273) continue;
        (s.rouge[i] ? rouge : bleu).moveTo(x + 1.6, y); (s.rouge[i] ? rouge : bleu).arc(x, y, 1.6, 0, 6.2832);
      }
      X.fillStyle = '#3e74d1'; X.fill(bleu); X.fillStyle = '#d22143'; X.fill(rouge);
      X.fillStyle = '#5e5e5e'; X.beginPath(); X.arc(0, 0, rs, 0, 6.2832); X.fill();
    }
  });


  /* =================================================================== */
  /* Signaux carré et dents de scie : la période s'affiche au swipe        */
  /* (géométrie relevée sur les figures d'origine, repère 1080 × 608)      */
  /* =================================================================== */
  var FIGS = {
    carre: { gauche: 164.1, droite: 828.3, haut: 192.3, bas: 415.4,
             pts: [[164.1, 415.4], [258.9, 415.4], [258.9, 192.3], [354.0, 192.3], [354.0, 415.4], [449.1, 415.4], [449.1, 192.3], [543.5, 192.3], [543.5, 415.4], [639.0, 415.4], [639.0, 192.3], [734.4, 192.3], [734.4, 415.4], [828.3, 415.4]],
             bande: [449.0, 638.1], texte: [{ t: 'T = 0,8 ms', x: 543.2, y: 130.5, taille: 21 }], fleche: 142.9 },
    dent:  { pts: [[175.0, 414.1], [271.5, 193.1], [271.5, 415.2], [366.4, 193.1], [366.4, 415.2], [461.5, 193.1], [461.5, 415.2], [555.9, 193.1], [555.9, 415.2], [651.7, 193.1], [651.7, 415.2], [746.6, 193.1], [746.6, 415.2], [843.7, 193.9]],
             bande: [461.3, 557.1], texte: [{ t: 'T', x: 512.9, y: 123.6, taille: 30 }, { t: '= 0,4 ms', x: 511, y: 160.4, taille: 21 }], fleche: 131.6 }
  };
  SonW.def('signal', {
    build: function (el, I) {
      var s = I.s, cfg = FIGS[el.getAttribute('data-fig')] || FIGS.carre;
      s.cfg = cfg; s.rt = 0; s.st = -1;
      // repère logique 860 × 450 : on ne garde que la partie utile de la figure (x ∈ [100, 960], y ∈ [50, 500])
      var cv = mk(860, 450); s.cv = cv; cv.c.style.width = '900px'; cv.c.style.height = Math.round(900 * 450 / 860) + 'px'; cv.c.style.display = 'block'; cv.c.style.margin = '0 auto';
      el.appendChild(cv.c);
      if (document.fonts && document.fonts.load) { document.fonts.load('21px "Gochi Hand"'); document.fonts.load('17px "Gochi Hand"'); }
    },
    enter: function (el, I) { I.s.rt = 0; I.s.st = -1; },
    tick: function (el, I, t, dt) {
      var s = I.s, c = s.cfg, X = s.cv.x, st = etape(el);
      s.rt += dt; if (st !== s.st) { s.st = st; s.tst = s.rt; }
      var ap = st >= 1 ? clamp01((s.rt - s.tst) / 0.6) : 0;
      X.setTransform(2, 0, 0, 2, -200, -100); X.clearRect(0, 0, 1080, 608);
      var HY = 303.7, VX = 234.6;
      // bande de la période (apparaît au swipe : dévoilée de haut en bas)
      if (ap > 0) {
        var h = 374 * facil(ap), y0 = 101.7, w = c.bande[1] - c.bande[0], g = X.createLinearGradient(0, y0, 0, y0 + h);
        g.addColorStop(0, COL_ROUGE); g.addColorStop(Math.max(0, 1 - 16 / Math.max(h, 1)), COL_ROUGE); g.addColorStop(1, 'rgba(254,100,78,0)');
        X.fillStyle = ap < 1 ? g : COL_ROUGE; X.fillRect(c.bande[0], y0, w, h);
      }
      // axes et graduations
      var g1 = X.createLinearGradient(124, 0, 916, 0);
      g1.addColorStop(0, 'rgba(213,213,213,0)'); g1.addColorStop(.06, 'rgba(213,213,213,.95)'); g1.addColorStop(.9, 'rgba(213,213,213,.95)'); g1.addColorStop(1, 'rgba(213,213,213,0)');
      X.strokeStyle = g1; X.lineWidth = 2.2; X.lineCap = 'round'; X.beginPath(); X.moveTo(124, HY); X.lineTo(918, HY); X.stroke();
      var g2 = X.createLinearGradient(0, 98, 0, 487);
      g2.addColorStop(0, 'rgba(213,213,213,.35)'); g2.addColorStop(.25, 'rgba(213,213,213,.95)'); g2.addColorStop(.85, 'rgba(213,213,213,.95)'); g2.addColorStop(1, 'rgba(213,213,213,.15)');
      X.strokeStyle = g2; X.lineWidth = 2; X.beginPath(); X.moveTo(VX, 98); X.lineTo(VX, 487); X.stroke();
      X.strokeStyle = 'rgba(213,213,213,.7)'; X.lineWidth = 1.3;
      for (var j = -8; j <= 52; j++) { var tx = VX + j * 11.9, hh = j % 4 === 0 ? 5.5 : 2.4; X.beginPath(); X.moveTo(tx, HY - hh); X.lineTo(tx, HY + hh); X.stroke(); }
      X.fillStyle = '#d5d5d5'; X.lineJoin = 'round';
      X.beginPath(); X.moveTo(923.8, HY); X.lineTo(914.5, HY - 4.7); X.lineTo(914.5, HY + 4.7); X.closePath(); X.fill();
      X.beginPath(); X.moveTo(VX, 89.3); X.lineTo(VX - 4.7, 98.3); X.lineTo(VX + 4.7, 98.3); X.closePath(); X.fill();
      X.font = '17px "Gochi Hand", "Patrick Hand", cursive'; X.textAlign = 'center';
      X.fillText('amplitude', 234.4, 78.5); X.fillText('temps', 889.5, 324.5); X.fillText('0,2 ms', 291.5, 330);
      // signal
      X.beginPath(); X.strokeStyle = '#a8f060'; X.lineWidth = 3.4; X.lineJoin = 'round'; X.lineCap = 'butt';
      c.pts.forEach(function (q, i) { if (i === 0) X.moveTo(q[0], q[1]); else X.lineTo(q[0], q[1]); });
      X.stroke();
      // flèche de la période (tracée du centre vers les bords) et texte
      if (ap > 0) {
        var pf = facil((s.rt - s.tst - 0.25) / 0.45), pl = facil((s.rt - s.tst - 0.6) / 0.35), xm = (c.bande[0] + c.bande[1]) / 2, half = (c.bande[1] - c.bande[0]) / 2 - 0.5;
        X.strokeStyle = '#fe644e'; X.fillStyle = '#fe644e'; X.lineWidth = 2.2; X.lineCap = 'butt';
        if (pf > 0.02) {
          var xa = xm - half * pf, xb = xm + half * pf, ya = c.fleche;
          X.beginPath(); X.moveTo(xa + 7 * pf, ya); X.lineTo(xb - 7 * pf, ya); X.stroke();
          X.beginPath(); X.moveTo(xa, ya); X.lineTo(xa + 10 * pf, ya - 3.6 * pf); X.lineTo(xa + 10 * pf, ya + 3.6 * pf); X.closePath(); X.fill();
          X.beginPath(); X.moveTo(xb, ya); X.lineTo(xb - 10 * pf, ya - 3.6 * pf); X.lineTo(xb - 10 * pf, ya + 3.6 * pf); X.closePath(); X.fill();
        }
        X.globalAlpha = pl; X.textAlign = 'center';
        c.texte.forEach(function (tx) { X.font = tx.taille + 'px "Gochi Hand", "Patrick Hand", cursive'; X.fillText(tx.t, tx.x, tx.y + 6 * (1 - pl)); });
        X.globalAlpha = 1;
      }
    }
  });

})();
