+++
title = "Interactions fondamentales"
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

# Interactions fondamentales<br>et champs


---

Deux des interactions fondamentales de l'univers sont :

<ul>
<li class="fragment">l'<b style="color:#FFD932;">interaction gravitationnelle</b> entre deux masses<br>qui est toujours <span class="fragment"><b style="color:#FF968D;">attractive</b>.</span></li>
<li class="fragment">l'<b style="color:#FFD932;">interaction électrostatique</b> entre deux charges électriques qui est :
<ul>
<li class="fragment"><b style="color:#FF968D;">attractive</b> entre deux <u>charges opposées</u>,</li>
<li class="fragment">et <b style="color:#56C1FF	;">répulsive</b> entre deux <u>charges identiques</u>.</li>
</li>
</ul>
</ul>

---


Ces deux interactions sont remarquablement semblables dans leur forme mathématique.

<p class="fragment">Mais avant d'évoquer la force électrostatique, on va tâcher d'en apprendre plus sur les charges électriques.</p>

{{%/section%}}

---
 

{{%section%}}

## Électrostatisme et charges

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/Vrh5FeGUTJA?si=6Y4B3DJ6r5pJR_vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

La charge électrique est découverte par les anciens Grecs qui constatent que certaines matières, telles que l'ambre, frottées sur de la fourrure pouvait attirer des objets légers tels que des cheveux. 

---

Ils remarquent également qu'en frottant l'ambre assez longtemps, on pouvait même obtenir une étincelle. 

<p class="fragment">Le mot « électricité » vient du grec ancien<br>ἤλεκτρον / ḗlektron, « ambre ».</p>

---

De plus, deux matériaux différents "chargés" par frottement peuvent s'attirer ou se repousser, ce qui montre que deux types de charges existent.

---

{{< slide  background-image="/echelletribo.png" background-size="contain" background-transition="concave">}}

---

On interprète aujourd'hui ces propriétés par l'apparition d'un déséquilibre de charge électrique (phénomène triboélectrique). 

<p class="fragment">Des électrons de la fourrure sont arrachés et s'accumulent à la surface de l'ambre laissant la fourrure chargée positivement et l'ambre négativement.</p>

{{%note%}}
Bien dire qu'une grande partie du phénomène reste encore inexpliqué aujourd'hui !
{{%/note%}}

---

Plus un matériau accumule de charges, plus il aura tendance a attirer d'autres matériaux.

---

{{< slide  background-image="/chattribo.jpeg" background-size="contain" background-transition="concave">}}

{{%note%}}
Un chat peut atteindre une charge de 50 kV.
ODG 10 kV/cm pour décharge électrique disruptive
{{%/note%}}

---

Mais comment un objet chargé (le chat) peut-il attirer des objets non chargés (les morceaux de polystyrène) ?

<p class="imp fragment">Par influence électrostatique !</p>

<p class="fragment"><a href="https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_fr.html">Ballons du Colorado</a> 

---

<iframe width="560" height="420" src="https://www.youtube.com/embed/ILK_JWl-uW0?si=5uE22KGLa1Muplc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


{{%note%}}
C'est la raison pour laquelle les lignards ont des combinaisons tissés de fil d'argent pour leur servir de cage de Faraday. On peut très bien faire sans mais c'est plus désagréable (à cause des charges).
{{%/note%}}

---

<a href="https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_all.html">John Travoltage</a></p>

---

{{<youtube m7SWW1FWsPI>}}

{{%/section%}}

---

{{%section%}}

## Formulation des lois

---

### Loi d'interaction gravitationnelle

---

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px;width:fit-content;">
$$\vec{F}_{A/B} = -G \frac{m_A \times m_B}{d^2}\vec{u}_{AB}$$
</div>

---

{{< slide  background-image="/schemagravit1.png" background-size="contain" background-transition="concave">}}

---

$\vec{u}_{AB}$ est le vecteur unitaire tel que :
<ul>
<li>norme : $||\vec{u}_{AB}||=1$</li>
<li>direction : $(AB)$</li>
<li>sens : $A\rightarrow B$</li>
</ul>

---

unités :

<ul>
<li>$F_{A/B}$ en <span class="imp fragment">N</span></li>
<li>$m_A$ et $m_B$ en <span class="imp fragment">kg</span></li>
<li>$d=AB$ en <span class="imp fragment">m</span></li>
</ul>

<p class="fragment">
$G$ est la constante universelle de gravitation.<br>
$G=\pu{6,67E-11 N*m^2*kg^-2}$
</p>


---


D'après la loi des actions réciproques<br>(3<sup>e</sup> loi de Newton) :

<div class="fragment">
$$\vec{F}_{A/B}= - \vec{F}_{B/A}$$
</div>

---

{{< slide  background-image="/schemagravit2.png" background-size="contain" background-transition="concave">}}

---

[Animation illustrative](https://phet.colorado.edu/sims/html/gravity-force-lab-basics/latest/gravity-force-lab-basics_fr.html)

---

### Loi d'interaction électrostatique<br>ou loi de Coulomb


---

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$\vec{F}_{A/B} = k \frac{q_A  \times q_B}{d^2}\vec{u}_{AB}$$
</div>

---

Suivant le signe des charges, il peut y avoir<br>attraction (charges de signes différents)<br>ou répulsion (charges de même signe).

---

{{< slide  background-image="/schemaloielec.png" background-size="contain" background-transition="concave">}}

---

unités :

<ul>
<li>$F_{A/B}$ en <span class="imp fragment">N</span></li>
<li>$q_A$ et $q_B$ en <span class="imp fragment">Coulomb (C)</span></li>
<li>$d=AB$ en <span class="imp fragment">m</span></li>
</ul>

<p class="fragment">
$k$ est la constante de Coulomb.<br>
$k=\frac{1}{4\pi\varepsilon_0}=\pu{8,99E9 N*m^2*C^-2}$<br>
$\varepsilon_0$ est la permittivité du vide.
</p>

---

[Animation illustrative](https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_fr.html)

---

{{< slide  background-image="/tabrecelgrav.png" background-size="contain" background-transition="concave">}}



{{%/section%}}

---

{{%section%}}

## Champs gravitationnel<br>et électrostatique

---

Pour expliquer l'interaction à distance des charges électrique, Faraday a imaginé la notion de champ électrique, créé par les charges et s'étendant<br>partout dans le vide.

---

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
Un champ est la donnée d'une grandeur physique en tout point de l'espace
</div>

---

{{< slide  background-image="/cartemeteo.png" background-size="contain" background-transition="concave">}}

---

Les cartes météo sont des cartes de champ :

<ul>
<li>le champ des températures qui est un <span class="imp">champ scalaire</span> car la grandeur représenté est un nombre ;</li>
<li>le <a href="https://earth.nullschool.net/fr/#current/wind/surface/level/orthographic=-0.95,42.72,687/loc=-1.147,45.905">champ des vents</a> qui est un  <span class="imp">champ vectoriel</span> car on représente le vecteur vitesse du vent en un point.</li>
</ul>

---

{{< slide  background-image="/wind_speed_caribbean.png" background-size="contain" background-transition="concave">}}

---

Les champs électriques et gravitationnels<br>sont des <span class="imp">champs vectoriels</span>.

---

Le champ électrostatique en un point $P$ créé par une charge ponctuelle $Q$ située en un point $O$ :

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$\vec{E} = k\frac{Q}{d^2}\vec{u}_{OP}$$
</div>

---

{{< slide  background-image="/champE1.png" background-size="contain" background-transition="concave">}}

---

L'unité du champ électrique est donc le <span class="fragment imp">$\pu{N*C^-1}$</span>

<p class="fragment">
Mais le champ électrique a aussi<br>une autre unité plus physique :<span class="fragment"> le <span class="imp">$\pu{V*m^-1}$</span>.</span>
</p>


---

{{< slide  background-image="/champE2.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/champE3.png" background-size="contain" background-transition="concave">}}

---

Si une charge $Q$ exerce un champ électrique $\vec{E}$ en un point P, alors une charge $q$ placée en P subira la force

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$\overrightarrow{F}=q\times \overrightarrow{E}$$
</div>

---

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
Pour déterminer le vecteur champ électrique en tout point, il suffit d'y placer une <span class="imp">charge-test de 1 C</span> et de calculer le vecteur force qui s'exerce sur elle.
</span>

---

[Animation illustrative](https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_fr.html)


---

Le champ gravitationnel en un point $P$ créé<br>par une masse $M$ située en un point $O$ :

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$\vec{\mathcal{G}} = -G\frac{M}{d^2}\vec{u}_{OP}$$
</div>

---

L'unité du champ gravitationnel est donc le <span class="fragment imp">$\pu{N*kg^-1}$</span>

<p class="fragment">
Mais le champ gravitationnel a aussi<br>une autre unité plus physique : <span class="fragment">le <span class="imp">$\pu{m*s^-2}$</span>.</span>
</p>

---

{{< slide  background-image="/champG1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/champG2.png" background-size="contain" background-transition="concave">}}

---

Si une masse $M$ exerce un champ gravitationnel $\vec{\mathcal{G}}$<br>en un point P, alors une masse $m$ placée en P<br>subira la force :

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$\overrightarrow{F}=m\times \overrightarrow{\mathcal{G}}$
</div>

---

<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
Pour déterminer le vecteur champ gravitationnel en tout point, il suffit d'y placer une <span class="imp">masse-test<br>de 1 kg</span> et de calculer le vecteur force<br>qui s'exerce sur elle.
</span>

---

On sait maintenant mieux ce que<br>représente la pesanteur $\vec{g}$.

<p class="fragment">Il s'agit finalement du champ gravitationnel<br>créé par la Terre en un point de sa surface !</p>

{{%note%}}
Le prouver par le calcul.
{{%/note%}}

---

En prolongeant les vecteurs champ,<br>on obtient les <span class="imp">lignes de champ</span>.

<ul>
<li class="fragment">Jamais des lignes de champ ne se croisent !</li>
<li class="fragment">Les lignes de champ électrique<br>d'une charge positive sortent de la charge.</li>
<li class="fragment">Les lignes de champ électrique<br>d'une charge négative entrent dans la charge.</li>
<li class="fragment">Les lignes de champ gravitationnel<br>entrent dans la masse.</li>
</ul>

---

{{< slide  background-image="/lignesldc1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lignesldc2.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lignesldc3.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lignesldc4.png" background-size="contain" background-transition="concave">}}

---

{{<youtube DFIyXz6lO74>}}

---

{{< slide  background-image="/depcharges.gif" background-size="contain" background-transition="concave">}}

{{%/section%}}

{{%note%}}
https://www.youtube.com/watch?v=Y6YdC2UoDYY
https://www.youtube.com/watch?v=bOLd2KVK-Mo
{{%/note%}}



---

[Retour site](https://coursphychi.github.io/1spe/champs/)
