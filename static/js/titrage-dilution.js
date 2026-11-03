/*
 * Effet de la dilution sur une courbe de titrage conductimétrique.
 *
 * Titrage de l'acide chlorhydrique (H3O+ + Cl-) par la soude (Na+ + HO-).
 * On ajoute progressivement de l'eau à la solution titrée (0 → Veau_max) :
 * la conductivité baisse et les deux branches, courbes sans eau, deviennent
 * des droites. L'échelle verticale s'ajuste en continu pour que la courbe
 * occupe toujours le graphique : on voit la forme changer, pas seulement
 * la courbe s'écraser.
 *
 * Utilisation dans une slide :
 *   <div class="anim-dilution"></div>
 *   <script src="/js/titrage-dilution.js" defer></script>
 * Paramètres facultatifs (attributs data-) : v0, ca, cb, vbmax, veaumax.
 *
 * L'animation tourne en boucle (aller-retour) tant que la slide est affichée
 * et s'arrête quand on la quitte.
 */
(function () {
  'use strict';

  // Conductivités molaires ioniques (mS·m²·mol⁻¹)
  var L = { H3O: 35.0, HO: 19.9, Na: 5.0, Cl: 7.6 };

  // Palette de la page (thème league + classe .imp)
  var COUL = {
    texte: '#eee',
    secondaire: '#aaa',
    courbe: '#FF968D',
    accent: '#13DAEC',
    grille: 'rgba(255,255,255,0.12)',
    corde: 'rgba(170,170,170,0.7)'
  };

  // Dimensions du dessin (unités du viewBox)
  var W = 900, H = 540;
  var M = { g: 120, d: 30, h: 80, b: 90 };
  var PW = W - M.g - M.d, PH = H - M.h - M.b;

  // Durées (ms) de la boucle aller-retour
  var DUREE = 6000, PAUSE = 1800;

  var SVGNS = 'http://www.w3.org/2000/svg';
  function el(nom, attrs, parent) {
    var e = document.createElementNS(SVGNS, nom);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function fr(x, dec) { return x.toFixed(dec).replace('.', ','); }

  // Pas « rond » (1, 2, 2,5 ou 5 × 10^k) pour environ 5 graduations
  function pasRond(max) {
    var brut = max / 5, p = Math.pow(10, Math.floor(Math.log10(brut))), m = brut / p;
    var pas = m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10;
    return pas * p;
  }
  // Nombre de décimales du pas (0,25 → 2 ; 2,5 → 1 ; 50 → 0)
  function decimales(pas) { var t = String(+pas.toPrecision(6)).split('.'); return t[1] ? t[1].length : 0; }

  function init(conteneur) {
    if (conteneur.dataset.pret) return;
    conteneur.dataset.pret = '1';
    var d = conteneur.dataset;
    var V0 = parseFloat(d.v0 || 10);         // mL de solution titrée
    var ca = parseFloat(d.ca || 1.0e-2);     // mol/L (HCl)
    var cb = parseFloat(d.cb || 1.0e-2);     // mol/L (NaOH)
    var VBMAX = parseFloat(d.vbmax || 20);   // mL de soude versés
    var VEAUMAX = parseFloat(d.veaumax || 200);
    var VE = ca * V0 / cb;

    // Conductivité (mS·m⁻¹) pour un volume de soude vb et un volume d'eau ve (mL)
    function sigma(vb, ve) {
      var na = cb * vb, cl = ca * V0;                      // mmol
      var h = Math.max(ca * V0 - cb * vb, 0), ho = Math.max(cb * vb - ca * V0, 0);
      var somme = L.H3O * h + L.HO * ho + L.Na * na + L.Cl * cl; // mS·m²·mol⁻¹ × mmol
      return somme / (V0 + ve + vb) * 1000;                // mmol/mL = mol/L ; ×1000 → mol/m³
    }

    var svg = el('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img',
      'aria-label': "Courbe de titrage conductimétrique de l'acide chlorhydrique par la soude, aplatie et redressée par l'ajout d'eau" });
    svg.style.cssText = 'width:100%;height:auto;display:block;overflow:visible;font-family:inherit;';
    conteneur.appendChild(svg);

    var gGrille = el('g', {}, svg), gEtiq = el('g', { fill: COUL.secondaire, 'font-size': 28, 'text-anchor': 'end' }, svg);
    var X = function (v) { return M.g + v / VBMAX * PW; };

    // Axes
    el('line', { x1: M.g, y1: M.h + PH, x2: M.g + PW, y2: M.h + PH, stroke: COUL.secondaire, 'stroke-width': 2 }, svg);
    el('line', { x1: M.g, y1: M.h + PH, x2: M.g, y2: M.h - 10, stroke: COUL.secondaire, 'stroke-width': 2 }, svg);
    for (var v = 0; v <= VBMAX + 1e-9; v += 5) {
      el('line', { x1: X(v), y1: M.h + PH, x2: X(v), y2: M.h + PH + 8, stroke: COUL.secondaire, 'stroke-width': 2 }, svg);
      el('text', { x: X(v), y: M.h + PH + 40, fill: COUL.secondaire, 'font-size': 28, 'text-anchor': 'middle' }, svg).textContent = fr(v, 0);
    }
    el('text', { x: M.g + PW / 2, y: H - 6, fill: COUL.secondaire, 'font-size': 30, 'text-anchor': 'middle' }, svg)
      .textContent = 'Volume de soude versé (mL)';
    var titreY = el('text', { x: M.g - 40, y: M.h - 36, fill: COUL.secondaire, 'font-size': 30, 'text-anchor': 'start' }, svg);
    titreY.textContent = 'σ (mS·m⁻¹)';

    // Équivalence
    el('line', { x1: X(VE), y1: M.h, x2: X(VE), y2: M.h + PH, stroke: COUL.accent, 'stroke-width': 2, 'stroke-dasharray': '6 8', opacity: 0.7 }, svg);
    var etiqVE = el('text', { x: X(VE), y: M.h - 14, fill: COUL.accent, 'font-size': 30, 'text-anchor': 'middle', 'font-style': 'italic' }, svg);
    etiqVE.textContent = 'V';
    el('tspan', { 'font-size': 21, dy: 7, 'font-style': 'normal' }, etiqVE).textContent = 'E';

    // Cordes (droites de référence) puis courbe
    var corde1 = el('line', { stroke: COUL.corde, 'stroke-width': 2, 'stroke-dasharray': '4 7' }, svg);
    var corde2 = el('line', { stroke: COUL.corde, 'stroke-width': 2, 'stroke-dasharray': '4 7' }, svg);
    var courbe = el('path', { fill: 'none', stroke: COUL.courbe, 'stroke-width': 6, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);

    // Volume d'eau ajouté
    var info = el('text', { x: M.g + PW, y: M.h - 36, fill: COUL.texte, 'font-size': 32, 'text-anchor': 'end' }, svg);
    var infoTxt = el('tspan', {}, info); infoTxt.textContent = 'Eau ajoutée : ';
    var infoVal = el('tspan', { fill: COUL.accent, 'font-weight': 'bold' }, info);

    var N = 120;
    function dessiner(ve) {
      var pts = [], max = 0;
      for (var i = 0; i <= N; i++) {
        var vb = VBMAX * i / N, s = sigma(vb, ve);
        pts.push([vb, s]); if (s > max) max = s;
      }
      // Échelle verticale ajustée en continu ; graduations « rondes »
      var ymax = max * 1.12, pas = pasRond(ymax), dec = decimales(pas);
      var Y = function (s) { return M.h + PH - s / ymax * PH; };

      while (gGrille.firstChild) gGrille.removeChild(gGrille.firstChild);
      while (gEtiq.firstChild) gEtiq.removeChild(gEtiq.firstChild);
      for (var t = 0; t <= ymax + 1e-9; t += pas) {
        var y = Y(t);
        if (t > 0) el('line', { x1: M.g, y1: y, x2: M.g + PW, y2: y, stroke: COUL.grille, 'stroke-width': 1.5 }, gGrille);
        el('text', { x: M.g - 14, y: y + 10 }, gEtiq).textContent = fr(t, dec);
      }

      courbe.setAttribute('d', pts.map(function (p, i) { return (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(''));
      var s0 = sigma(0, ve), sE = sigma(VE, ve), sF = sigma(VBMAX, ve);
      corde1.setAttribute('x1', X(0)); corde1.setAttribute('y1', Y(s0)); corde1.setAttribute('x2', X(VE)); corde1.setAttribute('y2', Y(sE));
      corde2.setAttribute('x1', X(VE)); corde2.setAttribute('y1', Y(sE)); corde2.setAttribute('x2', X(VBMAX)); corde2.setAttribute('y2', Y(sF));
      infoVal.textContent = Math.round(ve) + ' mL';
    }

    // Boucle aller-retour : volume d'eau en fonction du temps.
    // Lissage + loi quadratique : on passe plus de temps sur les faibles
    // dilutions, là où la forme change le plus.
    function eauAuTemps(t) {
      // pause sans eau → dilution → pause diluée → retour
      var cycle = 2 * (DUREE + PAUSE), u = t % cycle, x;
      if (u < PAUSE) x = 0;
      else if (u < PAUSE + DUREE) x = (u - PAUSE) / DUREE;
      else if (u < 2 * PAUSE + DUREE) x = 1;
      else x = 1 - (u - 2 * PAUSE - DUREE) / DUREE;
      x = x * x * (3 - 2 * x);           // smoothstep
      return VEAUMAX * x * x;
    }

    var slide = conteneur.closest('section'), raf = null, debut = 0;
    function image(now) {
      dessiner(eauAuTemps(now - debut));
      raf = requestAnimationFrame(image);
    }
    function demarrer() { if (raf === null) { debut = performance.now(); raf = requestAnimationFrame(image); } }
    function arreter() { if (raf !== null) { cancelAnimationFrame(raf); raf = null; } dessiner(0); }

    dessiner(0);
    function verifier() {
      if (window.Reveal && Reveal.getCurrentSlide && Reveal.getCurrentSlide() === slide) demarrer(); else arreter();
    }
    if (window.Reveal && Reveal.on) {
      Reveal.on('slidechanged', verifier);
      Reveal.on('ready', verifier);
      if (Reveal.isReady && Reveal.isReady()) verifier();
    }
  }

  function lancer() { document.querySelectorAll('.anim-dilution').forEach(init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
  else lancer();
})();
