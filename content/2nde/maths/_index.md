+++
title = "Maths"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
custom_css = "css/noir-moderne.css"
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

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }
</style>


## Maths et expressions numériques<br>en sciences physiques

---

{{% section %}}

## Multiples et sous-multiples

Pour remplacer les puissances de 10

---

### les multiples :

---

<table style="color:#00A2FF">
<thead>
<tr>
<th>multiple</th><th>abréviation</th><th>puissance de 10</th>
</tr>
</thead>
<tbody>
<tr>
<td>kilo</td>
<td>k</td>
<td ><span class="fragment">$10^3$</span></td>
</tr>
<tr>
<td ><span class="fragment">méga</span></td>
<td ><span class="fragment">M</span></td>
<td>$10^6$</td>
</tr>
<tr>
<td ><span class="fragment">giga</span></td>
<td ><span class="fragment">G</span></td>
<td>$10^9$</td>
</tr>
<tr>
<td><span class="fragment">téra</span></td>
<td ><span class="fragment">T</span></td>
<td>$10^{12}$</td>
</tr>
<tr>
<td><span class="fragment">péta</span></td>
<td ><span class="fragment">P</span></td>
<td>$10^{15}$</td>
</tr>
</tbody>
</table>


---

### les sous-multiples :


---

<table style="color:#00A2FF">
<thead>
<tr>
<th>sous-multiple</th><th>abréviation</th><th>puissance de 10</th>
</tr>
</thead>
<tbody>
<tr>
<td>milli</td>
<td>m</td>
<td ><span class="fragment">$10^{-3}$</span></td>
</tr>
<tr>
<td ><span class="fragment">micro</span></td>
<td ><span class="fragment">μ</span></td>
<td>$10^{-6}$</td>
</tr>
<tr>
<td ><span class="fragment">nano</span></td>
<td ><span class="fragment">n</span></td>
<td>$10^{-9}$</td>
</tr>
<tr>
<td><span class="fragment">pico</span></td>
<td ><span class="fragment">p</span></td>
<td>$10^{-12}$</td>
</tr>
<tr>
<td><span class="fragment">femto</span></td>
<td ><span class="fragment">f</span></td>
<td>$10^{-15}$</td>
</tr>
</tbody>
</table>

{{% /section %}}

---

{{% section %}}

## Conversions :

---

Convertir 34 pm en km

<div class="fragment fade-up">

$$
\begin{aligned}
\pu{34 pm} &= \pu{34E-12 m}\\\\
&= \pu{34E-12} \times \pu{10^{-3} km}\\\\
&= \pu{34E-15 km}
\end{aligned}
$$

</div>

---

Convertir 34 μg en fg (femtogramme)

<div class="fragment fade-up">

$$
\begin{aligned}
\pu{34 μg} &= \pu{34E-6 g}\\\\
&= \pu{34E-6} \times \pu{10^{15} fg}\\\\
&= \pu{34E9 fg}
\end{aligned}
$$

</div>

---

Combien y a-t-il de $\text{mm}^3$ dans $\pu{1 m^3}$ ?

<ol class="vote">
<li class="fragment">$10^3$</li>
<li class="fragment">$10^6$</li>
<li class="fragment juste">$10^9$</li>
<li class="fragment">$10^{12}$</li>
</ol>
<div class="fragment revele"></div>

<p class="fragment fade-up">$\pu{1 m^3} = \left(10^3\ \text{mm}\right)^3 = 10^9\ \text{mm}^3$</p>

---

Convertir 34 m$^3$ en nm$^3$

<div class="fragment fade-up">

$$
\begin{aligned}
\pu{34 m^3} &= 34 \times \left(10^9 \\,\pu{nm}\right)^3\\\\
&= 34 \times \pu{10^{9\times 3} nm^3}\\\\
&= 34\times\pu{10^{27} nm^3}
\end{aligned}
$$

</div>

---


Convertir 34 nm$^2$ en μm$^2$

<div class="fragment fade-up">

$$
\begin{aligned}
\pu{34 nm^2} &= 34 \times \left(10^{-9} \\,\pu{m}\right)^2\\\\
&= 34 \times \pu{10^{(-9)\times 2} m^2}\\\\
&= 34\times\pu{10^{-18} m^2}\\\\
&= 34\times\pu{10^{-18}\times\left(\pu{10^6 μm}\right)^2}\\\\
&= 34\times 10^{-18} \times \pu{10^{12} μm2}\\\\
&= \pu{34E-6  μm2}
\end{aligned}
$$

</div>

{{% /section %}}

---

{{% section %}}

## Notation scientifique

---

Les physiciens manipulent des nombres<br>très grands ou très petits :

<ul style="font-size:0.75em">
<li class="fragment fade-up">masse de la Terre :<br>$5\,970\,000\,000\,000\,000\,000\,000\,000\ \text{kg}$</li>
<li class="fragment fade-up">masse d'un électron :<br>$0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,91\ \text{kg}$</li>
</ul>

<p class="fragment fade-up">Illisible ! D'où la <span class="imp">notation scientifique</span> :<br>$5{,}97\times10^{24}\ \text{kg}$ et $9{,}1\times10^{-31}\ \text{kg}$.</p>

---

Un nombre est écrit en <span class="imp">notation scientifique</span><br>lorsqu'il est sous la forme :

<p class="fragment fade-up" style="font-size:1.6em">$a\times10^{n}$</p>

<ul>
<li class="fragment fade-up">$a$ est un nombre décimal avec <span class="imp">un seul chiffre<br>non nul avant la virgule</span> : $1\leqslant a \lt 10$ ;</li>
<li class="fragment fade-up">$n$ est un <span class="imp">entier relatif</span> : $n\in\mathbb{Z}$.</li>
</ul>

<p class="fragment fade-up" style="font-size:0.7em"><u>Rq</u> : pour un nombre négatif, le signe se place devant :<br>charge de l'électron $=-1{,}6\times10^{-19}\ \text{C}$.</p>

---

<u>Méthode</u> : on place la virgule juste après<br>le <span class="imp">premier chiffre non nul</span>, puis on compte<br>de combien de rangs on l'a déplacée :

<ul>
<li class="fragment fade-up">vers la gauche : <span class="imp">$n$ positif</span> (grand nombre)</li>
<li class="fragment fade-up">vers la droite : <b style="color:#FFF056">$n$ négatif</b> (nombre plus petit que 1)</li>
</ul>

<p class="fragment fade-up">Exemples :</p>

<ul>
<li class="fragment fade-up">$340$ $\longrightarrow$ <span class="fragment">$3{,}4\times10^{2}$</span></li>
<li class="fragment fade-up">$6\,370\,000$ $\longrightarrow$ <span class="fragment">$6{,}37\times10^{6}$</span></li>
<li class="fragment fade-up">$0{,}052$ $\longrightarrow$ <span class="fragment">$5{,}2\times10^{-2}$</span></li>
<li class="fragment fade-up">$0{,}000\,8$ $\longrightarrow$ <span class="fragment">$8\times10^{-4}$</span></li>
</ul>

---

Et si le nombre comporte déjà<br>une puissance de 10 ?

<ul>
<li class="fragment fade-up">$632\times10^{5}$ $\longrightarrow$ <span class="fragment">$6{,}32\times10^{2}\times10^{5}$</span> <span class="fragment">$=6{,}32\times10^{7}$</span></li>
<li class="fragment fade-up">$0{,}25\times10^{-3}$ $\longrightarrow$ <span class="fragment">$2{,}5\times10^{-1}\times10^{-3}$</span> <span class="fragment">$=2{,}5\times10^{-4}$</span></li>
</ul>

<p class="fragment fade-up">Si on multiplie $a$ par 10, on retire 1 à $n$<br>(et inversement) : le nombre ne change pas !</p>

---

Ces quatre écritures valent toutes 25 000.<br>Laquelle est en notation scientifique ?

<ol class="vote">
<li class="fragment">$250\times10^{2}$</li>
<li class="fragment">$25\times10^{3}$</li>
<li class="fragment juste">$2{,}5\times10^{4}$</li>
<li class="fragment">$0{,}25\times10^{5}$</li>
</ol>
<div class="fragment revele"></div>

---

Comment s'écrit $0{,}0045$<br>en notation scientifique ?

<ol class="vote">
<li class="fragment">$4{,}5\times10^{3}$</li>
<li class="fragment juste">$4{,}5\times10^{-3}$</li>
<li class="fragment">$45\times10^{-4}$</li>
<li class="fragment">$4{,}5\times10^{-2}$</li>
</ol>
<div class="fragment revele"></div>

---

Écrire en notation scientifique :

<ul style="font-size:0.85em">
<li>rayon de la Terre : $6\,370\ \text{km}$ <span class="fragment corr">$\longrightarrow 6{,}37\times10^{3}\ \text{km}$</span></li>
<li>épaisseur d'un cheveu : $0{,}000\,07\ \text{m}$ <span class="fragment corr">$\longrightarrow 7\times10^{-5}\ \text{m}$</span></li>
<li>vitesse de la lumière : $300\,000\ \text{km/s}$ <span class="fragment corr">$\longrightarrow 3\times10^{5}\ \text{km/s}$</span></li>
<li>$48{,}5\times10^{3}\ \text{J}$ <span class="fragment corr">$\longrightarrow 4{,}85\times10^{4}\ \text{J}$</span></li>
<li>$0{,}032\times10^{-5}\ \text{m}$ <span class="fragment corr">$\longrightarrow 3{,}2\times10^{-7}\ \text{m}$</span></li>
</ul>

---

Rappels des règles avec les puissances de 10 :

- $10^a\times10^b=$ <span class="fragment"> $10^{a\color{#FF644E}+\color{white}b}$ </span>
- $10^a/10^b=\frac{10^a}{10^b}=$ <span class="fragment"> $10^{a\color{#FF644E}-\color{white}b}$ </span>
- $\left(10^a\right)^b=$ <span class="fragment"> $10^{a\color{#FF644E}\times\color{white}b}$ </span>

---

Calculer et donner le résultat<br>en notation scientifique :

<ul style="font-size:0.85em">
<li>$(3\times10^{4})\times(2\times10^{-7})$ <span class="fragment corr">$=6\times10^{-3}$</span></li>
<li>$\dfrac{8\times10^{5}}{4\times10^{-2}}$ <span class="fragment corr">$=2\times10^{7}$</span></li>
<li>$(2\times10^{-3})^{2}$ <span class="fragment corr">$=4\times10^{-6}$</span></li>
<li>$(2{,}5\times10^{3})\times(6\times10^{2})$ <span class="fragment corr">$=15\times10^{5}$</span> <span class="fragment corr">$=1{,}5\times10^{6}$</span></li>
</ul>

<p class="fragment fade-up" style="font-size:0.7em">Attention : $15$ n'est pas compris entre 1 et 10,<br>il faut encore transformer l'écriture !</p>

---

Pour revoir tout ça à la maison :

---

{{< youtube-slide id="bBT1hOYQPnY" ratio="16x9" >}}



---


{{< youtube-slide id="PtftD6sU-Sc" ratio="16x9" >}}

{{% /section %}}

---

{{% section %}}

## Ordre de grandeur<br>et puissances de 10

---

<span class="imp">Ordre de grandeur ?</span>

<p class="fragment fade-up">L'ordre de grandeur d'un nombre $a\times 10^b$<br>écrit en notation scientifique ($1≤a<10$) vaut :

<ul>
<li class="fragment fade-up"><span class="imp">$10^b$</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;si <span class="imp">$a<5$</span></li>
<li class="fragment fade-up"><b style="color:#FFF056">$10^{b+1}$</b>&nbsp;&nbsp;si <b style="color:#FFF056">$a≥5$</b></li>
</ul>

---

- $\pu{3E5}$ $\\,\\,$ ${\longrightarrow}$  <span class="fragment">$10^5$</span>
- $\pu{5E5}$ $\\,\\,$ ${\longrightarrow}$ <span class="fragment">$10^6$</span>
- $\pu{8E-5}$ ${\longrightarrow}$ <span class="fragment">$10^{-4}$</span>
- $\pu{2E-5}$ ${\longrightarrow}$ <span class="fragment">$10^{-5}$</span>
- $\pu{3,5}$ $\qquad \\;$ ${\longrightarrow}$ <span class="fragment">$10^0$ ou $1$</span>

---

D'autres ordres de grandeur à trouver :


- $\pu{632E5}$  ${\longrightarrow}$  <span class="fragment">$10^8$</span>
- $\pu{632E-4}$  ${\longrightarrow}$ <span class="fragment">$10^{-1}$</span>
- $\left(\pu{2E1}\right)^3$ ${\longrightarrow}$ <span class="fragment">$10^4$</span>
- $\pu{5,0E-4}/1000$ ${\longrightarrow}$ <span class="fragment">$10^{-6}$</span>
- $\frac{9800}{\pu{1060000}}$  ${\longrightarrow}$ <span class="fragment">$10^{-2}$</span>

{{% /section %}}

---

{{% section %}}

## Chiffres significatifs

---

Une longueur mesurée avec une règle<br>graduée en millimètres s'écrit $12{,}3\ \text{cm}$,<br>et non $12{,}3000\ \text{cm}$.

<p class="fragment fade-up">Les chiffres d'une valeur renseignent sur sa <span class="imp">précision</span> :<br>on n'écrit que ceux qui ont un sens,<br>les <span class="imp">chiffres significatifs</span>.</p>

---

Pour compter les chiffres significatifs :

<ul>
<li class="fragment fade-up">tous les chiffres <span class="imp">non nuls</span> comptent ;</li>
<li class="fragment fade-up">les zéros placés <span class="imp">entre</span> ou <span class="imp">après</span><br>des chiffres non nuls comptent ;</li>
<li class="fragment fade-up">les zéros placés <b style="color:#FF644E">au début</b> ne comptent pas<br>(ils servent seulement à placer la virgule).</li>
</ul>

---

<ul>
<li>$4{,}52$ <span class="fragment corr">$\longrightarrow$ 3 chiffres significatifs</span></li>
<li>$1{,}050$ <span class="fragment corr">$\longrightarrow$ 4 chiffres significatifs</span></li>
<li>$0{,}0045$ <span class="fragment corr">$\longrightarrow$ 2 chiffres significatifs</span></li>
<li>$3{,}0\times10^{8}$ <span class="fragment corr">$\longrightarrow$ 2 chiffres significatifs</span></li>
</ul>

<p class="fragment fade-up"><u>Rq</u> : en notation scientifique $a\times10^{n}$,<br>il suffit de compter les chiffres de $a$.</p>

---

Combien de chiffres significatifs<br>compte $1\\,500\ \text{m}$ ?

<p class="fragment fade-up">Impossible à dire : 2, 3 ou 4 !</p>

<p class="fragment fade-up">La notation scientifique lève l'ambiguïté :</p>

<ul>
<li class="fragment fade-up">$1{,}5\times10^{3}\ \text{m}$ : 2 chiffres significatifs</li>
<li class="fragment fade-up">$1{,}50\times10^{3}\ \text{m}$ : 3 chiffres significatifs</li>
<li class="fragment fade-up">$1{,}500\times10^{3}\ \text{m}$ : 4 chiffres significatifs</li>
</ul>

---

Combien de chiffres significatifs<br>compte $0{,}0320$ ?

<ol class="vote">
<li class="fragment">2</li>
<li class="fragment juste">3</li>
<li class="fragment">4</li>
<li class="fragment">5</li>
</ol>
<div class="fragment revele"></div>

<p class="fragment fade-up">Les zéros du début ne comptent pas,<br>mais le zéro final, lui, compte : $3{,}20\times10^{-2}$.</p>

---

Pour <span class="imp">arrondir</span>, on regarde le chiffre suivant :<br>s'il vaut 5 ou plus, on arrondit au-dessus.

<p class="fragment fade-up">Arrondir à 2 chiffres significatifs :</p>

<ul>
<li class="fragment fade-up">$9{,}81$ <span class="fragment corr">$\longrightarrow 9{,}8$</span></li>
<li class="fragment fade-up">$0{,}0347$ <span class="fragment corr">$\longrightarrow 0{,}035$</span></li>
<li class="fragment fade-up">$6\,371$ <span class="fragment corr">$\longrightarrow 6{,}4\times10^{3}$</span></li>
<li class="fragment fade-up">$2{,}96$ <span class="fragment corr">$\longrightarrow 3{,}0$</span> <span class="fragment">(on garde le zéro !)</span></li>
</ul>

---

Et après un calcul ?

<div class="encadre" style="margin-top:0.5em">
Le résultat d'une multiplication ou d'une division<br>s'écrit avec <b>autant de chiffres significatifs</b><br>que la donnée qui en a <b>le moins</b>.
</div>

<p class="fragment fade-up" style="font-size:0.7em"><u>Rq</u> : on garde tous les chiffres pendant le calcul<br>et on n'arrondit qu'à la fin.</p>

---

Un son parcourt $d = 1{,}7\ \text{km}$ en $\Delta t = 5{,}00\ \text{s}$.

<p class="fragment fade-up">$v = \dfrac{d}{\Delta t} = \dfrac{1\,700\ \text{m}}{5{,}00\ \text{s}}$ : la calculatrice affiche $340$.</p>

<p class="fragment fade-up">$d$ n'a que <span class="imp">2 chiffres significatifs</span>, donc :<br><span class="imp">$v = 3{,}4\times10^{2}\ \text{m/s}$</span></p>

---

Éthanol : $\rho = 0{,}79\ \text{g/mL}$ et $V = 12{,}0\ \text{mL}$.<br>La calculatrice affiche $m = \rho\times V = 9{,}48$.<br>Quel résultat faut-il écrire ?

<ol class="vote">
<li class="fragment">$9{,}48\ \text{g}$</li>
<li class="fragment juste">$9{,}5\ \text{g}$</li>
<li class="fragment">$9\ \text{g}$</li>
<li class="fragment">$10\ \text{g}$</li>
</ol>
<div class="fragment revele"></div>

<p class="fragment fade-up">$\rho$ n'a que 2 chiffres significatifs :<br>le résultat aussi.</p>

---

Calculer en donnant le résultat avec<br>le bon nombre de chiffres significatifs :

<ul style="font-size:0.85em">
<li>Poids : $m = 2{,}5\ \text{kg}$ et $g = 9{,}81\ \text{N/kg}$<br><span class="fragment corr">$P = m\times g = 24{,}525\ldots$</span> <span class="fragment corr">$\Rightarrow P = 25\ \text{N}$</span></li>
<li>Vitesse : $d = 100{,}0\ \text{m}$ et $\Delta t = 9{,}58\ \text{s}$<br><span class="fragment corr">$v = \dfrac{d}{\Delta t} = 10{,}438\ldots$</span> <span class="fragment corr">$\Rightarrow v = 10{,}4\ \text{m/s}$</span></li>
</ul>

---

<ul style="font-size:0.85em">
<li>Concentration : $m = 4{,}5\ \text{g}$ et $V = 0{,}500\ \text{L}$<br><span class="fragment corr">$C_m = \dfrac{m}{V} = 9$</span> <span class="fragment corr">$\Rightarrow C_m = 9{,}0\ \text{g/L}$</span> <span class="fragment">(on garde le zéro !)</span></li>
<li>Quantité de matière : $N = 3{,}2\times10^{25}$<br>et $N_A = 6{,}02\times10^{23}\ \text{mol}^{-1}$<br><span class="fragment corr">$n = \dfrac{N}{N_A} = 53{,}156\ldots$</span> <span class="fragment corr">$\Rightarrow n = 53\ \text{mol}$</span></li>
</ul>

---

Pour revoir tout ça à la maison :

---

{{< youtube-slide id="KOvHirpl7vk" ratio="16x9" >}}

{{% /section %}}

---

[Retour](https://coursphychi.github.io/2nde/atome/)

