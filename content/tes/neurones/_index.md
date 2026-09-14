+++
title = "Machine Learning"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++

<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"></script>
<style>
.container {
    display: flex;
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 40px);
    grid-gap: 1px;
    margin-right: 20px; /* Espace entre les grilles */
}
.grid-item {
    width: 40px;
    height: 40px;
    border: 1px solid #000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.grid-item select {
    width: 75%; /* Plus petit que la cellule */
    height: 70%; /* Plus petit que la cellule */
}
canvas {
    border: 1px solid black;
    margin-left: 20px;
}
</style>

<div class="container">
    <div id="userGrid" class="grid-container"></div>
    <canvas id="predictionCanvas" width="320" height="320"></canvas>
</div>


<script>

const gridSize = 8;
const userGrid = document.getElementById('userGrid');
const predictionCanvas = document.getElementById('predictionCanvas');
const ctxPrediction = predictionCanvas.getContext('2d');
let userInput = new Array(gridSize * gridSize).fill({x: 0, y: 0, color: 0});

// Modèle TensorFlow.js avec une couche cachée supplémentaire
const model = tf.sequential();
model.add(tf.layers.dense({inputShape: [2], units: 32, activation: 'relu'}));
model.add(tf.layers.dense({units: 64, activation: 'relu'})); // Couche cachée supplémentaire
model.add(tf.layers.dense({units: 3, activation: 'softmax'}));
model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy']});

function initializeUserGrid() {
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const index = x + y * gridSize;
            userInput[index] = {x, y, color: 0}; // Initialiser avec "Clear"
            const cell = document.createElement('div');
            cell.className = 'grid-item';
            const select = document.createElement('select');
            ['Clear', 'Red', 'Green', 'Blue'].forEach((color, idx) => {
                const option = document.createElement('option');
                option.value = idx;
                option.textContent = color;
                select.appendChild(option);
            });
            select.onchange = () => {
                userInput[index].color = parseInt(select.value);
                cell.style.backgroundColor = select.value === '1' ? 'red' : select.value === '2' ? 'green' : select.value === '3' ? 'blue' : 'transparent'; // Colorer la case
                trainAndUpdateModel();
            };
            cell.appendChild(select);
            userGrid.appendChild(cell);
        }
    }
}

async function trainAndUpdateModel() {
    const xs = tf.tensor2d(userInput.filter(input => input.color > 0).map(input => [input.x / gridSize, input.y / gridSize])); // Coordonnées normalisées
    const ys = tf.oneHot(tf.tensor1d(userInput.filter(input => input.color > 0).map(input => input.color - 1), 'int32'), 3); // Encodage one-hot
    await model.fit(xs, ys, {epochs: 20, batchSize: 32});
    updatePredictionGrid();
}

async function updatePredictionGrid() {
    const allInputs = userInput.map(input => [input.x / gridSize, input.y / gridSize]);
    const predictions = model.predict(tf.tensor2d(allInputs));
    const predictedClasses = await predictions.argMax(-1).data();
    drawPredictionGrid(predictedClasses);
}

function drawPredictionGrid(predictedClasses) {
    ctxPrediction.clearRect(0, 0, predictionCanvas.width, predictionCanvas.height);
    predictedClasses.forEach((cls, i) => {
        const x = (i % gridSize) * 40;
        const y = Math.floor(i / gridSize) * 40;
        ctxPrediction.fillStyle = cls === 0 ? 'red' : cls === 1 ? 'green' : cls === 2 ? 'blue' : 'transparent'; // Choisir la couleur
        ctxPrediction.fillRect(x, y, 40, 40);
    });
}

initializeUserGrid();

</script>


---


[Retour site](https://coursphychi.github.io/tes/vivant/ia/#algorithme-des-k-moyennes----exemple-dapprentissage-non-supervisé)