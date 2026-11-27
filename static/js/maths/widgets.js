/*
 * Présentation « Maths » (2nde) : widgets interactifs (préfixes, conversions, règles des puissances de 10,
 * notation scientifique, ordres de grandeur, chiffres significatifs).
 * Chaque widget se place avec :  <div class="sw" data-w="nom"></div>  (voir js/son/core.js).
 * Tout est du HTML simple (exposants en <sup>), sans bibliothèque.
 */
(function () {
  'use strict';
  var SonW = window.SonW, fmt = SonW.fmt;
  var MOINS = '−', FIN = ' ';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function sup(n) { return '<sup>' + (n < 0 ? MOINS + (-n) : n) + '</sup>'; }
  function p10(n) { return '10' + sup(n); }
  function groupe(s) { return s.replace(/\B(?=(\d{3})+(?!\d))/g, FIN); }
  // 10^e en écriture décimale : 1 000 000 ou 0,000 001
  function dec(e) {
    if (e >= 0) return groupe('1' + new Array(e + 1).join('0'));
    return '0,' + (new Array(-e).join('0') + '1').replace(/(\d{3})(?=\d)/g, '$1' + FIN);
  }
  function lire(txt) { var v = parseFloat(String(txt).replace(',', '.').replace(/[\s ]/g, '')); return v; }
  function virg(x) { return String(x).replace('.', ','); }
  function btn(txt, cls, attrs) { return '<button type="button" class="w-btn ' + (cls || '') + '" ' + (attrs || '') + '>' + txt + '</button>'; }

  /* ================================================================= */
  /* Explorateur de préfixes                                            */
  /* ================================================================= */
  var PF = [
    [15, 'P', 'péta', 'million de milliards', 'PV', 'V'], [12, 'T', 'téra', 'mille milliards', 'Ts', 's'],
    [9, 'G', 'giga', 'milliard', 'GW', 'W'], [6, 'M', 'méga', 'million', 'MJ', 'J'], [3, 'k', 'kilo', 'mille', 'kg', 'g'],
    [2, 'h', 'hecto', 'cent', 'hL', 'L', 1], [1, 'da', 'déca', 'dix', 'dam', 'm', 1],
    [0, '', '(aucun)', 'un', '', ''],
    [-1, 'd', 'déci', 'dixième', 'dL', 'L', 1], [-2, 'c', 'centi', 'centième', 'cm', 'm', 1],
    [-3, 'm', 'milli', 'millième', 'ms', 's'], [-6, 'µ', 'micro', 'millionième', 'µW', 'W'], [-9, 'n', 'nano', 'milliardième', 'ng', 'g'],
    [-12, 'p', 'pico', 'millième de milliardième', 'pJ', 'J'], [-15, 'f', 'femto', 'millionième de milliardième', 'fm', 'm']
  ];
  SonW.def('echelle', {
    build: function (el, I) {
      var s = I.s; s.i = 4; s.tour = null;
      el.innerHTML = '<div class="pf"><div class="pf-row"></div><div class="pf-axis"><i></i></div>' +
        '<div class="pf-axl"><span>unités plus grandes ↑</span><span>unité de base</span><span>↓ unités plus petites</span></div>' +
        '<div class="pf-detail"></div><div class="w-row">' + btn('▶ Visite guidée', 'go', 'data-t="1"') + '</div></div>';
      var row = $('.pf-row', el);
      PF.forEach(function (p, i) {
        var b = document.createElement('button'); b.type = 'button';
        b.className = 'pf-chip ' + (p[0] > 0 ? 'up' : p[0] < 0 ? 'down' : '') + (p[6] ? ' minor' : '');
        b.innerHTML = (p[1] || '1') + '<small>' + p10(p[0]) + '</small>'; b.setAttribute('data-i', i);
        row.appendChild(b);
      });
      function select(i) {
        s.i = i; var p = PF[i], c = p[0] > 0 ? '#ffc43a' : p[0] < 0 ? '#37d6ff' : '#8a90ad';
        $$('.pf-chip', el).forEach(function (b, k) { b.classList.toggle('sel', k === i); });
        $('.pf-axis i', el).style.left = ((i + 0.5) / PF.length * 100) + '%';
        var d = $('.pf-detail', el); d.style.setProperty('--c', c);
        if (p[0] === 0) d.innerHTML = '<div class="pf-big">1</div><div class="pf-txt"><b>Pas de préfixe</b> : le facteur est <span class="pf-fact">' + p10(0) + ' = 1</span><br>L’unité est utilisée telle quelle : m, g, L, s…</div>';
        else d.innerHTML = '<div class="pf-big">' + p[1] + '</div><div class="pf-txt"><b>' + p[2] + '</b> (' + p[1] + ') · facteur <span class="pf-fact">' + p10(p[0]) + '</span> = ' + dec(p[0]) +
          '<br>se lit «&nbsp;' + p[3] + '&nbsp;» · exemple : 1&nbsp;' + p[4] + ' = ' + p10(p[0]) + '&nbsp;' + p[5] + '</div>';
      }
      function arreter() { if (s.tour) { clearInterval(s.tour); s.tour = null; $('[data-t]', el).textContent = '▶ Visite guidée'; } }
      s.arreter = arreter;
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-i') != null) { arreter(); select(+b.getAttribute('data-i')); }
        else if (b.getAttribute('data-t')) {
          if (s.tour) { arreter(); return; }
          b.textContent = '⏸ Arrêter'; var ordre = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], k = 0;
          s.tour = setInterval(function () { select(ordre[k % ordre.length]); k++; }, 1500);
          select(ordre[0]); k = 1;
        }
      });
      select(4);
    },
    leave: function (el, I) { I.s.arreter(); }
  });

  /* ================================================================= */
  /* Règles de calcul avec les puissances de 10                          */
  /* ================================================================= */
  SonW.def('regles', {
    build: function (el, I) {
      el.innerHTML = '<div class="rg"><div class="rg-sl"><label>a <input class="w-range rg-a" type="range" min="-9" max="9" value="3"><span class="v va"></span></label>' +
        '<label>b <input class="w-range pink rg-b" type="range" min="-9" max="9" value="-5"><span class="v vb"></span></label></div>' +
        '<div class="rg-card b c1"></div><div class="rg-card r c2"></div><div class="rg-card g c3"></div>' +
        '<div class="w-note">Faites glisser a et b : les trois règles restent vraies pour tous les entiers relatifs.</div></div>';
      var ra = $('.rg-a', el), rb = $('.rg-b', el);
      function op(c) { return '<span class="op">' + c + '</span>'; }
      function ligne(sel, eq, d) { $(sel, el).innerHTML = '<span class="eq">' + eq + '</span>' + (d ? '<span class="dec">' + d + '</span>' : ''); }
      function render() {
        var a = +ra.value, b = +rb.value;
        $('.va', el).textContent = a < 0 ? MOINS + (-a) : a; $('.vb', el).textContent = b < 0 ? MOINS + (-b) : b;
        var ok = function () { for (var i = 0; i < arguments.length; i++) if (Math.abs(arguments[i]) > 9) return false; return true; };
        var sg = function (x) { return x < 0 ? MOINS + (-x) : String(x); }, par = function (x) { return x < 0 ? '(' + MOINS + (-x) + ')' : String(x); };
        ligne('.c1', p10(a) + ' × ' + p10(b) + ' = 10<sup>' + sg(a) + op(' + ') + par(b) + '</sup> = ' + p10(a + b),
          ok(a, b, a + b) ? dec(a) + ' × ' + dec(b) + ' = ' + dec(a + b) : '');
        ligne('.c2', p10(a) + ' / ' + p10(b) + ' = 10<sup>' + sg(a) + op(' − ') + par(b) + '</sup> = ' + p10(a - b),
          ok(a, b, a - b) ? dec(a) + ' ÷ ' + dec(b) + ' = ' + dec(a - b) : '');
        ligne('.c3', '(' + p10(a) + ')' + sup(b) + ' = 10<sup>' + sg(a) + op(' × ') + par(b) + '</sup> = ' + p10(a * b),
          ok(a, a * b) ? '(' + dec(a) + ')' + sup(b) + ' = ' + dec(a * b) : '');
      }
      ra.addEventListener('input', render); rb.addEventListener('input', render); render();
    }
  });

  /* ================================================================= */
  /* Décodeur d’unités composées (m·s⁻¹ = m/s = « mètre par seconde »)   */
  /* ================================================================= */
  function uex(list) { // écriture avec exposants : m·s⁻¹
    return list.map(function (t) {
      var e = t[1];
      return t[0] + (e === 1 ? '' : '<span class="' + (e < 0 ? 'e-neg' : 'e-pos') + '">' + sup(e) + '</span>');
    }).join('<span class="dot">·</span>');
  }
  function ubarre(list) { // écriture avec une barre : m/s, J/(kg·K)
    var n = [], d = [];
    list.forEach(function (t) { (t[1] > 0 ? n : d).push([t[0], Math.abs(t[1])]); });
    function w(a) { return a.map(function (t) { return t[0] + (t[1] > 1 ? sup(t[1]) : ''); }).join('·'); }
    return (n.length ? w(n) : '1') + '/' + (d.length > 1 ? '(' + w(d) + ')' : w(d));
  }
  // [grandeur, [[symbole, exposant], …], « se lit », ce que ça veut dire]
  var UD = [
    ['Vitesse', [['m', 1], ['s', -1]], 'mètre par seconde', 'Avec <b>2,3 m·s<sup>−1</sup></b>, l’objet avance de 2,3 m <u>chaque seconde</u>.'],
    ['Accélération', [['m', 1], ['s', -2]], 'mètre par seconde carrée', 'Avec <b>9,8 m·s<sup>−2</sup></b>, la vitesse augmente de 9,8 m·s<sup>−1</sup> <u>chaque seconde</u>.'],
    ['Masse volumique', [['kg', 1], ['m', -3]], 'kilogramme par mètre cube', 'Avec <b>2 700 kg·m<sup>−3</sup></b>, <u>1 m<sup>3</sup></u> d’aluminium a une masse de 2 700 kg.'],
    ['Masse volumique', [['g', 1], ['cm', -3]], 'gramme par centimètre cube', 'Avec <b>1,0 g·cm<sup>−3</sup></b>, <u>1 cm<sup>3</sup></u> d’eau a une masse de 1,0 g.'],
    ['Concentration molaire', [['mol', 1], ['L', -1]], 'mole par litre', 'Avec <b>0,10 mol·L<sup>−1</sup></b>, il y a 0,10 mol de soluté dans <u>chaque litre</u> de solution.'],
    ['Concentration massique', [['g', 1], ['L', -1]], 'gramme par litre', 'Avec <b>9,0 g·L<sup>−1</sup></b>, il y a 9,0 g de sel dissous dans <u>chaque litre</u> de solution.'],
    ['Masse molaire', [['g', 1], ['mol', -1]], 'gramme par mole', 'Avec <b>55,8 g·mol<sup>−1</sup></b>, <u>une mole</u> de fer a une masse de 55,8 g.'],
    ['Intensité de la pesanteur', [['N', 1], ['kg', -1]], 'newton par kilogramme', 'Avec <b>9,8 N·kg<sup>−1</sup></b>, <u>chaque kilogramme</u> est attiré par une force de 9,8 N.'],
    ['Raideur d’un ressort', [['N', 1], ['m', -1]], 'newton par mètre', 'Avec <b>50 N·m<sup>−1</sup></b>, il faut 50 N pour allonger le ressort de <u>1 m</u>.'],
    ['Éclairement', [['W', 1], ['m', -2]], 'watt par mètre carré', 'Avec <b>1 361 W·m<sup>−2</sup></b>, chaque <u>mètre carré</u> exposé au Soleil reçoit 1 361 W (hors atmosphère).'],
    ['Capacité thermique massique', [['J', 1], ['kg', -1], ['K', -1]], 'joule par kilogramme et par kelvin', 'Avec <b>4 180 J·kg<sup>−1</sup>·K<sup>−1</sup></b>, il faut 4 180 J pour chauffer <u>1 kg</u> d’eau de <u>1 K</u>.'],
    ['Fréquence', [['s', -1]], 'par seconde (= hertz)', 'Avec <b>440 s<sup>−1</sup></b> (440 Hz), il y a 440 oscillations <u>chaque seconde</u>. L’unité n’a que du dénominateur&nbsp;!'],
    ['Constante d’Avogadro', [['mol', -1]], 'par mole', 'Avec <b>6,02 × 10<sup>23</sup> mol<sup>−1</sup></b>, il y a 6,02 × 10<sup>23</sup> entités dans <u>chaque mole</u>.']
  ];
  SonW.def('unites', {
    build: function (el, I) {
      var s = I.s; s.i = 0;
      el.innerHTML = '<div class="ud"><div class="w-row ud-chips">' + UD.map(function (u, i) { return btn(ubarre(u[1]), '', 'data-i="' + i + '"'); }).join('') + '</div>' +
        '<div class="ud-card"><div class="ud-name"></div><div class="ud-big"></div>' +
        '<div class="ud-rows"><div><span>Avec une barre</span><b class="ud-bar"></b></div><div><span>Se lit</span><b class="ud-lit"></b></div></div>' +
        '<div class="ud-sens"></div></div>' +
        '<div class="w-row"><span class="w-lab">ce qui est « sous la barre » passe en exposant négatif</span></div></div>';
      var big = $('.ud-big', el);
      function maj() {
        var u = UD[s.i];
        $$('.ud-chips .w-btn', el).forEach(function (b, k) { b.classList.toggle('on', k === s.i); });
        $('.ud-name', el).textContent = u[0];
        big.innerHTML = uex(u[1]);
        $('.ud-bar', el).innerHTML = ubarre(u[1]); $('.ud-lit', el).innerHTML = '«&nbsp;' + u[2] + '&nbsp;»';
        $('.ud-sens', el).innerHTML = u[3];
      }
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (b && b.getAttribute('data-i') != null) { s.i = +b.getAttribute('data-i'); maj(); }
      });
      maj();
    }
  });

  /* ================================================================= */
  /* Convertisseur d’unités composées (km/h → m/s, g/cm³ → kg/m³…)       */
  /* ================================================================= */
  function nf(x) { // nombre lisible : 3 600 · 0,001 · 1,36 × 10⁷
    if (x === 0) return '0';
    x = parseFloat(x.toPrecision(10));
    var a = Math.abs(x);
    if (a >= 1e6 || a < 1e-3) { var p = x.toExponential().split('e'); return virg(parseFloat(p[0])) + ' × ' + p10(+p[1]); }
    var t = String(a).split('.'); t[0] = groupe(t[0]);
    return (x < 0 ? MOINS : '') + t.join(',');
  }
  function puis10(x) { var e = Math.round(Math.log10(x)); return Math.abs(x / Math.pow(10, e) - 1) < 1e-9 ? e : null; }
  function volr(sym, e, ex) { return '1&nbsp;' + sym + '<sup>3</sup> = (10' + sup(e) + '&nbsp;m)<sup>3</sup> = ' + p10(ex) + '&nbsp;m<sup>3</sup>'; }
  // numérateur : [symbole, exposant du facteur] ; dénominateur : [symbole, puissance, facteur, relation]
  var VOL = [['mm', 3, 1e-9, volr('mm', -3, -9)], ['cm', 3, 1e-6, volr('cm', -2, -6)], ['mL', 1, 1e-6, '1&nbsp;mL = 1&nbsp;cm<sup>3</sup> = ' + p10(-6) + '&nbsp;m<sup>3</sup>'],
    ['dm', 3, 1e-3, volr('dm', -1, -3)], ['L', 1, 1e-3, '1&nbsp;L = 1&nbsp;dm<sup>3</sup> = ' + p10(-3) + '&nbsp;m<sup>3</sup>'], ['m', 3, 1, '']];
  var UC = {
    vit: { nom: 'Vitesse', sn: 'm', sd: 's', def: [72, 3, 3, 2, 1],
      n: [['mm', -3], ['cm', -2], ['m', 0], ['km', 3]],
      d: [['ms', 1, 1e-3, '1&nbsp;ms = ' + p10(-3) + '&nbsp;s'], ['s', 1, 1, ''], ['min', 1, 60, '1&nbsp;min = 60&nbsp;s'], ['h', 1, 3600, '1&nbsp;h = 60 × 60&nbsp;s = 3&nbsp;600&nbsp;s']] },
    mv: { nom: 'Masse par volume', sn: 'kg', sd: 'm<sup>3</sup>', def: [1, 2, 1, 3, 5],
      n: [['µg', -9], ['mg', -6], ['g', -3], ['kg', 0], ['t', 3]], d: VOL },
    cm: { nom: 'Mole par volume', sn: 'mol', sd: 'm<sup>3</sup>', def: [0.1, 2, 4, 2, 5],
      n: [['µmol', -6], ['mmol', -3], ['mol', 0], ['kmol', 3]], d: VOL }
  };
  var UC_PRE = [['72 km/h → m/s', 'vit', 72, 3, 3, 2, 1], ['20 m/s → km/h', 'vit', 20, 2, 1, 3, 3], ['1,0 g/cm³ → kg/m³', 'mv', 1, 2, 1, 3, 5],
    ['13,6 g/mL → kg/L', 'mv', 13.6, 2, 2, 3, 4], ['0,10 mol/L → mol/m³', 'cm', 0.1, 2, 4, 2, 5], ['8 µg/mL → mg/L', 'mv', 8, 0, 2, 1, 4]];
  SonW.def('composes', {
    build: function (el, I) {
      var s = I.s; s.fam = 'vit';
      el.innerHTML = '<div class="cv uc"><div class="w-row">' + Object.keys(UC).map(function (k) { return btn(UC[k].nom, '', 'data-f="' + k + '"'); }).join('') + '</div>' +
        '<div class="cv-form">Convertir <input class="cv-v" value="72" inputmode="decimal" aria-label="Valeur"><select class="uc-n1" aria-label="Unité du haut (départ)"></select>/<select class="uc-d1" aria-label="Unité du bas (départ)"></select>' +
        ' en <select class="uc-n2" aria-label="Unité du haut (arrivée)"></select>/<select class="uc-d2" aria-label="Unité du bas (arrivée)"></select></div>' +
        '<div class="w-row">' + UC_PRE.map(function (c, i) { return btn(c[0], '', 'data-p="' + i + '"'); }).join('') + '</div>' +
        '<div class="cv-steps"></div></div>';
      var f = { v: $('.cv-v', el), n1: $('.uc-n1', el), d1: $('.uc-d1', el), n2: $('.uc-n2', el), d2: $('.uc-d2', el) }, out = $('.cv-steps', el);
      function dlab(d) { return d[0] + (d[1] === 3 ? '<sup>3</sup>' : ''); }
      function dopt(d) { return d[0] + (d[1] === 3 ? '³' : ''); }
      function ex(e) { return '<span class="' + (e < 0 ? 'e-neg' : 'e-pos') + '">' + p10(e) + '</span>'; }
      function fam(k, n1, d1, n2, d2) {
        s.fam = k; var F = UC[k];
        $$('[data-f]', el).forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-f') === k); });
        [f.n1, f.n2].forEach(function (x) { x.innerHTML = F.n.map(function (n, i) { return '<option value="' + i + '">' + n[0] + '</option>'; }).join(''); });
        [f.d1, f.d2].forEach(function (x) { x.innerHTML = F.d.map(function (d, i) { return '<option value="' + i + '">' + dopt(d) + '</option>'; }).join(''); });
        f.n1.value = n1; f.d1.value = d1; f.n2.value = n2; f.d2.value = d2;
      }
      function render() {
        var F = UC[s.fam], v = lire(f.v.value), nA = F.n[+f.n1.value], dA = F.d[+f.d1.value], nB = F.n[+f.n2.value], dB = F.d[+f.d2.value];
        var uA = nA[0] + '/' + dlab(dA), uB = nB[0] + '/' + dlab(dB), si = F.sn + '/' + F.sd;
        if (!isFinite(v) || v === 0) { out.innerHTML = '<span class="ln why">Entrez un nombre non nul pour voir le détail du calcul.</span>'; return; }
        var vs = nf(v), siA = nA[1] === 0 && dA[2] === 1, siB = nB[1] === 0 && dB[2] === 1, L = [];
        L.push('<span class="ln">' + vs + '&nbsp;' + uA + ' s’écrit aussi ' + vs + '&nbsp;' + nA[0] + '<span class="dot">·</span>' + dA[0] + '<span class="e-neg">' + sup(-dA[1]) + '</span></span>');
        if (siA && siB) { out.innerHTML = L.join('') + '<span class="ln">Ces deux écritures désignent la même unité : rien à convertir.</span>'; return; }
        var vSI = v * Math.pow(10, nA[1]) / dA[2];
        if (!siA) {
          if (nA[1] !== 0) L.push('<span class="ln"><b>Haut</b> : 1&nbsp;' + nA[0] + ' = ' + ex(nA[1]) + '&nbsp;' + F.sn + '</span>');
          if (dA[3]) L.push('<span class="ln"><b>Bas</b> : ' + dA[3] + ' <span class="why">le bas se convertit « à l’envers »</span></span>');
          var haut = vs + (nA[1] !== 0 ? ' × ' + ex(nA[1]) : '') + '&nbsp;' + F.sn, pd = puis10(dA[2]);
          var bas = dA[2] === 1 ? '' : (pd !== null ? ex(pd) : nf(dA[2])) + '&nbsp;';
          L.push('<span class="ln">' + vs + '&nbsp;' + uA + ' = ' + haut + ' / ' + (dA[2] === 1 ? '1&nbsp;' : bas) + F.sd + ' = <span class="res">' + nf(vSI) + '&nbsp;' + si + '</span> <span class="why">unités SI</span></span>');
        }
        var vB = vSI * dB[2] / Math.pow(10, nB[1]);
        if (!siB) {
          var parts = [];
          if (nB[1] !== 0) parts.push('1&nbsp;' + F.sn + ' = ' + ex(-nB[1]) + '&nbsp;' + nB[0]);
          if (dB[2] !== 1) { var pb = puis10(dB[2]); parts.push('1&nbsp;' + F.sd + ' = ' + (pb !== null ? ex(-pb) : '1/' + nf(dB[2])) + '&nbsp;' + dlab(dB)); }
          L.push('<span class="ln"><b>Vers l’unité demandée</b> : ' + parts.join(' et ') + '</span>');
        }
        var res = nf(vB);
        if (!siB) L.push('<span class="ln">' + (siA ? vs + '&nbsp;' + uA : nf(vSI) + '&nbsp;' + si) + ' = <span class="res">' + res + '&nbsp;' + uB + '</span></span>');
        out.innerHTML = L.join('');
      }
      el.addEventListener('input', render); el.addEventListener('change', render);
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-f')) { var k = b.getAttribute('data-f'), d = UC[k].def; fam(k, d[1], d[2], d[3], d[4]); f.v.value = String(d[0]).replace('.', ','); render(); }
        else if (b.getAttribute('data-p') != null) { var c = UC_PRE[+b.getAttribute('data-p')]; fam(c[1], c[3], c[4], c[5], c[6]); f.v.value = String(c[2]).replace('.', ','); render(); }
      });
      var d0 = UC.vit.def; fam('vit', d0[1], d0[2], d0[3], d0[4]); render();
    }
  });

  /* ================================================================= */
  /* Page de titre : l'exposant de 10 défile de 10⁻¹⁵ à 10¹⁵              */
  /* ================================================================= */
  SonW.def('heroexp', {
    build: function (el, I) {
      var s = I.s, ticks = '';
      for (var e = -15; e <= 15; e++) ticks += '<i class="' + (e % 3 === 0 ? 't3 ' : '') + (e < 0 ? 'neg' : e > 0 ? 'pos' : '') + '"></i>';
      el.innerHTML = '<div class="hx"><div class="hx-n"><span class="b">10</span><span class="e"></span></div><div class="hx-d"></div><div class="hx-p"></div>' +
        '<div class="hx-ax">' + ticks + '</div><div class="hx-axl"><span>10' + sup(-15) + '</span><span>1</span><span>10' + sup(15) + '</span></div></div>';
      s.last = null; s.t0 = null;
      var seq = [], i;
      for (i = 0; i <= 15; i++) seq.push(i);
      for (i = 14; i >= -15; i--) seq.push(i);
      for (i = -14; i <= -1; i++) seq.push(i);
      s.seq = seq;
      var nodes = $$('.hx-ax i', el), nEl = $('.hx-n', el), eEl = $('.e', el), dEl = $('.hx-d', el), pEl = $('.hx-p', el), hx = $('.hx', el);
      s.show = function (n) {
        var c = n > 0 ? '#ffc43a' : n < 0 ? '#37d6ff' : '#ffffff', pre = null;
        PF.forEach(function (p) { if (p[0] === n) pre = p; });
        hx.style.setProperty('--c', c); nEl.style.setProperty('--c', c); pEl.style.setProperty('--c', c);
        eEl.style.animation = 'none'; void eEl.offsetWidth; eEl.style.animation = '';
        eEl.textContent = n < 0 ? MOINS + (-n) : String(n);
        dEl.innerHTML = '= ' + dec(n);
        pEl.innerHTML = pre && n !== 0 ? '<b>' + pre[1] + ' · ' + pre[2] + '</b>' : '';
        nodes.forEach(function (x, k) { x.classList.toggle('on', k === n + 15); });
      };
      s.show(0);
    },
    enter: function (el, I) { I.s.t0 = null; },
    tick: function (el, I, t) {
      var s = I.s; if (s.t0 === null) s.t0 = t;
      var k = Math.floor((t - s.t0) / 0.7) % s.seq.length;
      if (k !== s.last) { s.last = k; s.show(s.seq[k]); }
    }
  });
})();
