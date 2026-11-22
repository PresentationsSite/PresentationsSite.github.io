/* Soleil — animations de spectres : corps noir, Soleil/Terre, spectre électromagnétique, fenêtre atmosphérique */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, TAU = U.TAU;
  var FONT = 'Outfit, sans-serif';
  function txt(g, s, x, y, col, size, al, w) { g.fillStyle = col; g.font = (w || 400) + ' ' + size + 'px ' + FONT; g.textAlign = al || 'left'; g.fillText(s, x, y); }

  /* ======================================================= Corps noir et loi de Wien */
  S.register('planck', function (root) {
    var W = 900, Hh = 420, st = S.stage(root, W, Hh), g = st.g;
    var T = 5778, absMode = false;
    var X0 = 70, X1 = 860, Y0 = 36, Y1 = 330, LMAX = 3000;
    var ctrl = UI.row(root);
    var sl = UI.slider(ctrl, { label: 'température T', min: Math.log(1000), max: Math.log(30000), step: 'any', value: Math.log(5778), color: '#ffb938',
      fmt: function (v) { return U.fr(Math.exp(v), 0) + ' K'; }, oninput: function (v) { T = Math.exp(v); } });
    var ch = UI.chips(root.appendChild(S.el('div', 'sw-ctrl')), [
      { id: 2700, label: 'Ampoule (2 700 K)' }, { id: 3600, label: 'Bételgeuse (3 600 K)' }, { id: 5778, label: 'Soleil (5 778 K)' }, { id: 12100, label: 'Rigel (12 100 K)' }
    ], { value: 5778, onchange: function (id) { T = parseFloat(id); sl.set(Math.log(T)); } });
    UI.btn(ctrl, 'Échelle : relative', function (e, b) { absMode = !absMode; b.textContent = absMode ? 'Échelle : absolue' : 'Échelle : relative'; });
    var read = UI.readout(root);
    var refPeak = U.planck(U.wien / 12000, 12000);
    function xOf(nm) { return X0 + nm / LMAX * (X1 - X0); }
    var rainbow = null;
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        // zones UV / visible / IR
        var vx0 = xOf(380), vx1 = xOf(750);
        var gv = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l = 380; l <= 750; l += 10) gv.addColorStop((l - 380) / 370, U.rgb(U.wl2rgb(l), 1));
        g.save(); g.globalAlpha = .13; g.fillStyle = gv; g.fillRect(vx0, Y0, vx1 - vx0, Y1 - Y0); g.restore();
        txt(g, 'UV', (X0 + vx0) / 2, Y1 - 10, '#b69cff', 15, 'center', 600);
        txt(g, 'visible', (vx0 + vx1) / 2, Y1 - 10, '#0b0e24', 14, 'center', 600);
        txt(g, 'infrarouge', (vx1 + X1) / 2, Y1 - 10, '#ff8a8a', 15, 'center', 600);
        // axes
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.5;
        g.beginPath(); g.moveTo(X0, Y0); g.lineTo(X0, Y1); g.lineTo(X1, Y1); g.stroke();
        g.fillStyle = '#c9d1f5'; g.font = '14px ' + FONT; g.textAlign = 'center';
        for (var nm = 0; nm <= LMAX; nm += 500) { g.strokeStyle = 'rgba(255,255,255,.07)'; g.beginPath(); g.moveTo(xOf(nm), Y0); g.lineTo(xOf(nm), Y1); g.stroke(); g.fillText(nm, xOf(nm), Y1 + 20); }
        txt(g, 'λ (nm)', X1, Y1 + 40, '#c9d1f5', 14, 'right');
        g.save(); g.translate(26, (Y0 + Y1) / 2); g.rotate(-Math.PI / 2); txt(g, 'intensité spectrale', 0, 0, '#c9d1f5', 14, 'center'); g.restore();
        // courbe
        var peak = U.planck(U.wien / T, T), ref = absMode ? refPeak : peak;
        var col = U.bbRGB(T), pts = [];
        for (var x = X0; x <= X1; x += 2) {
          var lam = Math.max(1, (x - X0) / (X1 - X0) * LMAX) * 1e-9;
          pts.push([x, Y1 - U.planck(lam, T) / ref * (Y1 - Y0 - 40)]);
        }
        function path() { g.beginPath(); g.moveTo(X0, Y1); pts.forEach(function (p) { g.lineTo(p[0], Math.max(p[1], Y0 - 20)); }); g.lineTo(X1, Y1); g.closePath(); }
        g.save(); g.beginPath(); g.rect(X0, Y0, X1 - X0, Y1 - Y0); g.clip();
        path(); g.fillStyle = U.rgb(col, .22); g.fill();
        g.save(); path(); g.clip(); g.fillStyle = gv; g.globalAlpha = .95; g.fillRect(vx0, Y0, vx1 - vx0, Y1 - Y0); g.restore();
        g.strokeStyle = U.rgb(col); g.lineWidth = 3.5; g.shadowColor = U.rgb(col); g.shadowBlur = 14; g.beginPath();
        pts.forEach(function (p, i) { i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); }); g.stroke();
        g.restore();
        // λmax
        var lmax = U.wien / T * 1e9, xm = xOf(lmax);
        if (xm > X0 && xm < X1) {
          g.strokeStyle = '#ff5f6d'; g.lineWidth = 2; g.setLineDash([6, 5]);
          g.beginPath(); g.moveTo(xm, Y1); g.lineTo(xm, Y0 + 30); g.stroke(); g.setLineDash([]);
          var lab = 'λ_max = ' + U.fr(lmax, 0) + ' nm', tw = 130, lx = U.clamp(xm, X0 + tw / 2, X1 - tw / 2);
          g.fillStyle = 'rgba(255,95,109,.2)'; g.fillRect(lx - tw / 2, Y0 + 6, tw, 26); g.strokeStyle = '#ff5f6d'; g.lineWidth = 1; g.strokeRect(lx - tw / 2, Y0 + 6, tw, 26);
          txt(g, lab, lx, Y0 + 25, '#ffb3ba', 16, 'center', 600);
        }
        // pastille de couleur
        var cx = 790, cy = 120, gg = g.createRadialGradient(cx, cy, 4, cx, cy, 52);
        gg.addColorStop(0, '#fff'); gg.addColorStop(.28, U.rgb(col)); gg.addColorStop(.62, U.rgb(col, .45)); gg.addColorStop(1, U.rgb(col, 0));
        g.fillStyle = gg; g.beginPath(); g.arc(cx, cy, 52 + 2 * Math.sin(t * 2), 0, TAU); g.fill();
        txt(g, 'couleur apparente', cx, cy + 74, '#a9b2d6', 14, 'center');
        var P = U.sigma * Math.pow(T, 4);
        read.innerHTML = 'T = <b>' + U.fr(T, 0) + ' K</b> (' + U.fr(T - 273.15, 0) + ' °C) → λ<sub>max</sub> = 2,898×10⁶ / T = <b>' + U.fr(lmax, 0) + ' nm</b> · puissance émise par m² : σT⁴ = <b>' + U.sci(P, 2) + ' W/m²</b>';
      }
    };
  });

  /* ======================================================= Soleil et Terre : deux corps noirs */
  S.register('planck2', function (root) {
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var X0 = 70, X1 = 860, Y0 = 34, Y1 = 310, LA = Math.log10(0.1), LB = Math.log10(100);
    var absMode = false, cur = null, show = { sun: true, earth: true };
    var TS = 5778, TE = 288;
    var ctrl = UI.row(root);
    UI.chips(ctrl, [{ id: 'sun', label: '☀ Soleil (5 778 K)', color: '#ffb938' }, { id: 'earth', label: '🌍 Terre (288 K)', color: '#5cc8ff' }], { multi: true, value: ['sun', 'earth'], onchange: function (id, all) { show.sun = all.indexOf('sun') >= 0; show.earth = all.indexOf('earth') >= 0; } });
    UI.chips(ctrl, [{ id: 'rel', label: 'Normalisé (même hauteur)' }, { id: 'abs', label: 'Valeurs absolues (échelle log)' }], { value: 'rel', onchange: function (id) { absMode = id === 'abs'; } });
    var read = UI.readout(root);
    function xOf(um) { return X0 + (Math.log10(um) - LA) / (LB - LA) * (X1 - X0); }
    function M(lam, T) { return Math.PI * U.planck(lam, T); }
    S.pointer(st, { move: function (x) { cur = Math.pow(10, LA + (U.clamp(x, X0, X1) - X0) / (X1 - X0) * (LB - LA)); }, leave: function () { cur = null; } });
    var LYA = 2, LYB = 15;
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var vx0 = xOf(.38), vx1 = xOf(.75);
        var gv = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l = 380; l <= 750; l += 10) gv.addColorStop((l - 380) / 370, U.rgb(U.wl2rgb(l), 1));
        g.save(); g.globalAlpha = .55; g.fillStyle = gv; g.fillRect(vx0, Y0, vx1 - vx0, Y1 - Y0); g.restore();
        // axes + graduations
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X0, Y0); g.lineTo(X0, Y1); g.lineTo(X1, Y1); g.stroke();
        [[.1, '0,1'], [.2, ''], [.5, '0,5'], [1, '1'], [2, ''], [5, '5'], [10, '10'], [20, ''], [50, '50'], [100, '100']].forEach(function (p) {
          var x = xOf(p[0]); g.strokeStyle = 'rgba(255,255,255,.08)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, Y0); g.lineTo(x, Y1); g.stroke();
          if (p[1]) txt(g, p[1], x, Y1 + 18, '#c9d1f5', 14, 'center');
        });
        txt(g, 'λ (µm), échelle logarithmique', X1, Y1 + 38, '#c9d1f5', 14, 'right');
        // domaines
        var dom = [[.1, .38, 'UV', '#8b6bff'], [.38, .75, '', '#fff'], [.75, 3, 'IR proche', '#ff8a5c'], [3, 100, 'infrarouge thermique', '#ff5f6d']];
        dom.forEach(function (d) {
          var a = xOf(d[0]), b = xOf(d[1]);
          g.fillStyle = d[3]; g.globalAlpha = d[2] ? .22 : 0; g.fillRect(a, Y1 + 46, b - a, 24); g.globalAlpha = 1;
          if (d[2]) txt(g, d[2], (a + b) / 2, Y1 + 63, '#eef1ff', 13, 'center');
        });
        var gb = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l2 = 380; l2 <= 750; l2 += 10) gb.addColorStop((l2 - 380) / 370, U.rgb(U.wl2rgb(l2), 1));
        g.fillStyle = gb; g.fillRect(vx0, Y1 + 46, vx1 - vx0, 24); txt(g, 'visible', (vx0 + vx1) / 2, Y1 + 86, '#eef1ff', 13, 'center', 600);
        // courbes
        var cs = [];
        if (show.sun) cs.push({ T: TS, col: [255, 170, 40], n: 'Soleil' });
        if (show.earth) cs.push({ T: TE, col: [92, 200, 255], n: 'Terre' });
        function yOf(T, lam) {
          var v = M(lam, T);
          if (!absMode) return Y1 - v / M(U.wien / T, T) * (Y1 - Y0 - 30);
          var lv = Math.log10(Math.max(v, 1e-30)); return Y1 - (lv - LYA) / (LYB - LYA) * (Y1 - Y0);
        }
        cs.forEach(function (c) {
          g.save(); g.beginPath(); g.rect(X0, Y0, X1 - X0, Y1 - Y0); g.clip();
          g.beginPath(); g.moveTo(X0, Y1);
          for (var x = X0; x <= X1; x += 2) { var um = Math.pow(10, LA + (x - X0) / (X1 - X0) * (LB - LA)); g.lineTo(x, yOf(c.T, um * 1e-6)); }
          g.lineTo(X1, Y1); g.closePath();
          var gr = g.createLinearGradient(0, Y0, 0, Y1); gr.addColorStop(0, U.rgb(c.col, .5)); gr.addColorStop(1, U.rgb(c.col, .04));
          g.fillStyle = gr; g.fill();
          g.strokeStyle = U.rgb(c.col); g.lineWidth = 3.2; g.shadowColor = U.rgb(c.col); g.shadowBlur = 12; g.stroke();
          g.restore();
          var lm = U.wien / c.T * 1e6, xm = xOf(lm), ym = yOf(c.T, lm * 1e-6);
          g.fillStyle = '#fff'; g.beginPath(); g.arc(xm, ym, 5, 0, TAU); g.fill();
          g.strokeStyle = 'rgba(255,255,255,.6)'; g.setLineDash([4, 4]); g.lineWidth = 1.2; g.beginPath(); g.moveTo(xm, ym + 6); g.lineTo(xm, Y1); g.stroke(); g.setLineDash([]);
          txt(g, c.n + ' : λ_max ≈ ' + U.fr(lm, lm < 1 ? 2 : 0) + ' µm', xm + (c.T > 1000 ? -10 : 12), ym - 12, U.rgb(c.col), 16, c.T > 1000 ? 'right' : 'left', 600);
        });
        g.save(); g.translate(24, (Y0 + Y1) / 2); g.rotate(-Math.PI / 2);
        txt(g, absMode ? 'M_λ en W·m⁻³ (échelle log)' : 'intensité spectrale (relative)', 0, 0, '#c9d1f5', 14, 'center'); g.restore();
        if (cur != null) {
          var xc = xOf(cur); g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 1.2; g.beginPath(); g.moveTo(xc, Y0); g.lineTo(xc, Y1); g.stroke();
          var s = 'λ = ' + U.fr(cur, cur < 1 ? 2 : 1) + ' µm';
          if (show.sun) s += ' · Soleil : ' + (absMode ? U.sci(M(cur * 1e-6, TS), 1) + ' W/m³' : U.fr(M(cur * 1e-6, TS) / M(U.wien / TS, TS) * 100, 0) + ' %');
          if (show.earth) s += ' · Terre : ' + (absMode ? U.sci(M(cur * 1e-6, TE), 1) + ' W/m³' : U.fr(M(cur * 1e-6, TE) / M(U.wien / TE, TE) * 100, 0) + ' %');
          read.innerHTML = s;
        } else read.innerHTML = 'Le <b>Soleil</b> émet surtout dans le <b>visible</b> ; la <b>Terre</b>, bien plus froide, dans l’<b>infrarouge</b>. Survole le graphe pour lire les valeurs.';
      }
    };
  });

  /* ======================================================= Le spectre électromagnétique */
  S.register('spectre-em', function (root) {
    var W = 900, Hh = 370, st = S.stage(root, W, Hh), g = st.g;
    var X0 = 40, X1 = 860, LA = -14, LB = 8, lam = 5e-7;
    var dom = [
      [-14, -11, 'rayons γ', '#c77dff'], [-11, -8, 'rayons X', '#7b61ff'], [-8, Math.log10(3.8e-7), 'UV', '#5b8cff'],
      [Math.log10(3.8e-7), Math.log10(7.5e-7), '', '#fff'], [Math.log10(7.5e-7), -3, 'infrarouge', '#ff6f61'], [-3, 0, 'micro-ondes', '#ff9f43'], [0, 8, 'ondes radio', '#f7c948']
    ];
    var ex = [
      [1e-12, 'noyaux radioactifs (γ)'], [1e-10, 'radiographie (X), taille d’un atome'], [2.5e-7, 'UV du Soleil (bronzage)'], [5e-7, 'maximum du Soleil (vert)'],
      [9.4e-6, 'corps humain, Terre (IR)'], [0.125, 'Wi-Fi, four micro-ondes'], [3, 'radio FM (100 MHz)'], [1500, 'radio AM (200 kHz)']
    ];
    function xOf(m) { return X0 + (Math.log10(m) - LA) / (LB - LA) * (X1 - X0); }
    var ctrl = UI.row(root);
    UI.chips(ctrl, [{ id: 1e-12, label: 'γ' }, { id: 1e-10, label: 'rayons X' }, { id: 2.5e-7, label: 'UV' }, { id: 5e-7, label: '☀ Soleil' }, { id: 9.4e-6, label: '🌍 Terre' }, { id: 0.125, label: 'Wi-Fi' }, { id: 3, label: 'radio FM' }],
      { onchange: function (id) { lam = parseFloat(id); } });
    var read = UI.readout(root);
    S.pointer(st, { down: function (x) { lam = Math.pow(10, LA + (U.clamp(x, X0, X1) - X0) / (X1 - X0) * (LB - LA)); }, drag: function (x) { lam = Math.pow(10, LA + (U.clamp(x, X0, X1) - X0) / (X1 - X0) * (LB - LA)); } });
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        // axe
        g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 2; g.beginPath(); g.moveTo(X0, 52); g.lineTo(X1, 52); g.stroke();
        for (var e = LA; e <= LB; e += 2) {
          var x = X0 + (e - LA) / (LB - LA) * (X1 - X0); g.beginPath(); g.moveTo(x, 46); g.lineTo(x, 58); g.stroke();
          g.fillStyle = '#c9d1f5'; g.font = '14px ' + FONT; g.textAlign = 'center'; g.fillText('10', x - 5, 38); g.font = '10px ' + FONT; g.fillText(e, x + 8, 32);
        }
        txt(g, 'longueur d’onde λ (en mètres)', 450, 14, '#c9d1f5', 14, 'center');
        // domaines
        dom.forEach(function (d) {
          var a = X0 + (d[0] - LA) / (LB - LA) * (X1 - X0), b = X0 + (d[1] - LA) / (LB - LA) * (X1 - X0);
          g.fillStyle = d[3]; g.globalAlpha = d[2] ? .26 : 1; g.fillRect(a, 72, b - a, 56); g.globalAlpha = 1;
          g.strokeStyle = 'rgba(255,255,255,.25)'; g.strokeRect(a, 72, b - a, 56);
          if (d[2]) txt(g, d[2], (a + b) / 2, 106, '#fff', 16, 'center', 600);
        });
        var vx0 = xOf(3.8e-7), vx1 = xOf(7.5e-7), gv = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l = 380; l <= 750; l += 10) gv.addColorStop((l - 380) / 370, U.rgb(U.wl2rgb(l), 1));
        g.fillStyle = gv; g.fillRect(vx0, 72, vx1 - vx0, 56);
        // zoom visible
        var zx0 = 150, zx1 = 750, zy = 200;
        g.fillStyle = 'rgba(255,255,255,.1)'; g.beginPath(); g.moveTo(vx0, 128); g.lineTo(vx1, 128); g.lineTo(zx1, zy); g.lineTo(zx0, zy); g.closePath(); g.fill();
        var gz = g.createLinearGradient(zx0, 0, zx1, 0);
        for (var l2 = 380; l2 <= 750; l2 += 10) gz.addColorStop((l2 - 380) / 370, U.rgb(U.wl2rgb(l2), 1));
        g.fillStyle = gz; g.fillRect(zx0, zy, zx1 - zx0, 36);
        g.fillStyle = '#c9d1f5'; g.font = '14px ' + FONT; g.textAlign = 'center';
        for (var nm = 400; nm <= 700; nm += 50) { var xz = zx0 + (nm - 380) / 370 * (zx1 - zx0); g.fillText(nm, xz, zy + 56); g.beginPath(); g.moveTo(xz, zy + 36); g.lineTo(xz, zy + 42); g.stroke(); }
        txt(g, 'nm', zx1 + 26, zy + 56, '#c9d1f5', 14, 'left');
        // curseur
        var xc = xOf(lam);
        var gl = g.createLinearGradient(0, 40, 0, 300); gl.addColorStop(0, 'rgba(255,255,255,.95)'); gl.addColorStop(1, 'rgba(255,255,255,.2)');
        g.strokeStyle = gl; g.lineWidth = 2.5; g.shadowColor = '#fff'; g.shadowBlur = 10; g.beginPath(); g.moveTo(xc, 42); g.lineTo(xc, 128); g.stroke(); g.shadowBlur = 0;
        g.fillStyle = '#fff'; g.beginPath(); g.moveTo(xc, 62); g.lineTo(xc - 7, 48); g.lineTo(xc + 7, 48); g.fill();
        if (lam > 3.8e-7 && lam < 7.5e-7) {
          var xv = zx0 + (lam * 1e9 - 380) / 370 * (zx1 - zx0); g.beginPath(); g.moveTo(xv, zy - 6); g.lineTo(xv, zy + 40); g.stroke();
        }
        // lecture
        var f = U.c / lam, E = U.h * f / 1.602176634e-19, name = '';
        dom.forEach(function (d) { var m = Math.log10(lam); if (m >= d[0] && m < d[1]) name = d[2] || 'lumière visible'; });
        var near = ex.slice().sort(function (a, b) { return Math.abs(Math.log(a[0] / lam)) - Math.abs(Math.log(b[0] / lam)); })[0];
        var lamTxt = lam < 1e-6 ? U.fr(lam * 1e9, lam < 1e-9 ? 3 : 1) + ' nm' : lam < 1e-3 ? U.fr(lam * 1e6, 1) + ' µm' : lam < 1 ? U.fr(lam * 100, 1) + ' cm' : U.fr(lam, 1) + ' m';
        txt(g, 'λ = ' + lamTxt + '   ·   ' + name, 450, 300, '#ffd166', 22, 'center', 600);
        txt(g, 'f = c/λ = ' + U.sci(f, 2) + ' Hz   ·   E = hc/λ = ' + U.sci(E, 2) + ' eV', 450, 328, '#eef1ff', 16, 'center');
        if (Math.abs(Math.log10(near[0] / lam)) < 0.35) txt(g, '≈ ' + near[1], 450, 354, '#a9b2d6', 15, 'center');
        read.innerHTML = 'Glisse sur le spectre : <b>plus λ est petite, plus la fréquence et l’énergie des photons sont grandes</b>.';
      }
    };
  });

  /* ======================================================= Fenêtre atmosphérique et gaz à effet de serre */
  S.register('fenetre', function (root) {
    var W = 900, Hh = 450, st = S.stage(root, W, Hh), g = st.g;
    var X0 = 70, X1 = 860, LA = Math.log10(0.2), LB = Math.log10(60);
    function smooth(a, b, x) { var t = U.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
    // bandes : [λ centre µm, force au centre, demi-largeur µm] ; tau = c·S·exp(-|λ-λ0|/w) (les ailes s'élargissent avec la concentration)
    var GAS = {
      h2o: { label: 'H₂O', col: '#37d6ff', bands: [[.94, 8, .03], [1.13, 15, .04], [1.38, 300, .05], [1.87, 400, .07], [2.7, 5000, .12], [6.3, 3000, .35]],
        extra: function (l) { return 40 * smooth(13.5, 24, l) + 0.45 * smooth(7, 8.5, l) * (1 - smooth(12.5, 14.5, l)); } },
      co2: { label: 'CO₂', col: '#ffc43a', bands: [[2.0, 6, .03], [2.7, 40, .04], [4.3, 2000, .1], [15, 1000, .35]] },
      ch4: { label: 'CH₄', col: '#7dffb0', bands: [[3.3, 40, .08], [7.66, 200, .2]] },
      o3: { label: 'O₃', col: '#ff6fb5', bands: [[9.6, 15, .25], [0.26, 5000, .05], [0.6, .15, .06]], extra: function (l) { return 80 * (1 - smooth(0.27, 0.34, l)); } },
      n2o: { label: 'N₂O', col: '#c3a6ff', bands: [[4.5, 100, .06], [7.8, 40, .15], [17, 40, .3]] }
    };
    var ids = Object.keys(GAS), ppm = 420;
    var ctrl = UI.row(root);
    var chips = UI.chips(ctrl, ids.map(function (k) { return { id: k, label: GAS[k].label, color: GAS[k].col }; }), { multi: true, value: ['h2o', 'co2'] });
    var sl = UI.slider(ctrl, { label: 'CO₂', min: 0, max: 1200, step: 10, value: 420, color: '#ffc43a', fmt: function (v) { return U.fr(v, 0) + ' ppm'; }, oninput: function (v) { ppm = v; } });
    UI.btn(ctrl, 'Tout activer', function () { ids.forEach(function (k) { chips.set(k, true); }); }, 'main');
    UI.btn(ctrl, 'Aucun gaz', function () { ids.forEach(function (k) { chips.set(k, false); }); });
    var read = UI.readout(root);
    function conc(k) { return k === 'co2' ? ppm / 420 : 1; }
    function tau(k, l) {
      var G = GAS[k], tt = 0, c = conc(k); if (c <= 0) return 0;
      G.bands.forEach(function (b) { tt += c * b[1] * Math.exp(-Math.abs(l - b[0]) / b[2]); });
      if (G.extra) tt += c * G.extra(l);
      return tt;
    }
    function absK(k, l) { return 1 - Math.exp(-tau(k, l)); }
    function transTot(l) { var tt = 0; ids.forEach(function (k) { if (chips.has(k)) tt += tau(k, l); }); return Math.exp(-tt); }
    function xOf(um) { return X0 + (Math.log10(um) - LA) / (LB - LA) * (X1 - X0); }
    var Y0 = 30, Y1 = 222, RY = 296, RH = 22;
    function Mrel(l, T) { var lm = U.wien / T; return U.planck(l * 1e-6, T) / U.planck(lm, T); }
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var vx0 = xOf(.38), vx1 = xOf(.75), gv = g.createLinearGradient(vx0, 0, vx1, 0);
        for (var l = 380; l <= 750; l += 10) gv.addColorStop((l - 380) / 370, U.rgb(U.wl2rgb(l), 1));
        g.save(); g.globalAlpha = .45; g.fillStyle = gv; g.fillRect(vx0, Y0, vx1 - vx0, Y1 - Y0); g.restore();
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X0, Y0); g.lineTo(X0, Y1); g.lineTo(X1, Y1); g.stroke();
        [.2, .5, 1, 2, 5, 10, 20, 50].forEach(function (u) { var x = xOf(u); g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, Y0); g.lineTo(x, Y1); g.stroke(); txt(g, u, x, Y1 + 17, '#c9d1f5', 14, 'center'); });
        txt(g, 'λ (µm)', X1, Y1 + 38, '#c9d1f5', 14, 'right');
        var curves = [[5778, [255, 170, 40], 'rayonnement solaire'], [288, [255, 95, 109], 'rayonnement terrestre (288 K)']];
        var esc = 0, tot = 0;
        curves.forEach(function (c, ci) {
          var T = c[0], col = c[1], N = 360, pts = [];
          for (var i = 0; i <= N; i++) {
            var lg = LA + (LB - LA) * i / N, um = Math.pow(10, lg), m = Mrel(um, T), tr = transTot(um);
            pts.push([xOf(um), m, tr, um]);
          }
          function yy(m) { return Y1 - m * (Y1 - Y0 - 24); }
          // courbe d'origine (pâle) puis partie transmise (vive)
          g.beginPath(); g.moveTo(pts[0][0], Y1); pts.forEach(function (p) { g.lineTo(p[0], yy(p[1])); }); g.lineTo(pts[N][0], Y1); g.closePath();
          g.fillStyle = U.rgb(col, .14); g.fill();
          g.beginPath(); g.moveTo(pts[0][0], Y1); pts.forEach(function (p) { g.lineTo(p[0], yy(p[1] * p[2])); }); g.lineTo(pts[N][0], Y1); g.closePath();
          var gr = g.createLinearGradient(0, Y0, 0, Y1); gr.addColorStop(0, U.rgb(col, .85)); gr.addColorStop(1, U.rgb(col, .25));
          g.fillStyle = gr; g.fill();
          g.strokeStyle = U.rgb(col); g.lineWidth = 2.5; g.shadowColor = U.rgb(col); g.shadowBlur = 10; g.beginPath();
          pts.forEach(function (p, i) { i ? g.lineTo(p[0], yy(p[1])) : g.moveTo(p[0], yy(p[1])); }); g.stroke(); g.shadowBlur = 0;
          if (ci === 1) { for (var j = 0; j < N; j++) { var um2 = pts[j][3]; var w = um2 * (Math.log(10) * (LB - LA) / N); tot += pts[j][1] * w; esc += pts[j][1] * pts[j][2] * w; } }
        });
        txt(g, 'solaire', xOf(.5) - 4, Y0 + 12, '#ffcf70', 15, 'right', 600);
        txt(g, 'Terre', xOf(10), Y0 + 12, '#ff9aa4', 15, 'center', 600);
        // lignes d'absorption par gaz
        txt(g, 'Absorption de l’atmosphère, gaz par gaz', X0, RY - 10, '#a9b2d6', 14, 'left');
        ids.forEach(function (k, i) {
          var y = RY + i * (RH + 3), on = chips.has(k);
          g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(X0, y, X1 - X0, RH);
          if (on) {
            var cc = GAS[k].col;
            for (var x = X0; x < X1; x += 2) {
              var um = Math.pow(10, LA + (x - X0) / (X1 - X0) * (LB - LA)), a = absK(k, um);
              if (a > .02) { g.fillStyle = cc; g.globalAlpha = a; g.fillRect(x, y, 2.2, RH); }
            }
            g.globalAlpha = 1;
          }
          txt(g, GAS[k].label, X0 - 8, y + 16, on ? GAS[k].col : '#6b7399', 15, 'right', 600);
        });
        var frac = tot > 0 ? esc / tot : 1;
        read.innerHTML = 'Part du rayonnement terrestre qui <b>s’échappe directement</b> vers l’espace : <b>' + U.fr(frac * 100, 0) + ' %</b>. Le reste est absorbé puis réémis, en partie vers le sol. <span style="opacity:.7">(modèle qualitatif : positions des bandes réelles, intensités indicatives)</span>';
      }
    };
  });
})();
