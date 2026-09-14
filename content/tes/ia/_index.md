+++
title = "IA"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"
+++


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



{{%section%}}

# IA

---

L'intelligence artificielle repose sur l'idée<br> que les fonctions cognitives, en particulier l'apprentissage, le raisonnement, le calcul,<br> la perception, la mémorisation, voire la<br> découverte scientifique ou la créativité artistique,<br> peuvent être reproduites sur des ordinateurs.

---

La capacité d’apprentissage est une caractéristique fréquemment attribuée à l’intelligence et la notion s’est très vite retrouvée au centre des recherches en intelligence artificielle.

---

L’<b>apprentissage automatique</b> (Machine Learning) est un champ d’étude de l’intelligence artificielle qui vise à donner aux machines la capacité d’apprendre à partir de données,<br>via des modèles mathématiques.

---

L’apprentissage automatique est à l’intersection de l’IA et de la science des données (data science).

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/vennia.png" style="box-shadow:none;background:none;border:none !important;">
</div>

---

Il ya 3 types d'apprentissage automatique en fonction du type d'interaction avec les données :

<ul>
<li class="fragment fade-up">l'apprentissage <span class="imp">supervisé</span> : on fournit à l'algorithme des données étiquetées et il doit apprendre à étiqueter de nouvelles données.</li>
</ul>

---

<ul>
<li>l'apprentissage <span class="imp">non supervisé</span> : on fournit à l'algorithme des données sans étiquette et il doit apprendre à les ranger en catégories.</li>

<br>

<li class="fragment fade-up">l'apprentissage <span class="imp">par renforcement</span> : l'algorithme interagit avec son environnement qui le récompense ou le punit.</li>
</ul>

{{%/section%}}

---

{{%section%}}

#### Exemple d'apprentissage supervisé :

## Algorithme des K<br>plus proches voisins (kNN)


---

Comment, à partir de données fournies,<br>un programme peut-il apprendre à prédire<br>la catégorie d'une nouvelle donnée<br>qu'il n'a jamais vue ?

---

Dans l'animation suivante, on montre comment KNN parvient à répondre à la question suivante :

Quelle est la couleur du nouveau point ?

---

{{< slide  background-video="/knnvid.mp4" background-size="100%" background-transition="concave">}}

---

Le choix de $k$ modifie le résultat obtenu.

<p class="fragment fade-up">Que se passe-t-il si $k$ est trop petit ?</p>

---

On moyenne sur très peu de points<br>et donc la variabilité est très grande. 

<p class="fragment fade-up">On parle alors de <span class="imp">surapprentissage</span> (overfitting).</p>

---

Et si $k$ est trop grand ?

<p class="fragment fade-up">L'algorithme finit par choisir systématiquement<br>la catégorie majoritaire, quel que soit<br>le nouveau point...</p> 

<p class="fragment fade-up">On augmente alors le <span class="imp">biais</span> (ici, le biais est<br>le préjudice en faveur du plus grand nombre)<br>et l'ajustement ne suit plus les variations.<br>On parle de <span class="imp">sous-apprentissage</span> (underfitting).</p>

---

{{< slide  background-image="/tabloverfit.png" background-size="90%" background-transition="concave">}}

---


Le choix de $k$ est donc affaire de compromis.<br>Pour le rendre plus scientifique, on peut chercher<br>à mesurer la performance de l'algorithme<br>pour différentes valeurs de $k$.

<p class="fragment fade-up">Mais comment mesurer sa performance&nbsp;?</p>

---


Un **tableau de contingence** va nous permettre d'évaluer la qualité des prédictions de l'algorithme.

---


Utilisons KNN sur une banque d'images<br>de chiffres écrits à la main.


---

Données d'apprentissage : 

1797 images de 8 par 8 pixels (en fait une liste de 64 nombres entre 0 et 255) extraits de la base de données MNIST et leurs étiquettes (le chiffre écrit).

---


![](https://info-tsi-vieljeux.github.io/exempleschiffres.png)


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


Concentrons-nous sur sa capacité à reconnaître des "3" pour dresser le **tableau de contingence** (aussi appelé matrice de confusion).

---


{{< slide  background-image="/tabcontinge.png" background-size="contain" background-transition="concave">}}

---


<b style="color:#FF644E">précision $\displaystyle =\frac{\mathrm{VP}}{\mathrm{VP+FP}}$</b>

<p class="fragment fade-up">
<b style="color:#F8BA00">sensibilité $\displaystyle =\frac{\mathrm{VP}}{\mathrm{VP+FN}}$</b>
</p>

<p class="fragment fade-up">
<b style="color:#1DB100">exactitude $\displaystyle =\frac{\mathrm{VP+VN}}{\mathrm{VP+VN+FP+FN}}$</b>
</p>

---

Un algorithme peut très bien être **très précis**<br>(les prédictions positives sont bien des 3),<br>mais **peu sensible** (parmi tous les 3,<br>peu ont été identifiés).

---

À l'inverse, on peut avoir une **bonne sensibilité**<br>(la plupart des vrais 3 ont été identifiés comme tel), mais **peu précis** (beaucoup de chiffres identifiés comme des 3 sont en fait d'autres chiffres).


---

L'algorithme kNN est très utilisé<br>dans l'industrie, dans des domaines variés :<br>
des recommandations sur les sites d'e-commerce jusqu'à l'aide au diagnostique médical sur<br>des images de radio ou d'IRM.

---

<u>Rq</u> :

il peut être préféré à des solutions plus modernes dans des secteurs réglementés comme la santé<br>ou la finance car il est facilement interprétable<br>(on comprend ce qu'il fait).


{{%/section%}}

---

{{%section%}}

#### Exemple d'apprentissage non-supervisé :

## Algorithme des<br>K-moyennes

---

La tâche d'un algorithme d'apprentissage<br>non-supervisé est de dévoiler les<br><span class="imp">structures cachées</span> des données..

---

L'algorithme des k-moyennes regroupe<br>en catégories des données dont<br> on ne connaît rien a priori.

<br>

<p class="fragment fade-up">C'est un algorithme<br>de partitionnement<br>des données (clustering).</p>

---

L'algorithme dépend d'un seul<br>paramètre (en plus des données) :<br>le nombre de partitions *k*.

---

<ul>
<li>On commence par choisir $k$ points au hasard dans l'espace des données (il peut s'agir de $k$ points de données ou de $k$ autres points).<br>Ce sont les $k$ centres (ou centroïdes).</li>
<li class="fragment fade-up">On attribue ensuite à chaque centre tous les points de données qui lui sont le plus proches, formant ainsi $k$ groupes.</li>
<li class="fragment fade-up">Enfin, on déplace chaque centre au barycentre de son groupe.</li>
</ul>


---

On répète les deux dernières opérations (attribution des points les plus près<br>et déplacement des centres)<br>tant que les centres bougent<br>d'une itération à l'autre.

---

{{< slide  background-video="/vidkmean.mp4" background-size="100%" background-transition="concave">}}

---

L'algorithme vise à résoudre au final un problème d'optimisation ; son but est en effet de trouver<br>le minimum de la distance entre les points<br>à l'intérieur de chaque partition.

---

k-moyenne permet de compresser des images<br>en regroupant les pixels en k couleurs.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="https://coursphychi.github.io/segimage.png" style="box-shadow:none;background:none;border:none !important;">
</div>

---

{{< slide  background-image="https://coursphychi.github.io/moswebb.png" background-size="contain" background-transition="concave">}}

---

### Limites

---

{{< slide  background-image="/localglobal.png" background-size="70%" background-transition="concave">}}

---

{{< slide  background-image="/localglobal2.png" background-size="contain" background-transition="concave">}}

---


L'algorithme des k-moyennes est lui aussi<br>très utilisé dans l'industrie :

<ul>
<li class="fragment fade-up">regroupement des clients selon leurs comportements</li>
<li class="fragment fade-up">optimisation logistique (position d'un dépôt )</li>
<li class="fragment fade-up">segmentation d'images médicales ou satellites</li>
<li class="fragment fade-up">création de playlists recommandées (clustering de morceaux)</li>
</ul>

{{%/section%}}

---

{{%section%}}

## Apprentissage par renforcement

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Reinforcement_learning_diagram_fr.svg/2119px-Reinforcement_learning_diagram_fr.svg.png" background-size="contain" background-transition="concave">}}

---

Cette méthode est très utilisée :

<ul>
<li class="fragment fade-up">en robotique (bras articulés, voitures autonomes, etc.)</li>
<li class="fragment fade-up">pour l'optimisation de procédés industriels (industrie chimique, raffineries, etc.)</li>
<li class="fragment fade-up">en logistique (planification des tâches)</li>
<li class="fragment fade-up">pour la gestion intelligente des réseaux électriques (smart grid)</li>
</ul>

{{%/section%}}

---

{{%section%}}

## Apprentissage profond<br>(deep learning)

---

Révolutionne le secteur de l'IA<br>dans les années 2010.


<p class="fragment fade-up">Il consiste à entraîner un ordinateur à “apprendre” en analysant un grand nombre d’exemples à l’aide de structures mathématiques appelées <span class="imp">réseaux<br>de neurones</span>, qui s’inspirent vaguement<br>du fonctionnement du cerveau humain.</p>

---

L’idée de “profondeur” vient du fait que les réseaux de neurones utilisés dans le deep learning<br>ont de nombreuses couches. 

<p class="fragment fade-up">Chaque couche effectue une partie de l’analyse<br>et transmet ses résultats à la suivante.</p>

<p class="fragment fade-up">C’est un peu comme si un problème complexe était résolu par une série d’étapes simples, chacune<br>se concentrant sur un détail particulier.</p>

---

[**Superbes présentations des réseaux<br>de neurones par 3Blue1Brown**](https://www.3blue1brown.com/lessons/neural-networks#title)


{{%note%}}
Montrer l'exemple interactif au début de la page
{{%/note%}}

---

Le principal problème du deep learning :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="https://coursphychi.github.io/resumdeeplearning.png" style="box-shadow:none;background:none;">
</div>

---

Ça marche, mais on ne sait pas bien comment.<br>La cuisine interne du réseau de neurone dans<br>ses couches cachées est mystérieuse...

<p class="fragment fade-up">On parle de boîte noire.</p>

{{%/section%}}

---

{{%section%}}

## Grands modèles<br>de langage<br>(LLM)

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/LPZh9BOjkQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

[Billet de blog ultra pédagogique<br>de Science Etonnante](https://scienceetonnante.substack.com/p/chatgpt-va-t-il-chercher-ses-reponses)

---

Toute la phase d'apprentissage du langage correspond à de l'apprentissage supervisé.

---

Puis on ajoute une couche d'apprentissage par renforcement (supervisé par des humains ou d'autres IA) pour rendre le modèle "docile".


--- 

Essayer de comprendre comment les LLM "pensent" (interprétabilité) et à quoi ils pensent vraiment (sécurité) devient de plus en plus crucial au fur et à mesure que notre dépendance grandit.


---

Exemple d'avancée en interprétabilité :

<p class="fragment fade-up">des chercheurs d'Anthropic ont réussi à isoler des concepts dans le "cerveau" de Claude qu'ils<br>ont pu ensuite amplifier ou inhiber.</p>

<p class="fragment fade-up">C'est comme ça qu'on a pu interagir pendant<br>une journée avec Golden Gate Claude...</p>

{{%note%}}
La découverte des concepts peut s'assimiler à de l'IRM fonctionnel puisqu'on cherche où s'activent les neurones lors de stimulations et l'amplification/inhibition s'apparente à de la stimulation magnétique transcrânienne.
{{%/note%}}

---

{{< slide  background-image="https://coursphychi.github.io/goldenclaude.jpeg" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Problèmes<br>que posent l'IA

---

### SLOP

<p class="fragment fade-up">Envahissement d'internet et des réseaux sociaux par des contenus de basse qualité générés par IA (<b>slop</b>) qui noient les contenus humains de qualité.</p>

<p class="fragment fade-up">Sur un million de pages générées par l'IA<br>sur un sujet, il n'est pas rare qu'une finisse propulsée en tête des recherches par<br>l'algorithme de Google...</p>

---

[Documentaire sur le sujet](https://www.arte.tv/fr/videos/122187-000-A/l-ia-va-t-elle-tuer-internet/)

---

### Des biais pourrissent<br>les données

---


<iframe width="800" height="450" src="https://www.youtube.com/embed/tf4-_4IbXPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

#### Biais du survivant

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/biaissurvivant.png" style="box-shadow:none;background:none;border:none !important;">
</div>


---

C'est lui qui nous fait penser<br>que tout était mieux avant.

<p class="fragment fade-up">Dans le cas d'une IA, on lui apprend à imiter ce<br>qui marche… sans comprendre ce qui échoue.</p>

---

Le biais des survivants est un exemple<br>de <b>biais de sélection</b>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="https://coursphychi.github.io/samplingbias.jpeg" style="box-shadow:none;background:none;border:none !important;">
</div>

---

L’entraînement des IA, en particulier celui des IA génératives, est très sensible à ces défauts de représentation de la même façon qu’un enfant élevé dans un milieu particulier (secte par exemple) aura beaucoup de mal à se faire une représentation adaptée du reste du monde.

---

Pour les LLM, un surentraînement<br>vise à gommer ces biais.

<p class="fragment fade-up">Mais tant que les LLM n'auront pas une représentation fiable des relations de causalités, des biais pourront persister.</p>

---

### Corrélation ≠ causalité

<p class="fragment fade-up">Confondre corrélation et causalité revient à penser que les pompiers causent les incendies puisqu'on les trouve toujours là où ça brûle.</p>

<p class="fragment fade-up">Ou encore que les ventes de glaces causent<br>les attaques de requins puisque les deux<br>sont fortement corrélées.</p>

<p class="fragment fade-up">Ce <a href="https://tylervigen.com/spurious-correlations">chouette site</a> recense pleins<br>de corrélations amusantes.</p>

{{%note%}}
Dans le premier cas, il s'agit d'une inversion entre cause et conséquence et dans le deuxième, il y a un troisième facteur.
{{%/note%}}

---

Les IA sont excellentes pour trouver des corrélations (ce sont avant tout des machines statistiques) mais très mauvaises pour comprendre la causalité car leur apprentissage ne suppose jusqu'ici aucune interaction avec<br>leur environnement. 

<p class="fragment fade-up">Et couplé avec le biais de sélection, les IA génératives peuvent reproduire des<br>stéréotypes sexistes ou racistes.</p> 

---

Exemple :

Si les données d’apprentissage contiennent plus d’infirmiers ou secrétaires femmes et de patrons ou ingénieurs hommes, le modèle pourra en déduire que le métier d'ingénieur est trop difficile pour une femme alors que le métier<br>de secrétaire leur est plus adapté.

<p class="fragment fade-up">Là encore, le surapprentissage vise à gommer<br>ces représentations erronées.</p>

---

Pour le coup, les humains<br>ne sont pas un bon modèle...

<p class="fragment fade-up">Beaucoup de monde peine en effet<br>à comprendre la situation suivante :</p>

---

<p style="text-align:left !important;">
A father and his son driving together in their car have a terrible car accident. The father dies upon impact. The son is rushed to the hospital in an ambulance and is immediately brought to the operating table. The doctor takes a quick look at him and says that a specialist is needed.<br>The specialist comes, looks at the young man on the operating table and proclaims, I cannot operate on him, he is my son.</p>

---

### Dilemmes moraux

<p class="fragment fade-up">Dans une situation où vous sacrifier permet de sauver plusieurs vies, la voiture autonome qui<br>vous conduit doit-elle choisir de vous tuer ?</p>

<p class="fragment fade-up">Le MIT a mené une <a href="https://www.moralmachine.net">expérience sociologique</a><br>à grande échelle sur ces questions.</p>

---

### Problème de l'alignement

<p class="fragment fade-up">On se rend compte au fur et à mesure que les LLM savent mentir, dissimuler, tromper, manipuler, tricher lorsqu'ils se savent évalués, feindre<br>de partager certaines valeurs...</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/cw9wcNKDOtQ?start=1982" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---


<iframe width="800" height="450" src="https://www.youtube.com/embed/1WcpN4ds0iY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Dans son livre *Superintelligence*, le philosophe<br>Nick Bostrom explique que quel que soit l’objectif initial d’une IA largement supérieure à l’intelligence humaine (une superintelligence), l’éradication<br>de l’humanité peut se présenter<br>comme un effet secondaire.

<div style="position:relative;margin-left:auto;margin-right:auto;width:200px;max-width:100%;">
<img src="https://m.media-amazon.com/images/I/814sKOe+BcL._SL1339_.jpg" style="box-shadow:none;background:none;">
</div>

---

Pour illustrer cette idée, il utilise son célèbre exemple d’une IA dont le but est de maximiser<br>la <a href="https://www.decisionproblem.com/paperclips/">production de trombones</a>.

<a href="https://www.decisionproblem.com/paperclips/"><div style="position:relative;margin-left:auto;margin-right:auto;width:600px;max-width:100%;">
<img src="/paperclip.png" style="box-shadow:none;background:none;border:none !important;">
</div>
</a>

---

Même un objectif comme<br>"faire en sorte que chaque humain soit heureux" peut s'avérer très problématique...

<br>

<p class="fragment fade-up">Pourquoi ?</p>


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tes/vivant/ia)