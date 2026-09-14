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

.short {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.short iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
}

.fragment.highlight-red.visible {
    color: #FF968D !important;
  }
</style>



# Modèles ondulatoire et particulaire<br>de la lumière

---


{{%section%}}

## Modèle ondulatoire

---

Indices expérimentaux de la nature<br>ondulatoire de la lumière :

<ul>
<li class="imp fragment">interférences</li>
<li class="imp fragment">diffraction</li>
</ul>

---

[Animations interactives](https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html?locale=fr)

---

{{< slide  background-image="/papillondiffr.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/cdinterf.jpeg" background-size="contain" background-transition="concave">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/WTxDyYHaYAI?si=Ga82EXtQjYQGlijg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<img src="https://www.physicsforums.com/attachments/img_2915-jpg.99220/" style="border-radius:15px">


---

{{< slide  background-image="/diffrtv.png" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="https://cdn.northropgrumman.com/-/jssmedia/Project/Northrop-Grumman/ngc/space/james-webb-space-telescope-jwst/Image-from-James-Webb-Space-Telescope-JWST-018.jpg?mw=3840&rev=5f5f9ad822fe4b8d98bedcf1a76f9fd4" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="https://c02.purpledshub.com/uploads/sites/41/2022/07/Diffraction-spikes-from-the-JWST-8c138ca.jpg?webp=1&w=1200" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/webbdiffr4.png" background-size="contain" background-transition="concave" >}}

---

Bref... La lumière peut donc<br>se comporter comme une onde.

Il s'agit d'une <span class="imp">onde électromagnétique</span> de célérité <span class="imp fragment">$c=\pu{3,0E8 m*s-1}$</span> dans le vide.


---

Et comme toute onde, on peut donc lui associer une <span class="imp">fréquence $\nu$</span> en (Hz) et une <span class="imp">longueur d'onde $\lambda$</span> (en m) liées entre elles par :

<div class="imp fragment" style="display: flex; justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$\displaystyle \lambda = \frac{c}{\nu}$
</div></div>

---

<ul>

<li>La fréquence <span class="fragment strike" data-fragment-index="1" >dépend</span> / <span class="fragment highlight-red" data-fragment-index="1" >ne dépend pas</span><br>du milieu de propagation.</li>

<br>

<li>La longueur d'onde <span class="fragment highlight-red" data-fragment-index="2" >dépend</span> / <span class="fragment strike" data-fragment-index="2" >ne dépend pas</span><br>du milieu de propagation.</li>

</ul>


---

Le <span class="imp">spectre électromagnétique</span><br>
s'étend des ondes radio aux rayons gamma :

<br>

<img src="/spectrewiki.png" style="background:none;box-shadow:none;">

---

{{< slide  background-image="/utilspectre.png" background-size="contain" background-transition="concave" >}}


{{%/section%}}

---

{{%section%}}

## Modèle corpusculaire

---

Deux observations expérimentales ne trouvent pas d'explication dans le modèle ondulatoire :

<ul>
<li class="imp fragment">le rayonnement du corps noir</li>
<li class="imp fragment">l'effet photoélectrique</li>
</ul>

---

{{< slide  background-image="/black_body.png" background-size="contain" background-transition="concave" >}}

{{%note%}}
Planck, en 1900, introduit l'idée d'un quantum d'énergie indivisible pour expliquer l'allure du rayonnement du corps noir.
L'échange d'énergie entre le rayonnement et la matière se ferait par petits paquets à l'énergie proportionnelle à la fréquence.
{{%/note%}}

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


En 1905, Einstein explique l'effet<br> en généralisant l'idée de Planck au rayonnement<br>lui-même (et non plus seulement aux échanges).<br>La lumière serait constituée de petits paquets ;<br>les <span class="imp">photons</span>.


---

Le <span class="imp">photon</span> est une particule de lumière sans masse voyageant à $c$ qui transporte une énergie :


<div class="imp fragment" style="display: flex; justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$E = h\times \nu$
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
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
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

{{%note%}}
Approfondissement de l'effet photoélectrique en Tspé
{{%/note%}}

{{%/section%}}

---

{{%section%}}

## Quantification des niveaux<br>d'énergie des atomes

---

{{%youtube 9Uf_LNULgeo%}}

---

Les niveaux d'énergie d'un atome sont <span class="imp">quantifiés</span>.

Le niveau le plus bas est appelé le <span class="imp">fondamental</span> et<br>les niveaux plus hauts en énergie sont dits <span class="imp">excités</span>.

---

{{< slide  background-image="/niveauxenergie.png" background-size="contain" background-transition="concave" >}}

---


Pour sauter d'un niveau d'énergie à l'autre,<br>l'électron doit absorber (s'il monte) ou émettre<br>(s'il descend) un photon dont l'énergie $h\nu$<br>correspond à la différence d'énergie<br>$\Delta E$ entre les deux niveaux :

<div style="display: flex; justify-content: center;">
<div style = "border:solid #FF968D 5px; padding: 20px 20px 30px 20px; border-radius: 20px;">
<span class="imp">$|\Delta E| = h\nu$</span>
</div></div>

---

{{< slide  background-image="/absemission.png" background-size="contain" background-transition="concave">}}

---

[Simulation des niveaux d'énergie d'un atome](https://www.geogebra.org/m/kMx37ken)

---

{{< slide  background-image="/exoniveaux.png" background-size="contain" background-transition="concave" >}}

<div style="text-align:left">
<u>Exemple d'exercice :</u>

Quelle est la couleur du photon émis<br>par la transition électronique ci-contre ?

Données :
- $\pu{1 eV}=\pu{1,60E-19 J}$
- $h=\pu{6,63E-34 Js}$
</div>


---


Les niveaux d'énergie quantifiés permettent d'expliquer les spectres discrets !


---

{{< slide  background-image="/3spectres.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lampedecharge.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/spectres3elements.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="https://www.physik.uni-konstanz.de/fileadmin/physik/vorlesungsdemonstrationen/fileserver/Atome%20und%20Quanten/vle-155_Na-Doppellinie_2K.mp4" background-size="contain" background-transition="concave">}}

---

{{%youtube 7u3rRy97m9Y%}}

{{%note%}}
On retrouve souvent ce spectre dans les flammes (surtout près de la mer)
{{%/note%}}

---

{{< slide  background-image="/spectresodium.png" background-size="contain" background-transition="concave">}}

---

<div class="short">
  <iframe src="https://www.youtube.com/embed/uUGzrS5tpLc?si=bCgnMbYAtIOeSrnp"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>

---

{{%youtube 0ijsRfsilQ4%}}

{{%note%}}
Insister qu'il ne faut surtout pas reproduire cette expérience. Très dangereux.
Pourquoi les deux vis à l'intérieur du cornichon ne doivent pas se toucher ?
Recette de certains cornichons : concombre + saumure.
Devient une lampe à vapeur de sodium (comme une partie de l'éclairage publique).
Au final, on a dans le cornichon un 4e état de la matière : le plasma.
{{%/note%}}

---

Pourquoi à votre avis le cornichon<br>présente le spectre du sodium ?

---


{{< slide  background-image="https://wp.optics.arizona.edu/oscoutreach/wp-content/uploads/sites/75/2018/04/Pickle.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/Fraunhofer_lines.png" background-size="contain" background-transition="concave">}}


Spectre du Soleil vu depuis la Terre.
<br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/irradiance.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Dualité onde-corpuscule

---

<iframe width="700" height="500" src="https://www.youtube.com/embed/I9Ab8BLW3kA?si=GR9rnNjAGDv6ODfy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/photon/)
