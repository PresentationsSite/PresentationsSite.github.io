/*
 * Présentation « Son » (2nde) : noyau.
 *  - ambiance (couleurs) par partie, via les repères <i data-part="…" hidden> ;
 *  - registre des widgets : <div class="sw" data-w="nom"></div> est construit
 *    par SonW.def('nom', {build, enter, leave, tick}) (voir widgets.js) ;
 *    tick() n'est appelé que lorsque la diapo est affichée ;
 *  - votes aux doigts (shortcode qcm) avec décompte, cellules « ? » à révéler ;
 *  - boîte à outils de classe : tirage au sort, minuteur, pointeur laser.
 */
(function () {
  'use strict';

  var FR = 'fr-FR';
  var SonW = window.SonW = {
    defs: {}, inst: [],
    def: function (nom, o) { this.defs[nom] = o; },
    // nombre au format français : fmt(2.94, 1) -> « 2,9 »
    fmt: function (x, d) { return Number(x).toLocaleString(FR, { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); },
    // contexte audio partagé (créé au premier geste de l'utilisateur)
    audio: function () {
      if (!SonW._ac) { var AC = window.AudioContext || window.webkitAudioContext; if (AC) SonW._ac = new AC(); }
      if (SonW._ac && SonW._ac.state === 'suspended') SonW._ac.resume();
      return SonW._ac;
    },
    bip: function (f, dur, vol) {
      var ac = SonW.audio(); if (!ac) return;
      var o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.frequency.value = f || 880; g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol || 0.2, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + (dur || 0.25));
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + (dur || 0.25) + 0.05);
    }
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function ready(fn) { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn(); }
  function relayout() { if (window.Reveal && Reveal.layout) { try { Reveal.layout(); } catch (e) { } } }

  /* ------------------------------------------------------------ ambiance */
  var partDe = {};
  function indexerParties() {
    $$('.reveal .slides > section').forEach(function (s, i) {
      var m = s.querySelector('[data-part]');
      if (m) partDe[i] = m.getAttribute('data-part');
    });
  }
  function majAmbiance() {
    if (!window.Reveal) return;
    var h = Reveal.getIndices().h, part = 'intro';
    for (var i = 0; i <= h; i++) if (partDe[i]) part = partDe[i];
    document.documentElement.setAttribute('data-part', part);
  }

  /* ------------------------------------------------------------- widgets */
  function scan() {
    $$('.sw').forEach(function (el) {
      var d = SonW.defs[el.getAttribute('data-w')];
      if (!d || el._sw) return;
      el._sw = true;
      el.setAttribute('data-prevent-swipe', '');
      var inst = { el: el, d: d, slide: el.closest('section'), actif: false, s: {} };
      if (d.build) d.build(el, inst);
      SonW.inst.push(inst);
    });
  }
  var tPrec = 0;
  function boucle(t) {
    var dt = Math.min(0.1, (t - tPrec) / 1000); tPrec = t;
    SonW.inst.forEach(function (i) {
      var on = !!(i.slide && i.slide.classList.contains('present'));
      if (on && !i.actif) { i.actif = true; if (i.d.enter) i.d.enter(i.el, i); }
      else if (!on && i.actif) { i.actif = false; if (i.d.leave) i.d.leave(i.el, i); }
      if (on && i.d.tick) i.d.tick(i.el, i, t / 1000, dt);
    });
    requestAnimationFrame(boucle);
  }

  /* --------------------------------------------------------------- votes */
  function qcmCourant(el) { return el.closest('.qcm'); }
  function majVotes(q) {
    var opts = $$('.qcm-opt', q), tot = 0;
    opts.forEach(function (o) { tot += (o._v || 0); });
    opts.forEach(function (o) {
      var v = o._v || 0, b = $('.qcm-votes', o);
      if (!b) { b = document.createElement('span'); b.className = 'qcm-votes'; o.appendChild(b); }
      b.textContent = v;
      o.classList.toggle('voted', v > 0);
      o.style.setProperty('--p', tot ? (v / tot).toFixed(3) : 0);
    });
    q.classList.toggle('has-votes', tot > 0);
  }
  function voter(q, i, delta) {
    var o = $$('.qcm-opt', q)[i]; if (!o) return;
    o._v = Math.max(0, (o._v || 0) + delta);
    majVotes(q);
  }
  function initVotes() {
    $$('.qcm').forEach(function (q) {
      var tag = $('.qcm-tag', q);
      if (tag && !$('.qcm-reset', tag)) {
        var r = document.createElement('button');
        r.type = 'button'; r.className = 'qcm-reset'; r.textContent = '↺ votes';
        r.title = 'Remettre le décompte à zéro';
        tag.appendChild(r);
      }
    });
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      var n = parseInt(e.key, 10);
      if (!(n >= 1 && n <= 4)) return;
      var s = Reveal.getCurrentSlide(), q = s && $('.qcm', s);
      if (!q) return;
      e.stopImmediatePropagation(); e.preventDefault();
      voter(q, n - 1, e.shiftKey ? -1 : 1);
    }, true);
    document.addEventListener('click', function (e) {
      var t = e.target; if (!t.closest) return;
      var rs = t.closest('.qcm-reset');
      if (rs) { var q0 = rs.closest('.qcm'); $$('.qcm-opt', q0).forEach(function (o) { o._v = 0; }); majVotes(q0); return; }
      var c = t.closest('.qcm-opt');
      if (c) { var q = qcmCourant(c); voter(q, $$('.qcm-opt', q).indexOf(c), e.altKey || e.shiftKey ? -1 : 1); return; }
      if (t.closest('.qcm-go') && window.Reveal) { Reveal.next(); return; }
      var rv = t.closest('.rv');
      if (rv) {
        var on = rv.classList.toggle('on');
        if (!rv._q) rv._q = rv.textContent;
        rv.textContent = on ? rv.getAttribute('data-v') : rv._q;
      }
    });
    function sync(e, on) {
      var f = e.fragment; if (!f || !f.classList.contains('qcm-expl')) return;
      var q = f.closest('.qcm'); if (q) q.classList.toggle('revealed', on);
    }
    Reveal.on('fragmentshown', function (e) { sync(e, true); });
    Reveal.on('fragmenthidden', function (e) { sync(e, false); });
  }

  /* ------------------------------------------------------ boîte à outils */
  var dock, pop, chip, laser;
  var tirage = { n: 28, faits: [] };
  var minuteur = { reste: 60, total: 60, actif: false, t0: 0, id: null };
  try { var n0 = parseInt(localStorage.getItem('son-effectif'), 10); if (n0 > 1 && n0 < 100) tirage.n = n0; } catch (e) { }

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in (attrs || {})) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function mmss(s) { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }

  function initDock() {
    dock = el('div', { id: 'son-dock', 'data-prevent-swipe': '' });
    dock.innerHTML =
      '<button type="button" data-o="tirage" title="Tirage au sort d\'un numéro d\'élève" aria-label="Tirage au sort">🎲</button>' +
      '<button type="button" data-o="minuteur" title="Minuteur" aria-label="Minuteur">⏱️</button>' +
      '<button type="button" data-o="laser" title="Pointeur laser (suit la souris)" aria-label="Pointeur laser">🔴</button>';
    chip = el('div', { id: 'son-chip' });
    dock.appendChild(chip);
    pop = el('div', { id: 'son-pop', 'data-prevent-swipe': '' });
    laser = el('div', { id: 'son-laser' });
    document.body.appendChild(dock); document.body.appendChild(pop); document.body.appendChild(laser);

    dock.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-o]'); if (!b) return;
      var o = b.getAttribute('data-o');
      if (o === 'laser') { document.body.classList.toggle('laser-on'); b.classList.toggle('on'); return; }
      if (pop.getAttribute('data-o') === o && pop.classList.contains('on')) { fermer(); return; }
      ouvrir(o);
    });
    pop.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var a = b.getAttribute('data-a');
      if (b.classList.contains('x')) fermer();
      else if (a) action(a, b.getAttribute('data-v'));
    });
    document.addEventListener('pointermove', function (e) { laser.style.left = e.clientX + 'px'; laser.style.top = e.clientY + 'px'; });
    // les touches de l'orateur ne doivent pas faire avancer le diaporama pendant l'usage de la boîte à outils
    ['keydown'].forEach(function (ev) { pop.addEventListener(ev, function (e) { e.stopPropagation(); }); });
  }
  function ouvrir(o) {
    pop.setAttribute('data-o', o); pop.classList.add('on');
    $$('#son-dock button[data-o]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-o') === o || (b.getAttribute('data-o') === 'laser' && document.body.classList.contains('laser-on'))); });
    dock.classList.add('actif');
    rendre();
  }
  function fermer() {
    pop.classList.remove('on'); dock.classList.remove('actif');
    $$('#son-dock button[data-o]').forEach(function (b) { if (b.getAttribute('data-o') !== 'laser') b.classList.remove('on'); });
  }
  function rendre() {
    var o = pop.getAttribute('data-o');
    if (o === 'tirage') {
      pop.innerHTML = '<button class="x" type="button" aria-label="Fermer">×</button><h4>Tirage au sort</h4>' +
        '<div class="big" id="tr-n">?</div>' +
        '<div class="row"><button class="go" data-a="tirer">🎲 Tirer</button><button data-a="razt">↺ Remise à zéro</button></div>' +
        '<div class="row"><span class="petit">Élèves :</span><button data-a="moins">−</button><b id="tr-eff">' + tirage.n + '</b><button data-a="plus">+</button></div>' +
        '<div class="dejatires" id="tr-deja"></div>';
      majDeja();
    } else if (o === 'minuteur') {
      pop.innerHTML = '<button class="x" type="button" aria-label="Fermer">×</button><h4>Minuteur</h4>' +
        '<div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="7"/>' +
        '<circle id="mn-arc" cx="50" cy="50" r="44" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round" stroke-dasharray="276.46" stroke-dashoffset="0"/></svg><div class="t" id="mn-t">' + mmss(minuteur.reste) + '</div></div>' +
        '<div class="row"><button data-a="fixer" data-v="30">30 s</button><button data-a="fixer" data-v="60">1 min</button><button data-a="fixer" data-v="120">2 min</button><button data-a="fixer" data-v="300">5 min</button></div>' +
        '<div class="row"><button data-a="mm">−15 s</button><button class="go" data-a="startstop" id="mn-go">' + (minuteur.actif ? '⏸ Pause' : '▶ Démarrer') + '</button><button data-a="mp">+15 s</button></div>';
      majMinuteur();
    }
  }
  function majDeja() {
    var d = $('#tr-deja'); if (d) d.textContent = tirage.faits.length ? 'Déjà tirés : ' + tirage.faits.join(', ') : '';
  }
  function action(a, v) {
    if (a === 'tirer') {
      var restants = []; for (var i = 1; i <= tirage.n; i++) if (tirage.faits.indexOf(i) < 0) restants.push(i);
      if (!restants.length) { tirage.faits = []; for (i = 1; i <= tirage.n; i++) restants.push(i); }
      var choix = restants[Math.floor(Math.random() * restants.length)], big = $('#tr-n'), k = 0;
      clearInterval(tirage.iv);
      tirage.iv = setInterval(function () {
        k++; big.textContent = restants[Math.floor(Math.random() * restants.length)];
        SonW.bip(500 + 30 * k, 0.05, 0.05);
        if (k > 18) { clearInterval(tirage.iv); big.textContent = choix; tirage.faits.push(choix); majDeja(); SonW.bip(988, 0.3, 0.15); }
      }, 55);
    } else if (a === 'razt') { tirage.faits = []; majDeja(); var b = $('#tr-n'); if (b) b.textContent = '?'; }
    else if (a === 'plus' || a === 'moins') {
      tirage.n = Math.max(2, Math.min(60, tirage.n + (a === 'plus' ? 1 : -1))); tirage.faits = [];
      $('#tr-eff').textContent = tirage.n; majDeja();
      try { localStorage.setItem('son-effectif', tirage.n); } catch (e) { }
    } else if (a === 'fixer') { arreter(); minuteur.total = minuteur.reste = +v; majMinuteur(); }
    else if (a === 'mm' || a === 'mp') {
      var d = a === 'mp' ? 15 : -15;
      minuteur.reste = Math.max(5, minuteur.reste + d); if (!minuteur.actif) minuteur.total = minuteur.reste; else minuteur.total = Math.max(minuteur.total, minuteur.reste);
      if (minuteur.actif) minuteur.t0 = performance.now() - (minuteur.total - minuteur.reste) * 1000;
      majMinuteur();
    } else if (a === 'startstop') {
      if (minuteur.actif) { arreter(); }
      else {
        if (minuteur.reste <= 0) minuteur.reste = minuteur.total;
        SonW.audio(); minuteur.actif = true; minuteur.t0 = performance.now() - (minuteur.total - minuteur.reste) * 1000;
        minuteur.id = setInterval(pasMinuteur, 200);
      }
      majMinuteur();
    }
  }
  function arreter() { clearInterval(minuteur.id); minuteur.actif = false; chip.classList.remove('fin'); }
  function pasMinuteur() {
    minuteur.reste = minuteur.total - (performance.now() - minuteur.t0) / 1000;
    if (minuteur.reste <= 0) {
      minuteur.reste = 0; arreter();
      chip.classList.add('on', 'fin');
      [0, 0.3, 0.6].forEach(function (d) { setTimeout(function () { SonW.bip(880, 0.22, 0.3); }, d * 1000); });
      setTimeout(function () { chip.classList.remove('fin'); majMinuteur(); }, 4000);
    }
    majMinuteur();
  }
  function majMinuteur() {
    var t = $('#mn-t'), arc = $('#mn-arc'), go = $('#mn-go');
    if (t) t.textContent = mmss(minuteur.reste);
    if (arc) arc.setAttribute('stroke-dashoffset', (276.46 * (1 - Math.max(0, minuteur.reste) / minuteur.total)).toFixed(1));
    if (go) go.textContent = minuteur.actif ? '⏸ Pause' : '▶ Démarrer';
    var visible = minuteur.actif || chip.classList.contains('fin') || (minuteur.reste < minuteur.total && minuteur.reste > 0);
    chip.textContent = '⏱ ' + mmss(minuteur.reste);
    chip.classList.toggle('on', visible);
  }

  /* --------------------------------------------------------------- démarrage */
  function demarrer() {
    if (!window.Reveal) { setTimeout(demarrer, 100); return; }
    indexerParties();
    initVotes();
    initDock();
    scan();
    relayout();
    Reveal.on('ready', function () { relayout(); majAmbiance(); });
    Reveal.on('slidechanged', majAmbiance);
    Reveal.on('resize', function () { /* les widgets se redessinent à chaque image */ });
    setTimeout(function () { relayout(); majAmbiance(); }, 600);
    requestAnimationFrame(boucle);
    majAmbiance();
  }
  ready(demarrer);
})();
