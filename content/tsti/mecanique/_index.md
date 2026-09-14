+++
title = "Mécanique"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
+++

<style>
img {border: none !important}

.imp {font-weight:bold;color:#00A2FF;}

span {font-weight:normal;color:white;}

ul {
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

td {
text-align: center !important;
}

th:not(:last-child), td:not(:last-child) { border-right: 1px solid #00A2FF; }
</style>


# Mécanique

---

{{% section %}}

## Principe fondamental<br>de la dynamique

---

Rappel sur le principe d'inertie :


---


{{< slide  background-video="/inertietramp.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


---

Explication ?

---


Que provoque une **force** ?


---

{{< slide  background-image="/normpeople.png" background-size="contain" background-transition="concave">}}

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid white 5px;padding: 20px 20px 30px 20px; font-size:60px">
$\sum \vec{F}_{ext} = m\vec{a}$
</div></div>

où $\sum \vec{F}_{ext}$ est la somme des forces extérieures<br>qui s'appliquent sur le système.

Le vecteur correspondant à cette somme s'appelle<br>la **résultante des forces** extérieures.

---

En appelant $\vec{F}$ la résultante des forces extérieures,<br>la relation devient :



<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 5px;padding: 20px 20px 30px 20px; font-size:60px">
$F = ma$
</div></div>



C'est le **<span style="color:#43AFFA">principe fondamental de la dynamique (pfd)</span>**.

- $F$ : résultante des forces en $\pu{N}$
- $m$ : masse en $\pu{kg}$
- $a$ : accélération en $\pu{m*s-2}$

---

<u>Rq</u> :

plus besoin de vecteur dans la relation puisque<br>la résultante des forces et l'accélération<br>sont forcément colinéaires.


{{%/section%}}

---

## Exercices PFD

[Lien vers les exos](https://presentationssite.github.io/tsti/tdpfd/#/)


---

{{%section%}}

## Modèle de<br>la chute libre

---

En physique, on dit qu'il y a chute libre lorsque<br>la **seule force** qui agit sur le système est

{{%fragment%}}le poids{{%/fragment%}}

---

{{< slide  background-video="/ballon.mp4" background-size="contain" background-transition="concave">}}

---

Contrairement au nom qu'on lui donne,<br>la chute du parachutiste n'est pas libre.

<br>

<p class="fragment fade-up">Par contre, le mouvement du ballon est bien approximativement une chute libre !</p>

---

{{< slide  background-video="/dinochutelibre.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://pa1.narvii.com/7606/d0686d80f1dd3a1916fcf997b2e3e016262dd155r1-469-361_hq.gif" background-size="contain" background-transition="concave">}}



---

Retrouver le nombre d'images par seconde de la caméra grâce aux informations suivantes :

---


{{< slide  background-image="/dinochutelibre.png" background-size="contain" background-transition="concave">}}

---


Retrouver la hauteur de laquelle a été lâchée la boule de ciment grâce aux informations suivantes :

---


{{< slide  background-image="/dinochutelibre2.png" background-size="contain" background-transition="concave">}}


---

{{< slide  background-video="/sauttwitter.mp4" background-size="contain" background-transition="concave">}}

---

Informations sur DK Metcalf<br>(issues des mesures précédant la draft 2019) :

![](/mesurespredraft.png)

---

On analyse la vidéo grâce à [Tracker](https://physlets.org/tracker/trackerJS/).

---

{{< slide  background-video="/analysesaut.mp4" background-size="contain" background-transition="concave">}}

---

Analyse de la partie chute libre :


---

{{< slide  background-image="/resulsaut.png" background-size="contain" background-transition="concave">}}

---

- La physique semble-t-elle de prime abord<br>respectée ? (allure de la courbe obtenue)

---

Rappel :

l'évolution de la position d'un mouvement uniformément accéléré est donnée par :

>$y(t) = \frac{1}{2}at^2 + v_{0}t + y_0$


<div style="text-align:left;color:gray">
<div style="width:50%;margin-left:auto;margin-right:auto;">
où :
<ul>
<li>$v_{0} = v_y(t=0)$</li>
<li>$y_0 = y(t=0)$</li>
</ul>
</div>
</div>

---

- Quelle valeur l'ajustement parabolique donne-til pour la pesanteur $g$ ?

- Que pourrait indiquer la valeur de $g$ trouvée ?<br> Que devrait-on modifier dans le logiciel et dans<br>quel sens pour retrouver une pesanteur correct ?

---

{{< slide  background-image="/resulsaut4.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/consemmeca.png" background-size="contain" background-transition="concave">}}
Rappel :

>si on néglige les frottements,<br>l'énergie mécanique<br>$E_m = E_c + E_{pp}$<br>se conserve.<br>
($E_{pp} = mgh$ est<br>l'énergie potentielle<br>de pesanteur)

---


{{< slide  background-image="/resulsaut3.png" background-size="contain" background-transition="concave">}}

----


- La vitesse initiale mesurée permet-elle<br>d'aller jusqu'à la hauteur du saut ?

---


- La hauteur de son saut est-elle compatible<br>avec les mesures pré-draft ?


---

Analyse de la préparation du saut :

---

{{< slide  background-image="/resulsaut2.png" background-size="contain" background-transition="concave">}}

---

- Que vaut la force responsable de son saut ?

---

- Quelles sont les principales sources d'erreur ?

{{%fragment%}}<span style="font-weight:normal">le pointage : le suivi du centre de gravité<br>est particulièrement délicat à cause<br>du mouvement des bras et des jambes{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">l'étalonnage de la taille de DK{{%/fragment%}}

{{%fragment%}}<span style="font-weight:normal">les frottements{{%/fragment%}}

---

- L'incertitude vous semble-t-elle suffisante pour expliquer la différence de hauteur entre ce saut<br>et la valeur pré-draft ?

<u>Rq</u> : le record du monde d'un saut vertical<br>sans élan est de 117 cm.



---


Petites expériences sur l'apesanteur :

---

{{% youtube fqBpRkrvcl0%}}

{{%/section%}}

---

{{%section%}}

## Énergie

---

L'énergie de mouvement d'un objet s'appelle :

<p class="imp fragment" style="color:#FF968D">l'énergie cinétique $E_c$</p>

<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:60px">
$E_c = \frac{1}{2}mv^2$
</div></div>

<br>

<ul class="fragment">
<li>$E_c$ en <span class="fragment">J</span></li>
<li>$m$ en <span class="fragment">kg</span></li>
<li>$v$ en <span class="fragment">$\pu{m*s-1}$</span></li>
</ul>

---

Exemples : 

<ul>
<li>une balle de tennis de 58,5&nbsp;g partant de la raquette<br>à 200&nbsp;km/h a une énergie cinétique de <span class="fragment">90 J</span></li>
<li>un ballon de foot de 450&nbsp;g partant du pied<br>à 100&nbsp;km/h a une énergie cinétique de <span class="fragment">174 J</span></li>
<li>une balle de 8,10&nbsp;g sortant à 400&nbsp;m/s du canon<br>d'un pistolet a une  énergie cinétique de <span class="fragment">650 J</span></li>
<li>un rugbyman de 100&nbsp;kg courant à 25&nbsp;km/h a une énergie cinétique de <span class="fragment">2,4 kJ</span></li>
</ul>


---

Pour modifier l'énergie cinétique d'un système,<br>il faut qu'au moins <span class="imp">une force travaille</span>.

<p class="fragment">Le <span class="imp">travail d'une force $W$</span> est l'énergie<br>liée au déplacement d'une force. </p>

---

{{< slide  background-image="/schemtrav.png" background-size="contain" background-transition="concave">}}


---

Pour une force $\vec{F}$ constante<br>sur un déplacement entre les points A et B :

<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #00A2FF 5px;padding: 20px 20px 30px 20px; font-size:60px">
$W = \overrightarrow{F}\cdot\overrightarrow{AB} = F\times AB\times \cos(\alpha)$
</div></div>

<br>

<ul class="fragment">
<li>$W$ en <span class="fragment">J</span></li>
<li>$F$ en <span class="fragment">N</span></li>
<li>$AB$ en <span class="fragment">m</span></li>
</ul>

---

<ul>
<li>Si $W>0$<br>$\Leftrightarrow \cos\alpha > 0$<br>$\Leftrightarrow$ force dans le sens du déplacement,<br>le travail est dit <span class="imp fragment">moteur</span></li>
<li class="fragment">Si $W<0$<br>$\Leftrightarrow \cos\alpha < 0$<br>$\Leftrightarrow$ force dans le sens opposé au déplacement,<br> le travail est dit <span class="imp fragment">résistant</span></li>
</ul>

---

Cas particuliers :

La <span class="imp">réaction normale au support</span> (force du support sur le système en l'absence de frottement) est toujours perpendiculaire au déplacement. 

<p class="fragment">Comme $\cos 90^\circ = $ <span class="imp fragment">$0$</span>, son travail est donc <span class="imp fragment">nul.</span></p>

<p class="fragment">On dit que <span class="imp fragment">la réaction normale ne travaille pas.</span></p>

---

Le <span class="imp">poids</span> étant vertical, il ne travaille pas <br>si le déplacement est horizontal.</p>

<p class="fragment">Et pour un déplacement entre les points A et B d'altitudes $z_A$ et $z_B$, on a :</p>

<p class="fragment">
$$
W = \overrightarrow{P}\cdot\overrightarrow{AB} = -mg(z_B-z_A)
$$
</p>

---

{{< slide  background-image="/projp.png" background-size="contain" background-transition="concave">}}


---


<p class="imp" style="color:#FF968D">Théorème de l'énergie cinétique (TEC) :</p>

<div class="fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:60px">
$\Delta E_c = E_{c\,finale} - E_{c\,initiale} = \sum W$
</div></div>

<br>

<p class="fragment">
La variation d'énergie cinétique d'un système<br>entre un point de départ et un point d'arrivée vaut<br>la somme des travaux des forces extérieures.</p>

---

Conséquence : 

si aucune force ne travaille sur un trajet AB (ou si<br>des travaux moteurs et résistants se compensent),<br>alors l'énergie cinétique est la même en B qu'en A<br>($\Rightarrow$ même vitesse).

---

{{< slide  background-image="/camionfreinage.png" background-size="contain" background-transition="concave">}}

---

<span style="color:#ffff66;font-weight:bold">Exercice : freinage d'un camion</span>

Un camion de 20 tonnes dévale une pente à 8%<br>à  la vitesse de 72 km/h avant d’actionner ses freins.

Il met 500 m pour s’arrêter. 

Que vaut la force de freinage (supposée constante) ?<br>


On négligera les frottements autres que ceux des freins et on prendra $g=\pu{10 m*s-2}$

---

<p style="color:green">
Énergie cinétique initiale :
$$
\begin{aligned}
E_{c\,initiale} & = \frac{1}{2}mv^2_{initiale}\\\\
& = \frac{1}{2}\times 20\times 10^3 \times \left(\frac{72}{3,6}\right)^2\\\\
& = \pu{4E6 J}
\end{aligned}
$$
</p>

---

<p style="color:green">
Énergie cinétique finale : 
<br>
0 J (le camion s'arrête)
</p>

---

<p style="color:green">
Bilan des forces :
</p>
<ul style="color:green">
<li>poids $\vec{P}$ </li>
<li>force de freinage $\vec{F}$</li>
<li>réaction normale de la route $\vec{N}$</li>
</ul>


---

<p style="color:green">
Calcul du travail de chacune de ces forces<br>sur le déplacement AB de 500 m :
</p>


<br>

<ul style="color:green">
<li>la réaction normale ne travaille pas puisqu'elle est perpendiculaire au déplacement : $W_{\!\vec{R}} = \pu{0 J}$</li>
</ul>

---

<ul style="color:green">
<li>le travail du poids dépend de la différence d'altitude entre le point de départ A et le point d'arrivée B : $W_{\!\vec{P}} = -mg(z_B-z_A)$<br>
Ici, le dénivelé est de $\pu{500 m}\times 8\% = \pu{40 m}$, d'où $W_{\!\vec{P}} = -20\times 10^3\times 10 \times (-40) = \pu{8E6 J}$<br>
Le travail du poids est positif $\Rightarrow$ il est moteur (normal : le poids aide à descendre).</li>
</ul>



---

<ul style="color:green">
<li>travail de la force de freinage : $W_{\!\vec{F}} = F\times AB\times \cos(180^\circ) = -500\times F$<br>
le travail de la force de freinage est négatif<br>$\Rightarrow$ il est résistant (c'est son rôle !)
</li>
</ul>

---

<p style="color:green">
Plus qu'à appliquer le TEC pour relier<br>tout ce petit monde en une équation :
$$
\Delta E_c = W_{\!\vec{R}} + W_{\!\vec{P}} + W_{\!\vec{F}}
$$
</p>

<p style="color:green" class="fragment">
D'où
$$
-\pu{4E6} = 0 + \pu{8E6} - 500\times F
$$
$$
\Rightarrow F = \frac{\pu{-12E6}}{-500} = \pu{24 kN}
$$

</p>




{{%/section%}}

---


## Forces de frottement

[Lien vers TD](https://presentationssite.github.io/tsti/tpmecafrott/#/)


---


{{%section%}}



## Pour les curieux

---

{{%youtube 3a2qOozWpr0%}}

---

{{%youtube ivc3-Tt56Uo%}}

{{%/section%}}


---


[Retour site](https://coursphychi.github.io/tsti2d/mecanique/)