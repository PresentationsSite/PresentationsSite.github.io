+++
title = "Solutions"
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
color:#929292;
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
</style>



{{% section %}}

# Les solutions

---

{{< slide  background-image="/eaumin.png" background-size="contain" background-transition="concave">}}

Où sont les "minéraux" ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<p class="fragment">Ils sont dissous !</p>

---

Une solution est un <b style="color:#FF8596">mélange homogène</b> obtenu<br>par <b style="color:#FF8596">dissolution</b> d'un <b style="color:#FFE46D">soluté</b> dans un <b style="color:#7CADED">solvant</b>.

<p class="fragment">Le <b style="color:#7CADED">solvant</b> est l'espèce <b>ultra majoritaire</b><br>dans laquelle les <b style="color:#FFE46D">solutés</b> sont dissouts.</p>

<p class="fragment">Si le <b style="color:#7CADED">solvant</b> est l'eau, on parle de <b style="color:#7CADED">solution aqueuse</b>.</p>

---

Le <b style="color:#FFE46D">soluté</b> peut être sous la forme de molécules (molécules de saccharose $\ce{C12H22O11}$ dans une eau sucrée) ou d'ions ($\ce{Na+}$ et $\ce{Cl-}$ dans une eau salée).


{{% /section %}}

---


Même soluté (sulfate de cuivre), même solvant (eau).<br>
Qu'est-ce qui change entre ces solutions ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:70%;max-width:100%;">
<img src="/diffconc.png" style="box-shadow:none;background:none;border-radius:20px;">
</div>

<p class="fragment">Et qu'arrive-t-il à la dernière ?</p>




---

{{% section %}}

## La concentration

---

La <b>concentration en masse $C_m$</b> d'un soluté (espèce chimique dissoute) dans une solution est<br>la masse du soluté par litre de solution.

<br>

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#FF644E;padding:10px 10px 20px 10px;width:50%;color:white;border-radius:20px;">
$$C_m = \frac{m_{soluté}}{V_{solution}}$$
</div>
</div>

<br>

<p class="fragment">Unité : <span class="fragment" style="font-weight:bold;color:#FF644E;">le g/L</span></p>

---

Supposons que l'on connaisse la concentration en masse $C_m$ d'un soluté et le volume $V$ de la solution. 

<p class="fragment">Comment obtenir la masse $m$ du soluté<br>présent en solution ?</p>

<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div  style="border: solid 5px;padding:0px 50px 0px 50px">
$$m = C_m \times V$$
</div></div>

---

Et si on a la masse et la concentration,<br>comment obtenir le volume ?


<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div  style="border: solid 5px;padding:0px 50px 0px 50px">
$$V = \frac{m}{C_m}$$
</div></div>

---

Exemples : 

- on dissout 25 g de dichlore gazeux dans 500 mL d'eau. Que vaut la concentration en masse en dichlore ?


---

<div  style="color:#45B53C">
$m = \pu{25 g}$ , $V= \pu{500 mL}$ , $C_m$ ?<br> <div>

<div  class="fragment" style="color:#45B53C">
$$\begin{align}
C_m &= \frac{m}{V}\\
&=\frac{\pu{25 g}}{\pu{500 mL}}\\
&=\frac{\pu{25 g}}{\pu{0,500 L}}\\
&=\pu{50 g/L}
\end{align}$$
</div>


---

- Une piscine de 50 m<sup>3</sup> doit posséder une concentration en masse en ion hypochlorite $\ce{ClO-}$ de 2 mg/L. Quelle masse d'ions hypochlorite doit-on verser dans la piscine pour obtenir cette concentration (on fera l'hypothèse que l'ajout du soluté ne modifie pas le volume de la piscine) ?


---

<div   style="color:#45B53C">
$V = \pu{50 m3}$ , $C_m= \pu{2,0 mg/L}$ , on cherche $m$.<br></div>
<div  class="fragment" style="color:#45B53C">
$$\begin{align}
C_m = \frac{m}{V} \Rightarrow m &= C_m\times V\\
&=\pu{2,0 mg/L}\times\pu{50 m3}\\
&=\pu{2,0E-3 g/L}\times\pu{50E3 L}\\
&= \pu{100 g}\\
&=\pu{0,10 kg}\\
\end{align}$$
</div>


---

- On veut réaliser le plus grand volume possible d'une solution de sérum physiologique (solution aqueuse de chlorure de sodium d'une concentration en masse de 9,0&nbsp;g/L). On a à disposition 4,5&nbsp;kg de sel. Dans quel volume d'eau faut-il le dissoudre ?


---

<div   style="color:#45B53C">
$m = \pu{4,5 kg}$ , $C_m= \pu{9,0 g/L}$ , on cherche $V$.<br></div>
<div  class="fragment" style="color:#45B53C">
$$\begin{align}
C_m = \frac{m}{V} \Rightarrow V &= \frac{m}{C_m}\\
&=\frac{\pu{4,5 kg}}{\pu{9,0 g/L}}\\
&=\frac{\pu{4,5E3 g}}{\pu{9,0 g/L}}\\
&=\pu{500 L}\\
&=\pu{0,50 m3}
\end{align}$$
</div>


---

<i class="fas fa-exclamation-triangle" style="color:#E22146"></i> Piège <i class="fas fa-exclamation-triangle" style="color:#E22146"></i>

Une masse volumique est aussi une masse divisée<br>par un volume mais ce n'est pas la même masse !

<br>

<div class="fragment">
Pour calculer la masse volumique d'une solution, quelle masse doit-on utiliser ?
<p class="fragment" style="color:#FF8596">$m_{solution}$ <span class="fragment" style="color:#FF8596">et pas $m_{soluté}$ !</span></p>
</div>

---

Comment faire pour augmenter une concentration ?  (deux solutions)

<br>

<ul class="imp">
  <li class="fragment">on dissout plus de soluté</li><br>
  <li class="fragment">on évapore une partie du solvant</li>
</ul>

---

{{< slide  background-image="/maraissalant.png" background-size="contain" background-transition="concave">}}

---

Dans tous les bassins de la photo, la concentration<br>en masse du sel est la même.

À votre avis pourquoi ?


---

<b style="color:#FF8596">Concentration maximale d'un soluté</b> :<br>masse maximale d’une espèce chimique<br>qui peut être dissoute par litre de solution.

<p class="fragment">La solution est alors dite <b style="color:#FF8596">saturée</b>. Si on ajoute encore du soluté, il se dépose au fond sans se dissoudre.</p>

<p class="fragment">Pour le sel, la concentration maximale<br>vaut 359 g/L dans une eau à 20°C.</p>


----

- À 25 °C, la solubilité dans l’eau de l’aspirine $\ce{C9H8O4}$ est de $\pu{1,0 g}$ pour $\pu{300 mL}$.<br>
$\pu{400 mL}$ de solution d’aspirine sont préparés à 25 °C à partir d’$\pu{1,20 g}$ de cristaux d’aspirine pure.<br>
Est-il possible de dissoudre l'intégralité de l'aspirine&nbsp;?<br>

---

<p style="color:#45B53C">
On a $C_{max}= \frac{\pu{1,0 g}}{\pu{300 mL}} = \frac{\pu{1,0 g}}{\pu{0,300 L}} = \pu{3,3 g/L}$ ,
$V = \pu{400 mL}$ et $m = \pu{1,20 g}$.</p>

<div  class="fragment" style="color:#45B53C">
Si on dilue les 1,20 g dans les 400 mL,<br>on atteind une concentration $C$ valant :
$$C =  \frac{\pu{1,2 g}}{\pu{400 mL}} =  \frac{\pu{1,2 g}}{\pu{0,400 L}} = \pu{3,0 g/L}$$
$C≤ C_{max}$ $\Rightarrow$ toute l'aspirine peut être dissoute.
</div>

---

- Quelle masse d'aspirine maximum peut-on dissoudre dans ces 400 mL ?

---

<p style="color:#45B53C">
On a $C_{max}= \pu{3,3 g/L}$ et
$V = \pu{400 mL}$.<br>
On cherche $m_{max}$.</p>

<div  class="fragment" style="color:#45B53C">
$$
\begin{align}
C_{max} =  \frac{m_{max}}{V} \rightarrow m_{max} &= C_{max}\times V\\
&= \pu{3,3 g/L}\times \pu{400 mL}\\
&= \pu{3,3 g/L}\times \pu{0,400 L}\\
&= \pu{1,3 g}
\end{align}
$$
On peut dissoudre au maximum<br>1,3 g d'aspirine dans ce volume.
</div>

{{% /section %}}

---

{{% section %}}

## Protocole d'une dissolution

---

Matériel :

<ul class="imp">
  <li class="fragment" style="color:#FF8596">balance</li>
  <li class="fragment">sabot ou coupelle plastique</li>
  <li class="fragment">pissette d'eau distillée</li>
  <li class="fragment" style="color:#FF8596">fiole jaugée (+ bouchon)</li>
</ul>


---

{{< slide  background-image="/protdisso.png" background-size="contain" background-transition="concave">}}

---

Penser à <b class="imp">faire la tare</b> avant<br>d'ajouter le soluté sur la balance.

<p class="fragment">Lors du remplissage de la fiole, il faut que<br>le <b class="imp">bas du ménisque</b> affleure le <b class="imp">trait de jauge</b>.</p>

<img class="fragment" src="/menisque.jpeg" style="border-radius:10px;">

---

<i class="fas fa-exclamation-triangle" style="color:#E22146"></i> <i class="fas fa-exclamation-triangle" style="color:#E22146"></i> <i class="fas fa-exclamation-triangle" style="color:#E22146"></i><br> Si on dépasse un peu le trait de jauge<br>lors du remplissage de la fiole,<br>pourquoi ne peut-on pas retirer<br>le trop plein avec une pipette ? 

<p class="imp fragment">Du soluté est dissous dedans !</p>

---

Et pourquoi récupère-t-on l'eau de rinçage<br>de la coupelle ou du sabot dans la fiole ?

<p class="imp fragment">Du soluté est dissous dedans !</p>

{{% /section %}}

---

Comment faire pour <span class="imp">diminuer<br>la concentration d'une solution</span> ?

<p class="fragment">On <span = class="imp">ajoute du solvant</span> = on <span = class="imp">dilue</span>.</p>

---

{{% section %}}

## Dilution

---


Matériel :

<ul class="imp">
  <li class="fragment" style="color:#FF8596">pipette jaugée + propipette (poire à pipetter)</li>
  <li class="fragment" style="color:#FF8596">fiole jaugée + bouchon</li>
  <li class="fragment">pissette d'eau distillée</li>
</ul>


---

{{< slide  background-image="/protdilu.png" background-size="contain" background-transition="concave">}}

Protocole :

<br><br><br><br><br><br>


---

On pipette dans la solution mère le volume $V_{mère}$ qu'on verse dans la fiole de volume $V_{fille}$<br>avant de compléter d'eau.

---

Le <span class="imp">facteur de dilution $F$</span> est le nombre de fois<br>que la solution est diluée = le nombre par lequel<br>sa concentration est divisée ($F>1$).

<br>

<p class="fragment fade-up">Déterminez $F$ en fonction de $C_{mère}$ et $C_{fille}$,<br>puis en fonction de $V_{mère}$ et $V_{fille}$<br>et enfin en fonction de $V_{fiole}$ et $V_{pipette}$.</p>

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#3E74D1;padding: 0px 10px 10px 10px;width:80%;color:white;border-radius:10px;">
$$F = \frac{C_{mère}}{C_{fille}} = \frac{V_{fille}}{V_{mère}}= \frac{V_{fiole}}{V_{pipette}}$$
</div>
</div>

---

<p   style="color:#45B53C">
Démonstration :
</p>

<p  class="fragment fade-up" style="color:#45B53C">
La masse de soluté se conserve<br>entre la solution mère et la solution fille<br>(puisqu'on ne fait que rajouter de l'eau).
</p>


<p  class="fragment fade-up" style="color:#45B53C">
Par conséquent :
</p>

<p  class="fragment fade-up" style="color:#45B53C">
$$m_{fille}=m_{mère}$$
</p>

<p  class="fragment fade-up" style="color:#45B53C;margin-top:-1em;margin-bottom:-1em;">
$$
\Leftrightarrow
$$
</p>

<p  class="fragment fade-up" style="color:#45B53C">
$$
C_{fille}\times V_{fille}=C_{mère}\times V_{mère}
$$
</p>

---

<p   style="color:#45B53C">
D'où :
</p>

<p  class="fragment fade-up" style="color:#45B53C">
$$\frac{C_{mère}}{C_{fille}}=\frac{V_{fille}}{V_{mère}}=F$$
</p>


---

On veut obtenir 250 mL d'une solution diluée 5 fois<br>($F=5$), quel matériel doit-on choisir<br>et comment procède-t-on ?

---

<div   style="color:#45B53C">
$V_{fille} = \pu{250 mL}$ , $F = 5$<br></div>
<div  class="fragment" style="color:#45B53C">
$$\Rightarrow V_{mère}=\frac{V_{fille}}{F}=\frac{\pu{250 mL}}{5} =\pu{50 mL}$$
<div>
<p class="fragment">Il faut donc une <u>pipette jaugée de 50 mL</u><br>et une <u>fiole jaugée de 250 mL</u>.<p>

<ul style="color:#45B53C">
<li class="fragment fade-up">On prélève la solution mère avec la pipette,</li> 
<li class="fragment fade-up">on verse le contenu de la pipette dans la fiole vide,</li> 
<li class="fragment fade-up">on complète par de l'eau distillée jusqu'au trait de jauge en pensant à agiter à mitan.</li></ul>

{{% /section %}}

---

{{% section %}}

## Dosage par étalonnage

---

Utilisation d'une courbe d'étalonnage.

Voir le TP "[Masse de sucre dans une boisson](https://coursphychi.github.io/tpsucre.pdf)".

---

Utilisation d'une échelle de teinte.

Voir le TP "[Dosage du colorant d'une boisson<br>par échelle de teinte](https://coursphychi.github.io/tpechelle.pdf)".


{{% /section %}}

---

[Retour site](https://coursphychi.github.io/2nde/solutions/)