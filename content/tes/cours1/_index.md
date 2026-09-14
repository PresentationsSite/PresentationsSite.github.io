+++
title = "Énergie/Puissance"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

/* .fragment:not(ul,li) {font-weight:bold;color:red;} */

span {font-weight:normal;color:white;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

</style>



{{%section%}}


## Puissance et énergie

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/S4O5voOCqAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---


Maintenir une puissance $P$ pendant un temps $t$ consomme l'énergie $E$ donnée par :


<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;width:min-content;padding: 20px 30px 20px 30px;border-radius:10px;">
<span class="imp">$E = P\times t$</span>
</div></div>

<p class="fragment" style="font-weight:normal;color:#93a1a1">Si $P$ est en watts (W) et $t$ en secondes (s),<br>alors $E$ est en joules (J). Mais le plus souvent,<br>$P$ est en kW et $t$ en h et donc $E$ en kWh.</p>

<p class="fragment" style="font-weight:normal;color:#93a1a1">$\pu{1 kWh} = \pu{3,6 MJ}$</p>

---

Robert aurait produit $\pu{1 kWh}$<br>en maintenant son effort pendant 1h26 🥵

---

L'énergie est une monnaie d'échange qui peut être <span class="imp">convertie</span> d'une forme à une autre<br>sans jamais disparaître :

<p class="fragment fade-up"><span class="imp">l'énergie se conserve !</imp></p>

<p class="fragment">
<a href="https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_fr.html">Une animation interactive pour l'illustrer</a>
</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/BKfufXnupMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<div style="position:relative;margin:auto;width:fit-content;">
<div style = "border:solid #FF968D 5px;width:fit-content;padding: 20px 30px 20px 30px;">
La <span class="imp">puissance</span> est le <span class="imp">taux de conversion</span><br>(la vitesse de conversion) <span class="imp">de l'énergie</span>.</b>
</div>
</div>

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;width:100%;padding: 10px 20px 10px 20px;">
En moyenne, un français consomme à tout moment environ <span class="imp">$\pu{1 kW}$</span> de puissance électrique.
</div></div>

<p class="fragment" style="font-weight:normal;color:#93a1a1">Cela donne un peu moins de $\pu{9 MWh}$<br>d'énergie électrique consommée sur une année.</p>


<p class="fragment" style="font-weight:normal;color:#93a1a1">Comme on est seulement capable de maintenir en permanence environ $\pu{100 W}$ d'effort musculaire,<br>c'est comme si on était à tout moment<br>assisté par $10$ humains !</p>


{{%/section%}}

---

{{%section%}}

## Rendement énergétique

---

### Chaîne énergétique :

<div style="position:relative;margin:auto;width:fit-content;">
<img style="background:none;box-shadow:none;" src="/chenergie.png">
</div>

---

Lorsqu'on convertit<br>une forme d'énergie en une autre,<br><span class="imp">une partie de l'énergie se perd<br>sous forme d'énergie thermique</span>. 

---

Le <span class="imp">rendement $\eta$</span> de la conversion est alors donné par&nbsp;:

<br>

<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;width:min-content;padding: 20px 30px 20px 30px;font-size:1.5em;border-radius:15px;">
<span class="imp">$\eta = \frac{E_\text{utile}}{E_\text{absorbée}}=\frac{P_\text{utile}}{P_\text{absorbée}}$</span>
</div></div>

----

Lorsque l'énergie subit plusieurs conversions successives, le rendement total vaut <span class="fragment imp">le produit</span><br>des rendendements de chaque conversion&nbsp;:

<div class="imp fragment">
$$\eta = \eta_1\times\eta_2$$
</div>

<div style="position:relative;margin:auto;width:fit-content;">
<img style="background:none;box-shadow:none;" src="/rendglob.png">
</div>

---

Prenons l'exemple de la centrale hydroélectrique<br>de Tignes-Malgovert.

---


{{< slide  background-image="https://lenergeek.com/wp-content/uploads/2015/03/barrage_tignes_photo_Daniel-Reversat.jpg" background-size="contain" background-transition="concave">}}

---

<p style="font-size:0.9em;">
L'eau du barrage tombe sur les turbines d'une hauteur<br>de 750 m avec une puissance $P_\text{e}=\pu{353 MW}$. 
</p>

<p class="fragment fade-up" style="font-size:0.9em">
Les turbines convertissent l'énergie mécanique<br>de translations de l'eau en énergie de rotation.<br>Elles fournissent une puissance $P_\text{t}=\pu{320 MW}$. 
</p>

<p class="fragment fade-up" style="position:relative;margin:auto;width:40%;border-radius:20px;">
<img  style="border-radius:20px;" src="/Pelton.jpg">
</p>

<p class="fragment fade-up">Quel est le rendement des turbines ?</p>

---


Enfin, cette puissance mécanique de rotation est convertie en puissance électrique par l'alternateur<br>avec un rendement $\eta_\text{a}=98\\%$. 

<p class="fragment fade-up">Que vaut le rendement global de la centrale de Tignes ?</p>




{{%/section%}}


---

{{%section%}}

## Facteur de charge

---

Si une centrale maintenait sa puissance nominale<br>(de $x$ $\pu{kW}$) toute l'année, elle produirait une énergie $E_{\text{max}}=x$ $\pu{kW}\times\pu{8766 h/an} = x\times \pu{8766 kWh/an}$.

---

Mais en pratique, l'énergie produite $E_{\text{réelle}}$ est toujours moindre et on appelle <span class="imp">facteur de charge</span> le rapport :

<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;width:min-content;padding: 0px 50px 0px 50px;border-radius:15px;">
$$\frac{E_{\text{réelle}}}{E_{\text{max}}}$$
</div></div>

---

{{< slide  background-image="/parc2023.png" background-size="contain" background-transition="concave">}}

{{%note%}}
J'avais pas la place mais c'est "thermique renouvelable et déchets"
{{%/note%}}

---

Les deux graphes précédents permettent de déduire<br>le facteur de charge moyen de chaque filière de production d'énergie électrique en 2025 en France.

<p class="fragment fade-up">Déterminer le facteur de charge de l'éolien.</p>

---

Plus l'énergie est intermittente,<br>plus le facteur de charge est faible :

<ul>
<li class="fragment fade-up">$\approx 80\%$ pour une centrale nucléaire ou à flamme,</li>
<li class="fragment fade-up">$40$-$60\%$ pour une centrale hydroélectrique,</li>
<li class="fragment fade-up">$20$-$40\%$ pour un champ éolien<br>(jusqu'à $50\%$ pour un champ offshore),</li>
<li class="fragment fade-up">$10$-$25\%$ pour une centrale solaire photovoltaïque<br>(jusqu'à $40\%$ pour une solaire thermique).</li>

{{%/section%}}


---


[Retour site](https://coursphychi.github.io/tes/energie/)
