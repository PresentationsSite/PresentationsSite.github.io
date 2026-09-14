+++
title = "dosage spectrophotométrique"
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

# spectrophotométrie

---

On peut déterminer la concentration<br>d'une <span class="imp">solution colorée</span> à partir<br>de la mesure de son <span class="imp">absorbance $A_\lambda$</span><br>
à une certaine longueur d'onde $\lambda$<br>(donc pour une radiation donnée du spectre).

---

<p>
On utilise pour cela un <span class="imp">spectrophotomètre</span><br>et la technique est appelée<br><span class="imp">spectrophotométrie UV-visible</span><br>(ultraviolet-visible).
</p>

{{%/section%}}

---

{{%section%}}

## Spectre d'absorption

---

{{< slide  background-image="/cuvespectro.png" background-size="contain" background-transition="concave">}}

<br><br><br><br>

L'<span class="imp">absorbance $A_\lambda$</span> d'une solution quantifie la proportion d'un rayonnement incident $I_0$ monochromatique absorbée en mesurant l'intensité<br>du rayonnement transmis $I$. 

---


Comment varie l'absorbance si $\ell$ augmente ?

<p class="fragment fade-up" style="font-size:1.5em;">➚</p>

<p class="fragment fade-up">Pour faire des mesures au spectrophotomètre,<br>on utilise donc une cuve aux dimensions fixes.</p>

---

En faisant varier $\lambda$, on obtient une courbe<br>appelée <span class="imp">spectre d'absorption</span>.


---


{{< slide  background-image="/spectreabsorption.png" background-size="contain" background-transition="concave">}}


---


Comment peut-on relier un spectre d'absorption<br>à la couleur perçue de la solution ?

<br>

<p class="fragment fade-up">La solution agit comme un <span class="imp">filtre</span>. La couleur absorbée est donc <span class="imp">complémentaire</span> de la couleur perçue.</p>


---

{{< slide  background-image="/disque_chromatique.png" background-size="contain" background-transition="concave">}}

{{%note%}}
Attention, A peut être supérieur à 1.
{{%/note%}}

---

<iframe width="900" height="600" frameborder="0" scrolling="no" src="/spectres_colorants.html" ></iframe>


{{%note%}}
Je n'ai pas montré de colorant vert sur le graphe car ils ont l'air d'avoir surtout un pic très haut dans le rouge (plus haut que les autres) et un petit pic dans le bleu à peine apparent. Cela prête à confusion. Par contre , la chlorophylle, c'est nickel.
{{%/note%}}

---

Quel devrait être le spectre d'un colorant vert ? 

<br>

<p class="fragment fade-up">Il doit absorber le magenta<br>donc à la fois le rouge et le bleu.</p>

---

{{< slide  background-image="/spectrechlorophylle.png" background-size="contain" background-transition="concave">}}


---

Le spectre nous permet de déterminer <span class="imp">$\lambda_{max}$,<br>la longueur d'onde où l'absorbance est maximum</span>.

<br>

<p class="fragment fade-up">
C'est en réglant le spectrophotomètre sur cette longueur d'onde $\lambda_{max}$ que l'on va pouvoir déterminer une concentration en utilisant la loi de Beer-Lambert.
</p>

{{%/section%}}

---

{{%section%}}

## Loi de Beer-Lambert

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;border: solid 5px #00AB8E; border-radius: 20px;">
<div style="padding:10px 30px 20px 30px;width:fit-content;">
Pour une longueur d'onde $\lambda$ donnée et une largeur de cuve fixée, <span class="imp">l'absorbance $A_\lambda$</span> d'une espèce chimique en solution diluée <span class="imp">est proportionnelle à la concentration $C$ en quantité de matière</span><br>de cette espèce chimique.
</div>
</div>

---

‼️ Remarques importantes : ‼️

<br>

<ul>
<li class="fragment fade-up">Se placer à $\lambda_{max}$ permet d'optimiser la sensibilité et la précision des mesures ainsi que de se prémunir des interférences éventuelles dues à d'autres espèces colorées.</il>
<br><br>
<li class="fragment fade-up"><a href="https://hal.science/hal-03885627/document">Le domaine de validité de la loi de Beer-Lambert</a> suppose que l'absorbance et donc la concentration reste modérée.</li>
</ul>

{{%note%}}
Souvent demandé aux évaluations
{{%/note%}}

---


{{< slide  background-image="/validitebeer.png" background-size="contain" background-transition="concave">}}


---

<a href="https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_fr.html">
<div style="position: relative; margin:auto; width:fit-content; color:white; border-radius: 20px; background-color:#0076BA;">
<div style="padding:20px 30px 30px 30px;width:fit-content;">
Simulation
</div>
</div>
</a>

<br>



Vérifions que l'absorbance<br>est proportionnelle à la concentration.


{{%note%}}
mol/L peut parfois être abréger M<br>
On peut aussi vérifier que l'absorbance diminue avec la longueur de la cuve.
{{%/note%}}

---

Un <span class="imp">dosage spectrophotométrique</span><br>permet de déterminer la concentration<br>en quantité de matière d'une solution colorée.

<p class="fragment fade-up">
Ce dosage repose sur la réalisation<br>d'une <span class="imp">courbe d'étalonnage</span>.
</p>

{{%/section%}}

---

{{%section%}}


## Protocole d'un dosage spectrophotométrique


---

<ul>
<li>on réalise le spectre d'absorption de la solution<br>et on détermine $\lambda_{max}$.</li>
<br>
<li class="fragment fade-up">on réalise une gamme étalon de solutions par dilution d'une solution mère de concentration connue contenant la même espèce colorée<br>que la solution de concentration inconnue.</li>
</ul>

---

<ul>
<li>on règle le spectrophotomètre<br>sur la longueur d'onde $\lambda_{max}$.</li>
<br>
<li class="fragment fade-up">on mesure l'absorbance $A$ de chacune des solutions de concentration $C$ connue de la gamme.</li>
<br>
<li class="fragment fade-up">on trace la courbe $A=f(C)$.</li>
</ul>

---

<ul>
<li>on mesure l'absorbance de la solution de concentration inconnue (si l'absorbance est supérieure à la plus grande de la gamme,<br>on dilue la solution).</li>
<br>
<li class="fragment fade-up">on en déduit la concentration mystère<br>par lecture graphique ou par calcul en utilisant<br>la proportionnalité si la loi de Beer-Lambert<br>est bien vérifiée.</li>
</ul>


{{%/section%}}

---

{{%section%}}


## Conditions pour pouvoir doser<br>une espèce par spectrophotmétrie

---

<ul>
<li>L'espèce doit présenter un maximum d'absorption dans le domaine UV-visible (indice : elle donne une couleur à la solution).</li>
<br>
<li class="fragment fade-up">Il faut que l'espèce soit la seule à absorber à la longueur d'onde de son maximum d'absorption.</li>
</ul>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/spectro/)
