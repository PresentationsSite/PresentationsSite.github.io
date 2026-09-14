+++
title = "TP réflexes"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


{{%section%}}

# Réflexes

---

Qui a le plus petit temps de réaction ?

---

<style>
#stop {
text-decoration: none;
border: none;
padding: 20px 20px;
font-size: 80px;
font-weight: bold;
background-color: #EE2200;
color: #fff;
border-radius: 20px;
box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
cursor: pointer;
outline: none;
transition: 0.2s all;
}

#start {
text-decoration: none;
border: none;
padding: 12px 20px;
font-size: 30px;
font-weight: bold;
background-color: #0076BA;
color: #fff;
border-radius: 5px;
box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
cursor: pointer;
outline: none;
transition: 0.2s all;
}

button:active {
transform: scale(0.98);
/* Scaling button to 0.98 to its original size */
box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
/* Lowering the shadow */
}
</style>

<p id="prompt" style="text-align:center">
</p>

<p id="boutexp" style="text-align:center;font-weight:bold;color: #FF968D;font-size:2em">
</p>    

<p id="redo" style="text-align:center">
</p>    

</body>
</html>

<script>
var t0;
var t1;
const exp = document.getElementById("prompt");
const mil = document.getElementById("boutexp");
const rec = document.getElementById("redo");
const bouton = '<br><button id="stop" onclick="fstop()">STOP</button>';
const texte1= 'Après avoir appuyé sur le bouton <span style="color:#56C1FF">START</span>,<br>cliquez sur le bouton rouge <span style="color:#FF968D">STOP</span><br>dès que vous le voyez.<br><br>';
const boutonstart = '<button id="start" onclick="fstart()">START</button>';
exp.innerHTML = texte1;
exp.innerHTML += boutonstart;
exp.innerHTML += "<br><br><br><br><br><br>";

function affiche(){
mil.innerHTML = bouton;
t0 = new Date().getTime();
}    

function fstart(){
console.log("yo")
console.log(t0);
mil.innerHTML = '';
rec.innerHTML = '';
exp.innerHTML = texte1;
setTimeout(affiche, 2000+4000*Math.random());
}

function fstop(){
console.log("fini");
t1 = new Date().getTime();
duree = (t1-t0)/1000;
mil.innerHTML = duree+" s";
rec.innerHTML = '<br> Cliquez sur <span style="color:#56C1FF">START</span> pour recommencer.<br><br>';
rec.innerHTML += boutonstart;
}    


</script>

---


Répéter l'expérience  au moins 10 fois <br>et notez dans un tableau de mesures<br>le temps $t_{{TR}_i}$ obtenu à chaque fois.

---

Calculer ensuite votre temps de réaction moyen<br><b style="color:#FFF056;">$\overline{t_{TR}}=\frac{1}{n}\sum_i^n t_{{TR}_i}$</b>

<p class="fragment">Peut-on déjà classer les élèves du groupe ?</p>

<p class="fragment">Non, il s'agit peut-être seulement de fluctuations statistiques pour des temps de réaction identiques.</p>

---

On va alors réaliser une évaluation de type A<br>de l'incertitude sur cette moyenne.

<p class="fragment">
L'<b style="color:#FF968D;">incertitude-type $\mathrm{u}(\overline{t_{TR}})$</b> s'obtient en calculant l'écart-type expérimental des mesures divisé<br>par la racine carrée du nombre de mesures :
<b style="color:#FF968D;">$\mathrm{u}(\overline{t_{TR}})=\frac{S_\mathrm{exp}}{\sqrt{n}}$</b>
</p>


---

Notez enfin proprement<br>le résultat de votre mesure :

<div style="color:#FF968D;">$$t_{TR} = \overline{t_{TR}} \pm \mathrm{u}(\overline{t_{TR}}) \text{ } \pu{s}$$</div>

---

Pour pouvoir être considérer plus réactif, il ne faut pas que les intervalles de confiance se chevauchent.

<p class="fragment">Et même alors, il restera théoriquement environ une chance sur trois que la différence soit due au hasard.</p>

<p class="fragment">En doublant la largeur de l'intervalle,<br>il ne reste plus qu'une chance sur vingt...</p>



{{%/section%}}

---


[Retour site](https://coursphychi.github.io/1spe/incertitudes1spe/)