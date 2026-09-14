+++
title = "Énergie mécanique"
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

## Énergie cinétique


---


L'énergie de mouvement d'un objet s'appelle :

<p class="imp fragment" style="color:#FF968D">l'énergie cinétique $E_c$</p>

<div class="imp fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$E_c = \frac{1}{2}mv^2$
</div></div>

<br>

<ul class="fragment">
<li>$E_c$ en <span class="fragment imp">J</span></li>
<li>$m$ en <span class="fragment imp">kg</span></li>
<li>$v$ en <span class="fragment imp">$\pu{m*s-1}$</span></li>
</ul>

---

Exemples : 

<ul>
<li>une balle de tennis de 58,5&nbsp;g partant de la raquette<br>à 200&nbsp;km/h a une énergie cinétique de <span class="fragment" style="color:white">90 J</span></li>
<li>un ballon de foot de 450&nbsp;g partant du pied<br>à 100&nbsp;km/h a une énergie cinétique de <span class="fragment" style="color:white">174 J</span></li>
<li>une balle de 8,10&nbsp;g sortant à 400&nbsp;m/s du canon<br>d'un pistolet a une  énergie cinétique de <span class="fragment" style="color:white">650 J</span></li>
<li>un rugbyman de 100&nbsp;kg courant à 25&nbsp;km/h a une énergie cinétique de <span class="fragment" style="color:white">2,4 kJ</span></li>
</ul>


{{%/section%}}

---

Comment peut-on faire varier<br>l'énergie cinétique d'un système&nbsp;?

<p class="fragment">Grâce au <span class="imp">travail d'une force</span>&nbsp;!</p>

---

{{%section%}}

## Travail d'une force

---

Pour modifier l'énergie cinétique d'un système,<br>il faut qu'au moins <span class="imp">une force travaille</span>.

<p class="fragment">Le <span class="imp">travail d'une force $W$</span> est l'énergie<br>liée au déplacement d'une force. </p>

---

{{< slide  background-image="/schemtravail.png" background-size="contain" background-transition="concave">}}

---


Mais seule la composante du déplacement parallèle<br>à la force contribue au travail (en prenant<br>ou donnant de l'énergie au système). 

<p class="fragment">On ne peut donc pas simplement multiplier la force par le déplacement, il faut faire un <span class="imp">produit scalaire</span> qui permet de multiplier la force par la projection du vecteur déplacement sur la direction de la force.</p>

---

<iframe scrolling="no" title="Produit scalaire" src="https://www.geogebra.org/material/iframe/id/ucnmd9x8/width/886/height/505/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="886px" height="505px" style="border:0px;"> </iframe>

---

Pour une force $\vec{F}$ constante<br>sur un déplacement entre les points A et B :

<div class="imp fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.0em;border-radius:10px;">
$W_{\! AB}(\vec{F}) = \overrightarrow{F}\cdot\overrightarrow{AB} = F\times AB\times \cos(\alpha)$
</div></div>

<br>

<ul class="fragment">
<li>$W$ en <span class="fragment imp">J</span></li>
<li>$F$ en <span class="fragment imp">N</span></li>
<li>$AB$ en <span class="fragment imp">m</span></li>
</ul>
<p class="fragment">
On voit ainsi que $\pu{1 J} = \pu{1 N*m} $
</p>

---

Le travail d'une force entre un point A<br>et un point B vaut donc le <span class="imp">produit scalaire</span><br>
entre cette force et le déplacement<br>$\overrightarrow{AB}$.

---

<ul>
<li><span class="imp">Si $W>0$</span><br>$\Leftrightarrow \cos\alpha > 0$<br>$\Leftrightarrow$ force dans le sens du déplacement,<br>le travail est dit <span class="imp fragment">moteur</span></li>
<li class="fragment"><span class="imp">Si $W<0$</span><br>$\Leftrightarrow \cos\alpha < 0$<br>$\Leftrightarrow$ force dans le sens opposé au déplacement,<br> le travail est dit <span class="imp fragment">résistant</span></li>
</ul>

---

Cas particuliers :

La <span class="imp">réaction normale au support</span> (force du support sur le système en l'absence de frottement) est toujours perpendiculaire au déplacement. 

<p class="fragment">Comme $\cos 90^\circ = $ <span class="imp fragment"> $\;0$</span>, son travail est donc <span class="imp fragment">nul.</span></p>

<p class="fragment">On dit que <span class="imp fragment">la réaction normale ne travaille pas.</span></p>

---

Le <span class="imp">poids</span> étant vertical, il ne travaille pas <br>si le déplacement est horizontal.</p>

<br>

<p class="fragment">Et pour un déplacement entre<br>les points A et B d'altitudes $z_A$ et $z_B$ :</p>

---

{{< slide  background-image="/schemtravpoids.png" background-size="contain" background-transition="concave">}}

---


$$
W_{\\!AB}(\vec{P}) = \overrightarrow{P}\cdot\overrightarrow{AB} = -mg(z_B-z_A)
$$

---


Que vaut le travail du poids pour un système de 100 g pour chacun des trajets suivant ?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:800px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/travpoids.png" style="box-shadow:none;background:none;">
</div>



{{%/section%}}

---

{{%section%}}

## Théorème de l'énergie cinétique<br>(TEC)

---

<div class="imp" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.1em;border-radius:10px;">
$\Delta E_c = E_{cB} - E_{cA} = \sum W_{\!AB}(\vec{F})$
</div></div>

<br>

<p class="fragment">
La variation d'énergie cinétique d'un système<br>entre un point A et un point B vaut la somme des travaux des forces extérieures sur  le déplacement<br>$\overrightarrow{AB}$.</p>

---

Conséquence : 

si aucune force ne travaille sur un trajet $\overrightarrow{AB}$ (ou si<br>des travaux moteurs et résistants se compensent),<br>alors l'énergie cinétique est la même en B qu'en A<br>($\Rightarrow$ même vitesse).

---

Exercice :

 Samson arrête une personne d’une masse m = 50 kg<br>lui arrivant dessus à une vitesse v = 10 m/s<br>en reculant d’une distance d = 1 m.

<img src="/samson.png" style="width:250px;">

---

{{< slide  background-video="/canon.mp4" background-size="contain" background-transition="concave">}}


---

Que vaut la force F supposée constante<br>et horizontale qu’il doit appliquer ?

---

{{< slide  background-image="/camionfreinage.png" background-size="contain" background-transition="concave">}}

---


Un camion de 20 tonnes dévale une pente à 8%<br>à  la vitesse de 72 km/h avant d’actionner ses freins.

Il met 500 m pour s’arrêter. 

Que vaut la force de freinage (supposée constante) ?<br>


On négligera les frottements autres<br>que ceux des freins et on prendra $g=\pu{10 m*s-2}$

---

<p style="color:#009688">
Énergie cinétique initiale :
$$
\begin{aligned}
E_{cA} & = \frac{1}{2}mv^2_{A}\\
& = \frac{1}{2}\times 20\times 10^3 \times \left(\frac{72}{3,6}\right)^2\\
& = \pu{4E6 J}
\end{aligned}
$$
</p>

---

<p style="color:#009688">
Énergie cinétique finale : 
<br>
0 J (le camion s'arrête)
</p>

---

<p style="color:#009688">
Bilan des forces :
</p>
<ul style="color:#009688">
<li>poids $\vec{P}$ </li>
<li>force de freinage $\vec{F}$</li>
<li>réaction normale de la route $\vec{N}$</li>
</ul>


---

{{< slide  background-image="/schemcamion.png" background-size="contain" background-transition="concave">}}


---

<p style="color:#009688">
Calcul du travail de chacune de ces forces<br>sur le déplacement AB de 500 m :
</p>


<br>

<ul style="color:#009688">
<li>la réaction normale ne travaille pas puisqu'elle est perpendiculaire au déplacement : $W_{\!AB}(\vec{N}) = \pu{0 J}$</li>
</ul>

---

<ul style="color:#009688">
<li>le travail du poids dépend de la différence d'altitude entre le point de départ A et le point d'arrivée B : $W_{\!AB}(\vec{P}) = -mg(z_B-z_A)$<br>
Ici, le dénivelé est de $\pu{500 m}\times 8\% = \pu{40 m}$, d'où $W_{\!\vec{P}} = -20\times 10^3\times 10 \times (-40) = \pu{8E6 J}$<br>
Le travail du poids est positif $\Rightarrow$ il est moteur (normal, le poids aide à descendre).</li>
</ul>



---

<ul style="color:#009688">
<li>travail de la force de freinage : $W_{\!AB}(\vec{F}) = F\times AB\times \cos(180^\circ) = -500\times F$<br>
le travail de la force de freinage est négatif<br>$\Rightarrow$ il est résistant (c'est son rôle !)
</li>
</ul>

---

<p style="color:#009688">
Plus qu'à appliquer le TEC pour relier<br>tout ce petit monde en une équation :
$$
E_{cB}-E_{cA} = W_{\!AB}(\vec{N}) + W_{\! AB}(\vec{P}) + W_{\!AB}(\vec{F})
$$
</p>

<p style="color:#009688" class="fragment">
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

{{%section%}}

## Énergie potentielle

---

Si le travail d'une force entre deux points A et B<br>ne dépend que des coordonnées de A et de B,<br>alors cette force est dite <span class="imp">conservative</span>.

---

Pouvez-vous citer un exemple de force conservative ?


---

Le <span class="imp">poids</span> est une <span class="imp">force conservative</span>.

<p class="fragment">
En effet, on l'a vu, le travail du poids ne dépend<br>que de la différence d'altitude $z_B-z_A$<br>(pas du tout des points intermédiaires).</p>



---

On peut associer à toute force conservative<br>une <span class="imp">énergie potentielle</span> telle que la variation<br>d'énergie potentielle entre deux points A et B<br>est opposée au travail de la force.

---

Dans le cas de la force conservative associée au champ de pesanteur terrestre (le poids), on obtient :

$\Delta E_{pp} = -W_{\\!AB}(\vec{P}) = mg\left(z_B-z_A\right)$

---

En prenant pour origine de l'énergie potentielle<br>la même que celle des altitudes $z$<br> ($E_{pp}(z=0)=0$)<br>
<span class="fragment">on obtient la formule de<br>
l'<span class="imp">énergie potentielle de pesanteur</span><br>d'un système de masse $m$ à l'altitude $z$<br>(l'axe des $z$ est orienté vers le haut) :</span>

---

<div class="imp" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$E_{pp} = mgz$
</div></div>

<br>

<p class="fragment">Unités :</p>

<ul>
<li class="fragment">$E_{pp}$ en <span class="fragment imp">$\pu{J}$</span></li>
<li class="fragment">$m$ en <span class="fragment imp">$\pu{kg}$</span></li>
<li class="fragment">$g$ en <span class="fragment imp">$\pu{N*kg-1}$</span></li>
<li class="fragment">$z$ en <span class="fragment imp">$\pu{m}$</span></li>
</ul>


---

Une force dont le travail dépend du chemin suivi (et pas seulement des extrémités) est dite <span class="imp">non conservative</span>.

<p class="fragment">
C'est typiquement le cas <span class="fragment">des <span class="imp">forces de frottements</span>.</span>
</p>

---

Le travail d'une force de frottement sera nécessairement plus grand sur le chemin vert alors que celui du poids sera le même sur les deux chemins.

<img src="/consvsnoncons.png" style="width:500px;background:none;box-shadow:none;">

---

Une force non conservative ne peut pas<br>être associée à une énergie potentielle.


{{%/section%}}

---

{{%section%}}

## Énergie mécanique

---

L'<span class="imp">énergie mécanique</span> d'un système est la somme de son énergie cinétique et de son énergie potentielle :

<br>

<div class="imp" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$E_{m} = E_c + E_p$
</div></div>

---

Si les forces agissant sur le système sont chacune
- soit <span class="imp">conservatives</span> 
- soit de <span class="imp">travail nul</span>.

alors l'<span class="imp">énergie mécanique</span> du système <span class="imp">se conserve</span>.

<br>

<div class="imp fragment" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.2em;border-radius:10px;">
$\Delta E_{m} = 0$
</div></div>


---

{{< slide  background-image="/graphencons.png" background-size="contain" background-transition="concave">}}

---

<iframe width="720" height="405" src="https://www.youtube.com/embed/77ZF50ve6rs?si=SHsNs4PXod_RPG6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style="border-radius:10px;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:50%;max-width:100%;">
<img src="/xkcdpendule.png" style="box-shadow:none;background:none;">
</div>

---

Quelle boule arrive en premier ?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/tremplins.png" style="box-shadow:none;background:none;border-radius:10px">
</div>


---

<iframe width="720" height="405" src="https://www.youtube.com/embed/88NZStgiIt0?si=M4-CaW5lwCyRgTHq&amp;start=190" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Que vaut la vitesse en D ? En E ? En B ? Et en C ?

<br>


<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/coordtremplins.png" style="box-shadow:none;background:none;border-radius:10px">
</div>

---


À l'inverse, si le système est soumis à des <span class="imp">forces non conservatives</span> qui travaillent, alors <span class="imp">l'énergie mécanique</span> du système <span class="imp">n'est pas conservée</span>.

---

{{< slide  background-image="/graphenpascons.png" background-size="contain" background-transition="concave">}}

---

Les forces non conservatives comme les frottements dissipent l'énergie mécanique. 

<p class="fragment">
Mais celle-ci n'a pas disparu ;<br>elle se retrouve convertie sous forme thermique.
</p>

---

Et la variation de l'énergie mécanique vaut donc<br>la somme des travaux des forces non conservatives<br>sur le chemin parcouru.

<br>

<div class="fragment imp" style="display: flex;justify-content: center;">
<div style = "border:solid #FF968D 5px;padding: 20px 20px 30px 20px; font-size:1.1em;border-radius:10px;">
$\Delta E_{m} = E_{mB} - E_{mA} = \sum{W_{\!AB}(\vec{F}_{n.c.})}$
</div></div>

---

{{< slide  background-image="/consnoncons.png" background-size="contain" background-transition="concave">}}


---

{{< runpython lang="vpython" mode="output" width="450" height="550" file="rebond.py" >}}
{{< /runpython >}}


---


{{< runpython lang="vpython" mode="toggle" width="900" default="output" file="energiependule.py" >}}
{{< /runpython >}}

---

{{< slide  background-image="/jetdeau.png" background-size="contain" background-transition="concave">}}

---

À quelle vitesse minimale doit sortir<br>l'eau du jet d'eau de Genève ?

---

Comment Armand "Mondo" Duplantis<br>va-t-il si haut ?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="https://images.hindustantimes.com/img/2024/08/06/550x309/ATHLETICS-OLY-PARIS-2024-503_1722907142443_1722907185022.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

<br>

- masse : 79 kg
- taille : 1,81 m

{{%note%}}
Il court très vite.
{{%/note%}}

---

 Sachant qu'il va à $\pu{37 km*h-1}$<br>lorsqu'il plante sa perche,<br>à quelle hauteur peut-il<br>espérer monter ?
 
 ---

À quoi sert la perche au juste ?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="https://www.fijivillage.com/news_images/174508111766b13bcdfd447f30b296.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>


---

Bonus : expliquer par un schéma pourquoi son centre de masse n'est pas obligé de passer<br>au-dessus de la barre.

{{%note%}}
Ça donne 5,38 m.
Le centre de gravité est généralement entre 55% et 60% de la taille de son centre de gravité, on atteint 6,40 m environ.
On voit qu'il a encore de la marge. D'autant plus que le centre de gravité n'a pas besoin de passer la barre !!
{{%/note%}}


{{%/section%}}

---

{{%section%}}

## Pour les curieux

---

{{%youtube ivc3-Tt56Uo%}}

---

{{%youtube peCItLpo3f4%}}

---

{{%youtube 3a2qOozWpr0%}}

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1spe/egiemeca/)
