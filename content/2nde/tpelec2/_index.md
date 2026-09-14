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
<label for="inputtheta">Valeurs de θ (en °C) :</label>
<input type="text" id="inputtheta" style="width: 100%; font-size: 1em;" value="5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80">
</div>
<br>
<div>
<p>Valeurs de R correspondantes (en Ω) :</p>
<textarea id="inputR" style="width: 100%; font-size: 1em;" rows="2"></textarea>

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
<script src="/js/tpelec2.js"></script>



{{%/section%}}

