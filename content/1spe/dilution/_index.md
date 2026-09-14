+++
title = "Dilution"
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



{{%section%}}

# Dilution

---

Une dilution a pour but de<br><span class="fragment imp">réduire la concentration</span></span><br>d'une solution.

---

Principe :

➚ la quantité<br>de <span class="fragment imp">solvant</span>.


{{%/section%}}


---

{{%section%}}

## Matériel et protocole

---


Matériel :

<ul>
  <li class="imp fragment" style="color:#FF8596">pipette jaugée + propipette (poire à pipetter)</li>
  <li class="imp fragment" style="color:#FF8596">fiole jaugée + bouchon</li>
  <li class="fragment">pissette d'eau distillée</li>
</ul>


---

{{< slide  background-image="/protdilu.png" background-size="contain" background-transition="concave">}}

Protocole :

<br><br><br><br><br><br>


---

On pipette dans la solution mère le volume $V_{mère}$<br>qu'on verse dans la fiole de volume $V_{fille}$<br>avant de compléter d'eau.

{{%/section%}}

---

{{%section%}}

## Théorie

---

Lors d'une dilution,<br><span class="fragment imp">la quantité de matière de soluté se conserve</span>

---

On a donc (en appelant $n$<br>la quantité de matière de soluté) :

<div style="position: relative; margin: auto; width:fit-content;">
<div style="padding:0px 50px 10px 50px; font-size:1.2em; border: 5px solid #FF968D; border-radius : 20px; border-color:#FF968D;">

$$n_\text{fille}=n_\text{mère}$$

</div>
</div>

---

Et donc, en utilisant concentration et volume :

<div class="fragment" style="position: relative; margin: auto; width:fit-content;">
<div style="padding:0px 50px 10px 50px; font-size:1.2em; border: 5px solid #FF968D; border-radius : 20px; border-color:#FF968D;">

$$C_\text{fille}\times V_\text{fille}=C_\text{mère}\times V_\text{mère}$$

</div>
</div>

---

Le <span class="imp">facteur de dilution $F$</span> est le nombre de fois<br>que la solution est diluée = le nombre par lequel<br>sa concentration est divisée ($F>1$).

<br>

<p class="fragment">Déterminez $F$ en fonction de $C_{mère}$ et $C_{fille}$,<br>puis en fonction de $V_{mère}$ et $V_{fille}$<br>et enfin en fonction de $V_{fiole}$ et $V_{pipette}$.</p>

---

<div style="position: relative; margin: auto; width:fit-content;">
<div style="padding:0px 50px 10px 50px; font-size:1.2em; border: 5px solid #FF968D; border-radius : 20px; border-color:#FF968D;">
$$F = \frac{C_{mère}}{C_{fille}} = \frac{V_{fille}}{V_{mère}}= \frac{V_{fiole}}{V_{pipette}}$$
</div>
</div>

---

On veut obtenir 250 mL d'une solution diluée 5 fois<br>($F=5$), quel matériel doit-on choisir<br>et comment procède-t-on ?

---

<div   style="color:#16E7CF">
$V_{fille} = \pu{250 mL}$ , $F = 5$<br></div>
<div  class="fragment" style="color:#16E7CF">
$$\Rightarrow V_{mère}=\frac{V_{fille}}{F}=\frac{\pu{250 mL}}{5} =\pu{50 mL}$$
<div>
<p class="fragment">Il faut donc une <u>pipette jaugée de 50 mL</u><br>et une <u>fiole jaugée de 250 mL</u>.<p>

<ul class="fragment" style="color:#16E7CF">
<li>On prélève la solution mère avec la pipette,</li> 
<li>on verse le contenu de la pipette dans la fiole vide,</li> 
<li>on complète par de l'eau distillée jusqu'au trait de jauge en pensant à agiter à mitan.</li></ul>


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/moles/)
