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
  /* Convertisseur de préfixes (unités, aires, volumes)                  */
  /* ================================================================= */
  SonW.def('convertir', {
    build: function (el, I) {
      function opts(sel) { return PF.map(function (p) { return '<option value="' + p[0] + '"' + (p[0] === sel ? ' selected' : '') + '>' + (p[1] || '–') + (p[1] ? ' (' + p[2] + ')' : ' (aucun)') + '</option>'; }).join(''); }
      el.innerHTML = '<div class="cv"><div class="cv-form">Convertir <input class="cv-v" value="34" inputmode="decimal" aria-label="Valeur">' +
        '<select class="cv-a" aria-label="Préfixe de départ">' + opts(-12) + '</select><select class="cv-u" aria-label="Unité"><option>m</option><option>g</option><option>s</option><option>L</option></select>' +
        '<select class="cv-n" aria-label="Puissance"><option value="1">unité</option><option value="2">unité²</option><option value="3">unité³</option></select>' +
        ' en <select class="cv-b" aria-label="Préfixe d’arrivée">' + opts(3) + '</select><span class="cv-u2"></span></div>' +
        '<div class="w-row">' + [['34 pm → km', 34, -12, 'm', 1, 3], ['34 µg → fg', 34, -6, 'g', 1, -15], ['34 m³ → nm³', 34, 0, 'm', 3, -9], ['34 nm² → µm²', 34, -9, 'm', 2, -6], ['250 mL → L', 250, -3, 'L', 1, 0]].map(function (c, i) { return btn(c[0], '', 'data-p="' + i + '"'); }).join('') + '</div>' +
        '<div class="cv-steps"></div></div>';
      var f = { v: $('.cv-v', el), a: $('.cv-a', el), u: $('.cv-u', el), n: $('.cv-n', el), b: $('.cv-b', el) }, out = $('.cv-steps', el);
      var NOM = {}; PF.forEach(function (p) { NOM[p[0]] = p[1]; });
      var PRE = [[34, -12, 'm', 1, 3], [34, -6, 'g', 1, -15], [34, 0, 'm', 3, -9], [34, -9, 'm', 2, -6], [250, -3, 'L', 1, 0]];
      function ex(e) { return '<span class="' + (e < 0 ? 'e-neg' : 'e-pos') + '">' + p10(e) + '</span>'; }
      function render() {
        var v = lire(f.v.value), eA = +f.a.value, eB = +f.b.value, n = +f.n.value, U = f.u.value;
        $('.cv-u2', el).innerHTML = '&nbsp;' + (NOM[eB] || '') + U + (n > 1 ? sup(n) : '') + ' ?';
        if (!isFinite(v) || v === 0) { out.innerHTML = '<span class="ln why">Entrez un nombre non nul pour voir le détail du calcul.</span>'; return; }
        var vs = virg(v), uA = (NOM[eA] || '') + U + (n > 1 ? sup(n) : ''), uB = (NOM[eB] || '') + U + (n > 1 ? sup(n) : ''), uU = U + (n > 1 ? sup(n) : '');
        var L = [], e1 = n * eA, e2 = -n * eB, tot = n * (eA - eB), deux = eA !== 0 && eB !== 0;
        if (eA === eB) { out.innerHTML = '<span class="ln">Les deux préfixes sont identiques : rien à convertir, <span class="res">' + vs + '&nbsp;' + uA + '</span>.</span>'; return; }
        if (eA !== 0) L.push('<span class="ln">' + vs + '&nbsp;' + uA + ' = ' + vs + ' × ' + (n === 1 ? ex(eA) + '&nbsp;' + U : '(' + ex(eA) + '&nbsp;' + U + ')' + sup(n) + ' = ' + vs + ' × ' + ex(e1) + '&nbsp;' + uU) + ' <span class="why">préfixe → puissance de 10</span></span>');
        if (eB !== 0) L.push('<span class="ln">1&nbsp;' + U + ' = ' + ex(-eB) + '&nbsp;' + NOM[eB] + U + (n > 1 ? ', donc 1&nbsp;' + uU + ' = (' + ex(-eB) + '&nbsp;' + NOM[eB] + U + ')' + sup(n) + ' = ' + ex(e2) + '&nbsp;' + uB : '') + ' <span class="why">car 1&nbsp;' + NOM[eB] + U + ' = ' + p10(eB) + '&nbsp;' + U + '</span></span>');
        L.push('<span class="ln">' + (eA === 0 ? vs + '&nbsp;' + uA + ' = ' + vs + ' × ' : '= ' + vs + ' × ') + (deux ? ex(e1) + ' × ' + ex(e2) + ' = ' + vs + ' × ' : '') + ex(tot) + '&nbsp;' + uB + (deux ? ' <span class="why">on ajoute les exposants</span>' : '') + '</span>');
        var pe = v.toExponential().split('e'), m = pe[0].replace('.', ','), ee = +pe[1];
        var res = Math.abs(v) >= 10 || Math.abs(v) < 1 ? '<span class="ln">soit <span class="res">' + m + ' × ' + ex(ee + tot) + '&nbsp;' + uB + '</span> <span class="why">en notation scientifique</span></span>' : '<span class="ln"><span class="res">' + vs + ' × ' + ex(tot) + '&nbsp;' + uB + '</span></span>';
        out.innerHTML = L.join('') + res;
      }
      el.addEventListener('input', render); el.addEventListener('change', render);
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button[data-p]'); if (!b) return;
        var c = PRE[+b.getAttribute('data-p')];
        f.v.value = c[0]; f.a.value = c[1]; f.u.value = c[2]; f.n.value = c[3]; f.b.value = c[4]; render();
      });
      render();
    }
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
  /* Notation scientifique : la virgule qui glisse                        */
  /* ================================================================= */
  var VG_PRE = ['340', '6 370 000', '0,052', '0,0008', '25 000', '0,0045'];
  SonW.def('virgule', {
    build: function (el, I) {
      var s = I.s; s.anim = null;
      el.innerHTML = '<div class="vg"><div class="vg-pre">' + VG_PRE.map(function (t) { return btn(t, '', 'data-n="' + t + '"'); }).join('') + btn('🎲 Défi', 'go', 'data-def="1"') + '</div>' +
        '<div class="vg-num"></div><div class="w-row">' + btn('◀ virgule', '', 'data-m="l"') + btn('virgule ▶', '', 'data-m="r"') + btn('✨ Montre-moi', '', 'data-auto="1"') + btn('↺', '', 'data-r="1"') + '</div>' +
        '<div class="vg-eq"></div><div class="vg-msg"></div></div>';
      var num = $('.vg-num', el), eq = $('.vg-eq', el), msg = $('.vg-msg', el);
      function init(str) {
        s.orig = str; var t = str.replace(/[\s ]/g, '').split(','); s.digits = (t[0] || '0') + (t[1] || ''); s.pt = (t[0] || '0').length; s.n = 0; s.defi = false;
        norm(); render();
      }
      function norm() { while (s.digits.length > 1 && s.digits.charAt(0) === '0' && s.pt > 1) { s.digits = s.digits.slice(1); s.pt--; } }
      function etat() {
        var ent = s.digits.slice(0, s.pt), fra = s.digits.slice(s.pt).replace(/0+$/, '');
        var ent2 = ent.replace(/^0+(?=\d)/, '') || '0', ok = ent2.length === 1 && ent2 !== '0';
        return { ent: ent, fra: fra, ok: ok };
      }
      function render() {
        var e = etat(), first = -1, i;
        for (i = 0; i < s.digits.length; i++) if (s.digits.charAt(i) !== '0') { first = i; break; }
        var h = '', lim = s.pt + e.fra.length;          // les zéros de fin de partie décimale ne sont pas affichés
        if (s.pt === 0) h = '<span class="d0">0</span>';
        for (i = 0; i < lim; i++) {
          if (i === s.pt) h += '<span class="pt">,</span>';
          h += '<span class="' + (i < first ? 'd0' : i === first ? 'd1' : '') + '">' + s.digits.charAt(i) + '</span>';
        }
        num.innerHTML = h; num.classList.toggle('ok', e.ok);
        var a = (e.ent.replace(/^0+(?=\d)/, '') || '0').replace(/\B(?=(\d{3})+(?!\d))/g, FIN) + (e.fra ? ',' + e.fra : '');
        eq.innerHTML = s.orig + ' = ' + a + ' × 10<sup>' + (s.n === 0 ? '0' : '<span class="n">' + (s.n < 0 ? MOINS + (-s.n) : s.n) + '</span>') + '</sup>';
        msg.className = 'vg-msg' + (e.ok ? ' bon' : '');
        if (e.ok) msg.textContent = '✓ Un seul chiffre non nul avant la virgule : c’est la notation scientifique !' + (s.defi ? ' Bravo 🎉' : '');
        else if (s.n === 0) msg.textContent = 'Glissez la virgule pour qu’il n’y ait qu’un seul chiffre non nul avant elle.';
        else msg.textContent = s.n > 0 ? 'Virgule vers la gauche de ' + s.n + ' rang' + (s.n > 1 ? 's' : '') + ' : n est positif (+' + s.n + ').' : 'Virgule vers la droite de ' + (-s.n) + ' rang' + (-s.n > 1 ? 's' : '') + ' : n est négatif (' + MOINS + (-s.n) + ').';
      }
      function gauche() { if (s.pt > 0) s.pt--; else s.digits = '0' + s.digits; s.n++; norm(); render(); }
      function droite() { if (s.pt >= s.digits.length) s.digits += '0'; s.pt++; s.n--; norm(); render(); }
      function arreter() { if (s.anim) { clearInterval(s.anim); s.anim = null; } }
      s.arreter = arreter;
      el.addEventListener('click', function (ev) {
        var b = ev.target.closest('button'); if (!b) return;
        arreter();
        if (b.getAttribute('data-n') != null) init(b.getAttribute('data-n'));
        else if (b.getAttribute('data-m') === 'l') gauche();
        else if (b.getAttribute('data-m') === 'r') droite();
        else if (b.getAttribute('data-r')) init(s.orig);
        else if (b.getAttribute('data-def')) {
          var L = ['0,00072', '3 900 000', '58 000', '0,0306', '0,41', '720', '0,000009', '12 500 000']; var c = L[Math.floor(Math.random() * L.length)];
          init(c); s.defi = true; msg.textContent = 'Défi : écrivez ' + c + ' en notation scientifique (glissez la virgule).';
        } else if (b.getAttribute('data-auto')) {
          init(s.orig); var k = 0;
          s.anim = setInterval(function () {
            var e = etat(); if (e.ok || k++ > 20) { arreter(); return; }
            var ent2 = e.ent.replace(/^0+(?=\d)/, '');
            if (ent2.length > 1 || (ent2.length === 1 && ent2 !== '0')) { if (ent2.length > 1) gauche(); else arreter(); } else droite();
          }, 650);
        }
      });
      init('340');
    },
    leave: function (el, I) { I.s.arreter(); }
  });

  /* ================================================================= */
  /* Ordre de grandeur : seuil 5 (cours) ou √10 (physiciens)             */
  /* ================================================================= */
  SonW.def('og', {
    build: function (el, I) {
      var s = I.s; s.log = el.getAttribute('data-log') === '1';          // data-log="1" : échelle logarithmique d'emblée
      var nopt = ''; for (var k = -9; k <= 9; k++) nopt += '<option value="' + k + '"' + (k === 2 ? ' selected' : '') + '>' + (k < 0 ? MOINS + (-k) : k) + '</option>';
      el.innerHTML = '<div class="og"><div class="og-top"></div><div class="og-bar"><div class="og-zone og-lo"></div><div class="og-zone og-hi"></div><div class="og-thr"></div><div class="og-cur"></div></div><div class="og-ticks"></div>' +
        '<div class="og-ctrl"><label>a = <b class="oa"></b> <input class="w-range og-a" type="range" min="1" max="9.99" step="0.01" value="4.7"></label><label>n <select class="og-n">' + nopt + '</select></label>' +
        btn('🔬 Pour les curieux : seuil √10', '', 'data-log="1"') + '</div>' +
        '<div class="og-res"></div><div class="og-note"></div>' +
        '<div class="w-row">' + [['499', 4.99, 2], ['500', 5, 2], ['0,0087', 8.7, -3], ['6 371 km', 6.371, 6], ['400', 4, 2]].map(function (c, i) { return btn(c[0], '', 'data-p="' + i + '"'); }).join('') + '</div></div>';
      var PRE = [[4.99, 2], [5, 2], [8.7, -3], [6.371, 6], [4, 2]];
      var ra = $('.og-a', el), sn = $('.og-n', el), lo = $('.og-lo', el), hi = $('.og-hi', el), thr = $('.og-thr', el), cur = $('.og-cur', el), tk = $('.og-ticks', el);
      var R10 = Math.sqrt(10);
      function pos(a) { return s.log ? Math.log10(a) * 100 : (a - 1) / 9 * 100; }
      function valeur(a, n) {
        var v = a * Math.pow(10, n);
        return Math.abs(n) <= 6 ? Number(v.toPrecision(10)).toLocaleString('fr-FR', { maximumFractionDigits: 10 }) : '';
      }
      function render() {
        var a = +ra.value, n = +sn.value, seuil = s.log ? R10 : 5, hiOG = a >= seuil, p5 = a >= 5, pr = a >= R10;
        $('.oa', el).textContent = virg(a.toFixed(2).replace(/0+$/, '').replace(/\.$/, ''));
        var av = virg(a.toFixed(3).replace(/0+$/, '').replace(/\.$/, '')), vd = valeur(a, n);
        $('.og-top', el).innerHTML = av + ' × ' + p10(n) + (vd ? ' = ' + vd : '');
        var cut = pos(seuil); lo.style.flexBasis = cut + '%'; hi.style.flexBasis = (100 - cut) + '%';
        lo.innerHTML = s.log ? 'a &lt; √10 ≈ 3,16<br>→ ' + p10(n) : 'a &lt; 5<br>→ ' + p10(n); hi.innerHTML = s.log ? 'a ≥ √10<br>→ ' + p10(n + 1) : 'a ≥ 5<br>→ ' + p10(n + 1);
        thr.style.left = (s.log ? pos(5) : cut) + '%'; thr.style.display = s.log ? '' : 'none';
        cur.style.left = pos(a) + '%'; cur.setAttribute('data-v', av);
        var ticks = s.log ? [[1, '1'], [2, '2'], [R10, '√10'], [5, '5'], [10, '10']] : [[1, '1'], [5, '5'], [10, '10']];
        tk.innerHTML = ticks.map(function (t) { return '<span style="left:' + pos(t[0]) + '%">' + t[1] + '</span>'; }).join('');
        var h = '<div class="og-pill ' + (p5 ? 'hi' : 'lo') + (s.log && p5 !== pr ? ' diff' : '') + '">' + p10(p5 ? n + 1 : n) + '<small>seuil 5 (le cours)</small></div>';
        if (s.log) h += '<div class="og-pill ' + (pr ? 'hi' : 'lo') + (p5 !== pr ? ' diff' : '') + '">' + p10(pr ? n + 1 : n) + '<small>seuil √10 (physiciens)</small></div>';
        $('.og-res', el).innerHTML = h;
        $('.og-note', el).innerHTML = s.log ? (p5 !== pr ? 'Ici les deux conventions donnent des résultats différents : entre 3,16 et 5, un physicien arrondit à la puissance de 10 supérieure.' : 'Hors de l’intervalle [3,16 ; 5[, les deux conventions donnent le même résultat. Sur cette échelle logarithmique, √10 est exactement au milieu de 1 et 10.') : 'Si a < 5 on garde 10<sup>n</sup> ; si a ≥ 5 on passe à la puissance suivante 10<sup>n+1</sup>.';
        $('[data-log]', el).classList.toggle('on', s.log);
      }
      ra.addEventListener('input', render); sn.addEventListener('change', render);
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button'); if (!b) return;
        if (b.getAttribute('data-log')) { s.log = !s.log; render(); }
        else if (b.getAttribute('data-p') != null) { var c = PRE[+b.getAttribute('data-p')]; ra.value = c[0]; sn.value = c[1]; render(); }
      });
      render();
    }
  });

  /* ================================================================= */
  /* Chiffres significatifs : compter et arrondir                         */
  /* ================================================================= */
  var CS_PRE = [['0,000123000', 'les zéros de droite comptent'], ['3,50', 'précis au centième près'], ['0,0087', 'les zéros de gauche ne comptent pas'], ['205', 'un zéro « coincé » entre deux chiffres compte'], ['1,20×10^3', 'la puissance de 10 ne compte pas'], ['1500', 'ambigu : 2, 3 ou 4 chiffres significatifs ?'], ['0,0320', '3 chiffres : le zéro final compte']];
  SonW.def('cs', {
    build: function (el, I) {
      el.innerHTML = '<div class="cs"><div class="cs-pre">' + CS_PRE.map(function (c, i) { return btn(c[0].replace('^3', '³').replace('×10³', ' × 10³'), '', 'data-i="' + i + '"'); }).join('') +
        '</div><div class="cs-pre"><span class="w-lab">ou tapez un nombre :</span><input class="cs-in" value="0,000123000" aria-label="Nombre" spellcheck="false"></div>' +
        '<div class="cs-show"></div><div class="cs-count"></div><div class="cs-msg"></div>' +
        '<div class="cs-round">Arrondir à <b class="cn">3</b> chiffres significatifs <input class="w-range cs-sl" type="range" min="1" max="8" value="3"> → <b class="cr"></b></div></div>';
      var inp = $('.cs-in', el), show = $('.cs-show', el), cnt = $('.cs-count', el), msg = $('.cs-msg', el), sl = $('.cs-sl', el);
      function analyse(txt) {
        var t = txt.trim().replace(/\s+/g, '').replace(MOINS, '-'), m = t.match(/^([+-]?)([\d.,]+)(?:(?:×|x|\*)?10\^?([+-]?\d+)|e([+-]?\d+))?$/i);
        if (!m) return null;
        var mant = m[2].replace(',', '.'), ex = m[3] != null ? +m[3] : m[4] != null ? +m[4] : 0, chiffres = mant.replace('.', ''), first = chiffres.search(/[1-9]/);
        if (first < 0) return { mant: m[2], ex: ex, chiffres: chiffres, first: -1, n: 0, v: 0, aff: m[2], hasExp: m[3] != null || m[4] != null, entier: mant.indexOf('.') < 0 };
        return { signe: m[1], mant: m[2], ex: ex, chiffres: chiffres, first: first, n: chiffres.length - first, v: parseFloat(m[1] + mant) * Math.pow(10, ex), hasExp: m[3] != null || m[4] != null, entier: mant.indexOf('.') < 0 };
      }
      function maj() {
        var a = analyse(inp.value);
        if (!a || a.first < 0) { show.innerHTML = '<span class="cs-n">?</span>'; cnt.innerHTML = ''; msg.textContent = 'Entrez un nombre (par exemple 0,0320 ou 1,20×10^3).'; return; }
        var idx = 0, h = '';
        a.mant.split('').forEach(function (ch) { if (ch === ',' || ch === '.') { h += ','; return; } h += '<span class="' + (idx++ >= a.first ? 'cs-y' : 'cs-n') + '">' + ch + '</span>'; });
        if (a.hasExp) h += '<span class="pw"> × 10' + sup(a.ex) + '</span>';
        show.innerHTML = (a.signe === '-' ? MOINS : '') + h;
        var ambigu = a.entier && !a.hasExp && /0$/.test(a.mant);
        cnt.innerHTML = ambigu ? '<span class="badge min">2 à ' + a.n + '</span> chiffres significatifs' : '<span class="badge">' + a.n + '</span> chiffre' + (a.n > 1 ? 's' : '') + ' significatif' + (a.n > 1 ? 's' : '');
        var pre = CS_PRE.filter(function (c) { return c[0] === inp.value.trim(); })[0];
        msg.textContent = pre ? pre[1] : ambigu ? 'Les zéros de fin d’un entier sont ambigus : la notation scientifique lève le doute.' : (a.first > 0 ? 'Les zéros du début (en gris) ne comptent pas. ' : '') + 'Les chiffres en vert comptent.';
        sl.max = Math.max(a.n + 2, 4); if (+sl.value > +sl.max) sl.value = sl.max;
        arrondi(a);
      }
      function arrondi(a) {
        var N = +sl.value; $('.cn', el).textContent = N;
        if (!a || !isFinite(a.v) || a.v === 0) { $('.cr', el).textContent = ''; return; }
        var t = a.v.toPrecision(N), r;
        if (t.indexOf('e') >= 0) { var p = a.v.toExponential(N - 1).split('e'); r = p[0].replace('.', ',') + ' × 10' + sup(+p[1]); }
        else r = t.replace('.', ',');
        $('.cr', el).innerHTML = (a.signe === '-' ? MOINS : '') + r.replace(/^-/, MOINS);
      }
      inp.addEventListener('input', maj); sl.addEventListener('input', function () { arrondi(analyse(inp.value)); });
      el.addEventListener('click', function (e) { var b = e.target.closest('button[data-i]'); if (!b) return; inp.value = CS_PRE[+b.getAttribute('data-i')][0]; maj(); });
      maj();
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
      var s = I.s; s.i = 0; s.hide = false; s.shown = false;
      el.innerHTML = '<div class="ud"><div class="w-row ud-chips">' + UD.map(function (u, i) { return btn(ubarre(u[1]), '', 'data-i="' + i + '"'); }).join('') + '</div>' +
        '<div class="ud-card"><div class="ud-name"></div><div class="ud-big"></div><div class="ud-hint">👆 cliquez pour révéler</div>' +
        '<div class="ud-rows"><div><span>Avec une barre</span><b class="ud-bar"></b></div><div><span>Se lit</span><b class="ud-lit"></b></div></div>' +
        '<div class="ud-sens"></div></div>' +
        '<div class="w-row">' + btn('🙈 Mode devinette', '', 'data-h="1"') + '<span class="w-lab">ce qui est « sous la barre » passe en exposant négatif</span></div></div>';
      var big = $('.ud-big', el), hint = $('.ud-hint', el);
      function maj() {
        var u = UD[s.i], cache = s.hide && !s.shown;
        $$('.ud-chips .w-btn', el).forEach(function (b, k) { b.classList.toggle('on', k === s.i); });
        $('.ud-name', el).textContent = u[0];
        big.innerHTML = uex(u[1]); big.classList.toggle('hid', cache); hint.style.visibility = cache ? 'visible' : 'hidden';
        $('.ud-bar', el).innerHTML = ubarre(u[1]); $('.ud-lit', el).innerHTML = '«&nbsp;' + u[2] + '&nbsp;»';
        $('.ud-sens', el).innerHTML = u[3]; $('.ud-sens', el).classList.toggle('hid', cache);
      }
      el.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (b && b.getAttribute('data-i') != null) { s.i = +b.getAttribute('data-i'); s.shown = false; maj(); return; }
        if (b && b.getAttribute('data-h')) { s.hide = !s.hide; s.shown = false; b.classList.toggle('on', s.hide); b.textContent = s.hide ? '👀 Arrêter la devinette' : '🙈 Mode devinette'; maj(); return; }
        if (e.target.closest('.ud-big') && s.hide) { s.shown = true; maj(); }
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
        ' en <select class="uc-n2" aria-label="Unité du haut (arrivée)"></select>/<select class="uc-d2" aria-label="Unité du bas (arrivée)"></select> ?</div>' +
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
})();
