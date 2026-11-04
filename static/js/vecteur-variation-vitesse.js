/*
 * Construction animée du vecteur variation de vitesse Δv = v(t+Δt) − v(t).
 *
 * Reprend les codes des schémas vecaccmoy.png : trajectoire rose, points
 * magenta, vecteurs vitesse jaunes, Δv vert, étiquettes MathJax.
 *
 * Étapes (une par clic, grâce à des fragments vides dans la slide) :
 *   0. v(t) en M(t) et v(t+Δt) en M(t+Δt)
 *   1. v(t+Δt) est translaté jusqu'en M(t)
 *   2. v(t) est placé au bout de v(t+Δt) puis retourné : −v(t)
 *   3. Δv est tracé de M(t) à l'extrémité de −v(t)
 *   4. la relation Δv = v(t+Δt) − v(t) apparaît
 * Revenir en arrière rejoue l'animation à l'envers.
 *
 * Utilisation dans une slide :
 *   <div class="anim-dv"></div>
 *   <span class="fragment"></span> ×4
 *   <script src="/js/vecteur-variation-vitesse.js" defer></script>
 */
(function () {
  'use strict';

  var COUL = { traj: '#EB53A0', point: '#C13175', vit: '#F9DB57', dv: '#83D652' };
  var W = 1000, H = 600;
  var EP = 8;            // épaisseur des vecteurs
  var DUREE = 900;       // durée d'une étape (ms)
  var SVGNS = 'http://www.w3.org/2000/svg';

  function el(nom, attrs, parent) {
    var e = document.createElementNS(SVGNS, nom);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function borne(x) { return Math.max(0, Math.min(1, x)); }
  function lisse(x) { x = borne(x); return x * x * (3 - 2 * x); }
  function interp(a, b, k) { return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]; }

  // Trajectoire : h(u) = 0,6 u + 43 sin(2πu/600), en S comme sur le schéma d'origine
  var X0 = 20, Y0 = 580;
  function point(u) { return [X0 + u, Y0 - (0.6 * u + 43 * Math.sin(2 * Math.PI * u / 600))]; }
  function tangente(u) {
    var p = 0.6 + 43 * 2 * Math.PI / 600 * Math.cos(2 * Math.PI * u / 600), n = Math.hypot(1, p);
    return [1 / n, -p / n];
  }

  var U1 = 300, U2 = 580;                  // positions de M(t) et M(t+Δt)
  var M1 = point(U1), M2 = point(U2);
  var t1 = tangente(U1), t2 = tangente(U2);
  var V1 = [t1[0] * 240, t1[1] * 240];     // v(t)
  var V2 = [t2[0] * 210, t2[1] * 210];     // v(t+Δt)
  var BOUT = [M1[0] + V2[0], M1[1] + V2[1]];          // extrémité de v(t+Δt) translaté
  var FIN = [BOUT[0] - V1[0], BOUT[1] - V1[1]];       // extrémité de −v(t)

  // Flèche à encoche (comme les schémas Keynote d'origine)
  function fleche(parent, couleur) {
    var g = el('g', {}, parent);
    var trait = el('line', { stroke: couleur, 'stroke-width': EP, 'stroke-linecap': 'butt' }, g);
    var tete = el('path', { fill: couleur }, g);
    return {
      g: g,
      poser: function (o, v) {
        var L = Math.hypot(v[0], v[1]);
        if (L < 1) { g.setAttribute('opacity', 0); return; }
        g.setAttribute('opacity', 1);
        var ux = v[0] / L, uy = v[1] / L, nx = -uy, ny = ux;
        var lt = Math.min(44, L * 0.6), lg = 20, enc = lt * 0.7;
        var b = [o[0] + v[0], o[1] + v[1]];
        trait.setAttribute('x1', o[0]); trait.setAttribute('y1', o[1]);
        trait.setAttribute('x2', b[0] - ux * enc); trait.setAttribute('y2', b[1] - uy * enc);
        tete.setAttribute('d', 'M' + b[0] + ' ' + b[1] +
          'L' + (b[0] - ux * lt + nx * lg) + ' ' + (b[1] - uy * lt + ny * lg) +
          'L' + (b[0] - ux * enc) + ' ' + (b[1] - uy * enc) +
          'L' + (b[0] - ux * lt - nx * lg) + ' ' + (b[1] - uy * lt - ny * lg) + 'Z');
      }
    };
  }

  // Étiquette MathJax centrée en (x, y)
  function etiquette(parent, tex, couleur, taille) {
    var g = el('g', {}, parent), contenu = null, w = 0, h = 0;
    g.style.color = couleur;
    var e = {
      g: g,
      pos: [0, 0],
      placer: function (x, y) {
        e.pos = [x, y];
        if (contenu) contenu.setAttribute('transform', 'translate(' + (x - w / 2) + ' ' + (y - h / 2) + ')');
      },
      rendre: function () {
        // version asynchrone : \color charge une extension à la volée
        return MathJax.tex2svgPromise(tex, { display: false }).then(function (noeud) {
          var svg = noeud.querySelector('svg');
          var vb = svg.getAttribute('viewBox').split(/\s+/).map(Number);
          w = vb[2] / 1000 * taille; h = vb[3] / 1000 * taille;
          svg.setAttribute('width', w); svg.setAttribute('height', h);
          svg.removeAttribute('style');
          contenu = el('g', {}, g); contenu.appendChild(svg);
          e.placer(e.pos[0], e.pos[1]);
        });
      }
    };
    return e;
  }

  function init(conteneur) {
    if (conteneur.dataset.pret) return;
    conteneur.dataset.pret = '1';

    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img',
      'aria-label': 'Construction du vecteur variation de vitesse : v(t+Δt) est translaté en M(t), on lui ajoute −v(t), et Δv relie M(t) à l\'extrémité obtenue.' });
    svg.style.cssText = 'width:100%;height:auto;display:block;overflow:visible;';
    conteneur.appendChild(svg);
    // Halo couleur du fond autour des étiquettes (lisibles même sur la trajectoire)
    el('style', {}, svg).textContent =
      '.anim-dv svg svg g { stroke: rgba(43,43,43,0.9); stroke-width: 90px; paint-order: stroke; stroke-linejoin: round; }';

    // Trajectoire
    var d = '';
    for (var u = 0; u <= 760; u += 5) { var p = point(u); d += (u ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }
    el('path', { d: d, fill: 'none', stroke: COUL.traj, 'stroke-width': 7, 'stroke-linecap': 'round' }, svg);

    var gM2 = el('g', {}, svg);
    var fV1 = fleche(svg, COUL.vit), fV2 = fleche(svg, COUL.vit), fDV = fleche(svg, COUL.dv);
    el('circle', { cx: M1[0], cy: M1[1], r: 9, fill: COUL.point }, svg);
    el('circle', { cx: M2[0], cy: M2[1], r: 9, fill: COUL.point }, gM2);

    var T = 46, labels = [
      etiquette(svg, '\\mathrm{M}(t)', COUL.traj, T),
      etiquette(gM2, '\\mathrm{M}(t+\\Delta t)', COUL.traj, T),
      etiquette(svg, '\\vec{v}(t)', COUL.vit, T),
      etiquette(svg, '-\\vec{v}(t)', COUL.vit, T),
      etiquette(svg, '\\vec{v}(t+\\Delta t)', COUL.vit, T),
      etiquette(svg, '\\overrightarrow{\\Delta v}(t)', COUL.dv, T),
      etiquette(svg, '{\\color{#83D652}\\overrightarrow{\\Delta v}(t)} \\mathrel{\\color{#83D652}=} \\vec{v}(t+\\Delta t) \\mathbin{\\color{#83D652}-} \\vec{v}(t)', COUL.vit, 44)
    ];
    var lM1 = labels[0], lM2 = labels[1], lV1 = labels[2], lMV1 = labels[3], lV2 = labels[4], lDV = labels[5], lRel = labels[6];
    lM1.placer(M1[0] - 40, M1[1] + 62);
    lM2.placer(M2[0] + 150, M2[1] + 10);
    lRel.placer(700, 545);

    // Dessin pour une progression p ∈ [0, 4]
    function dessiner(p) {
      var a = lisse(p);                              // translation de v(t+Δt)
      var o2 = interp(M2, M1, a);
      fV2.poser(o2, V2);
      var dec2 = interp([-8, -116], [195, -195], a);   // par rapport à l'origine de la flèche
      lV2.placer(o2[0] + dec2[0], o2[1] + dec2[1]);
      gM2.setAttribute('opacity', 1 - 0.75 * a);

      var b1 = lisse((p - 1) / 0.55), b2 = lisse((p - 1.55) / 0.45);   // v(t) : déplacement puis retournement
      var o1 = interp(M1, BOUT, b1), ang = Math.PI * b2;
      var v1 = [V1[0] * Math.cos(ang) - V1[1] * Math.sin(ang), V1[0] * Math.sin(ang) + V1[1] * Math.cos(ang)];
      fV1.poser(o1, v1);
      var milieu = [o1[0] + v1[0] * 0.5, o1[1] + v1[1] * 0.5];
      var dec1 = interp([20, 46], [-5, -44], b1);
      lV1.placer(milieu[0] + dec1[0], milieu[1] + dec1[1]);
      lMV1.placer(milieu[0] + dec1[0], milieu[1] + dec1[1]);
      lV1.g.setAttribute('opacity', 1 - b2);
      lMV1.g.setAttribute('opacity', b2);

      var c = lisse(p - 2);                          // tracé de Δv
      fDV.poser(M1, [(FIN[0] - M1[0]) * c, (FIN[1] - M1[1]) * c]);
      lDV.placer(FIN[0] - 105, (M1[1] + FIN[1]) / 2 + 5);
      lDV.g.setAttribute('opacity', lisse((p - 2.6) / 0.4));

      lRel.g.setAttribute('opacity', lisse(p - 3));
    }

    // Progression animée vers une étape cible
    var p = 0, cible = 0, raf = null, tPrec = 0;
    function boucle(t) {
      var dt = Math.min(64, t - tPrec); tPrec = t;
      var pas = dt / DUREE;
      p = cible > p ? Math.min(cible, p + pas) : Math.max(cible, p - pas);
      dessiner(p);
      raf = p === cible ? null : requestAnimationFrame(boucle);
    }
    function aller(n, instantane) {
      cible = n;
      if (instantane) { p = n; dessiner(p); if (raf) { cancelAnimationFrame(raf); raf = null; } return; }
      if (raf === null) { tPrec = performance.now(); raf = requestAnimationFrame(boucle); }
    }

    var slide = conteneur.closest('section');
    function etape() { return slide.querySelectorAll('.fragment.visible').length; }
    dessiner(0);

    function brancher() {
      Reveal.on('fragmentshown', function (e) { if (slide.contains(e.fragment)) aller(etape()); });
      Reveal.on('fragmenthidden', function (e) { if (slide.contains(e.fragment)) aller(etape()); });
      Reveal.on('slidechanged', function (e) { if (e.currentSlide === slide) aller(etape(), true); });
      if (Reveal.getCurrentSlide && Reveal.getCurrentSlide() === slide) aller(etape(), true);
    }
    if (window.Reveal && Reveal.on) brancher();

    // Étiquettes : dès que MathJax est prêt
    (function attendre() {
      if (window.MathJax && MathJax.tex2svgPromise && MathJax.startup && MathJax.startup.promise) {
        MathJax.startup.promise
          .then(function () { return Promise.all(labels.map(function (l) { return l.rendre(); })); })
          .then(function () { dessiner(p); });
      } else setTimeout(attendre, 100);
    })();
  }

  function lancer() { document.querySelectorAll('.anim-dv').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
  else lancer();
})();
