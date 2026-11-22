/* Soleil — animations « bilan radiatif 2 » : albédo, bilan des flux, effet de serre */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, A = S.astro, TAU = U.TAU, D2R = U.D2R;
  var FONT = 'Outfit, sans-serif';
  function txt(g, s, x, y, col, size, al, w) { U.rich(g, s, x, y, col, size, al, w); }
  function outline(g, s, x, y, col, size, al, w) { U.rich(g, s, x, y, col, size, al, w || 600, 'rgba(5,7,24,.85)'); }

  /* ======================================================= Albédo */
  S.register('albedo', function (root) {
    var W = 900, Hh = 400, st = S.stage(root, W, Hh), g = st.g;
    var surf = [
      { id: 'nf', n: 'Neige fraîche', a: .83, r: '0,75 à 0,90', c: [236, 246, 255], t: 'neige' },
      { id: 'nu', n: 'Nuage', a: .65, r: '0,50 à 0,80', c: [226, 230, 244], t: 'nuage' },
      { id: 'gl', n: 'Glace', a: .60, r: '0,60 environ', c: [170, 220, 248], t: 'glace' },
      { id: 'sa', n: 'Sable clair', a: .35, r: '0,25 à 0,45', c: [226, 196, 128], t: 'sable' },
      { id: 'te', n: 'Terre (moyenne)', a: .30, r: '0,30 à 0,35', c: [80, 140, 215], t: 'terre' },
      { id: 'cu', n: 'Cultures', a: .20, r: '0,15 à 0,25', c: [150, 190, 80], t: 'culture' },
      { id: 'fe', n: 'Forêt de feuillus', a: .175, r: '0,15 à 0,20', c: [78, 152, 62], t: 'feuillus' },
      { id: 'fc', n: 'Forêt de conifères', a: .10, r: '0,05 à 0,15', c: [40, 104, 58], t: 'coniferes' },
      { id: 'me', n: 'Mer', a: .10, r: '0,05 à 0,15', c: [28, 92, 182], t: 'eau' },
      { id: 'lu', n: 'Lune', a: .07, r: '0,07', c: [150, 150, 160], t: 'lune' },
      { id: 'la', n: 'Lac', a: .03, r: '0,02 à 0,04', c: [18, 58, 120], t: 'eau' }
    ];
    var cur = surf[4], A_ = cur.a, Pinc = 1000, name = cur.n, range = cur.r;
    var ctrl = UI.row(root);
    UI.chips(ctrl, surf.map(function (s) { return { id: s.id, label: s.n }; }), {
      value: 'te', onchange: function (id) { cur = surf.filter(function (s) { return s.id === id; })[0]; A_ = cur.a; name = cur.n; range = cur.r; sa.set(A_); }
    });
    var c2 = UI.row(root);
    var sa = UI.slider(c2, { label: 'albédo A', min: 0, max: 1, step: .005, value: A_, color: '#9fe0ff', w: 3, fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { A_ = v; name = 'albédo choisi'; range = ''; } });
    UI.slider(c2, { label: 'puissance incidente', min: 100, max: 1400, step: 10, value: 1000, color: '#ffd166', w: 7, fmt: function (v) { return U.fr(v, 0) + ' W/m²'; }, oninput: function (v) { Pinc = v; } });
    var read = UI.readout(root);
    var GY = 300, HX = 300;
    function decor(t, c, tm) {
      g.save(); g.beginPath(); g.rect(0, GY, 620, Hh - GY); g.clip();
      var i, x, y;
      if (cur.t === 'neige' || cur.t === 'glace') {
        for (i = 0; i < 46; i++) { x = (i * 83 + 17) % 620; y = GY + 6 + (i * 37) % 90; var tw = .5 + .5 * Math.sin(tm * 2.5 + i * 1.7); g.fillStyle = 'rgba(255,255,255,' + (.25 + .55 * tw) + ')'; g.fillRect(x, y, 2.4, 2.4); }
        if (cur.t === 'glace') { g.strokeStyle = 'rgba(255,255,255,.45)'; g.lineWidth = 1.4; for (i = 0; i < 7; i++) { g.beginPath(); g.moveTo(40 + i * 90, GY); g.lineTo(60 + i * 90, GY + 40 + (i * 13) % 30); g.lineTo(30 + i * 90, GY + 85); g.stroke(); } }
      } else if (cur.t === 'eau') {
        for (i = 0; i < 6; i++) { g.strokeStyle = 'rgba(255,255,255,' + (.10 + .05 * i) + ')'; g.lineWidth = 1.6; g.beginPath(); for (x = 0; x <= 620; x += 8) { y = GY + 14 + i * 16 + 3 * Math.sin(x * .05 + tm * 1.6 + i); x ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
      } else if (cur.t === 'feuillus' || cur.t === 'coniferes' || cur.t === 'culture') {
        for (i = 0; i < 26; i++) {
          x = 14 + i * 24; y = GY + 8 + (i % 2) * 14;
          if (cur.t === 'coniferes') { g.fillStyle = 'rgba(20,70,40,.95)'; g.beginPath(); g.moveTo(x, y - 14); g.lineTo(x + 10, y + 14); g.lineTo(x - 10, y + 14); g.fill(); }
          else if (cur.t === 'feuillus') { g.fillStyle = 'rgba(60,140,50,.9)'; g.beginPath(); g.arc(x, y, 11, 0, TAU); g.fill(); g.fillStyle = 'rgba(110,190,80,.55)'; g.beginPath(); g.arc(x - 3, y - 3, 5, 0, TAU); g.fill(); }
          else { g.strokeStyle = 'rgba(210,230,110,.55)'; g.lineWidth = 2; g.beginPath(); g.moveTo(x - 10, GY + 4); g.lineTo(x - 30, Hh); g.stroke(); }
        }
      } else if (cur.t === 'sable') {
        for (i = 0; i < 5; i++) { g.strokeStyle = 'rgba(255,235,180,.4)'; g.lineWidth = 2; g.beginPath(); for (x = 0; x <= 620; x += 10) { y = GY + 20 + i * 18 + 5 * Math.sin(x * .02 + i * 2); x ? g.lineTo(x, y) : g.moveTo(x, y); } g.stroke(); }
      } else if (cur.t === 'nuage') {
        for (i = 0; i < 14; i++) { g.fillStyle = 'rgba(255,255,255,.55)'; g.beginPath(); g.arc(20 + i * 46, GY + 20 + (i % 3) * 22, 30 + (i % 4) * 6, 0, TAU); g.fill(); }
      } else if (cur.t === 'lune') {
        for (i = 0; i < 9; i++) { x = 40 + i * 70; y = GY + 22 + (i * 31) % 60; g.strokeStyle = 'rgba(70,70,80,.6)'; g.fillStyle = 'rgba(100,100,110,.5)'; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 12 + (i % 3) * 7, 0, TAU); g.fill(); g.stroke(); }
      }
      g.restore();
    }
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var c = cur.c, th = 48 * D2R, di = [Math.cos(th), Math.sin(th)], dr = [Math.cos(th), -Math.sin(th)];
        // ciel
        var sk = g.createLinearGradient(0, 0, 0, GY); sk.addColorStop(0, 'rgba(24,40,110,.6)'); sk.addColorStop(1, 'rgba(70,120,200,.35)');
        g.fillStyle = sk; g.beginPath(); if (g.roundRect) g.roundRect(0, 0, 620, GY, [14, 14, 0, 0]); else g.rect(0, 0, 620, GY); g.fill();
        // sol
        var gr = g.createLinearGradient(0, GY, 0, Hh); gr.addColorStop(0, U.rgb(c)); gr.addColorStop(1, U.rgb([c[0] * .4, c[1] * .4, c[2] * .4]));
        g.fillStyle = gr; g.beginPath(); if (g.roundRect) g.roundRect(0, GY, 620, Hh - GY, [0, 0, 14, 14]); else g.rect(0, GY, 620, Hh - GY); g.fill();
        decor(cur.t, c, t);
        // Soleil
        var sx = HX - di[0] * 300, sy = GY - di[1] * 300;
        var sg = g.createRadialGradient(sx, sy, 4, sx, sy, 80); sg.addColorStop(0, 'rgba(255,250,200,1)'); sg.addColorStop(.25, 'rgba(255,210,90,.8)'); sg.addColorStop(1, 'rgba(255,170,60,0)');
        g.fillStyle = sg; g.beginPath(); g.arc(sx, sy, 80, 0, TAU); g.fill();
        // faisceaux : coupés au niveau du sol (ils s'arrêtent sur la surface)
        g.save(); g.beginPath(); g.rect(0, 0, 620, GY); g.clip();
        // faisceau incident
        var bw = 56, nn = [-di[1], di[0]], p0 = [HX, GY], Lb = 290;
        var gi = g.createLinearGradient(p0[0] - di[0] * Lb, p0[1] - di[1] * Lb, p0[0], p0[1]); gi.addColorStop(0, 'rgba(255,214,90,.05)'); gi.addColorStop(1, 'rgba(255,236,150,.8)');
        var pE = [p0[0] + di[0] * 90, p0[1] + di[1] * 90];
        g.fillStyle = gi; g.beginPath(); g.moveTo(pE[0] - nn[0] * bw / 2, pE[1] - nn[1] * bw / 2); g.lineTo(pE[0] + nn[0] * bw / 2, pE[1] + nn[1] * bw / 2);
        g.lineTo(p0[0] + nn[0] * bw / 2 - di[0] * Lb, p0[1] + nn[1] * bw / 2 - di[1] * Lb); g.lineTo(p0[0] - nn[0] * bw / 2 - di[0] * Lb, p0[1] - nn[1] * bw / 2 - di[1] * Lb); g.closePath(); g.fill();
        g.strokeStyle = 'rgba(255,248,200,.9)'; g.lineWidth = 2; g.setLineDash([12, 12]); g.lineDashOffset = -t * 70;
        for (var k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(p0[0] + nn[0] * bw / 2.6 * k / 2 - di[0] * 270, p0[1] + nn[1] * bw / 2.6 * k / 2 - di[1] * 270); g.lineTo(p0[0] + nn[0] * bw / 2.6 * k / 2, p0[1] + nn[1] * bw / 2.6 * k / 2); g.stroke(); }
        g.setLineDash([]);
        // faisceau réfléchi : largeur proportionnelle à A
        var wr = bw * A_;
        if (wr > 1) {
          var nr = [-dr[1], dr[0]], Lr = 250, g2 = g.createLinearGradient(p0[0], p0[1], p0[0] + dr[0] * Lr, p0[1] + dr[1] * Lr); g2.addColorStop(0, 'rgba(180,230,255,.9)'); g2.addColorStop(1, 'rgba(180,230,255,0)');
          var pS = [p0[0] - dr[0] * 90, p0[1] - dr[1] * 90];
          g.fillStyle = g2; g.beginPath(); g.moveTo(pS[0] - nr[0] * wr / 2, pS[1] - nr[1] * wr / 2); g.lineTo(pS[0] + nr[0] * wr / 2, pS[1] + nr[1] * wr / 2);
          g.lineTo(p0[0] + nr[0] * wr / 2 + dr[0] * Lr, p0[1] + nr[1] * wr / 2 + dr[1] * Lr); g.lineTo(p0[0] - nr[0] * wr / 2 + dr[0] * Lr, p0[1] - nr[1] * wr / 2 + dr[1] * Lr); g.closePath(); g.fill();
          g.strokeStyle = 'rgba(225,245,255,.95)'; g.lineWidth = 2; g.setLineDash([12, 12]); g.lineDashOffset = -t * 60; g.beginPath(); g.moveTo(p0[0], p0[1]); g.lineTo(p0[0] + dr[0] * 230, p0[1] + dr[1] * 230); g.stroke(); g.setLineDash([]);
        }
        g.restore();
        // absorption : empreinte chauffée sur le sol, léger voile de chaleur au-dessus, ondulations de part et d'autre des faisceaux
        var ab = 1 - A_, half = bw / (2 * Math.sin(th));
        g.save(); g.fillStyle = 'rgba(255,' + Math.round(150 + 60 * A_) + ',90,' + (0.35 + 0.65 * ab) + ')';
        g.fillRect(HX - half, GY - 4, 2 * half, 6); g.restore();
        g.strokeStyle = 'rgba(255,140,100,' + (0.3 + 0.65 * ab) + ')'; g.lineWidth = 1.6 + 2.2 * ab; g.lineCap = 'round';
        [-185, -150, -115, 105, 140, 175].forEach(function (dx, q) {
          var x = HX + dx, hgt = (18 + 46 * ab) * (.65 + .35 * Math.sin(t * 2 + q));
          g.beginPath(); for (var y = 0; y <= hgt; y += 3) { var xx = x + 4 * Math.sin(y * .22 - t * 4 + q * 1.3); y ? g.lineTo(xx, GY - 6 - y) : g.moveTo(xx, GY - 6); } g.stroke();
        });
        // étiquettes de la scène
        U.rich(g, 'P_{inc} = ' + U.fr(Pinc, 0) + ' W/m²', 18, 34, '#ffe9a6', 19, 'left', 600, 'rgba(5,7,24,.8)');
        U.rich(g, 'P_{diff} = A × P_{inc} = ' + U.fr(A_ * Pinc, 0) + ' W/m²', 600, 40, '#bfe6ff', 17, 'right', 600, 'rgba(5,7,24,.8)');
        U.rich(g, 'P_{abs} = (1 − A) × P_{inc} = ' + U.fr((1 - A_) * Pinc, 0) + ' W/m²', 600, Hh - 14, '#ffb199', 17, 'right', 600, 'rgba(5,7,24,.75)');
        U.rich(g, name, 18, Hh - 30, '#ffffff', 21, 'left', 700, 'rgba(5,7,24,.75)');
        if (range) U.rich(g, 'albédo de ' + range, 18, Hh - 10, '#e3e9ff', 14, 'left', 400, 'rgba(5,7,24,.75)');
        // panneau de bilan (à droite)
        var bx = 684, by = 56, bwid = 70, bh = 276;
        U.rich(g, 'Que devient la puissance incidente ?', 760, 32, '#c9d1f5', 14, 'center', 600);
        var hr = bh * A_, ha = bh - hr;
        g.fillStyle = 'rgba(160,220,255,.9)'; g.shadowColor = 'rgba(160,220,255,.7)'; g.shadowBlur = 12; g.fillRect(bx, by, bwid, hr); g.shadowBlur = 0;
        g.fillStyle = 'rgba(255,120,70,.92)'; g.shadowColor = 'rgba(255,120,70,.7)'; g.shadowBlur = 12; g.fillRect(bx, by + hr, bwid, ha); g.shadowBlur = 0;
        g.strokeStyle = 'rgba(255,255,255,.8)'; g.lineWidth = 1.5; g.strokeRect(bx, by, bwid, bh);
        U.rich(g, 'réfléchi', bx + bwid + 12, by + hr / 2 - 2, '#bfe6ff', 15, 'left', 600); U.rich(g, U.fr(A_ * 100, 0) + ' %', bx + bwid + 12, by + hr / 2 + 18, '#fff', 17, 'left', 700);
        U.rich(g, 'absorbé', bx + bwid + 12, by + hr + ha / 2 - 2, '#ffb199', 15, 'left', 600); U.rich(g, U.fr((1 - A_) * 100, 0) + ' %', bx + bwid + 12, by + hr + ha / 2 + 18, '#fff', 17, 'left', 700);
        U.rich(g, '100 %', bx - 8, by + 5, '#c9d1f5', 13, 'right'); U.rich(g, 'P_{inc}', bx + bwid / 2, by + bh + 22, '#c9d1f5', 14, 'center', 600);
        read.innerHTML = 'Albédo <b>A = P<sub>diff</sub> / P<sub>inc</sub> = ' + U.fr(A_, 2) + '</b> : <b>' + U.fr(A_ * 100, 0) + ' %</b> du rayonnement est renvoyé, <b>' + U.fr((1 - A_) * 100, 0) + ' %</b> est absorbé et chauffe la surface.';
      }
    };
  });

  /* ======================================================= Bilan radiatif de la Terre (flux animés) */
  S.register('bilan', function (root) {
    var W = 900, Hh = 470, st = S.stage(root, W, Hh), g = st.g;
    var SC = 0.047, YA0 = 160, YA1 = 292, YG = 392;
    var SOL = [255, 214, 70], IR = [255, 96, 90], NR = [255, 120, 200];
    var arrows = [
      { k: 'sol', v: 341.3, x: 100, y0: 8, y1: YA0, c: SOL, lab: '341', nm: 'solaire incident', vy: 64, side: 'r', t: 'Rayonnement solaire incident : 341,3 W/m² (K/4)' },
      { k: 'sol', v: 79, x: 200, y0: YA0, y1: 8, c: SOL, lab: '79', nm: 'nuages', vy: 62, side: 'r', t: 'Réfléchi par les nuages, les aérosols et l’atmosphère : 79 W/m²' },
      { k: 'sol', v: 23, x: 266, y0: YG, y1: 8, c: SOL, lab: '23', nm: 'sol', vy: 62, side: 'r', t: 'Réfléchi par la surface : 23 W/m². Au total, 102 W/m² sont renvoyés vers l’espace (albédo ≈ 0,30).' },
      { k: 'sol', v: 78, x: 100, y0: 224, y1: 224, x1: 178, c: SOL, lab: '78', nm: 'absorbé', vy: 224, side: 'h', t: 'Absorbé par l’atmosphère : 78 W/m²', horiz: true },
      { k: 'sol', v: 184, x: 100, y0: YA1, y1: YG, c: SOL, lab: '184', nm: 'atteint le sol', vy: 336, side: 'r', t: '184 W/m² atteignent le sol : 161 absorbés + 23 réfléchis' },
      { k: 'nr', v: 17, x: 350, y0: YG, y1: YA1, c: NR, lab: '17', nm: 'convection', vy: 330, side: 'l', t: 'Transferts thermiques (conduction, convection) : 17 W/m²' },
      { k: 'nr', v: 80, x: 396, y0: YG, y1: YA1, c: NR, lab: '80', nm: 'évaporation', vy: 330, side: 'r', t: 'Évaporation : 80 W/m²' },
      { k: 'ir', v: 356, x: 500, y0: YG, y1: YA1, c: IR, lab: '356', nm: 'absorbé (IR)', vy: 330, side: 'r', t: 'Émis par la surface : 396 W/m², dont 356 sont absorbés par l’atmosphère' },
      { k: 'ir', v: 40, x: 600, y0: YG, y1: 8, c: IR, lab: '40', nm: 'fenêtre', vy: 62, side: 'r', t: 'Fenêtre atmosphérique : 40 W/m² s’échappent directement vers l’espace' },
      { k: 'ir', v: 199, x: 700, y0: YA0, y1: 8, c: IR, lab: '199', nm: 'vers l’espace', vy: 62, side: 'r', t: 'Émis par l’atmosphère et les nuages vers l’espace : 169 + 30 = 199 W/m² (au total, 40 + 199 = 239 W/m² sortent)' },
      { k: 'ir', v: 333, x: 812, y0: YA1, y1: YG, c: IR, lab: '333', nm: 'contre-rayonnement', vy: 336, side: 'l', t: 'Contre-rayonnement : 333 W/m² réémis vers la surface par les gaz à effet de serre' }
    ];
    arrows.forEach(function (a, i) { a.w = Math.max(2.5, a.v * SC); a.ph = i * .37; });
    var filter = 'all', showBal = false, hov = null;
    var ctrl = UI.row(root);
    UI.chips(ctrl, [{ id: 'all', label: 'Tout' }, { id: 'sol', label: '☀ Solaire', color: '#ffd646' }, { id: 'ir', label: 'Infrarouge', color: '#ff605a' }, { id: 'nr', label: 'Non radiatif', color: '#ff78c8' }], { value: 'all', onchange: function (id) { filter = id; } });
    UI.chips(ctrl, [{ id: 'b', label: '⚖ Équilibres' }], { multi: true, onchange: function (id, all) { showBal = all.indexOf('b') >= 0; } });
    var read = UI.readout(root);
    S.pointer(st, {
      move: function (x, y) {
        hov = null;
        arrows.forEach(function (a) {
          if (a.horiz) { if (x > a.x - 4 && x < a.x1 + 6 && Math.abs(y - a.y0) < 14) hov = a; }
          else { var ya = Math.min(a.y0, a.y1), yb = Math.max(a.y0, a.y1); if (Math.abs(x - a.x) < Math.max(a.w / 2 + 8, 12) && y > ya && y < yb) hov = a; }
        });
      }, leave: function () { hov = null; }
    });
    function drawArrow(g, a, t, dim) {
      var al = dim ? .18 : 1, x0 = a.x, y0 = a.y0, x1 = a.horiz ? a.x1 : a.x, y1 = a.y1;
      var dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len, hw = a.w, head = Math.max(16, hw * .9);
      var bx = x1 - ux * head, by = y1 - uy * head, nx = -uy, ny = ux;
      g.save(); g.globalAlpha = al;
      var gr = g.createLinearGradient(x0, y0, x1, y1); gr.addColorStop(0, U.rgb(a.c, .55)); gr.addColorStop(1, U.rgb(a.c, .95));
      g.fillStyle = gr; g.shadowColor = U.rgb(a.c); g.shadowBlur = hov === a ? 22 : 8;
      g.beginPath(); g.moveTo(x0 + nx * hw / 2, y0 + ny * hw / 2); g.lineTo(bx + nx * hw / 2, by + ny * hw / 2); g.lineTo(bx + nx * (hw / 2 + head * .45), by + ny * (hw / 2 + head * .45)); g.lineTo(x1, y1);
      g.lineTo(bx - nx * (hw / 2 + head * .45), by - ny * (hw / 2 + head * .45)); g.lineTo(bx - nx * hw / 2, by - ny * hw / 2); g.lineTo(x0 - nx * hw / 2, y0 - ny * hw / 2); g.closePath(); g.fill();
      g.shadowBlur = 0;
      // particules
      var n = Math.max(2, Math.round(len / 55));
      g.fillStyle = 'rgba(255,255,255,.9)';
      for (var i = 0; i < n; i++) { var f = ((t * .28 + a.ph + i / n) % 1), px = x0 + dx * f + nx * Math.sin(i * 5 + a.ph) * hw * .25, py = y0 + dy * f + ny * Math.sin(i * 5 + a.ph) * hw * .25; g.beginPath(); g.arc(px, py, Math.max(1.6, hw * .12), 0, TAU); g.fill(); }
      g.restore();
    }
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        // espace, atmosphère, sol
        var ga = g.createLinearGradient(0, YA0, 0, YA1); ga.addColorStop(0, 'rgba(60,120,220,.20)'); ga.addColorStop(1, 'rgba(100,170,255,.34)');
        g.fillStyle = ga; g.fillRect(0, YA0, W, YA1 - YA0); g.strokeStyle = 'rgba(140,190,255,.35)'; g.lineWidth = 1; g.setLineDash([6, 6]);
        g.beginPath(); g.moveTo(0, YA0); g.lineTo(W, YA0); g.moveTo(0, YA1); g.lineTo(W, YA1); g.stroke(); g.setLineDash([]);
        txt(g, 'ESPACE', 884, 24, 'rgba(200,215,255,.55)', 13, 'right', 600); txt(g, 'ATMOSPHÈRE', 884, YA0 + 22, 'rgba(160,200,255,.8)', 14, 'right', 600); txt(g, 'SURFACE', 884, YG + 28, 'rgba(160,230,180,.85)', 14, 'right', 600);
        var gg = g.createLinearGradient(0, YG, 0, Hh); gg.addColorStop(0, '#2c8a4e'); gg.addColorStop(.35, '#1b5f98'); gg.addColorStop(1, '#0c2b52');
        g.fillStyle = gg; g.fillRect(0, YG, W, Hh - YG);
        // un nuage
        g.fillStyle = 'rgba(255,255,255,.22)'; [[250, 226, 34], [280, 218, 30], [318, 228, 32], [346, 222, 22]].forEach(function (c) { g.beginPath(); g.arc(c[0], c[1], c[2], 0, TAU); g.fill(); });
        txt(g, 'gaz à effet de serre', 790, 262, 'rgba(255,170,170,.85)', 14, 'center', 600);
        arrows.forEach(function (a) { var dim = (filter !== 'all' && a.k !== filter); drawArrow(g, a, t, dim); });
        arrows.forEach(function (a) {
          var dim = (filter !== 'all' && a.k !== filter); if (dim) return;
          var half = a.horiz ? 0 : a.w / 2, lx, al;
          if (a.side === 'h') { lx = (a.x + a.x1) / 2; al = 'center'; outline(g, a.lab, lx, a.vy - 16, U.rgb(a.c), 17, al, 700); outline(g, a.nm, lx, a.vy + 26, 'rgba(235,240,255,.85)', 12, al, 400); return; }
          if (a.side === 'l') { lx = a.x - half - 8; al = 'right'; } else { lx = a.x + half + 8; al = 'left'; }
          outline(g, a.lab, lx, a.vy, U.rgb(a.c), 17, al, 700);
          outline(g, a.nm, lx, a.vy + 16, 'rgba(235,240,255,.85)', 12, al, 400);
        });
        outline(g, '396 émis par le sol', 380, YG + 30, '#ffb3ad', 14, 'center', 600);
        if (showBal) {
          function box(x, y, w, h, s1, s2, col) { g.fillStyle = 'rgba(8,12,36,.88)'; g.strokeStyle = col; g.lineWidth = 1.5; g.fillRect(x, y, w, h); g.strokeRect(x, y, w, h); txt(g, s1, x + w / 2, y + 20, '#eef1ff', 14, 'center', 600); txt(g, s2, x + w / 2, y + 40, col, 15, 'center', 700); }
          box(320, 14, 250, 50, 'Sommet : entrée = sortie', '341 = 102 + 239 ✓', '#ffd646');
          box(430, 184, 190, 54, 'Atmosphère', '78+356+97 = 531 ≈ 332+199', '#9fe0ff');
          box(640, 410, 240, 50, 'Surface : 161 + 333 = 494', '≈ 396 + 17 + 80 = 493 ✓', '#7dffb0');
        }
        read.innerHTML = hov ? '<b>' + hov.t + '</b>' : 'Flux moyens en W/m² (Trenberth et al.). Survole une flèche pour la détailler ; l’épaisseur des flèches est proportionnelle au flux.';
      }
    };
  });

  /* ======================================================= Effet de serre : modèle à une couche, forçage radiatif */
  S.register('serre', function (root) {
    var W = 900, Hh = 440, st = S.stage(root, W, Hh), g = st.g;
    var K = A.K, eps = 0.78, alb = 0.3, C = 26, hist = [], tAcc = 0, lastT = 0;
    function Sabs() { return (1 - alb) * K / 4; }
    function Teq(e, a) { e = e == null ? eps : e; a = a == null ? alb : a; return Math.pow((1 - a) * K / 4 / ((1 - e / 2) * U.sigma), .25); }
    var Ts = Teq();
    var ctrl = UI.row(root);
    var se = UI.slider(ctrl, { label: 'gaz à effet de serre ε', min: 0, max: 1, step: .005, value: eps, color: '#ff7a85', w: 3, fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { eps = v; } });
    var sa = UI.slider(ctrl, { label: 'albédo A', min: .1, max: .6, step: .005, value: alb, color: '#9fe0ff', w: 3, fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { alb = v; } });
    var c2 = UI.row(root);
    UI.chips(c2, [{ id: 0, label: 'Sans effet de serre' }, { id: .78, label: 'Terre actuelle' }, { id: .80, label: '+ de CO₂' }], { onchange: function (id) { eps = parseFloat(id); se.set(eps); } });
    UI.btn(c2, '↺ T à l’équilibre', function () { Ts = Teq(); hist = []; });
    var read = UI.readout(root);
    function tcol(T) { var f = U.clamp((T - 250) / 60, 0, 1); return [U.lerp(90, 255, f), U.lerp(180, 100, f), U.lerp(255, 80, f)]; }
    var mol = []; for (var i = 0; i < 26; i++) mol.push([(i * 97) % 590, 6 + (i * 53) % 84, .6 + (i % 5) * .2, i % 3]);
    var DX = 0, DW = 612, YA0 = 112, YA1 = 214, YG = 296;
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - lastT); lastT = t;
        if (!st.fit()) return;
        // dynamique : C dTs/dt = S - σTs⁴ (1 - ε/2)
        var N = Sabs() - U.sigma * Math.pow(Ts, 4) * (1 - eps / 2);
        Ts += N / C * dt; tAcc += dt;
        if (tAcc > .1) { tAcc = 0; hist.push(Ts); if (hist.length > 220) hist.shift(); }
        g.clearRect(0, 0, W, Hh);
        var Es = U.sigma * Math.pow(Ts, 4), B = eps * Es / 2, Tr = (1 - eps) * Es, OLR = Tr + B, S0 = Sabs(), tc = tcol(Ts), te = Teq();
        // ---- scène
        var sp = g.createLinearGradient(0, 0, 0, YA0); sp.addColorStop(0, 'rgba(5,8,30,.8)'); sp.addColorStop(1, 'rgba(20,30,80,.5)');
        g.fillStyle = sp; g.beginPath(); if (g.roundRect) g.roundRect(0, 0, DW, YA0, [14, 14, 0, 0]); else g.rect(0, 0, DW, YA0); g.fill();
        var ga = g.createLinearGradient(0, YA0, 0, YA1); ga.addColorStop(0, 'rgba(255,120,120,' + (0.04 + 0.34 * eps) + ')'); ga.addColorStop(1, 'rgba(255,170,130,' + (0.08 + 0.42 * eps) + ')');
        g.fillStyle = ga; g.fillRect(0, YA0, DW, YA1 - YA0);
        g.fillStyle = 'rgba(20,40,90,.28)'; g.fillRect(0, YA1, DW, YG - YA1);
        // molécules de gaz à effet de serre (nombre ∝ ε)
        var nm = Math.round(mol.length * eps);
        for (var m = 0; m < nm; m++) { var mo = mol[m], mx = (mo[0] + t * 14 * mo[2]) % DW, my = YA0 + 8 + (mo[1] * (YA1 - YA0 - 16) / 90) + 4 * Math.sin(t * 1.5 + m); g.fillStyle = 'rgba(255,200,190,.75)'; g.beginPath(); g.arc(mx, my, 3.2, 0, TAU); g.arc(mx + 7, my + 2, 2.6, 0, TAU); g.arc(mx - 7, my + 2, 2.6, 0, TAU); g.fill(); }
        var gg = g.createLinearGradient(0, YG, 0, Hh - 6); gg.addColorStop(0, U.rgb(tc, .95)); gg.addColorStop(1, U.rgb([tc[0] * .3, tc[1] * .3, tc[2] * .3]));
        g.fillStyle = gg; g.beginPath(); if (g.roundRect) g.roundRect(0, YG, DW, Hh - 6 - YG, [0, 0, 14, 14]); else g.rect(0, YG, DW, Hh - 6 - YG); g.fill();
        txt(g, 'ESPACE', DW - 12, 22, 'rgba(200,215,255,.55)', 12, 'right', 600); txt(g, 'ATMOSPHÈRE  (ε = ' + U.fr(eps, 2) + ')', DW - 12, YA0 + 20, 'rgba(255,200,190,.95)', 13, 'right', 600); txt(g, 'SURFACE', DW - 12, YG + 22, 'rgba(255,255,255,.8)', 13, 'right', 600);
        function arr(x, y0, y1, v, col, lab, nmx, side) {
          var w = Math.max(2, v * 0.05), ym = (y0 + y1) / 2;
          S.arrow(g, x, y0, x, y1, col, w, Math.max(14, w * .9));
          var lx = x + (side === 'l' ? -w / 2 - 10 : w / 2 + 10), al = side === 'l' ? 'right' : 'left';
          U.rich(g, lab, lx, ym - 2, col, 18, al, 700, 'rgba(5,7,24,.85)'); U.rich(g, nmx, lx, ym + 15, 'rgba(235,240,255,.9)', 12.5, al, 400, 'rgba(5,7,24,.85)');
        }
        arr(95, 6, YG - 4, S0, '#ffd646', U.fr(S0, 0), 'solaire absorbé', 'r');
        arr(230, YG - 4, YA1 + 2, Es, '#ff6a64', U.fr(Es, 0), 'émis par le sol σT_s⁴', 'r');
        if (Tr > 1) arr(360, YG - 4, 6, Tr, '#ff9a72', U.fr(Tr, 0), 'traverse l’atmosphère', 'r');
        if (eps > .02) { arr(475, YA0 + 4, 6, B, '#ffa07c', U.fr(B, 0), 'vers l’espace', 'r'); arr(560, YA1 - 2, YG - 4, B, '#ff4d6e', U.fr(B, 0), 'retour vers le sol', 'l'); }
        txt(g, 'flux en W/m²', DW - 10, Hh - 16, 'rgba(255,255,255,.7)', 12, 'right');
        // jauge de déséquilibre
        txt(g, 'N = entrant (' + U.fr(S0, 0) + ') − sortant (' + U.fr(OLR, 0) + ')', 14, Hh - 36, 'rgba(255,255,255,.92)', 13, 'left', 600);
        var gx = 14, gyy = Hh - 28; g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(gx, gyy, 250, 10);
        var nf = U.clamp(N / 60, -1, 1); g.fillStyle = nf >= 0 ? '#ff7a85' : '#7fd2ff'; g.fillRect(gx + 125, gyy, nf * 125, 10); g.fillStyle = '#fff'; g.fillRect(gx + 124, gyy - 3, 2, 16);
        txt(g, (N >= 0 ? '+' : '−') + U.fr(Math.abs(N), 1) + ' W/m²', gx + 262, gyy + 10, Math.abs(N) < .3 ? '#7dffb0' : (N > 0 ? '#ffb0b8' : '#9fe0ff'), 16, 'left', 700);
        // ---- panneau température (toujours affiché)
        var PX = 626, PW = 268;
        g.fillStyle = 'rgba(255,255,255,.05)'; g.beginPath(); if (g.roundRect) g.roundRect(PX, 0, PW, Hh - 6, 14); else g.rect(PX, 0, PW, Hh - 6); g.fill(); g.strokeStyle = 'rgba(255,255,255,.14)'; g.stroke();
        txt(g, 'Température de surface', PX + PW / 2, 26, '#eef1ff', 16, 'center', 700);
        var TX = PX + 20, TY0 = 60, TH = 250, TMIN = 240, TMAX = 320;
        function ty(T) { return TY0 + TH * (1 - (T - TMIN) / (TMAX - TMIN)); }
        g.fillStyle = 'rgba(255,255,255,.1)'; g.beginPath(); if (g.roundRect) g.roundRect(TX, TY0, 26, TH, 13); else g.rect(TX, TY0, 26, TH); g.fill();
        var fh = TH * U.clamp((Ts - TMIN) / (TMAX - TMIN), 0, 1);
        g.save(); g.beginPath(); if (g.roundRect) g.roundRect(TX, TY0, 26, TH, 13); else g.rect(TX, TY0, 26, TH); g.clip();
        var tg = g.createLinearGradient(0, TY0 + TH, 0, TY0); tg.addColorStop(0, 'rgb(80,170,255)'); tg.addColorStop(1, 'rgb(255,90,70)'); g.fillStyle = tg; g.fillRect(TX, TY0 + TH - fh, 26, fh); g.restore();
        for (var T = 250; T <= 310; T += 10) { g.strokeStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.moveTo(TX + 26, ty(T)); g.lineTo(TX + 33, ty(T)); g.stroke(); txt(g, T + ' K', TX + 36, ty(T) + 4, '#c9d1f5', 11, 'left'); }
        // repère de la température d'équilibre
        var yq = ty(U.clamp(te, TMIN, TMAX)); g.fillStyle = '#7dffb0'; g.beginPath(); g.moveTo(TX - 4, yq); g.lineTo(TX - 18, yq - 7); g.lineTo(TX - 18, yq + 7); g.closePath(); g.fill();
        g.strokeStyle = 'rgba(125,255,176,.7)'; g.setLineDash([4, 4]); g.beginPath(); g.moveTo(TX - 4, yq); g.lineTo(TX + 26, yq); g.stroke(); g.setLineDash([]);
        txt(g, 'T actuelle', PX + 20, TY0 + TH + 28, '#c9d1f5', 12, 'left'); txt(g, U.fr(Ts, 1) + ' K  (' + U.fr(Ts - 273.15, 1) + ' °C)', PX + 20, TY0 + TH + 50, U.rgb(tc), 18, 'left', 700);
        txt(g, 'T d’équilibre', PX + 20, TY0 + TH + 74, '#c9d1f5', 12, 'left'); txt(g, U.fr(te, 1) + ' K  (' + U.fr(te - 273.15, 1) + ' °C)', PX + 20, TY0 + TH + 96, '#7dffb0', 18, 'left', 700);
        // historique T(t) avec repères
        var hx0 = PX + 130, hx1 = PX + PW - 14, hy0 = 60, hy1 = 310;
        txt(g, 'T(t)', (hx0 + hx1) / 2, 50, '#a9b2d6', 12, 'center');
        g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1; g.strokeRect(hx0, hy0, hx1 - hx0, hy1 - hy0);
        function hyv(T) { return hy1 - (U.clamp(T, TMIN, TMAX) - TMIN) / (TMAX - TMIN) * (hy1 - hy0); }
        [[255, 'sans effet de serre'], [288, '288 K']].forEach(function (r) { var y = hyv(r[0]); g.strokeStyle = 'rgba(255,255,255,.2)'; g.setLineDash([2, 5]); g.beginPath(); g.moveTo(hx0, y); g.lineTo(hx1, y); g.stroke(); g.setLineDash([]); txt(g, r[1], hx1 - 3, y - 3, 'rgba(255,255,255,.45)', 10.5, 'right'); });
        var ye = hyv(te); g.strokeStyle = 'rgba(125,255,176,.9)'; g.setLineDash([5, 4]); g.lineWidth = 1.8; g.beginPath(); g.moveTo(hx0, ye); g.lineTo(hx1, ye); g.stroke(); g.setLineDash([]);
        if (hist.length > 1) { g.strokeStyle = U.rgb(tc); g.lineWidth = 2.6; g.beginPath(); hist.forEach(function (v, i) { var x = hx1 - (hist.length - 1 - i) / 219 * (hx1 - hx0), y = hyv(v); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); }
        g.fillStyle = U.rgb(tc); g.beginPath(); g.arc(hx1, hyv(Ts), 4, 0, TAU); g.fill();
        read.innerHTML = Math.abs(N) < .3 ? '<b>Équilibre</b> : énergie absorbée = énergie émise vers l’espace. Modifie ε ou l’albédo pour créer un <b>forçage radiatif</b>.' :
          (N > 0 ? 'Plus d’énergie <b>entrante</b> que sortante : la surface <b>se réchauffe</b>' : 'Plus d’énergie <b>sortante</b> qu’entrante : la surface <b>se refroidit</b>') + ' jusqu’à T ≈ <b>' + U.fr(te, 1) + ' K</b>, où l’émission compense à nouveau l’absorption.';
      }
    };
  });
})();
