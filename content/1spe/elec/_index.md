+++
title = "Énergie électrique"
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

.video-container {
position: relative;
width: 90%;
max-width: 100%;
margin: auto;
padding-bottom: 50.7%; 
height: 0;
}
.video-container iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

</style>






# Énergie électrique


---

{{%section%}}

## Porteurs de charges

---


Un courant électrique est lié à un<br>mouvement de <span class="imp">porteurs de charge électrique</span>.

<p class="fragment">
Dans un matériau conducteur, il s'agit d'électrons, chargés négativement ($q=-e=\pu{-1,6E-19 C}$).
</p>
<p class="fragment">
Mais il peut aussi s'agir d'ions dans les solutions.
</p>

---

L'intensité $I$ d'un courant électrique continu mesure<br>le <span class="imp">débit de charges</span> (variation du nombre<br>de charges par unité de temps).

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$$I = \frac{\Delta q}{\Delta t}$$
</div>

---

Unités :

<ul>
<li>$I$ en <span class="imp fragment">ampères (A)</span></li>
<li>$\Delta q$ en <span class="imp fragment">coulombs (C)</span></li>
<li>$\Delta t$ en <span class="imp fragment">s</span></li>
</ul>

---

Combien d'électrons défilent à travers<br>la section d'un fil de cuivre pendant $\pu{1 s}$<br>si le courant qui y circule a une intensité de $\pu{1 A}$ ?

---


Pendant $\Delta t= \pu{1 s}$, il circule une charge $\Delta q=I\times \Delta t = \pu{1 C}$.<br>
<p class="fragment">
Comme les porteurs de charges dans un conducteur sont des électrons, le nombre d'électrons<br>qui circulent vaut :
</p>
<p class="fragment">
$\displaystyle \frac{\Delta q}{e}=\frac{\pu{1 C}}{\pu{1,6E-19 C}} = \pu{6,3E18}$
</p>

{{%/section%}}

---
 

{{%section%}}

## Générateurs

---

Le courant continu dans un circuit est produit par<br>un <span class="imp">générateur</span> (ou source) <span class="imp">de tension continue</span><br>(comme une pile).

{{%note%}}
Les générateurs "branchés" au labo sont des alimentations, comme les chargeurs de téléphone ou les blocs d'un ordinateur. Leur rôle est de modifié le courant du secteur pour convenir aux appareils en aval.
{{%/note%}}

---

À quoi devrait ressembler la caractéristique $U=f(I)$ d'un gérateur de tension continue ?

---

{{< slide  background-image="/genid.png" background-size="contain" background-transition="concave">}}

---

$E$ est la <span class="imp">tension à vide</span> du générateur ($U(I=0)$).<br>
Dans un générateur de tension idéal, elle ne varie pas<br>(elle est indépendante de l'intensité).

---

Schéma du circuit électrique permettant de tracer expérimentalement la caractéristique d'un générateur réel de tension continue (une pile) ?

---

{{< slide  background-image="/circar1spe.png" background-size="contain" background-transition="concave">}}

---

Réalisons l'expérience et [traçons la caractéristique](../caract/).

---

{{< slide  background-image="/genreel.png" background-size="contain" background-transition="concave">}}

---

Quelle est l'équation de la courbe ?

<p class="fragment">$U=E-{\color{#FF968D}r}\times I$, avec $r>0$.<br>
</p>

<p class="fragment">
Dimension de <span class="imp">$r$</span> ?
</p>

<p class="fragment">
$[r]\times[I]=[U]$<br>
$\displaystyle \Rightarrow [r]=\frac{[U]}{[I]}$
</p>

<p class="fragment">
<span class="imp">$r$</span> a la dimension d'une résistance.
</p>

---

Par quelle association de dipôles<br>pourrait-on modéliser le générateur réel ?



---

{{< slide  background-image="/genidreel.png" background-size="contain" background-transition="concave">}}

---

$r$ est la <span class="imp">résistance interne</span> du générateur.


---

générateur réel<br>=<br>générateur idéal<br>+<br>résistance (en série)

---

Conséquences de $r$ ?

<ul>
<li class="fragment">La tension fournie par le générateur est plus faible lorsque l'intensité fournie grandit.</li>
<li class="fragment">La résistance interne dissipe de l'énergie<br>(par effet joule).</li>
<li class="fragment">Le générateur s'échauffe lorsque l'intensité augmente (toujours dû à la dissipation d'énergie).</li>
</ul>

{{%/section%}}

---

{{%section%}}

## Lien énergie-puissance

---

Qu'est-ce que l'énergie ?


<p class="fragment">
<span class="imp">L’énergie mesure la capacité à changer</span>
<br>la température ou 
le mouvement d’un corps.

---

L'énergie est une sorte de monnaie d'échange qui passe d'une forme à une autre sans jamais disparaître (<span class="imp">l'énergie se conserve</span> !).

---

Et la puissance ?

<p class="fragment">La puissance mesure<br>le <span class="imp">taux de variation de l'énergie</span><br>(sa vitesse de variation).

---

Formule liant les deux ?

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$E = P\times \Delta t$
</div>

---

Unités :

<ul>
<li>$E$ en <span class="imp fragment">joules (J)</span></li>
<li>$P$ en <span class="imp fragment">watts (W)</span></li>
<li>$\Delta t$ en <span class="imp fragment">s</span></li>
</ul>

<p class="fragment">
Donc <span class="imp">$\pu{1 J} = \pu{1 W}\times \pu{1 s}$</span>

---

{{%youtube BKfufXnupMA%}}

---

{{%youtube S4O5voOCqAQ%}}

---

En électricité, l'unité usuelle de l'énergie convertie est le <span class="imp">killowatt-heure</span> ($\text{kW}\\!\cdot\\!\text{h}$ souvent écrit <span class="imp">$\pu{kWh}$</span>).


<p class="fragment">Convertir $\pu{1 kWh}$ en $\pu{J}$.
<span class="fragment">$$
\begin{aligned}
\text{1 kWh} &= \text{1 kW} \times \text{1 h} \\
&= 10^3 \text{ W} \times 3600 \text{ s} \\
&= 3,6 \times 10^6 {\color{#FF968D}\text{ W}\cdot\text{s}} \\
&= 3,6 \times 10^6 {\color{#FF968D}\text{ J}}
\end{aligned}
$$
</span>
</p>

<p class="fragment">Et donc <span class="imp">$\pu{1 kWh} = \pu{3,6 MJ}$</span>.</p>

---

{{< slide  background-image="/capaciteinstallee.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/prodelec2023.png" background-size="contain" background-transition="concave">}}


---

Pourquoi les deux graphes diffèrent ?

<p class="fragment">
Pouvez-vous en déduire le facteur de charge*<br>du nucléaire et celui de l'éolien ?
</p>

<p class="fragment" style="font-size:0.8em">
* rapport entre l'énergie électrique effectivement produite sur<br>une période donnée et l'énergie qui aurait été produite avec un fonctionnement à puissance nominale durant la même période.
</p>

{{%note%}}
Le facteur de charge ou facteur d'utilisation d'une centrale électrique est le rapport entre l'énergie électrique effectivement produite sur une période donnée et l'énergie qu'elle aurait produite si elle avait fonctionné à sa puissance nominale durant la même période.
(59 et 23)
{{%/note%}}

{{%/section%}}

---

{{%section%}}

## Rendement d'un convertisseur

---

<span class="imp">La quantité totale d'énergie se conserve</span><br>mais grâce à un <span class="imp">convertisseur</span>,<br>elle peut passer d'une forme à une autre.

[Une animation pour l'illustrer.](https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_fr.html)

---

<span class="imp">Chaîne énergétique</span> d'un convertisseur :

<img src="/rendementconv.png" style="background:none;box-shadow:none;width:700px;">

---

<ul>
<li style="color:#88FA4E;">L'<b>énergie fournie</b> peut être de différentes formes :<br>
<span class="fragment" style="color:#88FA4E;">lumineuse, mécanique, électrique, thermique, chimique</span></li>
</ul>

---

<ul>
<li style="color:#56C1FF;">L'<b>énergie utile</b> résulte de la conversion de l'énergie fournie.<br>
<span class="fragment" style="color:#56C1FF;">Suivant le convertisseur, elle peut aussi prendre différentes formes :<br>
lumineuse, mécanique, électrique, thermique,chimique</span></li>
</ul>

---

<ul>
<li style="color:#FF968D;">L'<b>énergie dissipée</b> correspond à l'énergie "perdue" dans la conversion (non convertie en énergie utile).<br>
Elle est toujours sous forme <span class="fragment" style="color:#FF968D;"><b>thermique</b></span> !</li>
</ul>

---

Par conservation de l'énergie :

<p class="fragment">
<b style="color:#88FA4E;">énergie fournie</b> = <b style="color:#56C1FF;">énergie utile</b>  + <b style="color:#FF968D;">énergie dissipée</b> 
</p>

---

Le <span class="imp">rendement $\eta$ d'un convertisseur</span> est donné par :

<br>

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$\displaystyle \eta = \frac{\color{#56C1FF}P_\text{utile}}{\color{#88FA4E}P_\text{fournie}}$
</div>

---

Lorsque plusieurs conversions s'enchaînent,<br>les rendements <span class="imp fragment">se multiplient</span>.


<p class="fragment">
$\eta_\text{total} = \eta_\text{convertisseur 1}\times \eta_\text{convertisseur 2}\times\ldots$


{{%/section%}}

---

{{%section%}}

## Puissance électrique

---

Un dipôle électrique est soumis à une tension $U$ entre ses bornes et parcouru par un courant d'intensité $I$.

La puissance convertie par le dipôle s'écrit :

<br>

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$P = U\times I$
</div>

---

Unités :

<ul>
<li>$P$ en <span class="imp fragment">watts (W)</span></li>
<li>$U$ en <span class="imp fragment">volts (V)</span></li>
<li>$I$ en <span class="imp fragment">ampères (A)</span></li>
</ul>

---

Ordres de grandeur :

<table border="1">
  <tr>
    <th style="background-color: #00AB8E;color:white">Appareil</th>
    <th>Puissance</th>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Veilleuse d’appareil</td>
    <td>1 W</td>
  </tr>
    <tr>
    <td style="background-color: #006C65;">Chargeur</td>
    <td>20 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Lampe</td>
    <td>30 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Ordinateur</td>
    <td>200 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Téléviseur</td>
    <td>150 W</td>
  </tr>
</table>

---

<table border="1">
  <tr>
    <th style="background-color: #00AB8E;color:white;">Appareil</th>
    <th>Puissance</th>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Fer à repasser</td>
    <td>1200 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Lave-linge</td>
    <td>2500 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Four</td>
    <td>3000 W</td>
  </tr>
  <tr>
    <td style="background-color: #006C65;">Plaque de cuisson</td>
    <td>6000 W</td>
  </tr>
</table>

---

Qu'ont en commun les appareils du 2<sup>e</sup> tableau ?


{{%/section%}}

---


{{%section%}}

## Effet joule

---
	
Les dipôles électriques dissipent de la puissance thermique du fait de leur résistance. 

<p>C'est l'<span class="imp fragment">effet Joule</span>.</p>

---

Un dipôle ohmique est justement caractérisé par sa résistance $R$. Il convertit l'intégralité de la puissance électrique reçue en puissance thermique. 

<img src="/dipohm.png" style="background:none;box-shadow:none;width:600px;">

---

La puissance dissipée par effet Joule est donnée par :

<br>

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$\displaystyle P_J = U_{\!R} \times I = R I^2 = \frac{{U_{\!R}}^2}{R}$
</div>

<br>

<p class="fragment">
On passe d'une formule à l'autre<br>en appliquant la loi d'Ohm.
</p>

---

Et l'énergie dissipée par effet Joule vaut donc :

<br>

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$\displaystyle E_J = P_J\Delta t =  R I^2 \Delta t$
</div>

{{%/section%}}

---

{{%section%}}

## Bilan de puissance dans un circuit

---

La puissance électrique fournie par un générateur vaut <span class="imp">la somme</span> des puissances électriques consommées<br>par chaque dipôle récepteur du circuit.

---

Exemple :

<img src="/bilanpuiss.png" style="background:none;box-shadow:none;width:600px;">

$P_G = P_M +P_L + P_{R_1} + P_{R_2}$

{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/elec/)
