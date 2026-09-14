+++
title = "Mole"
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
color: #aaa;
}

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }
</style>





{{%section%}}

## La quantité de matière


---

{{< slide  background-image="/huitres.png" background-size="contain" background-transition="concave">}}

Vous connaissez la masse d'un sac d'huitre et la masse d'une huitre, comment savoir combien  de<br><span style="color:#FEAE00;font-weight:bold">douzaines</span> d'huitres contient le sac ?

<br><br><br><br><br>


---

Une <span style="color:#FEAE00;font-weight:bold">mole</span>, c'est comme une douzaine,<br>c'est une unité de comptage. 

<p class="fragment fade-up">Mais dans une mole, il y a beaucoup,<br>beaucoup plus de 12 éléments...</p>

<p class="fragment fade-up">Il y en a 602 mille milliards de milliards !</p>

---

Plus précisément, il y en a pile-poil :

<br>

<span style="font-size:70px;color:#FEAE00;">$\pu{602214076000000000000000}$ </span>

<br>

<p class="fragment fade-up">soit <span style="color:#FEAE00;">$\pu{6,02214076E23}$ </span></p>

---

Pourquoi ce nombre ?

<p class="fragment fade-up">L'idée est d'avoir une mole de nucléons<br>dans un gramme de matière.</p>

---

{{< slide  background-image="/molemicromacro.png" background-size="contain" background-transition="concave">}}

Les moles sont l'unité de comptage adaptée pour compter des entités microscopiques comme les atomes ou molécules dans un échantillon macroscopique.


<br><br><br><br><br>

---

![](/molexemple.png)

---

{{< slide  background-image="/molexemple2.png" background-size="contain" background-transition="concave">}}


{{%note%}}
- hélium
- eau
- aluminium
- cuivre
- sel
- saccharose
{{%/note%}}

{{%/section%}}

---
{{%section%}}

{{< slide  background-image="/eaudistillee.png" background-size="40%" background-transition="concave">}}

<span style="color:#aaa">1<sup>er</sup> exercice :</span> combien y a-t-il de moles de molécules d'eau dans un litre d'eau pure ?

<br><br><br><br><br><br><br><br><br>

{{%note%}}
Pourquoi ne pas injecter ?
Par osmolarité (équilibre des concentrations à l'intérieur et à l'extérieur des cellules), l'eau extérieure va entrer dans les cellules pour diluer l'intérieur jusqu'à ce que les cellules éclatent.
{{%/note%}}


---


<span style="color:#aaa">Données :</span>
<ul>
<li>la molécule d'eau $\ce{H2O}$ est faite d'un atome d'oxygène et deux atomes d'hydrogène.</li>
<li>Écriture conventionnelle<br>des deux noyaux : $\ce{^1_1 H}$ et $\ce{^{16}_8 O}$</li>
<li>masse d'un nucléon : $\approx \pu{1,7E-27 kg}$</li>
</ul>


---

<p style="color:#61D836">
On commence par déterminer la masse approximative de la molécule d'eau (en négligeant les électrons) : </p>

<p class="fragment fade-up" style="color:#61D836">
$$
\begin{align}
m_{\ce{H2O}} &\approx (2\times 1+16)\times \pu{1,7E-27kg} \\
&\approx \pu{3,1E-26kg}
\end{align}
$$
<p>

<p class="fragment fade-up" style="color:#61D836">
Puis le nombre $N$ de ces molécules dans 1 kg d'eau :<p>
<p class="fragment fade-up" style="color:#61D836">
$$
N \approx \frac{\pu{1,0 kg}}{\pu{3,1E-26kg}} \approx \pu{3,2E25}
$$
<p>

---

<p style="color:#61D836">
Enfin, on cherche le nombre $n$ de moles<br>que cela représente :<p>
<p class="fragment fade-up" style="color:#61D836">
$$
n \approx \frac{\pu{3,2E25}}{\pu{6,02E23}} \approx \pu{53 mol}
$$
<p>

<p class="fragment fade-up"><u>Rq</u> : moles s'abrège mol<p>

---

On appelle le nombre de mole d'une entité<br>sa <span style="font-weight:bold;color:#FEAE00;">quantité de matière $n$</span>.

{{%/section%}}

---

{{%section%}}

{{< slide  background-image="/salleclasse.png" background-size="contain" background-transition="concave">}}

<span style="color:#aaa">2<sup>e</sup> exercice :</span> déterminer la quantité de matière de dioxygène et de diazote dans l'air de la salle de cours.

<br><br><br><br><br><br><br><br><br>

---


<span style="color:#aaa">Données :</span>
<ul>
<li>masse volumique de l'air : <span class="fragment" style="color:#aaa">$\rho_{air} = \pu{1,2 kg/m3}$</span></li>
<li>masse d'une molécule de dioxygène : $m_{\ce{O2}} = \pu{5,3E-26 kg}$</li>
<li>masse d'une molécule de diazote : $m_{\ce{N2}} = \pu{4,7E-26 kg}$</li>
<li>composition massique de l'air : <span class="fragment" style="color:#aaa">76% $\ce{N2}$ et 23% $\ce{O2}$ </span></li>
</ul>

{{%note%}}
Sensé savoir maintenant que l'air pèse à peu près 1 kg par mètre cube.
Pourquoi la proportion massique de l'air n'est pas à 80%/20% ?
{{%/note%}}

---

<p style="color:#61D836">
Cherchons d'abord le volume<br>approximatif de la pièce :<br>
<span class="fragment" style="color:#61D836">
$\pu{10 m} \times \pu{5 m} \times \pu{3 m} = \pu{150 m3}$</span>
</p>

<p class="fragment fade-up" style="color:#61D836">
On en déduit la masse d'air dans la pièce :<br>
<span class="fragment" style="color:#61D836">$\pu{150 m3}\times \pu{1,2 kg/m3} = \pu{180 kg}$</span>
<p>

<p class="fragment fade-up" style="color:#61D836">
Et ainsi la masse de dioxygène :<br><span class="fragment" style="color:#61D836">$23\%\times \pu{180 kg} = \pu{41 kg}$</span><br>
Et  celle de diazote :<br><span class="fragment" style="color:#61D836">$76\%\times \pu{180 kg}  = \pu{137 kg}$</span>
<p>

---

<p style="color:#61D836">
On est prêt pour le nombre<br>de molécules de dioxygène :<br>
<span class="fragment" style="color:#61D836">
$$\frac{\pu{41 kg}}{\pu{5,3E-26 kg}}\approx \pu{7,7E26}$$ </span>
</p>

<p class="fragment fade-up" style="color:#61D836">
Et pour le nombre de molécules de diazote :<br>
<span class="fragment" style="color:#61D836">
$$\frac{\pu{137 kg}}{\pu{4,7E-26 kg}}\approx \pu{2,9E27}$$ </span>
</p>

---

<p style="color:#61D836">
Déterminons enfin la quantité de matière<br>en dioxygène dans la pièce :<br>
<span class="fragment" style="color:#61D836">
$$\frac{ \pu{7,7E26}}{\pu{6,02E23}}\approx \pu{1,3E3 mol}$$ </span>
</p>

<p class="fragment fade-up" style="color:#61D836">
Et la quantité de matière en diazote dans la pièce :<br>
<span class="fragment" style="color:#61D836">
$$\frac{ \pu{2,9E27}}{ \pu{6,02E23}}\approx \pu{4,8E3 mol}$$ </span>
</p>

{{%/section%}}


---

{{%section%}}

{{< slide  background-image="/50ct.png" background-size="contain" background-transition="concave">}}

<span style="color:#aaa">3<sup>e</sup> exercice :</span> déterminer les quantités de matière<br>des différents métaux présents dans une pièce<br>de 50 centimes d’euros en or nordique.

<br><br><br><br><br><br><br><br><br><br><br>

----


<span style="color:#aaa">Données :</span>
<ul>
<li>composition massique de la pièce :<br>89 % de cuivre, 5 % d’aluminium,<br>5 % de zinc et 1 % d’étain</li>
<li>masse de la pièce : $\pu{7,8 g}$ </li>
<li>masse des différentes entités : $m_{\ce{Cu}} = \pu{1,1E-22 g}$, $m_{\ce{Al}} = \pu{4,5E-23 g}$, $m_{\ce{Zn}} = \pu{1,1E-22 g}$, $m_{\ce{Sn}} = \pu{2,0E-22 g}$</li>
</ul>


{{%note%}}
Même arrondi pour Zinc et Cuivre car proches dans la classification.
{{%/note%}}

---

<p style="color:#61D836">
Cherchons d'abord les masses<br>approximatives de chaque métal dans la pièce :</p>
<ul style="color:#61D836">
<li class="fragment fade-up">$\ce{Cu}$ : <span class="fragment" style="color:#61D836">$89\%\times \pu{7,8 g} = \pu{6,9 g}$</span></li>
<li class="fragment fade-up">$\ce{Al}$ : <span class="fragment" style="color:#61D836">$5\%\times \pu{7,8 g} = \pu{0,39 g}$</span></li>
<li class="fragment fade-up">$\ce{Zn}$ : <span class="fragment" style="color:#61D836">$5\%\times \pu{7,8 g} = \pu{0,39 g}$</span></li>
<li class="fragment fade-up">$\ce{Sn}$ : <span class="fragment" style="color:#61D836">$1\%\times \pu{7,8 g} = \pu{0,078 g}$</span></li>
</ul>


---

<p style="color:#61D836">
On en déduit le nombre d'entités de chaque métal :</p>
<ul style="color:#61D836">
<li class="fragment fade-up">$\ce{Cu}$ : <span class="fragment" style="color:#61D836">$\frac{\pu{6,9 g}}{\pu{1,1E-22 g}}\approx \pu{6,3E22}$</span></li>
<li class="fragment fade-up">$\ce{Al}$ : <span class="fragment" style="color:#61D836">$\frac{\pu{0,39 g}}{\pu{4,5E-23 g}}\approx \pu{8,7E21}$</span></li>
<li class="fragment fade-up">$\ce{Zn}$ : <span class="fragment" style="color:#61D836">$\frac{\pu{0,39 g}}{\pu{1,1E-22 g}}\approx \pu{3,5E21}$</span></li>
<li class="fragment fade-up">$\ce{Sn}$ : <span class="fragment" style="color:#61D836">$\frac{\pu{0,078 g}}{\pu{2,0E-22 g}}\approx \pu{3,9E20}$</span></li>
</ul>

<p class="fragment fade-up" style="color:#61D836">On remarque que bien qu'ils interviennent pour la même masse, il n'y a pas autant d'atomes de zinc dans la pièce que d'atomes d'aluminium !</p>

---


<p style="color:#61D836">
Déterminons enfin les quantités de matière<br>des différents métaux :</p>
<ul style="color:#61D836">
<li class="fragment fade-up">$n_\ce{Cu}=$ <span class="fragment" style="color:#61D836">$\frac{\pu{6,3E22}}{\pu{6,02E23}}\approx \pu{0,10 mol}$</span></li>
<li class="fragment fade-up">$n_\ce{Al}=$ <span class="fragment" style="color:#61D836">$\frac{\pu{8,7E21}}{\pu{6,02E23}}\approx \pu{14E-3 mol} = \pu{14 mmol}$ </span></li>
<li class="fragment fade-up">$n_\ce{Zn} =$ <span class="fragment" style="color:#61D836">$\frac{\pu{3,5E21}}{\pu{6,02E23}}\approx  \pu{5,8 mmol}$</span></li>
<li class="fragment fade-up">$n_\ce{Sn} =$ <span class="fragment" style="color:#61D836">$\frac{\pu{3,9E20}}{\pu{6,02E23}}\approx  \pu{0,65 mmol}$ </span></li>
</ul>

{{%/section%}}


---

<u>Rq</u> :

Le nombre d'éléments dans une mole<br>s'appelle le <span class="imp">nombre d'Avogadro</span> en hommage<br>à Amedeo Avogadro :

<div style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Amedeo_Avogadro2.jpg" style="box-shadow:none;background:none;border-radius:15px;">
</div>


$N_A=\pu{6,02E23 mol^-1}$


---

{{%section%}}

## Divulgâchage

---

Vous verrez pour certain l'année prochaine que<br>la détermination du nombre d'entités : 

$$N=\frac{m}{m_{\text{entité}}}$$

<div class="fragment fade-up">suivie de la détermination de la quantité de matière :<br>
$$n=\frac{N}{N_A}$$
</div>

---

peut se résumer en un seul calcul en utilisant la masse molaire $M$ de l'entité (en $\pu{g*mol^-1}$), c'est-à-dire<br>la masse d'une mole de l'entité&nbsp;:

<div class="fragment fade-up" style="border: 5px solid white; border-radius:15px; width:fit-content; margin:auto; padding:0px 20px 0px 20px ;">
$$n=\frac{m}{M}$$
</div>

<br>

<div class="fragment fade-up">
En effet, par définition :

$$M=N_A\times m_\text{entité}$$
</div>

---



À partir de l'année prochaine,<br>les masses molaires seront toujours données.

<br>

<div class="fragment fade-up">
Exemple : 



Quelle est la quantité de matière d'eau présente<br>dans un verre d'eau de $\pu{200 mL}$ (soit $\pu{200 g}$) ?

Donnée : $M(\ce{H2O})=\pu{18 g*mol-1}$
</div>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/mole/)