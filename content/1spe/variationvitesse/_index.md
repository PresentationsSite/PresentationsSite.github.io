+++
title = "Variation de vitesse"
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




{{%section%}}

## Vocabulaire et rappels

---

<span class="imp">Système</span> :

corps ou ensemble de corps<br>dont on étudie le mouvement.

<p class="fragment">On le modélisera par un <span class="imp">point matériel</span><br>(généralement situé au niveau<br>de son centre de gravité).</p>

---

<span class="imp">Référentiel</span> :

<div class="fragment">
Repère spatial + horloge

C'est le cadre dans lequel on décrit le mouvement.
</div>

<p class="fragment">Exemples :</p>
<p class="fragment">référentiel terrestre, géocentrique,<br>héliocentrique, référentiel du train,...
</p>


---

Un autre système peut interagir avec le système étudié par l'intermédiaire d'<span class="imp">actions<span> modélisées par des <span class="imp">forces</span> représentées par des vecteurs.

---

La <span class="imp">résultante des forces $\vec{F}_\mathrm{res}$</span> est la somme des forces extérieures qui s'appliquent sur le système.

<div class="fragment">
$$\overrightarrow{F_{\mathrm{res}}} = \sum{\overrightarrow{{F}_\mathrm{ext}}}$$
</div>

---

La <span class="imp">trajectoire</span> d'un système est l'ensemble des positions prises par le système au cours du temps.


---

La trajectoire d'un système est dite :

<ul>
<li><span class="imp">rectiligne</span> si c'est une droite</li>
<li><span class="imp">circulaire</span> si c'est un cercle</li>
<li><span class="imp">quelconque</span> dans les autres cas</li>
</ul>

---

Le <span class="imp">vecteur déplacement $\overrightarrow{\text{MM'}}$ du point M</span><br>est le vecteur joignant le point M<br>à une position ultérieure M'.

---

Le <span class="imp">vecteur vitesse $\vec{v}$</span> du point M est approché par<br>le vecteur vitesse moyenne entre des positions successives M et M' séparées de $\Delta t$ :

$$\color{#FF968D}\vec{v} \approx \frac{\overrightarrow{\text{MM'}}}{\Delta t}$$

<p class="fragment">Plus $\Delta t$ est petit, et plus le vecteur vitesse<br>s'approche de la vitesse instantanée en $t$</p>


---

<iframe scrolling="no" title="Déplacement et vitesse" src="https://www.geogebra.org/material/iframe/id/rgnmnkbe/width/575/height/527/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="575px" height="527px" style="border:0px;"> </iframe>

---

Et plus $\Delta t $ est petit, plus le vecteur vitesse<br>devient tangent à la trajectoire.

<p class="fragment">$\Rightarrow$Le <span class="imp">vecteur vitesse instantanée</span><br>est <span class="imp">tangent</span> à la trajectoire.</p>

---

Le mouvement d'un système est dit :

<ul>
<li><span class="imp">uniforme</span> si la valeur de sa vitesse reste constante</li>
<li><span class="imp">accéléré</span> si la valeur de la vitesse augmente</li>
<li><span class="imp">ralenti</span> si la valeur de la vitesse diminue</li>
</ul>

---

Le <span class="imp">vecteur variation de vitesse $\overrightarrow{\Delta v}$</span><br>
est la variation de vitesse entre deux instants  voisins : 

$\color{#FF968D}\overrightarrow{\Delta v_\mathrm{M}} = \overrightarrow{ v\_{\mathrm{M'}}} - \overrightarrow{v_\mathrm{M}}$<br>
avec M' proche de M.


{{%/section%}}

---

{{<youtube fRNUbLc6U8s>}}


---

{{< runpython lang="vpython" mode="output" width="900" height="600" file="variationvitesse.py" >}}
{{< /runpython >}}

---


{{%section%}}

## Lien entre force et mouvement

---

La <span class="imp">1<sup>re</sup> loi de Newton</span>, aussi appelée<br><span class="imp">principe d'inertie</span> nous assure que :

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
Si la résultante des forces sur un système est nulle, alors son mouvement est rectiligne uniforme.<br>
Et à l'inverse, si son mouvement est rectiligne uniforme, alors la résultante des forces est nulle. 
</div>

---

En résumé :

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
<span class="imp">MRU</span> $\Leftrightarrow$ $\sum{\vec{F}}$<span class="imp">$\;=\;$</span>$\vec{0}$
</div>


---


Et la contraposée nous donne :

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$\sum{\vec{F}}$<span class="imp">$\;≠\;$</span>$\vec{0}$ $\Leftrightarrow$ <span class="imp"><s>MRU</s></span>
</div>

---

Peut-on réexprimer cet énoncé<br>avec le vecteur variation de vitesse ?

<p class="fragment">Oui puisque<br>
<span class="imp"><s>MRU</s></span>$\;\Leftrightarrow\;$<span class="imp">$\vec{\Delta v}≠\vec{0}$</p>

---

On a alors :

<div class="fragment" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$\sum{\vec{F}}$<span class="imp">$\;≠\;$</span>$\vec{0}$  $\;\Leftrightarrow\;$ </span>$\vec{\Delta v}$<span class="imp">$\;≠\;$</span>$\vec{0}$
</div>

---

On peut aller quantitativement un peu plus loin<br>avec la relation approximative suivante :

<div class="fragment imp" style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$\displaystyle \sum{\overrightarrow{F}}\approx m \times \frac{\overrightarrow{\Delta v}}{\Delta t}$
</div>

<p class="fragment">
L'accord est d'autant meilleur que $\Delta t$ est petit.
</p>

---

Unités :

<ul>
<li>$F$ en <span class="fragment imp">$\pu{N}$</span></li>
<li>$\Delta t$ en <span class="fragment imp">$\pu{s}$</span></li>
<li>$m$ en <span class="fragment imp">$\pu{kg}$</span></li>
<li>$\Delta v$ en <span class="fragment imp">$\pu{m*s-1}$</span></li>
</ul>

---

Pour une même résultante des forces et un même<br>laps de temps $\Delta t$, que peut-on dire<br>de l'influence de la masse ?


<p class="fragment imp">
Plus la masse est grande,<br><span class="fragment imp">plus la variation de vitesse est faible !</span>
</p>


{{%/section%}}


---

[Retour site](https://coursphychi.github.io/1spe/variationvitesse/)
