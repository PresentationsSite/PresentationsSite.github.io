/*
 * Vecteur position en 3D, version interactive de /vecposition.png.
 *
 * - On tourne autour du repère en glissant, on zoome à la molette ou en pinçant
 *   (clic droit / deux doigts pour déplacer la vue).
 * - Le bouton « Lancer » déclenche une animation préprogrammée : le point M
 *   décrit une trajectoire et laisse une trace derrière lui. Le curseur permet
 *   de se placer à n'importe quelle date t.
 * - Le vecteur OM est toujours visible ; les projections x(t), y(t), z(t) (et le
 *   plan vertical contenant OM et k, comme sur le schéma) s'affichent à la demande.
 *
 * Utilisation dans une slide (voir content/tspe/mouvement/_index.md) :
 *   <link rel="stylesheet" href="/css/vecteur-position-3d.css">
 *   <div class="vecpos3d"></div>
 *   <script type="importmap"> … three … </script>
 *   <script type="module" src="/js/vecteur-position-3d.js"></script>
 *
 * Convention : les coordonnées physiques (x, y, z) du repère (O; i, j, k) sont
 * converties pour three.js (axe vertical = Y) par  P(x, y, z) → (y, z, x).
 * C'est une permutation circulaire : le repère reste direct, k pointe vers le
 * haut, j vers la droite et i vers l'observateur, comme sur le schéma.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

/* ---------- Réglages ---------- */

// Mêmes codes couleur que les schémas du cours (trajectoire rose, vecteur bleu…)
const COUL = {
  traj: 0xEB53A0,     // trajectoire
  point: 0xD23C8A,    // point M (un peu plus clair que #C13175 pour bien ressortir sur fond sombre)
  om: 0x74C0FF,       // vecteur OM
  base: 0x4DA3FF,     // vecteurs i, j, k
  origine: 0x3F8FE0,  // point O
  axes: 0xD3D3D3,     // axes du repère
  proj: 0x8FD18A,     // projections x(t), y(t), z(t) (vert des angles droits du schéma)
  guide: 0xC8C8C8,    // pointillés
  plan: 0xFFFFFF      // plan vertical (O, M, k)
};
const CSS = {
  traj: '#EB53A0', om: '#74C0FF', base: '#4DA3FF', origine: '#4D9DE8', proj: '#8FD18A'
};

const DUREE = 12;          // durée de l'animation (s)
const NB_ECH = 1200;       // échantillons de la trajectoire (une trace = un nombre de segments)
const AXE_POS = 6.6;       // longueur des axes côté positif
const AXE_NEG = 1.8;       // côté négatif
const MAXD = 64;           // nombre maximal de tirets par pointillé

/**
 * Mouvement préprogrammé M(t) = (x(t), y(t), z(t)), en unités du repère.
 * x oscille, y avance en ondulant, z fait deux bosses : les trois coordonnées
 * ont des allures bien distinctes, ce qui rend les projections parlantes.
 * (x reste ≥ 0,7 : M ne repasse jamais par O, donc OM n'est jamais nul.)
 */
function phys(t) {
  const u = t / DUREE, w = 2 * Math.PI * u;
  return [
    2.3 + 1.5 * Math.sin(w + 0.6),
    0.6 + 4.6 * u + 0.45 * Math.sin(2 * w),
    2.0 + 1.25 * Math.sin(1.5 * w + 0.4)
  ];
}

const V = (x, y, z) => new THREE.Vector3(y, z, x);   // repère physique → three.js
const fmt = (t) => t.toFixed(1).replace('.', ',') + ' s';

/* ---------- Primitives de dessin ---------- */

const materiauxLignes = [];                       // pour mettre à jour resolution / épaisseur
function matLigne(couleur, epaisseur, extra) {
  const m = new LineMaterial(Object.assign({ color: couleur, linewidth: epaisseur }, extra || {}));
  m.userData.base = epaisseur;
  materiauxLignes.push(m);
  return m;
}

const Y_AXE = new THREE.Vector3(0, 1, 0);

/** Cylindre orienté de a vers b (épaisseur en unités du repère : suit le zoom). */
class Cylindre {
  constructor(couleur, rayon) {
    this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(rayon, rayon, 1, 14, 1, false),
      new THREE.MeshBasicMaterial({ color: couleur }));
  }
  set(a, b) {
    const d = new THREE.Vector3().subVectors(b, a), L = d.length();
    this.mesh.visible = L > 1e-4;
    if (!this.mesh.visible) return;
    this.mesh.position.copy(a).addScaledVector(d, 0.5);
    this.mesh.scale.set(1, L, 1);
    this.mesh.quaternion.setFromUnitVectors(Y_AXE, d.multiplyScalar(1 / L));
  }
}

/** Flèche (fût + pointe) de a vers b. */
class Fleche {
  constructor(couleur, rayon, longPointe, rayonPointe) {
    this.longPointe = longPointe;
    this.fut = new Cylindre(couleur, rayon);
    this.pointe = new THREE.Mesh(new THREE.ConeGeometry(rayonPointe, 1, 20, 1),
      new THREE.MeshBasicMaterial({ color: couleur }));
    this.obj = new THREE.Group();
    this.obj.add(this.fut.mesh, this.pointe);
  }
  set(a, b) {
    const d = new THREE.Vector3().subVectors(b, a), L = d.length();
    this.obj.visible = L > 1e-4;
    if (!this.obj.visible) return;
    d.multiplyScalar(1 / L);
    const lp = Math.min(this.longPointe, L * 0.45);
    this.fut.set(a, new THREE.Vector3().copy(b).addScaledVector(d, -lp * 0.5));
    this.pointe.scale.set(1, lp, 1);
    this.pointe.position.copy(b).addScaledVector(d, -lp / 2);
    this.pointe.quaternion.setFromUnitVectors(Y_AXE, d);
  }
}

/** Pointillé de a vers b : suite de petits segments (mise à jour sur place, sans réallocation). */
class Pointille {
  constructor(couleur, epaisseur, tiret, trou) {
    this.tiret = tiret; this.trou = trou;
    const g = new LineSegmentsGeometry();
    g.setPositions(new Float32Array(MAXD * 6));
    this.buf = g.attributes.instanceStart.data;
    this.obj = new LineSegments2(g, matLigne(couleur, epaisseur, { transparent: true, opacity: 0.85 }));
    this.obj.frustumCulled = false;
  }
  set(a, b) {
    const d = new THREE.Vector3().subVectors(b, a), L = d.length();
    const arr = this.buf.array, pas = this.tiret + this.trou;
    let n = 0;
    if (L > 1e-4) {
      d.multiplyScalar(1 / L);
      for (let s = 0; s < L && n < MAXD; s += pas, n++) {
        const e = Math.min(s + this.tiret, L), i = n * 6;
        arr[i] = a.x + d.x * s; arr[i + 1] = a.y + d.y * s; arr[i + 2] = a.z + d.z * s;
        arr[i + 3] = a.x + d.x * e; arr[i + 4] = a.y + d.y * e; arr[i + 5] = a.z + d.z * e;
      }
    }
    this.obj.geometry.instanceCount = n;
    this.buf.needsUpdate = true;
  }
}

function sphere(couleur, rayon) {
  return new THREE.Mesh(new THREE.SphereGeometry(rayon, 24, 16), new THREE.MeshBasicMaterial({ color: couleur }));
}

/* ---------- Étiquettes MathJax (HTML posé sur la scène) ---------- */

function mathjaxPret() {
  return new Promise(function (ok) {
    (function attendre() {
      if (window.MathJax && MathJax.tex2svgPromise && MathJax.startup && MathJax.startup.promise) ok(MathJax.startup.promise);
      else setTimeout(attendre, 100);
    })();
  });
}

class Etiquette {
  /**
   * @param tex      formule LaTeX
   * @param couleur  couleur CSS
   * @param taille   corps du texte (px de slide)
   * @param repli    texte simple affiché tant que MathJax n'a pas répondu
   * @param ancre    () => Vector3 : point 3D auquel l'étiquette est accrochée
   * @param mode     'fixe'  : décalage (a, b) en pixels de slide ;
   *                 'bout'  : à la distance a au-delà de l'ancre, dans la direction O → ancre à l'écran ;
   *                 'perp'  : à la distance a de l'ancre, perpendiculairement à la direction O → ancre
   *                           (côté « haut » de l'écran ; côté « bas » si a < 0).
   *                 Ces placements suivent la rotation : l'étiquette ne recouvre pas le vecteur ou l'axe.
   */
  constructor(parent, tex, couleur, taille, repli, ancre, mode, a, b) {
    this.el = document.createElement('div');
    this.el.className = 'v3d-label';
    this.el.style.color = couleur;
    this.el.style.fontSize = taille + 'px';
    this.el.textContent = repli;
    parent.appendChild(this.el);
    this.tex = tex; this.taille = taille; this.ancre = ancre;
    this.mode = mode; this.a = a; this.b = b || 0;
    this.visible = true;
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

/* ---------- Interface ---------- */

const ICONES = {
  lecture: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4" width="4.5" height="16" rx="1.2"/><rect x="14" y="4" width="4.5" height="16" rx="1.2"/></svg>',
  debut: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="4.5" width="3.2" height="15" rx="1"/><path d="M19.5 5.6v12.8a1 1 0 0 1-1.55.84l-9.2-6.4a1 1 0 0 1 0-1.68l9.2-6.4a1 1 0 0 1 1.55.84z"/></svg>',
  rejouer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 7.75 10h-2.1A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35A7.96 7.96 0 0 0 12 4z"/></svg>'
};

const BASCULES = [
  { cle: 'x', html: '<span><i>x</i>(<i>t</i>)</span>', titre: 'Afficher / masquer la projection x(t)' },
  { cle: 'y', html: '<span><i>y</i>(<i>t</i>)</span>', titre: 'Afficher / masquer la projection y(t)' },
  { cle: 'z', html: '<span><i>z</i>(<i>t</i>)</span>', titre: 'Afficher / masquer la projection z(t)' },
  { cle: 'plan', html: 'plan', titre: 'Afficher / masquer le plan vertical contenant OM et k' }
];

function creer(tag, classe, parent, html) {
  const e = document.createElement(tag);
  if (classe) e.className = classe;
  if (html !== undefined) e.innerHTML = html;
  if (parent) parent.appendChild(e);
  return e;
}

/* ---------- Initialisation d'une slide ---------- */

function init(hote) {
  if (hote.dataset.pret) return;
  hote.dataset.pret = '1';
  const section = hote.closest('section');
  const scene = creer('div', 'v3d-scene', hote);
  scene.setAttribute('data-prevent-swipe', '');          // reveal.js : pas de changement de slide au toucher
  scene.setAttribute('role', 'img');
  scene.setAttribute('aria-label', 'Repère orthonormé en 3D : le point M(t) se déplace en laissant une trace, le vecteur OM relie l\'origine O à M.');

  // Export PDF (?print-pdf) ou WebGL indisponible : on retombe sur l'image fixe.
  function repli(message) {
    scene.replaceChildren();
    const r = creer('div', 'v3d-repli', scene);
    creer('img', '', r).src = '/vecposition.png';
    if (message) creer('div', '', r, message);
  }
  if (/print-pdf/.test(location.search)) { repli(); return; }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { repli('Votre navigateur ne gère pas WebGL : version statique du schéma.'); return; }
  renderer.setClearColor(0x000000, 0);
  scene.appendChild(renderer.domElement);

  const labels = creer('div', 'v3d-labels', scene);
  const aide = creer('div', 'v3d-aide', scene, 'Glisser : tourner · molette ou pincer : zoomer');

  /* --- scène --- */
  const monde = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 200);

  // Axes
  const gAxes = new LineSegmentsGeometry();
  gAxes.setPositions([
    ...V(-AXE_NEG, 0, 0).toArray(), ...V(AXE_POS, 0, 0).toArray(),
    ...V(0, -AXE_NEG, 0).toArray(), ...V(0, AXE_POS, 0).toArray(),
    ...V(0, 0, -AXE_NEG).toArray(), ...V(0, 0, AXE_POS).toArray()
  ]);
  const axes = new LineSegments2(gAxes, matLigne(COUL.axes, 2.5, { transparent: true, opacity: 0.55 }));
  axes.frustumCulled = false;
  monde.add(axes);

  // Quadrillage très discret dans le plan (x, y), pour mieux lire les profondeurs
  const ptsGrille = [];
  for (let k = -1; k <= 6; k++) {
    ptsGrille.push(...V(k, -1, 0).toArray(), ...V(k, 6, 0).toArray());
    ptsGrille.push(...V(-1, k, 0).toArray(), ...V(6, k, 0).toArray());
  }
  const gGrille = new THREE.BufferGeometry();
  gGrille.setAttribute('position', new THREE.Float32BufferAttribute(ptsGrille, 3));
  monde.add(new THREE.LineSegments(gGrille, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07 })));

  // Repère (O; i, j, k)
  const O = V(0, 0, 0);
  const unites = [V(1, 0, 0), V(0, 1, 0), V(0, 0, 1)].map(function (u) {
    const f = new Fleche(COUL.base, 0.05, 0.28, 0.115);
    f.set(O, u);
    monde.add(f.obj);
    return u;
  });
  const pO = sphere(COUL.origine, 0.075);
  monde.add(pO);

  // Trace : trajectoire complète précalculée, dévoilée progressivement (instanceCount)
  const echantillons = new Float32Array((NB_ECH + 1) * 3);
  for (let i = 0; i <= NB_ECH; i++) {
    const p = phys(DUREE * i / NB_ECH);
    echantillons[3 * i] = p[1]; echantillons[3 * i + 1] = p[2]; echantillons[3 * i + 2] = p[0];
  }
  const gTrace = new LineGeometry();
  gTrace.setPositions(echantillons);
  const trace = new Line2(gTrace, matLigne(COUL.traj, 4.5));
  trace.frustumCulled = false;
  monde.add(trace);

  // Vecteur OM et point M (toujours visibles)
  const om = new Fleche(COUL.om, 0.06, 0.38, 0.15);
  monde.add(om.obj);
  const pM = sphere(COUL.point, 0.115);
  monde.add(pM);

  // Plan vertical (O, M_xy, M, Z) comme sur le schéma
  const gPlan = new THREE.BufferGeometry();
  const posPlan = new Float32Array(12);
  gPlan.setAttribute('position', new THREE.BufferAttribute(posPlan, 3));
  gPlan.setIndex([0, 1, 2, 0, 2, 3]);
  const plan = new THREE.Mesh(gPlan, new THREE.MeshBasicMaterial({
    color: COUL.plan, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false }));
  plan.frustumCulled = false;
  monde.add(plan);

  // Pointillés de construction et projections sur les axes
  const T_PT = 0.13, T_TR = 0.1;
  const dVert = new Pointille(COUL.guide, 2, T_PT, T_TR);   // M → M_xy
  const dDiag = new Pointille(COUL.guide, 2, T_PT, T_TR);   // O → M_xy
  const dZ = new Pointille(COUL.guide, 2, T_PT, T_TR);      // M → pied sur (Oz)
  const dX = new Pointille(COUL.guide, 2, T_PT, T_TR);      // M_xy → pied sur (Ox)
  const dY = new Pointille(COUL.guide, 2, T_PT, T_TR);      // M_xy → pied sur (Oy)
  [dVert, dDiag, dZ, dX, dY].forEach(function (d) { monde.add(d.obj); });

  const proj = ['x', 'y', 'z'].map(function () {
    const seg = new Cylindre(COUL.proj, 0.03), pt = sphere(COUL.proj, 0.08);
    monde.add(seg.mesh, pt);
    return { seg: seg, pt: pt };
  });

  // Positions courantes (mises à jour à chaque date)
  const P = { M: V(0, 0, 0), Mxy: V(0, 0, 0), Fx: V(0, 0, 0), Fy: V(0, 0, 0), Fz: V(0, 0, 0) };

  /* --- étiquettes --- */
  const T_ET = 34;
  const etiquettes = [];
  function ajouter(tex, couleur, repli, ancre, mode, a, b) {
    const e = new Etiquette(labels, tex, couleur, T_ET, repli, ancre, mode, a, b);
    etiquettes.push(e);
    return e;
  }
  ajouter('\\mathrm{O}', CSS.origine, 'O', () => O, 'fixe', -26, -16);
  // i, j, k : à côté de la pointe du vecteur, jamais dessus ; i du côté opposé (distance négative), comme sur le schéma
  ajouter('\\vec{i}', CSS.base, 'i', () => unites[0], 'perp', -30);
  ajouter('\\vec{j}', CSS.base, 'j', () => unites[1], 'perp', 30);
  ajouter('\\vec{k}', CSS.base, 'k', () => unites[2], 'perp', 30);
  ajouter('\\mathrm{M}(t)', CSS.traj, 'M(t)', () => P.M, 'bout', 48);
  ajouter('\\overrightarrow{\\mathrm{OM}}', CSS.om, 'OM', () => P.M.clone().multiplyScalar(0.5), 'perp', 38);
  const etProj = {
    x: ajouter('x(t)', CSS.proj, 'x(t)', () => P.Fx, 'bout', 42),
    y: ajouter('y(t)', CSS.proj, 'y(t)', () => P.Fy, 'bout', 42),
    z: ajouter('z(t)', CSS.proj, 'z(t)', () => P.Fz, 'bout', 44)
  };

  /* --- commandes --- */
  const barre = creer('div', 'v3d-barre', scene);
  const gLecture = creer('div', 'v3d-groupe', barre);
  const bLancer = creer('button', 'v3d-lancer', gLecture);
  bLancer.type = 'button';
  const bReinit = creer('button', '', gLecture, ICONES.debut);
  bReinit.type = 'button';
  bReinit.title = 'Revenir à t = 0 et effacer la trace';
  bReinit.setAttribute('aria-label', 'Revenir à t = 0');

  const gTemps = creer('div', 'v3d-temps', barre);
  const curseur = creer('input', '', gTemps);
  curseur.type = 'range'; curseur.min = 0; curseur.max = 1000; curseur.step = 1; curseur.value = 0;
  curseur.setAttribute('aria-label', 'Date t');
  const lecture = creer('span', 'v3d-valeur', gTemps);

  const gProj = creer('div', 'v3d-groupe', barre);
  creer('span', 'v3d-titre', gProj, 'Projections');
  const etat = { x: true, y: true, z: true, plan: true };
  const bascules = {};
  BASCULES.forEach(function (b) {
    const bt = creer('button', 'v3d-bascule', gProj, b.html);
    bt.type = 'button'; bt.title = b.titre;
    bt.setAttribute('aria-pressed', 'true');
    bt.addEventListener('click', function () {
      etat[b.cle] = !etat[b.cle];
      bt.setAttribute('aria-pressed', String(etat[b.cle]));
      dirty = true;
    });
    bascules[b.cle] = bt;
  });
  const bVue = creer('button', 'v3d-vue', scene, 'Vue initiale');
  bVue.type = 'button';

  /* --- caméra et contrôles --- */
  const controles = new OrbitControls(camera, renderer.domElement);
  controles.enableDamping = true;
  controles.dampingFactor = 0.09;
  controles.minDistance = 3;
  controles.maxDistance = 45;
  controles.screenSpacePanning = true;
  // Centre de la scène : milieu de la boîte englobant O et la trajectoire
  const boite = new THREE.Box3().setFromPoints([O, V(0, 0, AXE_POS * 0.75), ...Array.from({ length: 41 }, function (_, i) {
    const p = phys(DUREE * i / 40); return V(p[0], p[1], p[2]);
  })]);
  const centre = boite.getCenter(new THREE.Vector3());
  // Direction de vue du schéma : i vers l'observateur, penché vers la droite et le haut
  const DIR_VUE = new THREE.Vector3(0.36, 0.40, 0.84).normalize();
  const DIST_VUE = 11.5;
  function vueInitiale() {
    controles.target.copy(centre);
    camera.position.copy(centre).addScaledVector(DIR_VUE, DIST_VUE);
    camera.up.set(0, 1, 0);
    controles.update();
  }
  vueInitiale();
  bVue.addEventListener('click', vueInitiale);

  scene.addEventListener('pointerdown', function () { scene.classList.add('v3d-drag'); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (n) {
    scene.addEventListener(n, function () { scene.classList.remove('v3d-drag'); });
  });
  controles.addEventListener('start', function () { aide.style.opacity = '0.25'; });

  /* --- animation --- */
  let t = 0, enCours = false, dirty = true, derniere = 0;

  function majBoutons() {
    const fini = t >= DUREE, debut = t <= 0;
    if (enCours) bLancer.innerHTML = ICONES.pause + 'Pause';
    else if (fini) bLancer.innerHTML = ICONES.rejouer + 'Rejouer';
    else if (debut) bLancer.innerHTML = ICONES.lecture + 'Lancer';
    else bLancer.innerHTML = ICONES.lecture + 'Reprendre';
    curseur.value = Math.round(t / DUREE * 1000);
    lecture.textContent = 't = ' + fmt(t);
  }
  function lancer() {
    if (enCours) { enCours = false; }
    else { if (t >= DUREE) t = 0; enCours = true; }
    majBoutons();
  }
  function reinit() { enCours = false; t = 0; dirty = true; majBoutons(); }
  bLancer.addEventListener('click', lancer);
  bReinit.addEventListener('click', reinit);
  curseur.addEventListener('input', function () {
    enCours = false;
    t = curseur.value / 1000 * DUREE;
    dirty = true;
    majBoutons();
  });
  // Après un clic ou un glissement, on rend le clavier à reveal.js (flèches, espace…)
  [bLancer, bReinit, bVue, curseur].concat(Object.values(bascules)).forEach(function (b) {
    b.addEventListener('pointerup', function () { setTimeout(function () { b.blur(); }, 0); });
  });
  majBoutons();

  /** Place tous les objets 3D pour la date courante. */
  function majScene() {
    const p = phys(t), x = p[0], y = p[1], z = p[2];
    P.M.copy(V(x, y, z)); P.Mxy.copy(V(x, y, 0));
    P.Fx.copy(V(x, 0, 0)); P.Fy.copy(V(0, y, 0)); P.Fz.copy(V(0, 0, z));

    om.set(O, P.M);
    pM.position.copy(P.M);
    gTrace.instanceCount = Math.floor(t / DUREE * NB_ECH);

    const montrerX = etat.x, montrerY = etat.y, montrerZ = etat.z, montrerPlan = etat.plan;
    plan.visible = montrerPlan;
    if (montrerPlan) {
      const Fz = P.Fz, Mxy = P.Mxy, M = P.M;
      posPlan.set([O.x, O.y, O.z, Mxy.x, Mxy.y, Mxy.z, M.x, M.y, M.z, Fz.x, Fz.y, Fz.z]);
      gPlan.attributes.position.needsUpdate = true;
    }
    dVert.obj.visible = montrerPlan || montrerX || montrerY;
    dDiag.obj.visible = montrerPlan;
    dZ.obj.visible = montrerPlan || montrerZ;
    dX.obj.visible = montrerX;
    dY.obj.visible = montrerY;
    dVert.set(P.M, P.Mxy);
    dDiag.set(O, P.Mxy);
    dZ.set(P.M, P.Fz);
    dX.set(P.Mxy, P.Fx);
    dY.set(P.Mxy, P.Fy);

    [['x', P.Fx], ['y', P.Fy], ['z', P.Fz]].forEach(function (c, i) {
      const on = etat[c[0]];
      proj[i].seg.mesh.visible = on;
      proj[i].pt.visible = on;
      etProj[c[0]].visible = on;
      if (on) { proj[i].seg.set(O, c[1]); proj[i].pt.position.copy(c[1]); }
    });
  }

  /* --- taille, mise à l'échelle reveal.js --- */
  let echelle = 1, largeur = 0, hauteur = 0;
  function mettreALaTaille() {
    const reveal = hote.closest('.reveal'), slides = reveal && reveal.querySelector('.slides');
    if (!slides || !section || !section.offsetParent) return;   // slide masquée : on attend
    echelle = (window.Reveal && Reveal.getScale && Reveal.getScale()) || 1;
    const R = reveal.getBoundingClientRect();
    const W = Math.round(R.width / echelle), H = Math.round(R.height / echelle);
    if (W < 10 || H < 10) return;
    // Décalage (hors transformations) de l'hôte dans .slides, pour centrer la scène sur la fenêtre
    let ox = 0, oy = 0;
    for (let n = hote; n && n !== slides; n = n.offsetParent) { ox += n.offsetLeft; oy += n.offsetTop; }
    scene.style.width = W + 'px';
    scene.style.height = H + 'px';
    scene.style.left = Math.round(slides.offsetWidth / 2 - W / 2 - ox) + 'px';
    scene.style.top = Math.round(slides.offsetHeight / 2 - H / 2 - oy) + 'px';
    // Compensation de la réduction sur petit écran : commandes, étiquettes, traits
    const k = Math.min(3, Math.max(1, 0.8 / echelle));
    scene.style.setProperty('--k', k);
    // Écran étroit (téléphone en portrait) : la barre passe au-dessus des flèches de navigation de reveal.js
    const etroit = R.width < 700;
    scene.style.setProperty('--bas', (etroit ? 118 / echelle : 22) + 'px');
    scene.style.setProperty('--marge', etroit ? '24px' : '250px');
    largeur = W; hauteur = H;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio * echelle, 3));
    renderer.setSize(W, H);
    camera.aspect = W / H;
    // Sur une scène en portrait, on recule pour garder la trajectoire entière dans le cadre
    camera.fov = W / H < 1 ? 2 * Math.atan(Math.tan(32 * Math.PI / 360) / (W / H) * 0.85) * 180 / Math.PI : 32;
    // Image remontée de 7 % : la barre de commandes ne cache pas le bas de la scène
    camera.setViewOffset(W, H, 0, Math.round(H * 0.07), W, H);
    camera.updateProjectionMatrix();
    materiauxLignes.forEach(function (m) { m.resolution.set(W, H); m.linewidth = m.userData.base * k; });
    controles.rotateSpeed = 1 / echelle;
    controles.panSpeed = 1 / echelle;
    dirty = true;
  }

  /* --- boucle de rendu (active seulement quand la slide est affichée) --- */
  const v = new THREE.Vector3(), vo = new THREE.Vector3();
  function placerEtiquettes() {
    const k = parseFloat(scene.style.getPropertyValue('--k')) || 1;
    vo.copy(O).project(camera);
    const ox = (vo.x + 1) / 2 * largeur, oy = (1 - vo.y) / 2 * hauteur;   // O à l'écran
    etiquettes.forEach(function (e) {
      if (!e.visible) { e.el.style.display = 'none'; return; }
      v.copy(e.ancre()).project(camera);
      if (v.z > 1 || v.z < -1) { e.el.style.display = 'none'; return; }
      e.el.style.display = '';
      const ax = (v.x + 1) / 2 * largeur, ay = (1 - v.y) / 2 * hauteur;
      let px = ax, py = ay;
      if (e.mode === 'fixe') { px += e.a * k; py += e.b * k; }
      else {
        // direction O → ancre à l'écran (vers le haut si l'ancre est en O)
        let dx = ax - ox, dy = ay - oy;
        const n = Math.hypot(dx, dy);
        if (n < 1e-3) { dx = 0; dy = -1; } else { dx /= n; dy /= n; }
        if (e.mode === 'bout') { px += dx * e.a * k; py += dy * e.a * k; }
        else {   // 'perp' : normale à (dx, dy), orientée vers le haut de l'écran (vers le bas si a < 0)
          let nx = dy, ny = -dx;
          if (ny > 0) { nx = -nx; ny = -ny; }
          px += nx * e.a * k; py += ny * e.a * k;
        }
      }
      // translate(-50 %, -50 %) : le centre de l'étiquette est posé sur le point calculé
      e.el.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px) scale(' + k + ') translate(-50%,-50%)';
    });
  }

  function image(maintenant) {
    const dt = Math.min(0.05, (maintenant - derniere) / 1000);
    derniere = maintenant;
    if (enCours) {
      t = Math.min(DUREE, t + dt);
      if (t >= DUREE) enCours = false;
      dirty = true;
      majBoutons();
    }
    if (dirty) { majScene(); dirty = false; }
    controles.update();
    placerEtiquettes();
    renderer.render(monde, camera);
  }

  let actif = false;
  function majVisibilite() {
    const voulu = !!(window.Reveal && Reveal.getCurrentSlide && Reveal.getCurrentSlide() === section);
    if (voulu && !actif) {
      actif = true;
      mettreALaTaille();
      derniere = performance.now();
      renderer.setAnimationLoop(image);
    } else if (!voulu && actif) {
      actif = false;
      renderer.setAnimationLoop(null);
      if (enCours) { enCours = false; majBoutons(); }      // l'animation se met en pause en quittant la slide
    }
  }

  renderer.domElement.addEventListener('webglcontextlost', function (e) {
    e.preventDefault();
    repli('Le contexte WebGL a été perdu : rechargez la page.');
  });

  function brancher() {
    Reveal.on('slidechanged', majVisibilite);
    Reveal.on('resize', function () { if (actif) mettreALaTaille(); });
    majVisibilite();
  }
  if (window.Reveal && Reveal.isReady && Reveal.isReady()) brancher();
  else if (window.Reveal) Reveal.on('ready', brancher);

  // Étiquettes : dès que MathJax est prêt (le texte simple s'affiche en attendant)
  mathjaxPret().then(function () { return Promise.all(etiquettes.map(function (e) { return e.rendre(); })); });
}

function lancer() { document.querySelectorAll('.vecpos3d').forEach(init); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', lancer);
else lancer();
