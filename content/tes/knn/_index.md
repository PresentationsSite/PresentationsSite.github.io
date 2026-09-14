+++
title = "Machine Learning"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++


<title>Reconnaissance de Chiffres avec un KNN</title>
<style>
.drawing-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
.grid-container {
    display: grid;
    grid-template-columns: repeat(8, 30px); /* Augmentez la taille des cellules */
    grid-gap: 2px; /* Ajustez l'espacement si nécessaire */
    margin-bottom: 20px;
}
.grid-item {
    width: 30px; /* Taille plus grande pour chaque cellule */
    height: 30px; /* Taille plus grande pour chaque cellule */
    background-color: #fff;
    border: 1px solid #ccc; /* Bordures plus fines et grises */
}
    .grid-item.checked {
        background-color: #000;
    }
    #prediction {
        margin-bottom: 0; /* Pour réduire l'espace avec le chiffre prédit */
        font-size: 20pt; /* Rendre le texte un peu plus petit */
    }
    #predictedLabel {
        color: red; /* Déjà défini dans le HTML, mais peut être ajusté ici pour la cohérence */
    }
    button {
    background-color: #4CAF50; /* Couleur verte */
    color: white; /* Texte blanc */
    padding: 15px 32px; /* Plus grand padding pour un bouton plus grand */
    font-size: 16px; /* Taille de la police plus grande */
    border: none; /* Pas de bordure */
    border-radius: 5px; /* Bords arrondis */
    cursor: pointer; /* Change le curseur en pointeur */
    margin: 10px; /* Ajoute de l'espace autour des boutons */
}
button:hover {
    background-color: #45a049; /* Un peu plus foncé lorsque survolé */
}
.reset-btn {
    background-color: #007bff; /* Bleu Bootstrap */
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
}
.reset-btn:hover {
    background-color: #0056b3; /* Bleu plus foncé au survol */
}
#nearest-neighbors-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.neighbor {
    display: grid;
    grid-template-columns: repeat(8, 5px); /* Adaptez la taille des "pixels" */
    margin: 5px;
}
.neighbor div {
    width: 5px; /* Taille du "pixel" */
    height: 5px;
    border: 0.5px solid #ccc; /* Bordure fine pour chaque "pixel" */
}
</style>


# Exemple d'utilisation de KNN

---

Code Python du programme :

```python
def dist(x,Pts):
    n = len(x)
    L = []
    for pt in Pts:
        d = 0
        for i in range(n):
            d += (pt[i]-x[i])**2
        d = d**0.5
        L.append(d)
    return L
    
import statistics as stat
def KNN(X,k,Appr,Etiq):
    L = dist(X,Appr)
    LplusEtiq = []
    for i in range(len(L)):
        LplusEtiq.append((L[i],Etiq[i]))
    LplusEtiq.sort()
    EtiqFin = []
    for e in LplusEtiq[:k]:
        EtiqFin.append(e[1])
    return stat.mode(EtiqFin)
```


---

Données d'apprentissage : 

1797 images de 8 par 8 pixels (en fait une liste de 64 nombres entre 0 et 255) extraits de la base de données MNIST et leurs étiquettes (le chiffre écrit).

---


![](https://info-tsi-vieljeux.github.io/exempleschiffres.png)


---



<div class="drawing-container">
<div id="grid" class="grid-container"></div>
</div>
<button id="predictBtn">Prédire</button><button id="resetBtn" class="reset-btn">RAZ</button>
<p id="prediction">Prédiction:&nbsp;<span id="predictedLabel" style="color: red;"></span></p>
<div id="nearest-neighbors-container"></div>



<script >
let trainData = [];
let trainLabels = [];

async function loadDataset() {
    const response = await fetch('/pourprojetia/digits_dataset.json');
    const dataset = await response.json();
    trainData = dataset.data; // Les données d'entraînement sont déjà des vecteurs de dimension 64
    trainLabels = dataset.labels; // Les étiquettes correspondantes
}

function euclideanDistance(a, b) {
    return a.reduce((sum, current, index) => sum + Math.pow(current - b[index], 2), 0) ** 0.5;
}

function knn(data, labels, query, k) {
    const distances = data.map((item, index) => ({
        distance: euclideanDistance(item, query),
        label: labels[index],
        index: index // Ajoutez l'indice de l'élément
    }));
    distances.sort((a, b) => a.distance - b.distance);
    const nearestNeighbors = distances.slice(0, k);
    // Calcul de l'étiquette la plus fréquente parmi les k plus proches voisins
    const counts = nearestNeighbors.reduce((acc, neighbor) => {
        acc[neighbor.label] = (acc[neighbor.label] || 0) + 1;
        return acc;
    }, {});
    const predictedLabel = parseInt(Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0]);
    // Retourne également les indices des k plus proches voisins
    return { predictedLabel, nearestNeighbors: nearestNeighbors.map(n => n.index) };
}



document.addEventListener('DOMContentLoaded', async () => {
    initGrid();
    document.getElementById('predictBtn').addEventListener('click', onPredictClick);
});


let isDrawing = false; // Un indicateur pour suivre si l'utilisateur est en train de dessiner

function initGrid() {
    const grid = document.getElementById('grid');
    grid.addEventListener('mousedown', (e) => {
        isDrawing = true;
        // Prévenir le comportement de drag-and-drop par défaut qui pourrait interférer avec le dessin
        e.preventDefault();
    });
    grid.addEventListener('mouseup', () => isDrawing = false);
    grid.addEventListener('mouseleave', () => isDrawing = false);
    for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.addEventListener('mouseenter', () => {
            if (isDrawing) {
                cell.classList.add('checked');
            }
        });
        cell.addEventListener('mousedown', () => {
            // Permet également de cocher/décocher sur un clic simple
            cell.classList.toggle('checked');
        });
        grid.appendChild(cell);
    }
    // Assurez-vous de réinitialiser isDrawing lorsque l'utilisateur arrête d'interagir avec la grille
    document.addEventListener('mouseup', () => isDrawing = false);
}


function getGridData() {
    const cells = document.querySelectorAll('.grid-item');
    const inputData = Array.from(cells).map(cell => cell.classList.contains('checked') ? 255 : 0);
    return inputData; // Ce tableau représente l'image dessinée, aplatie en un vecteur de dimension 64
}

async function onPredictClick() {
    await loadDataset();
    const gridData = getGridData();
    const k = 3;
    const result = knn(trainData, trainLabels, gridData, k);
    document.getElementById('prediction').textContent = `Prédiction: ${result.predictedLabel}`;
    displayNearestNeighbors(result.nearestNeighbors);
}

function displayNearestNeighbors(neighborsIndices) {
    const container = document.getElementById('nearest-neighbors-container');
    container.innerHTML = ''; // Efface les voisins précédents
    neighborsIndices.forEach(index => {
        const neighborData = trainData[index];
        const neighborElement = document.createElement('div');
        neighborElement.className = 'neighbor';
        // Générez la grille 8x8 pour l'image
        neighborData.forEach(pixel => {
            const pixelElement = document.createElement('div');
            // Utilisez une échelle de gris pour la couleur des pixels : plus foncée pour des valeurs plus élevées
            pixelElement.style.backgroundColor = `rgba(0, 0, 0, ${pixel / 16})`; // Ajustez selon le format de vos données
            neighborElement.appendChild(pixelElement);
        });
        container.appendChild(neighborElement);
    });
}


function resetGrid() {
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell => {
        cell.classList.remove('checked');
    });
}

document.getElementById('resetBtn').addEventListener('click', resetGrid);


</script> 



---


[Retour site](https://coursphychi.github.io/tes/vivant/ia/#algorithme-des-k-moyennes----exemple-dapprentissage-non-supervisé)