/*
 * Animations (canvas 1200 × 675) : textes du schéma lisibles sur petit écran.
 *
 * Le canvas est dessiné en 1200 × 675 puis réduit à la taille de l'écran :
 * sur un smartphone, il est affiché à 40-50 % et ses étiquettes (A, F', O,
 * légendes…) deviennent minuscules. Ce script, chargé avant le code de
 * l'animation, agrandit les polices du canvas quand il est affiché petit
 * (jusqu'à × 1,4). Sur grand écran, rien ne change.
 */
(function () {
  var proto = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
  var desc = proto && Object.getOwnPropertyDescriptor(proto, 'font');
  if (!desc || !desc.set || !desc.get) return;

  var ECHELLE_CIBLE = 0.62;   // les textes s'affichent au moins à 62 % de leur taille
  var FACTEUR_MAX = 1.4;

  function facteur(canvas) {
    var w = canvas && canvas.clientWidth;
    if (!w) return 1;
    var echelle = w / canvas.width;
    return Math.min(FACTEUR_MAX, Math.max(1, ECHELLE_CIBLE / echelle));
  }

  // Pour les animations qui doivent adapter leur mise en page (encadrés…).
  window.facteurTexte = facteur;

  Object.defineProperty(proto, 'font', {
    configurable: true,
    enumerable: desc.enumerable,
    get: function () { return desc.get.call(this); },
    set: function (valeur) {
      var k = facteur(this.canvas);
      if (k > 1) {
        valeur = String(valeur).replace(/(\d+(?:\.\d+)?)px/, function (m, n) {
          return (parseFloat(n) * k).toFixed(1) + 'px';
        });
      }
      desc.set.call(this, valeur);
    }
  });
})();
