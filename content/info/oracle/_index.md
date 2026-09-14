+++
title = "Oracle"
outputs = ["Reveal"]
[reveal_hugo]
highlight_theme = "atom-one-dark-reasonable"

+++

{{% section %}}

## Oracle d'Aaronson

---


<p style="text-align:center">Taper ou toucher <span style="font-weight:bold">g</span> ou <span style="font-weight:bold">h</span>.<br>
L'oracle va tenter de prédire votre prochaine lettre.<br>
Il faut au moins 6 lettres pour le réveiller.
</p>

---

  <style>
    /* Réinitialisation et style global */
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
    /* Conteneur principal : 3 zones (g | prédiction | h) */
    .oracle-container {
      display: flex;
      flex-direction: row;
      height: 50vh; /* Hauteur ajustée pour laisser apparaître le pourcentage */
      align-items: center;
      justify-content: space-between;
    }
    /* Boutons "g" et "h" : sans bord arrondi et occupant toute la hauteur */
    .button {
      flex: 0 0 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 80px;
      font-weight: bold;
      border: none;
      outline: none;
      cursor: pointer;
      transition: background-color 0.2s ease, color 0.2s ease;
    }
    #button-g {
      background-color: #FF8DC6;
      color: #CB297B;
    }
    #button-h {
      background-color: #56C1FF;
      color: #0076BA;
    }
    /* Effets hover, active et pour clavier via la classe .active */
    #button-g:hover, #button-g:active, #button-g.active {
      background-color: #EF5FA7;
      color: white;
    }
    #button-h:hover, #button-h:active, #button-h.active {
      background-color: #00A2FF;
      color: white;
    }
    /* Zone de prédiction centrale */
    #prediction {
      flex: 0 0 50%;
      height: 100%;
      background-color: #FFF056; /* Couleur neutre par défaut */
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 120px;
      font-weight: bold;
      /* Pas de bordure par défaut */
      border: none;
      border-radius: 0;
      transition: background-color 0.1s ease;
    }
    /* Zone d'affichage du pourcentage (sans fond) */
    #percentage-container {
      width: 100%;
      padding: 10px 20px;
      text-align: center;
    }
    #percentage-text {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    #percentage-bar {
      width: 80%;
      height: 20px;
      background-color: #ddd;
      margin: 0 auto;
      border-radius: 10px;
      overflow: hidden;
    }
    #percentage-fill {
      height: 100%;
      background-color: #1DB100;
      width: 0%;
      transition: width 0.3s ease;
    }
  </style>
</head>
<body>
  <!-- Zone principale avec les 3 zones (g, prédiction, h) -->
  <div class="oracle-container">
    <button id="button-g" class="button">g</button>
    <div id="prediction">?</div>
    <button id="button-h" class="button">h</button>
  </div>

  <!-- Affichage du pourcentage -->
  <div id="percentage-container">
    <div id="percentage-text">0%</div>
    <div id="percentage-bar">
      <div id="percentage-fill"></div>
    </div>
  </div>

  <script>
    /***** Initialisation de l'oracle *****/
    // Dictionnaire pour les 5-grammes (32 contextes possibles)
    var Dico = {};
    for (let i = 0; i < 32; i++) { 
      Dico[i] = [0, 0]; // [nombre de g, nombre de h]
    }

    var Ltap = [];               // Historique des lettres tapées
    var currentPrediction = "?"; // Prédiction affichée (calculée précédemment)
    var good = [];               // 1 si la prédiction était correcte, 0 sinon
    var tot = 0;                 // Nombre total de comparaisons

    // Convertit un tableau de 5 lettres en entier (pour indexer Dico)
    // 'h' vaut 1, 'g' vaut 0.
    function tradMot(mot) {
      let nb = 0;
      for (let i = 0; i < 5; i++) {
        if (mot[i] === 'h') {
          nb += Math.pow(2, 4 - i);
        }
      }
      return nb;
    }

    // Change la couleur de fond de la zone de prédiction pour indiquer le feedback
    function setPredictionColor(color) {
      const colorMap = {
        "green": "#1DB100",
        "red": "#FF644E"
      };
      document.getElementById("prediction").style.backgroundColor = colorMap[color] || "#ffcc00";
    }

    /***** Gestion des entrées et mise à jour de l'oracle *****/
    function handleInput(letter) {
      // Si une prédiction avait déjà été affichée (i.e. si on dispose d'au moins 5 lettres),
      // comparer cette prédiction avec la lettre actuellement tapée.
      if (Ltap.length >= 5) {
        let isCorrect = (letter === currentPrediction);
        tot++;
        if (isCorrect) {
          good.push(1);
          setPredictionColor("green");
        } else {
          good.push(0);
          setPredictionColor("red");
        }
        setTimeout(() => {
          document.getElementById("prediction").style.backgroundColor = "#ffcc00";
        }, 300);
      }

      // Si on dispose d'un contexte de 5 lettres (avant d'ajouter la lettre courante),
      // mettre à jour le dictionnaire avec le mapping : contexte -> lettre tapée.
      if (Ltap.length >= 5) {
        let context = Ltap.slice(-5);  // dernier bloc de 5 lettres
        let idx = tradMot(context);
        if (letter === 'h') {
          Dico[idx][1]++;
        } else {
          Dico[idx][0]++;
        }
      }

      // Ajouter la lettre tapée à l'historique.
      Ltap.push(letter);

      // Calculer la nouvelle prédiction si l'on a au moins 5 lettres.
      if (Ltap.length >= 5) {
        let context = Ltap.slice(-5);
        let idx = tradMot(context);
        currentPrediction = (Dico[idx][0] >= Dico[idx][1]) ? "g" : "h";
      } else {
        currentPrediction = "?";
      }
      // Mettre à jour l'affichage de la prédiction.
      document.getElementById("prediction").innerText = currentPrediction;

      // Mise à jour de l'affichage du pourcentage de bonnes prédictions.
      let percentage;
      if (good.length > 100) {
        let sum = 0;
        const last100 = good.slice(-100);
        for (let val of last100) {
          sum += val;
        }
        percentage = Math.round((sum / last100.length) * 100);
      } else if (tot > 0) {
        const sum = good.reduce((a, b) => a + b, 0);
        percentage = Math.round((sum / tot) * 100);
      } else {
        percentage = 0;
      }
      document.getElementById("percentage-text").innerText = percentage + "%";
      document.getElementById("percentage-fill").style.width = percentage + "%";
      
      // Après 200 touches appuyées, appliquer une bordure de 10px de couleur #FEAE00
      if (Ltap.length >= 200) {
        document.getElementById("prediction").style.border = "10px solid #FEAE00";
      }
    }

    /***** Gestion des événements *****/
    // Pour les clics et touch sur les boutons
    document.getElementById("button-g").addEventListener("click", () => { handleInput("g"); });
    document.getElementById("button-h").addEventListener("click", () => { handleInput("h"); });
    document.getElementById("button-g").addEventListener("touchend", (e) => { e.preventDefault(); handleInput("g"); });
    document.getElementById("button-h").addEventListener("touchend", (e) => { e.preventDefault(); handleInput("h"); });

    // Pour la saisie au clavier : ajout/suppression de la classe "active" pour foncer le bouton
    document.addEventListener("keydown", (event) => {
      if (event.key === "g" || event.key === "h") {
        if (event.key === "g") {
          document.getElementById("button-g").classList.add("active");
        } else {
          document.getElementById("button-h").classList.add("active");
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "g" || event.key === "h") {
        if (event.key === "g") {
          document.getElementById("button-g").classList.remove("active");
          handleInput("g");
        } else {
          document.getElementById("button-h").classList.remove("active");
          handleInput("h");
        }
      }
    });
  </script>


{{% /section %}}

---
{{% section %}}

## Autre oracle

---

L'oracle va tâcher de déterminer si les chiffres que vous allez transmettre ont été générés par<br>un humain ou par une machine.

<style>
  .btn {
    text-decoration: none;
    border: none;
    padding: 12px 40px;
    font-size: 16px;
    background-color: green;
    color: #fff;
    border-radius: 5px;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    outline: none;
    transition: 0.2s all;
  }
  /* Adding transformation when the button is active */

  .btn:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
</style>

<div style="text-align:center;">
<textarea id="champ" rows="7" cols="50" style="font-size:20px">
Entrer une série d'au moins 200 "1" et "0".
</textarea>
</div>


<div style="text-align:center;">
<button class="btn" onclick="verdict()">Verdict</button>
</div>

<p id="err" style="text-align:center"></p>

<p id="res" style="text-align:center;font-size:50px;font-weight:bold;"></p>

<br>
<br>

<script>
function verdict() {
    var serie = document.getElementById("champ").value;
    var test = false;
    const n = serie.length;
    const el1 = document.getElementById("err");
    const el2 = document.getElementById("res");
    for (let i=0; i<n; i++){
    	if (serie[i] !== "1" & serie[i] !== "0"){
    	  el2.innerHTML = ""
      	console.log(serie[i])
      	el1.innerHTML = "Il n'y a pas que des 1 et des 0 sans espace";
        test = true;
        return false;
        }
       }
    
    if (n < 200) {
    	el2.innerHTML = ""
    	var manque = 200-n;
    	el1.innerHTML = "L'oracle a besoin d'au moins " + manque + " chiffres de plus...";
    	}
    else {
    	 el1.innerHTML = "";
     	 var lmax = 0;
       for (let i=0; i<n; i++) {
       let j = i+1;
       let l = 0;
			 while (j < n){
        	if (serie[j] != serie[i]){
          	break;
          }
          j += 1;
        }
       l = j-i;
       if (lmax < l){
       	lmax = l;
       }
      }
      let s = 0;
      for (let i=0; i<n; i++){
      	s += parseInt(serie[i]);
      }
    if (lmax >= 7 & lmax < 20 & s > (n/2 - Math.sqrt(n/2*1/4)*3) & s < (n/2 + Math.sqrt(n/2*1/4)*3)){
    	el2.innerHTML = "🤖 MACHINE 🤖"
    }
    else if (lmax > 20 | s < (n/2 - Math.sqrt(n/2*1/4)*3) | s > (n/2 + Math.sqrt(n/2*1/4)*3)){
    	el2.innerHTML = "🧟‍♂️ ZOMBIE 🧟‍♂️";
      }
    else {
    	el2.innerHTML = "🧠 HUMAIN 🧠";
    }
     }
    } 
</script>

{{% /section %}}

---

[Retour site](https://info-tsi-vieljeux.github.io/projets/oracle)