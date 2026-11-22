/*
 * Soleil — socle commun des animations interactives et des QCM.
 *
 * Une animation se déclare dans le Markdown par :
 *     <div class="sw" data-w="nom" data-prevent-swipe></div>
 * et se définit par S.register('nom', function (root, S) { ... return { frame(t, dt) {...} }; }).
 * Elle n'est construite qu'à la première apparition de sa slide et ne tourne que
 * tant que cette slide est affichée (économie de CPU).
 */
(function () {
  'use strict';
  var S = window.Soleil = window.Soleil || {};
  S.widgets = {};
  S.register = function (name, fn) { S.widgets[name] = fn; };

  var TAU = Math.PI * 2, D2R = Math.PI / 180;

  /* ------------------------------------------------------------------ outils */
  var U = S.util = {};
  U.TAU = TAU; U.D2R = D2R;
  U.clamp = function (x, a, b) { return x < a ? a : (x > b ? b : x); };
  U.lerp = function (a, b, t) { return a + (b - a) * t; };
  U.ease = function (t) { t = U.clamp(t, 0, 1); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  U.smooth = function (a, b, x) { var t = U.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  var SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  /** 1234.5 -> « 1 234,5 » (espace fine insécable) */
  U.fr = function (x, d) {
    var s = Number(x).toFixed(d == null ? 0 : d), p = s.split('.');
    p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return p.join(',').replace('-', '−');
  };
  /** 3.85e26 -> « 3,85×10²⁶ » */
  U.sci = function (x, d) {
    if (x === 0) return '0';
    var e = Math.floor(Math.log10(Math.abs(x))), m = x / Math.pow(10, e);
    var ms = m.toFixed(d == null ? 2 : d);
    if (parseFloat(ms) >= 10) { ms = (m / 10).toFixed(d == null ? 2 : d); e += 1; }
    var es = String(e).split('').map(function (c) { return SUP[c] || c; }).join('');
    return ms.replace('.', ',') + '×10' + es;
  };
  U.rgb = function (c, a) {
    return a == null || a >= 1 ? 'rgb(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ')'
      : 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + a + ')';
  };

  /**
   * Texte avec indices et exposants dans un canvas : « R_T », « P_{diff} », « T^{4} ».
   * Syntaxe : _x ou _{...} pour un indice, ^x ou ^{...} pour un exposant.
   * halo : couleur d'un contour sombre derrière le texte (lisibilité sur fond chargé).
   */
  U.rich = function (g, str, x, y, col, size, al, w, halo) {
    var segs = [], re = /([_^])(\{[^}]*\}|[A-Za-z0-9λπσεδΔαβγ])|([^_^]+)/g, m;
    while ((m = re.exec(str))) {
      if (m[3] != null) segs.push([m[3], 0]);
      else segs.push([m[2].charAt(0) === '{' ? m[2].slice(1, -1) : m[2], m[1] === '_' ? 1 : 2]);
    }
    var wt = w || 400, fs = function (k) { return wt + ' ' + (k ? size * 0.68 : size) + 'px Outfit, sans-serif'; };
    var tot = 0;
    segs.forEach(function (sg) { g.font = fs(sg[1]); sg.w = g.measureText(sg[0]).width; tot += sg.w; });
    var cx = al === 'center' ? x - tot / 2 : al === 'right' ? x - tot : x;
    g.textAlign = 'left';
    segs.forEach(function (sg) {
      g.font = fs(sg[1]);
      var yy = y + (sg[1] === 1 ? size * 0.22 : sg[1] === 2 ? -size * 0.38 : 0);
      if (halo) { g.lineWidth = Math.max(3, size * 0.28); g.lineJoin = 'round'; g.strokeStyle = halo; g.strokeText(sg[0], cx, yy); }
      g.fillStyle = col; g.fillText(sg[0], cx, yy); cx += sg.w;
    });
    return tot;
  };

  /* Longueur d'onde (nm) -> couleur approximative (algorithme de Bruton), [r,g,b] 0-255 */
  U.wl2rgb = function (nm) {
    var r = 0, g = 0, b = 0, f;
    if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm <= 780) { r = 1; }
    if (nm >= 380 && nm < 420) f = 0.3 + 0.7 * (nm - 380) / 40;
    else if (nm > 700 && nm <= 780) f = 0.3 + 0.7 * (780 - nm) / 80;
    else if (nm >= 420 && nm <= 700) f = 1; else f = 0;
    var gm = 0.8;
    return [255 * Math.pow(r * f, gm), 255 * Math.pow(g * f, gm), 255 * Math.pow(b * f, gm)];
  };

  /* Loi de Planck : luminance spectrale B(λ,T) en W·sr⁻¹·m⁻³ ; λ en mètres */
  var H = 6.62607015e-34, C = 2.99792458e8, KB = 1.380649e-23, SIGMA = 5.670374419e-8;
  U.h = H; U.c = C; U.kB = KB; U.sigma = SIGMA;
  U.planck = function (lam, T) {
    var x = H * C / (lam * KB * T);
    if (x > 700) return 0;
    return 2 * H * C * C / (Math.pow(lam, 5) * (Math.exp(x) - 1));
  };
  U.wien = 2.897771955e-3; // m·K

  /* Couleur d'un corps noir de température T : intégration de Planck sur les
     fonctions colorimétriques CIE 1931 (ajustement analytique de Wyman et al.). */
  function g(l, mu, s1, s2) { var t = (l - mu) / (l < mu ? s1 : s2); return Math.exp(-0.5 * t * t); }
  var bbCache = {};
  U.bbRGB = function (T) {
    T = Math.round(T / 20) * 20;
    if (bbCache[T]) return bbCache[T];
    var X = 0, Y = 0, Z = 0;
    for (var l = 360; l <= 830; l += 5) {
      var p = U.planck(l * 1e-9, T);
      X += p * (1.056 * g(l, 599.8, 37.9, 31.0) + 0.362 * g(l, 442.0, 16.0, 26.7) - 0.065 * g(l, 501.1, 20.4, 26.2));
      Y += p * (0.821 * g(l, 568.8, 46.9, 40.5) + 0.286 * g(l, 530.9, 16.3, 31.1));
      Z += p * (1.217 * g(l, 437.0, 11.8, 36.0) + 0.681 * g(l, 459.0, 26.0, 13.8));
    }
    var r = 3.2406 * X - 1.5372 * Y - 0.4986 * Z;
    var gg = -0.9689 * X + 1.8758 * Y + 0.0415 * Z;
    var b = 0.0557 * X - 0.2040 * Y + 1.0570 * Z;
    var m = Math.max(r, gg, b, 1e-30);
    function gam(v) { v = Math.max(0, v / m); return 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055); }
    return (bbCache[T] = [gam(r), gam(gg), gam(b)]);
  };

  /* ---------------------------------------------------------------- astronomie */
  var A = S.astro = {};
  A.K = 1361;                       // constante solaire, W/m²
  A.EPS = 23.44 * D2R;              // obliquité
  A.ECC = 0.0167;                   // excentricité de l'orbite terrestre
  A.PERI = 3;                       // jour du périhélie (3 janvier)
  A.VARPI = 282.94 * D2R;           // longitude écliptique du périhélie
  /** résout E - e·sinE = M */
  A.kepler = function (M, e) {
    var E = M;
    for (var i = 0; i < 8; i++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    return E;
  };
  /** n : jour de l'année (1..365, réel). Retourne r (ua), nu (anomalie vraie), lamS (longitude écliptique du Soleil), dec */
  A.state = function (n, e) {
    e = e == null ? A.ECC : e;
    var M = TAU * (n - A.PERI) / 365.25;
    var E = A.kepler(M, e);
    var nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));
    var r = 1 - e * Math.cos(E);
    // déclinaison : calculée avec l'orbite réelle (indépendante de l'excentricité « exagérée » du dessin)
    var E0 = A.kepler(M, A.ECC);
    var nu0 = 2 * Math.atan2(Math.sqrt(1 + A.ECC) * Math.sin(E0 / 2), Math.sqrt(1 - A.ECC) * Math.cos(E0 / 2));
    var lamS = nu0 + A.VARPI;
    var dec = Math.asin(Math.sin(A.EPS) * Math.sin(lamS));
    return { r: r, nu: nu, M: M, lamS: lamS, dec: dec, r0: 1 - A.ECC * Math.cos(E0) };
  };
  A.dec = function (n) { return A.state(n).dec; };
  /** demi-durée du jour (angle horaire du coucher), rad */
  A.h0 = function (lat, dec) {
    var t = -Math.tan(lat) * Math.tan(dec);
    return Math.acos(U.clamp(t, -1, 1));
  };
  /** durée du jour en heures */
  A.dayLen = function (lat, dec) { return 24 * A.h0(lat, dec) / Math.PI; };
  /** éclairement moyen journalier au sommet de l'atmosphère, W/m² */
  A.Q = function (lat, n) {
    var s = A.state(n), dec = s.dec;
    lat = U.clamp(lat, -89.99 * D2R, 89.99 * D2R);
    var h0 = A.h0(lat, dec);
    return (A.K / Math.PI) / (s.r0 * s.r0) * (h0 * Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.sin(h0));
  };
  /** élévation du Soleil : lat, dec, angle horaire H (rad) */
  A.elev = function (lat, dec, Hh) {
    return Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(Hh));
  };
  /** azimut depuis le Sud, positif vers l'Ouest (rad) */
  A.azim = function (lat, dec, Hh) {
    return Math.atan2(Math.sin(Hh), Math.cos(Hh) * Math.sin(lat) - Math.tan(dec) * Math.cos(lat));
  };
  var MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  var CUM = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  A.MOIS = MOIS;
  A.dateStr = function (n) {
    n = Math.round(U.clamp(n, 1, 365));
    var m = 0; while (m < 11 && n > CUM[m + 1]) m++;
    var j = n - CUM[m];
    return (j === 1 ? '1er' : j) + ' ' + MOIS[m];
  };
  A.dayOf = function (m, j) { return CUM[m] + j; }; // m de 0 à 11
  /** saisons [hémisphère nord, hémisphère sud] pour le jour n (21 mars, 21 juin, 22 sept., 21 déc.) */
  A.season = function (n) {
    var N = n >= 355 || n < 80 ? 'hiver' : n < 172 ? 'printemps' : n < 265 ? 'été' : 'automne';
    var Sx = { hiver: 'été', printemps: 'automne', été: 'hiver', automne: 'printemps' }[N];
    return [N, Sx];
  };

  /* ------------------------------------------------------------------ DOM / UI */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  S.el = el;

  S.stage = function (root, W, Hh, cls) {
    var wrap = el('div', 'sw-stage' + (cls ? ' ' + cls : ''));
    var cv = document.createElement('canvas');
    cv.width = W; cv.height = Hh;
    cv.style.aspectRatio = W + ' / ' + Hh;
    wrap.appendChild(cv);
    root.appendChild(wrap);
    var st = { cv: cv, g: cv.getContext('2d'), W: W, H: Hh, q: 1, wrap: wrap, dirty: true, ready: false };
    st.fit = function () {
      var cw = cv.clientWidth;
      if (!cw) return false;
      var sc = (window.Reveal && Reveal.getScale) ? Reveal.getScale() : 1;
      var q = U.clamp((window.devicePixelRatio || 1) * sc * cw / W, 1, 3);
      if (!st.ready || Math.abs(q - st.q) > 0.2) {
        st.q = q; cv.width = Math.round(W * q); cv.height = Math.round(Hh * q); st.ready = true; st.dirty = true;
      }
      st.g.setTransform(cv.width / W, 0, 0, cv.height / Hh, 0, 0);
      return true;
    };
    st.pos = function (ev) {
      var r = cv.getBoundingClientRect();
      return [(ev.clientX - r.left) / r.width * W, (ev.clientY - r.top) / r.height * Hh];
    };
    return st;
  };

  /** Glisser / survoler sur un canvas (coordonnées logiques) */
  S.pointer = function (st, h) {
    var cv = st.cv, down = false;
    cv.style.touchAction = 'none';
    cv.addEventListener('pointerdown', function (e) {
      down = true; try { cv.setPointerCapture(e.pointerId); } catch (x) { }
      var p = st.pos(e); if (h.down) h.down(p[0], p[1], e); st.dirty = true; e.preventDefault();
    });
    cv.addEventListener('pointermove', function (e) {
      var p = st.pos(e);
      if (down && h.drag) h.drag(p[0], p[1], e);
      if (h.move) h.move(p[0], p[1], e, down);
      st.dirty = true;
    });
    function up(e) { if (down) { down = false; if (h.up) h.up(e); } }
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);
    cv.addEventListener('pointerleave', function (e) { if (h.leave) h.leave(e); st.dirty = true; });
  };

  var UI = S.ui = {};
  UI.row = function (parent, cls) { var r = el('div', 'sw-ctrl' + (cls ? ' ' + cls : '')); parent.appendChild(r); return r; };
  UI.slider = function (parent, o) {
    var lab = el('label', 'sw-sl');
    if (o.color) lab.style.setProperty('--sw-c', o.color);
    var t = el('span', 'sw-sl-t', o.label || '');
    var inp = document.createElement('input');
    inp.type = 'range'; inp.min = o.min; inp.max = o.max; inp.step = o.step || 'any'; inp.value = o.value;
    var out = el('output', 'sw-sl-o');
    if (o.w) out.style.minWidth = o.w + 'em';
    var fmt = o.fmt || function (v) { return U.fr(v, o.dec || 0); };
    var api = {
      el: lab, input: inp,
      get: function () { return parseFloat(inp.value); },
      set: function (v) { inp.value = v; show(); },
      fmt: fmt
    };
    function show() {
      out.textContent = fmt(api.get());
      var p = (api.get() - o.min) / (o.max - o.min) * 100;
      inp.style.setProperty('--p', U.clamp(p, 0, 100) + '%');
    }
    inp.addEventListener('input', function () { show(); if (o.oninput) o.oninput(api.get()); });
    ['keydown', 'keyup'].forEach(function (k) { inp.addEventListener(k, function (e) { e.stopPropagation(); }); });
    lab.appendChild(t); lab.appendChild(inp); lab.appendChild(out);
    parent.appendChild(lab); show();
    return api;
  };
  UI.btn = function (parent, text, fn, cls) {
    var b = el('button', 'sw-btn' + (cls ? ' ' + cls : ''), text);
    b.type = 'button';
    b.addEventListener('click', function (e) { e.stopPropagation(); fn(e, b); });
    ['keydown', 'keyup'].forEach(function (k) { b.addEventListener(k, function (e) { e.stopPropagation(); }); });
    parent.appendChild(b); return b;
  };
  /** items : [{id, label, color?}] ; multi : plusieurs actifs possibles */
  UI.chips = function (parent, items, o) {
    o = o || {};
    var box = el('div', 'sw-chips'), sel = {}, btns = {};
    items.forEach(function (it) {
      var b = el('button', 'sw-chip', it.label); b.type = 'button';
      if (it.color) b.style.setProperty('--sw-c', it.color);
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        if (o.multi) { sel[it.id] = !sel[it.id]; } else { sel = {}; sel[it.id] = true; }
        paint(); if (o.onchange) o.onchange(it.id, api.get());
      });
      ['keydown', 'keyup'].forEach(function (k) { b.addEventListener(k, function (e) { e.stopPropagation(); }); });
      btns[it.id] = b; box.appendChild(b);
    });
    function paint() { Object.keys(btns).forEach(function (k) { btns[k].classList.toggle('on', !!sel[k]); }); }
    var api = {
      el: box,
      get: function () { return o.multi ? Object.keys(sel).filter(function (k) { return sel[k]; }) : Object.keys(sel)[0]; },
      has: function (id) { return !!sel[id]; },
      set: function (id, v) { if (o.multi) sel[id] = v == null ? true : v; else { sel = {}; sel[id] = true; } paint(); }
    };
    if (o.value != null) { (Array.isArray(o.value) ? o.value : [o.value]).forEach(function (v) { sel[v] = true; }); paint(); }
    parent.appendChild(box); return api;
  };
  UI.readout = function (parent, cls) { var r = el('div', 'sw-read' + (cls ? ' ' + cls : '')); parent.appendChild(r); return r; };

  /* ---------------------------------------------------------- dessin : le Soleil */
  var sunTex = null;
  function hash(x, y) { var h = (x * 374761393 + y * 668265263) | 0; h = (h ^ (h >> 13)) * 1274126177 | 0; return ((h ^ (h >> 16)) >>> 0) / 4294967295; }
  function vnoise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    return U.lerp(U.lerp(hash(xi, yi), hash(xi + 1, yi), u), U.lerp(hash(xi, yi + 1), hash(xi + 1, yi + 1), u), v);
  }
  function makeSunTex() {
    var N = 256, c = document.createElement('canvas'); c.width = c.height = N;
    var g = c.getContext('2d'), im = g.createImageData(N, N), d = im.data;
    for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
      var n = 0, a = 0.55, f = 1 / 40;
      for (var o = 0; o < 4; o++) { n += a * vnoise(x * f + 11 * o, y * f + 7 * o); a *= 0.5; f *= 2.1; }
      var gr = 1 - Math.abs(2 * (n / 0.94) - 1);     // cellules de granulation
      var k = Math.pow(U.clamp(0.25 + 0.9 * gr, 0, 1), 1.2);
      var i = (y * N + x) * 4;
      d[i] = 255; d[i + 1] = 90 + 150 * k; d[i + 2] = 5 + 120 * k * k; d[i + 3] = 255;
    }
    g.putImageData(im, 0, 0); return c;
  }
  /** Soleil animé : halo, granulation, assombrissement centre-bord, protubérances */
  S.drawSun = function (g, cx, cy, R, t, o) {
    o = o || {};
    if (!sunTex) sunTex = makeSunTex();
    var pulse = 1 + 0.03 * Math.sin(t * 1.3);
    g.save();
    g.globalCompositeOperation = 'lighter';
    var h = g.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * (o.halo || 2.6) * pulse);
    h.addColorStop(0, 'rgba(255,170,40,0.55)'); h.addColorStop(0.3, 'rgba(255,110,20,0.22)');
    h.addColorStop(0.65, 'rgba(255,60,90,0.07)'); h.addColorStop(1, 'rgba(255,60,90,0)');
    g.fillStyle = h; g.beginPath(); g.arc(cx, cy, R * (o.halo || 2.6) * pulse, 0, TAU); g.fill();
    g.restore();
    // protubérances
    if (!o.noProm) {
      g.save(); g.lineCap = 'round';
      for (var i = 0; i < 5; i++) {
        var a = i * 1.37 + 0.4 + 0.05 * Math.sin(t * 0.3 + i), s = 0.55 + 0.45 * Math.sin(t * 0.5 + i * 2.1);
        var x0 = cx + Math.cos(a) * R * 0.98, y0 = cy + Math.sin(a) * R * 0.98;
        var da = 0.07 + 0.012 * i;
        var x1 = cx + Math.cos(a + da) * R * 0.98, y1 = cy + Math.sin(a + da) * R * 0.98;
        var xm = cx + Math.cos(a + da / 2) * R * (1.04 + 0.12 * s), ym = cy + Math.sin(a + da / 2) * R * (1.04 + 0.12 * s);
        g.strokeStyle = 'rgba(255,120,40,' + (0.45 + 0.35 * s) + ')'; g.lineWidth = Math.max(2.5, R * 0.035);
        g.shadowColor = 'rgba(255,140,40,.9)'; g.shadowBlur = R * 0.1;
        g.beginPath(); g.moveTo(x0, y0); g.quadraticCurveTo(xm, ym, x1, y1); g.stroke();
      }
      g.restore();
    }
    g.save();
    g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.clip();
    var S1 = R * 3.2;
    g.save(); g.translate(cx, cy); g.rotate(t * 0.025); g.drawImage(sunTex, -S1 / 2, -S1 / 2, S1, S1); g.restore();
    g.globalCompositeOperation = 'screen'; g.globalAlpha = 0.45;
    g.save(); g.translate(cx, cy); g.rotate(-t * 0.04 + 1); g.drawImage(sunTex, -S1 / 2.6, -S1 / 2.6, S1 / 1.3, S1 / 1.3); g.restore();
    g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
    var d = g.createRadialGradient(cx, cy, R * 0.15, cx, cy, R);
    d.addColorStop(0, 'rgba(255,240,170,0.35)'); d.addColorStop(0.6, 'rgba(255,140,30,0.0)');
    d.addColorStop(0.92, 'rgba(160,30,0,0.55)'); d.addColorStop(1, 'rgba(90,10,0,0.85)');
    g.fillStyle = d; g.fillRect(cx - R, cy - R, 2 * R, 2 * R);
    g.restore();
  };

  /* ------------------------------------------------------- cycle de vie des animations */
  var inst = [];
  function scan() {
    document.querySelectorAll('.sw[data-w]').forEach(function (e) {
      if (e._sw) return;
      e._sw = { el: e, name: e.getAttribute('data-w'), api: null, failed: false };
      inst.push(e._sw);
    });
  }
  function isActive(e) {
    var s = e.closest('section');
    return !!s && s.classList.contains('present');
  }
  function build(w) {
    var f = S.widgets[w.name];
    if (!f) { w.failed = true; w.el.textContent = 'Animation « ' + w.name + ' » introuvable.'; return; }
    try { w.el.classList.add('sw-built'); w.api = f(w.el, S) || {}; }
    catch (err) { w.failed = true; console.error('[Soleil] ' + w.name, err); w.el.textContent = 'Erreur dans l’animation « ' + w.name + ' » : ' + err.message; }
  }
  var last = 0;
  function tick(ms) {
    requestAnimationFrame(tick);
    if (document.hidden) return;
    var t = ms / 1000, dt = Math.min(0.1, Math.max(0, t - last)); last = t;
    for (var i = 0; i < inst.length; i++) {
      var w = inst[i];
      if (w.failed) continue;
      if (!isActive(w.el)) { if (w.api && w.api.wasOn && w.api.hide) { w.api.wasOn = false; w.api.hide(); } continue; }
      if (!w.api) build(w);
      if (w.api && w.api.frame) {
        if (!w.api.wasOn) { w.api.wasOn = true; if (w.api.show) w.api.show(); }
        try { w.api.frame(t, dt); } catch (err) { w.failed = true; console.error('[Soleil] ' + w.name, err); }
      }
    }
    trackSlide();
  }

  /* ----------------------------------------------- ambiance par partie (fond, halos) */
  var lastSlide = null;
  function trackSlide() {
    var cur = document.querySelector('.reveal .slides section.present section.present') ||
      document.querySelector('.reveal .slides > section.present');
    if (cur === lastSlide) return;
    lastSlide = cur;
    var part = 'intro';
    if (cur) {
      var stack = cur.closest('.slides > section') || cur;
      var m = stack.querySelector('[data-part]');
      if (m) part = m.getAttribute('data-part');
      else if (cur.querySelector('[data-part]')) part = cur.querySelector('[data-part]').getAttribute('data-part');
    }
    document.documentElement.setAttribute('data-part', part);
    document.documentElement.classList.toggle('on-qcm', !!(cur && cur.querySelector('.qcm')));
  }

  /* ----------------------------------------------------------------------- QCM */
  function currentQcm() {
    var s = document.querySelector('.reveal .slides section.present section.present') ||
      document.querySelector('.reveal .slides > section.present');
    return s ? s.querySelector('.qcm') : null;
  }
  function pick(q, i) {
    var cards = q.querySelectorAll('.qcm-opt');
    if (!cards[i]) return;
    var was = cards[i].classList.contains('sel');
    cards.forEach(function (c) { c.classList.remove('sel'); });
    if (!was) cards[i].classList.add('sel');
  }
  window.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var n = parseInt(e.key, 10);
    if (!(n >= 1 && n <= 4)) return;
    var q = currentQcm(); if (!q) return;
    e.stopImmediatePropagation(); e.preventDefault();
    pick(q, n - 1);
  }, true);
  document.addEventListener('click', function (e) {
    var c = e.target.closest && e.target.closest('.qcm-opt');
    if (c) { var q = c.closest('.qcm'); var i = Array.prototype.indexOf.call(q.querySelectorAll('.qcm-opt'), c); pick(q, i); return; }
    var b = e.target.closest && e.target.closest('.qcm-go');
    if (b && window.Reveal) { Reveal.next(); }
  });
  function bindQcmEvents() {
    if (!window.Reveal || !Reveal.on) return false;
    function sync(e, on) {
      var f = e.fragment; if (!f || !f.classList.contains('qcm-expl')) return;
      var q = f.closest('.qcm'); if (q) q.classList.toggle('revealed', on);
    }
    Reveal.on('fragmentshown', function (e) { sync(e, true); });
    Reveal.on('fragmenthidden', function (e) { sync(e, false); });
    return true;
  }

  function relayout() { if (window.Reveal && Reveal.layout) { try { Reveal.layout(); } catch (e) { } } }
  function boot() {
    scan();
    // le DOM des animations est construit d'emblée (pour que reveal.js centre correctement les slides) ;
    // seul leur dessin est paresseux (voir tick)
    inst.forEach(build);
    relayout();
    if (window.Reveal && Reveal.on) { Reveal.on('ready', relayout); }
    setTimeout(relayout, 600);
    if (!bindQcmEvents()) { var n = 0, iv = setInterval(function () { if (bindQcmEvents() || ++n > 50) clearInterval(iv); }, 100); }
    requestAnimationFrame(tick);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
