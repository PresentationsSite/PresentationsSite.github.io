/* Soleil — animations « couleur des étoiles » : Orion, raies d'absorption, effet Doppler, transit / vitesses radiales */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, TAU = U.TAU;
  function txt2(g, s, x, y, col, size, al, w) { U.rich(g, s, x, y, col, size, al, w); }

  /* ======================================================= Orion : température et couleur des étoiles */
  S.register('orion', function (root) {
    var st = S.stage(root, 900, 460), g = st.g;
    // RA (h), Dec (°), magnitude, température de surface (K)
    var stars = [
      { n: 'Bételgeuse', ra: 5.919, de: 7.407, m: 0.5, T: 3600 },
      { n: 'Bellatrix', ra: 5.419, de: 6.350, m: 1.64, T: 21800 },
      { n: 'Meissa', ra: 5.585, de: 9.934, m: 3.33, T: 33000 },
      { n: 'Alnitak', ra: 5.679, de: -1.943, m: 1.77, T: 29500 },
      { n: 'Alnilam', ra: 5.604, de: -1.202, m: 1.69, T: 27000 },
      { n: 'Mintaka', ra: 5.533, de: -0.299, m: 2.25, T: 29500 },
      { n: 'Saiph', ra: 5.796, de: -9.670, m: 2.07, T: 26500 },
      { n: 'Rigel', ra: 5.242, de: -8.202, m: 0.13, T: 12100 }
    ];
    var SC = 19, X0 = 240, Y0 = 232;
    function sat(c, k) { var m = (c[0] + c[1] + c[2]) / 3; return c.map(function (v) { return U.clamp(m + (v - m) * k, 0, 255); }); }
    var SIDE = { 'Bételgeuse': [-1, 0], 'Meissa': [1, 0], 'Bellatrix': [1, 0], 'Mintaka': [1, 0], 'Alnilam': [-1, -6], 'Alnitak': [-1, 16], 'Saiph': [-1, 0], 'Rigel': [1, 0] };
    stars.forEach(function (s, i) {
      s.x = X0 + (5.58 - s.ra) * 15 * SC; s.y = Y0 - s.de * SC; s.r = 3.2 + (3.6 - s.m) * 2.3; s.col = sat(U.bbRGB(s.T), 1.45); s.ph = i * 1.7;
    });
    var order = stars.slice().sort(function (a, b) { return a.T - b.T; });
    var lines = [[0, 2], [2, 1], [0, 3], [1, 5], [3, 4], [4, 5], [3, 6], [5, 7]];
    // champ d'étoiles de fond
    var bg = [], seed = 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var i = 0; i < 150; i++) bg.push([rnd() * 520, rnd() * 460, rnd() * 1.2 + .3, rnd() * .5 + .15]);
    var hov = null;
    S.pointer(st, {
      move: function (x, y) {
        hov = null; var best = 28;
        stars.forEach(function (s) { var d = Math.hypot(s.x - x, s.y - y); if (d < best) { best = d; hov = s; } });
        if (x > 540) { var k = Math.floor((y - 98) / 38); if (k >= 0 && k < order.length) hov = order[k]; }
      },
      leave: function () { hov = null; }
    });
    var cap = S.el('div', 'sw-cap', 'Survole une étoile ou une ligne du tableau.'); root.appendChild(cap);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, 900, 460);
        bg.forEach(function (b) { g.fillStyle = 'rgba(255,255,255,' + b[3] * (0.8 + 0.2 * Math.sin(t * 2 + b[0])) + ')'; g.fillRect(b[0], b[1], b[2], b[2]); });
        g.strokeStyle = 'rgba(160,180,255,.28)'; g.lineWidth = 1.5; g.setLineDash([2, 5]);
        lines.forEach(function (l) { g.beginPath(); g.moveTo(stars[l[0]].x, stars[l[0]].y); g.lineTo(stars[l[1]].x, stars[l[1]].y); g.stroke(); });
        g.setLineDash([]);
        stars.forEach(function (s) {
          var r = s.r * (1 + 0.04 * Math.sin(t * 2.2 + s.ph)) * (hov === s ? 1.25 : 1);
          var c = s.col, H = r * 5.5;
          var gr = g.createRadialGradient(s.x, s.y, 0, s.x, s.y, H);
          gr.addColorStop(0, U.rgb(c, .85)); gr.addColorStop(.18, U.rgb(c, .38)); gr.addColorStop(1, U.rgb(c, 0));
          g.fillStyle = gr; g.beginPath(); g.arc(s.x, s.y, H, 0, TAU); g.fill();
          g.fillStyle = '#fff'; g.beginPath(); g.arc(s.x, s.y, r * .55, 0, TAU); g.fill();
          g.fillStyle = U.rgb(c); g.beginPath(); g.arc(s.x, s.y, r * .8, 0, TAU); g.globalAlpha = .55; g.fill(); g.globalAlpha = 1;
          if (hov === s) { g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 1.5; g.beginPath(); g.arc(s.x, s.y, r + 10, 0, TAU); g.stroke(); }
          g.fillStyle = hov === s ? '#fff' : 'rgba(220,228,255,.75)'; g.font = '600 15px Outfit, sans-serif'; var sd = SIDE[s.n]; g.textAlign = sd[0] < 0 ? 'right' : 'left';
          g.fillText(s.n, s.x + sd[0] * (r + 8), s.y + 5 + sd[1]);
        });
        // tableau
        g.textAlign = 'left'; g.fillStyle = '#a9b2d6'; g.font = '600 14px Outfit, sans-serif';
        g.fillText('ÉTOILE', 590, 78); g.textAlign = 'right'; g.fillText('T (K)', 745, 78); g.fillText('λmax', 860, 78);
        g.strokeStyle = 'rgba(255,255,255,.15)'; g.beginPath(); g.moveTo(560, 88); g.lineTo(870, 88); g.stroke();
        order.forEach(function (s, i) {
          var y = 98 + i * 38, on = hov === s;
          if (on) { g.fillStyle = 'rgba(255,255,255,.1)'; g.fillRect(552, y - 4, 326, 34); }
          var c = s.col, gr = g.createRadialGradient(574, y + 13, 0, 574, y + 13, 14);
          gr.addColorStop(0, U.rgb(c)); gr.addColorStop(.5, U.rgb(c, .6)); gr.addColorStop(1, U.rgb(c, 0));
          g.fillStyle = gr; g.beginPath(); g.arc(574, y + 13, 14, 0, TAU); g.fill();
          g.textAlign = 'left'; g.fillStyle = on ? '#fff' : '#dfe5ff'; g.font = (on ? '600 ' : '400 ') + '17px Outfit, sans-serif'; g.fillText(s.n, 596, y + 19);
          g.textAlign = 'right'; g.fillStyle = on ? '#ffd166' : '#c9d1f5'; g.fillText(U.fr(s.T, 0), 745, y + 19);
          var lam = U.wien / s.T * 1e9; g.fillText(U.fr(lam, 0) + ' nm', 862, y + 19);
        });
        if (hov) {
          var lam = U.wien / hov.T * 1e9;
          cap.innerHTML = '<b>' + hov.n + '</b> : T ≈ ' + U.fr(hov.T, 0) + ' K → λ<sub>max</sub> = 2,898×10⁶ / T ≈ <b>' + U.fr(lam, 0) + ' nm</b> (' + (lam > 750 ? 'infrarouge : l’étoile paraît rouge-orangé' : lam < 380 ? 'ultraviolet : l’étoile paraît bleue' : 'visible') + ')';
        } else cap.innerHTML = 'Survole une étoile ou une ligne du tableau : plus l’étoile est chaude, plus elle est <b>bleue</b>.';
      }
    };
  });

  /* ======================================================= Spectres réels de Rigel et Bételgeuse */
  S.register('spectres-etoiles', function (root) {
    var D = S.data && S.data.spectres, W = 900, Hh = 420, st = S.stage(root, W, Hh), g = st.g;
    if (!D) { root.textContent = 'Données spectrales absentes (static/js/soleil/data-spectres.js).'; return {}; }
    var X0 = 70, X1 = 860, Y0 = 34, Y1 = 330;
    var ST = {
      rigel: { n: 'Rigel', t: 'B8 I', col: [120, 175, 255], Treal: 12100 },
      betel: { n: 'Bételgeuse', t: 'M2 I', col: [255, 128, 70], Treal: 3600 }
    };
    Object.keys(ST).forEach(function (k) {
      var f = D[k].f, im = 0; for (var i = 0; i < f.length; i++) if (f[i] > f[im]) im = i;
      ST[k].lmax = D.lam[im];
    });
    var on = { rigel: true, betel: true }, view = 'full', showT = false, cur = null;
    var ctrl = UI.row(root);
    UI.chips(ctrl, [{ id: 'rigel', label: 'Rigel (B8 I)', color: '#7fb4ff' }, { id: 'betel', label: 'Bételgeuse (M2 I)', color: '#ff8046' }], {
      multi: true, value: ['rigel', 'betel'], onchange: function (id, all) { on.rigel = all.indexOf('rigel') >= 0; on.betel = all.indexOf('betel') >= 0; }
    });
    UI.chips(ctrl, [{ id: 'full', label: 'UV → IR' }, { id: 'win', label: 'Fenêtre 350–850 nm' }], { value: 'full', onchange: function (id) { view = id; } });
    UI.btn(ctrl, 'T d’après Wien', function (e, b) { showT = !showT; b.classList.toggle('main', showT); });
    var read = UI.readout(root);
    function xr() { return view === 'full' ? [100, 2500] : [350, 850]; }
    function fAt(arr, x) {
      var L = D.lam, lo = 0, hi = L.length - 1;
      if (x <= L[0]) return arr[0]; if (x >= L[hi]) return arr[hi];
      while (hi - lo > 1) { var m = (lo + hi) >> 1; if (L[m] <= x) lo = m; else hi = m; }
      return arr[lo] + (arr[hi] - arr[lo]) * (x - L[lo]) / (L[hi] - L[lo]);
    }
    S.pointer(st, { move: function (x) { var r = xr(); cur = U.clamp(r[0] + (x - X0) / (X1 - X0) * (r[1] - r[0]), r[0], r[1]); }, leave: function () { cur = null; } });
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var r = xr(), a = r[0], b = r[1];
        function xo(l) { return X0 + (l - a) / (b - a) * (X1 - X0); }
        function yo(v) { return Y1 - v * (Y1 - Y0 - 26); }
        // bande visible
        var vx0 = xo(380), vx1 = xo(750), gv = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l = 380; l <= 750; l += 10) gv.addColorStop((l - 380) / 370, U.rgb(U.wl2rgb(l)));
        g.save(); g.globalAlpha = .2; g.fillStyle = gv; g.fillRect(Math.max(vx0, X0), Y0, Math.min(vx1, X1) - Math.max(vx0, X0), Y1 - Y0); g.restore();
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X0, Y0); g.lineTo(X0, Y1); g.lineTo(X1, Y1); g.stroke();
        var stp = view === 'full' ? 200 : 50;
        g.fillStyle = '#c9d1f5'; g.font = '14px Outfit, sans-serif'; g.textAlign = 'center';
        for (var nm = Math.ceil(a / stp) * stp; nm <= b; nm += stp) { g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = 1; g.beginPath(); g.moveTo(xo(nm), Y0); g.lineTo(xo(nm), Y1); g.stroke(); g.fillText(nm, xo(nm), Y1 + 19); }
        txt2(g, 'λ (nm)', X1, Y1 + 40, '#c9d1f5', 14, 'right');
        g.save(); g.translate(24, (Y0 + Y1) / 2); g.rotate(-Math.PI / 2); txt2(g, 'intensité relative', 0, 0, '#c9d1f5', 14, 'center'); g.restore();
        function lab(str, x, col) { U.rich(g, str, x, Y1 - 8, col, 13, 'center', 600, 'rgba(5,7,24,.8)'); }
        if (view === 'full') { lab('UV', xo(250), '#b69cff'); lab('visible', (vx0 + vx1) / 2, '#eef1ff'); lab('infrarouge', xo(1500), '#ff8a8a'); }
        else lab('visible', (Math.max(vx0, X0) + Math.min(vx1, X1)) / 2, '#eef1ff');
        Object.keys(ST).forEach(function (k) {
          if (!on[k]) return;
          var c = ST[k].col, f = D[k].f, L = D.lam, first = true;
          g.save(); g.beginPath(); g.rect(X0, Y0 - 6, X1 - X0, Y1 - Y0 + 8); g.clip();
          g.beginPath(); g.moveTo(xo(Math.max(a, L[0])), Y1);
          for (var i = 0; i < L.length; i++) { if (L[i] < a - 5 || L[i] > b + 5) continue; g.lineTo(xo(L[i]), yo(f[i])); }
          g.lineTo(xo(Math.min(b, L[L.length - 1])), Y1); g.closePath();
          var gr = g.createLinearGradient(0, Y0, 0, Y1); gr.addColorStop(0, U.rgb(c, .38)); gr.addColorStop(1, U.rgb(c, .03)); g.fillStyle = gr; g.fill();
          g.beginPath(); first = true;
          for (var j = 0; j < L.length; j++) { if (L[j] < a - 5 || L[j] > b + 5) continue; if (first) { g.moveTo(xo(L[j]), yo(f[j])); first = false; } else g.lineTo(xo(L[j]), yo(f[j])); }
          g.strokeStyle = U.rgb(c); g.lineWidth = 3; g.shadowColor = U.rgb(c); g.shadowBlur = 10; g.stroke(); g.restore();
          // maximum
          var lm = ST[k].lmax;
          if (lm >= a && lm <= b) {
            var xm = xo(lm), ym = yo(1);
            g.strokeStyle = U.rgb(c, .8); g.setLineDash([5, 5]); g.lineWidth = 1.4; g.beginPath(); g.moveTo(xm, ym + 6); g.lineTo(xm, Y1); g.stroke(); g.setLineDash([]);
            g.fillStyle = '#fff'; g.beginPath(); g.arc(xm, ym, 5, 0, TAU); g.fill();
            U.rich(g, ST[k].n, xm + 12, ym - 2, U.rgb(c), 16, 'left', 700, 'rgba(5,7,24,.8)');
            U.rich(g, 'λ_{max} ≈ ' + U.fr(lm, 0) + ' nm', xm + 12, ym + 16, '#eef1ff', 14, 'left', 600, 'rgba(5,7,24,.8)');
          } else if (view === 'win') {
            U.rich(g, ST[k].n + ' : maximum au-delà de 850 nm →', X1 - 8, Y0 + 40, U.rgb(c), 14, 'right', 600, 'rgba(5,7,24,.8)');
          }
        });
        if (cur != null) {
          var xc = xo(cur); g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(xc, Y0); g.lineTo(xc, Y1); g.stroke();
        }
        txt2(g, 'Spectres observés de supergéantes de même type que Rigel et Bételgeuse (bibliothèque de Pickles, 1998)', X0, Y1 + 62, '#7f89b3', 12.5, 'left');
        var rd = [];
        if (cur != null) { var s0 = 'λ = ' + U.fr(cur, 0) + ' nm'; Object.keys(ST).forEach(function (k) { if (on[k]) s0 += ' · ' + ST[k].n + ' : ' + U.fr(fAt(D[k].f, cur) * 100, 0) + ' %'; }); rd.push(s0); }
        else { Object.keys(ST).forEach(function (k) { if (!on[k]) return; var T = U.wien / (ST[k].lmax * 1e-9); rd.push('<b style="color:' + U.rgb(ST[k].col) + '">' + ST[k].n + '</b> : maximum vers <b>' + U.fr(ST[k].lmax, 0) + ' nm</b>' + (showT ? ' → loi de Wien : <b>' + U.fr(Math.round(T / 100) * 100, 0) + ' K</b>' : '')); }); if (!rd.length) rd.push('Coche au moins une étoile.'); if (!showT) rd.push('Survole le graphe pour lire λ ; le bouton « T d’après Wien » affiche la température déduite.'); }
        read.innerHTML = rd.join('<br>');
      }
    };
  });

  /* ======================================================= Raies d'absorption (Fraunhofer) */
  S.register('raies', function (root) {
    var W = 900, Hh = 400, st = S.stage(root, W, Hh), g = st.g;
    var EL = {
      H: { label: 'Hydrogène', col: '#ff6fb5', lines: [[656.28, 1, 'Hα', 'C'], [486.13, .8, 'Hβ', 'F'], [434.05, .65, 'Hγ'], [410.17, .5, 'Hδ']] },
      Na: { label: 'Sodium', col: '#ffc43a', lines: [[588.99, .95, 'Na D₂'], [589.59, .85, 'Na D₁', 'D']] },
      Mg: { label: 'Magnésium', col: '#7dffb0', lines: [[516.73, .6, ''], [517.27, .7, ''], [518.36, .85, 'Mg b', 'b']] },
      Ca: { label: 'Calcium', col: '#37d6ff', lines: [[393.37, 1, 'Ca K', 'K'], [396.85, .9, 'Ca H', 'H'], [422.67, .6, 'Ca']] },
      Fe: { label: 'Fer', col: '#c3a6ff', lines: [[404.58, .4, ''], [430.79, .55, 'Fe', 'G'], [438.36, .55, ''], [441.51, .35, ''], [466.81, .3, ''], [495.76, .4, ''], [526.95, .55, 'Fe', 'E'], [532.80, .38, ''], [537.15, .32, ''], [543.45, .3, '']] },
      O2: { label: 'O₂ (air terrestre)', col: '#9aa7c8', lines: [[686.7, .8, 'O₂', 'B']], wide: 2.4 }
    };
    var ids = Object.keys(EL), L0 = 380, L1 = 750, X0 = 40, X1 = 860, mode = 'abs', hover = null;
    var ctrl = UI.row(root);
    var chips = UI.chips(ctrl, ids.map(function (k) { return { id: k, label: EL[k].label, color: EL[k].col }; }), { multi: true, value: ['H', 'Na'], onchange: function () { st.dirty = true; } });
    var ctrl2 = UI.row(root);
    UI.btn(ctrl2, '☀ Spectre du Soleil (tout)', function () { ids.forEach(function (k) { chips.set(k, true); }); st.dirty = true; }, 'main');
    UI.btn(ctrl2, '∅ Tout effacer', function () { ids.forEach(function (k) { chips.set(k, false); }); st.dirty = true; });
    var chm = UI.chips(ctrl2, [{ id: 'abs', label: 'Raies d’absorption' }, { id: 'em', label: 'Raies d’émission' }], { value: 'abs', onchange: function (id) { mode = id; st.dirty = true; } });
    var read = UI.readout(root, '');
    function xOf(l) { return X0 + (l - L0) / (L1 - L0) * (X1 - X0); }
    function active() { return ids.filter(function (k) { return chips.has(k); }); }
    function absorb(l, act) {
      var a = 0;
      act.forEach(function (k) { EL[k].lines.forEach(function (ln) { var w = (EL[k].wide || (ln[1] > .8 ? 1.5 : 1.0)), d = (l - ln[0]) / w; a += ln[1] * Math.exp(-d * d); }); });
      return a;
    }
    S.pointer(st, { move: function (x) { hover = U.clamp(L0 + (x - X0) / (X1 - X0) * (L1 - L0), L0, L1); }, leave: function () { hover = null; } });
    function strip(y, h, em) {
      var act = active(), cs = [];
      for (var x = X0; x < X1; x += 1) {
        var l = L0 + (x - X0) / (X1 - X0) * (L1 - L0), c = U.wl2rgb(l);
        var lum = 0.45 + 0.55 * Math.exp(-Math.pow((l - 520) / 190, 2));
        var a = absorb(l, act);
        if (em) { var k = Math.min(1, a); g.fillStyle = U.rgb([c[0] * k, c[1] * k, c[2] * k]); }
        else { var f = 1 - Math.min(.97, a); g.fillStyle = U.rgb([c[0] * lum * f, c[1] * lum * f, c[2] * lum * f]); }
        g.fillRect(x, y, 1.2, h);
      }
    }
    return {
      frame: function () {
        if (!st.fit()) return;
        if (!st.dirty && hover == null) return; st.dirty = false;
        g.clearRect(0, 0, W, Hh);
        g.fillStyle = '#05060f'; g.fillRect(X0, 46, X1 - X0, 110); g.fillRect(X0, 232, X1 - X0, 110);
        g.textAlign = 'left'; g.font = '600 16px Outfit, sans-serif';
        g.fillStyle = '#a9b2d6'; g.fillText('Lumière d’une étoile (spectre continu + raies d’absorption)', X0, 20);
        g.fillText('Mêmes éléments, gaz chaud et isolé (raies d’émission)', X0, 206);
        strip(46, 110, false); strip(232, 110, true);
        // graduations
        g.strokeStyle = 'rgba(255,255,255,.5)'; g.fillStyle = '#c9d1f5'; g.font = '14px Outfit, sans-serif'; g.textAlign = 'center';
        for (var l = 400; l <= 750; l += 50) { var x = xOf(l); g.beginPath(); g.moveTo(x, 342); g.lineTo(x, 350); g.stroke(); g.fillText(l, x, 368); }
        g.textAlign = 'right'; g.fillText('λ (nm)', X1 + 8, 388);
        // étiquettes
        var act = active(), used = [];
        act.forEach(function (k) {
          EL[k].lines.forEach(function (ln) {
            if (!ln[2]) return; var x = xOf(ln[0]);
            if (used.some(function (u) { return Math.abs(u - x) < 34; })) return; used.push(x);
            g.fillStyle = EL[k].col; g.textAlign = 'center'; g.font = '600 14px Outfit, sans-serif';
            g.fillText(ln[2], x, mode === 'abs' ? 40 : 226);
            if (ln[3]) { g.fillStyle = 'rgba(255,255,255,.55)'; g.font = '12px Outfit, sans-serif'; g.fillText('(' + ln[3] + ')', x, mode === 'abs' ? 172 : 358); }
          });
        });
        if (hover != null) {
          var hx = xOf(hover);
          g.strokeStyle = 'rgba(255,255,255,.85)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(hx, 46); g.lineTo(hx, 342); g.stroke();
          var near = [];
          ids.forEach(function (k) { EL[k].lines.forEach(function (ln) { if (Math.abs(ln[0] - hover) < 2.2) near.push(EL[k].label + ' (' + U.fr(ln[0], 1) + ' nm)'); }); });
          read.innerHTML = 'λ = <b>' + U.fr(hover, 0) + ' nm</b>' + (near.length ? ' — raie de : <b>' + near.join(', ') + '</b>' : ' — pas de raie sélectionnée ici');
        } else read.innerHTML = 'Chaque élément a ses <b>raies à des longueurs d’onde bien précises</b> : une véritable carte d’identité. Survole le spectre pour lire λ.';
        g.lineWidth = 1;
      }
    };
  });

  /* ======================================================= Effet Doppler */
  S.register('doppler', function (root) {
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var C = 299792.458, v = 0;
    var lines = [[656.28, 'Hα'], [486.13, 'Hβ'], [434.05, 'Hγ'], [410.17, 'Hδ'], [588.99, 'Na D']];
    var ctrl = UI.row(root);
    var sl = UI.slider(ctrl, {
      label: 'vitesse radiale v', min: -30000, max: 30000, step: 100, value: 0, color: '#ff8a5c',
      fmt: function (x) { return (x > 0 ? '+' : x < 0 ? '−' : '') + U.fr(Math.abs(x), 0) + ' km/s'; }, oninput: function (x) { v = x; }
    });
    UI.chips(ctrl, [{ id: 0, label: 'À l’arrêt' }, { id: 30, label: 'Terre (+30 km/s)' }, { id: 10000, label: 's’éloigne (+10 000)' }, { id: -10000, label: 's’approche (−10 000)' }],
      { onchange: function (id) { v = parseFloat(id); sl.set(v); } });
    var read = UI.readout(root);
    var Xa = 60, Xb = 840;
    function xOf(l) { return Xa + (l - 380) / 370 * (Xb - Xa); }
    function strip(y, h, shift) {
      for (var x = Xa; x < Xb; x++) {
        var l = 380 + (x - Xa) / (Xb - Xa) * 370, c = U.wl2rgb(l), a = 0;
        lines.forEach(function (ln) { var l0 = ln[0] * (shift ? 1 + v / C : 1), d = (l - l0) / 1.1; a += Math.exp(-d * d); });
        var f = 1 - Math.min(.96, a), lum = .5 + .5 * Math.exp(-Math.pow((l - 520) / 190, 2));
        g.fillStyle = U.rgb([c[0] * lum * f, c[1] * lum * f, c[2] * lum * f]); g.fillRect(x, y, 1.2, h);
      }
    }
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var beta = U.clamp(v / 30000, -1, 1) * 0.55;        // vitesse « dessinée » (effet amplifié)
        // --- ondes
        var x0 = 560, y0 = 105, cw = 150, per = 0.42;
        var base = [255, 238, 200], ab = Math.abs(beta) / .55, tgt = beta > 0 ? [255, 70, 50] : [70, 140, 255];
        var tint = [U.lerp(base[0], tgt[0], ab), U.lerp(base[1], tgt[1], ab), U.lerp(base[2], tgt[2], ab)];
        for (var k = 0; k < 9; k++) {
          var age = ((t / per) % 1 + k) * per, rr = cw * age;
          if (rr < 6 || rr > 470) continue;
          var cx = x0 - beta * cw * age;
          g.strokeStyle = U.rgb(tint, Math.max(0, .85 * (1 - rr / 470))); g.lineWidth = 2.4;
          g.beginPath(); g.arc(cx, y0, rr, 0, TAU); g.stroke();
        }
        var sg = g.createRadialGradient(x0, y0, 0, x0, y0, 34);
        sg.addColorStop(0, '#fff7c8'); sg.addColorStop(.4, 'rgba(255,190,70,.8)'); sg.addColorStop(1, 'rgba(255,120,40,0)');
        g.fillStyle = sg; g.beginPath(); g.arc(x0, y0, 34, 0, TAU); g.fill();
        if (Math.abs(beta) > 0.02) {
          g.strokeStyle = '#fff'; g.fillStyle = '#fff'; g.lineWidth = 3; var dir = beta > 0 ? 1 : -1;
          g.beginPath(); g.moveTo(x0 + dir * 26, y0); g.lineTo(x0 + dir * 70, y0); g.stroke();
          g.beginPath(); g.moveTo(x0 + dir * 78, y0); g.lineTo(x0 + dir * 64, y0 - 8); g.lineTo(x0 + dir * 64, y0 + 8); g.fill();
        }
        // observateur (Terre)
        S.drawEarth(g, 60, y0, 26, t * .3);
        g.fillStyle = '#9fe0ff'; g.font = '600 16px Outfit, sans-serif'; g.textAlign = 'center'; g.fillText('observateur', 60, y0 + 50);
        g.fillStyle = '#a9b2d6'; g.font = '14px Outfit, sans-serif'; g.textAlign = 'right'; g.fillText('(analogie : effet amplifié)', 880, 24);
        // --- spectres
        g.textAlign = 'left'; g.fillStyle = '#a9b2d6'; g.font = '600 15px Outfit, sans-serif';
        g.fillText('Spectre de référence (laboratoire)', Xa, 222);
        strip(230, 46, false);
        g.fillStyle = '#a9b2d6'; g.fillText('Spectre de l’étoile observée', Xa, 302);
        strip(310, 46, true);
        g.strokeStyle = 'rgba(255,255,255,.5)'; g.fillStyle = '#c9d1f5'; g.textAlign = 'center'; g.font = '14px Outfit, sans-serif';
        for (var l = 400; l <= 750; l += 50) { var x = xOf(l); g.beginPath(); g.moveTo(x, 358); g.lineTo(x, 365); g.stroke(); g.fillText(l, x, 382); }
        g.textAlign = 'right'; g.fillText('λ (nm)', Xb + 18, 402);
        // repères Hα
        var l0 = 656.28, l1 = l0 * (1 + v / C);
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.setLineDash([3, 4]); g.beginPath(); g.moveTo(xOf(l0), 276); g.lineTo(xOf(l0), 358); g.stroke(); g.setLineDash([]);
        var dl = l1 - l0;
        read.innerHTML = 'Hα : <b>' + U.fr(l0, 2) + ' nm</b> → <b>' + U.fr(l1, 2) + ' nm</b> (Δλ = ' + (dl >= 0 ? '+' : '−') + U.fr(Math.abs(dl), Math.abs(dl) < 1 ? 3 : 1) + ' nm) · Δλ/λ = v/c = ' + U.fr(v / C, 4) +
          (v > 0 ? ' · décalage vers le <b style="color:#ff7a85">rouge</b> : l’astre s’éloigne' : v < 0 ? ' · décalage vers le <b style="color:#7fd2ff">bleu</b> : l’astre s’approche' : '');
      }
    };
  });

  /* ======================================================= Transit et vitesses radiales */
  S.register('transit', function (root) {
    var W = 900, Hh = 440, st = S.stage(root, W, Hh), g = st.g;
    var mode = 'transit', k = 0.1, bImp = 0.3, T = 8, period = 8;
    var PL = {
      j: { id: 'j', K: 12.5, label: 'Jupiter autour du Soleil', n: 'Jupiter / Soleil', short: 'Jupiter', P: '11,9 ans', col: '#ffb347' },
      p: { id: 'p', K: 56, label: '51 Pegasi b (1ʳᵉ exoplanète, 1995)', n: '51 Pegasi b', short: '51 Peg b', P: '4,2 jours', col: '#4fd8ff' },
      e: { id: 'e', K: 0.09, label: 'Terre autour du Soleil', n: 'Terre / Soleil', short: 'Terre', P: '1 an', col: '#7dffb0' }
    };
    var rv = PL.j;
    var SAMP = [], N = 220;
    for (var i = 0; i < N; i++) { var rr = Math.sqrt((i + .5) / N), th = i * 2.399963; SAMP.push([rr * Math.cos(th), rr * Math.sin(th)]); }
    var LD = 0.6;
    function flux(px, py, kk) {
      var bl = 0;
      for (var i = 0; i < N; i++) {
        var x = px + kk * SAMP[i][0], y = py + kk * SAMP[i][1], r2 = x * x + y * y;
        if (r2 < 1) bl += 1 - LD * (1 - Math.sqrt(1 - r2));
      }
      return 1 - bl * (Math.PI * kk * kk / N) / (Math.PI * (1 - LD / 3));
    }
    var UM = 1.5, curve = [], dMax = 0;
    function recompute() {
      curve = []; dMax = 0;
      for (var i = 0; i <= 160; i++) { var u = -UM - k + (2 * UM + 2 * k) * i / 160, f = flux(u, bImp, k); curve.push([u, f]); dMax = Math.max(dMax, 1 - f); }
    }
    recompute();
    var tabsRow = UI.row(root);
    var modeChips = UI.chips(tabsRow, [{ id: 'transit', label: 'Méthode du transit' }, { id: 'vr', label: 'Vitesses radiales (Doppler)' }], {
      value: 'transit', onchange: function (id) { mode = id; showCtrl(); }
    });
    var cT = UI.row(root), cV = UI.row(root);
    var sk = UI.slider(cT, { label: 'rayon planète / rayon étoile', min: Math.log(0.005), max: Math.log(0.2), step: 0.01, value: Math.log(0.1), fmt: function (v) { return U.fr(Math.exp(v), 3); }, oninput: function (v) { k = Math.exp(v); recompute(); } });
    UI.chips(cT, [{ id: .0092, label: 'Terre' }, { id: .0354, label: 'Neptune' }, { id: .1005, label: 'Jupiter' }], { onchange: function (id) { k = parseFloat(id); sk.set(Math.log(k)); recompute(); } });
    UI.chips(cV, [{ id: 'j', label: 'Jupiter / Soleil' }, { id: 'p', label: '51 Pegasi b' }, { id: 'e', label: 'Terre / Soleil' }], {
      value: 'j', onchange: function (id) { rv = PL[id]; }
    });
    function showCtrl() { cT.style.display = mode === 'transit' ? '' : 'none'; cV.style.display = mode === 'vr' ? '' : 'none'; }
    showCtrl();
    var read = UI.readout(root);
    function plotBox(x0, y0, x1, y1) { g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1; g.strokeRect(x0, y0, x1 - x0, y1 - y0); }
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var ph = (t % (T + 1.2)) / T; ph = Math.min(ph, 1);
        if (mode === 'transit') {
          var cx = 215, cy = 215, R = 125;
          var u = -UM - k + (2 * UM + 2 * k) * ph, f = flux(u, bImp, k);
          var halo = g.createRadialGradient(cx, cy, R * .8, cx, cy, R * 1.6);
          halo.addColorStop(0, 'rgba(255,200,90,.4)'); halo.addColorStop(1, 'rgba(255,160,60,0)');
          g.fillStyle = halo; g.beginPath(); g.arc(cx, cy, R * 1.6, 0, TAU); g.fill();
          var sg = g.createRadialGradient(cx, cy, 0, cx, cy, R);
          sg.addColorStop(0, '#fff6cf'); sg.addColorStop(.55, '#ffd36a'); sg.addColorStop(.9, '#f59a2e'); sg.addColorStop(1, '#c4561a');
          g.fillStyle = sg; g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.fill();
          var px = cx + u * R, py = cy + bImp * R, pr = Math.max(k * R, 1.3);
          g.save(); g.shadowColor = 'rgba(0,0,0,.8)'; g.shadowBlur = 6; g.fillStyle = '#06070f'; g.beginPath(); g.arc(px, py, pr, 0, TAU); g.fill(); g.restore();
          if (k * R < 4) { g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1; g.beginPath(); g.arc(px, py, 9, 0, TAU); g.stroke(); }
          g.fillStyle = '#a9b2d6'; g.font = '600 15px Outfit, sans-serif'; g.textAlign = 'center'; g.fillText('étoile + planète vue de face', cx, 396);
          // courbe de lumière
          var X0 = 470, X1 = 870, Y0 = 50, Y1 = 330, fmin = 1 - Math.max(dMax * 1.5, 1e-6), fmax = 1 + Math.max(dMax * .15, 1e-7);
          plotBox(X0, Y0, X1, Y1);
          function yy(fv) { return Y1 - (fv - fmin) / (fmax - fmin) * (Y1 - Y0); }
          function xx(uu) { return X0 + (uu - (-UM - k)) / (2 * UM + 2 * k) * (X1 - X0); }
          g.strokeStyle = 'rgba(255,255,255,.18)'; g.setLineDash([4, 5]); g.beginPath(); g.moveTo(X0, yy(1)); g.lineTo(X1, yy(1)); g.stroke(); g.setLineDash([]);
          g.strokeStyle = 'rgba(255,209,102,.35)'; g.lineWidth = 2; g.beginPath();
          curve.forEach(function (c, i) { i ? g.lineTo(xx(c[0]), yy(c[1])) : g.moveTo(xx(c[0]), yy(c[1])); }); g.stroke();
          g.strokeStyle = '#ffd166'; g.lineWidth = 3; g.shadowColor = '#ffd166'; g.shadowBlur = 8; g.beginPath();
          var first = true;
          curve.forEach(function (c) { if (c[0] <= u) { first ? g.moveTo(xx(c[0]), yy(c[1])) : g.lineTo(xx(c[0]), yy(c[1])); first = false; } });
          g.stroke(); g.shadowBlur = 0;
          g.fillStyle = '#fff'; g.beginPath(); g.arc(xx(u), yy(f), 5, 0, TAU); g.fill();
          var dpc = dMax * 100, dec = U.clamp(Math.ceil(-Math.log10(dpc)) + 2, 1, 4);
          g.fillStyle = '#c9d1f5'; g.font = '14px Outfit, sans-serif'; g.textAlign = 'right';
          for (var j = 0; j <= 2; j++) { var fv = 1 - dMax * j * 0.75; g.fillText(j === 0 ? '0 %' : '−' + U.fr(dMax * j * 75, dec) + ' %', X0 - 8, yy(fv) + 5); }
          g.textAlign = 'center'; g.fillText('temps →', (X0 + X1) / 2, Y1 + 26);
          g.save(); g.translate(X0 - 62, (Y0 + Y1) / 2); g.rotate(-Math.PI / 2); g.fillText('variation de la luminosité', 0, 0); g.restore();
          g.fillStyle = '#eef1ff'; g.font = '600 17px Outfit, sans-serif'; g.fillText('Courbe de lumière', (X0 + X1) / 2, 36);
          read.innerHTML = 'Profondeur du transit ≈ (R<sub>p</sub>/R<sub>★</sub>)² = <b>' + U.fr(k * k * 100, k * k * 100 < 0.1 ? 4 : 2) + ' %</b> de la lumière de l’étoile en moins.';
        } else {
          var cx2 = 215, cy2 = 215, orb = 140, ang = ph * TAU * 1.0;
          g.strokeStyle = 'rgba(255,255,255,.22)'; g.setLineDash([4, 6]); g.lineWidth = 1.5; g.beginPath(); g.arc(cx2, cy2, orb, 0, TAU); g.stroke(); g.setLineDash([]);
          var eps = 0.11, sx = cx2 - eps * orb * Math.cos(ang), sy = cy2 - eps * orb * Math.sin(ang);
          var plx = cx2 + orb * Math.cos(ang) * (1 - eps), ply = cy2 + orb * Math.sin(ang) * (1 - eps);
          // v_r : l'observateur est en bas (y croissant). Étoile qui monte (vy<0) = s'éloigne.
          var vr = rv.K * Math.sin(ang) * -1; // + = s'éloigne
          vr = rv.K * Math.cos(ang) * 1;     // (dy_star/dt ∝ -cos) -> s'éloigne quand cos>0
          var tintv = vr / rv.K, col = tintv > 0 ? [255, 190 - 70 * tintv, 90] : [255 + 90 * tintv, 215 + 30 * tintv, 110 - 120 * tintv];
          var sg2 = g.createRadialGradient(sx, sy, 0, sx, sy, 38);
          sg2.addColorStop(0, U.rgb(col)); sg2.addColorStop(.35, U.rgb(col, .55)); sg2.addColorStop(1, U.rgb(col, 0));
          g.fillStyle = sg2; g.beginPath(); g.arc(sx, sy, 38, 0, TAU); g.fill();
          g.fillStyle = '#fff4cf'; g.beginPath(); g.arc(sx, sy, 15, 0, TAU); g.fill();
          g.fillStyle = '#5cc8ff'; g.shadowColor = '#5cc8ff'; g.shadowBlur = 10; g.beginPath(); g.arc(plx, ply, 7, 0, TAU); g.fill(); g.shadowBlur = 0;
          g.fillStyle = '#9fe0ff'; g.font = '600 16px Outfit, sans-serif'; g.textAlign = 'center';
          g.fillText('↓ vers la Terre (observateur)', cx2, 410);
          g.fillStyle = '#a9b2d6'; g.font = '14px Outfit, sans-serif'; g.fillText('(oscillation de l’étoile très exagérée)', cx2, 386);
          // courbes v_r(t) des trois systèmes, superposées (échelle commune en m/s)
          var X0 = 470, X1 = 870, Y0 = 72, Y1 = 330, ym = (Y0 + Y1) / 2, VM = 60, sc = (Y1 - Y0) / 2 / VM;
          plotBox(X0, Y0, X1, Y1);
          [-50, -25, 0, 25, 50].forEach(function (v) {
            var y = ym - v * sc; g.strokeStyle = v === 0 ? 'rgba(255,255,255,.3)' : 'rgba(255,255,255,.07)'; g.setLineDash(v === 0 ? [4, 5] : []); g.lineWidth = 1;
            g.beginPath(); g.moveTo(X0, y); g.lineTo(X1, y); g.stroke(); g.setLineDash([]);
            g.fillStyle = '#c9d1f5'; g.font = '13px Outfit, sans-serif'; g.textAlign = 'right'; g.fillText((v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v), X0 - 8, y + 5);
          });
          // précision des meilleurs spectrographes (≈ 1 m/s)
          g.fillStyle = 'rgba(255,255,255,.16)'; g.fillRect(X0, ym - 1 * sc, X1 - X0, 2 * sc);
          g.fillStyle = 'rgba(255,255,255,.7)'; g.font = '12px Outfit, sans-serif'; g.textAlign = 'left'; g.textAlign = 'right'; g.fillText('précision d’un bon spectrographe ≈ 1 m/s', X1 - 8, ym - 1 * sc - 5);
          var order = ['j', 'p', 'e'].filter(function (id) { return id !== rv.id; }).concat([rv.id]);
          order.forEach(function (id) {
            var P = PL[id], sel = id === rv.id;
            g.save(); g.globalAlpha = sel ? 1 : .3; g.strokeStyle = P.col; g.lineWidth = sel ? 3.4 : 2.2; if (sel) { g.shadowColor = P.col; g.shadowBlur = 10; }
            g.beginPath(); for (var q = 0; q <= 200; q++) { var X = X0 + q / 200 * (X1 - X0), Y = ym - P.K * Math.cos(q / 200 * 2 * TAU) * sc; q ? g.lineTo(X, Y) : g.moveTo(X, Y); } g.stroke(); g.restore();
          });
          g.fillStyle = '#fff'; g.beginPath(); g.arc(X0 + ph / 2 * (X1 - X0), ym - rv.K * Math.cos(ang) * sc, 5.5, 0, TAU); g.fill();
          // légende
          ['j', 'p', 'e'].forEach(function (id, i) {
            var P = PL[id], sel = id === rv.id, lx = X0 + 4 + i * 134;
            g.globalAlpha = sel ? 1 : .5; g.fillStyle = P.col; g.fillRect(lx, 52, 14, 4);
            g.fillStyle = '#eef1ff'; g.font = (sel ? '600 ' : '400 ') + '12.5px Outfit, sans-serif'; g.textAlign = 'left'; g.fillText(P.short + ' ' + U.fr(P.K, P.K < 1 ? 2 : 1) + ' m/s', lx + 19, 57); g.globalAlpha = 1;
          });
          g.fillStyle = '#c9d1f5'; g.font = '14px Outfit, sans-serif'; g.textAlign = 'center';
          g.fillText('temps (2 périodes orbitales de chaque système) →', (X0 + X1) / 2, Y1 + 26);
          g.save(); g.translate(X0 - 44, (Y0 + Y1) / 2); g.rotate(-Math.PI / 2); g.fillText('vitesse radiale de l’étoile (m/s) · + = s’éloigne', 0, 0); g.restore();
          g.fillStyle = '#eef1ff'; g.font = '600 17px Outfit, sans-serif'; g.textAlign = 'center'; g.fillText('Vitesse radiale de l’étoile', (X0 + X1) / 2, 32);
          var dl = 656.28e-9 * rv.K / U.c;
          read.innerHTML = '<b>' + rv.label + '</b> : période ' + rv.P + ', K = <b>' + U.fr(rv.K, rv.K < 1 ? 2 : 1) + ' m/s</b>. La raie Hα (656 nm) ne se décale que de <b>' + U.fr(dl * 1e12, 3) + ' pm</b> !';
        }
      }
    };
  });
})();
