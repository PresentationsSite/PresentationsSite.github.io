+++
title = "Avancement"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

span {font-weight:normal;color:#93a1a1;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:#93a1a1;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

</style>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
.shape {
    display: inline-block;
    margin: 5px;
    margin-bottom: -1px;
}
.circle {
    width: 30px;
    height: 30px;
    background-color: #FF644E;
    border-radius: 50%;
}
.square {
    width: 30px;
    height: 30px;
    background-color: #0076BA;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 30px solid #FFD932;
}
.circlevert {
    width: 30px;
    height: 30px;
    background-color: #1DB100;
    border-radius: 50%;
}

</style>


# Avancement

---

{{%section%}}

Supposons qu'une transformation chimique est modélisée par la réaction suivante :

<div>2<div class="shape circle"></div> + 3 <div class="shape square"></div> $\longrightarrow$ 1<div class="shape triangle"></div> + 2<div class="shape circlevert"></div></div>

---

Et supposons que les quantités initiales soient :

<div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div>

<br>

<div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div>

<br>

<div class="shape triangle"></div><div class="shape triangle"></div>

<br>

<div class="shape circlevert"></div>

{{%note%}}
Un élève dessine tout ça au tableau
{{%/note%}}

---

Que deviennent ces quantités<br>si la réaction a lieu une fois ?

---

<div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div>

<br>

<div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div>

<br>

<div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div>

<br>

<div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div>

---

Si elle a lieu une deuxième fois ?

---

<div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div>

<br>

<div class="shape square"></div><div class="shape square"></div><div class="shape square"></div>

<br>

<div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div>

<br>

<div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div>

---

Et une troisième fois ?

---

<div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div>

<br>


<br>

<div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div><div class="shape triangle"></div>

<br>

<div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div><div class="shape circlevert"></div>

---

La réaction peut-elle continuer ?

<p class="imp fragment fade-up">Non</p>

<br>

<div class="fragment fade-up"> Comment qualifie-t-on l'espèce chimique <div class="shape square"></div> ?</div>

<p class="imp fragment fade-up">C'est un réactif limitant</p>

---

Que se serait-il passé avec les quantités suivantes ?

<div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div><div class="shape circle"></div>

<br>

<div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div><div class="shape square"></div>

---

Que dit-on alors du mélange ?

<p class="fragment fade-up">Le mélange est<br><span class="imp">en proportion stœchiométrique</span>.<br>
Ou plus simplement :<br>
<span class="imp">le mélange est stœchiométrique</span>.</p>

---

Si la réaction est $\ce{a A + b B -> ...}$,<br>
quelle relation doit lier les quantités de matière initiales $n_{A}$ et $n_B$ pour que le mélange soit<br>en proportion stœchiométrique ?

<p class="fragment fade-up imp">$\displaystyle \frac{n_A}{a}=\frac{n_B}{b}$</p>


---

Retournons à notre réaction

<div>2<div class="shape circle"></div> + 3 <div class="shape square"></div> $\longrightarrow$ 1<div class="shape triangle"></div> + 2<div class="shape circlevert"></div></div>

Mais imaginons maintenant que les quantités initiales soient beaucoup, beaucoup plus grandes. Il faut trouver un moyen plus pratique de <span class="imp">tenir les comptes</span>.

<p class="fragment fade-up">Désignons par $x$<br>le nombre de fois que la réaction a lieu.<br>
On appelle <span class="imp">$x$ l'avancement de réaction</span>.</p>

---

Comment évolue les quantités de matière<br>
des réactifs et des produits en fonction de $x$ ?

<p class="fragment fade-up">Comment se représenter<br>cette évolution graphiquement ?</p>

---

<div>Pour <div class="shape circle"></div> :

<br>

<div class="fragment fade-up">$n$<sub><div class="shape circle"></div></sub> $=n$<sub><div class="shape circle"></div>,initial</sub> $-2x$</div>

<br>

<div class="fragment fade-up">Pour <div class="shape square"></div> :

<br>

<div class="fragment fade-up">$n$<sub><div class="shape square"></div></sub> $=n$<sub><div class="shape square"></div>,initial</sub> $-3x$</div>

<br>

<div class="fragment fade-up">Pour <div class="shape triangle"></div> :

<br>

<div class="fragment fade-up">$n$<sub><div class="shape triangle"></div></sub> $=n$<sub><div class="shape triangle"></div>,initial</sub> $+x$</div>

<br>

<div class="fragment fade-up">Pour <div class="shape circlevert"></div> :

<br>

<div class="fragment fade-up">$n$<sub><div class="shape circlevert"></div></sub> $=n$<sub><div class="shape circlevert"></div>,initial</sub> $+2x$</div>

---

{{< slide  background-image="/grapheintroavancement.png" background-size="contain" background-transition="concave">}}

---

Pour faire les comptes, on classe ces infos<br>dans un tableau : le <span class="imp">tableau d'avancement</span>.


<div class="fragment fade-up" style="position:relative;margin:auto;">
<div>
<img src="/tabavancementintro.png" style="background:none; box-shadow: none;">
</div>
</div>

{{%/section%}}

---

{{%section%}}

## Détermination<br>de la composition finale

---

L'avancement en fin de réaction<br>est appelé <span class="imp">avancement final $x_f$</span>.

---

L'<span class="imp">avancement maximal $x_{max}$</span> est lui l'avancement correspondant à la disparition totale d'un réactif.<br>
Ce réactif est le <span class="imp">réactif limitant</span>.

---

Comme la disparition totale d'un réactif<br>n'est pas systématique, on a :

<div class="fragment fade-up" style="position:relative; margin: auto; width: fit-content; border: solid 5px #FF968D; border-radius: 15px; padding: 20px 20px 30px 20px;">
<div>
$x_f ≤ x_{max}$
</div>
</div>

---

S'il y a effectivement disparition totale d'un réactif alors la <span class="imp">transformation</span> est dite <span class="imp">totale</span>. Et on a :

<div class="fragment fade-up" style="position:relative; margin: auto; width: fit-content; border: solid 5px #FF968D; border-radius: 15px; padding: 20px 20px 30px 20px;">
<div>
$x_f = x_{max}$
</div>
</div>

---

Si la transformation est <span class="imp">totale</span>, alors on peut déterminer $x_{max}$ en supposant tour à tour chacun<br>des réactifs comme limitant et en en déduisant l'avancement maximal $x_{max}$ correspondant. 

<p class="fragment fade-up">L'avancement maximal réel est alors<br><span class="imp">le plus petit des $x_{max}$ trouvés</span>.</p>

---

Exemple :


<div style="position:relative;margin:auto;">
<div>
<img src="/tabavancementintro.png" style="background:none; box-shadow: none;">
</div>
</div>


---

<ul>
<li>Si <div class="shape circle"></div> est limitant, alors on a :

<div class="fragment fade-up">$$9-2\, x_{max\color{#FF644E}\Large\bullet} = 0$$</div>

<div class="fragment fade-up">
$$
\begin{aligned}
\Rightarrow x_{max\color{#FF644E}\Large\bullet} &= \frac{\pu{9 mol}}{2}\\
&= \pu{4,5 mol}
\end{aligned}
$$
</div>

</li>

</ul>

---

<ul>

<li>Si <div class="shape square"></div> est limitant, alors on a :

<div class="fragment fade-up">$$12-3\, x_{max\color{#00A2FF}\small\blacksquare} = 0$$</div>

<div class="fragment fade-up">
$$
\begin{aligned}
\Rightarrow  x_{max\color{#00A2FF}\small\blacksquare} &= \frac{\pu{12 mol}}{3}\\
&= \pu{4 mol}
\end{aligned}
$$
</div>

</li>
</ul>


---

$
\begin{aligned}
 x_{max} &= \min(x_{max\color{#FF644E}\Large\bullet},x_{max\color{#00A2FF}\small\blacksquare})\\\\
&= \pu{4 mol}
\end{aligned}
$

<div class="fragment fade-up">Et par conséquent, c'est <div class="shape square"></div> le réactif limitant.</div>

---

L'état final peut maintenant être ajouté<br>au tableau d'avancement :

<div style="position:relative;margin:auto;">
<div>
<img src="/tabancementetatf.png" style="background:none; box-shadow: none;">
</div>
</div>


---

On retrouve bien ce qu'on pouvait déduire<br>de la représentation graphique.

---


{{< slide  background-image="/graphavancementfinal.png" background-size="contain" background-transition="concave">}}




{{%/section%}}

---

{{%section%}}


## Autre exemple

Transformation entre le diiode et les ions thiosulfate

---

Réaction modélisant la transformation étudiée :

<div style="font-size:0.9em;">
$$\ce{I2 (aq) + 2 S2O3^2- (aq) -> 2 I- (aq) + S4O6^2- (aq)}$$
</div>


Quantités initiales :

<ul style="font-size:0.9em;">
<li>$n_{\ce{I2}\text{,initial}} = n_1 =  \pu{4,0E-3 mol}  = \pu{4,0 mmol}$</li>
<li>$n_{\ce{S2O3^2-}\text{,initial}} = n_2 =  \pu{5,0E-3 mol}  = \pu{5,0 mmol}$</li>
<li>$n_{\ce{I-}\text{,initial}} = n_3 = \pu{0 mol}$</li>
<li>$n_{\ce{S4O6^2-}\text{,initial}} = n_4 = \pu{0 mol}$</li>
</ul>

---

<p style="color:#00AB8E">
Dresser un tableau d'avancement.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex1.png" style="background:none; box-shadow: none;">
</div>
</div>

---

On supposera la transformation totale.

<p class="fragment fade-up" style="color:#00AB8E">
Déterminer le réactif limitant et l'avancement final.
</p>

---

<ul>

<li>Si $\ce{I2}$ est limitant :<br>
<span class="fragment">$n_1- x_{max1} = 0$</span>

<div class="fragment fade-up">
$$
\Rightarrow  x_{max1} = n_1 = \pu{4,0 mmol}\\
$$
</div>

</li>

<li class="fragment fade-up">Si $\ce{S2O3^2-}$ est limitant :<br>
<span class="fragment">$n_2-2\, x_{max2} = 0$</span>

<div class="fragment fade-up">
$$
\begin{aligned}
\Rightarrow  x_{max2} &= \frac{n_2}{2}\\
&= \pu{2,5 mmol}
\end{aligned}
$$
</div>

</li>
</ul>

---

Comme $x_{max2}<x_{max1}$, $\ce{S2O3^2-}$ est le réactif limitant 

et $x_f = x_{max} = \pu{2,5 mmol}$.

---

<p style="color:#00AB8E">
Déterminer l'état final.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex1f.png" style="background:none; box-shadow: none;">
</div>
</div>

---


{{< slide  background-image="/avancement1.gif" background-size="contain" background-transition="concave">}}


---

### Deuxième situtation

<br>

Quantités initiales :

<ul>
<li>$n_{\ce{I2}\text{,initial}} = n_1= \pu{2,0 mmol}$</li>
<li>$n_{\ce{S2O3^2-}\text{,initial}} = n_2 =  \pu{5,0 mmol}$</li>
<li>$n_{\ce{I-}\text{,initial}} = n_3 = \pu{0 mol}$</li>
<li>$n_{\ce{S4O6^2-}\text{,initial}} = n_4 = \pu{0 mol}$</li>
</ul>

---

<p style="color:#00AB8E">
Dresser un tableau d'avancement.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex2.png" style="background:none; box-shadow: none;">
</div>
</div>

---

On supposera la transformation totale.

<p class="fragment fade-up" style="color:#00AB8E">
Déterminer le réactif limitant et l'avancement final.
</p>

---

<ul>

<li>Si $\ce{I2}$ est limitant :<br>
<span class="fragment">$n_1- x_{max1} = 0$</span>

<div class="fragment fade-up">
$$
\Rightarrow  x_{max1} = n_1 = \pu{2,0 mmol}\\
$$
</div>

</li>

<li class="fragment fade-up">Si $\ce{S2O3^2-}$ est limitant :<br>
<span class="fragment">$n_2-2\, x_{max2} = 0$</span>

<div class="fragment fade-up">
$$
\begin{aligned}
\Rightarrow  x_{max2} &= \frac{n_2}{2}\\
&= \pu{2,5 mmol}
\end{aligned}
$$
</div>

</li>
</ul>

---

Comme $x_{max1}<x_{max2}$, $\ce{I2}$ est le réactif limitant 

et $x_f = x_{max} = \pu{2,0 mmol}$.

---

<p style="color:#00AB8E">
Déterminer l'état final.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex2f.png" style="background:none; box-shadow: none;">
</div>
</div>

---


{{< slide  background-image="/avancement2.gif" background-size="contain" background-transition="concave">}}



---

### Troisième situtation

<br>

Quantités initiales :

<ul>
<li>$n_{\ce{I2}\text{,initial}} = n_1= \pu{2,5 mmol}$</li>
<li>$n_{\ce{S2O3^2-}\text{,initial}} = n_2 =  \pu{5,0 mmol}$</li>
<li>$n_{\ce{I-}\text{,initial}} = n_3 = \pu{0 mol}$</li>
<li>$n_{\ce{S4O6^2-}\text{,initial}} = n_4 = \pu{0 mol}$</li>
</ul>

---

<p style="color:#00AB8E">
Dresser un tableau d'avancement.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex3.png" style="background:none; box-shadow: none;">
</div>
</div>

---

On supposera la transformation totale.

<p class="fragment fade-up" style="color:#00AB8E">
Déterminer le réactif limitant et l'avancement final.
</p>

---

<ul>

<li>Si $\ce{I2}$ est limitant :<br>
<span class="fragment">$n_1- x_{max1} = 0$</span>

<div class="fragment fade-up">
$$
\Rightarrow  x_{max1} = n_1 = \pu{2,5 mmol}\\
$$
</div>

</li>

<li class="fragment fade-up">Si $\ce{S2O3^2-}$ est limitant :<br>
<span class="fragment">$n_2-2\, x_{max2} = 0$</span>

<div class="fragment fade-up">
$$
\begin{aligned}
\Rightarrow  x_{max2} &= \frac{n_2}{2}\\
&= \pu{2,5 mmol}
\end{aligned}
$$
</div>

</li>
</ul>

---

Comme $x_{max1}=x_{max2}$,<br>
les deux réactifs sont limitants en même temps.

Le mélange est stœchiométrique.

Et $x_f = x_{max} = \pu{2,5 mmol}$.

---

<p style="color:#00AB8E">
Déterminer l'état final.
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex3f.png" style="background:none; box-shadow: none;">
</div>
</div>

---


{{< slide  background-image="/avancement3.gif" background-size="contain" background-transition="concave">}}


---

### Quatrième situation

<br>

Quantités initiales :

<ul>
<li>$n_{\ce{I2}\text{,initial}} = n_1= \pu{2,5 mmol}$</li>
<li>$n_{\ce{S2O3^2-}\text{,initial}} = n_2 =  \pu{5,0 mmol}$</li>
<li>$n_{\ce{I-}\text{,initial}} = n_3 = \pu{0 mol}$</li>
<li>$n_{\ce{S4O6^2-}\text{,initial}} = n_4 = \pu{2,0 mol}$</li>
</ul>

---

<p style="color:#00AB8E">
Qu'est-ce qui change ?<br>
Quel est le nouvel état final ?
</p>

---

<div style="position:relative;margin:auto;">
<div>
<img src="/tabavex4f.png" style="background:none; box-shadow: none;">
</div>
</div>


---


{{< slide  background-image="/avancement4.gif" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

## Outil informatique

---

<style>
select, input {
  font-size: 1em;
  padding: 5px;
  margin: 0 5px;
  vertical-align: middle;
}
.equation {
  font-weight: bold;
}
.quantities {
  font-size: 0.8em;
  margin-top: 20px;
}
</style>

<div class="equation">
  <select id="coefA" onchange="updateEquation()">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select> A + 
  <select id="coefB" onchange="updateEquation()">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select> B $\rightarrow$
  <select id="coefC" onchange="updateEquation()">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select> C + 
  <select id="coefD" onchange="updateEquation()">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select> D
</div>

<div class="quantities">
  Quantités initiales (en mol) :
  <br>
  A&nbsp;: <input type="text" id="qtyA" style="width:10%;margin:10px;" value="0" onchange="updateQuantities()"> mol
  <br>
  B&nbsp;: <input type="text" id="qtyB" style="width:10%;margin:10px;" value="0" onchange="updateQuantities()"> mol
  <br>
  C&nbsp;: <input type="text" id="qtyC" style="width:10%;margin:10px;" value="0" onchange="updateQuantities()"> mol
  <br>
  D&nbsp;: <input type="text" id="qtyD" style="width:10%;margin:10px;" value="0" onchange="updateQuantities()"> mol
</div>

<script>
function updateEquation() {
  var coefA = document.getElementById('coefA').value;
  var coefB = document.getElementById('coefB').value;
  var coefC = document.getElementById('coefC').value;
  var coefD = document.getElementById('coefD').value;

  var equation = coefA + " A + " + coefB + " B -> " + coefC + " C + " + coefD + " D";
  console.log(equation); // Pour afficher l'équation dans la console
}

function updateQuantities() {
  var qtyA = document.getElementById('qtyA').value;
  var qtyB = document.getElementById('qtyB').value;
  var qtyC = document.getElementById('qtyC').value;
  var qtyD = document.getElementById('qtyD').value;

  console.log("Quantités initiales: A = " + qtyA + " mol, B = " + qtyB + " mol, C = " + qtyC + " mol, D = " + qtyD + " mol");
}

// Initial call to display the default equation and quantities in console
updateEquation();
updateQuantities();
</script>

---

<div style="position:relative;margin:auto;">
  <canvas id="reactionChart"></canvas>
</div>

<script>
var reactionChart;

function calculateQuantities() {
  var coefA = parseFloat(document.getElementById('coefA').value);
  var coefB = parseFloat(document.getElementById('coefB').value);
  var coefC = parseFloat(document.getElementById('coefC').value);
  var coefD = parseFloat(document.getElementById('coefD').value);
  var qtyA = parseFloat(document.getElementById('qtyA').value);
  var qtyB = parseFloat(document.getElementById('qtyB').value);
  var qtyC = parseFloat(document.getElementById('qtyC').value);
  var qtyD = parseFloat(document.getElementById('qtyD').value);

  var limitingReagent = Math.min(qtyA / coefA, qtyB / coefB);
  var steps = 5;  // Number of steps for the avancement
  var avancementStep = limitingReagent / steps;

  var quantities = {
    A: [],
    B: [],
    C: [],
    D: [],
    steps: []
  };

  for (var i = 0; i <= steps; i++) {
    var avancement = i * avancementStep;
    quantities.steps.push(avancement.toPrecision(3));
    quantities.A.push((qtyA - avancement * coefA).toPrecision(3));
    quantities.B.push((qtyB - avancement * coefB).toPrecision(3));
    quantities.C.push((qtyC + avancement * coefC).toPrecision(3));
    quantities.D.push((qtyD + avancement * coefD).toPrecision(3));
  }

  return quantities;
}

function renderChart() {
  var quantities = calculateQuantities();
  var ctx = document.getElementById('reactionChart').getContext('2d');

  if (reactionChart) {
    reactionChart.destroy();
  }

  reactionChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: quantities.steps,
      datasets: [{
        label: 'A',
        data: quantities.A,
        borderColor: '#FF644E',
        fill: false
      },
      {
        label: 'B',
        data: quantities.B,
        borderColor: '#00A2FF',
        fill: false
      },
      {
        label: 'C',
        data: quantities.C,
        borderColor: '#FFD932',
        fill: false
      },
      {
        label: 'D',
        data: quantities.D,
        borderColor: '#1DB100',
        fill: false
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité (mol)',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Avancement (mol)',
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      }
    }
  });
}

// Call the function to render the chart on page load
renderChart();

// Re-render the chart when quantities change
document.getElementById('qtyA').addEventListener('change', renderChart);
document.getElementById('qtyB').addEventListener('change', renderChart);
document.getElementById('qtyC').addEventListener('change', renderChart);
document.getElementById('qtyD').addEventListener('change', renderChart);
document.getElementById('coefA').addEventListener('change', renderChart);
document.getElementById('coefB').addEventListener('change', renderChart);
document.getElementById('coefC').addEventListener('change', renderChart);
document.getElementById('coefD').addEventListener('change', renderChart);
</script>

---


<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    font-size: 0.7em;
  }
  th, td {
    border: 1px solid white;
    padding: 10px;
    text-align: center;
    color: white;
  }
  th {
    background-color: #006C65;
  }
  .equation-cell {
    text-align: center;
  }
  .equation-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .equation-part {
    flex: 1;
    text-align: center;
  }
</style>

Tableau d'avancement de la réaction :<br><br>
<div id="avancementTable"></div>

<script>
  function renderTable() {
    var quantities = calculateQuantities();
    var coefA = parseFloat(document.getElementById('coefA').value);
    var coefB = parseFloat(document.getElementById('coefB').value);
    var coefC = parseFloat(document.getElementById('coefC').value);
    var coefD = parseFloat(document.getElementById('coefD').value);

    var equation = "<div class='equation-container'>" +
                   "<span class='equation-part'>&nbsp;&nbsp;&nbsp;&nbsp;" + coefA + " A" + "</span>" +
                   "<span class='equation-part'> &nbsp;&nbsp;&nbsp;&nbsp;+ </span>" +
                   "<span class='equation-part'>" + coefB + " B" + "</span>" +
                   "<span class='equation-part'> → &nbsp;&nbsp;</span>" +
                   "<span class='equation-part'>" + coefC + " C&nbsp;&nbsp;&nbsp;" + "</span>" +
                   "<span class='equation-part'> +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>" +
                   "<span class='equation-part'>" + coefD + " D&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</span>" +
                   "</div>";

    var table = "<table><thead><tr><th>Avancement (mol)</th><th colspan='4' class='equation-cell'>" + equation + "</th></tr></thead><tbody>";
    
    table += "<tr><td>0</td><td>" + quantities.A[0] + "</td><td>" + quantities.B[0] + "</td><td>" + quantities.C[0] + "</td><td>" + quantities.D[0] + "</td></tr>";
    table += "<tr><td>x</td><td>" + quantities.A[0] + " - " + coefA + "x</td><td>" + quantities.B[0] + " - " + coefB + "x</td><td>" + quantities.C[0] + " + " + coefC + "x</td><td>" + quantities.D[0] + " + " + coefD + "x</td></tr>";
    table += "<tr><td>x<sub>max</sub></td><td>" + quantities.A[quantities.A.length - 1] + "</td><td>" + quantities.B[quantities.B.length - 1] + "</td><td>" + quantities.C[quantities.C.length - 1] + "</td><td>" + quantities.D[quantities.D.length - 1] + "</td><tr>";

    table += "</tbody></table>";
    document.getElementById('avancementTable').innerHTML = table;
  }

  // Render the table on page load
  renderTable();

  // Re-render the table when quantities change
  document.getElementById('qtyA').addEventListener('change', renderTable);
  document.getElementById('qtyB').addEventListener('change', renderTable);
  document.getElementById('qtyC').addEventListener('change', renderTable);
  document.getElementById('qtyD').addEventListener('change', renderTable);
  document.getElementById('coefA').addEventListener('change', renderTable);
  document.getElementById('coefB').addEventListener('change', renderTable);
  document.getElementById('coefC').addEventListener('change', renderTable);
  document.getElementById('coefD').addEventListener('change', renderTable);
</script>


---

Petit programme Python réalisant la même chose :

---

Initialisation des variables

```python
import matplotlib.pyplot as plt

# coefficients stœchiométrique
# aA A + aB B -> aC C + aD D
aA = 2
aB = 3
aC = 1
aD = 2
# quantités initiales
nA = 0.02
nB = 0.04
nC = 0.01
nD = 0
x = 0           # Initialisation de l'avancement
dx = 0.001      # Incrément d'avancement
X = [x]         # Liste stockant les valeurs successives d'avancement
NA = [nA]       # Liste stockant les quantités des matières du réactif A
NB = [nB]       # Idem pour le réactif B
NC = [nC]       # Idem pour le produit C
ND = [nD]       # Idem pour le produit D
```

---
cœur du programme :

```python
while NA[-1] > 0 and NB[-1] > 0:
    x = x + dx
    X.append(x)
    NA.append(nA - aA * x)
    NB.append(nB - aB * x)
    NC.append(nC + aC * x)
    ND.append(nD + aD * x)
```
---

tracés

```python
plt.figure(figsize=(15,10),dpi=150)
plt.plot(X, NA, 'r-', lw=1, label='nA')
plt.plot(X, NB, 'g-', lw=1, label='nB')
plt.plot(X, NC, 'b-', lw=1, label='nC')
plt.plot(X, ND, 'y-', lw=1, label='nD')
plt.grid(True)
plt.xlabel('x (mol)')
plt.ylabel('n (mol)')
plt.legend()
plt.show()
```

---

{{< slide  background-image="/pythonavancement.png" background-size="contain" background-transition="concave">}}

---

Question subsidiaire :

Établir le tableau d'avancement<br>auquel correspond ce graphe.

{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/avancement/)
