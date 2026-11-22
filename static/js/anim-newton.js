/*
 * Animations 2D « pleine slide » pour le cours sur les lois de Newton.
 *
 *   <link rel="stylesheet" href="/css/anim-plein-ecran.css">
 *   <div class="anim-pe" data-anim="inertie"></div>
 *   <script type="module" src="/js/anim-newton.js"></script>
 *
 * Scènes (data-anim) :
 *   inertie  palet sur coussin d'air : ΣF = 0 donne un MRU, sinon non (1re loi)
 *   pfd      bloc tiré par une force F : ΣF = m a, avec le graphe v(t) (2e loi)
 *
 * Les scènes sont des fonctions pures du temps t : le curseur de temps permet de
 * se placer à n'importe quelle date, en avant comme en arrière.
 * Code couleur du cours : forces en rose-rouge (#FF968D), vitesse en jaune,
 * accélération en vert.
 *
 * Mise en page : la scène couvre toute la fenêtre (dimensionnée en JS, au-delà des
 * bords de la slide reveal.js). Les tailles s'expriment en « px de slide » ; sur un
 * petit écran la slide est très réduite, d'où un facteur de compensation k (≥ 1)
 * appliqué aux textes, traits et commandes. Chaque scène peut réserver de la place
 * (spec.reserve) et choisir la taille du monde représenté (spec.monde) d'après la
 * zone de dessin disponible.
 */

const COUL = {
  force: '#FF968D', vit: '#FFF056', acc: '#61D836', point: '#EB53A0', texte: '#FFFFFF'
};

const ICONES = {
  lecture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4" width="4.5" height="16" rx="1.2"/><rect x="14" y="4" width="4.5" height="16" rx="1.2"/></svg>',
  debut: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="4.5" width="3.2" height="15" rx="1"/><path d="M19.5 5.6v12.8a1 1 0 0 1-1.55.84l-9.2-6.4a1 1 0 0 1 0-1.68l9.2-6.4a1 1 0 0 1 1.55.84z"/></svg>',
  rejouer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 7.75 10h-2.1A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35A7.96 7.96 0 0 0 12 4z"/></svg>'
};

const fmt = (x, n) => x.toFixed(n === undefined ? 1 : n).replace('.', ',').replace('-', '−');
const borne = (x, a, b) => Math.max(a, Math.min(b, x));

function creer(tag, classe, parent, html) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (html !== undefined) e.innerHTML = html;
  if (parent) parent.appendChild(e);
  return e;
}

/* ---------- Étiquettes MathJax (HTML posé sur le canevas) ---------- */

let mjPret = null;
function mathjaxPret() {
  if (!mjPret) {
    mjPret = new Promise(function (ok) {
      (function attendre() {
        if (window.MathJax && MathJax.tex2svgPromise && MathJax.startup && MathJax.startup.promise) ok(MathJax.startup.promise);
        else setTimeout(attendre, 100);
      })();
    });
  }
  return mjPret;
}

const ANCRES = { c: '-50%,-50%', l: '0,-50%', r: '-100%,-50%', b: '-50%,-100%', t: '-50%,0' };

class Etiquette {
  constructor(parent, tex, couleur, taille, repli) {
    this.el = creer('div', 'pe-label', parent);
    this.el.style.color = couleur;
    this.el.style.fontSize = taille + 'px';
    this.el.textContent = repli;
    this.tex = tex; this.taille = taille;
    this.vu = false;
  }
  rendre() {
    return MathJax.tex2svgPromise(this.tex, { display: false }).then((noeud) => {
      const svg = noeud.querySelector('svg');
      const vb = svg.getAttribute('viewBox').split(/\s+/).map(Number);
      svg.setAttribute('width', vb[2] / 1000 * this.taille);   // viewBox en millièmes d'em
      svg.setAttribute('height', vb[3] / 1000 * this.taille);
      svg.removeAttribute('style');
      this.el.replaceChildren(svg);
    });
  }
}

/* ---------- Moteur d'une scène ---------- */

function creerScene(hote, fabrique) {
  if (hote.dataset.pret) return;
  hote.dataset.pret = '1';
  const section = hote.closest('section');
  const scene = creer('div', 'pe-scene', hote);
  scene.setAttribute('role', 'img');
  const canvas = creer('canvas', '', scene);
  const ctx = canvas.getContext('2d');
  const labels = creer('div', 'pe-labels', scene);
  const aide = creer('div', 'pe-aide', scene);
  const barre = creer('div', 'pe-barre', scene);
  barre.setAttribute('data-prevent-swipe', '');         // reveal.js : pas de changement de slide en touchant la barre

  // Export PDF (?print-pdf) : pas d'animation, un simple renvoi vers la version en ligne
  if (/print-pdf/.test(location.search)) {
    scene.replaceChildren();
    creer('div', 'pe-repli', scene, 'Animation interactive : voir la version en ligne de la présentation.');
    return;
  }

  /* Contexte passé à la scène */
  const S = {
    ctx: ctx, v: {}, t: 0, W: 0, H: 0, k: 1, s: 1, ox: 0, oy: 0,
    zone: { x: 0, y: 0, w: 0, h: 0 }, monde: null, X: null, Y: null, L: null
  };
  let spec, dirty = true, enCours = false, derniere = 0, raf = 0, actif = false;
  const etiquettes = [];

  /* --- commandes : lecture, temps, puis commandes propres à la scène --- */
  const gLecture = creer('div', 'pe-groupe', barre);
  const bLancer = creer('button', 'pe-lancer', gLecture);
  bLancer.type = 'button';
  const bReinit = creer('button', '', gLecture, ICONES.debut);
  bReinit.type = 'button';
  bReinit.title = 'Revenir à t = 0';
  bReinit.setAttribute('aria-label', 'Revenir à t = 0');
  const gTemps = creer('div', 'pe-temps', barre);
  const curseurT = creer('input', '', gTemps);
  curseurT.type = 'range'; curseurT.min = 0; curseurT.max = 1000; curseurT.step = 1; curseurT.value = 0;
  curseurT.setAttribute('aria-label', 'Date t');
  const lectureT = creer('span', 'pe-valeur', gTemps);

  // Après un clic, on rend le clavier à reveal.js (flèches, espace…)
  const rendreFocus = (b) => b.addEventListener('pointerup', function () { setTimeout(function () { b.blur(); }, 0); });
  [bLancer, bReinit, curseurT].forEach(rendreFocus);

  S.groupe = function (titre) {
    const g = creer('div', 'pe-groupe', barre);
    if (titre) creer('span', 'pe-titre', g, titre);
    return g;
  };
  /** Un changement de paramètre repart de t = 0 (la situation n'est plus la même). */
  S.changement = function () { enCours = false; S.t = 0; dirty = true; majBoutons(); };
  S.curseur = function (g, o) {
    const w = creer('label', 'pe-curseur', g);
    creer('span', 'pe-titre', w, o.label);
    const inp = creer('input', '', w);
    inp.type = 'range'; inp.min = o.min; inp.max = o.max; inp.step = o.pas; inp.value = o.val;
    inp.setAttribute('aria-label', o.nom || o.cle);
    const sortie = creer('span', 'pe-valeur', w);
    function maj() { S.v[o.cle] = parseFloat(inp.value); sortie.textContent = o.fmt(S.v[o.cle]); }
    inp.addEventListener('input', function () { maj(); S.changement(); });
    rendreFocus(inp);
    maj();
  };
  S.choix = function (g, cle, options, defaut) {
    const boutons = {};
    function choisir(c) {
      S.v[cle] = c;
      Object.keys(boutons).forEach(function (k) { boutons[k].setAttribute('aria-pressed', String(k === c)); });
    }
    options.forEach(function (o) {
      const b = creer('button', 'pe-bascule pe-choix', g, o.html);
      b.type = 'button'; b.title = o.titre || '';
      b.addEventListener('click', function () { choisir(o.cle); S.changement(); });
      rendreFocus(b);
      boutons[o.cle] = b;
    });
    choisir(defaut);
  };
  S.sortie = function (g) { return creer('span', 'pe-sortie', g); };
  S.etiquette = function (tex, couleur, taille, repli) {
    const e = new Etiquette(labels, tex, couleur, taille, repli);
    etiquettes.push(e);
    return e;
  };
  /**
   * Pose une étiquette en (px, py) (px de slide, repère de la scène), ancrée en
   * 'c' (centre), 'l', 'r', 'b' ou 't'. Avec ajuster = true, elle est réduite si
   * elle dépasse de la fenêtre (cas d'un bandeau de formule sur un écran étroit).
   */
  S.place = function (e, px, py, ancre, ajuster) {
    e.vu = true;
    let echelle = S.k;
    if (ajuster) echelle = Math.min(S.k, S.W * 0.94 / Math.max(1, e.el.offsetWidth));
    e.el.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px) scale(' + echelle.toFixed(3) +
      ') translate(' + ANCRES[ancre || 'c'] + ')';
  };
  S.aide = function (html) { aide.innerHTML = html; };

  /* --- dessin : outils (tout en px de slide ; les épaisseurs et tailles sont multipliées par k) --- */
  S.fleche = function (x1, y1, x2, y2, couleur, ep) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    if (L < 2) return;
    const e = ep * S.k, tete = Math.min(L * 0.8, (11 + 2.4 * ep) * S.k), ux = dx / L, uy = dy / L;
    ctx.save();
    ctx.strokeStyle = couleur; ctx.fillStyle = couleur; ctx.lineWidth = e; ctx.lineCap = 'butt';
    ctx.shadowColor = couleur; ctx.shadowBlur = 7 * S.k;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - ux * tete * 0.6, y2 - uy * tete * 0.6); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * tete + uy * tete * 0.42, y2 - uy * tete - ux * tete * 0.42);
    ctx.lineTo(x2 - ux * tete - uy * tete * 0.42, y2 - uy * tete + ux * tete * 0.42);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  };
  S.disque = function (x, y, r, remplissage, contour, alpha, epContour) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.beginPath(); ctx.arc(x, y, Math.max(r, 0.5), 0, 2 * Math.PI);
    if (remplissage) { ctx.fillStyle = remplissage; ctx.fill(); }
    if (contour) { ctx.strokeStyle = contour; ctx.lineWidth = (epContour || 2) * S.k; ctx.stroke(); }
    ctx.restore();
  };
  S.rect = function (x, y, w, h, remplissage, contour, rayon, alpha, pointille) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, rayon || 0); else ctx.rect(x, y, w, h);
    if (remplissage) { ctx.fillStyle = remplissage; ctx.fill(); }
    if (contour) {
      ctx.strokeStyle = contour; ctx.lineWidth = 2 * S.k;
      if (pointille) ctx.setLineDash([pointille * S.k, pointille * 0.7 * S.k]);
      ctx.stroke();
    }
    ctx.restore();
  };
  S.ligne = function (x1, y1, x2, y2, couleur, ep, alpha, pointille) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.strokeStyle = couleur; ctx.lineWidth = ep * S.k;
    if (pointille) ctx.setLineDash([pointille * S.k, pointille * 0.7 * S.k]);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.restore();
  };
  /** Ombre portée douce : ellipse de demi-axes rx, ry centrée en (x, y). */
  S.ombre = function (x, y, rx, ry, alpha) {
    ctx.save();
    ctx.translate(x, y); ctx.scale(1, Math.max(ry, 0.1) / Math.max(rx, 0.1));
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    g.addColorStop(0, 'rgba(0,0,0,' + alpha + ')'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(0, 0, rx, 0, 2 * Math.PI); ctx.fill();
    ctx.restore();
  };
  /** Texte en px de slide ; police à empattements, italique par défaut. */
  S.texte = function (txt, x, y, taille, couleur, ancre, italique) {
    ctx.save();
    ctx.font = (italique === false ? '' : 'italic ') + (taille * S.k) + 'px "Times New Roman", serif';
    ctx.fillStyle = couleur || COUL.texte; ctx.textAlign = ancre || 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(txt, x, y);
    ctx.restore();
  };

  /* --- boutons de lecture --- */
  function majBoutons() {
    const D = spec.duree, fini = S.t >= D, debut = S.t <= 0;
    if (enCours) bLancer.innerHTML = ICONES.pause + 'Pause';
    else if (fini) bLancer.innerHTML = ICONES.rejouer + 'Rejouer';
    else if (debut) bLancer.innerHTML = ICONES.lecture + 'Lancer';
    else bLancer.innerHTML = ICONES.lecture + 'Reprendre';
    curseurT.value = Math.round(S.t / D * 1000);
    lectureT.textContent = 't = ' + fmt(S.t) + ' s';
  }
  bLancer.addEventListener('click', function () {
    if (enCours) enCours = false;
    else { if (S.t >= spec.duree) S.t = 0; enCours = true; }
    majBoutons();
  });
  bReinit.addEventListener('click', function () { enCours = false; S.t = 0; dirty = true; majBoutons(); });
  curseurT.addEventListener('input', function () {
    enCours = false; S.t = curseurT.value / 1000 * spec.duree; dirty = true; majBoutons();
  });

  /* --- la scène elle-même --- */
  spec = fabrique(S);
  scene.setAttribute('aria-label', spec.alt);
  spec.construire(S);
  majBoutons();

  /* --- taille et mise à l'échelle reveal.js (même principe que les scènes 3D) --- */
  let echelle = 1, pr = 1;
  function mettreALaTaille() {
    const reveal = hote.closest('.reveal'), slides = reveal && reveal.querySelector('.slides');
    if (!slides || !section || !section.offsetParent) return;   // slide masquée : on attend
    echelle = (window.Reveal && Reveal.getScale && Reveal.getScale()) || 1;
    // .reveal n'est jamais transformé : son rectangle est fiable en cours de transition
    const R = reveal.getBoundingClientRect();
    const W = Math.round(R.width / echelle), H = Math.round(R.height / echelle);
    if (W < 10 || H < 10) return;
    let ox = 0, oy = 0;
    for (let n = hote; n && n !== slides; n = n.offsetParent) { ox += n.offsetLeft; oy += n.offsetTop; }
    scene.style.width = W + 'px';
    scene.style.height = H + 'px';
    scene.style.left = Math.round(slides.offsetWidth / 2 - W / 2 - ox) + 'px';
    scene.style.top = Math.round(slides.offsetHeight / 2 - H / 2 - oy) + 'px';
    const k = Math.min(3, Math.max(1, 0.8 / echelle));
    scene.style.setProperty('--k', k);
    const etroit = R.width < 700;
    const bas = etroit ? 118 / echelle : 22;
    scene.style.setProperty('--bas', bas + 'px');
    scene.style.setProperty('--marge', etroit ? '24px' : '250px');
    pr = Math.min(window.devicePixelRatio * echelle, 3);
    canvas.width = Math.round(W * pr); canvas.height = Math.round(H * pr);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    S.W = W; S.H = H; S.k = k;
    // Hauteur de la barre : offsetHeight ignore les transformations CSS, contrairement à
    // getBoundingClientRect() qui, pendant la transition 3D de reveal.js, renvoie une valeur faussée.
    const hb = barre.offsetHeight * k;
    const haut = 78 * k;                                       // bandeau de formule
    const hAide = 30 * k;                                      // légende sous la scène
    S.zone = { x: 0, y: haut, w: W, h: Math.max(50, H - haut - hb - bas - 14 * k - hAide) };
    aide.style.top = (S.zone.y + S.zone.h + 6 * k) + 'px';
    if (spec.reserve) {                                        // place réservée par la scène (graphe, etc.)
      const r = Math.min(spec.reserve(S), S.zone.h * 0.5);
      S.zone.y += r; S.zone.h -= r;
    }
    const m = typeof spec.monde === 'function' ? spec.monde(S) : spec.monde, x0 = m.x0 || 0;
    S.monde = m;
    S.s = Math.min(S.zone.w * 0.96 / m.w, S.zone.h * 0.96 / m.h);
    S.ox = (W - m.w * S.s) / 2 - x0 * S.s;                     // abscisse écran de x = 0
    S.oy = S.zone.y + (S.zone.h + m.h * S.s) / 2;              // ordonnée écran de y = 0 (bas du monde)
    S.X = (x) => S.ox + x * S.s;
    S.Y = (y) => S.oy - y * S.s;
    S.L = (l) => l * S.s;
    dirty = true;
  }

  function dessiner() {
    if (!S.X) return;
    ctx.setTransform(pr, 0, 0, pr, 0, 0);
    ctx.clearRect(0, 0, S.W, S.H);
    etiquettes.forEach(function (e) { e.vu = false; });
    spec.dessiner(S, S.t);
    etiquettes.forEach(function (e) { e.el.style.display = e.vu ? '' : 'none'; });
  }

  function image(maintenant) {
    raf = requestAnimationFrame(image);
    const dt = Math.min(0.05, (maintenant - derniere) / 1000);
    derniere = maintenant;
    if (enCours) {
      S.t = Math.min(spec.duree, S.t + dt);
      if (S.t >= spec.duree) enCours = false;
      dirty = true;
      majBoutons();
    }
    if (dirty) { dessiner(); dirty = false; }
  }

  function majVisibilite() {
    const voulu = !!(window.Reveal && Reveal.getCurrentSlide && Reveal.getCurrentSlide() === section);
    if (voulu && !actif) {
      actif = true;
      mettreALaTaille();
      derniere = performance.now();
      raf = requestAnimationFrame(image);
    } else if (!voulu && actif) {
      actif = false;
      cancelAnimationFrame(raf);
      if (enCours) { enCours = false; majBoutons(); }         // en pause quand on quitte la slide
    }
  }
  function brancher() {
    Reveal.on('slidechanged', majVisibilite);
    // à la fin de la transition, on recalcule la mise en page une dernière fois (par sécurité)
    Reveal.on('slidetransitionend', function () { if (actif) mettreALaTaille(); });
    Reveal.on('resize', function () { if (actif) mettreALaTaille(); });
    majVisibilite();
  }
  if (window.Reveal && Reveal.isReady && Reveal.isReady()) brancher();
  else if (window.Reveal) Reveal.on('ready', brancher);

  mathjaxPret().then(function () { return Promise.all(etiquettes.map(function (e) { return e.rendre(); })); })
    .then(function () { dirty = true; });
}

/* =====================================================================
 *  Scène 1 — Inertie : palet sur coussin d'air (1re loi)
 * ===================================================================== */

function sceneInertie() {
  const X0 = 1.3, V0 = 1.4, R = 0.38, LARGEUR = 16;
  const KAPPA = 0.3, F_LAT = 0.2, F_AVANT = 0.2;          // masse du palet : 1 kg
  const PAS = 0.5;                                         // chronophotographie : un point toutes les 0,5 s
  let hTable = 9;                                          // hauteur de la table, adaptée à la fenêtre

  /** Mouvement du palet (m = 1 kg) dans chaque situation. */
  function etat(sit, t) {
    const y0 = hTable * (sit === 'lat' ? 0.27 : 0.42);       // la déviation latérale monte : on part plus bas
    switch (sit) {
      case 'frott': {                                      // force de frottement −κ v
        const e = Math.exp(-KAPPA * t), vx = V0 * e;
        return { x: X0 + V0 / KAPPA * (1 - e), y: y0, vx: vx, vy: 0, Fx: -KAPPA * vx, Fy: 0 };
      }
      case 'lat':                                          // force constante perpendiculaire au mouvement
        return { x: X0 + V0 * t, y: y0 + 0.5 * F_LAT * t * t, vx: V0, vy: F_LAT * t, Fx: 0, Fy: F_LAT };
      case 'avant':                                        // force constante dans le sens du mouvement
        return { x: X0 + V0 * t + 0.5 * F_AVANT * t * t, y: y0, vx: V0 + F_AVANT * t, vy: 0, Fx: F_AVANT, Fy: 0 };
      default:                                             // pseudo-isolé : poids et réaction se compensent
        return { x: X0 + V0 * t, y: y0, vx: V0, vy: 0, Fx: 0, Fy: 0 };
    }
  }

  const L = {};
  const C_F = '\\color{#FF968D}', C_V = '\\color{#FFF056}';

  return {
    alt: 'Palet sur une table à coussin d\'air vu de dessus, avec sa chronophotographie : mouvement rectiligne uniforme quand la somme des forces est nulle, mouvement modifié sinon.',
    duree: 6.5,
    // table 16 m de large ; plus haute que large/16:9 sur un écran étroit, pour remplir la fenêtre
    monde: function (S) {
      hTable = borne(LARGEUR * S.zone.h / S.zone.w, 9, 13);
      return { w: LARGEUR, h: hTable };
    },
    construire: function (S) {
      S.aide('Vue de dessus d\'un palet sur coussin d\'air · chronophotographie : un point toutes les 0,5 s');
      const g = S.groupe('Situation');
      S.choix(g, 'sit', [
        { cle: 'aucune', html: 'ΣF = 0', titre: 'Système pseudo-isolé' },
        { cle: 'frott', html: 'Frottements', titre: 'Force opposée à la vitesse' },
        { cle: 'lat', html: 'Force latérale', titre: 'Force perpendiculaire à la vitesse' },
        { cle: 'avant', html: 'Force vers l\'avant', titre: 'Force dans le sens de la vitesse' }
      ], 'aucune');
      L.v = S.etiquette('\\vec{v}', COUL.vit, 34, 'v');
      L.F = S.etiquette('\\sum\\vec{F}_{\\mathrm{ext}}', COUL.force, 32, 'ΣF');
      L.aucune = S.etiquette('{' + C_F + '\\sum\\vec{F}_{\\mathrm{ext}}=\\vec{0}}\\;\\Leftrightarrow\\;{' + C_V + '\\vec{v}=\\overrightarrow{\\mathrm{cte}}\\text{ (MRU)}}', COUL.texte, 40, 'ΣF = 0 ⇔ MRU');
      L.autre = S.etiquette('{' + C_F + '\\sum\\vec{F}_{\\mathrm{ext}}\\neq\\vec{0}}\\;\\Leftrightarrow\\;{' + C_V + '\\vec{v}\\text{ varie : pas de MRU}}', COUL.texte, 40, 'ΣF ≠ 0 : pas de MRU');
    },
    dessiner: function (S, t) {
      const ctx = S.ctx, k = S.k, sit = S.v.sit, X = S.X, Y = S.Y, e = etat(sit, t), h = S.monde.h;

      /* --- table à coussin d'air : plateau en dégradé, rebord, quadrillage au mètre, échelle --- */
      const tx = X(0), ty = Y(h), tw = S.L(LARGEUR), th = S.L(h), rayon = 16 * k;
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 34 * k; ctx.shadowOffsetY = 12 * k;
      S.rect(tx, ty, tw, th, '#243344', null, rayon);
      ctx.restore();
      const gT = ctx.createLinearGradient(0, ty, 0, ty + th);
      gT.addColorStop(0, '#3d5169'); gT.addColorStop(1, '#2b3b4e');
      S.rect(tx, ty, tw, th, gT, 'rgba(255,255,255,0.30)', rayon);
      S.rect(tx - 7 * k, ty - 7 * k, tw + 14 * k, th + 14 * k, null, 'rgba(255,255,255,0.10)', rayon + 7 * k);
      for (let i = 1; i < LARGEUR; i++) S.ligne(X(i), ty + 6 * k, X(i), ty + th - 6 * k, '#fff', 1, i % 4 === 0 ? 0.10 : 0.05);
      for (let j = 1; j < h; j++) S.ligne(tx + 6 * k, Y(j), tx + tw - 6 * k, Y(j), '#fff', 1, j % 4 === 0 ? 0.10 : 0.05);
      // barre d'échelle : 2 m
      const ex = X(LARGEUR - 3.2), ey = Y(0.8);
      S.ligne(ex, ey, ex + S.L(2), ey, '#fff', 2, 0.7);
      S.ligne(ex, ey - 5 * k, ex, ey + 5 * k, '#fff', 2, 0.7);
      S.ligne(ex + S.L(2), ey - 5 * k, ex + S.L(2), ey + 5 * k, '#fff', 2, 0.7);
      S.texte('2 m', ex + S.L(1), ey - 14 * k, 17, 'rgba(255,255,255,0.7)', 'center', false);

      /* --- trajectoire (pointillés) et chronophotographie : un point toutes les 0,5 s --- */
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.30)'; ctx.lineWidth = 2 * k; ctx.setLineDash([4 * k, 7 * k]);
      ctx.beginPath();
      for (let tau = 0; tau <= t + 1e-9; tau += 0.05) {
        const p = etat(sit, tau);
        if (tau === 0) ctx.moveTo(X(p.x), Y(p.y)); else ctx.lineTo(X(p.x), Y(p.y));
      }
      ctx.lineTo(X(e.x), Y(e.y));
      ctx.stroke();
      ctx.restore();
      for (let n = 0; n * PAS <= t + 1e-9; n++) {
        const tau = n * PAS, p = etat(sit, tau), px = X(p.x), py = Y(p.y);
        S.disque(px, py, S.L(R), COUL.point, null, 0.20);
        S.disque(px, py, S.L(R), null, 'rgba(255,143,200,0.55)', 1, 1.5);
        S.disque(px, py, 2.6 * k, '#fff', null, 0.9);
        if (n % 2 === 0 && n > 0) {
          const q = etat(sit, tau - 2 * PAS);                  // un repère seulement si les points ne sont pas tassés
          if (Math.hypot(px - X(q.x), py - Y(q.y)) > 46 * k) S.texte(fmt(tau, 0) + ' s', px, py + S.L(R) + 15 * k, 15, 'rgba(255,255,255,0.55)', 'center', false);
        }
      }

      /* --- palet : coussin d'air, ombre, corps en dégradé --- */
      const cx = X(e.x), cy = Y(e.y), r = S.L(R);
      const gA = ctx.createRadialGradient(cx, cy, r * 0.8, cx, cy, r * 1.9);
      gA.addColorStop(0, 'rgba(120,210,255,0.28)'); gA.addColorStop(1, 'rgba(120,210,255,0)');
      S.disque(cx, cy, r * 1.9, gA);
      S.ombre(cx + 3 * k, cy + 6 * k, r * 1.15, r * 0.7, 0.45);
      const gP = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.4, r * 0.1, cx, cy, r);
      gP.addColorStop(0, '#ff9ccd'); gP.addColorStop(0.55, COUL.point); gP.addColorStop(1, '#b02f78');
      S.disque(cx, cy, r, gP, '#fff', 1, 2.2);
      S.disque(cx, cy, r * 0.5, null, 'rgba(255,255,255,0.55)', 1, 1.5);

      /* --- vecteurs : vitesse (fin, dessous) et résultante des forces (épaisse, dessus),
             tous deux tracés depuis le centre du palet --- */
      const v = Math.hypot(e.vx, e.vy), F = Math.hypot(e.Fx, e.Fy);
      if (v > 1e-3) {
        const dx = S.L(1.2) * e.vx, dy = -S.L(1.2) * e.vy;
        S.fleche(cx, cy, cx + dx, cy + dy, COUL.vit, 4);
        const n = Math.hypot(dx, dy);
        S.place(L.v, cx + dx + dx / n * 26 * k, cy + dy + dy / n * 26 * k - 8 * k);
      }
      if (F > 1e-4) {
        const dx = S.L(6) * e.Fx, dy = -S.L(6) * e.Fy, n = Math.hypot(dx, dy);
        S.fleche(cx, cy, cx + dx, cy + dy, COUL.force, 7);
        // Étiquette : au-delà de la pointe ; au-dessus de la pointe si F est (presque) colinéaire à v,
        // pour ne recouvrir ni la flèche de v ni les repères de temps
        const colineaire = v > 1e-3 && Math.abs((dx * e.vx - dy * -e.vy) / (n * v)) > 0.8;
        if (colineaire) S.place(L.F, cx + dx, cy + dy - 40 * k, 'c');
        else S.place(L.F, cx + dx + dx / n * 34 * k, cy + dy + dy / n * 34 * k, 'c');
      }
      S.disque(cx, cy, 3.2 * k, '#fff');                       // origine commune des vecteurs : le centre

      S.place(sit === 'aucune' ? L.aucune : L.autre, S.W / 2, 42 * k, 'c', true);
    }
  };
}

/* =====================================================================
 *  Scène 2 — Deuxième loi : ΣF = m a, avec le graphe v(t)
 * ===================================================================== */

function scenePFD() {
  const L = {};
  const PAS = 0.5, X_DEPART = 1.4, H_MONDE = 6.6, SOL = 1.5, ECH = 0.7;   // ECH : mètres par unité (N ou m·s⁻²)
  const T_MAX = 3, V_MAX = 15;
  let sortie;

  /** Dimensions du panneau du graphe, en unités k (indépendantes de l'échelle de la slide). */
  function panneau(S) {
    const Wk = S.W / S.k, large = Wk >= 760 && S.W / S.H >= 1.15;     // côte à côte seulement en format paysage
    const w = large ? borne(0.26 * Wk, 250, 340) : borne(Wk - 40, 220, 360);
    return { large: large, w: w, h: Math.round(w * 0.68) };
  }

  return {
    alt: 'Bloc posé sur un support sans frottement et tiré par une force : l\'accélération est proportionnelle à la force et inversement proportionnelle à la masse. Un graphe donne v en fonction de t.',
    duree: T_MAX,
    // Sur un écran étroit, le graphe passe au-dessus de la scène : on lui réserve la place.
    reserve: function (S) { const p = panneau(S); return p.large ? 0 : (p.h + 12) * S.k; },
    // La largeur de monde représentée suit les proportions de la zone de dessin.
    monde: function (S) {
      return { w: borne(H_MONDE * S.zone.w / S.zone.h, 11, 26), h: H_MONDE };
    },
    construire: function (S) {
      S.aide('Support sans frottement : la résultante des forces est la force de traction · un point toutes les 0,5 s');
      S.curseur(S.groupe(), { cle: 'F', label: 'Force ΣF', nom: 'Force F en newtons', min: 0, max: 5, pas: 0.5, val: 3, fmt: (x) => fmt(x) + ' N' });
      S.curseur(S.groupe(), { cle: 'm', label: 'Masse m', nom: 'Masse m en kilogrammes', min: 1, max: 10, pas: 0.5, val: 2, fmt: (x) => fmt(x) + ' kg' });
      sortie = S.sortie(S.groupe());
      sortie.textContent = 'a = ΣF/m = 0,00 m·s⁻²  ·  v = 0,0 m·s⁻¹';   // rempli dès le départ : la barre a sa hauteur définitive
      L.F = S.etiquette('\\sum\\vec{F}_{\\mathrm{ext}}', COUL.force, 32, 'ΣF');
      L.a = S.etiquette('\\vec{a}', COUL.acc, 34, 'a');
      L.eq = S.etiquette('{\\color{#FF968D}\\sum\\vec{F}_{\\mathrm{ext}}}=m\\,{\\color{#61D836}\\vec{a}}', COUL.texte, 44, 'ΣF = m a');
    },
    dessiner: function (S, t) {
      const ctx = S.ctx, k = S.k, F = S.v.F, m = S.v.m, a = F / m, X = S.X, Y = S.Y, w = S.monde.w;
      const xb = (tau) => X_DEPART + 0.5 * a * tau * tau;
      const cam = Math.max(0, xb(t) - 0.3 * w);                // la vue défile pour suivre le bloc
      const XX = (x) => X(x - cam);
      const cote = 1.4 + 0.14 * m;                             // le côté du bloc grandit avec la masse
      const yc = SOL + cote / 2, haut = SOL + cote;

      /* --- sol : bande en dégradé, règle graduée au mètre, repères tous les 5 m --- */
      const ySol = Y(SOL), yBas = S.zone.y + S.zone.h + 4 * k;
      const gS = ctx.createLinearGradient(0, ySol, 0, yBas);
      gS.addColorStop(0, 'rgba(90,110,135,0.55)'); gS.addColorStop(1, 'rgba(40,52,68,0.15)');
      S.rect(0, ySol, S.W, Math.max(0, yBas - ySol), gS, null, 0);
      S.ligne(0, ySol, S.W, ySol, '#fff', 3, 0.75);
      const xmin = Math.floor((0 - S.ox) / S.s + cam) - 1, xmax = Math.ceil((S.W - S.ox) / S.s + cam) + 1;
      for (let x = xmin; x <= xmax; x++) {
        const long = x % 5 === 0, px = XX(x);
        S.ligne(px, ySol, px, ySol + (long ? 17 : 9) * k, '#fff', long ? 2.5 : 1.5, long ? 0.8 : 0.5);
        if (long && x >= 0) S.texte(x + ' m', px, ySol + 36 * k, 19, 'rgba(255,255,255,0.78)', 'center', false);
      }

      /* --- chronophotographie : positions aux dates multiples de 0,5 s --- */
      for (let n = 0; n * PAS <= t + 1e-9; n++) {
        const px = XX(xb(n * PAS));
        S.rect(px - S.L(cote) / 2, Y(haut), S.L(cote), S.L(cote), 'rgba(90,170,235,0.10)', 'rgba(150,205,250,0.55)', 6 * k, 1, 6);
        S.disque(px, Y(yc), 2.6 * k, '#fff', null, 0.85);
      }

      /* --- bloc : ombre, corps en dégradé, masse inscrite --- */
      const bx = XX(xb(t)), bw = S.L(cote);
      S.ombre(bx, ySol + 3 * k, bw * 0.62, 7 * k, 0.5);
      const gB = ctx.createLinearGradient(0, Y(haut), 0, Y(SOL));
      gB.addColorStop(0, '#6db4ee'); gB.addColorStop(1, '#3a74ad');
      S.rect(bx - bw / 2, Y(haut), bw, bw, gB, '#fff', 7 * k);
      S.rect(bx - bw / 2 + 5 * k, Y(haut) + 5 * k, bw - 10 * k, bw * 0.28, 'rgba(255,255,255,0.14)', null, 4 * k);   // reflet
      S.texte(fmt(m) + ' kg', bx, Y(SOL + cote * 0.2), Math.min(24, bw / k * 0.3), '#fff', 'center', false);

      /* --- ΣF : depuis le centre du bloc ; a : au-dessus du bloc, à la même échelle --- */
      const bord = bx + bw / 2;
      if (F > 1e-6) {
        const y1 = Y(yc), x2 = bx + S.L(ECH * F);
        S.fleche(bx, y1, x2, y1, COUL.force, 7);
        S.place(L.F, Math.max(x2, bord) + 22 * k, y1, 'l');
        const y2 = Y(haut + 0.65), x3 = bx + S.L(ECH * a);
        S.fleche(bx, y2, x3, y2, COUL.acc, 6);
        S.place(L.a, x3 + 22 * k, y2, 'l');
      }
      S.disque(bx, Y(yc), 3.4 * k, '#fff');                    // origine de ΣF : le centre du bloc

      /* --- graphe v(t) : v = a t, avec marges internes pour que rien ne soit tronqué --- */
      const p = panneau(S), pw = p.w * k, ph = p.h * k;
      const px = p.large ? S.W - pw - 20 * k : (S.W - pw) / 2;
      const py = p.large ? S.zone.y + 6 * k : S.zone.y - ph - 10 * k;
      const gP = ctx.createLinearGradient(0, py, 0, py + ph);
      gP.addColorStop(0, 'rgba(20,28,38,0.78)'); gP.addColorStop(1, 'rgba(20,28,38,0.55)');
      S.rect(px, py, pw, ph, gP, 'rgba(255,255,255,0.22)', 12 * k);
      const ml = 44 * k, mt = 42 * k, mr = 26 * k, mb = 48 * k;
      const gx = px + ml, gy = py + mt, gw = pw - ml - mr, gh = ph - mt - mb;
      const GX = (tt) => gx + gw * tt / T_MAX, GY = (v) => gy + gh * (1 - v / V_MAX);
      for (let tt = 0; tt <= T_MAX; tt++) {
        S.ligne(GX(tt), GY(0), GX(tt), GY(V_MAX), '#fff', 1, 0.13);
        S.texte(String(tt), GX(tt), GY(0) + 17 * k, 18, 'rgba(255,255,255,0.8)', 'center', false);
      }
      for (let v = 0; v <= V_MAX; v += 5) {
        S.ligne(GX(0), GY(v), GX(T_MAX), GY(v), '#fff', 1, 0.13);
        S.texte(String(v), GX(0) - 9 * k, GY(v), 18, 'rgba(255,255,255,0.8)', 'right', false);
      }
      S.ligne(GX(0), GY(0), GX(T_MAX), GY(0), '#fff', 2, 0.8);
      S.ligne(GX(0), GY(0), GX(0), GY(V_MAX), '#fff', 2, 0.8);
      S.texte('t (s)', GX(T_MAX), GY(0) + 37 * k, 19, 'rgba(255,255,255,0.85)', 'right');
      S.texte('v (m·s⁻¹)', px + 14 * k, py + 20 * k, 19, COUL.vit, 'left');
      const vFin = Math.min(V_MAX, a * T_MAX), vNow = Math.min(V_MAX, a * t);
      S.ligne(GX(0), GY(0), GX(T_MAX), GY(vFin), COUL.vit, 2, 0.35, 7);          // droite complète
      S.ligne(GX(0), GY(0), GX(t), GY(vNow), COUL.vit, 4);                        // déjà parcourue
      S.ligne(GX(t), GY(0), GX(t), GY(vNow), COUL.vit, 1.5, 0.5, 4);              // repères sur les axes
      S.ligne(GX(0), GY(vNow), GX(t), GY(vNow), COUL.vit, 1.5, 0.5, 4);
      S.disque(GX(t), GY(vNow), 5.5 * k, COUL.vit, '#fff');

      S.place(L.eq, S.W / 2, 42 * k, 'c', true);
      sortie.textContent = 'a = ΣF/m = ' + fmt(a, 2) + ' m·s⁻²  ·  v = ' + fmt(a * t, 1) + ' m·s⁻¹';
    }
  };
}

/* ---------- Lancement ---------- */

const SCENES = { inertie: sceneInertie, pfd: scenePFD };

function lancer() {
  document.querySelectorAll('.anim-pe').forEach(function (h) {
    const f = SCENES[h.dataset.anim];
    if (f) creerScene(h, f);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
else lancer();
