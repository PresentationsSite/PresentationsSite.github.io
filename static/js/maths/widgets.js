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
})();
