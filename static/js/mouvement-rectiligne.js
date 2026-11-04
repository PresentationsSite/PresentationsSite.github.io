/*
 * Mouvement rectiligne uniformément varié : x(t), v(t), a(t) en direct.
 *
 *   x(t) = x0 + v0·t + ½·a·t²     v(t) = v0 + a·t     a(t) = a
 *
 * Trois curseurs (x(0), v(0), a) déforment les courbes en direct ; sous le
 * graphe, une chronophotographie montre 10 positions régulièrement espacées
 * dans le temps sur l'axe du mouvement (après un demi-tour, les positions du
 * retour sont décalées sur une seconde ligne pour ne pas masquer l'aller). Le bouton « Lecture » lance le
 * mobile M sur cet axe et, en même temps, un point parcourt chaque courbe ;
 * une ligne pointillée verticale les relie à l'instant t sur l'axe des t.
 *
 * Même style que les schémas graphexva*.png : axes #D5D5D5, x bleu,
 * v jaune, a vert, étiquettes en italique.
 *
 * Utilisation dans une slide :
 *   <div class="mru-interactif"></div>
 *   <script src="/js/mouvement-rectiligne.js" defer></script>
 */
(function () {
  'use strict';

  var COUL = { axe: '#D5D5D5', x: '#48A0F5', v: '#F8DC57', a: '#80D754', m: '#EB53A0', point: '#D5D5D5', texte2: '#aaa' };
  var SERIF = '"Times New Roman", Times, "STIX Two Text", serif';
  var T = 4;            // durée représentée (unités arbitraires)
  var YMAX = 10;        // échelle verticale : de −10 à +10
  var XMAX = 10;        // axe de la chronophotographie : de −10 à +10
  var DUREE = 5000;     // durée de la lecture (ms)
  var N = 10;           // nombre de positions de la chronophotographie

  // Géométrie (unités du viewBox)
  var W = 640, H = 600;
  var G = { x0: 60, x1: 600, yh: 50, yb: 400 };          // zone du graphe
  var Y0 = (G.yh + G.yb) / 2;                          // ordonnée de l'axe des t
  var C = { y: 490, x0: 50, x1: 610 };                 // axe de la chronophotographie
  var DY_RETOUR = 52;                                  // décalage de la ligne du retour
  var CX0 = C.x0 + 15, CX1 = C.x1 - 25;                // graduation −10 … +10

  var SVGNS = 'http://www.w3.org/2000/svg';
  function el(nom, attrs, parent) {
    var e = document.createElementNS(SVGNS, nom);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function html(nom, attrs, parent) {
    var e = document.createElement(nom);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function fr(x) { return (Math.round(x * 10) / 10).toFixed(1).replace('.', ',').replace('-', '−'); }
  function fleche(parent, x1, y1, x2, y2) {
    el('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: COUL.axe, 'stroke-width': 3 }, parent);
    var ux = x2 - x1, uy = y2 - y1, L = Math.hypot(ux, uy); ux /= L; uy /= L;
    el('path', { d: 'M' + (x2 + ux * 12) + ' ' + (y2 + uy * 12) + 'L' + (x2 - uy * 7) + ' ' + (y2 + ux * 7) + 'L' + (x2 + ux * 2) + ' ' + (y2 + uy * 2) + 'L' + (x2 + uy * 7) + ' ' + (y2 - ux * 7) + 'Z', fill: COUL.axe }, parent);
  }
  function texte(parent, x, y, contenu, attrs) {
    var t = el('text', Object.assign({ x: x, y: y, 'font-family': SERIF, 'font-style': 'italic', 'font-size': 30 }, attrs || {}), parent);
    t.textContent = contenu;
    return t;
  }

  var CSS = '.mru-interactif{display:flex;align-items:center;justify-content:center;gap:24px;}' +
    '.mru-interactif svg{width:640px;max-width:66%;height:auto;overflow:visible;}' +
    '.mru-interactif .ctrl{display:flex;flex-direction:column;gap:22px;width:250px;text-align:left;font-size:26px;}' +
    '.mru-interactif .ctrl label{display:block;}' +
    '.mru-interactif .ctrl .nom{font-family:' + SERIF + ';font-style:italic;font-size:32px;}' +
    '.mru-interactif .ctrl .val{float:right;font-variant-numeric:tabular-nums;color:#eee;}' +
    '.mru-interactif .ctrl input[type=range]{width:100%;margin:6px 0 0;cursor:pointer;}' +
    '.mru-interactif .ctrl button{font:inherit;font-size:26px;color:#FF968D;background:none;border:solid 3px #FF968D;border-radius:12px;padding:6px 18px;cursor:pointer;margin-top:8px;}' +
    '.mru-interactif .ctrl button:hover{background:rgba(255,150,141,0.15);}';

  function init(conteneur) {
    if (conteneur.dataset.pret) return;
    conteneur.dataset.pret = '1';
    conteneur.setAttribute('data-prevent-swipe', '');
    if (!document.getElementById('mru-interactif-css')) {
      var st = document.createElement('style'); st.id = 'mru-interactif-css'; st.textContent = CSS; document.head.appendChild(st);
    }

    // ---------- Graphe ----------
    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Courbes x(t), v(t) et a(t) et chronophotographie du mouvement' }, conteneur);
    var clip = el('clipPath', { id: 'mru-clip-' + Math.random().toString(36).slice(2) }, el('defs', {}, svg));
    el('rect', { x: G.x0, y: G.yh - 6, width: G.x1 - G.x0 + 6, height: G.yb - G.yh + 12 }, clip);

    fleche(svg, G.x0, G.yb + 30, G.x0, G.yh - 22);            // axe vertical
    fleche(svg, G.x0, Y0, G.x1 + 18, Y0);                      // axe des t
    texte(svg, G.x0 - 52, G.yh - 30, 'x', { fill: COUL.x });
    texte(svg, G.x0 - 32, G.yh - 30, 'v', { fill: COUL.v });
    texte(svg, G.x0 - 12, G.yh - 30, 'a', { fill: COUL.a });
    texte(svg, G.x0 - 30, Y0 + 10, '0', { fill: COUL.axe, 'font-style': 'normal' });
    texte(svg, G.x1 + 36, Y0 + 10, 't', { fill: COUL.axe });

    var gCourbes = el('g', { 'clip-path': 'url(#' + clip.id + ')' }, svg);
    var cA = el('path', { fill: 'none', stroke: COUL.a, 'stroke-width': 3 }, gCourbes);
    var cV = el('path', { fill: 'none', stroke: COUL.v, 'stroke-width': 3 }, gCourbes);
    var cX = el('path', { fill: 'none', stroke: COUL.x, 'stroke-width': 3 }, gCourbes);

    // Repère de l'instant t (ligne pointillée + points sur les courbes)
    var gRep = el('g', { opacity: 0 }, svg);
    var ligne = el('line', { stroke: COUL.axe, 'stroke-width': 2, 'stroke-dasharray': '6 6' }, gRep);
    var pT = el('circle', { r: 5, fill: COUL.axe }, gRep);
    var pA = el('circle', { r: 8, fill: COUL.a }, gRep);
    var pV = el('circle', { r: 8, fill: COUL.v }, gRep);
    var pX = el('circle', { r: 8, fill: COUL.x }, gRep);

    // ---------- Chronophotographie ----------
    fleche(svg, C.x0, C.y, C.x1, C.y);
    var xO = (CX0 + CX1) / 2;
    el('line', { x1: xO, y1: C.y - 10, x2: xO, y2: C.y + 10, stroke: COUL.axe, 'stroke-width': 3 }, svg);
    texte(svg, xO - 10, C.y + 34, 'O', { fill: COUL.axe, 'font-style': 'normal', 'font-size': 26 });
    texte(svg, C.x1 + 18, C.y + 10, 'x', { fill: COUL.x });
    var gChrono = el('g', {}, svg);
    var gM = el('g', { opacity: 0 }, svg);
    var mPt = el('circle', { r: 11, fill: COUL.m }, gM);
    var mTx = texte(gM, 0, 0, 'M', { fill: COUL.m, 'font-style': 'normal', 'text-anchor': 'middle' });

    // ---------- Contrôles ----------
    var ctrl = html('div', { class: 'ctrl' }, conteneur);
    var p = { x0: 2, v0: 5, a: -3 };
    var defs = [
      { cle: 'x0', nom: 'x(0)', coul: COUL.x, min: -8, max: 8, pas: 0.5 },
      { cle: 'v0', nom: 'v(0)', coul: COUL.v, min: -6, max: 6, pas: 0.5 },
      { cle: 'a', nom: 'a', coul: COUL.a, min: -5, max: 5, pas: 0.5 }
    ];
    defs.forEach(function (d) {
      var lab = html('label', {}, ctrl);
      var nom = html('span', { class: 'nom' }, lab); nom.style.color = d.coul; nom.textContent = d.nom;
      var val = html('span', { class: 'val' }, lab); val.textContent = fr(p[d.cle]);
      var inp = html('input', { type: 'range', min: d.min, max: d.max, step: d.pas, value: p[d.cle], 'aria-label': d.nom }, lab);
      inp.style.accentColor = d.coul;
      inp.addEventListener('input', function () { p[d.cle] = parseFloat(inp.value); val.textContent = fr(p[d.cle]); dessiner(); });
      inp.addEventListener('change', function () { inp.blur(); });   // les flèches du clavier repassent à reveal.js
    });
    var bouton = html('button', { type: 'button' }, ctrl);
    bouton.textContent = '▶ Lecture';

    // ---------- Calculs et dessin ----------
    function X(t) { return p.x0 + p.v0 * t + 0.5 * p.a * t * t; }
    function V(t) { return p.v0 + p.a * t; }
    function gx(t) { return G.x0 + t / T * (G.x1 - G.x0); }
    function gy(y) { return Y0 - y / YMAX * (Y0 - G.yh); }
    function cx(x) { return xO + x / XMAX * (CX1 - CX0) / 2; }
    function chemin(f) {
      var d = '';
      for (var i = 0; i <= 200; i++) { var t = T * i / 200, y = Math.max(-3 * YMAX, Math.min(3 * YMAX, f(t))); d += (i ? 'L' : 'M') + gx(t).toFixed(1) + ' ' + gy(y).toFixed(1); }
      return d;
    }
    function dedans(y) { return Math.abs(y) <= YMAX; }
    // Instant du demi-tour (v change de signe dans ]0, T[), sinon null
    function tDemiTour() { if (p.a === 0) return null; var t = -p.v0 / p.a; return t > 0 && t < T ? t : null; }
    function ligneDe(t) { var td = tDemiTour(); return td !== null && t > td ? 1 : 0; }

    var tCour = null;      // instant affiché (null : pas de repère)
    function dessiner() {
      cA.setAttribute('d', chemin(function () { return p.a; }));
      cV.setAttribute('d', chemin(V));
      cX.setAttribute('d', chemin(X));

      // chronophotographie : N positions à intervalles de temps égaux
      while (gChrono.firstChild) gChrono.removeChild(gChrono.firstChild);
      if (tDemiTour() !== null) el('line', { x1: C.x0, y1: C.y + DY_RETOUR, x2: C.x1, y2: C.y + DY_RETOUR, stroke: COUL.axe, 'stroke-width': 1.5, 'stroke-dasharray': '4 8', opacity: 0.6 }, gChrono);
      var dernier = [-1e9, -1e9];                       // abscisse du dernier numéro écrit, par ligne
      for (var k = 0; k < N; k++) {
        var t = T * k / (N - 1), x = X(t), l = ligneDe(t), y = C.y + l * DY_RETOUR;
        if (Math.abs(x) > XMAX) continue;
        el('circle', { cx: cx(x), cy: y, r: 7, fill: 'none', stroke: COUL.point, 'stroke-width': 2.5 }, gChrono);
        if (Math.abs(cx(x) - dernier[l]) >= 16) {
          texte(gChrono, cx(x), l ? y + 30 : y - 16, String(k), { fill: COUL.texte2, 'font-size': 20, 'font-style': 'normal', 'text-anchor': 'middle' });
          dernier[l] = cx(x);
        }
      }
      placerRepere();
    }
    function placerRepere() {
      if (tCour === null) { gRep.setAttribute('opacity', 0); gM.setAttribute('opacity', 0); return; }
      var t = tCour, xs = gx(t), vals = [[pX, X(t)], [pV, V(t)], [pA, p.a]], ys = [Y0];
      vals.forEach(function (c) {
        var ok = dedans(c[1]);
        c[0].setAttribute('opacity', ok ? 1 : 0);
        c[0].setAttribute('cx', xs); c[0].setAttribute('cy', gy(c[1]));
        if (ok) ys.push(gy(c[1]));
      });
      ligne.setAttribute('x1', xs); ligne.setAttribute('x2', xs);
      ligne.setAttribute('y1', Math.min.apply(null, ys)); ligne.setAttribute('y2', Math.max.apply(null, ys));
      pT.setAttribute('cx', xs); pT.setAttribute('cy', Y0);
      gRep.setAttribute('opacity', 1);
      var x = X(t), dans = Math.abs(x) <= XMAX;
      gM.setAttribute('opacity', dans ? 1 : 0);
      var yM = C.y + ligneDe(t) * DY_RETOUR;
      mPt.setAttribute('cx', cx(x)); mPt.setAttribute('cy', yM);
      mTx.setAttribute('x', cx(x)); mTx.setAttribute('y', yM - 20);
    }

    // ---------- Lecture ----------
    var raf = null, debut = 0;
    function image(now) {
      var u = Math.min(1, (now - debut) / DUREE);
      tCour = u * T; placerRepere();
      raf = u < 1 ? requestAnimationFrame(image) : null;
      if (!raf) bouton.textContent = '▶ Rejouer';
    }
    bouton.addEventListener('click', function () {
      if (raf) cancelAnimationFrame(raf);
      debut = performance.now(); bouton.textContent = '▶ Lecture';
      raf = requestAnimationFrame(image);
      bouton.blur();
    });

    // Arrêt quand on quitte la slide
    var slide = conteneur.closest('section');
    if (window.Reveal && Reveal.on) Reveal.on('slidechanged', function (e) {
      if (e.previousSlide === slide && raf) { cancelAnimationFrame(raf); raf = null; bouton.textContent = '▶ Lecture'; }
    });

    dessiner();
  }

  function lancer() { document.querySelectorAll('.mru-interactif').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
  else lancer();
})();
