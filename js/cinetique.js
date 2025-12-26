// Récupération des éléments
const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

const blueCountInput = document.getElementById('blueCount');
const redCountInput = document.getElementById('redCount');
const temperatureInput = document.getElementById('temperature');

// Paramètres de simulation
let blueCount = parseInt(blueCountInput.value);
let redCount = parseInt(redCountInput.value);
let temperature = parseInt(temperatureInput.value);

// Liste des particules
let particles = [];

// Tableau pour stocker les effets de réaction (halo)
let reactionEffects = [];

// =========================
//        SONS + UI
// =========================
let soundEnabled = true; // état du son (bouton dans le canvas)

let audioCtx = null;
let sfxGain = null;
let masterGain = null;
let compressor = null;

const MAX_VOICES = 10;
let activeNodes = [];

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Bus SFX -> compresseur -> master -> sortie
    sfxGain = audioCtx.createGain();
    sfxGain.gain.value = 1.0;

    compressor = audioCtx.createDynamicsCompressor();
    compressor.threshold.value = -24;
    compressor.knee.value = 20;
    compressor.ratio.value = 10;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.12;

    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.35; // volume global

    sfxGain.connect(compressor);
    compressor.connect(masterGain);
    masterGain.connect(audioCtx.destination);
  }
}

function resumeAudio() {
  if (!soundEnabled) return;
  ensureAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function setMute(muted) {
  soundEnabled = !muted;
  if (audioCtx && masterGain) {
    const now = audioCtx.currentTime;
    // petit fondu pour éviter les clics
    masterGain.gain.cancelScheduledValues(now);
    const target = soundEnabled ? 0.35 : 0.00001;
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.exponentialRampToValueAtTime(target, now + 0.02);
  }
}

function registerVoice(...nodesToStopLater) {
  // limite de voix: stoppe les plus anciennes si besoin
  while (activeNodes.length > MAX_VOICES) {
    const n = activeNodes.shift();
    try { n.stop(); } catch {}
  }
  nodesToStopLater.forEach(n => { if (n) activeNodes.push(n); });
}

let lastCollisionSoundAt = 0;
let lastReactionSoundAt = 0;

// "TAC" audible type bois (collision non efficace)
function playCollisionTac(intensity = 1) {
  if (!soundEnabled) return;
  ensureAudio();
  if (audioCtx.state !== 'running') return;

  const tms = performance.now();
  if (tms - lastCollisionSoundAt < 10) return; // anti-mitraillage
  lastCollisionSoundAt = tms;

  const now = audioCtx.currentTime;

  // Amplitude plus haute et plancher audible
  const amp = Math.min(0.6, Math.max(0.18, 0.35 * intensity));

  // =========
  // 1) "click" net (très court) : 2 oscillateurs
  // =========
  const clickGain = audioCtx.createGain();
  clickGain.gain.setValueAtTime(0.0001, now);
  clickGain.gain.exponentialRampToValueAtTime(amp, now + 0.001);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
  clickGain.connect(sfxGain);

  const o1 = audioCtx.createOscillator();
  o1.type = 'square';
  o1.frequency.setValueAtTime(1200, now);
  o1.frequency.exponentialRampToValueAtTime(700, now + 0.02);

  const o2 = audioCtx.createOscillator();
  o2.type = 'square';
  o2.frequency.setValueAtTime(2400, now);
  o2.frequency.exponentialRampToValueAtTime(1400, now + 0.02);

  const mix = audioCtx.createGain();
  mix.gain.value = 0.25; // évite que ce soit agressif
  o1.connect(mix);
  o2.connect(mix);
  mix.connect(clickGain);

  o1.start(now);
  o2.start(now);
  o1.stop(now + 0.035);
  o2.stop(now + 0.035);

  // =========
  // 2) Petit "bois" résonant : burst de bruit + 2 bandpass
  // =========
  const dur = 0.01; // 10 ms
  const n = Math.floor(audioCtx.sampleRate * dur);
  const buffer = audioCtx.createBuffer(1, n, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < n; i++) {
    const x = i / n;
    const env = Math.exp(-x * 18);
    data[i] = (Math.random() * 2 - 1) * env;
  }

  const src = audioCtx.createBufferSource();
  src.buffer = buffer;

  const bp1 = audioCtx.createBiquadFilter();
  bp1.type = 'bandpass';
  bp1.frequency.value = 900 * (0.95 + 0.1 * Math.random());
  bp1.Q.value = 8;

  const bp2 = audioCtx.createBiquadFilter();
  bp2.type = 'bandpass';
  bp2.frequency.value = 1600 * (0.95 + 0.1 * Math.random());
  bp2.Q.value = 10;

  const woodGain = audioCtx.createGain();
  woodGain.gain.setValueAtTime(0.0001, now);
  woodGain.gain.exponentialRampToValueAtTime(amp * 0.55, now + 0.001);
  woodGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
  woodGain.connect(sfxGain);

  const woodMix = audioCtx.createGain();
  woodMix.gain.value = 1.0;

  src.connect(bp1);
  src.connect(bp2);
  bp1.connect(woodMix);
  bp2.connect(woodMix);
  woodMix.connect(woodGain);

  src.start(now);
  src.stop(now + 0.06);

  registerVoice(src, o1, o2);
}

// Son "réaction" (choc efficace)
function playReactionSound() {
  if (!soundEnabled) return;
  ensureAudio();
  if (audioCtx.state !== 'running') return;

  const tms = performance.now();
  if (tms - lastReactionSoundAt < 90) return;
  lastReactionSoundAt = tms;

  const now = audioCtx.currentTime;

  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(0.26, now + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  g.connect(sfxGain);

  const o1 = audioCtx.createOscillator();
  o1.type = 'sine';
  o1.frequency.setValueAtTime(660, now);

  const o2 = audioCtx.createOscillator();
  o2.type = 'triangle';
  o2.frequency.setValueAtTime(990, now);

  const mix = audioCtx.createGain();
  mix.gain.value = 0.7;

  o1.connect(mix);
  o2.connect(mix);
  mix.connect(g);

  o1.start(now);
  o2.start(now);
  o1.stop(now + 0.25);
  o2.stop(now + 0.25);

  registerVoice(o1, o2);
}

// Bouton son dans le canvas
function getSoundButtonRect() {
  const padding = 10;
  const w = 110;
  const h = 30;
  return { x: canvas.width - w - padding, y: padding, w, h };
}

function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawSoundButton() {
  const b = getSoundButtonRect();

  ctx.save();
  ctx.globalAlpha = 0.85;
  roundRect(ctx, b.x, b.y, b.w, b.h, 8);
  ctx.fillStyle = soundEnabled ? 'rgba(0,0,0,0.40)' : 'rgba(0,0,0,0.55)';
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.stroke();

  ctx.fillStyle = 'white';
  ctx.font = '14px sans-serif';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  const label = soundEnabled ? '🔊 SON' : '🔇 SON';
  ctx.fillText(label, b.x + b.w / 2, b.y + b.h / 2);
  ctx.restore();
}

// Clic dans le canvas (toggle son + autorisation audio)
canvas.addEventListener('pointerdown', (e) => {
  // reprise audio si besoin (gesture)
  resumeAudio();

  const rect = canvas.getBoundingClientRect();
  const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
  const my = (e.clientY - rect.top) * (canvas.height / rect.height);

  const b = getSoundButtonRect();
  const inside = mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h;
  if (inside) {
    setMute(soundEnabled); // si ON -> mute, si OFF -> unmute
  }
});

// Classe pour gérer l'effet de halo lors d'une réaction
class ReactionEffect {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = 60; // Taille maximale du halo
    this.alpha = 1;      // Opacité initiale
  }
  update() {
    this.radius += 3; // Vitesse d'expansion du halo
    this.alpha = 1 - this.radius / this.maxRadius; // Estompe linéairement
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }
}

// Types de particules
const PARTICLE_TYPES = {
  BLUE: 'blue',
  RED: 'red',
  GREEN: 'green'
};

// Classe Particule
class Particle {
  constructor(x, y, radius, type, vx, vy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = type;
    this.vx = vx;
    this.vy = vy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    if (this.type === PARTICLE_TYPES.BLUE) {
      ctx.fillStyle = '#00A2FF';
    } else if (this.type === PARTICLE_TYPES.RED) {
      ctx.fillStyle = '#FF644E';
    } else if (this.type === PARTICLE_TYPES.GREEN) {
      ctx.fillStyle = '#00FF00'; // Vert
    }
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Collision avec les murs
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.vx = -this.vx;
      this.x = Math.max(this.radius, Math.min(this.x, canvas.width - this.radius));
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.vy = -this.vy;
      this.y = Math.max(this.radius, Math.min(this.y, canvas.height - this.radius));
    }
  }
}

// Fonction pour générer une particule
function createParticle(type) {
  const radius = 5;
  let x, y, overlapping;
  do {
    overlapping = false;
    x = Math.random() * (canvas.width - 2 * radius) + radius;
    y = Math.random() * (canvas.height - 2 * radius) + radius;
    // Vérifier qu'elle ne chevauche pas une autre particule
    for (let p of particles) {
      const dx = p.x - x;
      const dy = p.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < p.radius + radius) {
        overlapping = true;
        break;
      }
    }
  } while (overlapping);

  const speed = temperature;
  const angle = Math.random() * 2 * Math.PI;
  const vx = speed * Math.cos(angle);
  const vy = speed * Math.sin(angle);
  return new Particle(x, y, radius, type, vx, vy);
}

// Initialisation des particules
function initParticles() {
  particles = [];
  for (let i = 0; i < blueCount; i++) {
    particles.push(createParticle(PARTICLE_TYPES.BLUE));
  }
  for (let i = 0; i < redCount; i++) {
    particles.push(createParticle(PARTICLE_TYPES.RED));
  }
}

// Gestion des collisions entre particules
function handleCollisions() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const p1 = particles[i];
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < p1.radius + p2.radius) {
        // Vérifier si l'une est bleue et l'autre rouge
        if (
          (p1.type === PARTICLE_TYPES.BLUE && p2.type === PARTICLE_TYPES.RED) ||
          (p1.type === PARTICLE_TYPES.RED && p2.type === PARTICLE_TYPES.BLUE)
        ) {
          // Calculer l'énergie cinétique (approximativement)
          const energy1 = Math.sqrt(p1.vx ** 2 + p1.vy ** 2);
          const energy2 = Math.sqrt(p2.vx ** 2 + p2.vy ** 2);
          const energy = energy1 + energy2;
          const energyThreshold = 10; // Seuil d'énergie pour la transformation

          if (energy > energyThreshold) {
            playReactionSound(); // son "réaction"

            // Ajout de l'effet de halo au point de collision
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            reactionEffects.push(new ReactionEffect(midX, midY));

            // Créer une particule verte avec conservation de la quantité de mouvement
            const totalVx = p1.vx + p2.vx;
            const totalVy = p1.vy + p2.vy;
            const greenParticle = new Particle(
              midX,
              midY,
              7,
              PARTICLE_TYPES.GREEN,
              totalVx / 2,
              totalVy / 2
            );
            particles.push(greenParticle);

            // Supprimer les particules bleue et rouge
            particles.splice(j, 1);
            particles.splice(i, 1);
            i--;
            break;
          }
        }

        // son "choc simple" (TAC sec type bois)
        const relV = Math.hypot(p1.vx - p2.vx, p1.vy - p2.vy);
        const intensity = Math.min(1.3, Math.max(0.6, relV / 12));
        playCollisionTac(intensity);

        // Simple réflexion élastique
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        // Rotation des vitesses vers le cadre de collision
        const v1 = rotate(p1.vx, p1.vy, sin, cos, true);
        const v2 = rotate(p2.vx, p2.vy, sin, cos, true);

        // Échange des vitesses en X
        const v1Final = { vx: v2.vx, vy: v1.vy };
        const v2Final = { vx: v1.vx, vy: v2.vy };

        // Rotation inverse pour revenir au cadre original
        const v1FinalRotated = rotate(v1Final.vx, v1Final.vy, sin, cos, false);
        const v2FinalRotated = rotate(v2Final.vx, v2Final.vy, sin, cos, false);

        p1.vx = v1FinalRotated.vx;
        p1.vy = v1FinalRotated.vy;
        p2.vx = v2FinalRotated.vx;
        p2.vy = v2FinalRotated.vy;

        // Séparation des particules pour éviter le chevauchement
        const overlap = p1.radius + p2.radius - distance;
        const nx = dx / distance;
        const ny = dy / distance;

        // Déplacer chaque particule de moitié du chevauchement
        p1.x += nx * (overlap / 2);
        p1.y += ny * (overlap / 2);
        p2.x -= nx * (overlap / 2);
        p2.y -= ny * (overlap / 2);
      }
    }
  }
}

// Fonction de rotation pour la collision élastique
function rotate(vx, vy, sin, cos, reverse) {
  if (reverse) {
    return {
      vx: vx * cos + vy * sin,
      vy: vy * cos - vx * sin
    };
  } else {
    return {
      vx: vx * cos - vy * sin,
      vy: vy * cos + vx * sin
    };
  }
}

// Animation principale
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  // Mise à jour et dessin des effets de halo
  for (let k = reactionEffects.length - 1; k >= 0; k--) {
    reactionEffects[k].update();
    reactionEffects[k].draw(ctx);
    if (reactionEffects[k].radius > reactionEffects[k].maxRadius) {
      reactionEffects.splice(k, 1);
    }
  }

  handleCollisions();

  // UI son dans le canvas (par-dessus)
  drawSoundButton();

  requestAnimationFrame(animate);
}

// Gestion des contrôles
blueCountInput.addEventListener('input', function () {
  blueCount = parseInt(this.value);
  initParticles();
});

redCountInput.addEventListener('input', function () {
  redCount = parseInt(this.value);
  initParticles();
});

temperatureInput.addEventListener('input', function () {
  temperature = parseInt(this.value);
  // Mettre à jour la vitesse des particules
  particles.forEach(particle => {
    const angle = Math.atan2(particle.vy, particle.vx);
    particle.vx = temperature * Math.cos(angle);
    particle.vy = temperature * Math.sin(angle);
  });
});

// Fonction de démarrage/rechargement de la simulation
function startSimulation() {
  blueCount = parseInt(blueCountInput.value);
  redCount = parseInt(redCountInput.value);
  temperature = parseInt(temperatureInput.value);

  initParticles();
}

// Initialisation initiale et démarrage de l'animation
startSimulation();
animate();