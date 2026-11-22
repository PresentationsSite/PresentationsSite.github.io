/* Soleil — globe 3D de l'éclairement moyen et planisphère de la durée du jour
   (utilise le masque terre/mer de geo.js) */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, A = S.astro, TAU = U.TAU, D2R = U.D2R;
  var FONT = 'Outfit, sans-serif';
  function txt(g, s, x, y, col, size, al, w) { U.rich(g, s, x, y, col, size, al, w); }
  var LAROCHELLE = { lat: 46.16, lon: -1.15 };

  /* palettes (valeur normalisée 0..1 -> [r,g,b]) */
  var PAL_Q = [[0, [8, 6, 22]], [.18, [88, 18, 72]], [.4, [190, 40, 60]], [.62, [250, 110, 30]], [.82, [255, 190, 60]], [1, [255, 250, 200]]];
  var PAL_D = [[0, [10, 12, 44]], [.25, [44, 66, 160]], [.5, [96, 156, 214]], [.75, [255, 204, 96]], [1, [255, 246, 196]]];
  function pal(stops, f) {
    f = U.clamp(f, 0, 1);
    for (var i = 1; i < stops.length; i++) if (f <= stops[i][0]) {
      var a = stops[i - 1], b = stops[i], u = (f - a[0]) / (b[0] - a[0]);
      return [U.lerp(a[1][0], b[1][0], u), U.lerp(a[1][1], b[1][1], u), U.lerp(a[1][2], b[1][2], u)];
    }
    return stops[stops.length - 1][1];
  }
  function colorbar(g, x, y, w, h, stops, ticks, vmax, fmt) {
    var gr = g.createLinearGradient(0, y + h, 0, y);
    for (var i = 0; i <= 20; i++) gr.addColorStop(i / 20, U.rgb(pal(stops, i / 20)));
    g.fillStyle = gr; g.fillRect(x, y, w, h);
    g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 1; g.strokeRect(x, y, w, h);
    ticks.forEach(function (v) {
      var yy = y + h - v / vmax * h; g.beginPath(); g.moveTo(x + w, yy); g.lineTo(x + w + 6, yy); g.stroke();
      g.fillStyle = '#c9d1f5'; g.font = '13px ' + FONT; g.textAlign = 'left'; g.fillText(fmt(v), x + w + 10, yy + 4);
    });
  }
  var DATES = [[80, '21 mars'], [172, '21 juin'], [265, '22 sept.'], [355, '21 déc.']];
  function hm(dl) { var h = Math.floor(dl), m = Math.round((dl - h) * 60); if (m === 60) { h++; m = 0; } return h + ' h ' + (m < 10 ? '0' : '') + m; }

  /* ======================================================= Globe 3D : éclairement moyen au sommet de l'atmosphère */
  S.register('globe-insol', function (root) {
    var W = 900, Hh = 440, st = S.stage(root, W, Hh), g = st.g;
    var annual = root.getAttribute('data-mode') === 'annuel';
    var day = 172, play = root.getAttribute('data-play') === '1', auto = true, lastDrag = -9, last = 0;
    if (play) day = 1;
    var lon0 = -10, tilt = 24, dirty = true;
    var ctrl = UI.row(root), sd = null, pb = null;
    if (!annual) {
      sd = UI.slider(ctrl, { label: 'date', min: 1, max: 365, step: 1, value: day, color: '#ffc43a', w: 7.5, fmt: function (v) { return A.dateStr(v); }, oninput: function (v) { day = v; play = false; pb.textContent = '▶ Une année'; dirty = true; } });
      pb = UI.btn(ctrl, play ? '❚❚ Pause' : '▶ Une année', function (e, b) { play = !play; b.textContent = play ? '❚❚ Pause' : '▶ Une année'; }, 'main');
      UI.chips(ctrl, DATES.map(function (d) { return { id: d[0], label: d[1] }; }), { onchange: function (id) { day = parseFloat(id); sd.set(day); play = false; pb.textContent = '▶ Une année'; dirty = true; } });
    }
    UI.btn(ctrl, '⟳ Rotation', function (e, b) { auto = !auto; b.classList.toggle('main', auto); }, 'main');
    var read = UI.readout(root);
    // tables d'éclairement par latitude (1°)
    var NL = 181, Qd = new Float32Array(NL), Qa = new Float32Array(NL), Qshow = Qd, dayDone = -1;
    function fillDay(n) { for (var i = 0; i < NL; i++) Qd[i] = A.Q((i - 90) * D2R, n); dayDone = n; }
    (function () { for (var i = 0; i < NL; i++) { var s = 0, c = 0; for (var n = 1; n <= 365; n += 6) { s += A.Q((i - 90) * D2R, n); c++; } Qa[i] = s / c; } })();
    var N = 300, off = document.createElement('canvas'); off.width = off.height = N; var og = off.getContext('2d'), img = og.createImageData(N, N);
    var geo = [], R0 = N / 2 - 1;
    for (var j = 0; j < N; j++) for (var i = 0; i < N; i++) {
      var u = (i + .5 - N / 2) / R0, v = -(j + .5 - N / 2) / R0, r2 = u * u + v * v;
      geo.push(r2 <= 1 ? [u, v, Math.sqrt(1 - r2)] : null);
    }
    var VMAX = 560;
    function render() {
      var Qt = annual ? Qa : Qd, d = img.data, sT = Math.sin(tilt * D2R), cT = Math.cos(tilt * D2R);
      for (var p = 0; p < geo.length; p++) {
        var q = geo[p], o = p * 4;
        if (!q) { d[o + 3] = 0; continue; }
        var yy = q[1] * cT + q[2] * sT, zz = -q[1] * sT + q[2] * cT;
        var la = Math.asin(U.clamp(yy, -1, 1)) / D2R, lo = lon0 + Math.atan2(q[0], zz) / D2R;
        var Q = Qt[Math.round(U.clamp(la, -90, 90)) + 90], c = pal(PAL_Q, Q / VMAX);
        var land = S.geo.land(la, lo), dl = 0.9, cl = Math.max(.25, Math.cos(la * D2R));
        var coast = (S.geo.land(la + dl, lo) !== land) || (S.geo.land(la, lo + dl / cl) !== land);
        var k = (land ? 1 : .76) * (.42 + .58 * Math.pow(q[2], .5));
        var r = c[0] * k, gg = c[1] * k, b = c[2] * k;
        if (coast) { r = r * .35 + 255 * .65; gg = gg * .35 + 255 * .65; b = b * .35 + 255 * .65; }
        // graticule : tous les 30°, équateur, tropiques, cercles polaires
        function nearL(x0, w) { return Math.abs(la - x0) < w; }
        var lw = Math.abs(((lo % 30) + 30) % 30 - 0); lw = Math.min(lw, 30 - lw);
        if (nearL(0, .45)) { r = 255; gg = 255; b = 255; }
        else if (nearL(23.44, .4) || nearL(-23.44, .4)) { r = 255; gg = 170; b = 60; }
        else if (nearL(66.56, .4) || nearL(-66.56, .4)) { r = 90; gg = 220; b = 255; }
        else if (nearL(30, .3) || nearL(-30, .3) || nearL(60, .3) || nearL(-60, .3) || (lw < .35 / cl && Math.abs(la) < 85)) { r = r * .72 + 255 * .28; gg = gg * .72 + 255 * .28; b = b * .72 + 255 * .28; }
        d[o] = r; d[o + 1] = gg; d[o + 2] = b; d[o + 3] = 255;
      }
      og.putImageData(img, 0, 0);
    }
    var drag = null;
    S.pointer(st, {
      down: function (x, y) { drag = [x, y]; auto = false; },
      drag: function (x, y) { if (!drag) return; lon0 -= (x - drag[0]) * .45; tilt = U.clamp(tilt + (y - drag[1]) * .35, -70, 70); drag = [x, y]; dirty = true; },
      up: function () { drag = null; lastDrag = performance.now() / 1000; }
    });
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { day += dt * 28; if (day > 365) day -= 365; sd.set(day); dirty = true; }
        if (auto && !drag) { lon0 += dt * 9; dirty = true; }
        if (!annual && Math.round(day) !== dayDone) fillDay(Math.round(day));
        if (annual && dayDone < 0) { dayDone = 0; }
        if (dirty || st.dirty) { render(); dirty = false; st.dirty = false; }
        g.clearRect(0, 0, W, Hh);
        var gx = 300, gy = 222, R = 190;
        var halo = g.createRadialGradient(gx, gy, R * .95, gx, gy, R * 1.22); halo.addColorStop(0, 'rgba(120,180,255,.45)'); halo.addColorStop(1, 'rgba(120,180,255,0)');
        g.fillStyle = halo; g.beginPath(); g.arc(gx, gy, R * 1.22, 0, TAU); g.fill();
        g.drawImage(off, gx - R, gy - R, 2 * R, 2 * R);
        // colonne latérale : échelle
        txt(g, 'Éclairement moyen', 600, 40, '#eef1ff', 15, 'left', 600); txt(g, '(W/m², moyenne sur 24 h)', 600, 58, '#a9b2d6', 13, 'left');
        colorbar(g, 600, 76, 22, 290, PAL_Q, [0, 100, 200, 300, 400, 500], VMAX, function (v) { return v + (v === 500 ? '' : ''); });
        txt(g, 'au sommet de l’atmosphère', 600, 392, '#a9b2d6', 13, 'left');
        // profil selon la latitude
        var PX0 = 730, PX1 = 880, PY0 = 76, PY1 = 366;
        g.strokeStyle = 'rgba(255,255,255,.4)'; g.lineWidth = 1; g.beginPath(); g.moveTo(PX0, PY0); g.lineTo(PX0, PY1); g.lineTo(PX1, PY1); g.stroke();
        txt(g, 'selon la latitude', (PX0 + PX1) / 2, 58, '#a9b2d6', 13, 'center');
        [90, 60, 30, 0, -30, -60, -90].forEach(function (la) { var y = PY0 + (90 - la) / 180 * (PY1 - PY0); g.strokeStyle = 'rgba(255,255,255,.08)'; g.beginPath(); g.moveTo(PX0, y); g.lineTo(PX1, y); g.stroke(); txt(g, Math.abs(la) + '°' + (la > 0 ? 'N' : la < 0 ? 'S' : ''), PX0 - 6, y + 4, '#c9d1f5', 11, 'right'); });
        if (!annual) { g.strokeStyle = 'rgba(255,255,255,.4)'; g.setLineDash([4, 4]); g.lineWidth = 1.4; g.beginPath(); for (var i = 0; i < NL; i++) { var x = PX0 + Qa[i] / VMAX * (PX1 - PX0), y = PY0 + (180 - i) / 180 * (PY1 - PY0); i ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); g.setLineDash([]); }
        g.strokeStyle = '#ffc43a'; g.lineWidth = 2.8; g.shadowColor = '#ffc43a'; g.shadowBlur = 8; g.beginPath();
        var Qt = annual ? Qa : Qd; for (var i2 = 0; i2 < NL; i2++) { var x2 = PX0 + Qt[i2] / VMAX * (PX1 - PX0), y2 = PY0 + (180 - i2) / 180 * (PY1 - PY0); i2 ? g.lineTo(x2, y2) : g.moveTo(x2, y2); } g.stroke(); g.shadowBlur = 0;
        // La Rochelle
        var yr = PY0 + (90 - LAROCHELLE.lat) / 180 * (PY1 - PY0), xr = PX0 + Qt[Math.round(LAROCHELLE.lat) + 90] / VMAX * (PX1 - PX0);
        g.fillStyle = '#fff'; g.beginPath(); g.arc(xr, yr, 4, 0, TAU); g.fill(); txt(g, 'La Rochelle', xr + 8, yr - 6, '#fff', 12, 'left', 600);
        txt(g, annual ? 'Moyenne sur une année' : A.dateStr(day), 20, 34, '#ffd166', 24, 'left', 600);
        txt(g, 'glisser pour faire tourner le globe', 20, 420, '#7f89b3', 13, 'left');
        var v = function (la) { return U.fr(Qt[Math.round(la) + 90], 0); };
        read.innerHTML = (annual ? 'Moyenne annuelle' : 'Le ' + A.dateStr(day)) + ' : équateur <b>' + v(0) + '</b> · La Rochelle (46° N) <b>' + v(LAROCHELLE.lat) + '</b> · pôle Nord <b>' + v(90) + '</b> · pôle Sud <b>' + v(-90) + '</b> W/m²';
      }
    };
  });

  /* ======================================================= Planisphère : durée du jour */
  S.register('duree-carte', function (root) {
    var W = 900, Hh = 440, st = S.stage(root, W, Hh), g = st.g;
    var day = 172, play = false, last = 0, hov = null, dirty = true;
    var ctrl = UI.row(root);
    var sd = UI.slider(ctrl, { label: 'date', min: 1, max: 365, step: 1, value: day, color: '#ffc43a', w: 7.5, fmt: function (v) { return A.dateStr(v); }, oninput: function (v) { day = v; play = false; pb.textContent = '▶ Une année'; dirty = true; } });
    var pb = UI.btn(ctrl, '▶ Une année', function (e, b) { play = !play; b.textContent = play ? '❚❚ Pause' : '▶ Une année'; }, 'main');
    UI.chips(ctrl, DATES.map(function (d) { return { id: d[0], label: d[1] }; }), { onchange: function (id) { day = parseFloat(id); sd.set(day); play = false; pb.textContent = '▶ Une année'; dirty = true; } });
    var read = UI.readout(root);
    var MX0 = 46, MY0 = 12, MW = 780, MH = 395, MR = 360, MC = 720;
    var off = document.createElement('canvas'); off.width = MC; off.height = MR; var og = off.getContext('2d'), img = og.createImageData(MC, MR);
    var mask = null, coast = null, dayDone = -1, dl = new Float32Array(MR);
    function build() {
      mask = S.geo.mask(); coast = new Uint8Array(MC * MR);
      for (var y = 0; y < MR; y++) for (var x = 0; x < MC; x++) { var m = mask[y * MC + x]; if ((x < MC - 1 && mask[y * MC + x + 1] !== m) || (y < MR - 1 && mask[(y + 1) * MC + x] !== m)) coast[y * MC + x] = 1; }
    }
    function render(n) {
      if (!mask) build();
      var dec = A.dec(n), d = img.data;
      for (var y = 0; y < MR; y++) dl[y] = A.dayLen(U.clamp(90 - (y + .5) * .5, -89.9, 89.9) * D2R, dec);
      for (var y2 = 0; y2 < MR; y2++) {
        var c = pal(PAL_D, dl[y2] / 24);
        for (var x = 0; x < MC; x++) {
          var o = (y2 * MC + x) * 4, k = mask[y2 * MC + x] ? 1 : .72, r = c[0] * k, gg = c[1] * k, b = c[2] * k;
          if (coast[y2 * MC + x]) { r = r * .3 + 255 * .7; gg = gg * .3 + 255 * .7; b = b * .3 + 255 * .7; }
          d[o] = r; d[o + 1] = gg; d[o + 2] = b; d[o + 3] = 255;
        }
      }
      og.putImageData(img, 0, 0); dayDone = n;
    }
    function xy(lat, lon) { return [MX0 + (lon + 180) / 360 * MW, MY0 + (90 - lat) / 180 * MH]; }
    S.pointer(st, { move: function (x, y) { hov = (x > MX0 && x < MX0 + MW && y > MY0 && y < MY0 + MH) ? [90 - (y - MY0) / MH * 180, (x - MX0) / MW * 360 - 180] : null; }, leave: function () { hov = null; } });
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { day += dt * 28; if (day > 365) day -= 365; sd.set(day); dirty = true; }
        var n = Math.round(day); if (n !== dayDone || dirty) { render(n); dirty = false; }
        g.clearRect(0, 0, W, Hh);
        g.imageSmoothingEnabled = true; g.drawImage(off, MX0, MY0, MW, MH);
        g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 1; g.strokeRect(MX0, MY0, MW, MH);
        // graticule et parallèles remarquables
        [60, 30, 0, -30, -60].forEach(function (la) { var y = xy(la, 0)[1]; g.strokeStyle = la === 0 ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.18)'; g.lineWidth = 1; g.beginPath(); g.moveTo(MX0, y); g.lineTo(MX0 + MW, y); g.stroke(); txt(g, Math.abs(la) + '°' + (la > 0 ? ' N' : la < 0 ? ' S' : ''), MX0 - 4, y + 4, '#c9d1f5', 12, 'right'); });
        [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].forEach(function (lo) { var x = xy(0, lo)[0]; g.strokeStyle = 'rgba(255,255,255,.1)'; g.beginPath(); g.moveTo(x, MY0); g.lineTo(x, MY0 + MH); g.stroke(); });
        [[23.44, 'tropique'], [-23.44, 'tropique'], [66.56, 'cercle polaire'], [-66.56, 'cercle polaire']].forEach(function (p) {
          var y = xy(p[0], 0)[1]; g.strokeStyle = 'rgba(255,214,150,.75)'; g.setLineDash([6, 6]); g.lineWidth = 1.2; g.beginPath(); g.moveTo(MX0, y); g.lineTo(MX0 + MW, y); g.stroke(); g.setLineDash([]);
          txt(g, p[1], MX0 + MW - 6, y - 4, '#ffe6bf', 12, 'right', 600);
        });
        // isoligne 12 h et lignes de 6 h et 18 h
        [6, 12, 18].forEach(function (T) {
          for (var y = 1; y < MR; y++) if ((dl[y - 1] - T) * (dl[y] - T) < 0) {
            var yy = MY0 + (y) / MR * MH; g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 1.6; g.setLineDash([2, 4]); g.beginPath(); g.moveTo(MX0, yy); g.lineTo(MX0 + MW, yy); g.stroke(); g.setLineDash([]);
            U.rich(g, T + ' h', MX0 + 8, yy - 4, '#fff', 13, 'left', 700, 'rgba(5,7,24,.8)');
          }
        });
        // La Rochelle
        var lr = xy(LAROCHELLE.lat, LAROCHELLE.lon), dec = A.dec(day), dLR = A.dayLen(LAROCHELLE.lat * D2R, dec);
        g.fillStyle = '#ff5f6d'; g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(lr[0], lr[1], 5, 0, TAU); g.fill(); g.stroke();
        U.rich(g, 'La Rochelle : ' + hm(dLR), lr[0] + 10, lr[1] - 8, '#fff', 14, 'left', 700, 'rgba(5,7,24,.85)');
        colorbar(g, 850, 44, 18, 340, PAL_D, [0, 6, 12, 18, 24], 24, function (v) { return v + ' h'; });
        txt(g, 'durée du jour', 859, 30, '#c9d1f5', 12, 'center', 600);
        var txtD = 'Le ' + A.dateStr(day) + ' : La Rochelle <b>' + hm(dLR) + '</b> · équateur <b>' + hm(A.dayLen(0, dec)) + '</b> · 66,6° N <b>' + hm(A.dayLen(66.56 * D2R, dec)) + '</b> · 66,6° S <b>' + hm(A.dayLen(-66.56 * D2R, dec)) + '</b>';
        if (hov) { var dd = A.dayLen(U.clamp(hov[0], -89.9, 89.9) * D2R, dec); txtD = 'Latitude ' + U.fr(Math.abs(hov[0]), 1) + '° ' + (hov[0] >= 0 ? 'N' : 'S') + ' le ' + A.dateStr(day) + ' : jour de <b>' + hm(dd) + '</b>'; g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 1; var hy = xy(hov[0], 0)[1]; g.beginPath(); g.moveTo(MX0, hy); g.lineTo(MX0 + MW, hy); g.stroke(); }
        read.innerHTML = txtD;
      }
    };
  });
})();
