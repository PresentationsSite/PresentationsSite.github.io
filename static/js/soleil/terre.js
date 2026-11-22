/* Soleil — animations « bilan radiatif 1 » : irradiance, distance, inclinaison, saisons, insolation */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, A = S.astro, TAU = U.TAU, D2R = U.D2R;
  var FONT = 'Outfit, sans-serif';
  function txt(g, s, x, y, col, size, al, w) { U.rich(g, s, x, y, col, size, al, w); }
  function arrow(g, x0, y0, x1, y1, col, lw, head) {
    var a = Math.atan2(y1 - y0, x1 - x0); head = head || 10;
    g.strokeStyle = col; g.fillStyle = col; g.lineWidth = lw || 2; g.lineCap = 'round';
    g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1 - Math.cos(a) * head * .6, y1 - Math.sin(a) * head * .6); g.stroke();
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x1 - head * Math.cos(a - .45), y1 - head * Math.sin(a - .45)); g.lineTo(x1 - head * Math.cos(a + .45), y1 - head * Math.sin(a + .45)); g.closePath(); g.fill();
  }
  S.arrow = arrow;

  /* ======================================================= La Terre intercepte un disque de rayons solaires */
  S.register('disque', function (root) {
    var W = 900, Hh = 380, st = S.stage(root, W, Hh), g = st.g;
    var alb = 0.3, RT = 6.371e6, K = A.K;
    var ctrl = UI.row(root);
    UI.slider(ctrl, { label: 'albédo de la Terre', min: 0, max: 0.9, step: 0.01, value: 0.3, color: '#7fd2ff', fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { alb = v; } });
    var read = UI.readout(root);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var cx = 560, cy = 190, R = 130;
        // faisceau parallèle
        var N = 11, lblX = null, lblY = 0;
        for (var i = 0; i < N; i++) {
          var y = (i - (N - 1) / 2) * (2 * R / (N - 1)) * 0.96, hx = cx - Math.sqrt(Math.max(0, R * R - y * y));
          var gr = g.createLinearGradient(20, 0, hx, 0); gr.addColorStop(0, 'rgba(255,214,90,0)'); gr.addColorStop(.25, 'rgba(255,214,90,.9)'); gr.addColorStop(1, 'rgba(255,230,140,1)');
          g.strokeStyle = gr; g.lineWidth = 3; g.setLineDash([14, 10]); g.lineDashOffset = -t * 60;
          g.beginPath(); g.moveTo(20, cy + y); g.lineTo(hx, cy + y); g.stroke(); g.setLineDash([]);
          // réflexion
          var nx = (hx - cx) / R, ny = y / R, dx = 1, dy = 0, dn = dx * nx + dy * ny;
          var rx = dx - 2 * dn * nx, ry = dy - 2 * dn * ny;
          if (alb > 0.01) {
            arrow(g, hx, cy + y, hx + rx * 70, cy + y + ry * 70, 'rgba(160,220,255,' + (0.25 + 0.75 * alb) + ')', 1 + 4 * alb, 8);
            if (i === 3) { lblX = hx + rx * 70; lblY = cy + y + ry * 70; }
          }
          g.fillStyle = 'rgba(255,120,60,' + (1 - alb) * 0.9 + ')'; g.beginPath(); g.arc(hx, cy + y, 3 + 3 * (1 - alb), 0, TAU); g.fill();
        }
        S.drawEarth(g, cx, cy, R, t * .1);
        // disque de la section (vu par la tranche)
        g.strokeStyle = '#ffffff'; g.lineWidth = 2; g.setLineDash([5, 5]);
        g.beginPath(); g.moveTo(cx, cy - R); g.lineTo(cx, cy + R); g.stroke(); g.setLineDash([]);
        g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(cx - 4, cy - R, 8, 2 * R);
        txt(g, 'disque de rayon R_T', cx, cy - R - 32, '#ffffff', 16, 'center', 600);
        txt(g, 'surface πR_T²', cx, cy - R - 12, '#c9d1f5', 15, 'center');
        // soleil à gauche
        txt(g, 'rayons parallèles du Soleil', 30, 330, '#ffd166', 16, 'left', 600);
        txt(g, 'K = 1 361 W/m²', 30, 354, '#ffe9a6', 16);
        if (lblX != null) U.rich(g, 'rayonnement réfléchi', lblX - 6, lblY - 6, '#9fe0ff', 15, 'right', 600, 'rgba(5,7,24,.85)');
        var Pint = K * Math.PI * RT * RT, Pabs = (1 - alb) * Pint;
        read.innerHTML = 'Puissance interceptée : K × πR<sub>T</sub>² = <b>' + U.sci(Pint, 2) + ' W</b> · absorbée : (1 − A) × K × πR<sub>T</sub>² = <b>' + U.sci(Pabs, 2) + ' W</b><br>La sphère a une surface 4× plus grande que ce disque : moyenne ≈ (1 − A) K / 4 = <b>' + U.fr((1 - alb) * K / 4, 0) + ' W/m²</b> au sol.';
      }
    };
  });

  /* ======================================================= Énergie solaire reçue vs autres sources */
  S.register('energies', function (root) {
    var W = 900, Hh = 410, st = S.stage(root, W, Hh), g = st.g;
    var rows = [
      { n: 'Énergie solaire reçue en 1 an', v: 3800, c: '#ffc43a' },
      { n: 'Charbon*', v: 26, c: '#aab3c9' }, { n: 'Pétrole*', v: 11, c: '#8d97b3' }, { n: 'Gaz naturel*', v: 6.9, c: '#c9d0e4' },
      { n: 'Uranium*', v: 5.8, c: '#ff5fa2' }, { n: 'Vent (potentiel annuel)', v: 3.2, c: '#4fd8c4' },
      { n: 'Consommation mondiale annuelle', v: 0.6, c: '#5cc8ff' }, { n: 'Biomasse', v: 0.13, c: '#7dffb0' }, { n: 'Hydro', v: 0.11, c: '#5c9dff' }, { n: 'Marées', v: 0.09, c: '#a794ff' }
    ];
    var LMAXV = Math.log(4000), LMINV = Math.log(0.12), lm = LMAXV, play = false, tgt = null;
    var ctrl = UI.row(root);
    var sl = UI.slider(ctrl, { label: 'zoom : l’axe va de 0 à', min: LMINV, max: LMAXV, step: 'any', value: LMAXV, color: '#ffc43a', fmt: function (v) { return U.fr(Math.exp(v), Math.exp(v) < 10 ? 1 : 0) + ' ZJ'; }, oninput: function (v) { lm = v; play = false; } });
    UI.btn(ctrl, '🔍 Zoom automatique', function () { lm = LMAXV; play = true; }, 'main');
    UI.btn(ctrl, '↺', function () { lm = LMAXV; sl.set(lm); play = false; });
    var read = UI.readout(root);
    var last = 0;
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { lm -= dt * (LMAXV - LMINV) / 9; if (lm <= LMINV) { lm = LMINV; play = false; } sl.set(lm); }
        g.clearRect(0, 0, W, Hh);
        var max = Math.exp(lm), X0 = 290, X1 = 840, y0 = 18, rh = 34;
        g.strokeStyle = 'rgba(255,255,255,.4)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X0, y0 - 4); g.lineTo(X0, y0 + rows.length * rh); g.stroke();
        rows.forEach(function (r, i) {
          var y = y0 + i * rh, w = r.v / max * (X1 - X0), over = w > X1 - X0;
          txt(g, r.n, X0 - 12, y + 21, '#e6eaff', 15, 'right', i === 0 || i === 6 ? 600 : 400);
          g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(X0, y + 4, X1 - X0, 22);
          var bw = Math.min(w, X1 - X0);
          g.save(); g.shadowColor = r.c; g.shadowBlur = 14; g.fillStyle = r.c; g.fillRect(X0, y + 4, Math.max(bw, w > 0 ? 1.5 : 0), 22); g.restore();
          if (over) { g.fillStyle = '#fff'; g.beginPath(); g.moveTo(X1 + 2, y + 6); g.lineTo(X1 + 16, y + 15); g.lineTo(X1 + 2, y + 24); g.fill(); }
          txt(g, U.fr(r.v, r.v < 10 ? (r.v < 1 ? 2 : 1) : 0) + ' ZJ', Math.min(X0 + bw + 8, X1 - 6), y + 21, over ? '#0a0c20' : r.c, 15, over ? 'right' : 'left', 600);
        });
        txt(g, '* réserves totales estimées', X0, Hh - 14, '#a9b2d6', 14, 'left');
        txt(g, '1 ZJ (zettajoule) = 10²¹ J', X1, Hh - 14, '#a9b2d6', 14, 'right');
        var ratio = 3800 / 0.6;
        read.innerHTML = 'En une année, la Terre reçoit du Soleil <b>≈ ' + U.fr(ratio, 0) + ' fois</b> l’énergie que l’humanité consomme. Réduis l’échelle pour voir apparaître les autres sources.';
      }
    };
  });

  /* ======================================================= Irradiance en 1/d² */
  S.register('carre-inverse', function (root) {
    var W = 900, Hh = 400, st = S.stage(root, W, Hh), g = st.g;
    var mode = 'cases', d = 1, K = A.K;
    var ctrl = UI.row(root);
    UI.chips(ctrl, [{ id: 'cases', label: '1 · 2 · 3 : la lumière se répartit' }, { id: 'planetes', label: 'Les planètes' }], { value: 'cases', onchange: function (id) { mode = id; showC(); } });
    var c2 = UI.row(root);
    var pl = [[.387, 'Mercure'], [.723, 'Vénus'], [1, 'Terre'], [1.524, 'Mars'], [5.203, 'Jupiter']];
    var sl = UI.slider(c2, { label: 'distance au Soleil', min: .3, max: 5.5, step: .01, value: 1, color: '#ffe066', fmt: function (v) { return U.fr(v, 2) + ' u.a.'; }, oninput: function (v) { d = v; } });
    UI.chips(c2, pl.map(function (p) { return { id: p[0], label: p[1] }; }), { onchange: function (id) { d = parseFloat(id); sl.set(d); } });
    function showC() { c2.style.display = mode === 'planetes' ? '' : 'none'; }
    showC();
    var read = UI.readout(root);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        if (mode === 'cases') {
          // panneaux de 1, 4 et 9 m² placés face aux rayons (perpendiculaires au faisceau), vus en perspective oblique
          var sx = 62, sy = 200, DX = 150, U1 = 58, KZ = [0.62, 0.36];
          function pr(X, Y, Z) { return [sx + X * DX + Z * KZ[0], sy - Y + Z * KZ[1]]; }
          S.drawSun(g, sx, sy, 22, t, { halo: 2.6, noProm: true });
          // cône de lumière : du Soleil aux quatre coins du plus grand panneau
          var s3 = U1 * 3, cn = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
          g.strokeStyle = 'rgba(255,214,90,.45)'; g.lineWidth = 1.3; g.setLineDash([6, 6]); g.lineDashOffset = -t * 30;
          cn.forEach(function (c) { var q = pr(3, c[0] * s3 / 2, c[1] * s3 / 2); g.beginPath(); g.moveTo(sx + 14, sy); g.lineTo(q[0], q[1]); g.stroke(); });
          g.setLineDash([]);
          // rayon central animé
          var cq = pr(3, 0, 0); g.strokeStyle = 'rgba(255,240,170,.8)'; g.lineWidth = 2; g.setLineDash([10, 12]); g.lineDashOffset = -t * 60; g.beginPath(); g.moveTo(sx + 24, sy); g.lineTo(cq[0], cq[1]); g.stroke(); g.setLineDash([]);
          [1, 2, 3].forEach(function (n) {
            var s1 = U1 * n, bright = .95 / (n * n) * (1 + .1 * Math.sin(t * 3));
            for (var i = 0; i < n; i++) for (var j = 0; j < n; j++) {
              var y0 = -s1 / 2 + i * U1, z0 = -s1 / 2 + j * U1, c = [pr(n, y0, z0), pr(n, y0 + U1, z0), pr(n, y0 + U1, z0 + U1), pr(n, y0, z0 + U1)];
              g.beginPath(); g.moveTo(c[0][0], c[0][1]); for (var k = 1; k < 4; k++) g.lineTo(c[k][0], c[k][1]); g.closePath();
              g.fillStyle = 'rgba(255,214,90,' + bright + ')'; g.fill(); g.strokeStyle = 'rgba(255,236,170,.7)'; g.lineWidth = 1.2; g.stroke();
            }
            var cc = [pr(n, -s1 / 2, -s1 / 2), pr(n, s1 / 2, -s1 / 2), pr(n, s1 / 2, s1 / 2), pr(n, -s1 / 2, s1 / 2)];
            g.beginPath(); g.moveTo(cc[0][0], cc[0][1]); for (var m = 1; m < 4; m++) g.lineTo(cc[m][0], cc[m][1]); g.closePath(); g.strokeStyle = '#ffe9a6'; g.lineWidth = 2; g.stroke();
            var lowY = Math.max(cc[0][1], cc[1][1], cc[2][1], cc[3][1]), topY = Math.min(cc[0][1], cc[1][1], cc[2][1], cc[3][1]), mx = (cc[0][0] + cc[1][0] + cc[2][0] + cc[3][0]) / 4;
            txt(g, n * n + ' m² éclairés', mx, topY - 10, '#ffe9a6', 15, 'center', 600);
            txt(g, 'à ' + n + ' d', mx, lowY + 20, '#c9d1f5', 14, 'center');
          });
          // histogramme de l'éclairement par m²
          var hx = 700, hy = 330, hw = 52;
          txt(g, 'éclairement par m²', hx + 80, 58, '#c9d1f5', 15, 'center', 600);
          [1, 2, 3].forEach(function (n, i) {
            var hgt = 200 / (n * n), x = hx + i * (hw + 20);
            g.fillStyle = 'rgba(255,214,90,.15)'; g.fillRect(x, hy - 200, hw, 200);
            g.fillStyle = '#ffc43a'; g.shadowColor = '#ffc43a'; g.shadowBlur = 12; g.fillRect(x, hy - hgt, hw, hgt); g.shadowBlur = 0;
            txt(g, n === 1 ? 'K' : 'K/' + n * n, x + hw / 2, hy + 22, '#ffd166', 17, 'center', 700);
            txt(g, 'd' + (n > 1 ? '×' + n : ''), x + hw / 2, hy + 42, '#a9b2d6', 13, 'center');
          });
          read.innerHTML = 'La même puissance traverse des surfaces de plus en plus grandes : à la distance <b>n·d</b>, elle se répartit sur <b>n²</b> fois plus de surface, donc <b>I ∝ 1/d²</b>.';
        } else {
          var X0 = 80, X1 = 840, Y0 = 20, Y1 = 330, dm = 5.5, Imax = 9500;
          g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(X0, Y0); g.lineTo(X0, Y1); g.lineTo(X1, Y1); g.stroke();
          function xo(v) { return X0 + v / dm * (X1 - X0); } function yo(v) { return Y1 - v / Imax * (Y1 - Y0); }
          for (var q = 0; q <= 5; q++) { txt(g, q, xo(q), Y1 + 20, '#c9d1f5', 14, 'center'); }
          txt(g, 'distance au Soleil (u.a.)', X1, Y1 + 42, '#c9d1f5', 14, 'right');
          [0, 2000, 4000, 6000, 8000].forEach(function (v) { txt(g, U.fr(v, 0), X0 - 8, yo(v) + 5, '#c9d1f5', 13, 'right'); g.strokeStyle = 'rgba(255,255,255,.06)'; g.beginPath(); g.moveTo(X0, yo(v)); g.lineTo(X1, yo(v)); g.stroke(); });
          txt(g, 'I (W/m²)', X0 + 8, Y0 + 12, '#c9d1f5', 14, 'left');
          var gr = g.createLinearGradient(0, Y0, 0, Y1); gr.addColorStop(0, 'rgba(255,196,58,.45)'); gr.addColorStop(1, 'rgba(255,196,58,.02)');
          g.beginPath(); g.moveTo(xo(.38), Y1);
          for (var x = .38; x <= dm; x += .02) g.lineTo(xo(x), yo(K / (x * x)));
          g.lineTo(xo(dm), Y1); g.closePath(); g.fillStyle = gr; g.fill();
          g.strokeStyle = '#ffc43a'; g.lineWidth = 3; g.shadowColor = '#ffc43a'; g.shadowBlur = 10; g.beginPath();
          for (var x2 = .38; x2 <= dm; x2 += .02) { x2 === .38 ? g.moveTo(xo(x2), yo(K / (x2 * x2))) : g.lineTo(xo(x2), yo(K / (x2 * x2))); } g.stroke(); g.shadowBlur = 0;
          pl.forEach(function (p) { g.fillStyle = '#9fe0ff'; g.beginPath(); g.arc(xo(p[0]), yo(K / (p[0] * p[0])), 5, 0, TAU); g.fill(); txt(g, p[1], xo(p[0]) + 8, yo(K / (p[0] * p[0])) - 8, '#9fe0ff', 14, 'left'); });
          var Id = K / (d * d), cx = xo(d), cy = yo(Id);
          g.strokeStyle = 'rgba(255,255,255,.7)'; g.setLineDash([4, 4]); g.lineWidth = 1.3; g.beginPath(); g.moveTo(cx, Y1); g.lineTo(cx, cy); g.lineTo(X0, cy); g.stroke(); g.setLineDash([]);
          g.fillStyle = '#fff'; g.shadowColor = '#fff'; g.shadowBlur = 14; g.beginPath(); g.arc(cx, cy, 7, 0, TAU); g.fill(); g.shadowBlur = 0;
          read.innerHTML = 'À <b>' + U.fr(d, 2) + ' u.a.</b> : I = K / d² = 1 361 / ' + U.fr(d * d, 2) + ' = <b>' + U.fr(Id, 0) + ' W/m²</b> (' + U.fr(Id / K * 100, 0) + ' % de la valeur à la distance de la Terre)';
        }
      }
    };
  });

  /* ======================================================= Orbite elliptique : l'excentricité n'explique pas les saisons */
  S.register('excentricite', function (root) {
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var day = 3, k = 1, play = false, K = A.K;
    var ctrl = UI.row(root);
    var sd = UI.slider(ctrl, { label: 'date', min: 1, max: 365, step: 1, value: 3, color: '#5cc8ff', w: 7.5, fmt: function (v) { return A.dateStr(v); }, oninput: function (v) { day = v; play = false; } });
    var se = UI.slider(ctrl, { label: 'excentricité', min: 1, max: 40, step: 'any', value: 1, color: '#ff8a5c', fmt: function (v) { return v < 1.5 ? 'réelle (0,017)' : '× ' + U.fr(v, 0) + ' (e = ' + U.fr(Math.min(.0167 * v, .8), 2) + ')'; }, oninput: function (v) { k = v; } });
    var c2 = UI.row(root);
    UI.btn(c2, '▶ Une année', function (e, b) { play = !play; b.textContent = play ? '❚❚ Pause' : '▶ Une année'; }, 'main');
    UI.chips(c2, [{ id: 3, label: 'Périhélie (3 janv.)' }, { id: 185, label: 'Aphélie (4 juil.)' }, { id: 172, label: 'Solstice d’été (N)' }, { id: 355, label: 'Solstice d’hiver (N)' }], { onchange: function (id) { day = parseFloat(id); sd.set(day); play = false; } });
    var read = UI.readout(root);
    var last = 0, SEAS = [[79, 172, '#7dffb0', 'printemps'], [172, 265, '#ffd166', 'été'], [265, 355, '#ff8a5c', 'automne'], [355, 444, '#7fd2ff', 'hiver']];
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { day += dt * 30; if (day > 365) day -= 365; sd.set(day); }
        g.clearRect(0, 0, W, Hh);
        var e = Math.min(.0167 * k, .8), a = 168, b = a * Math.sqrt(1 - e * e), cx = 330, cy = 215, fx = cx + a * e;
        function pos(n) { var s = A.state(n, e), r = s.r * a; return [fx + r * Math.cos(s.nu), cy - r * Math.sin(s.nu), s.r]; }
        // orbite colorée par saisons
        SEAS.forEach(function (s) {
          g.strokeStyle = s[2]; g.lineWidth = 5; g.globalAlpha = .75; g.beginPath();
          for (var n = s[0]; n <= s[1]; n += 1) { var p = pos(n > 365 ? n - 365 : n); n === s[0] ? g.moveTo(p[0], p[1]) : g.lineTo(p[0], p[1]); }
          g.stroke(); g.globalAlpha = 1;
        });
        // axe périhélie-aphélie
        g.strokeStyle = 'rgba(255,255,255,.18)'; g.setLineDash([4, 6]); g.lineWidth = 1; g.beginPath(); g.moveTo(cx - a, cy); g.lineTo(cx + a, cy); g.stroke(); g.setLineDash([]);
        S.drawSun(g, fx, cy, 22, t, { halo: 3, noProm: true });
        // repères
        function mark(n, label, col) {
          var p = pos(n); g.fillStyle = col; g.beginPath(); g.arc(p[0], p[1], 5, 0, TAU); g.fill();
          var nx = (p[0] - cx) / (a * a), ny = (p[1] - cy) / (b * b), nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
          var al = nx > .45 ? 'left' : nx < -.45 ? 'right' : 'center';
          txt(g, label, p[0] + nx * 17, p[1] + ny * 17 + (ny > .45 ? 12 : ny < -.45 ? -3 : 5), col, 14, al, 600);
        }
        mark(3, 'périhélie', '#ffffff'); mark(185, 'aphélie', '#ffffff');
        mark(79, '20 mars', '#7dffb0'); mark(172, '21 juin', '#ffd166'); mark(265, '22 sept.', '#ff8a5c'); mark(355, '21 déc.', '#7fd2ff');
        // Terre
        var p = pos(day), s = A.state(day, e);
        g.save(); g.shadowColor = '#5cc8ff'; g.shadowBlur = 16; S.drawEarth(g, p[0], p[1], 11, day / 365 * 40); g.restore();
        g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 1.2; g.setLineDash([3, 4]); g.beginPath(); g.moveTo(fx, cy); g.lineTo(p[0], p[1]); g.stroke(); g.setLineDash([]);
        // panneau
        var I = K / (s.r * s.r), d0 = 149.6 * s.r, season = A.dec(day) > 0 ? '' : '';
        var dec = A.dec(day) / D2R, N = '';
        var sn = dec > 0 ? (A.state(day).lamS < Math.PI / 2 ? 'printemps' : 'été') : '';
        var nm = A.season(Math.round(day))[0];
        var bx = 650;
        g.fillStyle = 'rgba(255,255,255,.06)'; g.fillRect(bx, 40, 235, 300); g.strokeStyle = 'rgba(255,255,255,.15)'; g.strokeRect(bx, 40, 235, 300);
        txt(g, A.dateStr(day), bx + 117, 74, '#ffd166', 24, 'center', 600);
        txt(g, 'distance Terre–Soleil', bx + 117, 110, '#a9b2d6', 14, 'center'); txt(g, U.fr(s.r, 3) + ' u.a.', bx + 117, 138, '#eef1ff', 24, 'center', 600);
        txt(g, '≈ ' + U.fr(d0, 1) + ' millions de km', bx + 117, 160, '#c9d1f5', 14, 'center');
        txt(g, 'irradiance au sommet', bx + 117, 196, '#a9b2d6', 14, 'center'); txt(g, U.fr(I, 0) + ' W/m²', bx + 117, 224, '#ffc43a', 26, 'center', 600);
        txt(g, (I / K * 100 - 100 >= 0 ? '+' : '−') + U.fr(Math.abs(I / K * 100 - 100), 1) + ' % par rapport à 1 u.a.', bx + 117, 246, '#c9d1f5', 14, 'center');
        txt(g, 'hémisphère nord', bx + 117, 286, '#a9b2d6', 14, 'center'); txt(g, nm.toUpperCase(), bx + 117, 316, '#7dffb0', 22, 'center', 700);
        read.innerHTML = k < 1.5 ? 'Avec l’excentricité <b>réelle</b>, l’orbite est presque un cercle : la distance ne varie que de <b>±1,7 %</b> et l’irradiance de <b>±3,4 %</b>. La Terre est au plus près en <b>janvier</b>, en plein hiver boréal !' : 'Excentricité volontairement <b>exagérée</b> (× ' + U.fr(k, 0) + ') : même ainsi, la saison ne dépend pas de la distance — l’hiver boréal a lieu au plus près du Soleil dans la réalité.';
      }
    };
  });

  /* ======================================================= Inclinaison des rayons */
  S.register('inclinaison', function (root) {
    var W = 900, Hh = 400, st = S.stage(root, W, Hh), g = st.g;
    var h = 41, K = A.K;
    var ctrl = UI.row(root);
    var sl = UI.slider(ctrl, { label: 'élévation du Soleil h', min: 6, max: 90, step: 1, value: 41, color: '#ffd166', fmt: function (v) { return U.fr(v, 0) + '°'; }, oninput: function (v) { h = v; } });
    UI.chips(ctrl, [{ id: 90, label: 'Équateur' }, { id: 60, label: 'Lat. 30°' }, { id: 41, label: 'Paris (49°)' }, { id: 24, label: 'Cercle polaire (66°)' }], { onchange: function (id) { h = parseFloat(id); sl.set(h); } });
    var read = UI.readout(root);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var gy = 330, w = 80, hr = h * D2R, L = w / Math.sin(hr), gx = 430 - L / 2;
        // sol
        var gr = g.createLinearGradient(0, gy, 0, Hh); gr.addColorStop(0, '#2f8f4e'); gr.addColorStop(1, '#134228');
        g.fillStyle = gr; g.fillRect(0, gy, W, Hh - gy);
        var dx = -Math.cos(hr), dy = -Math.sin(hr), len = 420;
        // faisceau
        var p0 = [gx, gy], p1 = [gx + L, gy], q0 = [p0[0] + dx * len, p0[1] + dy * len], q1 = [p1[0] + dx * len, p1[1] + dy * len];
        var bg = g.createLinearGradient(q0[0], q0[1], p0[0], p0[1]); bg.addColorStop(0, 'rgba(255,214,90,.0)'); bg.addColorStop(.35, 'rgba(255,214,90,.38)'); bg.addColorStop(1, 'rgba(255,230,140,.55)');
        g.fillStyle = bg; g.beginPath(); g.moveTo(p0[0], p0[1]); g.lineTo(p1[0], p1[1]); g.lineTo(q1[0], q1[1]); g.lineTo(q0[0], q0[1]); g.closePath(); g.fill();
        // rayons animés
        g.strokeStyle = 'rgba(255,240,170,.95)'; g.lineWidth = 2.5; g.setLineDash([16, 12]); g.lineDashOffset = t * 70;
        for (var i = 0; i <= 4; i++) { var f = i / 4, sx = p0[0] + (p1[0] - p0[0]) * f, sy = gy; g.beginPath(); g.moveTo(sx + dx * len, sy + dy * len); g.lineTo(sx, sy); g.stroke(); }
        g.setLineDash([]);
        // sol éclairé
        g.fillStyle = '#ff6a3d'; g.shadowColor = '#ff6a3d'; g.shadowBlur = 16; g.fillRect(gx, gy - 3, L, 8); g.shadowBlur = 0;
        g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(gx, gy + 24); g.lineTo(gx + L, gy + 24); g.moveTo(gx, gy + 18); g.lineTo(gx, gy + 30); g.moveTo(gx + L, gy + 18); g.lineTo(gx + L, gy + 30); g.stroke();
        txt(g, U.fr(1 / Math.sin(hr), 2) + ' m² éclairés', gx + L / 2, gy + 52, '#ffb09a', 18, 'center', 600);
        // section droite du faisceau (1 m de large, perpendiculaire aux rayons)
        var nx = -dy, ny = dx;
        var t0 = [p0[0] + dx * 200, p0[1] + dy * 200];
        var perp = [Math.sin(hr), -Math.cos(hr)]; // direction perpendiculaire aux rayons (vers le bord p1)
        var t1 = [t0[0] + perp[0] * w, t0[1] + perp[1] * w];
        g.strokeStyle = '#ffffff'; g.lineWidth = 3.5; g.beginPath(); g.moveTo(t0[0], t0[1]); g.lineTo(t1[0], t1[1]); g.stroke();
        g.lineWidth = 5; g.strokeStyle = 'rgba(8,10,30,.9)'; g.font = '600 17px ' + FONT; g.textAlign = 'right'; g.strokeText('1 m²', (t0[0] + t1[0]) / 2 - 12, (t0[1] + t1[1]) / 2 - 4); g.fillStyle = '#fff'; g.fillText('1 m²', (t0[0] + t1[0]) / 2 - 12, (t0[1] + t1[1]) / 2 - 4);
        // angle d'élévation
        g.strokeStyle = '#ff6fb5'; g.lineWidth = 3; g.beginPath(); g.arc(gx, gy, 62, Math.PI, Math.PI + hr); g.stroke();
        g.fillStyle = 'rgba(255,111,181,.22)'; g.beginPath(); g.moveTo(gx, gy); g.arc(gx, gy, 62, Math.PI, Math.PI + hr); g.closePath(); g.fill();
        txt(g, 'h = ' + U.fr(h, 0) + '°', gx - 70, gy - 12, '#ff9fd0', 19, 'right', 600);
        // sommet de l'atmosphère / soleil
        txt(g, 'rayons du Soleil', 30, 30, '#ffd166', 16, 'left', 600);
        arrow(g, 30, 42, 30 + 60 * Math.cos(hr), 42 + 60 * Math.sin(hr), '#ffd166', 3, 12);
        // barre d'irradiance
        var I = K * Math.sin(hr), bxx = 740, byy = 70, bh = 200;
        g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(bxx, byy, 34, bh);
        g.fillStyle = '#ffc43a'; g.shadowColor = '#ffc43a'; g.shadowBlur = 12; g.fillRect(bxx, byy + bh * (1 - I / K), 34, bh * I / K); g.shadowBlur = 0;
        txt(g, 'I = K·sin h', bxx + 17, byy - 14, '#c9d1f5', 15, 'center');
        txt(g, U.fr(I, 0) + ' W/m²', bxx + 17, byy + bh + 24, '#ffd166', 18, 'center', 600);
        read.innerHTML = 'Le même faisceau (1 m² de section) s’étale sur <b>1 / sin h = ' + U.fr(1 / Math.sin(hr), 2) + ' m²</b> de sol : l’irradiance est divisée d’autant, <b>I = K · sin h = ' + U.fr(I, 0) + ' W/m²</b>.';
      }
    };
  });

  /* ======================================================= Orbite, inclinaison de l'axe et saisons (3D) */
  S.register('saisons', function (root) {
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var day = 172, lat = 48.85, play = false, last = 0, EL = 26 * D2R;
    var ctrl = UI.row(root);
    var sd = UI.slider(ctrl, { label: 'date', min: 1, max: 365, step: 1, value: 172, color: '#5cc8ff', w: 7.5, fmt: function (v) { return A.dateStr(v); }, oninput: function (v) { day = v; play = false; } });
    var sl = UI.slider(ctrl, { label: 'latitude', min: -90, max: 90, step: 1, value: 48.85, color: '#ffd166', w: 4.2, fmt: function (v) { return U.fr(Math.abs(v), 0) + '° ' + (v >= 0 ? 'N' : 'S'); }, oninput: function (v) { lat = v; } });
    var c2 = UI.row(root);
    UI.btn(c2, '▶ Une année', function (e, b) { play = !play; b.textContent = play ? '❚❚ Pause' : '▶ Une année'; }, 'main');
    UI.chips(c2, [{ id: 80, label: 'Équinoxe de mars' }, { id: 172, label: 'Solstice de juin' }, { id: 265, label: 'Équinoxe de sept.' }, { id: 355, label: 'Solstice de déc.' }], { onchange: function (id) { day = parseFloat(id); sd.set(day); play = false; } });
    var read = UI.readout(root);
    var N = 128;
    function mkOff() { var c = document.createElement('canvas'); c.width = c.height = N; var o = c.getContext('2d'); return { c: c, g: o, img: o.createImageData(N, N) }; }
    var offA = mkOff(), offB = mkOff();
    var sinE = Math.sin(A.EPS), cosE = Math.cos(A.EPS), sEl = Math.sin(EL), cEl = Math.cos(EL);
    // la caméra est tournée de PSI autour de l'axe de l'écliptique : l'inclinaison de l'axe de la Terre est alors visible
    var PSI = 90 * D2R, sPs = Math.sin(PSI), cPs = Math.cos(PSI);
    var CAM_MAIN = { R: [cPs, sPs, 0], U: [-sPs * sEl, cPs * sEl, cEl], B: [sPs * cEl, -cPs * cEl, sEl] };
    /* globe ombré pixel par pixel : s = direction Terre→Soleil (plan de l'écliptique), cam = repère de la caméra */
    function globe(off, s, latObs, cam) {
      var d = off.img.data, R = N / 2 - 2, c = N / 2;
      for (var j = 0; j < N; j++) for (var i = 0; i < N; i++) {
        var u = (i + .5 - c) / R, v = -(j + .5 - c) / R, r2 = u * u + v * v, o = (j * N + i) * 4;
        if (r2 > 1) { d[o + 3] = 0; continue; }
        var w = Math.sqrt(1 - r2);
        var nx = u * cam.R[0] + v * cam.U[0] + w * cam.B[0], ny = u * cam.R[1] + v * cam.U[1] + w * cam.B[1], nz = u * cam.R[2] + v * cam.U[2] + w * cam.B[2];
        var lamb = nx * s[0] + ny * s[1];
        var sinLat = ny * sinE + nz * cosE, la = Math.asin(U.clamp(sinLat, -1, 1)) / D2R;
        var dayk = U.smooth(-.05, .14, lamb), amb = .24, lum = amb + (1 - amb) * dayk;
        var q = 1 - Math.abs(la) / 90, rr = 26 + 40 * q, gg = 96 + 74 * q, bb = 186 + 44 * q;
        if (Math.abs(la) > 72) { rr = 235; gg = 245; bb = 255; }
        var line = 0, lc = null;
        function near(x0, wd, col) { if (Math.abs(la - x0) < wd) { line = 1; lc = col; } }
        near(0, .8, [255, 255, 255]); near(23.44, .7, [255, 165, 60]); near(-23.44, .7, [255, 165, 60]); near(66.56, .7, [90, 220, 255]); near(-66.56, .7, [90, 220, 255]);
        near(latObs, .95, [255, 230, 80]);
        if (line) { rr = lc[0]; gg = lc[1]; bb = lc[2]; lum = Math.max(lum, .6); }
        var rim = 1 - .22 * Math.pow(1 - w, 2);
        d[o] = rr * lum * rim; d[o + 1] = gg * lum * rim; d[o + 2] = bb * lum * rim; d[o + 3] = 255;
      }
      off.g.putImageData(off.img, 0, 0);
    }
    function axisDraw(ex, ey, R, cam) {
      var ax = [0, sinE, cosE];
      var sx = ax[0] * cam.R[0] + ax[1] * cam.R[1] + ax[2] * cam.R[2], sy = ax[0] * cam.U[0] + ax[1] * cam.U[1] + ax[2] * cam.U[2];
      // axe : trait plein à l'extérieur de la Terre, pointillé là où il la traverse
      var hyp = Math.hypot(sx, sy) || 1, tIn = Math.min(R / hyp, R * 1.3), t0 = -R * 1.3, t1 = R * 1.45;
      function seg(a, b, dash) { g.setLineDash(dash || []); g.beginPath(); g.moveTo(ex + sx * a, ey - sy * a); g.lineTo(ex + sx * b, ey - sy * b); g.stroke(); }
      g.strokeStyle = '#ffe066'; g.lineWidth = 2.4;
      seg(t0, -tIn); seg(tIn, t1); g.lineWidth = 2; seg(-tIn, tIn, [4, 4]); g.setLineDash([]);
      txt(g, 'N', ex + sx * R * 1.45 + 6, ey - sy * R * 1.45 - 2, '#ffe066', 16, 'left', 700);
      return [sx, sy];
    }
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { day += dt * 25; if (day > 365) day -= 365; sd.set(day); }
        g.clearRect(0, 0, W, Hh);
        var cx = 385, cy = 222, Ao = 240;
        var s0 = A.state(day), lamE = s0.lamS + Math.PI, rr = s0.r0;
        var P = [rr * Math.cos(lamE), rr * Math.sin(lamE)];
        function proj(px, py) { return [cx + Ao * (px * cPs + py * sPs), cy - Ao * sEl * (-px * sPs + py * cPs)]; }
        var pe = proj(P[0], P[1]), ex = pe[0], ey = pe[1], sdir = [-P[0] / rr, -P[1] / rr];
        g.strokeStyle = 'rgba(255,255,255,.28)'; g.lineWidth = 1.5; g.beginPath();
        for (var q = 0; q <= 120; q++) { var qa = q / 120 * TAU, pq = proj(Math.cos(qa), Math.sin(qa)); q ? g.lineTo(pq[0], pq[1]) : g.moveTo(pq[0], pq[1]); } g.closePath(); g.stroke();
        [[80, 'équinoxe de mars'], [172, 'solstice de juin'], [265, 'équinoxe de sept.'], [355, 'solstice de déc.']].forEach(function (m) {
          var s = A.state(m[0]), l = s.lamS + Math.PI, pp = proj(Math.cos(l), Math.sin(l)), x = pp[0], y = pp[1];
          g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(x, y, 3.4, 0, TAU); g.fill();
          // étiquette hors du disque de la Terre (rayon 36 px) : sur le côté pour les solstices, au-dessus/au-dessous pour les équinoxes
          var side = x - cx;
          if (Math.abs(side) > Ao * .5) txt(g, m[1], x + (side > 0 ? 48 : -48), y + 5, 'rgba(255,255,255,.8)', 12.5, side > 0 ? 'left' : 'right');
          else txt(g, m[1], x, (y - cy) > 0 ? y + 60 : y - 48, 'rgba(255,255,255,.8)', 12.5, 'center');
        });
        var farFirst = (P[0] * sPs - P[1] * cPs) < 0;
        function earthMain() {
          globe(offA, sdir, lat, CAM_MAIN);
          var R = 36;
          g.save(); g.shadowColor = 'rgba(92,200,255,.5)'; g.shadowBlur = 20; g.drawImage(offA.c, ex - R - 1.5, ey - R - 1.5, 2 * R + 3, 2 * R + 3); g.restore();
          axisDraw(ex, ey, R, CAM_MAIN);
        }
        function sunMain() { S.drawSun(g, cx, cy, 28, t, { halo: 3.2, noProm: true }); }
        if (farFirst) { earthMain(); sunMain(); } else { sunMain(); earthMain(); }
        // --- vue de côté : le Soleil est à droite
        var camS = { R: [sdir[0], sdir[1], 0], U: [0, 0, 1], B: [sdir[1], -sdir[0], 0] };
        globe(offB, sdir, lat, camS);
        var ix = 800, iy = 160, IR = 70;
        txt(g, 'vue de côté (Soleil à droite)', ix, 30, '#c9d1f5', 14, 'center');
        var gl = g.createRadialGradient(ix + IR, iy, IR, ix + IR * 2.2, iy, IR * 3); gl.addColorStop(0, 'rgba(255,200,80,.30)'); gl.addColorStop(1, 'rgba(255,200,80,0)');
        g.fillStyle = gl; g.beginPath(); g.arc(ix + IR * 1.2, iy, IR * 2.6, 0, TAU); g.fill();
        g.save(); g.shadowColor = 'rgba(92,200,255,.45)'; g.shadowBlur = 22; g.drawImage(offB.c, ix - IR - 2, iy - IR - 2, 2 * IR + 4, 2 * IR + 4); g.restore();
        axisDraw(ix, iy, IR, camS);
        arrow(g, ix + IR + 32, iy, ix + IR + 8, iy, 'rgba(255,214,90,.9)', 2.5, 10);
        txt(g, '☀', ix + IR + 36, iy + 8, '#ffd166', 20, 'left');
        // légende
        var ly = 262;
        [['équateur', '#ffffff'], ['tropiques', '#ffa53c'], ['cercles polaires', '#5adcff'], ['latitude choisie', '#ffe650']].forEach(function (l, i) {
          g.fillStyle = l[1]; g.fillRect(742, ly + i * 20 - 9, 16, 3); txt(g, l[0], 766, ly + i * 20 - 3, l[1], 13, 'left');
        });
        // lecture
        var dec = s0.dec, hn = 90 - Math.abs(lat - dec / D2R), dl = A.dayLen(lat * D2R, dec), Q = A.Q(lat * D2R, day);
        var ss = A.season(Math.round(day)), nm = ss[0], sm = ss[1];
        var hh = Math.floor(dl), mm = Math.round((dl - hh) * 60); if (mm === 60) { hh++; mm = 0; }
        txt(g, A.dateStr(day), 20, 34, '#ffd166', 26, 'left', 600);
        txt(g, 'hémisphère nord : ' + nm, 20, 60, '#7dffb0', 17, 'left', 600);
        txt(g, 'hémisphère sud : ' + sm, 20, 82, '#9fe0ff', 17, 'left', 600);
        txt(g, 'L’axe reste incliné de 23,4° dans la même direction', 20, 106, '#c9d1f5', 14, 'left');
        read.innerHTML = 'Déclinaison du Soleil δ = <b>' + U.fr(dec / D2R, 1) + '°</b> · élévation à midi à ' + U.fr(Math.abs(lat), 0) + '°' + (lat >= 0 ? 'N' : 'S') + ' : <b>' + U.fr(hn, 0) + '°</b> · durée du jour : <b>' + hh + ' h ' + (mm < 10 ? '0' : '') + mm + '</b> · éclairement moyen au sommet : <b>' + U.fr(Q, 0) + ' W/m²</b>';
      }
    };
  });

  /* ======================================================= Trajectoire du Soleil dans le ciel, élévation */
  S.register('trajectoire', function (root) {
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var day = 172, hour = 12, lat = 46.16, play = false, last = 0;
    var ctrl = UI.row(root);
    var sdy = UI.slider(ctrl, { label: 'date', min: 1, max: 365, step: 1, value: 172, color: '#ffd166', w: 7.5, fmt: function (v) { return A.dateStr(v); }, oninput: function (v) { day = v; } });
    var shr = UI.slider(ctrl, { label: 'heure solaire', min: 0, max: 24, step: .05, value: 12, color: '#ff9f6b', w: 4.2, fmt: function (v) { var h = Math.floor(v), m = Math.round((v - h) * 60); if (m === 60) { h++; m = 0; } return h + ' h ' + (m < 10 ? '0' : '') + m; }, oninput: function (v) { hour = v; play = false; } });
    var c2 = UI.row(root);
    var sl = UI.slider(c2, { label: 'latitude du lieu', min: -80, max: 80, step: 1, value: Math.round(lat), color: '#7dffb0', w: 4.2, fmt: function (v) { return U.fr(Math.abs(v), 0) + '° ' + (v >= 0 ? 'N' : 'S'); }, oninput: function (v) { lat = v; cities.set(null); } });
    var cities = UI.chips(c2, [{ id: 46.16, label: 'La Rochelle' }, { id: 0, label: 'Équateur' }, { id: 66.56, label: 'Cercle polaire' }, { id: -33.92, label: 'Le Cap' }], {
      value: 46.16, onchange: function (id) { lat = parseFloat(id); sl.set(lat); }
    });
    var c3 = UI.row(root);
    UI.btn(c3, '▶ Une journée', function (e, b) { play = !play; b.textContent = play ? '❚❚ Pause' : '▶ Une journée'; }, 'main');
    UI.chips(c3, [{ id: 172, label: '21 juin' }, { id: 80, label: 'Équinoxe' }, { id: 355, label: '21 déc.' }], { onchange: function (id) { day = parseFloat(id); sdy.set(day); } });
    var read = UI.readout(root);
    // chips « villes » : set(null) efface la sélection quand on déplace le curseur de latitude
    var origSet = cities.set; cities.set = function (id) { if (id == null) { cities.el.querySelectorAll('.sw-chip').forEach(function (b) { b.classList.remove('on'); }); } else origSet(id); };
    var PX0 = 20, PX1 = 640, HY = 360, SCY = 3.55, SCX = (PX1 - PX0) / 360;
    function wrap(a) { while (a > 180) a -= 360; while (a <= -180) a += 360; return a; }
    /* azimut « de vue » : on regarde vers le sud dans l'hémisphère nord, vers le nord dans l'hémisphère sud */
    function view(azS) { return lat >= 0 ? azS : wrap(azS + 180); }
    function sx(v) { return (PX0 + PX1) / 2 + v * SCX; }
    function arc(n, col, lw, dash) {
      var dec = A.dec(n), prev = null;
      g.strokeStyle = col; g.lineWidth = lw; g.setLineDash(dash || []); g.beginPath();
      for (var H = -180; H <= 180; H += 1) {
        var e = A.elev(lat * D2R, dec, H * D2R) / D2R;
        if (e < 0) { prev = null; continue; }
        var v = view(A.azim(lat * D2R, dec, H * D2R) / D2R), X = sx(v), Y = HY - e * SCY;
        if (prev == null || Math.abs(v - prev) > 120) g.moveTo(X, Y); else g.lineTo(X, Y);
        prev = v;
      }
      g.stroke(); g.setLineDash([]);
    }
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - last); last = t;
        if (!st.fit()) return;
        if (play) { hour += dt * 1.6; if (hour > 24) hour -= 24; shr.set(hour); }
        g.clearRect(0, 0, W, Hh);
        var lat0 = lat * D2R, dec = A.dec(day), H = (hour - 12) * 15 * D2R, e = A.elev(lat0, dec, H), az = A.azim(lat0, dec, H);
        var eD = e / D2R, azV = view(az / D2R);
        var k = U.smooth(-6, 12, eD);
        var sky = g.createLinearGradient(0, 40, 0, HY);
        sky.addColorStop(0, U.rgb([U.lerp(6, 40, k), U.lerp(10, 110, k), U.lerp(34, 210, k)])); sky.addColorStop(1, U.rgb([U.lerp(20, 150, k), U.lerp(24, 200, k), U.lerp(60, 245, k)]));
        g.fillStyle = sky; g.beginPath(); if (g.roundRect) g.roundRect(PX0, 40, PX1 - PX0, HY - 40, 14); else g.rect(PX0, 40, PX1 - PX0, HY - 40); g.fill();
        if (k < .7) { for (var i = 0; i < 40; i++) { g.fillStyle = 'rgba(255,255,255,' + (0.7 - k) * .9 + ')'; g.fillRect(PX0 + ((i * 97) % 620), 46 + ((i * 53) % 280), 1.6, 1.6); } }
        var gg = g.createLinearGradient(0, HY, 0, 410); gg.addColorStop(0, U.rgb([U.lerp(10, 60, k), U.lerp(30, 130, k), U.lerp(20, 70, k)])); gg.addColorStop(1, U.rgb([U.lerp(4, 30, k), U.lerp(12, 80, k), U.lerp(10, 40, k)]));
        g.fillStyle = gg; g.fillRect(PX0, HY, PX1 - PX0, 50);
        g.strokeStyle = 'rgba(255,255,255,.18)'; g.lineWidth = 1; g.fillStyle = 'rgba(255,255,255,.7)'; g.font = '13px ' + FONT; g.textAlign = 'left';
        [30, 60, 90].forEach(function (a) { g.beginPath(); g.moveTo(PX0, HY - a * SCY); g.lineTo(PX1, HY - a * SCY); g.stroke(); g.fillText(a + '°', PX0 + 6, HY - a * SCY - 4); });
        var north = lat < 0;
        [[-90, north ? 'O' : 'E'], [0, north ? 'N' : 'S'], [90, north ? 'E' : 'O']].forEach(function (c) { txt(g, c[1], sx(c[0]), HY + 24, '#eef1ff', 18, 'center', 700); });
        txt(g, north ? 'S' : 'N', sx(-168), HY + 24, '#a9b2d6', 16, 'center', 700); txt(g, north ? 'S' : 'N', sx(168), HY + 24, '#a9b2d6', 16, 'center', 700);
        arc(172, '#ffd166', 2.5, [2, 6]); arc(80, '#ffffff', 2.5, [2, 6]); arc(355, '#7fd2ff', 2.5, [2, 6]);
        // étiquettes au sommet de chaque arc de référence (avec son vrai azimut), décalées si elles se chevauchent
        var labs = [];
        [[172, '21 juin', '#ffd166'], [80, 'équinoxe', '#ffffff'], [355, '21 déc.', '#7fd2ff']].forEach(function (a) {
          var de = A.dec(a[0]), em = A.elev(lat0, de, 0) / D2R; if (em < 3) return;
          labs.push({ t: a[1], c: a[2], x: U.clamp(sx(view(A.azim(lat0, de, 0) / D2R)), PX0 + 46, PX1 - 46), y: Math.max(HY - em * SCY - 12, 62) });
        });
        labs.sort(function (p, q) { return p.x - q.x; });
        labs.forEach(function (l, i) { for (var j = 0; j < i; j++) if (Math.abs(l.x - labs[j].x) < 80 && Math.abs(l.y - labs[j].y) < 20) l.y += 20; });
        labs.forEach(function (l) { U.rich(g, l.t, l.x, l.y, l.c, 14, 'center', 700, 'rgba(5,7,24,.55)'); });
        // légende
        [['21 juin', '#ffd166'], ['équinoxe', '#ffffff'], ['21 déc.', '#7fd2ff']].forEach(function (l, i) { var lx = PX0 + 44 + i * 92; g.strokeStyle = l[1]; g.lineWidth = 2.5; g.setLineDash([2, 5]); g.beginPath(); g.moveTo(lx, 24); g.lineTo(lx + 22, 24); g.stroke(); g.setLineDash([]); txt(g, l[0], lx + 28, 29, '#dfe5ff', 13, 'left'); });
        g.strokeStyle = '#ff6fb5'; g.lineWidth = 3; g.beginPath(); g.moveTo(PX0 + 326, 24); g.lineTo(PX0 + 348, 24); g.stroke(); txt(g, 'date choisie : ' + A.dateStr(day), PX0 + 354, 29, '#ffb3d9', 13, 'left', 600);
        arc(day, '#ff6fb5', 3, null);
        if (eD > -4) {
          var X = sx(azV), Y = HY - eD * SCY, hr = 52;
          var gl = g.createRadialGradient(X, Y, 0, X, Y, hr * 2.2); gl.addColorStop(0, 'rgba(255,245,200,1)'); gl.addColorStop(.18, 'rgba(255,220,120,.9)'); gl.addColorStop(.45, 'rgba(255,170,60,.25)'); gl.addColorStop(1, 'rgba(255,140,40,0)');
          g.save(); g.beginPath(); g.rect(PX0, 40, PX1 - PX0, HY - 40); g.clip(); g.fillStyle = gl; g.beginPath(); g.arc(X, Y, hr * 2.2, 0, TAU); g.fill();
          g.fillStyle = '#fffbe0'; g.beginPath(); g.arc(X, Y, 15, 0, TAU); g.fill(); g.restore();
        }
        // vue de profil : définition de l'élévation
        var bx = 668, by = 360, bw = 216;
        g.fillStyle = 'rgba(255,255,255,.05)'; g.fillRect(bx, 40, bw, 320); g.strokeStyle = 'rgba(255,255,255,.14)'; g.strokeRect(bx, 40, bw, 320);
        g.fillStyle = '#2f8f4e'; g.fillRect(bx, by - 30, bw, 30);
        var ox = bx + 60, oy = by - 30, ee = Math.max(eD, 0) * D2R;
        txt(g, 'vue de profil', bx + bw / 2, 62, '#c9d1f5', 14, 'center');
        if (eD > 0) {
          var L = 190, tx = ox + Math.cos(ee) * L, ty = oy - Math.sin(ee) * L;
          g.strokeStyle = 'rgba(255,214,90,.9)'; g.lineWidth = 5; g.beginPath(); g.moveTo(tx, ty); g.lineTo(ox, oy); g.stroke();
          g.fillStyle = '#fffbe0'; g.shadowColor = '#ffd166'; g.shadowBlur = 16; g.beginPath(); g.arc(tx, ty, 11, 0, TAU); g.fill(); g.shadowBlur = 0;
          g.strokeStyle = '#ff6fb5'; g.lineWidth = 3; g.beginPath(); g.arc(ox, oy, 52, -ee, 0); g.stroke();
          g.fillStyle = 'rgba(255,111,181,.25)'; g.beginPath(); g.moveTo(ox, oy); g.arc(ox, oy, 52, -ee, 0); g.closePath(); g.fill();
          txt(g, U.fr(eD, 0) + '°', ox + 60, oy - 6 - ee * 12, '#ff9fd0', 20, 'left', 700);
        } else txt(g, 'Soleil sous l’horizon', bx + bw / 2, by - 120, '#a9b2d6', 15, 'center');
        txt(g, 'sol', bx + bw / 2, by - 8, '#cfeedd', 13, 'center');
        var em = A.elev(lat0, dec, 0) / D2R, dl = A.dayLen(lat0, dec), hh = Math.floor(dl), mm = Math.round((dl - hh) * 60); if (mm === 60) { hh++; mm = 0; }
        read.innerHTML = 'Élévation maximale à midi solaire le ' + A.dateStr(day) + ' à ' + U.fr(Math.abs(lat), 1) + '° ' + (lat >= 0 ? 'N' : 'S') + ' : <b>' + U.fr(em, 1) + '°</b> (= 90° − |latitude − δ| avec δ = ' + U.fr(dec / D2R, 1) + '°) · durée du jour : <b>' + hh + ' h ' + (mm < 10 ? '0' : '') + mm + '</b>';
      }
    };
  });
})();
