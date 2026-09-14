+++
title = "TP"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
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
font-size: 0.8em;
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
font-size: 0.8em; 
}

.regression-button {
width: 100%;
background-color: #FF7D74; 
color: white;
font-size: 0.8em; 
}
</style>




{{%section%}}

<p style="font-size:0.7em">
Les valeurs entrées doivent utiliser le point comme séparateur décimal<br>et doivent être séparées par des virgules (ex : 0,0.25,0.5).
</p>

<div>
<label for="inputU">Valeurs de U (en V) :</label>
<input type="text" id="inputU" style="width: 100%; font-size: 1em;">
</div>

<br>

<div>
<label for="inputI">Valeurs de I (en mA) :</label>
<input type="text" id="inputI" style="width: 100%; font-size: 1em;">
</div>

<br>

<button onclick="prepareData()" class="custom-button">Tracer le graphique</button>
<button onclick="updateGraph()" class="custom-button update-button" style="display: none;">Mettre à jour le graphique</button>

---


<button onclick="showRegression()" id="regressionButton" class="custom-button regression-button" style="display: none;">Afficher la régression linéaire</button>
<p id="validationMessage" style="color: white;">Il faut valider les valeurs<br>(bouton vert sur la diapo précédente)<br>pour afficher le graphique.</p>
<canvas id="chart"></canvas>



<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="/js/tpelec1.js"></script>

{{%/section%}}

