/* Soleil — animations « bilan radiatif 2 » : albédo, bilan des flux, effet de serre */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, A = S.astro, TAU = U.TAU, D2R = U.D2R;
  var FONT = 'Outfit, sans-serif';
  function txt(g, s, x, y, col, size, al, w) { g.fillStyle = col; g.font = (w || 400) + ' ' + size + 'px ' + FONT; g.textAlign = al || 'left'; g.fillText(s, x, y); }
  function outline(g, s, x, y, col, size, al, w) {
    g.font = (w || 600) + ' ' + size + 'px ' + FONT; g.textAlign = al || 'left'; g.lineWidth = 5; g.lineJoin = 'round'; g.strokeStyle = 'rgba(5,7,24,.9)'; g.strokeText(s, x, y); g.fillStyle = col; g.fillText(s, x, y);
  }

  /* ======================================================= Albédo */
  S.register('albedo', function (root) {
    var W = 900, Hh = 400, st = S.stage(root, W, Hh), g = st.g;
    var surf = [
      { id: 'nf', n: 'Neige fraîche', a: .83, r: '0,75 à 0,90', c: [236, 246, 255] },
      { id: 'nu', n: 'Nuage', a: .65, r: '0,50 à 0,80', c: [226, 230, 244] },
      { id: 'gl', n: 'Glace', a: .60, r: '0,60 environ', c: [180, 226, 250] },
      { id: 'sa', n: 'Sable clair', a: .35, r: '0,25 à 0,45', c: [226, 196, 128] },
      { id: 'te', n: 'Terre (moyenne)', a: .30, r: '0,30 à 0,35', c: [90, 150, 220] },
      { id: 'cu', n: 'Cultures', a: .20, r: '0,15 à 0,25', c: [142, 190, 80] },
      { id: 'fe', n: 'Forêt de feuillus', a: .175, r: '0,15 à 0,20', c: [78, 152, 62] },
      { id: 'fc', n: 'Forêt de conifères', a: .10, r: '0,05 à 0,15', c: [40, 104, 58] },
      { id: 'me', n: 'Mer', a: .10, r: '0,05 à 0,15', c: [28, 92, 182] },
      { id: 'lu', n: 'Lune', a: .07, r: '0,07', c: [150, 150, 160] },
      { id: 'la', n: 'Lac', a: .03, r: '0,02 à 0,04', c: [18, 58, 120] }
    ];
    var cur = surf[4], A_ = cur.a, Pinc = 1000, name = cur.n, range = cur.r, col = cur.c;
    var ctrl = UI.row(root);
    var chips = UI.chips(ctrl, surf.map(function (s) { return { id: s.id, label: s.n }; }), {
      value: 'te', onchange: function (id) { cur = surf.filter(function (s) { return s.id === id; })[0]; A_ = cur.a; name = cur.n; range = cur.r; col = cur.c; sa.set(A_); }
    });
    var c2 = UI.row(root);
    var sa = UI.slider(c2, { label: 'albédo A', min: 0, max: 1, step: .005, value: A_, color: '#9fe0ff', fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { A_ = v; name = 'valeur choisie'; range = ''; } });
    UI.slider(c2, { label: 'puissance incidente', min: 100, max: 1400, step: 10, value: 1000, color: '#ffd166', fmt: function (v) { return U.fr(v, 0) + ' W/m²'; }, oninput: function (v) { Pinc = v; } });
    var read = UI.readout(root);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        var gy = 290, hx = 380, th = 52 * D2R, bw = 70;
        var di = [Math.cos(th), Math.sin(th)], dr = [Math.cos(th), -Math.sin(th)];
        // surface
        var gr = g.createLinearGradient(0, gy, 0, Hh); gr.addColorStop(0, U.rgb(col)); gr.addColorStop(1, U.rgb([col[0] * .35, col[1] * .35, col[2] * .35]));
        g.fillStyle = gr; g.fillRect(0, gy, W, Hh - gy);
        g.save(); g.beginPath(); g.rect(0, gy, W, Hh - gy); g.clip();
        for (var i = 0; i < 60; i++) { var sx = (i * 61 + 13) % W, sy = gy + 8 + ((i * 37) % 100), tw = .5 + .5 * Math.sin(t * 2 + i); g.fillStyle = 'rgba(255,255,255,' + (0.05 + 0.1 * tw * (A_ + .1)) + ')'; g.fillRect(sx, sy, 14, 2); }
        g.restore();
        // faisceau incident (largeur bw, perpendiculaire)
        var nrm = [-di[1], di[0]], hl = bw / Math.sin(th), L = 460;
        function band(p, d, w, c0, c1) {
          var n = [-d[1], d[0]], a = [p[0] - n[0] * w / 2, p[1] - n[1] * w / 2], b = [p[0] + n[0] * w / 2, p[1] + n[1] * w / 2];
          var q = 0 ;
          g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.lineTo(b[0] + d[0] * L, b[1] + d[1] * L); g.lineTo(a[0] + d[0] * L, a[1] + d[1] * L); g.closePath();
        }
        // incident : de l'amont vers le point d'impact
        var back = [-di[0], -di[1]], p0 = [hx, gy];
        var gi = g.createLinearGradient(p0[0] + back[0] * 330, p0[1] + back[1] * 330, p0[0], p0[1]); gi.addColorStop(0, 'rgba(255,214,90,0)'); gi.addColorStop(.3, 'rgba(255,214,90,.55)'); gi.addColorStop(1, 'rgba(255,235,150,.9)');
        g.fillStyle = gi; g.beginPath();
        var half = bw / 2, nn = [-back[1], back[0]];
        g.moveTo(p0[0] - nn[0] * half, p0[1] - nn[1] * half); g.lineTo(p0[0] + nn[0] * half, p0[1] + nn[1] * half);
        g.lineTo(p0[0] + nn[0] * half + back[0] * 330, p0[1] + nn[1] * half + back[1] * 330); g.lineTo(p0[0] - nn[0] * half + back[0] * 330, p0[1] - nn[1] * half + back[1] * 330); g.closePath(); g.fill();
        g.strokeStyle = 'rgba(255,245,190,.9)'; g.lineWidth = 2; g.setLineDash([14, 12]); g.lineDashOffset = -t * 70;
        for (var k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(p0[0] + nn[0] * half * k / 2.4 + back[0] * 300, p0[1] + nn[1] * half * k / 2.4 + back[1] * 300); g.lineTo(p0[0] + nn[0] * half * k / 2.4, p0[1] + nn[1] * half * k / 2.4); g.stroke(); }
        g.setLineDash([]);
        // faisceau réfléchi : largeur ∝ A
        var wr = bw * A_;
        if (wr > 1) {
          var nr = [-dr[1], dr[0]], gr2 = g.createLinearGradient(p0[0], p0[1], p0[0] + dr[0] * 320, p0[1] + dr[1] * 320); gr2.addColorStop(0, 'rgba(170,225,255,.9)'); gr2.addColorStop(1, 'rgba(170,225,255,0)');
          g.fillStyle = gr2; g.beginPath(); g.moveTo(p0[0] - nr[0] * wr / 2, p0[1] - nr[1] * wr / 2); g.lineTo(p0[0] + nr[0] * wr / 2, p0[1] + nr[1] * wr / 2);
          g.lineTo(p0[0] + nr[0] * wr / 2 + dr[0] * 320, p0[1] + nr[1] * wr / 2 + dr[1] * 320); g.lineTo(p0[0] - nr[0] * wr / 2 + dr[0] * 320, p0[1] - nr[1] * wr / 2 + dr[1] * 320); g.closePath(); g.fill();
          g.strokeStyle = 'rgba(210,240,255,.9)'; g.lineWidth = 2; g.setLineDash([12, 12]); g.lineDashOffset = -t * 60;
          g.beginPath(); g.moveTo(p0[0], p0[1]); g.lineTo(p0[0] + dr[0] * 300, p0[1] + dr[1] * 300); g.stroke(); g.setLineDash([]);
        }
        // absorbé : lueur + ondulations de chaleur ∝ (1 − A)
        var ab = 1 - A_, gl = g.createRadialGradient(p0[0], gy + 4, 4, p0[0], gy + 4, 90 + 60 * ab);
        gl.addColorStop(0, 'rgba(255,90,40,' + (0.85 * ab) + ')'); gl.addColorStop(1, 'rgba(255,90,40,0)');
        g.fillStyle = gl; g.beginPath(); g.ellipse(p0[0], gy + 4, 150 + 60 * ab, 40 + 30 * ab, 0, 0, TAU); g.fill();
        g.strokeStyle = 'rgba(255,120,80,' + (0.25 + 0.7 * ab) + ')'; g.lineWidth = 1.5 + 3.5 * ab; g.lineCap = 'round';
        for (var q = 0; q < 5; q++) {
          var x = p0[0] - 70 + q * 40, hgt = (30 + 60 * ab) * (.6 + .4 * Math.sin(t * 2 + q)); g.beginPath();
          for (var y = 0; y <= hgt; y += 4) { var xx = x + 5 * Math.sin(y * .25 - t * 5 + q); y ? g.lineTo(xx, gy - y) : g.moveTo(xx, gy); } g.stroke();
        }
        // étiquettes
        outline(g, 'incident : ' + U.fr(Pinc, 0) + ' W/m²', 40, 60, '#ffe9a6', 20, 'left', 600);
        outline(g, 'réfléchi : P_diff = A × P_inc = ' + U.fr(A_ * Pinc, 0) + ' W/m²', 880, 80, '#bfe6ff', 20, 'right', 600);
        outline(g, 'absorbé : ' + U.fr((1 - A_) * Pinc, 0) + ' W/m² (chaleur)', p0[0] + 70, gy + 62, '#ffb199', 19, 'left', 600);
        outline(g, name, 30, Hh - 22, '#fff', 20, 'left', 700);
        if (range) outline(g, 'albédo de ' + range, 30, Hh - 46, '#c9d1f5', 15, 'left', 400);
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
    var W = 900, Hh = 430, st = S.stage(root, W, Hh), g = st.g;
    var K = A.K, eps = 0.78, alb = 0.3, Ts = null, C = 26, hist = [], tAcc = 0, lastT = 0;
    function Sabs() { return (1 - alb) * K / 4; }
    function Teq() { return Math.pow(Sabs() / ((1 - eps / 2) * U.sigma), .25); }
    Ts = Teq();
    var ctrl = UI.row(root);
    var se = UI.slider(ctrl, { label: 'gaz à effet de serre ε', min: 0, max: 1, step: .005, value: eps, color: '#ff7a85', fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { eps = v; hist = hist.slice(-1); } });
    var sa = UI.slider(ctrl, { label: 'albédo', min: .1, max: .6, step: .005, value: alb, color: '#9fe0ff', fmt: function (v) { return U.fr(v, 2); }, oninput: function (v) { alb = v; } });
    var c2 = UI.row(root);
    UI.chips(c2, [{ id: 0, label: 'Sans effet de serre' }, { id: .78, label: 'Terre actuelle' }, { id: .80, label: '+ de CO₂' }], { onchange: function (id) { eps = parseFloat(id); se.set(eps); } });
    UI.btn(c2, '↺ T à l’équilibre', function () { Ts = Teq(); hist = []; });
    var read = UI.readout(root);
    function tcol(T) { var f = U.clamp((T - 250) / 60, 0, 1); return [U.lerp(80, 255, f), U.lerp(170, 90, f), U.lerp(255, 80, f)]; }
    return {
      frame: function (t) {
        var dt = Math.min(.1, t - lastT); lastT = t;
        if (!st.fit()) return;
        // dynamique : C dTs/dt = S - σTs⁴ (1 - ε/2)
        var N = Sabs() - U.sigma * Math.pow(Ts, 4) * (1 - eps / 2);
        Ts += N / C * dt; tAcc += dt;
        if (tAcc > .1) { tAcc = 0; hist.push(Ts); if (hist.length > 220) hist.shift(); }
        g.clearRect(0, 0, W, Hh);
        var Es = U.sigma * Math.pow(Ts, 4), B = eps * Es / 2, Tr = (1 - eps) * Es, OLR = Tr + B, S0 = Sabs();
        var YA0 = 120, YA1 = 215, YG = 300, SCW = 0.052;
        // atmosphère (opacité ∝ ε)
        var ga = g.createLinearGradient(0, YA0, 0, YA1); ga.addColorStop(0, 'rgba(255,110,110,' + (0.06 + 0.4 * eps) + ')'); ga.addColorStop(1, 'rgba(255,150,120,' + (0.1 + 0.45 * eps) + ')');
        g.fillStyle = ga; g.fillRect(0, YA0, 640, YA1 - YA0);
        txt(g, 'atmosphère (ε = ' + U.fr(eps, 2) + ')', 630, YA0 + 20, 'rgba(255,190,190,.9)', 14, 'right', 600);
        txt(g, 'espace', 630, 20, 'rgba(200,215,255,.5)', 13, 'right', 600);
        var gg = g.createLinearGradient(0, YG, 0, Hh); var tc = tcol(Ts);
        gg.addColorStop(0, U.rgb(tc, .9)); gg.addColorStop(1, U.rgb([tc[0] * .25, tc[1] * .25, tc[2] * .25])); g.fillStyle = gg; g.fillRect(0, YG, 640, 100);
        txt(g, 'surface', 630, YG + 22, 'rgba(255,255,255,.8)', 14, 'right', 600);
        function arr(x, y0, y1, v, col, lab, nm) {
          var w = Math.max(1.5, v * SCW), ym = (y0 + y1) / 2;
          S.arrow(g, x, y0, x, y1, col, w, Math.max(14, w * .9));
          outline(g, lab, x + w / 2 + 8, ym, col, 18, 'left', 700); outline(g, nm, x + w / 2 + 8, ym + 17, 'rgba(235,240,255,.85)', 12, 'left', 400);
        }
        arr(70, 10, YG - 4, S0, '#ffd646', U.fr(S0, 0) + ' W/m²', 'absorbé (solaire)');
        arr(200, YG - 4, YA1 + 2, Es, '#ff605a', U.fr(Es, 0), 'émis par le sol');
        if (Tr > 1) arr(330, YG - 4, 10, Tr, '#ff8a6a', U.fr(Tr, 0), 'traverse');
        if (eps > .02) { arr(460, YA0 + 6, 10, B, '#ff9a7a', U.fr(B, 0), 'vers l’espace'); arr(560, YA1 - 2, YG - 4, B, '#ff4d6e', U.fr(B, 0), 'vers le sol'); }
        // thermomètre
        var X0 = 668, tb = 40, tH = 300; txt(g, 'T surface', 770, 24, '#c9d1f5', 14, 'center');
        g.fillStyle = 'rgba(255,255,255,.1)'; g.fillRect(X0 + 10, tb, 28, tH);
        var f = U.clamp((Ts - 240) / 80, 0, 1); g.fillStyle = U.rgb(tc); g.shadowColor = U.rgb(tc); g.shadowBlur = 14; g.fillRect(X0 + 10, tb + tH * (1 - f), 28, tH * f); g.shadowBlur = 0;
        for (var T = 250; T <= 310; T += 10) { var yy = tb + tH * (1 - (T - 240) / 80); g.strokeStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.moveTo(X0 + 38, yy); g.lineTo(X0 + 46, yy); g.stroke(); txt(g, T + ' K', X0 + 50, yy + 4, '#c9d1f5', 12, 'left'); }
        txt(g, U.fr(Ts, 1) + ' K', X0 + 24, tb + tH + 24, U.rgb(tc), 20, 'center', 700); txt(g, U.fr(Ts - 273.15, 1) + ' °C', X0 + 24, tb + tH + 44, '#eef1ff', 16, 'center');
        // courbe T(t)
        if (hist.length > 2) {
          var hx0 = 760, hx1 = 880, hy0 = 60, hy1 = 300, Te = Teq(), lo = Math.min(Te, Math.min.apply(null, hist)) - 1, hi = Math.max(Te, Math.max.apply(null, hist)) + 1;
          g.strokeStyle = 'rgba(255,255,255,.25)'; g.strokeRect(hx0, hy0, hx1 - hx0, hy1 - hy0);
          var ye = hy1 - (Te - lo) / (hi - lo) * (hy1 - hy0); g.setLineDash([4, 4]); g.strokeStyle = 'rgba(125,255,176,.8)'; g.beginPath(); g.moveTo(hx0, ye); g.lineTo(hx1, ye); g.stroke(); g.setLineDash([]);
          g.strokeStyle = U.rgb(tc); g.lineWidth = 2.5; g.beginPath();
          hist.forEach(function (v, i) { var x = hx0 + i / 219 * (hx1 - hx0), y = hy1 - (v - lo) / (hi - lo) * (hy1 - hy0); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke();
          txt(g, 'T(t)', (hx0 + hx1) / 2, hy0 - 8, '#c9d1f5', 12, 'center'); txt(g, 'équilibre', hx1 - 2, ye - 5, '#7dffb0', 11, 'right');
        }
        // jauge du déséquilibre
        var gx = 20, gyy = 372;
        txt(g, 'N = entrant (' + U.fr(S0, 0) + ') − sortant (' + U.fr(OLR, 0) + ')', gx, gyy - 8, '#c9d1f5', 14, 'left');
        g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(gx, gyy, 300, 16);
        var nf = U.clamp(N / 60, -1, 1); g.fillStyle = nf >= 0 ? '#ff7a85' : '#7fd2ff'; g.shadowColor = g.fillStyle; g.shadowBlur = 10;
        g.fillRect(gx + 150, gyy, nf * 150, 16); g.shadowBlur = 0; g.strokeStyle = '#fff'; g.beginPath(); g.moveTo(gx + 150, gyy - 4); g.lineTo(gx + 150, gyy + 20); g.stroke();
        txt(g, (N >= 0 ? '+' : '−') + U.fr(Math.abs(N), 1) + ' W/m²', gx + 316, gyy + 14, Math.abs(N) < .3 ? '#7dffb0' : (N > 0 ? '#ff7a85' : '#7fd2ff'), 18, 'left', 700);
        read.innerHTML = Math.abs(N) < .3 ? '<b>Équilibre</b> : l’énergie absorbée = l’énergie émise vers l’espace. Modifie ε pour créer un <b>forçage radiatif</b>.' :
          (N > 0 ? 'Plus d’énergie <b>entrante</b> que sortante : la surface <b>se réchauffe</b>' : 'Plus d’énergie <b>sortante</b> qu’entrante : la surface <b>se refroidit</b>') + ' jusqu’à T ≈ <b>' + U.fr(Teq(), 1) + ' K</b>, où l’émission compense à nouveau l’absorption.';
      }
    };
  });
})();
