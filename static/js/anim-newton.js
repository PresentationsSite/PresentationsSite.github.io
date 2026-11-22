/*
 * Animations 2D « pleine slide » pour le cours sur les lois de Newton.
 *
 *   <link rel="stylesheet" href="/css/anim-plein-ecran.css">
 *   <div class="anim-pe" data-anim="inertie"></div>
 *   <script type="module" src="/js/anim-newton.js"></script>
 *
 * Scènes (data-anim) :
 *   inertie         palet sur coussin d'air : ΣF = 0 donne un MRU, sinon non (1re loi)
 *   train           bille sur un plateau sans frottement dans un train qui accélère :
 *                   référentiel galiléen / non galiléen (1re loi)
 *   pfd             bloc tiré par une force F : ΣF = m a, avec le graphe v(t) (2e loi)
 *   actionreaction  deux mobiles se repoussent : F_B/A = −F_A/B, accélérations inverses
 *                   des masses (3e loi)
 *
 * Toutes les scènes sont des fonctions pures du temps t : le curseur de temps permet
 * de se placer à n'importe quelle date, en avant comme en arrière.
 * Code couleur du cours : forces en rose-rouge (#FF968D), vitesse en jaune,
 * accélération en vert, référentiel galiléen en bleu.
 */

const COUL = {
  force: '#FF968D', vit: '#FFF056', acc: '#61D836', galil: '#56C1FF',
  point: '#EB53A0', A: '#56C1FF', B: '#C792EA', texte: '#FFFFFF'
};

const ICONES = {
  lecture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4" width="4.5" height="16" rx="1.2"/><rect x="14" y="4" width="4.5" height="16" rx="1.2"/></svg>',
  debut: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="4.5" width="3.2" height="15" rx="1"/><path d="M19.5 5.6v12.8a1 1 0 0 1-1.55.84l-9.2-6.4a1 1 0 0 1 0-1.68l9.2-6.4a1 1 0 0 1 1.55.84z"/></svg>',
  rejouer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 7.75 10h-2.1A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35A7.96 7.96 0 0 0 12 4z"/></svg>'
};

const fmt = (x, n) => x.toFixed(n === undefined ? 1 : n).replace('.', ',').replace('-', '−');
const carre = (x) => x * x;

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
    ctx: ctx, v: {}, t: 0, W: 0, H: 0, k: 1, s: 1, ox: 0, oy: 0, zone: { y: 0, h: 0 },
    X: null, Y: null, L: null, sortie: null
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
  /** Pose une étiquette en (px, py) (px de slide, repère de la scène), ancrée en 'c' (centre), 'l', 'r', 'b' ou 't'. */
  S.place = function (e, px, py, ancre) {
    e.vu = true;
    e.el.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px) scale(' + S.k +
      ') translate(' + ANCRES[ancre || 'c'] + ')';
  };
  S.aide = function (html) { aide.innerHTML = html; };

  /* --- dessin : outils --- */
  /** Flèche de (x1, y1) à (x2, y2), en px ; ep = épaisseur (px de slide). */
  S.fleche = function (x1, y1, x2, y2, couleur, ep) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    if (L < 2) return;
    const e = ep * S.k, tete = Math.min(L * 0.8, (11 + 2.4 * ep) * S.k), ux = dx / L, uy = dy / L;
    ctx.save();
    ctx.strokeStyle = couleur; ctx.fillStyle = couleur; ctx.lineWidth = e; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - ux * tete * 0.6, y2 - uy * tete * 0.6); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * tete + uy * tete * 0.42, y2 - uy * tete - ux * tete * 0.42);
    ctx.lineTo(x2 - ux * tete - uy * tete * 0.42, y2 - uy * tete + ux * tete * 0.42);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  };
  S.disque = function (x, y, r, remplissage, contour, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.beginPath(); ctx.arc(x, y, Math.max(r, 0.5), 0, 2 * Math.PI);
    if (remplissage) { ctx.fillStyle = remplissage; ctx.fill(); }
    if (contour) { ctx.strokeStyle = contour; ctx.lineWidth = 2 * S.k; ctx.stroke(); }
    ctx.restore();
  };
  S.rect = function (x, y, w, h, remplissage, contour, rayon, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha === undefined ? 1 : alpha;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, rayon || 0); else ctx.rect(x, y, w, h);
    if (remplissage) { ctx.fillStyle = remplissage; ctx.fill(); }
    if (contour) { ctx.strokeStyle = contour; ctx.lineWidth = 2 * S.k; ctx.stroke(); }
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
  /** Texte en px de slide (taille compensée par k), police à empattements italique par défaut. */
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
    // zone de dessin : sous le bandeau de formule, au-dessus de la barre de commandes
    const hb = barre.getBoundingClientRect().height / echelle;
    const haut = 64 * k;
    const hAide = 30 * k;                                      // légende sous la scène
    S.zone = { y: haut, h: Math.max(50, H - haut - hb - bas - 14 * k - hAide) };
    aide.style.top = (S.zone.y + S.zone.h + 6 * k) + 'px';
    const m = spec.monde, x0 = m.x0 || 0;
    S.s = Math.min(W * 0.96 / m.w, S.zone.h * 0.96 / m.h);
    S.ox = (W - m.w * S.s) / 2 - x0 * S.s;                    // abscisse écran de x = 0
    S.oy = S.zone.y + (S.zone.h + m.h * S.s) / 2;             // ordonnée écran de y = 0 (bas du monde)
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

function sceneInertie(S) {
  const X0 = 1.2, Y0 = 4.2, V0 = 1.6, R = 0.38;
  const KAPPA = 0.3, F_LAT = 0.1, F_AVANT = 0.15;          // masse du palet : 1 kg
  const PAS = 0.5;                                         // chronophotographie : un point toutes les 0,5 s

  /** Mouvement du palet (m = 1 kg) dans chaque situation. */
  function etat(sit, t) {
    switch (sit) {
      case 'frott': {                                      // force de frottement −κ v
        const e = Math.exp(-KAPPA * t), vx = V0 * e;
        return { x: X0 + V0 / KAPPA * (1 - e), y: Y0, vx: vx, vy: 0, Fx: -KAPPA * vx, Fy: 0 };
      }
      case 'lat':                                          // force constante perpendiculaire au mouvement
        return { x: X0 + V0 * t, y: Y0 + 0.5 * F_LAT * t * t, vx: V0, vy: F_LAT * t, Fx: 0, Fy: F_LAT };
      case 'avant':                                        // force constante dans le sens du mouvement
        return { x: X0 + V0 * t + 0.5 * F_AVANT * t * t, y: Y0, vx: V0 + F_AVANT * t, vy: 0, Fx: F_AVANT, Fy: 0 };
      default:                                             // pseudo-isolé : poids et réaction se compensent
        return { x: X0 + V0 * t, y: Y0, vx: V0, vy: 0, Fx: 0, Fy: 0 };
    }
  }

  const L = {};
  const C_F = '\\color{#FF968D}', C_V = '\\color{#FFF056}';

  return {
    alt: 'Palet sur une table à coussin d\'air vu de dessus, avec sa chronophotographie : mouvement rectiligne uniforme quand la somme des forces est nulle, mouvement modifié sinon.',
    duree: 6.5,
    monde: { w: 16, h: 9 },
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
      const sit = S.v.sit, X = S.X, Y = S.Y, e = etat(sit, t);
      // table à coussin d'air
      S.rect(X(0), Y(9), S.L(16), S.L(9), 'rgba(255,255,255,0.05)', 'rgba(255,255,255,0.22)', 10 * S.k);
      for (let i = 1; i < 16; i++) S.ligne(X(i), Y(9), X(i), Y(0), '#fff', 1, 0.05);
      for (let j = 1; j < 9; j++) S.ligne(X(0), Y(j), X(16), Y(j), '#fff', 1, 0.05);
      // chronophotographie : positions aux dates multiples de 0,5 s
      for (let tau = 0; tau <= t + 1e-9; tau += PAS) {
        const p = etat(sit, tau);
        S.disque(X(p.x), Y(p.y), S.L(R), COUL.point, null, 0.28);
        S.disque(X(p.x), Y(p.y), 3 * S.k, '#fff', null, 0.8);
      }
      // palet
      S.disque(X(e.x), Y(e.y), S.L(R), COUL.point, '#fff');
      S.disque(X(e.x), Y(e.y), S.L(R) * 0.45, null, 'rgba(255,255,255,0.7)');
      // vecteur vitesse (au-dessus de l'axe du palet) et résultante des forces (en dessous)
      const v = Math.hypot(e.vx, e.vy), F = Math.hypot(e.Fx, e.Fy);
      if (v > 1e-3) {
        const bx = X(e.x), by = Y(e.y) - S.L(0.5), kx = S.L(1.2) * e.vx, ky = -S.L(1.2) * e.vy;
        S.fleche(bx, by, bx + kx, by + ky, COUL.vit, 5);
        S.place(L.v, bx + kx + 18 * S.k, by + ky - 20 * S.k);
      }
      if (F > 1e-4) {
        const bx = X(e.x), by = Y(e.y) + S.L(0.5), kx = S.L(6) * e.Fx, ky = -S.L(6) * e.Fy;
        S.fleche(bx, by, bx + kx, by + ky, COUL.force, 5);
        S.place(L.F, bx + kx * 0.5, by + ky * 0.5 + 34 * S.k);
      }
      S.place(sit === 'aucune' ? L.aucune : L.autre, S.W / 2, S.zone.y / 2 + 6 * S.k);
    }
  };
}

/* =====================================================================
 *  Scène 2 — Train qui accélère : référentiel galiléen ou non (1re loi)
 * ===================================================================== */

function sceneTrain(S) {
  const A_T = 1.0, T1 = 1.5, T2 = 3.5;           // le train accélère entre T1 et T2 (puis reste en MRU)
  const LW = 8, XB0 = 6.4, WAGON0 = 0.8, WAGON_FIXE = 4;
  const R = 0.32, Y_PLATEAU = 2.2;

  const XT = (t) => t < T1 ? 0 : (t < T2 ? 0.5 * A_T * carre(t - T1) : 0.5 * A_T * carre(T2 - T1) + A_T * (T2 - T1) * (t - T2));
  const VT = (t) => t < T1 ? 0 : (t < T2 ? A_T * (t - T1) : A_T * (T2 - T1));
  const AT = (t) => (t >= T1 && t < T2) ? A_T : 0;
  const PAS = 0.5;

  const L = {};
  return {
    alt: 'Wagon vu de côté avec une bille sur un plateau sans frottement : vue depuis le sol (référentiel galiléen) ou depuis le train, qui accélère puis roule à vitesse constante.',
    duree: 5.4,
    monde: { w: 16, h: 6.2 },
    construire: function (S) {
      S.aide('Plateau sans frottement : poids et réaction se compensent, donc ΣF = 0 sur la bille · un point toutes les 0,5 s');
      const g = S.groupe('Référentiel');
      S.choix(g, 'ref', [
        { cle: 'sol', html: 'Sol', titre: 'Observer depuis le sol' },
        { cle: 'train', html: 'Train', titre: 'Observer depuis le train' }
      ], 'sol');
      L.v = S.etiquette('\\vec{v}', COUL.vit, 34, 'v');
      L.a = S.etiquette('\\vec{a}', COUL.acc, 34, 'a');
      L.aT = S.etiquette('\\vec{a}_{\\mathrm{train}}', COUL.acc, 32, 'a train');
      const B = '\\color{#56C1FF}', F0 = '\\color{#FF968D}', V = '\\color{#FFF056}', RED = '\\color{#FF6B6B}';
      L.sol = S.etiquette('{' + B + '\\text{Référentiel du sol (galiléen)}}\\;:\\;{' + F0 + '\\sum\\vec{F}=\\vec{0}}\\Rightarrow{' + V + '\\vec{a}=\\vec{0}}', COUL.texte, 38, 'Référentiel du sol');
      L.trainAcc = S.etiquette('{' + B + '\\text{Référentiel du train}}\\;:\\;{' + F0 + '\\sum\\vec{F}=\\vec{0}}\\text{ mais }{' + RED + '\\vec{a}\\neq\\vec{0}}\\Rightarrow\\text{ non galiléen}', COUL.texte, 38, 'Référentiel du train');
      L.trainMru = S.etiquette('{' + B + '\\text{Référentiel du train}}\\;:\\;{' + F0 + '\\sum\\vec{F}=\\vec{0}}\\Rightarrow{' + V + '\\vec{a}=\\vec{0}}\\text{ (train en MRU : galiléen)}', COUL.texte, 38, 'Référentiel du train');
    },
    dessiner: function (S, t) {
      const ref = S.v.ref, X = S.X, Y = S.Y, xt = XT(t), dessineTrain = ref === 'train';
      // position du fond (sol) et du wagon dans la vue choisie
      const decal = dessineTrain ? (WAGON_FIXE - WAGON0) - xt : 0;       // décalage appliqué au sol
      const dos = dessineTrain ? WAGON_FIXE : WAGON0 + xt;               // abscisse de l'arrière du wagon
      const xBille = dessineTrain ? WAGON_FIXE + XB0 - xt : WAGON0 + XB0;
      // sol, rail et poteaux
      S.ligne(X(-2), Y(0.85), X(18), Y(0.85), '#fff', 3, 0.55);
      for (let k = -10; k < 20; k++) {
        const x = 2 * k + decal;
        if (x < -1 || x > 17) continue;
        S.ligne(X(x), Y(0.85), X(x), Y(0.1), '#fff', 2, 0.35);
        S.ligne(X(x - 0.25), Y(0.1), X(x + 0.25), Y(0.1), '#fff', 2, 0.35);
      }
      // wagon : roues, caisse, plateau
      [0.9, LW - 0.9].forEach(function (dx) {
        S.disque(X(dos + dx), Y(1.25), S.L(0.4), '#4a4f55', '#fff');
      });
      S.rect(X(dos), Y(4.6), S.L(LW), S.L(3.1), 'rgba(86,193,255,0.08)', COUL.galil, 8 * S.k);
      S.ligne(X(dos + 0.2), Y(Y_PLATEAU), X(dos + LW - 0.2), Y(Y_PLATEAU), '#fff', 5, 0.9);
      // chronophotographie de la bille dans la vue choisie
      const yb = Y_PLATEAU + R;
      for (let tau = 0; tau <= t + 1e-9; tau += PAS) {
        const xb = dessineTrain ? WAGON_FIXE + XB0 - XT(tau) : WAGON0 + XB0;
        S.disque(X(xb), Y(yb), S.L(R), COUL.point, null, 0.3);
        S.disque(X(xb), Y(yb), 2.5 * S.k, '#fff', null, 0.8);
      }
      S.disque(X(xBille), Y(yb), S.L(R), COUL.point, '#fff');
      // vecteurs : vitesse et accélération de la bille dans la vue choisie
      const vb = dessineTrain ? -VT(t) : 0, ab = dessineTrain ? -AT(t) : 0;
      if (Math.abs(vb) > 1e-3) {
        const y = Y(yb + 0.75);
        S.fleche(X(xBille), y, X(xBille + vb * 0.9), y, COUL.vit, 5);
        S.place(L.v, X(xBille + vb * 0.9) - 20 * S.k, y - 22 * S.k);
      }
      if (Math.abs(ab) > 1e-3) {
        const y = Y(yb + 1.35);
        S.fleche(X(xBille), y, X(xBille + ab * 1.8), y, COUL.acc, 5);
        S.place(L.a, X(xBille + ab * 1.8) - 20 * S.k, y - 22 * S.k);
      }
      // accélération du train, vue du sol
      if (!dessineTrain && AT(t) > 0) {
        const y = Y(5.2), xc = dos + LW / 2;
        S.fleche(X(xc), y, X(xc + A_T * 1.8), y, COUL.acc, 5);
        S.place(L.aT, X(xc + A_T * 1.8) + 14 * S.k, y - 24 * S.k, 'l');
      }
      // bandeau
      const bandeau = !dessineTrain ? L.sol : (AT(t) > 0 ? L.trainAcc : L.trainMru);
      S.place(bandeau, S.W / 2, S.zone.y / 2 + 6 * S.k);
    }
  };
}

/* =====================================================================
 *  Scène 3 — Deuxième loi : ΣF = m a, avec le graphe v(t)
 * ===================================================================== */

function scenePFD(S) {
  const L = {};
  const PAS = 0.5, SUIVI = 7.5;                   // la caméra suit le bloc au-delà de x = 7,5 m
  let sortie;

  return {
    alt: 'Bloc posé sur un support sans frottement et tiré par une force : l\'accélération est proportionnelle à la force et inversement proportionnelle à la masse. Un graphe donne v en fonction de t.',
    duree: 3,
    monde: { w: 22, h: 9 },
    construire: function (S) {
      S.aide('Support sans frottement : la résultante des forces est la force de traction · un point toutes les 0,5 s');
      S.curseur(S.groupe(), { cle: 'F', label: 'Force ΣF', nom: 'Force F en newtons', min: 0, max: 5, pas: 0.5, val: 3, fmt: (x) => fmt(x) + ' N' });
      S.curseur(S.groupe(), { cle: 'm', label: 'Masse m', nom: 'Masse m en kilogrammes', min: 1, max: 10, pas: 0.5, val: 2, fmt: (x) => fmt(x) + ' kg' });
      sortie = S.sortie(S.groupe());
      L.F = S.etiquette('\\sum\\vec{F}_{\\mathrm{ext}}', COUL.force, 32, 'ΣF');
      L.a = S.etiquette('\\vec{a}', COUL.acc, 34, 'a');
      L.eq = S.etiquette('{\\color{#FF968D}\\sum\\vec{F}_{\\mathrm{ext}}}=m\\,{\\color{#61D836}\\vec{a}}', COUL.texte, 44, 'ΣF = m a');
    },
    dessiner: function (S, t) {
      const F = S.v.F, m = S.v.m, a = F / m, X = S.X, Y = S.Y;
      const xb = (tau) => 2 + 0.5 * a * tau * tau;
      const cam = Math.max(0, xb(t) - SUIVI);        // la vue défile pour suivre le bloc
      const XX = (x) => X(x - cam);
      const cote = 1.4 + 0.14 * m, sol = 2.0;        // le côté du bloc grandit avec la masse
      const yc = sol + cote / 2;
      // sol gradué tous les mètres
      S.ligne(X(-1), Y(sol), X(23), Y(sol), '#fff', 3, 0.6);
      for (let x = Math.floor(cam) - 1; x <= cam + 23; x++) {
        const long = x % 5 === 0, px = XX(x);
        if (px < X(-1) || px > X(23)) continue;
        S.ligne(px, Y(sol), px, Y(sol - (long ? 0.5 : 0.25)), '#fff', long ? 2.5 : 1.5, 0.5);
        if (long) S.texte(x + ' m', px, Y(sol - 0.95), 20, 'rgba(255,255,255,0.65)', 'center', false);
      }
      // chronophotographie
      for (let tau = 0; tau <= t + 1e-9; tau += PAS) {
        S.rect(XX(xb(tau)) - S.L(cote) / 2, Y(sol + cote), S.L(cote), S.L(cote), null, 'rgba(235,83,160,0.45)', 4 * S.k);
        S.disque(XX(xb(tau)), Y(yc), 3 * S.k, '#fff', null, 0.8);
      }
      // bloc
      const bx = XX(xb(t));
      S.rect(bx - S.L(cote) / 2, Y(sol + cote), S.L(cote), S.L(cote), 'rgba(235,83,160,0.85)', '#fff', 4 * S.k);
      S.texte(fmt(m) + ' kg', bx, Y(yc), 24, '#fff', 'center', false);
      // ΣF et a, tracés à la verticale du centre du bloc, à la même échelle (0,5 m par unité)
      const haut = sol + cote;
      if (F > 1e-6) {
        const y1 = Y(haut + 0.5), x2 = bx + S.L(0.5 * F);
        S.fleche(bx, y1, x2, y1, COUL.force, 6);
        S.place(L.F, x2 + 20 * S.k, y1 - 2 * S.k, 'l');
        const y2 = Y(haut + 1.2), x3 = bx + S.L(0.5 * a);
        S.fleche(bx, y2, x3, y2, COUL.acc, 6);
        S.place(L.a, x3 + 20 * S.k, y2 - 2 * S.k, 'l');
      }
      // graphe v(t) : v = a t
      const gw = 300 * S.k, gh = 170 * S.k, gx = S.W - gw - 30 * S.k, gy = S.zone.y + 14 * S.k;
      S.rect(gx - 46 * S.k, gy - 12 * S.k, gw + 66 * S.k, gh + 56 * S.k, 'rgba(0,0,0,0.25)', 'rgba(255,255,255,0.18)', 8 * S.k);
      const vmax = 15, gX = (tt) => gx + gw * tt / 3, gY = (v) => gy + gh * (1 - v / vmax);
      for (let tt = 0; tt <= 3; tt++) {
        S.ligne(gX(tt), gY(0), gX(tt), gY(vmax), '#fff', 1, 0.15);
        S.texte(String(tt), gX(tt), gY(0) + 17 * S.k, 18, 'rgba(255,255,255,0.7)', 'center', false);
      }
      for (let v = 0; v <= vmax; v += 5) {
        S.ligne(gX(0), gY(v), gX(3), gY(v), '#fff', 1, 0.15);
        S.texte(String(v), gX(0) - 8 * S.k, gY(v), 18, 'rgba(255,255,255,0.7)', 'right', false);
      }
      S.ligne(gX(0), gY(0), gX(3), gY(0), '#fff', 2, 0.7);
      S.ligne(gX(0), gY(0), gX(0), gY(vmax), '#fff', 2, 0.7);
      S.texte('t (s)', gX(3), gY(0) + 38 * S.k, 18, 'rgba(255,255,255,0.8)', 'right');
      S.texte('v (m·s⁻¹)', gX(0) + 8 * S.k, gy - 2 * S.k, 18, COUL.vit, 'left');
      S.ligne(gX(0), gY(0), gX(3), gY(Math.min(vmax, 3 * a)), COUL.vit, 2, 0.35, 7);     // droite complète
      S.ligne(gX(0), gY(0), gX(t), gY(Math.min(vmax, a * t)), COUL.vit, 4);                // déjà parcourue
      S.disque(gX(t), gY(Math.min(vmax, a * t)), 5 * S.k, COUL.vit, '#fff');
      S.place(L.eq, S.W / 2, S.zone.y / 2 + 6 * S.k);
      sortie.textContent = 'a = ΣF/m = ' + fmt(a, 2) + ' m·s⁻²  ·  v = ' + fmt(a * t, 1) + ' m·s⁻¹';
    }
  };
}

/* =====================================================================
 *  Scène 4 — Actions réciproques : deux mobiles se repoussent (3e loi)
 * ===================================================================== */

function sceneActionReaction(S) {
  const F0 = 120, T_ON = 1.0, T_OFF = 1.5, DT = T_OFF - T_ON;       // poussée de 120 N pendant 0,5 s
  const PAS = 0.5, SOL = 2.4;
  const L = {};
  const rayon = (m) => 0.5 * Math.cbrt(m / 60);

  /** Abscisse du centre du mobile de masse m, poussé dans le sens s (−1 pour A, +1 pour B). */
  function pos(x0, m, s, t) {
    const a = F0 / m;
    if (t < T_ON) return x0;
    if (t < T_OFF) return x0 + s * 0.5 * a * carre(t - T_ON);
    return x0 + s * (0.5 * a * DT * DT + a * DT * (t - T_OFF));
  }
  const vit = (m, s, t) => t < T_ON ? 0 : s * (F0 / m) * Math.min(t - T_ON, DT);
  const acc = (m, s, t) => (t >= T_ON && t < T_OFF) ? s * F0 / m : 0;

  let sortie;
  return {
    alt: 'Deux mobiles A et B de masses réglables, au contact sur la glace. Pendant la poussée, les forces qu\'ils exercent l\'un sur l\'autre sont opposées ; le plus léger acquiert la plus grande vitesse.',
    duree: 7,
    monde: { x0: -11, w: 22, h: 9 },
    construire: function (S) {
      S.aide('Sur la glace, les frottements sont négligeables · un point toutes les 0,5 s');
      S.curseur(S.groupe(), { cle: 'mA', label: 'Masse de A', nom: 'Masse de A en kilogrammes', min: 40, max: 120, pas: 5, val: 60, fmt: (x) => fmt(x, 0) + ' kg' });
      S.curseur(S.groupe(), { cle: 'mB', label: 'Masse de B', nom: 'Masse de B en kilogrammes', min: 40, max: 120, pas: 5, val: 90, fmt: (x) => fmt(x, 0) + ' kg' });
      sortie = S.sortie(S.groupe());
      L.FBA = S.etiquette('\\vec{F}_{\\mathrm{B/A}}', COUL.force, 34, 'F B/A');
      L.FAB = S.etiquette('\\vec{F}_{\\mathrm{A/B}}', COUL.force, 34, 'F A/B');
      L.aA = S.etiquette('\\vec{a}_{\\mathrm{A}}', COUL.acc, 32, 'aA');
      L.aB = S.etiquette('\\vec{a}_{\\mathrm{B}}', COUL.acc, 32, 'aB');
      L.vA = S.etiquette('\\vec{v}_{\\mathrm{A}}', COUL.vit, 32, 'vA');
      L.vB = S.etiquette('\\vec{v}_{\\mathrm{B}}', COUL.vit, 32, 'vB');
      L.loi = S.etiquette('{\\color{#FF968D}\\vec{F}_{\\mathrm{B/A}}=-\\vec{F}_{\\mathrm{A/B}}}', COUL.texte, 46, 'F B/A = − F A/B');
    },
    dessiner: function (S, t) {
      const mA = S.v.mA, mB = S.v.mB, rA = rayon(mA), rB = rayon(mB), X = S.X, Y = S.Y;
      const xA = (tau) => pos(-rA, mA, -1, tau), xB = (tau) => pos(rB, mB, +1, tau);
      // glace
      S.rect(X(-11), Y(SOL), S.L(22), S.L(SOL), 'rgba(86,193,255,0.10)', null, 0);
      S.ligne(X(-11), Y(SOL), X(11), Y(SOL), '#fff', 3, 0.6);
      S.ligne(X(0), Y(SOL), X(0), Y(SOL - 0.5), '#fff', 2, 0.4);
      // chronophotographie et mobiles
      for (let tau = 0; tau <= t + 1e-9; tau += PAS) {
        S.disque(X(xA(tau)), Y(SOL + rA), S.L(rA), COUL.A, null, 0.22);
        S.disque(X(xB(tau)), Y(SOL + rB), S.L(rB), COUL.B, null, 0.22);
      }
      const ax = X(xA(t)), bx = X(xB(t)), ay = Y(SOL + rA), by = Y(SOL + rB);
      S.disque(ax, ay, S.L(rA), COUL.A, '#fff');
      S.disque(bx, by, S.L(rB), COUL.B, '#fff');
      S.texte('A', ax, ay, 34, '#10212e', 'center');
      S.texte('B', bx, by, 34, '#241533', 'center');
      S.texte(fmt(mA, 0) + ' kg', ax, Y(SOL - 0.9), 22, COUL.A, 'center', false);
      S.texte(fmt(mB, 0) + ' kg', bx, Y(SOL - 0.9), 22, COUL.B, 'center', false);
      // vecteurs, tracés depuis le centre de chaque mobile
      const hF = Math.min(ay, by) - S.L(Math.max(rA, rB) + 0.75), hA = hF - S.L(1.1);
      if (t >= T_ON && t < T_OFF) {
        S.fleche(ax, hF, ax - S.L(0.025 * F0), hF, COUL.force, 6);        // F_B/A sur A : vers la gauche
        S.fleche(bx, hF, bx + S.L(0.025 * F0), hF, COUL.force, 6);        // F_A/B sur B : vers la droite
        S.place(L.FBA, ax - S.L(0.025 * F0) - 22 * S.k, hF, 'r');
        S.place(L.FAB, bx + S.L(0.025 * F0) + 22 * S.k, hF, 'l');
        const sA = S.L(1.2 * F0 / mA), sB = S.L(1.2 * F0 / mB);
        S.fleche(ax, hA, ax - sA, hA, COUL.acc, 6);
        S.fleche(bx, hA, bx + sB, hA, COUL.acc, 6);
        S.place(L.aA, ax - sA - 22 * S.k, hA, 'r');
        S.place(L.aB, bx + sB + 22 * S.k, hA, 'l');
      } else if (t >= T_OFF) {                                              // après la séparation : ΣF = 0, MRU
        const sA = S.L(2 * Math.abs(vit(mA, -1, t))), sB = S.L(2 * Math.abs(vit(mB, +1, t)));
        S.fleche(ax, hF, ax - sA, hF, COUL.vit, 6);
        S.fleche(bx, hF, bx + sB, hF, COUL.vit, 6);
        S.place(L.vA, ax - sA - 22 * S.k, hF, 'r');
        S.place(L.vB, bx + sB + 22 * S.k, hF, 'l');
      }
      S.place(L.loi, S.W / 2, S.zone.y / 2 + 6 * S.k);
      const J = F0 * DT;
      sortie.innerHTML = '|<i>v</i><sub>A</sub>| = ' + fmt(J / mA, 2) + ' m·s⁻¹  ·  |<i>v</i><sub>B</sub>| = ' + fmt(J / mB, 2) + ' m·s⁻¹';
    }
  };
}

/* ---------- Lancement ---------- */

const SCENES = { inertie: sceneInertie, train: sceneTrain, pfd: scenePFD, actionreaction: sceneActionReaction };

function lancer() {
  document.querySelectorAll('.anim-pe').forEach(function (h) {
    const f = SCENES[h.dataset.anim];
    if (f) creerScene(h, f);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
else lancer();
