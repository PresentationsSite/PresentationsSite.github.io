+++
title = "Caractéristique"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#00A2FF;}

span {font-weight:normal;color:white;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

.custom-button {
width: 100%;
font-size: 1em;
border: none;
padding: 15px 20px;
cursor: pointer;
background-color: #27BB28;
color:white;
transition: background-color 0.3s;
border-radius: 25px; /* Pour rendre les boutons arrondis */
}

.custom-button:hover {
opacity: 0.9;
}

.custom-button:active {
opacity: 0.8;
}

.update-button {
background-color: #599DFF;
color: white;
font-size: 1em; 
}

</style>




{{%section%}}

<div>
<label for="inputI">Valeurs de I (en A) :</label>
<input type="text" id="inputI" style="width: 100%; font-size: 1em;">
</div>
<br>
<div>
<p>Valeurs de U correspondantes (en V) :</p>
<textarea id="inputU" style="width: 100%; font-size: 1em;" rows="1"></textarea>

</div>
<br>
<button onclick="prepareData()" class="custom-button">Tracer le graphique</button>
<button onclick="updateGraph()" class="custom-button update-button" style="display: none;">Mettre à jour le graphique</button>

---

<p id="validationMessage" style="color: white;">
Il faut valider les valeurs<br>(bouton vert sur la diapo précédente)<br>pour afficher le graphique
</p>
<div style="object-fit:cover;">
<canvas id="chart"></canvas>
</div>


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
/* eslint-env browser */
/* global Chart */

// Variables globales
let U = [];
let I = [];
let chart = null;

// Configuration initiale du graphique
const config = {
  type: 'scatter',
  data: {
    datasets: [
      { // Points
        data: [],
        backgroundColor: '#599DFF',
        showLine: false
      },
      { // Ligne de liaison (triée par I croissant)
        data: [],
        borderColor: '#FF644E',
        backgroundColor: 'transparent',
        showLine: true,
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [5, 5]
      }
    ]
  },
  options: {
    responsive: true,
    devicePixelRatio: 2,
    scales: {
      x: {
        title: { display: true, text: 'I (A)', color: 'white' },
        grid:  { color: 'rgba(255,255,255,0.3)' },
        ticks: { color: 'white' }
      },
      y: {
        min: 0,                                  // démarre toujours à 0 V
        title: { display: true, text: 'U (V)', color: 'white' },
        grid:  { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: 'white' }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Tracé de la caractéristique',
        font: { size: 16 },
        color: 'white'
      },
      legend: { display: false }
    }
  }
};

// Prépare les données et crée le graphique
function prepareData() {
  U = document.getElementById('inputU').value.split(',').map(Number);
  I = document.getElementById('inputI').value.split(',').map(Number);

  if (U.length !== I.length || U.some(isNaN) || I.some(isNaN)) {
    document.getElementById('validationMessage').innerHTML =
      'Il faut autant de valeurs <br>numériques dans chaque champ&nbsp;!';
    return;
  }

  document.getElementById('validationMessage').style.display = 'none';
  document.querySelector('.update-button').style.display = 'inline-block';
  document.querySelector('.custom-button').style.display = 'none';

  // Points dans l’ordre d’entrée
  const points = I.map((x, k) => ({ x, y: U[k] }));
  // Copie triée par abscisse pour la ligne
  const sorted = points.slice().sort((a, b) => a.x - b.x);

  if (!chart) {
    const ctx = document.getElementById('chart').getContext('2d');

    config.data.datasets[0].data = points;   // nuage non trié
    config.data.datasets[1].data = sorted;   // ligne triée
    config.options.scales.y.max = calcYmax(U);

    chart = new Chart(ctx, config);
  }
}

// Met à jour le graphique avec de nouvelles données
function updateGraph() {
  U = document.getElementById('inputU').value.split(',').map(Number);
  I = document.getElementById('inputI').value.split(',').map(Number);

  if (U.length !== I.length || U.some(isNaN) || I.some(isNaN)) {
    document.getElementById('validationMessage').innerHTML =
      'Il faut autant de valeurs <br>numériques dans chaque champ&nbsp;!';
    document.getElementById('validationMessage').style.display = 'block';
    return;
  }

  const points = I.map((x, k) => ({ x, y: U[k] }));
  const sorted = points.slice().sort((a, b) => a.x - b.x);

  chart.data.datasets[0].data = points;   // nuage
  chart.data.datasets[1].data = sorted;   // ligne triée
  chart.options.scales.y.max = calcYmax(U);
  chart.update();
}

// Calcule la borne supérieure de Y avec une marge (5 %)
function calcYmax(arr) {
  const maxU = Math.max(...arr);
  const margin = (maxU || 1) * 0.05;
  return maxU + margin;
}
</script>


{{%/section%}}

