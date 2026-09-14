+++
title = "Diffraction et interférences"
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


# Diffraction et interférences

---

{{%section%}}

## Signature du caractère ondulatoire

---

Quels indices expérimentaux témoignent-ils<br>de la nature ondulatoire d'un phénomène ?

<ul>
<li class="imp fragment">la diffraction</li>
<li class="imp fragment">les interférences</li>
</ul>


---

{{< slide  background-image="/diffrcote.jpeg" background-size="contain" background-transition="concave">}}


---

<img src="https://www.physicsforums.com/attachments/img_2915-jpg.99220/" style="border-radius:15px">

---

{{< slide  background-image="https://live.staticflickr.com/8699/17050189981_b17e1b90e4_z.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://cdn.pixabay.com/photo/2020/01/26/16/45/lake-4795169_1280.jpg" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/cdinterf.jpeg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/9/94/Reflection_in_a_soap_bubble_edit.jpg" background-size="contain" background-transition="concave">}}


{{%note%}}
Le phénomène d'iridescence est du aux interférences sur des couches de fines épaisseurs (Fabry-Perrot)
{{%/note%}}

---

{{< youtube-slide id="f7F9KhiCyWM" ratio="16x9" start="7">}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Diesel_fuel_on_wet_asphalt_mj1.jpg/1920px-Diesel_fuel_on_wet_asphalt_mj1.jpg" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="https://sciencedemonstrations.fas.harvard.edu/sites/g/files/omnuum7861/files/science-demonstrations/files/thinfilminterference-freeze-top-2.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/papillondiffr.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/6/63/Rainbow_boa_peruvian.jpg" background-size="contain" background-transition="concave">}}

{{%note%}}
Boa arc-en-ciel péruvien
{{%/note%}}


---

{{< slide  background-image="/nacre.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/paon.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

## Diffraction

---

La <span class="imp">diffraction</span> d'une onde correspond à l'<span class="imp">étalement<br>des directions de propagation</span> lorsque l'onde rencontre un <span class="imp">obstacle</span> ou une <span class="imp">ouverture</span>.


<p class="fragment fade-up">L'étalement est d'autant plus marqué que<br>l'obstacle ou l'ouverture sont petits.</p>

<p class="fragment fade-up">La fréquence $f$ et la célérité $c$ de l'onde, et donc<br>sa longueur d'onde $\lambda=c/f$ sont conservées.</p>

---

{{< slide  background-iframe="/diffr.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Le phénomène de diffraction est nettement observé lorsque la <b style="color:#56C1FF">taille caractéristique $a$ de l'obstacle ou de l'ouverture</b> est du <span class="imp">même ordre de grandeur</span> que<br><b style="color:#FFF056">la longueur d'onde $\lambda$ de l'onde</b>.

<p class="fragment fade-up">
Dans le cas d'ondes lumineuse, le critère est moins restrictif et le phénomène est encore apparent pour<br>des tailles $a$ jusqu'à 100 fois plus grandes que $\lambda$.
</p>

---

La diffraction est caractérisée par<br>un <span class="imp">angle de diffraction</span> défini comme<br>l'angle entre la direction de propagation<br>sans diffraction et la direction définie<br>par le milieu de la "première extinction".

---

{{< slide  background-image="/dispdiffr.png" background-size="contain" background-transition="concave">}}

---

Dans le cas de la diffraction d'une onde lumineuse monochromatique de longueur d'onde $\lambda$ (produite par un laser) par une fente rectangulaire de largeur $a$, l'angle caractéristique de diffraction $\theta$ est donné par :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px;font-size:1.2em;">
$$\theta\approx\frac{\lambda}{a}$$
</div>

---

<ul>
<li>$\lambda$ en $\pu{m}$</li>
<li>$a$ en $\pu{m}$</li>
<li>$\theta$ en <span class="imp fragment">$\pu{rad}$</span></li>
</ul>

---


<ul>
<li>
Pour une longueur d'onde fixée :<br>
$a \searrow\;\; \Rightarrow \;\;$<span class="imp">$\theta$</span> <span class="fragment imp">$\nearrow$</b>
</li>

<br>

<li class="fragment fade-up">Pour une taille $a$ fixée :<br>
$\lambda \nearrow\;\; \Rightarrow \;\;$<span class="imp">$\theta$</span> <span class="imp fragment">$\nearrow$</span></li>
</ul>

---

Dans l'approximation des petits angles ($\theta\ll 1$), exprimer la taille de la tâche centrale $L$<br>en fonction de $\lambda$, $D$ et $a$.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/dispdiffr.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">
$$L\approx \frac{2\lambda D}{a}$$
</p>

---

<p style="color:#61D836;">Démonstration :</p>

<p class="fragment fade-up" style="color:#61D836;">$$\tan\theta = \frac{L/2}{D}$$</p>

<p class="fragment fade-up" style="color:#61D836;">Or d'après l'approximation des petits angles :<br>
$\tan\theta \approx \theta$ (⚠️ valable qu'en radians)
</p>

<p class="fragment fade-up" style="color:#61D836;">D'où :</p>

<p class="fragment fade-up" style="color:#61D836;">
$$\theta\approx \frac{L}{2D}$$<br>
</p>

---

<p style="color:#61D836;">Et comme $\theta=\frac{\lambda}{a}$, on obtient finalement :</p>

<p class="fragment fade-up" style="color:#61D836;">
$$\displaystyle\frac\lambda a \approx \frac{L}{2D}$$
</p>

<p class="fragment fade-up" style="color:#61D836;">
$\displaystyle\Rightarrow L \approx \frac{2D\lambda}{a}$
</p>

---

Exemples de conséquences concrètes :

<p class="fragment fade-up">l'onde diffractée peut atteindre des endroits qui<br>seraient inaccessibles sans l'étalement<br>des directions de propagation.</p>

<p class="fragment fade-up">Un son diffracté par l'entrebâillement d'une porte peut ainsi être entendu dans toute la pièce et un bateau<br>peut subir la houle même à l'abri d'une digue.</p>

---

{{< slide  background-image="/diffrplage.jpg" background-size="contain" background-transition="concave">}}


---


La figure de diffraction nous renseigne sur la forme géométrique de l'obstacle qu'a rencontré l'onde !

---

{{< slide  background-image="/diffrsspixel.png" background-size="contain" background-transition="concave" >}}

---

Un grand nombre de structures de protéines ont ainsi été déterminées par diffraction (on cristallise d'abord la protéine puis on envoie le rayonnement dans le cristal)

---

{{< slide  background-image="https://www.pnas.org/cms/10.1073/pnas.2411135121/asset/5b29f526-fefe-45d9-bfc9-395f107f09c4/assets/images/large/pnas.2411135121fig01.jpg" background-size="contain" background-transition="concave">}}

---

Quel doit être l'ordre de grandeur<br>de la longueur d'onde à utiliser ?

À quelle partie du spectre électromagnétique appartient le rayonnement ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="/spectrex.png" style="box-shadow:none;background:none;">
</div>


---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/en/b/b2/Photo_51_x-ray_diffraction_image.jpg" background-size="contain" background-transition="concave">}}

{{%note%}}
Crick et Watson ont eu le prix Nobel mais les données pour leur modèle et en particulier la fameuse photo 51 (une des plus célèbres de la science) sont à attribuer à Franklin morte à 37 ans et donc oublié du prix Nobel. Elle avait, avant eux l'idée d'une structure hélicoïdale.
{{%/note%}}

---

C'est une diffraction aux rayons X qui a<br>permis de découvrir (grâce à Rosalind Franklin)<br>la structure en double hélice de l'ADN.

---

Enfin, la tâche de diffraction correspondant à l'ouverture d'un télescope ou d'une lunette donne<br>la résolution ultime atteignable par l'appareil.

<p class="fragment fade-up"><span class="imp">$\Rightarrow$ Plus l'ouverture est large, plus il est résolu.</span></p>

---

Moins fondamental mais intéressant :

<p class="fragment fade-up">la forme des miroirs et des tiges tenant le miroir secondaire expliquent les aigrette sur les images d'étoile prises par Hubble ou Webb.</p>

---

{{< slide  background-image="https://cdn.northropgrumman.com/-/jssmedia/Project/Northrop-Grumman/ngc/space/james-webb-space-telescope-jwst/Image-from-James-Webb-Space-Telescope-JWST-018.jpg?mw=3840&rev=5f5f9ad822fe4b8d98bedcf1a76f9fd4" background-size="contain" background-transition="concave">}}

---

{{< youtube-slide id="jqzevHm6nFA" ratio="16x9" >}}

---


{{< slide  background-image="/webbdiffr0.png" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="/webbdiffr1.png" background-size="contain" background-transition="concave" >}}

---

<a href="https://esawebb.org/images/comparisons/weic2216/" target="blank">Comparaison Hubble/Webb</a>

---

{{< slide  background-image="/webbdiffr2.png" background-size="contain" background-transition="concave" >}}

---


{{< slide  background-image="/webbdiffr3.png" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="/webbdiffr4.png" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="https://c02.purpledshub.com/uploads/sites/41/2022/07/Diffraction-spikes-from-the-JWST-8c138ca.jpg?webp=1&w=1200" background-size="contain" background-transition="concave">}}

{{%/section%}}


---

{{%section%}}

## Interférences de deux ondes

---

Lorsque deux ondes se rencontrent en un point,<br>leurs amplitudes en ce point <span class="imp">s'additionnent</span>.

<p class="fragment fade-up">Il n'y a pas d'interaction, chaque onde évoluant indépendamment l'une de l'autre, mais il y a <span class="imp">superposition</span> des perturbations.</p>

---

{{< slide  background-video="/interf.mp4" background-size="contain" background-transition="concave" background-interactive="true">}}

---

<iframe width=800 height=640 src="https://www.edumedia.com/media/frame/fr/244/?auth=b73f310a7e1e909b5e75d9d31bf30a5d/75935" frameborder=0 style="border-radius:10px;"></iframe>

---

{{< slide  background-image="/ripples.jpg" background-size="contain" background-transition="concave">}}

---

{{< youtube-slide id="b87QZtYKmqo" ratio="16x9" >}}

---

Conditions d'observation :

<br>

<ul>
<li class="fragment fade-up">les ondes doivent être <b style="color:#56C1FF">de même nature</b> ;</li>
<li class="fragment fade-up">les sources doivent être <b style="color:#FFF056">synchrones</b><br>= de même fréquence ;</li>
<li class="fragment fade-up">les sources doivent être <b style="color:#FF95CA">cohérentes</b><br>= le retard du signal émis par l'une<br>par rapport à l'autre reste constant<br>(= déphasage constant) </li>
</ul>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;">
<img src="/incoherentes.png" style="box-shadow:none;background:none;">
</div>

---

Deux signaux sont dit <span class="imp">en phase</span> s'ils coïncident<br>(les extrema se correspondent).

<p class="fragment fade-up">Si en un point, les signaux des deux ondes sont en phase, on dit que <span class="imp">l'interférence est constructive</span>.

---

Deux signaux sont dit <span class="imp">en opposition de phase</span><br>si les maxima de l'un correspondent aux minima<br>de l'autre (il y a un déphasage de π ou 180°).

<p class="fragment fade-up">Si en un point, les signaux des deux ondes sont<br>en opposition de phase, on dit que<br><span class="imp">l'interférence est destructive</span>.

---

Supposons que les oscillations issues<br>de deux sources <span style="color:#56C1FF;">S<sub>1</sub></span> et <span style="color:#FF968D;">S<sub>2</sub></span> soient en phase.

<p class="fragment fade-up">Un récepteur est placé en un point <span style="color:#FFF056;">M</span>.</p>

<p class="fragment fade-up">
L'onde issues de <span style="color:#56C1FF;">S<sub>1</sub></span> parcourt donc une distance $\color{#56C1FF}\mathrm{S_1M}$<br>
et celle issue de <span style="color:#FF968D;">S<sub>2</sub></span> parcourt une distance $\color{#FF968D} \mathrm{S_2M}$.
</p>

<p class="fragment fade-up">Appelons enfin $\color{#61D836}\delta$ la différence entre ces deux distances.</p>

---

{{< slide  background-image="/scheminterf.png" background-size="contain" background-transition="concave">}}

---

La condition pour observer une interférence constructive en M est que la différence entre<br>les distances parcourues sur chacun des chemins<br>(${\color{#61D836}\delta}=\mathrm{{\color{#FF968D}S_2M}-{\color{#56C1FF}S_1M}} $) induise un déphasage <br>valant un multiple de 2π.

<!--
<p class="fragment fade-up">
$\displaystyle2\pi\times \frac{\delta}{\lambda}= k\times 2\pi\;,\; k\in\mathbb{Z}$
</p>
-->

---

On en déduit la condition pour obtenir<br>en un point une <span class="imp">interférence constructive</span> :

<br>

<div  class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 0px 50px;border-radius:10px">
$$\frac{\delta}{\lambda} = k \;,\; k\in\mathbb{Z}$$
</div>

<br>

<p class="fragment fade-up">Autrement dit, la distance supplémentaire parcourue sur le chemin le plus long doit être un multiple<br>de la longueur d'onde.</p>

---

Et pour des interférences destructives, il faut :

<!--
<p class="fragment fade-up">
$$
\begin{aligned}
2\pi\frac{\delta}{\lambda}&=\pi + k\times 2\pi\\
&=2\pi\times\left(k+\frac{1}{2}\right)
\end{aligned}
$$
<p>
-->

<div  class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0px 50px 0px 50px;border-radius:10px">
$$ \frac{\delta}{\lambda} = \left(k+\frac12\right) \;,\; k\in \mathbb{Z}$$
</div>

<p class="fragment fade-up">
La distance supplémentaire doit valoir<br>un nombre impair de demi-longueurs d'onde.
</p>

---

{{< geogebra-slide id="p97kmweq" maxheight="580" rounded="true" shadow="true" >}}


---

L'entier $k$ est appelé <span class="imp">ordre d'interférence</span>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/ordreinterf.png" style="box-shadow:none;background:none;">
</div>

---

Dans le cas de l'expérience optique des <span class="imp">trous d'Young</span> (ou des fentes d'Young), les deux trous éclairés par<br>la source lumineuse agissent ensuite comme<br>deux sources <b style="color:#FFF056">synchrones</b> et <b style="color:#FF95CA">cohérentes</b><br>séparées d'une distance $a$.

---

On doit maintenant prendre en compte l'éventuel ralentissement de la lumière dans un milieu d'indice optique $n$, la différence de distance $\mathrm{S_2M-S_1M}$  prend alors le nom de <span class="imp">différence de chemin optique</span><br>$\mathrm{[S_2M]-[S_1M]}=n\times(\mathrm{S_2M-S_1M})$.

---

{{< slide  background-image="/troudyoung.png" background-size="contain" background-transition="concave">}}

---

Si la distance $D$ entre les trous et l'écran est<br>telle que $D\gg a$, alors la différence de chemin optique en un point de l'écran d'abscisse $x$ est approximée par :

$$\delta=\frac{nax}{D}$$

<p class="fragment fade-up">En déduire l'abscisse $x_k$ sur l'écran<br>où apparaît la $k$<sup>e</sup> frange brillante.</p>

---

<p style=color:#61D836;">
D'après la condition d'interférence constructive :
</p>

<p class="fragment fade-up" style=color:#61D836;">
$$
\delta = k\lambda\quad \text{avec } k\in\mathbb{Z}
$$
</p>



<p class="fragment fade-up" style=color:#61D836;">
$$
\Rightarrow x_k=\frac{k\lambda D}{na}
$$
</p>


<p class="fragment fade-up">Et pour les franges sombres ?</p>

<p class="fragment fade-up" style=color:#61D836;">
$$
x'_k=\frac{(k+\frac12)\lambda D}{na}
$$
</p>


---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FFF056;padding:20px 50px 30px 50px;border-radius:10px">
L'<b style="color:#FFF056">interfrange $i$</b> sur l'écran est définie comme<br>la distance entre le centre de deux franges brillantes (ou de deux franges sombres) consécutives.
</div>

<br>

<p class="fragment fade-up">Établir l'expression de l'<b style="color:#FFF056">interfrange $i$</b>.</p>

---

<b style="color:#FFF056">
$$
\begin{aligned}
i &= x_{k+1}-x_k\\
&=\frac{(k+1)\lambda D}{na}-\frac{k\lambda D}{na}\\
&=\frac{\lambda D}{na}
\end{aligned}
$$
</b>

<br>

<ul>
<li class="fragment fade-up">Si $\lambda\nearrow$, <b style="color:#FFF056">$i$</b> <b class="fragment" style="color:#FFF056">$\nearrow$</b></li>
<li class="fragment fade-up">Si $a\nearrow$, <b style="color:#FFF056">$i$</b> <b class="fragment" style="color:#FFF056">$\searrow$</b></li>
<li class="fragment fade-up">Si $D\nearrow$, <b style="color:#FFF056">$i$</b> <b class="fragment" style="color:#FFF056">$\nearrow$</b></li>
<li class="fragment fade-up"><b style="color:#FFF056">$i$</b> est <span class="fragment">indépendante</span> de<br>l'ordre d'interférence $k$</li>
</ul>


{{%note%}}
D'après le programme :
Prévoir les lieux d’interférences constructives et les lieux d’interférences destructives dans le cas des trous d’Young, l’expression linéarisée de la différence de chemin optique étant donnée. 
Établir l’expression de l’interfrange.
{{%/note%}}

---

{{< slide  background-iframe="/interf.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Conséquences pratiques :

<ul>
<li class="fragment fade-up">casques/écouteurs à réduction de bruit active</li>

---

{{< youtube-slide id="bc1Z1ck9hKQ" ratio="16x9" >}}


{{%note%}}
Casque anti-bruit actif
{{%/note%}}

---

- couleurs interférentielles


{{%note%}}
L'iridescence pour les oiseaux est due au très faible écartement des barbules
{{%/note%}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ibis_chauve.JPG/1920px-Ibis_chauve.JPG" background-size="contain" background-transition="concave">}}


{{%note%}}
Ibis chauve
{{%/note%}}


---

- interférométrie

<p class="fragment fade-up">Utilisée en astronomie, métrologie,<br>océanographie, séismologie, etc.<br>
<a href="https://coursphychi.github.io/act-volcan.pdf">cf. exercice "interférométrie et volcan"</a></p>

<p class="fragment fade-up">Et dans de nombreuses expériences scientifiques (comme celle de Michelson et Morley<br>à la fin du 19<sup>e</sup> siècle)</p>

---

{{< slide  background-image="https://public.nrao.edu/wp-content/uploads/2016/04/vla_panorama_med-1.jpg" background-size="contain" background-transition="concave">}}

---


Grâce à l'interférométrie, un réseau de télescopes ou radiotélescopes atteint une résolution équivalente<br>à celle d'un miroir (ou radiotélescope) de diamètre équivalent à l'écart entre les instruments combinés.

---

{{< youtube-slide id="dMJNWeE3kbs" ratio="16x9" start="4">}}


[Pour aller plus loin sur les télescopes](https://www.canal-u.tv/chaines/cerimes/l-interferometrie-au-service-de-l-astronomie)

{{%note%}}
Attention, il bug sur le lien entre l'ouverture et la résolution via la tâche d'Airy. Il parle d'interférences alors qu'il s'agit de diffraction !
{{%/note%}}

---

La détection des ondes gravitationnelles<br>utilise aussi l'interférométrie.

<a href="https://coursphychi.github.io/act-ondesgrav.pdf">cf. exercice "interféromètre gravitationnel"</a></p>

<p class="fragment fade-up">
<a href="https://www.ligo.caltech.edu/video/ligo20160211v2">La première détection a un poil plus de 10 ans</a>.<br>et elle s'est faite grâce à un interféromètre<br>ayant des bras de 4 km de long !
</p>

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/VirgoDetectorAerialView.jpg/1920px-VirgoDetectorAerialView.jpg" background-size="contain" background-transition="concave">}}

---

Enfin, si on décale légèrement la fréquence des sources, on observe non plus seulement des franges dans l'espace mais aussi dans le temps. 

<p class="fragment fade-up">On les appelle <span class="imp">battements</span>. On les utilise par<br>exemple pour accorder les instruments.</p>

---

{{< youtube-slide id="_bV_mEakQ7o" ratio="short" >}}


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/diffr/)