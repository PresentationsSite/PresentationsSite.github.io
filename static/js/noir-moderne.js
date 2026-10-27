/*
 * Compléments du thème « noir moderne ».
 *
 * Indices cachés : les éléments .indice d'une diapo apparaissent un par un
 * avec la touche « i » ou un clic sur .indice-bouton ; « Maj + i » les
 * recache tous. Ils ne font pas partie des fragments : la navigation
 * habituelle (espace, flèches) les ignore. La diapo est recentrée à
 * chaque fois, puisque les indices ne prennent de place qu'une fois montrés.
 *
 * À inclure dans le cours : <script src="/js/noir-moderne.js" defer></script>
 */
(function () {
  function diapoCourante() {
    return window.Reveal ? Reveal.getCurrentSlide() : null;
  }

  function majBouton(diapo) {
    var reste = diapo.querySelector('.indice:not(.montre)');
    diapo.querySelectorAll('.indice-bouton').forEach(function (b) {
      b.classList.toggle('epuise', !reste);
    });
    if (window.Reveal) Reveal.layout();
  }

  function indiceSuivant(diapo) {
    if (!diapo) return;
    var indice = diapo.querySelector('.indice:not(.montre)');
    if (indice) indice.classList.add('montre');
    majBouton(diapo);
  }

  function cacherIndices(diapo) {
    if (!diapo) return;
    diapo.querySelectorAll('.indice.montre').forEach(function (e) {
      e.classList.remove('montre');
    });
    majBouton(diapo);
  }

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (e.key === 'i') indiceSuivant(diapoCourante());
    else if (e.key === 'I') cacherIndices(diapoCourante());
  });

  document.addEventListener('click', function (e) {
    var bouton = e.target.closest && e.target.closest('.indice-bouton');
    if (!bouton) return;
    e.preventDefault();
    indiceSuivant(bouton.closest('section'));
  });
})();
