+++
title = "Incertitudes"
outputs = ["Reveal"]
+++



## Incertitudes


---

{{%youtube WqFWG7i-JC4%}}

---

{{%youtube KOvHirpl7vk%}}





---
{{%section%}}
## Expérience

Vous allez pouvoir tester ci-dessous<br>votre temps de réaction.

---

Répéter l'expérience  au moins 10 fois <br>et notez dans un tableau de mesures<br>le temps $t_{TRi}$ obtenu à chaque fois.

---

Calculer ensuite votre temps de réaction moyen $\overline{t_{TR}}=\frac{1}{n}\sum_i^n t_{TRi}$ et réaliser une évaluation de type A de l'incertitude sur cette moyenne.

$u(\overline{t_{TR}})$ s'obtient en calculant l'écart-type expérimental des mesures divisé par la racine carrée du nombre de mesures.

---

Notez enfin proprement<br>le résultat de votre mesure :

$$t_{TR} = \overline{t_{TR}} \pm u(\overline{t_{TR}}) \text{ } \pu{s}$$

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

<p id="boutexp" style="text-align:center;font-weight:bold;color:red">
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
const texte1= 'Après avoir appuyé sur le bouton <span style="color:#0076BA">START</span>,<br>cliquez sur le bouton rouge <span style="color:#EE2200">STOP</span><br>dès que vous le voyez.<br><br>';
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
rec.innerHTML = '<br> Cliquez sur <span style="color:#0076BA">START</span> pour recommencer.<br><br>';
rec.innerHTML += boutonstart;
}    


</script>
{{%/section%}}





---


[Retour site](https://coursphychi.github.io/tsti2d/incertitudes/)