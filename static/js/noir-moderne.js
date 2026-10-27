/*
 * Compléments du thème « noir moderne ».
 *
 * Questions mises en valeur : les moments de participation sont surlignés
 * (règle ::highlight(nm-question) de noir-moderne.css) pour que les élèves
 * les repèrent d'un coup d'œil. Sont détectées automatiquement :
 *   - les phrases qui se terminent par « ? » ;
 *   - les phrases qui commencent par un verbe de consigne à l'infinitif
 *     (« Donner… », « Convertir… », « Placer… ») ;
 *   - les phrases qui commencent par un mot interrogatif et se terminent
 *     par « : » (« Quel est le réactif limitant si on mélange : »).
 * Un élément de classe « question » est surligné en entier ; un élément de
 * classe « pas-question » est ignoré (ainsi que les notes de l'orateur, les
 * cartes de propositions et les « ? » entre parenthèses).
 *
 * On passe par l'API CSS Custom Highlight : le HTML n'est pas modifié et
 * la mise en page non plus (aucun mot ne bouge). Navigateurs trop anciens :
 * rien ne se passe.
 *
 * Une phrase se termine par « . », « ! », « ? », « : », « ; » ou « … »
 * suivi d'une espace ou d'un changement de nœud (balise, <br>…). Un <br>
 * seul, sans ponctuation, ne coupe pas la phrase.
 */
(function () {
  if (!window.CSS || !CSS.highlights || typeof Highlight === 'undefined') return;

  var BLOCS = 'p, li, h1, h2, h3, h4, h5, h6, td, th, blockquote, div, section';
  var EXCLUS = 'script, style, aside.notes, button, textarea, input, select, ' +
               'mjx-container, svg, ol.vote, .pas-question';
  var FIN_DE_PHRASE = /[.!?:;…]/;
  var CONSIGNE = /^(Donner|Donnez|Convertir|Convertissez|Déterminer|Déterminez|Calculer|Calculez|Placer|Placez|Trouver|Trouvez|Citer|Citez|Comparer|Comparez|Choisir|Choisissez|Reprendre|Reprenez|Nommer|Nommez|Expliquer|Expliquez|Justifier|Justifiez|Estimer|Estimez|Prévoir|Prévoyez|Indiquer|Indiquez|Écrire|Écrivez|Équilibrer|Équilibrez|Notez|Essayez|Dessiner|Dessinez|Décrire|Décrivez|Représenter|Représentez|Compléter|Complétez|Identifier|Identifiez|Proposer|Proposez)(?![\wÀ-ÿ])/i;
  var INTERROGATIF = /^(Quel|Quelle|Quels|Quelles|Comment|Pourquoi|Combien|Où|Lequel|Laquelle|Lesquels|Lesquelles)(?![\wÀ-ÿ])/;

  function marquerQuestions() {
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

    var surlignage = new Highlight();

    function surligner(pos, d, f) {
      var r = document.createRange();
      r.setStart(pos[d][0], pos[d][1]);
      r.setEnd(pos[f][0], pos[f][1] + 1);
      surlignage.add(r);
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

      // Bloc marqué à la main : tout est surligné.
      if (bloc.closest('.question')) {
        var d0 = texte.search(/\S/), f0 = texte.length - 1;
        while (/\s/.test(texte[f0])) f0--;
        surligner(pos, d0, f0);
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
            surligner(pos, d, f);
          }
        }
        debut = i + 1;
        profondeur = 0;
      }
    });

    CSS.highlights.set('nm-question', surlignage);
  }

  // MathJax remplace les formules après le chargement : on attend qu'il ait
  // fini pour que les plages de texte restent valides.
  var essais = 0;
  function quandMathJaxPret() {
    var mj = window.MathJax;
    if (mj && mj.startup && mj.startup.promise) {
      mj.startup.promise.then(marquerQuestions, marquerQuestions);
    } else if (essais++ < 50) {
      setTimeout(quandMathJaxPret, 200);
    } else {
      marquerQuestions();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', quandMathJaxPret);
  } else {
    quandMathJaxPret();
  }
})();
