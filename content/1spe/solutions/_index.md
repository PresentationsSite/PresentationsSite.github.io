+++
title = "solutions"
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


# Les grandeurs à connaître en chimie des solutions

---

{{%section%}}


## Masse volumique

---

À partir de la masse $m$ et du volume $V$ d'un échantillon de matière, on peut déterminer sa <sapn class="imp">masse volumique $\rho$</span>.

<p class="fragment fade-up">$\rho$ est la masse par unité de volume de l'échantillon.</p>

<p class="fragment fade-up">La masse volumique caractérise un corps pur. </p>

---

<span class="imp">Masse volumique</span> $\rho$ d'un échantillon de matière :

<br>

<div class="fragment fade-up" style="position: relative; margin: auto; width:fit-content;">
<div style="color:#FF968D; padding:0px 50px 10px 50px; font-size:1.5em; border: 5px solid #FF968D; border-radius : 20px;">
$$\rho = \frac{m}{V}$$
</div>
</div>

<br>

<p class="fragment fade-up">Unité : <b class="fragment" style="color:#FFF056">$\pu{kg*m-3}$</b></p>

---

Conversions :

<br>

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#0076BA; padding:30px 20px 40px 0px; width:fit-content; color:white; border-radius:15px;">
<ul style="color:white">
<li class="fragment fade-up"> 1 $\pu{kg*L-1}$ = <span class="fragment" style="color:white">1</span> $\pu{kg*dm-3}$ <span class="fragment" style="color:white">=  <span class="fragment" style="color:white">$10^3$</span> $\pu{kg*m-3}$ <span></li><br>
<li class="fragment fade-up"> 1 $\pu{kg*L-1}$ = <span class="fragment" style="color:white">1</span> $\pu{t*m-3}$ </li><br>
<li class="fragment fade-up"> 1 $\pu{kg*L-1}$ = <span class="fragment" style="color:white">1</span> $\pu{g*mL-1}$ <span class="fragment" style="color:white">=  <span class="fragment" style="color:white">1</span> $\pu{g*cm-3}$</span></li>
</ul>
</div>


---

La masse volumique d'un échantillon peut permettre de l'identifier en comparant aux valeurs<br>répertoriées dans les tables.

---

Quelle est la masse volumique de l'eau pure ?

<br>

1 litre d'eau a une masse de <span class="fragment"> 1 </span> kilogramme.

<br>

<div class = "fragment fade-up" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#017100; padding:10px 20px 20px 20px; width:fit-content; color:white; border-radius:15px;">

<span class="fragment" style="color:white">Donc $\rho\_{eau} = $ <span class="fragment" style="color:white"> 1</span> $\pu{kg\*L-1}$ </span><br>
<span class="fragment" style="color:white">soit $\rho\_{eau}=$<span class="fragment" style="color:white"> 1000</span> $\pu{kg\*m-3}$ </span><br>
<span class="fragment" style="color:white">ou encore $\rho\_{eau} = $<span class="fragment" style="color:white"> 1</span> $\pu{g\*cm-3}$ </span>

</div>

---

Et la masse volumique approximative de l'air ?

<br>

<div class="fragment fade-up" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#F27200; padding:10px 20px 20px 20px; width:fit-content; color:white; border-radius:15px;">

<span class="fragment" style="color:white"><span class="fragment" style="color:white"> $\approx$ 1</span>  $\pu{g\*L-1}$ </span><br>
<span class="fragment" style="color:white">soit <span class="fragment" style="color:white"> $\approx$ 1</span> $\pu{kg\*m-3}$ </span>

{{%/section%}}

---

{{%section%}}

## Densité

---

La densité $d$ d'une espèce chimique est le rapport de sa masse volumique $\rho$ à la masse volumique de l'eau $\rho_{\text{eau}}$.

<br>

<div class="fragment fade-up" style="position: relative; margin: auto; width:fit-content;">
<div style="color:#FF968D; padding:0px 50px 10px 50px; font-size:1.2em; border: 5px solid #FF968D; border-radius : 20px;">
$$d = \frac{\rho}{\rho_{\text{eau}}}$$
</div>
</div>

---

Unité ?

<p class="fragment fade-up">⚠️‼️⚠️‼️⚠️<br>
La densité n'a pas d'unité.</p>

<p class="fragment fade-up">Mais il faut faire attention faire correspondre<br>les unités de $\rho$ et de $\rho_{\text{eau}}$.</p>

{{%/section%}}

---

{{%section%}}

## Concentration en masse

---

La <span class="imp">concentration en masse $C_m$</span> d'un soluté (espèce chimique dissoute) dans une solution est<br>la masse du soluté par litre de solution.

<br>

<div class="fragment fade-up" style="position: relative; margin: auto; width:fit-content;">
<div style="color:#FF968D; padding:0px 50px 10px 50px; font-size:1.1em; border: 5px solid #FF968D; border-radius : 20px;">
$$C_m = \frac{m_{soluté}}{V_{solution}}$$
</div>
</div>

<br>

<p class="fragment fade-up">Unité : <b class="fragment" style="color:#FFF056">g/L</b></p>


{{%/section%}}

---

{{%section%}}

## Quantité de matière

---

Les <span class="imp">moles</span> sont l'unité de comptage adaptée pour compter des entités microscopiques comme les atomes ou molécules dans un échantillon macroscopique.

<p class="fragment fade-up">Dans une mole, il y a <span class="imp" "fragment">$N_A\approx \pu{6,02E23}$</span> éléments (602 mille milliards de milliards).</p>

<p class="fragment fade-up">$N_A$ est le nombre d'Avogadro</p>

---

![](/molexemple.png)

---

{{< slide  background-image="/molexemple2.png" background-size="contain" background-transition="concave">}}



{{%/section%}}

---

{{%section%}}

## Masse molaire

---

La <span class="imp">masse molaire atomique $M$</span> d'un élément<br>est la masse d'une mole de cet élément.

<br>

<p class="fragment fade-up">Unité de $M$ :<br><span class="fragment imp">gramme par mole<br>$\pu{g*mol-1}$</span></p>

---


![](/molexemple.png)

{{%note%}}
Que remarque-t-on sur la classification périodique ? Ce sont les valeurs indiquées !
{{%/note%}}

---

La masse molaire de $\text{X}$ s'obtient en multipliant la masse de l'entité $m_\text{X}$ par le nombre d'Avogadro : $M(X)=N_A\times m_\text{X}$

<p class="fragment fade-up">Mais en pratique, les masses molaires atomiques<br>seront toujours données (à part peut-être les plus courantes comme celles de l'hydrogène,<br>du carbone et de l'oxygène).</p>

---

La masse molaire atomique est généralement indiquée<br>dans la classification périodique des éléments. 

<ul>
<li class="imp">$M(\ce H)=$<span class="fragment imp"> $\pu{1,0 g*mol-1}$</span></li>
<li class="imp">$M(\ce C)=$<span class="fragment imp"> $\pu{12,0 g*mol-1}$</span></li>
<li class="imp">$M(\ce O)=$<span class="fragment imp"> $\pu{16,0 g*mol-1}$</span></li>
<li>$M(\ce Cl)=$<span class="fragment"> $\pu{35,5 g*mol-1}$</span></li>
<li>$M(\ce S)=$<span class="fragment"> $\pu{32,1 g*mol-1}$</span></li>
</ul>

---

Les masses molaires des ions monoatomiques<br>se déduisent des masses molaires atomiques :

<br>

<ul class="fragment fade-up">
<li>$M(\ce{H+})=$<span class="fragment"> $\pu{1,0 g*mol-1}$</span></li>
<br>
<li>$M(\ce{Cl-})=$<span class="fragment"> $\pu{35,5 g*mol-1}$</span></li>
</ul>

{{%note%}}
Rappel : la masse d'un électron est 2000 fois plus faible que celle d'un nucléon.
{{%/note%}}

---

De même, les masses molaires des molécules<br>et ions moléculaires se déduisent de celles<br>des atomes qui les constituent :

---

<ul>
<li>$M(\ce{H2O})=$<span class="fragment"> $M(\ce O) + 2\times M(\ce H) $<br>
</span><span class="fragment"> $\phantom{M(\ce{H2O})} = \pu{18 g*mol-1}$</span></li>
<br>
<li>$M(\ce{C3H8})=$<span class="fragment"> $ 3\times M(\ce C) + 8\times M(\ce H)$</span><br>
<span class="fragment"> $\phantom{M(\ce{C3H8})} = \pu{44 g*mol-1}$</span></li>
<br>
<li>$M(\ce{SO4^2-})=$<span class="fragment"> $ M(\ce S) + 4\times M(\ce O)$</span><br>
<span class="fragment"> $\phantom{M(\ce{SO4^2-})} = \pu{96,1 g*mol-1}$</span></li>
</ul>

{{%/section%}}

---

{{%section%}}

## Volume molaire

---

Le <span class="imp">volume molaire</span> d'un gaz<br>est le volume occupé par une mole de ce gaz.

<p class="fragment fade-up">Unité de $V_m$ :<br><span class="fragment imp">le litre par mole<br>$\pu{L*mol-1}$</span></p>

---

⚠️<br> 
Le volume molaire dépend<br>de la température
et de la pression.

<br>

<p class="fragment fade-up">
⚠️ ⚠️ ⚠️<br> 
Le volume molaire ne dépend pas<br>
de l'espèce chimique !!!</p>

---

Exemple :

<ul>
<li>à une température de 0°C et à pression atmosphérique ($P_{atm}=\pu{1,013 bar}$), ce qu'on appelle les conditions normales de température<br>et de pression (CNTP), $V_m = \pu{22,4 L*mol-1}$.</li>
<br>
<li class="fragment fade-up">à 20°C et pression atmosphérique, $V_m = \pu{24 L*mol-1}$</li>
</ul>

---

On peut obtenir le volume molaire<br>par la relation suivante :

<p class="fragment fade-up">
$$
V_m = \frac{M}{\rho}
$$
</p>

{{%/section%}}

---

{{%section%}}

## Concentration en quantité de matière

---

On peut définir la <span class="imp">concentration en quantité<br>de matière $C$</span> d'un soluté sur le modèle<br>de la concentration en masse $C_m$ :

<div class="fragment fade-up" style="position: relative; margin: auto; width:fit-content;">
<div style="color:#FF968D; padding:0px 50px 10px 50px; font-size:1.2em; border: 5px solid #FF968D; border-radius : 20px;">
$$C = \frac{n_{\text{soluté}}}{V_{\text{solution}}}$$
</div>
</div>


<p class="fragment fade-up">Unité de $C$ :<br><span class="fragment imp">mole par litre<br>$\pu{mol*L-1}$</span></p>


{{%note%}}
On dira seulement concentration la plupart du temps puisque l'unité permet de lever toute ambigüité.
{{%/note%}}

---

On note $C_X$ ou $[X]$ la concentration<br>en quantité de matière d'une espèce X.

<p class="fragment fade-up">On utilise généralement $C$ lorsqu'on parle de la concentration apportée en soluté et $[X]$ lorsqu'il s'agit de la concentration de l'espèce dissoute.</p>

---

Exemple : 
imaginons que l'on dissolve $n=\pu{1,2 mol}$ d'un sel de chlorure de cuivre $\ce{CuCl2}$ dans un volume $V=\pu{0,50 L}$ d'eau distillée.

<p class="fragment fade-up">Que vaut $C_{\ce{CuCl2}}$ ?</p>
<div style="position:relative;margin-left:auto;margin-right:auto;width:fit-content;">
<p class="fragment fade-up" style="text-align:left;">
$\displaystyle C_{\ce{CuCl2}} =\frac{n}{V}$<br>
$\displaystyle \phantom{C_{\ce{CuCl2}}}=\frac{1,2}{0,50}$<br>
$\displaystyle \phantom{C_{\ce{CuCl2}}}=\pu{2,4 mol*L-1}$
</p>
</div>

---

<p class="fragment fade-up">Supposons que le sel se dissolve complètement<br>
$\ce{CuCl2 (s) -> Cu^2+ (aq) + 2 Cl- (aq)}$</p>

<p class="fragment fade-up">Les concentrations en quantité de matière<br>des ions en solution s'écrirons alors :</p>

<p class="fragment fade-up">$\displaystyle [\ce{Cu^2+}] = \pu{2,4 mol*L-1}$</p>

<p class="fragment fade-up">et $\displaystyle [\ce{Cl-}] = \pu{4,8 mol*L-1}$</p>


{{%note%}}
On reviendra sur les dissolutions des solides ioniques dans un prochain chapitre
{{%/note%}}

---

Si on connait la masse de soluté dissoute $m$ dans<br>un volume de solution $V$, on peut déterminer<br>la concentration en quantité de matière en<br>calculant la quantité de matière dissoute :

<p class="fragment fade-up imp">$\displaystyle n=\frac{m}{M}$</p>

<p class="fragment fade-up">
Et on détermine ensuite<br>la concentration en quantité de matière :
</p>

<p class="fragment fade-up imp">$\displaystyle C=\frac{n}{V}$</p>

---

Mais on peut aussi passer de la <b style="color:#FFD932">concentration en masse</b> à la <span class="imp">concentration en quantité de matière</span> :

<br>

<div class="fragment fade-up" style="position: relative; margin: auto; width:fit-content;">
<div style="color:white; padding:0px 50px 10px 50px; font-size:1.2em; border:5px solid #FF968D; border-radius:20px;">
$${\color{#FF968D}C} = \frac{\color{#FFD932}C_m}{M}$$
</div>
</div>

---


<a href="https://phet.colorado.edu/sims/html/concentration/latest/concentration_fr.html">
<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#0076BA;padding:20px 10px 30px 10px;width:50%;color:white; font-size:1em; border-radius:15px;">
Simulation
</div>
</div>
</a>

<br>

<ul>
<li>Comment varie $C$ si on ouvre le robinet du bas ?</li>
<li>Comment augmenter $C$ ?</li>
<li>Comment diminuer $C$ ?</li>
<li>Déterminer la masse $m$ de soluté présent.</li>
</ul>

{{%note%}}
On peut afficher la masse en cliquant sur les réglages en bas à droite. Masse molaire du sulfate de cuivre : 159,6 g/mol
{{%/note%}}

{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/moles/)
