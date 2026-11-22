/* Soleil — animations « rayonnement solaire » : échelle, distance, puissance, chaîne proton-proton */
(function () {
  'use strict';
  var S = window.Soleil, U = S.util, UI = S.ui, TAU = U.TAU;

  /* Petite Terre « photo » : disque bleu ombré avec quelques continents stylisés */
  function drawEarth(g, x, y, r, rot) {
    var gr = g.createRadialGradient(x - r * .35, y - r * .35, r * .1, x, y, r);
    gr.addColorStop(0, '#8fd3ff'); gr.addColorStop(.55, '#2f86e0'); gr.addColorStop(1, '#0b2a70');
    g.save(); g.beginPath(); g.arc(x, y, r, 0, TAU); g.clip();
    g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    g.fillStyle = 'rgba(70,170,80,.9)';
    var o = (rot || 0) % TAU;
    [[-.2, -.15, .38, .26], [.35, .22, .26, .3], [-.5, .35, .2, .14], [.1, -.55, .22, .12]].forEach(function (b) {
      var bx = x + (((b[0] + o / TAU * 2 + 1.5) % 2) - 1) * r * 1.1;
      g.beginPath(); g.ellipse(bx, y + b[1] * r, b[2] * r, b[3] * r, 0.3, 0, TAU); g.fill();
    });
    var sh = g.createRadialGradient(x - r * .5, y - r * .5, r * .2, x, y, r * 1.1);
    sh.addColorStop(0, 'rgba(255,255,255,0)'); sh.addColorStop(1, 'rgba(0,0,30,.55)');
    g.fillStyle = sh; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    g.restore();
    g.save(); g.strokeStyle = 'rgba(120,200,255,.6)'; g.lineWidth = Math.max(1, r * .06);
    g.shadowColor = '#5cc8ff'; g.shadowBlur = r * .5; g.beginPath(); g.arc(x, y, r, 0, TAU); g.stroke(); g.restore();
  }
  S.drawEarth = drawEarth;

  /* ======================================================= 1. Le Soleil à l'échelle */
  S.register('echelle', function (root) {
    var st = S.stage(root, 900, 430), g = st.g;
    var cx = 270, cy = 215, R = 185, rE = R / 109.1;
    var mode = 0, t0 = 0, tm = 0;
    var ctrl = UI.row(root);
    UI.btn(ctrl, '🌍 Placer la Terre', function () { mode = 1; t0 = tm; }, 'main');
    UI.btn(ctrl, '↔ Aligner des Terres', function () { mode = 2; t0 = tm; });
    UI.btn(ctrl, '▦ Couvrir le disque', function () { mode = 3; t0 = tm; });
    UI.btn(ctrl, '↺', function () { mode = 0; t0 = tm; });
    function label(txt, x, y, col, size, al) { g.fillStyle = col || '#eef1ff'; g.font = '600 ' + (size || 17) + 'px Outfit, sans-serif'; g.textAlign = al || 'left'; g.fillText(txt, x, y); }
    return {
      frame: function (t) {
        tm = t;
        if (!st.fit()) return;
        g.clearRect(0, 0, 900, 430);
        S.drawSun(g, cx, cy, R, t, { halo: 1.45 });
        var el = t - t0;
        if (mode >= 1) {
          var k = U.ease(el / 0.8);
          var ex = cx + R * .36, ey = cy + R * .2;
          // loupe
          var mx = 740, my = 140, mr = 92;
          g.save(); g.globalAlpha = k;
          g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 1.5; g.setLineDash([5, 5]);
          g.beginPath(); g.moveTo(ex, ey); g.lineTo(mx - mr * .9, my - mr * .45); g.moveTo(ex, ey); g.lineTo(mx - mr * .9, my + mr * .5); g.stroke(); g.setLineDash([]);
          drawEarth(g, mx, my, mr * .72, t * .35);
          g.strokeStyle = 'rgba(255,255,255,.7)'; g.lineWidth = 3; g.beginPath(); g.arc(mx, my, mr, 0, TAU); g.stroke();
          label('Terre', mx, my + mr + 24, '#9fe0ff', 19, 'center');
          g.restore();
          g.save(); g.globalAlpha = k;
          g.fillStyle = '#5cc8ff'; g.shadowColor = '#5cc8ff'; g.shadowBlur = 10; g.beginPath(); g.arc(ex, ey, Math.max(rE, 1.7), 0, TAU); g.fill();
          g.shadowBlur = 0; g.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.4 * Math.sin(t * 4)) + ')'; g.lineWidth = 1.5;
          g.beginPath(); g.arc(ex, ey, 9 + 2 * Math.sin(t * 4), 0, TAU); g.stroke(); g.restore();
        }
        if (mode === 2) {
          var n = Math.floor(109 * U.ease(el / 3.2) + 0.0001);
          for (var i = 0; i < n; i++) {
            var x = cx - R + (i + .5) * (2 * R / 109.1);
            g.fillStyle = i % 2 ? '#7fd2ff' : '#ffffff'; g.beginPath(); g.arc(x, cy, rE * 1.05, 0, TAU); g.fill();
          }
          g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 1; g.beginPath(); g.moveTo(cx - R, cy + 16); g.lineTo(cx + R, cy + 16);
          g.moveTo(cx - R, cy + 11); g.lineTo(cx - R, cy + 21); g.moveTo(cx + R, cy + 11); g.lineTo(cx + R, cy + 21); g.stroke();
          label(n + ' Terres', 640, 305, '#ffd166', 30, 'center');
          label('alignées sur le diamètre du Soleil', 640, 335, '#eef1ff', 17, 'center');
        }
        if (mode === 3) {
          var tot = 0, sp = rE * 2.05, rows = Math.floor(2 * R / (sp * .866)), want = Math.floor(11000 * U.ease(el / 3.5));
          var cnt = 0;
          g.fillStyle = 'rgba(120,205,255,.95)';
          g.beginPath();
          outer: for (var j = 0; j < rows; j++) {
            var yy = cy - R + j * sp * .866 + rE, off = (j % 2) * sp / 2;
            for (var xx = cx - R + off; xx < cx + R; xx += sp) {
              var dx = xx - cx, dy = yy - cy;
              if (dx * dx + dy * dy < (R - rE) * (R - rE)) { tot++; if (cnt < want) { g.moveTo(xx + rE, yy); g.arc(xx, yy, rE * .92, 0, TAU); cnt++; } }
            }
          }
          g.fill();
          label('≈ ' + U.fr(Math.min(cnt, tot), 0) + ' Terres', 640, 305, '#ffd166', 30, 'center');
          label('pour couvrir le disque solaire', 640, 335, '#eef1ff', 17, 'center');
          label('(et 1,3 million pour remplir son volume)', 640, 360, '#a9b2d6', 15, 'center');
        }
        if (mode === 0) {
          label('Diamètre du Soleil : 1 392 700 km', 540, 395, '#a9b2d6', 16);
        } else if (mode === 1) {
          label('Diamètre de la Terre : 12 742 km', 540, 330, '#9fe0ff', 17);
          label('Le Soleil est ≈ 109 fois plus large.', 540, 358, '#eef1ff', 17);
        }
      }
    };
  });

  /* ======================================================= 2. Distance Terre-Soleil et trajet de la lumière */
  S.register('distance', function (root) {
    var st = S.stage(root, 900, 330), g = st.g;
    var D = 1.496e8; // km
    var mobs = [
      { id: 'l', label: 'Lumière', v: 299792.458, col: '#ffe066', glow: true },
      { id: 'p', label: 'Sonde Parker (record)', v: 192, col: '#ff8a5c' },
      { id: 'v', label: 'Voyager 1', v: 17, col: '#b69cff' },
      { id: 'a', label: 'Avion de ligne', v: 900 / 3600, col: '#7fd2ff' },
      { id: 'm', label: 'À pied', v: 5 / 3600, col: '#7dffb0' }
    ];
    var cur = mobs[0], t0 = null, tm = 0, DUR = 6.5;
    var ctrl = UI.row(root);
    var chips = UI.chips(ctrl, mobs.map(function (m) { return { id: m.id, label: m.label, color: m.col }; }), {
      value: 'l', onchange: function (id) { cur = mobs.filter(function (m) { return m.id === id; })[0]; t0 = null; }
    });
    UI.btn(ctrl, '↻', function () { t0 = null; });
    function dur(s) {
      if (s < 120) return U.fr(s, 0) + ' s';
      if (s < 7200) return Math.floor(s / 60) + ' min ' + U.fr(s % 60, 0) + ' s';
      if (s < 172800) return U.fr(s / 3600, 1) + ' h';
      if (s < 86400 * 400) return U.fr(s / 86400, 0) + ' jours';
      return U.fr(s / 31557600, 0) + ' ans';
    }
    return {
      frame: function (t) {
        tm = t; if (t0 == null) t0 = t;
        if (!st.fit()) return;
        g.clearRect(0, 0, 900, 330);
        var x0 = 70, x1 = 830, y = 150, sc = (x1 - x0) / D;
        // axe
        g.strokeStyle = 'rgba(255,255,255,.25)'; g.lineWidth = 1.5; g.setLineDash([2, 6]);
        g.beginPath(); g.moveTo(x0, y); g.lineTo(x1, y); g.stroke(); g.setLineDash([]);
        // Soleil à l'échelle (rayon 696 000 km)
        var rs = 6.96e5 * sc;
        var h = g.createRadialGradient(x0, y, 0, x0, y, 55);
        h.addColorStop(0, 'rgba(255,190,60,.9)'); h.addColorStop(.25, 'rgba(255,120,30,.35)'); h.addColorStop(1, 'rgba(255,80,60,0)');
        g.fillStyle = h; g.beginPath(); g.arc(x0, y, 55, 0, TAU); g.fill();
        g.fillStyle = '#fff4c0'; g.beginPath(); g.arc(x0, y, Math.max(rs, 2), 0, TAU); g.fill();
        // Terre (point agrandi)
        g.fillStyle = '#5cc8ff'; g.shadowColor = '#5cc8ff'; g.shadowBlur = 12; g.beginPath(); g.arc(x1, y, 4, 0, TAU); g.fill(); g.shadowBlur = 0;
        g.fillStyle = '#eef1ff'; g.font = '600 18px Outfit, sans-serif'; g.textAlign = 'center';
        g.fillText('Soleil', x0, y + 52); g.fillText('Terre', x1, y + 52);
        g.fillStyle = '#a9b2d6'; g.font = '15px Outfit, sans-serif';
        g.fillText('(le Soleil est à l’échelle : ' + U.fr(rs * 2, 0) + ' px de diamètre ; la Terre, invisible, est repérée par un point)', 450, 22);
        // cote de distance
        g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 1.5;
        g.beginPath(); g.moveTo(x0, y - 52); g.lineTo(x1, y - 52); g.moveTo(x0, y - 58); g.lineTo(x0, y - 46); g.moveTo(x1, y - 58); g.lineTo(x1, y - 46); g.stroke();
        g.fillStyle = '#ffd166'; g.font = '600 19px Outfit, sans-serif';
        g.fillText('1 u.a. ≈ 150 millions de km ≈ 107 diamètres solaires', 450, y - 62);
        // mobile
        var eta = D / cur.v;
        var p = U.clamp((t - t0) / DUR, 0, 1.0);
        var f = U.ease(p * 1.0);
        var fx = cur.id === 'l' ? p : f;       // lumière : mouvement uniforme
        var x = x0 + fx * (x1 - x0), el = fx * eta;
        if (cur.glow) {
          var tr = g.createLinearGradient(Math.max(x0, x - 140), 0, x, 0);
          tr.addColorStop(0, 'rgba(255,224,102,0)'); tr.addColorStop(1, 'rgba(255,224,102,.9)');
          g.strokeStyle = tr; g.lineWidth = 4; g.lineCap = 'round'; g.beginPath(); g.moveTo(Math.max(x0, x - 140), y); g.lineTo(x, y); g.stroke();
        }
        g.save(); g.shadowColor = cur.col; g.shadowBlur = 22; g.fillStyle = cur.col;
        g.beginPath(); g.arc(x, y, cur.glow ? 7 : 6, 0, TAU); g.fill(); g.restore();
        // horloge
        g.textAlign = 'center'; g.fillStyle = '#eef1ff'; g.font = '600 34px Outfit, sans-serif';
        g.fillText('t = ' + dur(el), 450, 262);
        g.font = '17px Outfit, sans-serif'; g.fillStyle = '#a9b2d6';
        g.fillText(cur.label + ' : ' + U.fr(cur.v >= 1 ? cur.v : cur.v * 3600, cur.v >= 1 ? 0 : 0) + (cur.v >= 1 ? ' km/s' : ' km/h'), 450, 290);
        if (p >= 1) {
          g.fillStyle = '#35e08a'; g.font = '600 22px Outfit, sans-serif';
          g.fillText('Arrivée au bout de ' + dur(eta), 450, 320);
        }
      }
    };
  });

  /* ======================================================= 3. Puissance rayonnée : sphère de rayon d */
  S.register('puissance', function (root) {
    var st = S.stage(root, 900, 380), g = st.g;
    var AU = 1.5e11, K = 1361, d = 1;
    var ctrl = UI.row(root);
    var sl = UI.slider(ctrl, { label: 'distance d au Soleil', min: 0.4, max: 2, step: 0.01, value: 1, fmt: function (v) { return U.fr(v, 2) + ' u.a.'; }, oninput: function (v) { d = v; } });
    var chips = UI.chips(ctrl, [{ id: .39, label: 'Mercure' }, { id: 1, label: 'Terre' }, { id: 1.52, label: 'Mars' }], { onchange: function (id) { d = parseFloat(id); sl.set(d); } });
    var read = UI.readout(root);
    return {
      frame: function (t) {
        if (!st.fit()) return;
        g.clearRect(0, 0, 900, 380);
        var sx = 90, sy = 150, scale = 380;
        // ondes sphériques
        for (var i = 0; i < 9; i++) {
          var ph = ((t * .22 + i / 9) % 1), rr = 40 + ph * 760;
          g.strokeStyle = 'rgba(255,200,80,' + (0.32 * (1 - ph)) + ')'; g.lineWidth = 2;
          g.beginPath(); g.arc(sx, sy, rr, -1.2, 1.2); g.stroke();
        }
        S.drawSun(g, sx, sy, 44, t, { halo: 2.2, noProm: true });
        // sphère de rayon d
        var R = d * scale;
        g.strokeStyle = 'rgba(111,211,255,.95)'; g.lineWidth = 2.5; g.setLineDash([9, 7]);
        g.beginPath(); g.arc(sx, sy, R, -1.15, 1.15); g.stroke(); g.setLineDash([]);
        var px = sx + R, py = sy;
        g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(sx + 44, sy); g.lineTo(px, py); g.stroke();
        g.fillStyle = '#6fd3ff'; g.font = '600 17px Outfit, sans-serif'; g.textAlign = 'center';
        g.fillText('d', (sx + px) / 2, sy - 8);
        // 1 m² qui reçoit K(d)
        var glow = 0.6 + 0.4 * Math.sin(t * 3);
        g.fillStyle = 'rgba(255,224,102,' + (0.35 + 0.3 * glow) + ')'; g.fillRect(px - 9, py - 9, 18, 18);
        g.strokeStyle = '#ffe066'; g.lineWidth = 2; g.strokeRect(px - 9, py - 9, 18, 18);
        g.fillStyle = '#ffe066'; g.fillText('1 m²', px, py - 18);
        if (d > 0.9 && d < 1.1) { g.fillStyle = '#9fe0ff'; g.fillText('Terre', px, py + 34); }
        // barres
        var Kd = K / (d * d), Sd = 4 * Math.PI * Math.pow(d * AU, 2), P = Kd * Sd;
        function bar(y, lab, v, vmax, col, txt) {
          g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(150, y, 520, 22);
          g.fillStyle = col; g.shadowColor = col; g.shadowBlur = 12; g.fillRect(150, y, 520 * U.clamp(v / vmax, 0, 1), 22); g.shadowBlur = 0;
          g.textAlign = 'right'; g.fillStyle = '#eef1ff'; g.font = '600 17px Outfit, sans-serif'; g.fillText(lab, 140, y + 17);
          g.textAlign = 'left'; g.fillStyle = col; g.fillText(txt, 682, y + 17);
        }
        bar(262, 'K(d)', Kd, 1361 / 0.16, '#ffe066', U.fr(Kd, 0) + ' W/m²');
        bar(296, 'S = 4πd²', Sd, 4 * Math.PI * Math.pow(2 * AU, 2), '#6fd3ff', U.sci(Sd, 2) + ' m²');
        bar(330, 'P = K × S', P, 3.85e26 * 1.0 / 0.95, '#ff8a5c', U.sci(P, 2) + ' W');
        read.innerHTML = '<b>K(d)</b> diminue comme 1/d², la surface <b>S</b> augmente comme d² : leur produit, la <b>puissance totale P</b>, ne change pas.';
      }
    };
  });

  /* ======================================================= 4. Chaîne proton-proton */
  S.register('ppchain', function (root) {
    var W = 900, Hh = 440, st = S.stage(root, W, Hh), g = st.g;
    var cap = S.el('div', 'sw-cap'); cap.style.minHeight = '3.4em'; cap.style.fontSize = '17px'; cap.style.color = '#eef1ff'; root.insertBefore(cap, st.wrap);
    var CX = [215, 685], RN = 14;
    var step = 0, nodes = [], fx = [], diagT0 = -1;
    var captions = [
      'Au cœur du Soleil (15 millions de kelvins), des <b>protons</b> (noyaux d’hydrogène) sont agités à très grande vitesse.',
      '<b>①</b> Deux protons fusionnent : <b>p + p → ²H + e⁺ + νₑ</b>. L’un devient un neutron (émission d’un positron et d’un neutrino).',
      '<b>②</b> Le deutérium capture un proton : <b>²H + p → ³He + γ</b> (un rayon gamma est émis).',
      '<b>③</b> Deux noyaux ³He fusionnent : <b>³He + ³He → ⁴He + 2 p</b>. Deux protons sont libérés et repartent fusionner.',
      '<b>Bilan : 4 p → ⁴He + 2 e⁺ + 2 νₑ + 2 γ</b>. La masse de l’hélium est inférieure de <b>0,7 %</b> à celle de 4 protons : cette masse devient de l’énergie (E = Δm·c², soit 26,7 MeV par noyau d’hélium).',
      '<b>La chaîne proton-proton complète.</b> Dans le Soleil, l’hélium est fabriqué par trois branches : pp I (≈ 86 %, ce qu’on vient de voir), pp II (≈ 14 %) et pp III (≈ 0,1 %). Toutes aboutissent au même bilan : 4 p → ⁴He.'
    ];
    function mk(c, nm) { return { c: c, nm: nm, x: CX[c], y: 70, tx: CX[c], ty: 70, mix: 0, tmix: 0 }; }
    function reset() {
      nodes = [];
      for (var c = 0; c < 2; c++) { nodes.push(mk(c, 'p1')); nodes.push(mk(c, 'p2')); nodes.push(mk(c, 'p3')); }
      nodes[0].x = nodes[0].tx = CX[0] - 62; nodes[1].x = nodes[1].tx = CX[0]; nodes[2].x = nodes[2].tx = CX[0] + 62;
      nodes[3].x = nodes[3].tx = CX[1] - 62; nodes[4].x = nodes[4].tx = CX[1]; nodes[5].x = nodes[5].tx = CX[1] + 62;
      fx = [];
    }
    function targets(s) {
      for (var c = 0; c < 2; c++) {
        var cx = CX[c], p1 = nodes[c * 3], p2 = nodes[c * 3 + 1], p3 = nodes[c * 3 + 2];
        if (s === 0) { p1.tx = cx - 62; p1.ty = 70; p2.tx = cx; p2.ty = 70; p3.tx = cx + 62; p3.ty = 70; p2.tmix = 0; }
        else if (s === 1) { p1.tx = cx - 16; p1.ty = 165; p2.tx = cx + 16; p2.ty = 165; p2.tmix = 1; p3.tx = cx + 62; p3.ty = 70; }
        else if (s === 2) { p1.tx = cx - 16; p1.ty = 268; p2.tx = cx + 16; p2.ty = 268; p2.tmix = 1; p3.tx = cx; p3.ty = 295; }
        else {
          var m = c === 0 ? -1 : 1;
          p1.tx = 450 + m * 16; p1.ty = 372; p2.tx = 450 + m * 16; p2.ty = 400; p2.tmix = 1;
          p3.tx = c === 0 ? 70 : 830; p3.ty = 410;
        }
      }
    }
    function spawn(s) {
      for (var c = 0; c < 2; c++) {
        var m = c === 0 ? -1 : 1, cx = CX[c];
        if (s === 1) {
          fx.push({ k: 'e', x: cx + 16, y: 165, vx: m * 70, vy: -60, t: 0, life: 2.4 });
          fx.push({ k: 'nu', x: cx + 16, y: 165, vx: m * 100, vy: 40, t: 0, life: 2.8 });
        } else if (s === 2) {
          fx.push({ k: 'g', x: cx, y: 282, vx: m * 120, vy: 25, t: 0, life: 2.4 });
        }
      }
      if (s === 3) { fx.push({ k: 'flash', x: 450, y: 386, t: 0, life: 1.4 }); }
      if (s === 4) { fx.push({ k: 'g', x: 450, y: 386, vx: 0, vy: -150, t: 0, life: 2.6 }); fx.push({ k: 'g', x: 450, y: 386, vx: 140, vy: -90, t: 0, life: 2.6 }); fx.push({ k: 'g', x: 450, y: 386, vx: -140, vy: -90, t: 0, life: 2.6 }); }
    }
    function go(s) {
      s = U.clamp(s, 0, 5);
      if (s === 0) reset();
      if (s === 5) diagT0 = -1;
      step = s; targets(s >= 4 ? 3 : s); if (s < 5) spawn(s); cap.innerHTML = captions[s];
    }
    var ctrl = UI.row(root);
    UI.btn(ctrl, '◀', function () { go(step - 1); });
    UI.btn(ctrl, 'Étape suivante ▶', function () { go(step + 1); }, 'main');
    UI.btn(ctrl, '↻ Recommencer', function () { go(0); });
    reset(); go(0);
    /* --- diagramme de la chaîne complète --- */
    var DB = [
      ['a', 450, 34, 440, 'p + p → ²H + e⁺ + νₑ', '#ffe066'],
      ['b', 450, 98, 340, '²H + p → ³He + γ', '#ffe066'],
      ['c1', 205, 212, 300, '³He + ³He → ⁴He + 2 p', '#ffd166'],
      ['d1', 205, 280, 140, '⁴He', '#ffd166'],
      ['c2', 640, 212, 300, '³He + ⁴He → ⁷Be + γ', '#ff9f43'],
      ['e1', 530, 296, 210, '⁷Be + e⁻ → ⁷Li + νₑ', '#ff9f43'],
      ['f1', 530, 352, 190, '⁷Li + p → 2 ⁴He', '#ff9f43'],
      ['e2', 782, 296, 200, '⁷Be + p → ⁸B + γ', '#ff6fb5'],
      ['f2', 782, 350, 200, '⁸B → ⁸Be + e⁺ + νₑ', '#ff6fb5'],
      ['g2', 782, 404, 200, '⁸Be → 2 ⁴He', '#ff6fb5']
    ];
    var DA = [['a', 'b', ''], ['b', 'c1', 'pp I · ≈ 86 %'], ['b', 'c2', '≈ 14 %'], ['c1', 'd1', ''], ['c2', 'e1', 'pp II · ≈ 14 %'], ['c2', 'e2', 'pp III · ≈ 0,1 %'], ['e1', 'f1', ''], ['e2', 'f2', ''], ['f2', 'g2', '']];
    var DI = {}; DB.forEach(function (b, i) { DI[b[0]] = b; b.idx = i; });
    function rr(x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
    function drawDiagram(t) {
      if (diagT0 < 0) diagT0 = t;
      var el = t - diagT0;
      DA.forEach(function (a, i) {
        var A = DI[a[0]], B = DI[a[1]], al = U.smooth(0.25 + B.idx * 0.22, 0.7 + B.idx * 0.22, el);
        if (al <= 0) return;
        var x0 = A[1], y0 = A[2] + 14, x1 = B[1], y1 = B[2] - 15, col = B[5];
        g.save(); g.globalAlpha = al; g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 2.4; g.shadowColor = col; g.shadowBlur = 8;
        g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + (x1 - x0) * al, y0 + (y1 - y0) * al); g.stroke();
        var ang = Math.atan2(y1 - y0, x1 - x0); g.beginPath(); g.moveTo(x1, y1); g.lineTo(x1 - 10 * Math.cos(ang - .45), y1 - 10 * Math.sin(ang - .45)); g.lineTo(x1 - 10 * Math.cos(ang + .45), y1 - 10 * Math.sin(ang + .45)); g.closePath(); g.fill(); g.shadowBlur = 0;
        for (var k = 0; k < 2; k++) { var f = ((t * .35 + k / 2 + i * .13) % 1); g.fillStyle = '#fff'; g.beginPath(); g.arc(x0 + (x1 - x0) * f, y0 + (y1 - y0) * f, 2.4, 0, TAU); g.fill(); }
        g.restore();
        if (a[2] && al > .5) {
          var mx = (x0 + x1) / 2 + (x1 < x0 ? -8 : x1 > x0 ? 8 : 0), my = (y0 + y1) / 2;
          g.globalAlpha = al; g.font = '600 14px Outfit, sans-serif'; g.textAlign = x1 < x0 ? 'right' : 'left'; g.lineWidth = 4; g.lineJoin = 'round'; g.strokeStyle = 'rgba(5,7,24,.9)'; g.strokeText(a[2], mx, my + 4); g.fillStyle = col; g.fillText(a[2], mx, my + 4); g.globalAlpha = 1;
        }
      });
      DB.forEach(function (b) {
        var al = U.smooth(0.05 + b.idx * 0.22, 0.45 + b.idx * 0.22, el); if (al <= 0) return;
        var x = b[1] - b[3] / 2, y = b[2] - 14;
        g.save(); g.globalAlpha = al; g.shadowColor = b[5]; g.shadowBlur = 16;
        rr(x, y, b[3], 28, 10); g.fillStyle = 'rgba(10,14,40,.92)'; g.fill(); g.shadowBlur = 0; g.strokeStyle = b[5]; g.lineWidth = 1.8; g.stroke();
        g.fillStyle = '#f4f6ff'; g.font = '600 15.5px Outfit, sans-serif'; g.textAlign = 'center'; g.fillText(b[4], b[1], b[2] + 5); g.restore();
      });
      var al2 = U.smooth(1.6, 2.3, el);
      g.save(); g.globalAlpha = al2; g.textAlign = 'center'; g.fillStyle = '#a9b2d6'; g.font = '400 13.5px Outfit, sans-serif';
      g.fillText('(ou, dans 0,25 % des cas : p + e⁻ + p → ²H + νₑ)', 450, 64);
      g.textAlign = 'left'; g.fillStyle = '#ffd166'; g.font = '600 15px Outfit, sans-serif'; g.fillText('Bilan commun aux trois branches', 18, 350);
      g.fillStyle = '#f4f6ff'; g.font = '600 17px Outfit, sans-serif'; g.fillText('4 p → ⁴He + 2 e⁺ + 2 νₑ + 2 γ', 18, 376);
      g.fillStyle = '#a9b2d6'; g.font = '400 13.5px Outfit, sans-serif'; g.fillText('26,7 MeV libérés par noyau d’hélium', 18, 398);
      g.fillText('(le cycle CNO ne fournit que ≈ 1 % de l’énergie du Soleil)', 18, 420);
      g.restore();
    }
    var lastT = 0;
    function drawNuc(n, t) {
      var r = RN, c0 = [255, 96, 120], c1 = [196, 202, 222];
      var col = [U.lerp(c0[0], c1[0], n.mix), U.lerp(c0[1], c1[1], n.mix), U.lerp(c0[2], c1[2], n.mix)];
      var gr = g.createRadialGradient(n.x - r * .35, n.y - r * .35, 1, n.x, n.y, r);
      gr.addColorStop(0, U.rgb([255, 255, 255])); gr.addColorStop(.35, U.rgb(col)); gr.addColorStop(1, U.rgb([col[0] * .5, col[1] * .5, col[2] * .5]));
      g.save(); g.shadowColor = U.rgb(col, .8); g.shadowBlur = 14; g.fillStyle = gr;
      g.beginPath(); g.arc(n.x, n.y, r, 0, TAU); g.fill(); g.restore();
    }
    return {
      frame: function (t) {
        var dt = Math.min(0.1, t - lastT); lastT = t;
        if (!st.fit()) return;
        g.clearRect(0, 0, W, Hh);
        if (step === 5) { drawDiagram(t); return; }
        var k = 1 - Math.exp(-dt * 4.2);
        nodes.forEach(function (n) { n.x += (n.tx - n.x) * k; n.y += (n.ty - n.y) * k; n.mix += (n.tmix - n.mix) * k; });
        // étiquettes de noyaux
        g.textAlign = 'center'; g.font = '600 17px Outfit, sans-serif'; g.fillStyle = '#a9b2d6';
        if (step === 0) { g.fillText('protons (¹H)', 450, 30); }
        if (step === 1) { CX.forEach(function (cx) { g.fillText('²H', cx, 205); }); }
        if (step === 2) { CX.forEach(function (cx) { g.fillText('³He', cx, 330); }); }
        if (step >= 3) { g.fillStyle = '#ffd166'; g.font = '600 22px Outfit, sans-serif'; g.fillText('⁴He', 450, 336); }
        // halo de l'hélium
        if (step >= 3) {
          var hr = 70 + (step === 4 ? 14 * Math.sin(t * 3) : 0), hh = g.createRadialGradient(450, 386, 6, 450, 386, hr);
          hh.addColorStop(0, 'rgba(255,224,102,.55)'); hh.addColorStop(1, 'rgba(255,160,60,0)');
          g.fillStyle = hh; g.beginPath(); g.arc(450, 386, hr, 0, TAU); g.fill();
        }
        nodes.forEach(function (n) { drawNuc(n, t); });
        if (step >= 3) { g.fillStyle = '#a9b2d6'; g.font = '600 15px Outfit, sans-serif'; g.fillText('p', nodes[2].x, nodes[2].y - 22); g.fillText('p', nodes[5].x, nodes[5].y - 22); }
        // effets
        for (var i = fx.length - 1; i >= 0; i--) {
          var f = fx[i]; f.t += dt;
          if (f.t > f.life) { fx.splice(i, 1); continue; }
          var u = f.t / f.life, a = 1 - u;
          if (f.k === 'flash') {
            g.fillStyle = 'rgba(255,240,180,' + (0.8 * a) + ')'; g.beginPath(); g.arc(f.x, f.y, 20 + 140 * u, 0, TAU); g.fill();
            continue;
          }
          f.x += f.vx * dt; f.y += f.vy * dt;
          if (f.k === 'e') {
            g.save(); g.shadowColor = '#7fd2ff'; g.shadowBlur = 14; g.fillStyle = 'rgba(127,210,255,' + a + ')';
            g.beginPath(); g.arc(f.x, f.y, 7, 0, TAU); g.fill(); g.restore();
            g.fillStyle = 'rgba(180,230,255,' + a + ')'; g.font = '600 15px Outfit, sans-serif'; g.textAlign = 'left'; g.fillText('e⁺', f.x + 11, f.y + 5);
          } else if (f.k === 'nu') {
            g.strokeStyle = 'rgba(190,160,255,' + (a * .9) + ')'; g.lineWidth = 2.5; g.setLineDash([4, 5]);
            g.beginPath(); g.moveTo(f.x - f.vx * .25, f.y - f.vy * .25); g.lineTo(f.x, f.y); g.stroke(); g.setLineDash([]);
            g.fillStyle = 'rgba(210,190,255,' + a + ')'; g.font = '600 15px Outfit, sans-serif'; g.textAlign = 'left'; g.fillText('νₑ', f.x + 8, f.y + 5);
          } else if (f.k === 'g') {
            var sp = Math.hypot(f.vx, f.vy) || 1, ux = f.vx / sp, uy = f.vy / sp, L = 80;
            g.strokeStyle = 'rgba(255,224,102,' + a + ')'; g.lineWidth = 3; g.lineJoin = 'round';
            g.shadowColor = '#ffe066'; g.shadowBlur = 10; g.beginPath();
            for (var s = 0; s <= 24; s++) {
              var q = s / 24 * L, off = 7 * Math.sin(q * .45 - f.t * 25);
              var px = f.x - ux * q - uy * off, py = f.y - uy * q + ux * off;
              s ? g.lineTo(px, py) : g.moveTo(px, py);
            }
            g.stroke(); g.shadowBlur = 0;
            g.fillStyle = 'rgba(255,230,140,' + a + ')'; g.font = '600 16px Outfit, sans-serif'; g.textAlign = 'left'; g.fillText('γ', f.x + 10, f.y);
          }
        }
        if (step === 4) {
          g.textAlign = 'left'; g.fillStyle = '#ffd166'; g.font = '600 20px Outfit, sans-serif'; g.fillText('26,7 MeV', 505, 380);
          g.fillStyle = '#a9b2d6'; g.font = '16px Outfit, sans-serif'; g.fillText('libérés par noyau d’hélium', 505, 402);
        }
      }
    };
  });
})();
