/*
 * Compléments du thème « noir moderne ».
 *
 * Questions mises en valeur : les moments de participation reçoivent un
 * cadre arrondi souligné (classe .nm-q de noir-moderne.css) pour que les
 * élèves les repèrent d'un coup d'œil. Sont détectées automatiquement :
 *   - les phrases qui se terminent par « ? » ;
 *   - les phrases qui commencent par un verbe de consigne à l'infinitif
 *     (« Donner… », « Convertir… », « Placer… ») ;
 *   - les phrases qui commencent par un mot interrogatif et se terminent
 *     par « : » (« Quel est le réactif limitant si on mélange : »).
 * Un élément de classe « question » est mis en valeur en entier ; un
 * élément de classe « pas-question » est ignoré (ainsi que les notes de
 * l'orateur, les cartes de propositions et les « ? » entre parenthèses).
 *
 * Une phrase se termine par « . », « ! », « ? », « : », « ; » ou « … »
 * suivi d'une espace ou d'un changement de nœud (balise, <br>…). Un <br>
 * seul, sans ponctuation, ne coupe pas la phrase.
 *
 * Les cadres sont des éléments en position absolue placés derrière le
 * texte (un par ligne, formules MathJax comprises) : la mise en page
 * n'est pas modifiée, aucun mot ne bouge. Ils sont dessinés quand la
 * diapo est affichée et immobile (après la transition).
 */
(function () {
  var BLOCS = 'p, li, h1, h2, h3, h4, h5, h6, td, th, blockquote, div, section';
  var EXCLUS = 'script, style, aside.notes, button, textarea, input, select, ' +
               'mjx-container, svg, ol.vote, .pas-question, .nm-q';
  var FIN_DE_PHRASE = /[.!?:;…]/;
  var CONSIGNE = /^(Donner|Donnez|Convertir|Convertissez|Déterminer|Déterminez|Calculer|Calculez|Placer|Placez|Trouver|Trouvez|Citer|Citez|Comparer|Comparez|Choisir|Choisissez|Reprendre|Reprenez|Nommer|Nommez|Expliquer|Expliquez|Justifier|Justifiez|Estimer|Estimez|Prévoir|Prévoyez|Indiquer|Indiquez|Écrire|Écrivez|Équilibrer|Équilibrez|Notez|Essayez|Dessiner|Dessinez|Décrire|Décrivez|Représenter|Représentez|Compléter|Complétez|Identifier|Identifiez|Proposer|Proposez)(?![\wÀ-ÿ])/i;
  var INTERROGATIF = /^(Quel|Quelle|Quels|Quelles|Comment|Pourquoi|Combien|Où|Lequel|Laquelle|Lesquels|Lesquelles)(?![\wÀ-ÿ])/;

  // Débordement du cadre autour du texte, en em.
  var MARGE_X = 0.22, MARGE_Y = 0.04;

  var questions = [];          // { bloc, range, fragment, boites }

  /* ---------- Repérage des questions ------------------------------------ */

  function reperer() {
    var racine = document.querySelector('.reveal .slides');
    if (!racine) return;

    // Regroupe les nœuds texte par bloc (paragraphe, élément de liste…).
    var blocs = new Map();
    var parcours = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        return n.parentElement && !n.parentElement.closest(EXCLUS)
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = parcours.nextNode())) {
      var bloc = n.parentElement.closest(BLOCS);
      if (!bloc) continue;
      if (!blocs.has(bloc)) blocs.set(bloc, []);
      blocs.get(bloc).push(n);
    }

    blocs.forEach(function (noeuds, bloc) {
      // Texte du bloc + correspondance position -> (nœud, décalage).
      var texte = '', pos = [], finsDeNoeud = {};
      noeuds.forEach(function (t) {
        for (var i = 0; i < t.data.length; i++) pos.push([t, i]);
        texte += t.data;
        finsDeNoeud[texte.length - 1] = true;
      });
      if (!/\S/.test(texte)) return;

      // Bloc marqué à la main : tout est mis en valeur.
      if (bloc.closest('.question')) {
        var d0 = texte.search(/\S/), f0 = texte.length - 1;
        while (/\s/.test(texte[f0])) f0--;
        ajouter(bloc, pos, d0, f0);
        return;
      }

      // Découpage en phrases.
      var debut = 0, profondeur = 0;
      for (var i = 0; i < texte.length; i++) {
        var c = texte[i];
        if (c === '(') profondeur++;
        else if (c === ')') profondeur = Math.max(0, profondeur - 1);

        var finDeBloc = (i === texte.length - 1);
        var finDePhrase = FIN_DE_PHRASE.test(c) && (finsDeNoeud[i] || /\s/.test(texte[i + 1]));
        if (!finDePhrase && !finDeBloc) continue;
        if (c === '?' && profondeur > 0) continue;   // « (… ?) » : pas une question

        var d = debut, f = i;
        while (d <= f && /\s/.test(texte[d])) d++;
        while (f >= d && /\s/.test(texte[f])) f--;
        if (d <= f) {
          var phrase = texte.slice(d, f + 1);
          var fin = phrase[phrase.length - 1];
          var lettres = (phrase.match(/[A-Za-zÀ-ÿ]/g) || []).length;
          if (lettres >= 3 && ((fin === '?' && profondeur === 0) ||
                               CONSIGNE.test(phrase) ||
                               (fin === ':' && INTERROGATIF.test(phrase)))) {
            ajouter(bloc, pos, d, f);
          }
        }
        debut = i + 1;
        profondeur = 0;
      }
    });
  }

  function ajouter(bloc, pos, d, f) {
    var r = document.createRange();
    r.setStart(pos[d][0], pos[d][1]);
    r.setEnd(pos[f][0], pos[f][1] + 1);

    // Si la question est dans un fragment plus petit que le bloc (un <span>
    // qui apparaît au clic), son cadre doit apparaître avec lui.
    var fragment = pos[d][0].parentElement.closest('.fragment');
    if (fragment && (fragment === bloc || !bloc.contains(fragment))) fragment = null;

    questions.push({ bloc: bloc, range: r, fragment: fragment, boites: [] });
  }

  /* ---------- Dessin des cadres ----------------------------------------- */

  function dessiner(q) {
    q.boites.forEach(function (b) { b.remove(); });
    q.boites = [];

    var rects = Array.prototype.filter.call(q.range.getClientRects(), function (r) {
      return r.width > 0 && r.height > 0;
    });
    if (!rects.length) return;

    var bloc = q.bloc;
    if (getComputedStyle(bloc).position === 'static') bloc.style.position = 'relative';
    bloc.classList.add('nm-q-hote');

    // Coordonnées locales au bloc (indépendantes du zoom de reveal.js).
    var rb = bloc.getBoundingClientRect();
    var k = bloc.offsetWidth ? rb.width / bloc.offsetWidth : 1;
    var em = parseFloat(getComputedStyle(bloc).fontSize) || 16;

    // Un cadre par ligne : on fusionne les morceaux de texte et de formule
    // dont le centre vertical tombe dans la même bande.
    rects.sort(function (a, b) { return a.top - b.top; });
    var lignes = [];
    rects.forEach(function (r) {
      var cy = (r.top + r.bottom) / 2;
      var l = lignes.find(function (l) { return cy >= l.top && cy <= l.bottom; });
      if (l) {
        l.left = Math.min(l.left, r.left); l.right = Math.max(l.right, r.right);
        l.top = Math.min(l.top, r.top);    l.bottom = Math.max(l.bottom, r.bottom);
      } else {
        lignes.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
      }
    });

    lignes.forEach(function (l) {
      var b = document.createElement('span');
      b.className = 'nm-q';
      b.setAttribute('aria-hidden', 'true');
      var x = (l.left - rb.left) / k - bloc.clientLeft - MARGE_X * em;
      var y = (l.top - rb.top) / k - bloc.clientTop - MARGE_Y * em;
      b.style.left = x + 'px';
      b.style.top = y + 'px';
      b.style.width = ((l.right - l.left) / k + 2 * MARGE_X * em) + 'px';
      b.style.height = ((l.bottom - l.top) / k + 2 * MARGE_Y * em) + 'px';
      bloc.appendChild(b);
      q.boites.push(b);
    });
    synchroniser(q);
  }

  function synchroniser(q) {
    var cache = q.fragment && !q.fragment.classList.contains('visible');
    q.boites.forEach(function (b) { b.classList.toggle('nm-q-cache', !!cache); });
  }

  function dessinerDiapo(diapo) {
    if (!diapo) return;
    questions.forEach(function (q) {
      if (diapo.contains(q.bloc)) dessiner(q);
    });
  }

  // On attend la fin de la transition (3D) de la diapo avant de mesurer.
  var attente = null;
  function quandImmobile(diapo) {
    clearTimeout(attente);
    var fait = false;
    function go() {
      if (fait) return;
      fait = true;
      diapo.removeEventListener('transitionend', surFin);
      dessinerDiapo(diapo);
    }
    function surFin(e) {
      if (e.target === diapo && e.propertyName === 'transform') go();
    }
    diapo.addEventListener('transitionend', surFin);
    attente = setTimeout(go, 1000);   // filet de sécurité (transition « none »…)
  }

  /* ---------- Démarrage ------------------------------------------------- */

  function demarrer() {
    if (!window.Reveal) return;
    reperer();
    if (!questions.length) return;

    dessinerDiapo(Reveal.getCurrentSlide());
    Reveal.addEventListener('slidechanged', function (e) { quandImmobile(e.currentSlide); });
    Reveal.addEventListener('resize', function () { dessinerDiapo(Reveal.getCurrentSlide()); });
    ['fragmentshown', 'fragmenthidden'].forEach(function (ev) {
      Reveal.addEventListener(ev, function () { questions.forEach(synchroniser); });
    });
  }

  // MathJax remplace les formules après le chargement et la police doit
  // être chargée : on attend les deux avant de mesurer quoi que ce soit.
  var essais = 0;
  function quandPret() {
    var mj = window.MathJax;
    var polices = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    if (mj && mj.startup && mj.startup.promise) {
      Promise.all([mj.startup.promise.catch(function () {}), polices]).then(demarrer);
    } else if (essais++ < 50) {
      setTimeout(quandPret, 200);
    } else {
      polices.then(demarrer);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', quandPret);
  } else {
    quandPret();
  }
})();
