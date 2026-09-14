+++
title = "Photons"
outputs = ["Reveal"]
[reveal_hugo]
theme = "league"
highlight_theme = "atom-one-dark-reasonable"
+++


<style>
img {
border: none !important;
}

.imp {
font-weight:bold;color:#FF968D;
}

li {
color: #fff;
}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: outside;
color:#fff;
}

span {
font-weight:normal;
}

.video-container {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
}
</style>




# Décrire la lumière par un flux de photons

----

{{%section%}}

## Effet photoélectrique

---

Comme souvent, tout part d'une expérience.



<p class="fragment fade-up">En 1839, Antoine Becquerel et son fils Alexandre Edmond découvre l'<span class="imp">effet photoélectrique</span>.</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/oYnp0WZDhYQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%note%}}
Première lampe visible mais luminosité de fou (qu'il augmente au fur et à mesure)
Puis lampe noire (UVA probablement)
Puis lampe désinfection UVC. Lampe qui produit de l'ozone et nécessite de sortir de la salle !
Intensité du rayonnement = nombre de photons
Energie du rayonnement = fréquence de chaque photon
Augmenter l'intensité de la lumière blanche ne rend pas les photons plus énergétiques.
{{%/note%}}

---

{{< slide  background-image="/einsteinjeune.png" background-size="content" background-transition="concave">}}

<div style="text-align:left">
En 1905, Einstein explique l'effet<br>par une idée révolutionnaire :
<br>
<p class="fragment fade-up">la lumière serait constituée<br>de particules, les <span class="imp fragment">photons</span>.</p>
</div>


---

L'énergie d'un de ces "quantum" de lumière est <span class="imp">proportionnelle à la fréquence</span> de la lumière.

<p class="fragment fade-up">Et le coefficient de proportionnalité<br>est la <span class="imp">constante de Planck $h$</span>.</p>

---

Énergie $E$ d'un photon :


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px; font-size:1.3em;">
$$E = h\nu$$
</div>

<br>

<ul>
<li class="fragment fade-up"> $E$ en <b class="fragment" style="color:#FFF056">$\pu J$</b></li>
<li class="fragment fade-up">$\nu$ la fréquence en <b class="fragment" style="color:#FFF056">$\pu Hz$</b></li>
<li class="fragment fade-up">$h=\pu{6,63E-34}$<b class="fragment" style="color:#FFF056"> $\pu{J*s}$</b> </li>
</ul>



<p class="fragment fade-up imp">$h$ est la constante de Planck.</p>

---

Si la fréquence est au-dessus d'un certain seuil,<br>le photon a assez d'énergie pour éjecter un électron<br>du métal, créant l'effet observé.

<p class="fragment fade-up">Ce seuil correspond au travail d'extraction $W_\mathrm{ext}$ nécessaire pour extraire l'électron du métal.</p>

---


{{< slide  background-image="/effetpe2.png" background-size="contain" background-transition="concave">}}

---

À quelle allure de courbe s'attend-on si on trace l'énergie cinétique des électrons expulsés<br>en fonction de la fréquence de la lumière ?

---

{{< slide  background-image="/extract.png" background-size="contain" background-transition="concave">}}

<p style="text-align:right;">On doit avoir :</p>

<p class="fragment fade-up" style="text-align:right;">$\color{#FF968D}E_c$ $=$ <span class="fragment">$\color{#56C1FF}h\nu$</span> <span class="fragment">$-$</span> <span class="fragment">$\color{#61D836}W_\mathrm{ext}$</span><br>
</p>

<p class="fragment fade-up" style="text-align:right;">si <span>$\color{#56C1FF}h\nu$</span> <span>$>$</span> <span >$\color{#61D836}W_\mathrm{ext}$</span><br>
</p>

<p class="fragment fade-up" style="text-align:right;">et 0 sinon.<br>
</p>

---

{{< slide  background-image="/courbeextr.png" background-size="contain" background-transition="concave">}}

---

Cette théorie contredit fortement la vision classique.

<p class="fragment fade-up">Selon la théorie ondulatoire de la lumière admise jusqu'alors, l'énergie d'un flux lumineux n'est pas<br>sensée dépendre de la fréquence (de la couleur)<br>mais seulement de l'intensité.</p>

---

Le physicien américain Millikan est persuadé qu'Einstein se fourvoie totalement et met au point<br>une expérience pour détruire sa théorie.

---


{{< slide  background-image="/expmillik.png" background-size="contain" background-transition="concave">}}

{{%note%}}
La violence de la science...
{{%/note%}}

---

L'expérience consiste, pour différentes fréquences,<br>à trouver la tension minimale à appliquer<br>entre les deux plaques du condensateur plan<br>pour obtenir un courant nulle dans le circuit.

---

Si les électrons sortent de la cathode avec une certaine énergie cinétique, le courant ne pourra être nul que si le travail du champ électrique consomme totalement cette énergie avant que l'électron n'arrive à l'anode.

{{%note%}}
La cathode est toujours l'électrode d'où sortent les électrons ! C'est pour ça que c'est l'électrode de la réduction en chimie.
{{%/note%}}

---

Or d'après le TEC

<p class="fragment fade-up" style="text-align:left; margin-left:20vw;">$\color{#FF968D}\Delta E_c$ $=$ $W_\mathrm{cathode \rightarrow anode}(\vec{F}_e)$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:20vw;">$\phantom{\color{#FF968D}\Delta E_c}$ $=$ $\overrightarrow{F_{e}}\cdot\overrightarrow{CA}$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:20vw;">$\phantom{\color{#FF968D}\Delta E_c}$ $=$ $(-e)\times\overrightarrow{E}\cdot\overrightarrow{CA}$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:20vw;">$\phantom{\color{#FF968D}\Delta E_c}$ $=$ $\displaystyle -e \times \frac{U_\mathrm{CA}}{d} \times d$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:20vw;">$\phantom{\color{#FF968D}\Delta E_c}$ $=$ $-e \times U_\mathrm{CA}$</p>

---

On a bien un travail <span class="imp">résistant</span> si $U_\mathrm{CA}>0$. 

<p class="fragment fade-up">Et on souhaite :</p>

<p class="fragment fade-up">${\color{#FF968D} {E_c}_\mathrm{A}} = 0$</p>

<p class="fragment fade-up">On appelle $U_a$ la tension alors mesurée<br>(tension d'arrêt).</p>

---

On a donc : 

<p class="fragment fade-up" style="text-align:left; margin-left:25vw;">$\color{#FF968D} \Delta E_c$ $=$ $\color{#FF968D} {E_c}_\mathrm{A}$ $-$ $\color{#FF968D} {E_c}_\mathrm{C}$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:25vw;">$\phantom{ \Delta E_c}$ $=$  $-\color{#FF968D} {E_c}_\mathrm{C}$</p>

<p class="fragment fade-up" style="text-align:left; margin-left:25vw;">$\phantom{ \Delta E_c}$ $=$  $-e \times U_a$</p>


---

Or comme on l'a vu, d'après Einstein : 

<p class="fragment fade-up">${\color{#FF968D} {E_c}_\mathrm{C}}$ $=$ $\color{#56C1FF} h\nu$ $-$ $\color{#61D836}W_\mathrm{ext}$</p>

<p class="fragment fade-up">On s'attend donc à (si Einstein a raison) :</p>

<p class="fragment fade-up">${\color{#FF968D}e U_a} =  {\color{#56C1FF} h\nu} -  {\color{#61D836} W_\mathrm{ext}}$</span></p>

<p class="fragment fade-up">Et donc la courbe obtenue représentant $eU_a$ en fonction de la fréquence devrait ressembler à :</p>

---

{{< slide  background-image="/courbeextrus.png" background-size="contain" background-transition="concave">}}


---

Millikan s'attendait, lui, à obtenir une tension d'arrêt totalement indépendante de la fréquence comme<br>le prévoyait la théorie ondulatoire.


---

<a href="/millikan.html">Simulation de l'expérience de Millikan</a><br>

{{%note%}}
Autre simulation qui a inspiré celle du site :
https://applets.kcvs.ca/photoelectricEffect/PhotoElectric.html
{{%/note%}}

---

{{< slide  background-image="/einsteinlangue.png" background-size="contain" background-transition="concave">}}
Contrairement à son souhait premier,<br>l'expérience de Millikan a totalement<br>confirmé la théorie d'Einstein !

---

Il a obtenu une droite parfaite qui lui a permis<br>de déterminer la valeur de la constante de Planck<br>avec une précision inégalée à l'époque.

---

Conséquence :

<br>

<p class="fragment fade-up">Attribution du prix Nobel en 1921 à Einstein 🥳</p>

<br>

<p class="fragment fade-up">Mais aussi à Millikan en 1923 😅</p>

<p class="fragment fade-up">Cela illustre bien qu'une bonne expérience<br>n'est pas sensée donner raison à celui qui la mène<br>mais seulement permettre de trancher.</p>

{{%/section%}}

---

{{%section%}}

## Cellule photoélectrique

---

Une <span class="imp">cellule photoélectrique</span> est un dispositif photosensible tirant partie de l'effet photoélectrique :

<p class="fragment fade-up">une photocathode envoie des électrons sur une anode créant ainsi un courant électrique lorsqu'elle<br>est soumise à un rayonnement.</p>

---

{{< slide  background-image="/phototube.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

## Le photon

---

Le photon est une particule élémentaire qui est le <span class="imp">quantum d'énergie</span> associé aux ondes électromagnétiques

---

### Masse ?

<p class="fragment fade-up imp">0 kg</p>

<p class="fragment fade-up">($<\pu{10^−54 kg}$ expérimentalement)</p>

---

### Vitesse ?

<p class="fragment fade-up imp">$c=\pu{299 792 458 m*s-1}$</p>

<p class="fragment fade-up">dans le vide</p>

---

### Énergie ?

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$E=h\nu=h\frac{c}{\lambda}$$
</div>

{{%/section%}}

---

{{%section%}}

## Absorption et émission de photons

---

{{< slide  background-image="/absorptionemission.png" background-size="contain" background-transition="concave">}}

---

Comme les atomes, toutes les entités (molécules, ions, noyaux) ainsi que leurs assemblages (métaux, semi-conducteurs...) possèdent des niveaux d'énergie quantifiés, formant parfois des bandes d'énergies constituées de nombreux niveaux très proches.


---

Théorie des bandes :

<iframe width="800" height="450" src="https://www.youtube.com/embed/EWLgeBVY-08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

L'effet <span class="imp">photoélectrique interne</span> concerne<br>les isolants et les semi-conducteurs.

<p class="fragment fade-up">Il n'y a pas alors arrachage d'un électron du métal comme dans l'effet photoélectrique externe mais <span class="imp">promotion d'un électron de la bande de valence à la bande de conduction</span> après absorption d'un photon dont l'énergie est supérieur au gap.</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$h\nu≥E_\mathrm{gap}$$
</div>

---

Pour ces matériaux, le travail d'extraction<br>correspond donc à l'énergie du gap :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$W_\mathrm{ext} = E_\mathrm{gap}$$
</div>

---

{{< slide  background-image="/photint.png" background-size="contain" background-transition="concave">}}

---


Il y alors création d'une <span class="imp">paire électron-trou</span><br>qui augmente le nombre de porteurs de charge<br>et donc la conductivité électrique du matériau.<br>On parle de photocourant.



{{%/section%}}

---

{{%section%}}

## Applications

---

Beaucoup de dispositifs mettent en œuvre une interaction entre les photons et la matière.

---

### Conversion de lumière en signal électrique (Détection)

<br>

<ul>
<li class="fragment fade-up"><b style="color:#FFF056">Photodiodes et Phototransistors</b> :<br>
utilisent l'effet photoélectrique interne dans une jonction . Un photon d'énergie supérieure au gap ($h\nu>E_g$) crée une paire électron-trou, générant un photocourant.</li>
</ul>

{{%note%}}
Sortes d'interrupteurs sensibles à la lumière
{{%/note%}}

---

<ul>
<li><b style="color:#FFF056">Cellules Photovoltaïques</b> :<br>
similaires aux photodiodes, mais optimisées pour convertir l'énergie solaire en puissance électrique exploitable.</li>

<br>

<li class="fragment fade-up"><b style="color:#FFF056">Capteurs CCD et CMOS</b> :<br>
matrices de photodétecteurs silicium qui convertissent les photons en charges stockées dans des "puits de potentiel" pour former une image numérique.</li>
</ul>

---

<ul>
<li><b style="color:#FFF056">Photomultiplicateurs</b> :<br>
basés sur l'effet photoélectrique externe (émission de l'électron hors de la matière) suivi d'une cascade d'émissions secondaires pour amplifier le signal.</li>

<br>

<li class="fragment fade-up"><b style="color:#FFF056">Photorésistances (LDR)</b> :<br>
exploitent l'effet photoélectrique interne pour augmenter sa conductivité.</li>
</ul>


{{%note%}}
Bien qu'elles aient été largement remplacées par les composants à semi-conducteurs (photodiodes, CMOS) dans l'électronique de tous les jours, les cellules basées sur l'effet photoélectrique externe restent irremplaçables dans des domaines de pointe où la sensibilité extrême et la rapidité sont critiques :

1. Le Tube Photomultiplicateur (PMT)
C'est l'application la plus noble et la plus utilisée de l'effet externe aujourd'hui. Un photon frappe une photocathode (effet externe), et l'électron émis est accéléré vers une série de dynodes qui multiplient le signal par cascade.
•	Sensibilité extrême : Ils sont capables de détecter un photon unique. Le gain peut atteindre  ou , ce qui est bien supérieur à ce qu'une photodiode classique peut offrir sans un bruit de fond massif.
•	Utilisation :
•	Physique des particules : Dans les détecteurs de neutrinos (comme Super-Kamiokande) ou les calorimètres des accélérateurs.
•	Imagerie médicale : Les scanners PET (Positron Emission Tomography) utilisent des PMT pour détecter les rayons gamma.
•	Astronomie : Pour mesurer des flux lumineux extrêmement faibles provenant d'étoiles lointaines.

2. L'intensification de lumière (Vision nocturne)
Les jumelles de vision nocturne "analogiques" (tubes de génération 2 et 3) reposent entièrement sur l'effet externe.
•	Le mécanisme : La lumière résiduelle frappe une photocathode, les électrons émis sont multipliés par une galette de microcanaux (MCP), puis projetés sur un écran phosphorescent qui recrée l'image.
•	Avantage : Contrairement aux capteurs numériques (caméras de surveillance), ces tubes offrent une latence nulle et une gestion de la dynamique lumineuse souvent jugée supérieure par les forces spéciales et les pilotes de chasse.

3. La détection d'Ultraviolets (UV)
Les capteurs à semi-conducteurs (silicium) sont sensibles à tout le spectre, ce qui nécessite des filtres complexes pour isoler les UV.
•	Sélectivité : En choisissant judicieusement le matériau de la photocathode (effet externe), on peut fabriquer des tubes qui ne réagissent qu'aux UV (on les appelle "solar-blind").
•	Application : Détection de flammes, analyse de la couche d'ozone ou spectroscopie de laboratoire.
{{%/note%}}


---

Exemple d'utilisation d'une photorésistance<br>comme capteur de luminosité :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/circuitrev.png" style="box-shadow:none;background:none;">
</div>

{{%note%}}
Il faut U_{BC}>0,7V pour que le transistor devienne passant (courant possible entre l'émetteur et le collecteur). En effet, la jonction P-N entre la base et l'émetteur possède une tension de seuil intrinsèque.

Le circuit utilise un diviseur de tension :
U_{BE} = U_{pile}*R_{LDR}/(R_{LDR}+R_{pot})

En échangeant de place la LDR et la diode, on a une lampe de tiroir.
{{%/note%}}

---

### Conversion d'énergie en lumière (Émission)

<br>

<ul>
<li class="fragment fade-up"><b style="color:#FFF056">Diodes Électroluminescentes (LED)</b> :<br>
reposent sur la recombinaison radiative d'électrons et de trous au sein d'un semi-conducteur (émission spontanée).</li>
</ul>

---

<ul>
<li><b style="color:#FFF056">LASER (Light Amplification by Stimulated Emission of Radiation)</b>&nbsp;:<br>
exploite l'émission stimulée. Un photon incident incite un atome excité à émettre un second photon identique (même phase, direction et fréquence).</li>

<br>

<li class="fragment fade-up"><b style="color:#FFF056">Tubes à décharge et Lampes à vapeur spectrale</b>&nbsp;:<br>
excitation électronique d'un gaz (Néon, Mercure, Sodium) suivie d'une désexcitation radiative produisant un spectre de raies.</li>
</ul>

---

{{< slide  background-image="/schemlaser.png" background-size="contain" background-transition="concave" background-color="white">}}

---

Et une application familière à la chimie :

<br>


<h3 class="fragment fade-up">Spectroscopie UV-Visible et IR</h3>


{{%/section%}}

---

{{%section%}}

## Rendement d'une cellule photovoltaïque

---

<iframe width=800 height=509 src="https://www.edumedia-sciences.com/fr/media/frame/945/?auth=71677486d928cc2aaa2dfe8768008130/27824" frameborder=0></iframe>

---

Schéma électrique du montage permettant de tracer<br>la caractéristique d'une cellule photovoltaïque :

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/circcaract.png" style="box-shadow:none;background:none;">
</div>


---

Une modélisation d'une cellule photovoltaïque carrée de côté 6 pouces (15,6 cm) donne les <span class="imp">caractéristiques $I=f(U)$</span> suivantes pour différentes irradiances (puissances rayonnées par unité de surface) :

---

<iframe 
    src="/caract.html" 
    width="100%" 
    height="600px" 
    frameborder="0" 
    scrolling="no"
    style = "border-radius:10px;">
</iframe>

---

On sait d'autre part que la puissance électrique<br>est donnée par la formule :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">

$$P=U\times I$$

</div>

<br>

<p class="fragment fade-up">On obtient alors le graphique suivant<br>à partir du premier :</p>


---



<iframe 
    src="/puissancephoto.html" 
    width="100%" 
    height="600px"
    frameborder="0" 
    scrolling="no"
    >
</iframe>

---

Pour connaître la puissance lumineuse $P_\mathrm{lum}$<br>reçue par la cellule, on multiplie l'irradiance<br>par la surface $S$ de la cellule :


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FFF;padding:0 50px 0 50px;border-radius:10px">
$$P_\mathrm{lum} = I\times S$$
</div>

---

Le <span class="imp">rendement $\eta$</span> de la cellule est alors défini comme<br>le rapport entre la puissance électrique maximale que peut délivrée la cellule (pour une irradiance donnée) sur la puissance lumineuse reçue<br>(pour cette même irradiance) :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\eta=\frac{P_\mathrm{utile}}{P_\mathrm{reçue}}=\frac{P_\mathrm{max}}{P_\mathrm{lum}}$$
</div>

---

{{< slide  background-image="/chainephoto.png" background-size="contain" background-transition="concave">}}

---

Dans notre modélisation,<br>on trouve $\eta=$<span class="fragment">$18,\\!5\\%$</span> pour $\pu{1000 W*m-2}$.



<p class="fragment fade-up"><u>Rq 1</u> : Le rendement n'est pas constant, il dépend<br>de l'éclairement et de la température.</p>



<p class="fragment fade-up"><u>Rq 2</u> : Les rendements typiques sont inférieurs à 25%.</p>


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/photons/)