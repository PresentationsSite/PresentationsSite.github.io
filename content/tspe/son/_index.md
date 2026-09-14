+++
title = "Onde sonore"
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


# Ondes sonores

---

{{%section%}}

## Rappels

---

Une onde est caractérisée par<br><span class="fragment"><span class="imp">un transport d'énergie et d'information<br>sans transport de matière</span>.</span>

---

L'onde sonore est une onde <span class="imp fragment">mécanique</span> car elle nécessite un <span class="imp fragment">milieu matériel</span> pour se propager.

---

L'onde sonore est<br>une onde <span class="imp fragment">longitudinale</span><br>car la perturbation se fait<br><span class="imp fragment">dans la même direction</span><br>que sa propagation.

---

{{< slide  background-image="/animsonrond.gif" background-size="contain" background-transition="concave" background-color="#191919">}}

---

Un son musical est un signal<br><span class="imp fragment">périodique</span> caractérisé par :

<ul>
<li class="fragment fade-up"><b style="color:#61D836">sa hauteur</b> (liée à <b class="imp fragment" style="color:#61D836">la fréquence</b> du signal),</li> 
<li class="fragment fade-up"><b style="color:#FFD932">son intensité</b> (liée à <b class="imp fragment" style="color:#FFD932">l'amplitude</b> du signal),</li>
<li class="fragment fade-up"><b style="color:#56C1FF">son timbre</b> (lié au <b class="imp fragment" style="color:#56C1FF">spectre</b> du signal).</li>
</ul>

{{%/section%}}

---

{{%section%}}

## Intensité sonore

---

L'<span class="imp">intensité sonore $I$</span> (ou intensité<br>acoustique) est la <span class="imp">puissance $P$</span><br>transportée par l'onde sonore<br><span class="imp">par unité de surface</span>.

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$I=\frac{P}{S}$$
</div>

<br>

<ul>
<li class="fragment fade-up">$P$ en <span class="imp fragment">$\pu{W}$</span></li>
<li class="fragment fade-up">$S$ en <span class="imp fragment">$\pu{m2}$</span></li>
<li class="fragment fade-up">$I$ en <span class="imp fragment">$\pu{W*m-2}$</span></li>
</ul>

<p class="fragment fade-up">La surface doit être perpendiculaire<br>à la direction de propagation.</p>


---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/d/d1/RIAN_archive_38689_Defending_the_Moscow_sky.jpg" background-size="contain" background-transition="concave">}}

{{%note%}}
“Defending the Moscow sky”. Soviet soldiers manning an acoustic aircraft detector near Moscow, in 1941 during World War 2, to detect German bombers. Before radar was developed in World War 2, air defense forces used acoustic horn sound detectors like this one to listen for the sound of approaching enemy planes. The sound collected by the horns was conducted by rubber tubes to "stethoscope-like" earphones on the technician at left. Separate horns connected to each ear allowed the technician to judge the direction of the aircraft by stereophonic hearing. The 4 horns were used in pairs; the horizontal pair to determine direction and the vertical pair to determine elevation.
{{%/note%}}

---

{{< slide  background-image="/trompettesint.png" background-size="contain" background-transition="concave">}}

L'intensité sonore<br>est additive :

<p class="fragment fade-up">s'il y a 2 ou 10 fois plus de sources<br>sonores (de même puissance),<br>l'intensité (à la même distance)<br>est multipliée par 2 ou 10.</p>

---

Mais notre sensation auditive ne semble pas, elle, proportionnelle au nombre de sources.

<p class="fragment fade-up">C’est cette non proportionnalité qui permet<br>
d’avoir une plage de sensibilité si étendue :</p>

<ul>
<li class="fragment fade-up">le seuil d'audibilité à $\pu{1 kHz}$, appelé <span class="imp">intensité sonore de référence $I_0$</span> vaut $\pu{1,0E-12 W*m-2}$.</li>
<li class="fragment fade-up">Le seuil de douleur est de l'ordre de $\pu{1 W*m-2}$.</li>
</ul>

<p class="fragment fade-up">Il y a un facteur <span class="imp">mille milliards</span> entre les deux 🤯</p>


---

Notre sensibilité est <span class="imp">logarithmique</span>.

<p class="fragment fade-up">
On peut par exemple mesurer que l'amplitude du son émis par quelqu'un qui parle fort est environ 10 000 fois plus grande que celle d'une personne<br>
qui chuchote à la même distance !
</p>

<p class="fragment fade-up">
On n'a pourtant pas la sensation<br>d'un son 10 000 fois plus fort... 
</p>

{{%note%}}
~30 dB pour chuchotement et 70dB voix parlé fort et ~60dB pour voix normal
{{%/note%}}

{{%/section%}}

---

{{%section%}}

## Point mathématique

---

$\log$ est la fonction logarithme décimal<br>(logarithme en base 10) :

<p class="fragment fade-up">
$$\log(x) = \frac{\ln(x)}{\ln(10)}$$
</p>

<p class="fragment fade-up">
On a ainsi $\log(10)=$ <span class="imp fragment">$1$</span>.
</p>

---

Les règles de calcul de $\log$<br>sont les mêmes
que celles de $\ln$ :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:50px;border-radius:10px">

<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li class="fragment fade-up">$\log(1)=$ <span class="imp fragment">$0$</span></li>
<li class="fragment fade-up">$\log(a{\color{#FF968D}\times} b)=$ <span class="fragment">$\log(a){\color{#FF968D}+}\log(b)$</span></li>
<li class="fragment fade-up">$\log(a{\color{#FF968D}\,/\,}b)=$ <span class="fragment">$\log(a){\color{#FF968D}-}\log(b)$</span></li>
<li class="fragment fade-up">$\log(a^{\color{#FF968D}n})=$ <span class="fragment">${\color{#FF968D}n}\log(a)$</span></li>
</ul>

</div>

---

La fonction réciproque du logarithme<br>décimal est la fonction <span class="imp fragment">$10^x$</span>.

<p class="fragment fade-up">Ainsi, si $\log(x)=b$</p>

<p class="fragment fade-up">Alors $x=$ <span class="imp fragment">$10^b$</span></p>


---

Le boulot de la fonction $\log$ est de fournir l'exposant d'un nombre écrit sous la forme d'une puissance de 10.

<p class="fragment fade-up">Exemples :</p>

<ul>
<li class="fragment fade-up">$\log(10^{\color{#FF968D} 7}) = $ <span class="imp fragment">$\;7$</span></li>
<li class="fragment fade-up">$\log(0,01) = $ <span class="fragment">$\;\log(10^{\color{#FF968D}-2})=$</span><span class="imp fragment">$\;-2$</span></li>
<li class="fragment fade-up">$\log(2) = $<span class="fragment">$\;\log(10^{\color{#FF968D}0,3})=$</span><span class="imp fragment">$\;0,3$ </span></li>
</ul>

{{%/section%}}

---

{{%section%}}

## Niveau d'intensité sonore

---

Le <span class="imp">niveau d'intensité sonore $L$</span> (pour "Level")<br>se mesure en <span class="imp">décibels (dB)</span> et est donné par la relation :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$L=10\log\left(\frac{I}{I_0}\right)$$
</div>

<p class="fragment fade-up">$I_0=\pu{1,0E-12 W*m-2}$<br>est l'<span class="imp">intensité sonore de référence</span></p>

---

{{< slide  background-image="/trompettesdb.png" background-size="contain" background-transition="concave">}}

Doubler l’intensité acoustique revient<br>
à <span class="imp fragment">ajouter 3 dB</span> au niveau sonore<br>
et multiplier l’intensité par 10<br>
<span class="imp fragment">ajoute 10 dB</span>.

---

Preuve :

<p class="fragment fade-up">
Si $\color{#61D836}I_t$ est l'intensité sonore d'une trompette,<br>
pour 2 trompettes, on a : ${\color{#FEAE00}I} = 2\times {\color{#61D836}I_t}$</p>
<p class="fragment fade-up">
Appelons $\color{#61D836}L_t$ le niveau sonore d'une trompette et cherchons le niveau sonore $\color{#FEAE00} L$ des 2 trompettes : 
</p>

---

<div style="font-size:0.9em;">

$$
\begin{aligned}
{\color{#FEAE00}L} &= 10\times \log\left(\frac{\color{#FEAE00}I}{I_0}\right)&\\\\
& = 10\times \log\left(\frac{2\times {\color{#61D836}I_t}}{I_0}\right)\\\\
& = 10\times \log\left(2\times\frac{ {\color{#61D836}I_t}}{I_0}\right)\\\\
&= 10\times\left(\log(2) + \log\left(\frac{\color{#61D836}I_t}{I_0}\right)\right)\\\\
&=10\times \log\left(\frac{\color{#61D836}I_t}{I_0}\right) + {\color{#FF95CA}10\times\log(2)}\\\\
& = {\color{#61D836}L_t} + \color{#FF95CA}\pu{3 dB}
\end{aligned}
$$

</div>


---

{{< slide  background-video="/trompettedbfort.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

{{< slide  background-image="/echelleidb.png" background-size="contain" background-transition="concave">}}

---

<iframe width="700" height="560" src="https://www.edumedia.com/media/frame/fr/155/?auth=51a8d1c53ced40fce13e3b1dccd9e62d/27824" frameborder="0" style="border-radius:5px;"></iframe>

{{%note%}}
Pour les tests audiométriques qui mesurent le degré de perte auditive, on utilise le dB HL (= hearing loss). Le dB HL tient compte de la variation de sensibilité de l'oreille humaine en fonction des fréquences (= hauteur des sons). Le 0 dB HL correspond ainsi, pour chaque fréquence testée, à l'intensité minimale perçue par la moyenne des personnes normo-entendantes.
{{%/note%}}

---

Comment obtenir l'intensité sonore $I$<br>à partir du niveau d'intensité sonore $L$ ?

<div class="fragment fade-up imp" style="font-size:1.2em;border:5px solid #FF968D;width:fit-content;border-radius:10px;margin:auto;padding:0 50px 0 50px;">
$$I=I_0\times 10^{\frac{L}{10}}$$
</div>

{{%/section%}}



---

{{%section%}}

## Atténuation

---

L'<span class="imp">atténuation</span> (en dB) mesure la diminution<br>du niveau d'intensité sonore.

<p class="fragment fade-up">Il y a deux types d'atténuation.</p>

{{%note%}}
Lesquelles ?
{{%/note%}}

{{%/section%}}

---

{{%section%}}

### Atténuation géométrique

---

Elle est due à l'<span class="imp">éloignement</span><br>entre la source et l'observateur.

<p class="fragment fade-up">En effet, <span class="imp">plus la source est éloignée</span> et <span class="imp">plus la surface</span> sur laquelle la puissance sonore se répartie <span class="fragment imp">est grande</span> et donc <span class="imp">plus l'intensité sonore</span> <span class="fragment imp">est faible</span>.</p>


---

Si la source est omnidirectionnelle (même intensité sonore dans toutes les directions), alors l'intensité sonore à une distance $d$ de la source se répartit sur<br><span class="fragment"><b style="color:#FFD932;">une sphère de rayon $d$</b> centrée sur la source.</span>

<p class="fragment fade-up">On a donc :</p>

<p class="fragment fade-up">
$$I=\frac{P}{\color{#FFD932}4\pi d^2}$$
</p>

---


{{< geogebra-slide id="fbyk36y6" maxheight="600" rounded="true" shadow="false" >}}

---

Conclusion :

<p class="fragment fade-up">L'intensité sonore varie <span class="imp fragment">inversement proportionnellement au carré<br>de la distance à la source</span>.</p>

---

Conséquences :

<br>

<ul>
<li class="fragment fade-up"><span class="imp">doubler la distance</span> divise l’intensité sonore<br>par <span class="fragment imp">4</span>, <span class="fragment">ce qui correspond à une <span class="imp">atténuation<br>de</span> <span class="imp fragment">6 dB</span> du niveau sonore.</span><br>
<span class="fragment">$d\rightarrow 2d\Rightarrow I\rightarrow I/4 \Leftrightarrow L\rightarrow L-6$</span>
</li>
<br>
<li class="fragment fade-up"><span class="imp">multiplier par 10 la distance</span> divise l’intensité<br>sonore par <span class="fragment imp">100</span>, <span class="fragment">ce qui correspond à une<br><span class="imp">atténuation de <span class="fragment imp">20 dB</span></span> du niveau sonore.</span><br>
<span class="fragment">$d\rightarrow 10d\Rightarrow I\rightarrow I/100 \Leftrightarrow L\rightarrow L-20$
</li>
</ul>



{{%/section%}}

---

{{%section%}}

### Atténuation par absorption

---

Le niveau d'intensité sonore d'une onde sonore rencontrant un obstacle est atténuée<br>car une partie de son <span class="imp">énergie est absorbée</span><br>par le milieu matériel composant l'obstacle. 

<p class="fragment fade-up">La proportion d'énergie absorbée dépend du <span class="imp fragment">matériau</span> composant l'obstacle et de <span class="imp fragment">l'épaisseur</span> de celui-ci.</p>

---

{{< slide  background-image="/abstransm.png" background-size="contain" background-transition="concave">}}


{{%note%}}
Dans le programme et les exercices du bac, on semble faire comme si la réflexion était absente...
{{%/note%}}

---

{{< slide  background-image="/bouchons.png" background-size="contain" background-transition="concave">}}

---

Pourquoi les bouchons moulés sont-ils<br>plus adaptés à des musiciens ?

{{%note%}}
Les bouchons en mousse modifie le timbre puisqu'ils n'atténuent pas toutes les fréquences de la même façon. Les harmoniques disparaissent.
Et ils atténuent trop de toute façon.
{{%/note%}}

---

{{< slide  background-video="/anechoique.mp4" background-size="contain" background-transition="concave">}}

{{%note%}}
Définition du temps de réverbération : temps au bout duquel le son perd 60 dB (en pratique dur à mesurer alors si on suppose la décroissance est linéaire on mesure le temps pour perdre 20 ou 30 dB et on multiplie le temps respectivement par 3 ou 2).
{{%/note%}}

<!--

---


{{< youtube-slide id="mVLKQWImJH8" ratio="16x9"  end="7:22">}}


{{%note%}}
Pour passer des Pa aux W/m^2 :
I = p_eff^2 / (rho\*c)
où p_eff est la pression acoustique efficace en Pa
rho est la masse volumique de l'air (1,2 kg/m^2 à 20°C) et c la célérité des ondes sonores (343 m/s à 20°C) (checker les dimensions).
rho*c = 415 kg/m^2/s dans l'air à pression et température ambiante.
Le seuil d'audition étant à 20 microPa = 2E-5 Pa, retrouver l'intensité sonore de référence : -> I = (2E-5)^2/415 = 1,0E-12 W/m^2
{{%/note%}}

-->

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/son/)