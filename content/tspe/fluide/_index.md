+++
title = "Écoulement"
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



# Modéliser l'écoulement<br>d'un fluide

---

{{%section%}}

## Fluide incompressible

---

Un <span class="imp">fluide</span> est un <span class="imp">liquide</span> ou un <span class="imp">gaz</span>.

<p class="fragment fade-up">
Un <span class="imp">fluide incompressible</span> est un fluide<br>dont la <span class="imp">masse volumique</span> est <span class="imp">constante</span>.
</p>

<div class="imp fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px;font-size:1.2em;">
$$\rho=\mathrm{cste}$$
</div>

---

Le modèle nécessite une température<br>constante et homogène dans le fluide. 

<p class="fragment fade-up">Et les vitesses d'écoulement doivent être petites devant la célérité des ondes acoustiques dans le fluide<br>($v\ll c_\mathrm{son}$).</p>


{{%/section%}}

---

{{%section%}}

## Poussée d'Archimède

---

Un corps plongé dans un fluide incompressible au repos reçoit une force opposée au poids du fluide déplacée.

<p class="fragment fade-up">C'est la <span class="imp">poussée d'Archimède</span> notée <span class="imp">$\vec{\pi}_A$</span>.</p>

---

Cette action est la résultante des forces<br>de pression du fluide sur le corps.

<p class="fragment fade-up">La résultante est non nulle du fait de la présence d'une gravité qui rend la pression plus grande en profondeur.</p>

---

Calculons la résultante des forces de pression sur un cylindre vertical de hauteur $h$ et section $S$ immergé dans une fluide incompressible au repos<br>de masse volumique $\rho$.

---

{{< slide  background-image="/poussarch.png" background-size="contain" background-transition="concave">}}

---

Les forces pressantes sur la face latérale s'annulent deux à deux à une altitude donnée.

<p class="fragment fade-up">Il ne reste plus qu'à considérer<br>les deux faces horizontales...</p>

<p class="fragment fade-up">Sur la face du bas : <span class="fragment">$\vec{F}_{pb} = P(z_0)\times S\times \vec{k}$</span></p>

<p class="fragment fade-up">Sur la face du haut : <span class="fragment">$\vec{F}_{ph}=-P(z_0+h) \times S\times \vec{k}$</span></p>

---

Or d'après le principe fondamental de l'hydrostatique :

<div class="fragment fade-up">
$$P(z_0+h)=P(z_0)-\rho \, g \, h$$
</div>

---

D'où :

<div class="fragment fade-up">
$$
\begin{aligned}
\vec{\pi}_A &= \vec{F}_{pb}+\vec{F}_{ph}\\
&= (P(z_0)-P(z_0+h) )\, S\, \vec{k}\\
&= \rho \, g \, {\color{#56C1FF} h \, S}\, \vec{k}\\
&= \rho \, g \, {\color{#56C1FF} V}\, \vec{k}\\
&= -\rho  \,  V \, \vec{g}
\end{aligned}
$$
</div>


---

On peut généraliser à tout corps :

<br>

<div class="imp fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">

$$\vec{\pi}_A = - \rho \\,  V \\, \vec{g}$$

</div>

<br>

<ul>
<li class="fragment fade-up">$\pi_A$ est la poussée d'Archimède (en <b class="fragment" style="color:#FFF056">$\pu{N}$</b>)</li>
<li class="fragment fade-up">$\rho$ est la masse volumique du fluide (en <b class="fragment" style="color:#FFF056">$\pu{kg*m-3}$</b>)</li>
<li class="fragment fade-up">$V$ est le volume immergé du corps (en <b class="fragment" style="color:#FFF056">$\pu{m3}$</b>)</li>
<li class="fragment fade-up">$g$ est la pesanteur (en <b class="fragment" style="color:#FFF056">$\pu{m*s-2}$</b>)</li>
</ul>

---

⚠️

Si le corps flotte, <b style="color:#56C1FF">$V$</b> désigne seulement<br>le volume de la partie immergée du corps !


---


🧊 Application 🧊 

Quelle est la proportion immergée<br>du volume d'un glaçon ?


<div class="fragment fade-up"><u>Données</u> :</p>
<ul style="margin-top:-0.5em; margin-bottom:-0.5em;">
<li>masse volumique de l'eau :<br>$\rho_\ell = \pu{1,0e3 kg*m-3}$</li>
<li>masse volumique de la glace :<br>$\rho_g = \pu{9,2e2 kg*m-3}$</li>
</ul>
</div>

---

<p style="color:#16E7CF;">
Bilan des forces :
</p>

<br>

<ul>
<li class="fragment fade-up"  style="color:#16E7CF;">le poids du glaçon : $\vec{P}=m\vec{g}=\rho_g V_\mathrm{tot} \,\vec{g}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">la poussée d'Archimède : $\vec{\pi}_A = -\rho_\ell V_\mathrm{imm} \, \vec{g}$</li>
</ul>

---

<p style="color:#16E7CF;">
On suppose que le glaçon est à l'équilibre. 
</p>

<p class="fragment fade-up"  style="color:#16E7CF;">Donc dans le référentiel terrestre supposé galiléen,<br>la 1<sup>re</sup> loi de Newton nous informe que :</p>

<div class="fragment fade-up"  style="color:#16E7CF;">
$$
\sum \vec{F}_\mathrm{ext} = \vec{0}
$$
</div>

---

<p  style="color:#16E7CF;">
$\Rightarrow \vec{P}+\vec{\pi}_A= \vec{0}$
</p>

<p class="fragment fade-up"  style="color:#16E7CF;">
$\Leftrightarrow \rho_g V_\mathrm{tot} \, \vec{g} - \rho_\ell V_\mathrm{imm} \, \vec{g} = 0$
</p>

<p class="fragment fade-up"  style="color:#16E7CF;">
$\displaystyle \Rightarrow \frac{V_\mathrm{imm}}{V_\mathrm{tot}} = \frac{\rho_g}{\rho_\ell}$
</p>


<p class="fragment fade-up"  style="color:#16E7CF;">92% du glaçon est immergé !</p>

---

Question subsidiaire :

Qu'en est-il pour un iceberg dans l'océan 🚢 ? 

{{%note%}}
rho eau de mer (1,036) > rho eau douce  -> proportion immergée un peu plus faible (89%)
{{%/note%}}


{{%/section%}}

---

{{%section%}}

## Exercice

---

{{< slide  background-image="/balarchi.png" background-size="contain" background-transition="concave">}}

---

On tare la balance avant d'immerger la Tour Eiffel.

<p class="fragment fade-up">Que mesure alors la balance<br>après immersion de la Tour ?</p>

---

<p  style="color:#16E7CF;">
Avant la tare : 
</p>

<p  style="color:#16E7CF;">
Bilan des forces sur le système {eau + cristallisoir}
</p>

<ul>
<li class="fragment fade-up"  style="color:#16E7CF;">Poids du système : $(m_{eau}+m_{crist})\vec{g}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">Réaction du support (force de la balance<br>sur le système) : $\vec{N}$</li>
</ul>

---

<p  style="color:#16E7CF;">
On a équilibre.
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\Rightarrow \vec{N}= -(m_{eau}+m_{crist})\vec{g}$
</p>

---

<p  style="color:#16E7CF;">
Que mesure la balance ?
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
La force du système sur elle.
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
Or, d'après la 3<sup>e</sup> loi de Newton :
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\vec{F}_{syst/balance}= -\vec{F}_{balance/syst}=-\vec{N}$
</p>

---

<p  style="color:#16E7CF;">
Plus précisément, la balance affiche<br>la norme de cette force divisée par $g$.
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
Donc ici :
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle \frac{||\vec{N}||}{g}$
</p>

{{%note%}}
On vérifie que cela donne bien, à l'équilibre, la masse du système.
{{%/note%}}

---

<p  style="color:#16E7CF;">
Et comme on a taré, la balance indique zéro<br>lorsqu'elle mesure $\color{#FF95CA}(m_{eau}+m_{crist})$.
</p>

---

<p  style="color:#16E7CF;">
Plaçons maintenant la Tour et<br>concentrons-nous sur le système {Tour}.
</p>


<p  class="fragment fade-up" style="color:#16E7CF;">
Bilan des forces :
</p>

<ul>
<li class="fragment fade-up"  style="color:#16E7CF;">Poids de la Tour : $m_{Tour}\vec{g}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">Tension de la ficelle : $\vec{T}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">Poussée d'Archimède : $\vec{π_A}$</li>
</ul>

---

<p  style="color:#16E7CF;">
Et comme on a à nouveau équilibre :
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle m_{Tour}\vec{g}+\vec{T}+\vec{\pi_A}=\vec{0}$
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle \Rightarrow m_{Tour}\vec{g}={\color{#FFD932}-\vec{T}-\vec{\pi_A}}$
</p>

---

<p  style="color:#16E7CF;">
Occupons-nous maintenant du système {eau+cristallisoir+Tour}
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
Bilan des forces :
</p>

<ul>
<li class="fragment fade-up"  style="color:#16E7CF;">Poids du système : $(m_{Tour}+m_{eau}+m_{cristallisoir})\vec{g}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">Tension de la ficelle : $\vec{T}$</li>
<li class="fragment fade-up"  style="color:#16E7CF;">Réaction du support : $\vec{N}$</li>
</ul>

<p  class="fragment fade-up" style="color:#16E7CF;">
<u>Rq</u> : la poussée d'Archimède n'apparaît pas ici<br>car c'est une force <span class="fragment">intérieure</span> (de l'eau sur la Tour).
</p>

---

<p  style="color:#16E7CF;">
Donc
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle 
(m_{Tour}+m_{eau}+m_{crist})\vec{g}+\vec{T}+\vec{N}=\vec{0}$
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle 
{\color{#FFD932} m_{Tour}\vec{g}}+m_{eau}\vec{g}+m_{crist}\vec{g}+\vec{T}+\vec{N}=\vec{0}$
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
$\displaystyle 
{\color{#FFD932} -\vec{T}-\vec{\pi_A}}+m_{eau}\vec{g}+m_{crist}\vec{g}+\vec{T}+\vec{N}=\vec{0}$
</p>

---

<p  style="color:#16E7CF;">
D'où
</p>

<p class="fragment fade-up"style="color:#16E7CF;">
$\displaystyle 
\vec{N}=\vec{\pi_A}-m_{eau}\vec{g}-m_{crist}\vec{g}$
</p>

<p class="fragment fade-up"style="color:#16E7CF;">
$\displaystyle 
\vec{N}=-\rho_{eau}V_{Tour}\vec{g}-m_{eau}\vec{g}-m_{crist}\vec{g}$
</p>

---

<p style="color:#16E7CF;">
Et donc
</p>

<p class="fragment fade-up"style="color:#16E7CF;">
$\displaystyle 
\frac{||\vec{N}||}{g}=$<span class="fragment">$\displaystyle \;\rho_{eau}V_{Tour} + {\color{#FF95CA}m_{eau}+m_{crist}}$</span>
</p>

<p class="fragment fade-up" style="color:#16E7CF;">
En prenant la tare en compte,<br>la balance affiche $\rho_{eau}V_{Tour}$ !
</p>

<p  class="fragment fade-up" style="color:#16E7CF;">
Comme $\rho_{eau}=\pu{1,00 g*mL-1}$, la balance<br>(réglée en gramme) affiche directement<br>le volume de la Tour en mL !
</p>


{{%/section%}}

---

{{%section%}}

## Conservation du débit volumique

---

Le <span class="imp">débit volumique</span> est le volume de fluide qui traverse une section droite du conduit où s'écoule le fluide<br>par unité de temps. 


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
D_V = \frac{V}{\Delta t}
$$
</div>

<p class="fragment fade-up">
Unité SI : <b class="fragment" style="color:#FFF056">$\pu{m3*s-1}$</b>
</p>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/debitvs.png" style="box-shadow:none;background:none;">
</div>

<p class="fragment fade-up">Si $S$ est l'aire de la section droite et $v$ la vitesse<br>de l'écoulement à cet endroit, alors :</p>

<div class="fragment fade-up">
$$
{\color{#FF968D}D_V} = \frac{V}{\Delta t} = \frac{S\times v\times \Delta t}{\Delta t} = {\color{#FF968D}v\times S}
$$
</div>

---

<u>Rq</u> :

Si la vitesse de l'écoulement n'est pas la même en tout point de la section (i.e. non uniforme sur une section), on peut remplacer $v$ par $\bar{v}$, la vitesse moyenne<br>sur la section.

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:20px 50px 20px 50px;border-radius:10px">
Pour un <span class="imp">fluide incompressible</span>,<br>le <span class="imp">débit se conserve</span>.
</div>

---

Quel lien peut-on alors faire entre l'aire d'une section et la vitesse de l'écoulement si le conduit <br>où s'écoule le fluide est de section variable ?


<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/debitvariable.png" style="box-shadow:none;background:none;">
</div>

---

Par conservation du débit :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$${\color{#FF968D}v_1}\times {\color{#56C1FF}S_1} = {\color{#FF968D}v_2}\times  {\color{#56C1FF}S_2}$$
</div>

<p class="fragment fade-up">
La <span class="imp">vitesse d'écoulement</span> est <b style="color:#FFF056">inversement proportionnelle</b> à l'<b style="color:#56C1FF">aire de la section du conduit</b>.
</p>

{{%/section%}}

---


{{%section%}}

## Fluide parfait

---

Un <span class="imp">fluide</span> est dit <span class="imp">parfait</span> si on peut décrire son écoulement <span class="imp">sans prendre en compte<br>les effets de la viscosité</span>.

---

En réalité, les seuls fluides réellement non visqueux sont l'hélium superfluide, les condensats de Bose-Einstein ou les plasmas quarks-gluons...

<p class="fragment fade-up">Mais en pratique, si les effets de la viscosité sont suffisamment faibles par rapport aux effets inertiels (liés à la vitesse), l'approximation de fluide parfait est adaptée (et d'autant plus qu'on est loin<br>d'un obstacle ou d'une paroi).</p>

{{%note%}}
Près d'une paroi, le fluide est toujours visqueux. On sépare alors l'étude en deux domaines : celui de la couche limite ou le fluide est visqueux et celui où il est parfait.
{{%/note%}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/f/f8/Liquid_helium_Rollin_film.jpg" background-size="contain" background-transition="concave">}}

{{%note%}}
The liquid helium is in the superfluid phase. A thin invisible film creeps up the inside wall of the cup and down on the outside. A drop forms. It will fall off into the liquid helium below. This will repeat until the cup is empty - provided the liquid remains superfluid.
Cela montre qu'un fluide parfait est fondamentalement bizarre.
{{%/note%}}


{{%/section%}}

---

{{%section%}}

## Écoulement permanent

---

Un <span class="imp">écoulement  en régime permanent</span> (ou stationnaire) est un écoulement où la vitesse en chaque point<br>ne varie pas au cours du temps.

{{%/section%}}

---

{{%section%}}

## Ligne de courant

---


Une <span class="imp">ligne de courant</span> d'un écoulement est<br>un chemin tangent au champ des vitesse.

<p class="fragment fade-up">Les lignes de courant permettent de cartographier<br>le champ de vitesse du fluide.</p>

---

{{< slide background-image="/lignesdechamp.jpg" background-size="contain" background-transition="concave" >}}

{{%note%}}
Pas la même chose que la trajectoire dans le sens où on ne suit pas une particule dans le temps mais on regarde, à un instant donné, les vitesses d'un ensemble de particules. Néanmoins, en régime permanent, les deux se confondent !
{{%/note%}}

---

En régime permanent, les lignes de champ se confondent avec la trajectoire des particules.

{{%/section%}}

---

{{%section%}}

## Relation de Bernoulli

---

L'écoulement d'un fluide <b style="color:#FF95CA">incompressible</b> <b style="color:#FFF056">parfait</b> en <b style="color:#56C1FF">régime permanent</b> suit la <span class="imp">relation de Bernoulli</span> entre deux points $\mathrm{M_1}$ et $\mathrm{M_2}$ sur une ligne de courant :

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/relbernoulli.png" style="box-shadow:none;background:none;">
</div>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
{\color{#73FDEA}P_1}+{\color{#FFF056}\rho g z_1} + {\color{#FF968D}\frac12 \rho v_1^{\,2}} = {\color{#73FDEA}P_2}+{\color{#FFF056}\rho g z_2}+ {\color{#FF968D}\frac12 \rho v_2^{\,2}}
$$
</div>

{{%note%}}
La relation de Bernoulli sera toujours fournie.
{{%/note%}}

---

Cette relation exprime la conservation de l'énergie volumique d'une particule de fluide :

<ul>
<li class="fragment fade-up" style="color:#FF968D">$\frac12\rho v^2$ est une densité volumique d'énergie cinétique</li>
<li class="fragment fade-up" style="color:#FFF056">$\rho g z $ est une densité volumique d'énergie potentielle de pesanteur</li>
<li class="fragment fade-up" style="color:#73FDEA">$P$ est une densité volumique d'énergie potentielle dont dérivent les forces de pression</li>
</ul>

---

<u>Rq</u> :

Cette conservation est valable<br>le long d'une ligne de courant.

<p class="fragment fade-up">Mais si l'écoulement est irrotationnel<br>(nul part dans le fluide, un petit moulinet ne se mettrait à tourner), elle est valable en tout point du fluide<br>(on dit que l'écoulement est potentiel).</p>

---

Si le fluide est au repos ($v_1=v_2=0$), on retrouve<br>la <span class="imp">loi fondamentale de la statique des fluides</span> :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$P_1+\rho g z_1 = P_2 + \rho g z_2$$
</div>

---

Et pour un écoulement horizontal<br>($z_1=z_2$), on obtient :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$P_1+\frac12\rho v_1^{\,2}=P_2+\frac12\rho v_2^{\,2}$$
</div>

<p class="fragment fade-up">C'est l'<span class="imp">effet Venturi</span>.</p>

---

L'<span class="imp">effet Venturi</span> indique donc que<br>
si la vitesse de l'écoulement $\color{#FF968D}\nearrow$, alors la pression <span class="fragment">$\color{#56C1FF}\searrow$</span>.

<p class="fragment fade-up">Or la conservation du débit volumique nous a appris que si l'écoulement devient plus étroit ($S$ $\color{#56C1FF}\searrow$),<br><span class="fragment">alors sa vitesse <span class="fragment">$\color{#FF968D}\nearrow$</span>.</span></p>

---

On déduit donc que la pression <span class="fragment">$\color{#56C1FF}\searrow$</span><br>dans un étranglement.

<div  class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/illventuri.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide  background-video="https://upload.wikimedia.org/wikipedia/commons/5/58/Venturi_Tube_en.webm" background-size="contain" background-transition="concave">}}

---

{{< slide background-iframe="/ecoulement.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

Exemples d'applications :

<ul>
<li class="fragment fade-up" style="color:#D5D5D5;">Trompe à eau</li>
<li class="fragment fade-up" style="color:#D5D5D5;">Vaporisateurs</li>
<li class="fragment fade-up" style="color:#D5D5D5;">Tunnels Venturi des F1 (de 2022 à 2025)</li>
</ul>

---

{{< slide  background-image="/exventuri.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="https://pod.univ-lille.fr/media/videos/1d78340adebd50becc3044135b0335ff7c32030c7fffc9e84d8724d566351e73/1310/playlist.m3u8" background-size="contain" background-transition="concave">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/Ye3QPgDdJNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/BWvGE238DdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/51_Rzpw119o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/XP6oqIic4lo"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>

{{%/section%}}



---

[Retour site](https://coursphychi.github.io/tspe/fluide/)