+++
title = "Photons"
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

## Modèle corpusculaire



---

{{<youtube oYnp0WZDhYQ>}}

{{%note%}}
Passer la vidéo sans le son.
Première lampe visible mais luminosité de fou (qu'il augmente au fur et à mesure)
Puis lampe noire (UVA probablement)
Puis lampe désinfection UVC. Lampe qui produit de l'ozone et nécessite de sortir de la salle !
Intensité du rayonnement = nombre de photons
Energie du rayonnement = fréquence de chaque photon
Augmenter l'intensité de la lumière blanche ne rend pas les photons plus énergétiques.
{{%/note%}}

---

{{< slide  background-image="/einstein2.png" background-size="contain" background-transition="concave">}}

<div style="text-align:left;margin-left:-80px;">
En 1905, Einstein explique l'effet<br> en généralisant l'idée de Planck au rayonnement<br>lui-même (et non plus seulement aux échanges).<br>La lumière serait constituée de petits paquets ;<br>les <span class="imp">photons</span>.
</div>


---

Le <span class="imp">photon</span> est une particule de lumière sans masse voyageant à $c$ qui transporte une énergie :


<div class="imp fragment" style="display: flex; justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em">
$\Delta E = h\times \nu$
</div></div>

---

Unités :

<ul>
<li class="fragment">E en <span class="fragment imp">joule (J)</span>
<li class="fragment">$\nu$ en <span class="fragment imp">hertz (Hz)</span></li>
<li class="fragment">$h=\pu{6,63E-34 J*s}$<br>est la <span class="imp">constante de Planck</span>.</li>
</ul>

---

On peut lier énergie du photon et longueur d'onde :

<div class="imp fragment" style="display: flex; justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em">
$\displaystyle E = h\times \frac{c}{\lambda}=\frac{hc}{\lambda}$
</div></div>

---

Unités :

<ul>
<li class="fragment">E en <span class="fragment imp">joule (J)</span>
<li class="fragment">$\lambda$ en <span class="fragment imp">mètre (m)</span>
<li class="fragment">$h=\pu{6,63E-34 J*s}$<br>est la constante de Planck.</li>
<li class="fragment">$c=$<span class="fragment"> $\pu{3,00E8 m*s^-1}$</span><br>est la célérité de la lumière.</li>
</ul>

---

Si la fréquence est au-dessus d'un certain seuil,<br>le photon a assez d'énergie pour éjecter un électron<br>du métal, créant l'effet observé.

---


{{< slide  background-image="/photoelectric.png" background-size="contain" background-transition="concave">}}

---

Un autre savant, Millikan, n'aime pas beaucoup<br>la théorie d'Einstein et met au point<br>une expérience pour la détruire.

---

<a href="https://applets.kcvs.ca/photoelectricEffect/PhotoElectric.html">Simulation de l'expérience de Millikan</a><br>

{{% fragment %}}<span style="font-weight:normal">
L'expérience consiste, pour différentes fréquences,<br>à trouver la tension minimale à appliquer<br>entre les deux plaques pour obtenir<br>un courant nulle dans le circuit.</span>{{% /fragment %}}


---


{{< slide  background-image="/einsteinlangue.png" background-size="contain" background-transition="concave">}}
Contrairement à son souhait premier,<br>l'expérience de Millikan a totalement<br>confirmé la théorie d'Einstein !


---

{{< slide  background-image="/courbephotoelec.png" background-size="contain" background-transition="concave">}}

---

Conséquence :

Attribution du prix Nobel en 1921 à Einstein 🥳

<br>

{{% fragment %}}<span style="font-weight:normal">Mais aussi à Millikan en 1923 😅 </span>{{% /fragment %}}

{{% fragment %}}<span style="font-weight:normal">Cela illustre bien qu'une bonne expérience<br>n'est pas sensée donner raison à celui qui la mène<br>mais seulement permettre de trancher.</span>{{% /fragment %}}


{{%/section%}}


---

[Retour site](https://coursphychi.github.io/tspe/photon/)
