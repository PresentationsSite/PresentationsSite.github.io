+++
title = "Inertie"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
custom_css = "css/noir-moderne.css"
highlight_theme = "atom-one-dark-reasonable"
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

<script src="/js/noir-moderne.js" defer></script>





{{%section%}}

# Principe d'inertie


---

{{< youtube-slide id="W1lkeM6YoqU" ratio="16x9" >}}

---

{{< slide class="question" >}}

Comment décrire le mouvement de tous les objets qu'il lâche (en les assimilant à des points matériels) ?

---

{{< youtube-slide id="DhPVhIzMaqg" ratio="16x9" >}}

---

{{< slide  background-image="/pingpongspatial.png" background-size="contain" background-transition="concave">}}


---

<span class="imp" style="color:#FF42A1">Principe d'inertie :</span>

<div style="display: flex;justify-content: center;">
<div class="retenir" style = "border: solid #FF42A1 5px;padding: 20px 20px 20px 20px;border-radius:10px;">
Tout système persévère dans son état de <span class="imp" style="color:#FFD932">repos</span><br>ou de <span class="imp">mouvement rectiligne</span> <span class="imp" style="color:#FFD932">uniforme</span>,<br>à moins qu'il ne soit contraint, par des <span class="imp" style="color:#FF644E">actions</span> s'exerçant sur lui, à changer cet état. 
</div></div>

---

C'est une équivalence<br>qu'on peut réexprimer ainsi :

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 20px 20px 20px 20px;border-radius:10px;">
Si <span class="imp" style="color:#FF644E">aucune action non compensée</span> ne s'exerce<br>sur un système, alors le <span class="imp" style="color:#FFD932">vecteur vitesse</span><br>de ce système <span class="imp">reste constant</span>.<br>

<span class="fragment">Et inversement, si  le <span class="imp" style="color:#FFD932">vecteur vitesse</span><br><span class="imp">reste constant</span> alors <span class="imp" style="color:#FF644E">aucune action<br>non compensée</span> ne s'exerce.</span>
</div></div>

---

Et plus schématiquement :

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 10px 20px 10px 20px;border-radius:10px;">
<span class="imp" style="color:#FF644E"><strike>action</strike></span> <span>$\Leftrightarrow$</span> <span class="imp" style="color:#FFD932">$\vec{v}=\vec{cst}$</span>
</div></div>

<br>

<p class="fragment fade-up">Ce qu'on peut décomposer en :</p>

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 10px 10px 10px 10px;border-radius:10px;">
<table style="width:60%; border:none;">
  <tr style="border:none;">
<td style="border:none; text-align:right;"><span class="imp fragment" style="color:#FF644E"><strike>action</strike></span></td>
<td style="border:none; text-align:center;" class="fragment">⇒</td>
<td style="border:none; text-align:left;"><span class="imp fragment" style="color:#FFD932">$\vec{v}=\vec{cst}$</span></td>
  </tr>
  <tr style="border:none;">
    <td style="border:none; text-align:right;"><span class="imp fragment" style="color:#FFD932">$\vec{v}=\vec{cst}$</span></td>
    <td style="border:none; text-align:center;" class="fragment">⇒</td>
    <td style="border:none; text-align:left;"><span class="imp fragment" style="color:#FF644E"><strike>action</strike></span></td>
  </tr>
</table>
</div>
</div>


---

<u>Rq</u> :

<p class="fragment fade-up">Le principe d'inertie n'est valable<br>que dans un <span class="imp">référentiel galiléen</span>.</p> 

<p class="fragment fade-up">Le référentiel terrestre peut être considéré comme galiléen sur des petites distances et des petites durées.</p>

<p class="fragment fade-up">Tout référentiel en mouvement rectiligne uniforme<br>par rapport au référentiel terrestre peut être<br>considéré comme galiléen.</p>

---

<ul>
<li>exemple : <span class="fragment">le wagon d'un train avançant en ligne droite à vitesse constante.</span></li>

<br>

<li class="fragment fade-up">Contre-exemple : <span class="fragment">le wagon d'un train accélérant, freinant ou tournant.</span></li>

</ul>

---

La <span class="imp" style="color:#FF42A1">contraposée du principe d'inertie</span><br>est tout aussi utile :

<div style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 20px 20px 20px 20px;border-radius:10px;">

<span class="fragment">Si  le <span class="imp" style="color:#FFD932">vecteur vitesse</span> d'un système <span class="imp">n'est pas constant</span> alors <span class="imp" style="color:#FF644E">il y a au moins une action<br>non compensée</span> qui s'exerce sur le système.</span><br>

<span class="fragment">Et inversement, s'il y a <span class="imp" style="color:#FF644E">une action<br>non compensée</span>, alors le <span class="imp" style="color:#FFD932">vecteur vitesse</span><br>de ce système <span class="imp">n'est pas constant</span>.</span>

</div></div>


---



<div style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 10px 20px 10px 20px;border-radius:10px;">
<span class="imp" style="color:#FFD932">$\vec{v}\neq\vec{cst}$</span> $\Leftrightarrow$ <span class="imp" style="color:#FF644E">action</span>
</div></div>

<br>

<br>

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF42A1 5px;padding: 10px 10px 10px 10px;border-radius:10px;">
<table style="width:60%; border:none;">
  <tr style="border:none;">
<td style="border:none; text-align:right;">
<span class="imp fragment" style="color:#FFD932">$\vec{v}\neq\vec{cst}$</span>
</td>
<td style="border:none; text-align:center;" class="fragment">⇒</td>
<td style="border:none; text-align:left;"><span class="imp fragment" style="color:#FF644E">action</span></td>
  </tr>
  <tr style="border:none;">
    <td style="border:none; text-align:right;"><span class="imp fragment" style="color:#FF644E">action</span></td>
    <td style="border:none; text-align:center;" class="fragment">⇒</td>
    <td style="border:none; text-align:left;"><span class="imp fragment" style="color:#FFD932">$\vec{v}\neq\vec{cst}$</span></td>
  </tr>
</table>
</div>
</div>

---

{{< youtube-slide id="gp5G1QG6cXc" ratio="16x9" >}}

---

{{< slide class="question" >}}

L'ISS se déplace à 28 000 km/h et pourtant<br>ses moteurs sont quasiment toujours éteints. 

<p class="fragment fade-up">Comment est-ce possible ?</p>

---

{{< slide  background-video="/inertie3.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/inertie4.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/skylab.mp4" background-size="contain" background-transition="concave">}}

---

Une station spatiale ne peut être<br>considérée comme un référentiel galiléen<br>que lorsque ses moteurs sont éteints.

<p class="fragment fade-up">Voyons ce qui se passe en cas de boost des moteurs.</p>

---

{{< slide  background-video="/inertie-reboost.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/inertie-boost-vieux.mp4" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

## Actions et forces

---

<div style="display: flex;justify-content: center;">
<div style = "border: solid #FF644E 5px;padding: 10px 10px 10px 10px;border-radius:10px;">
Une <span class="imp" style="color:#FF644E">action</span> est donc ce qui permet à un système<br>de modifier le mouvement d'un autre système.
</div></div>

<p class="fragment fade-up">On modélise une action par une <span class="imp" style="color:#FF644E">force</span> représentée<br>par un <span class="imp" style="color:#FF644E">vecteur</span> ayant  la direction et le sens<br>de la modification du mouvement qu'aurait <br>le système si la force était seule à agir sur lui.</p>

<p class="fragment fade-up">La norme du vecteur (l'intensité<br>de la force), s'exprime en <span class="fragment imp" style="color:#FF644E">newton (N)</span>.</p>


---

Pour savoir ce qui agit sur un système, on fait l'inventaire des objets en interaction avec lui<br>dans un diagramme objet-interaction (DOI).

<br>

<p class="fragment fade-up">Voyons quelques exemples :</p>

---

{{< slide  background-image="/parabonhomme.png" background-size="contain" background-transition="concave">}}

Qu'est-ce qui agit sur un parachutiste ?<br>(système = parachutiste + parachute)

<br><br><br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/doipara.png" background-size="contain" background-transition="concave">}}

---

Maintenant, on va assimiler le système<br>à un <span class="imp">point matériel</span> (un point concentrant<br>toute la masse du système) et on va représenter<br>les forces par des vecteurs partant de ce point.

---

{{< slide  background-image="/forcespara.png" background-size="contain" background-transition="concave">}}

---

{{< slide class="question" >}}

Parachute ouvert, le parachutiste descend<br><b style="color:#FFD932">en ligne droite à vitesse constante</b>.<br>Comparer son poids $P$ et la force $F$ de l'air.

<ol class="vote">
<li>$P > F$<br>puisqu'il descend</li>
<li class="fragment juste" data-fragment-index="3">$P = F$</li>
<li>$P < F$<br>puisqu'il est freiné</li>
<li>Impossible à dire sans les valeurs</li>
</ol>

<p class="consigne">🗳️ Votez (1 à 4 doigts) <span class="fragment" data-fragment-index="1">→ 💬 Convainquez votre voisin</span> <span class="fragment" data-fragment-index="2">→ 🗳️ Revotez !</span> <button class="indice-bouton">💡 Indice</button>
<span class="chrono fragment" data-fragment-index="1"></span></p>

<p class="indice">Que dit le principe d'inertie quand<br>le vecteur vitesse reste constant ?</p>

---

Le vecteur vitesse est constant<br>(mouvement <span class="imp">rectiligne uniforme</span>).

<p class="fragment fade-up">D'après le principe d'inertie,<br>les forces qui s'exercent sur le système<br><span class="imp">se compensent</span> : <span class="imp">$P = F$</span>.</p>

<p class="fragment fade-up">Pas besoin que le poids «&nbsp;l'emporte&nbsp;»<br>pour descendre : sans action non compensée,<br>le parachutiste continue simplement sur sa lancée.</p>

---

{{< slide  background-image="/systseau.png" background-size="contain" background-transition="concave">}}

Qu'est-ce qui agit sur un seau<br>de peinture posé par terre ?<br>
(système = seau de peinture)

<br><br><br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/doiseau.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/forceseau.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/balleficelle.png" background-size="contain" background-transition="concave">}}

<br><br><br><br><br><br>

Qu'est-ce qui agit sur cette balle accrochée<br>par une ficelle et qui se balance ?<br>
(système = la balle seule)


---

{{< slide  background-image="/doiballeficelle.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/forcesballeficelle.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/systmoto.png" background-size="contain" background-transition="concave">}}

Enfin, qu'est-ce qui agit sur une moto en train d'accélérer ?
(système = moto + pilote)
<br><br><br><br><br><br><br><br><br><br>


---

{{< slide  background-image="/doimoto.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/forcesmoto.png" background-size="contain" background-transition="concave-in none-out">}}

---

{{< slide  background-image="/decompforcesmoto.png" background-size="contain" background-transition="none">}}


---

Le poids (force de la Terre sur le système) est <span class="imp">vertical</span>, orienté <span class="imp">vers le bas</span> et sa valeur est donnée par :

<br>

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF644E 5px;padding: 20px 20px 20px 20px; color: #FF644E; font-size:60px;border-radius:10px;" class="retenir">
$P=m\times g$
</div></div>

<br>

<p class="fragment fade-up">où $m$ est la masse du système (en <span class="imp fragment">kg</span>)<br><span class="fragment">et $g = \pu{9,8 m*s-2}$ est la pesanteur terrestre.</span>


{{%/section%}}

---

{{%section%}}

### Principe d'inertie dans la vie<br>de tous les jours

---

{{< slide class="question" >}}

Pas besoin de vivre dans l'ISS<br>pour observer les effets du principe d'inertie.

<p class="fragment fade-up">Exemples ?</p>

---


Exemple le plus simple :

un objet au repos a tendance à rester<br>au repos si rien n'agit sur lui...


---

Le poids (force de la Terre sur l'objet), va toujours agir empêchant les beaux mouvements rectilignes uniformes vus dans l'ISS, à moins que...

<p class="fragment fade-up">Une autre force le compense.<br>Et c'est le cas si l'objet repose<br>sur un support horizontal.</p>

---

L'autre problème, ce sont les frottements<br>qui freinent l'objet en mouvement.

<p class="fragment fade-up">Y avait-il des frottements dans l'ISS ?</p>

<p class="fragment fade-up">Oui ! Mais les frottements de l'air sur un objet<br>sont beaucoup plus faibles que ceux<br>d'un support solide.</p>


---



Mais si on diminue ces frottements<br>(sur de la glace par exemple ou sur un coussin d'air),<br>on  illustre plutôt bien le principe d'inertie :<br>le mouvement est conservé...<br> du moins un certain temps.

---

{{< slide class="question" >}}

Un palet glisse vers la droite sur une glace<br>parfaitement lisse, à vitesse constante.<br>Quelles actions s'exercent sur le palet ?

<ol class="vote">
<li>Aucune</li>
<li class="fragment juste" data-fragment-index="3">Poids et action de la glace, qui se compensent</li>
<li>Poids, action de la glace et une force vers la droite</li>
<li>Une force vers la droite seulement</li>
</ol>

<p class="consigne">🗳️ Votez (1 à 4 doigts) <span class="fragment" data-fragment-index="1">→ 💬 Convainquez votre voisin</span> <span class="fragment" data-fragment-index="2">→ 🗳️ Revotez !</span> <button class="indice-bouton">💡 Indice</button>
<span class="chrono fragment" data-fragment-index="1"></span></p>

<p class="indice">Si une force vers la droite n'était pas compensée,<br>que deviendrait la vitesse du palet ?</p>

---

Le palet avance… sans qu'aucune force<br>ne le pousse vers la droite !

<p class="fragment fade-up">Le <span class="imp">poids</span> et l'<span class="imp">action de la glace</span> se compensent :<br>rien ne modifie son mouvement,<br>il continue sur sa lancée.</p>

<p class="fragment fade-up">Une force vers la droite non compensée<br>le ferait <b style="color:#FF644E">accélérer</b>.</p>


---

{{< slide  background-video="/airhockey.mp4" background-size="contain" background-transition="concave">}}


---


{{< slide  background-image="/airhockey.png" background-size="contain" background-transition="concave">}}

{{%note%}}
Ils se sont amusés à construire un airhockey géant.
On voit que ce n'est pas parfait (freine un peu) sur un petit laps de temps/d'espace (comme entre les lignes rouges), c'est nickel.
{{%/note%}}




---

Cela montre que l'échelle de temps de l'observation est primordiale. Sur un tout petit laps de temps,<br>on pourra facilement observer des mouvements rectilignes uniformes, alors que sur des temps<br>plus longs, c'est beaucoup plus difficile.


---

{{< slide  background-video="/vraihockey.mp4" background-size="contain" background-transition="concave">}}



---


{{< slide  background-image="/hockeyinertie.png" background-size="contain" background-transition="concave">}}


{{%note%}}
Là, ça dure suffisamment peu de temps pour être propre.
{{%/note%}}


---

Le principe d'inertie peut aussi<br>se limiter à une direction particulière.

<p class="fragment fade-up">Le poids étant vertical, un système qui n'est soumis qu'au poids ne subit aucune action dans la direction horizontale. Et par conséquent, ce système<br>conserve sa vitesse horizontale.</p>

---

{{< slide  background-video="/inertietramp.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/baseballcasque.mp4" background-size="contain"  background-video-loop="true" transition="concave">}}


{{%/section%}}


----

{{%section%}}

### Principe des actions réciproques<br>
 ou <span class="imp">3<sup >e</sup> loi de Newton</span>

---

{{< slide class="question" >}}

Une petite voiture percute un gros camion.<br>Pendant le choc, quelle force est la plus grande ?

<ol class="vote">
<li>Celle du camion sur la voiture</li>
<li>Celle de la voiture sur le camion</li>
<li class="fragment juste" data-fragment-index="3">Elles sont égales</li>
<li>Ça dépend de leurs vitesses</li>
</ol>

<p class="consigne">🗳️ Votez (1 à 4 doigts) <span class="fragment" data-fragment-index="1">→ 💬 Convainquez votre voisin</span> <span class="fragment" data-fragment-index="2">→ 🗳️ Revotez !</span>
<span class="chrono fragment" data-fragment-index="1"></span></p>

<p class="fragment corr" data-fragment-index="4">Surprenant ? La suite va l'expliquer.</p>



---

{{< youtube-slide id="36keC5eDUWk" ratio="16x9" >}}

---


Si un système A agit sur un système B,<br>alors le système B agit sur le système A avec une action <span class="imp">parfaitement opposée</span> à celle de A sur B.

<br>

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "border: solid #FF644E 5px;padding: 20px 20px 20px 20px; color: #FF644E; font-size:60px;border-radius:10px;" class="retenir">
$\vec{F}_{A\rightarrow B} = -\vec{F}_{B\rightarrow A} $
</div></div>

---

{{< slide  background-image="/interoursonvoiture.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/rebondterre.gif" background-size="contain" background-transition="concave">}}


Exemple :

La Terre agit sur nous autant qu'on agit sur la Terre...<br>
<p class="fragment fade-up">Pourquoi alors la Terre ne bouge pas quand on saute ?</p>
<p class="fragment fade-up">Elle bouge !</p>

<br><br><br><br>

---

Appliquer la même force sur des objets de masses différentes n'a pas le même effet (pousser un vélo ou pousser un camion ne donne pas le même résultat).

---


Cela ne semble pas déraisonnable de supposer<br>que les hauteurs des "sauts" du bonhomme<br>et de la Terre sont inversement proportionnelles<br>aux masses des deux corps.

<p class="fragment fade-up">Plus la masse est grande, plus le saut est <span class="fragment">petit.</span></p>

{{%note%}}
Justification : le centre de masse du système {Terre+bonhomme} ne doit pas bouger puisque ce système est isolé (aucune force n'agit sur lui) donc masse bonhomme * hauteur saut bonhomme = masse Terre * hauteur saut Terre
{{%/note%}}

---

<p>Si la planète avait la même masse, elle bougerait autant. Mais la masse de la Terre<br>vaut environ <span class="fragment">$\pu{6E24 kg}$ ...</span></p>



{{%note%}}
10 moles d'un truc de masse 1 kg et on a la masse de la Terre !
{{%/note%}}

---

"Inversement proportionnel" équivaut à "proportionnel à l'inverse" :

<table style="border:solid 1px #fff">
<tr>
<td style="border-bottom:solid 1px #0A8AD9; vertical-align: middle;">hauteur saut<br>bonhomme</td>
<td style="border-bottom:solid 1px #0A8AD9; vertical-align: middle;">1<br>
<div style="border-bottom:2px solid; width:80%; margin:-40px auto 10px auto;"><br></div>
masse<br>bonhomme</td>
</tr>
<tr>
<td style="vertical-align: middle;">hauteur<br>saut Terre</td>
<td style="vertical-align: middle;">1<br>
<div style="border-bottom:2px solid; width:80%; margin:-40px auto 10px auto;"><br></div>
masse<br>Terre</td>
</tr>
</table>


{{% note %}}
Et si on faisait sauter tous les humains au même moment (assez facile à faire si on les laisse où ils sont) mais les effets s'annulent. 
Et si on mettait tous les humains au même endroit avant de les faire sauter ?
$8\text{ milliards} \times \pu{70 kg} \approx \pu{6E11 kg}$.

Et $\pu{0,5 m}\times\frac{\pu{6E11 kg}}{\pu{6E24 kg}} = \pu{0,5 m}\times \pu{1E-13}= \pu{5E-14 m}$ soit environ 50 protons...
{{% /note %}}

---

{{< youtube-slide id="p2M8Y0z9Rl0" ratio="16x9" >}}


{{%/section%}}

---

{{%section%}}

### Force d'interaction gravitationnelle et poids

---

{{< slide  background-image="/luneterre.png" background-size="contain" background-transition-in="concave" background-transition-out="none">}}


<p style="text-align:left">
Ces deux forces ont-elles<br>la même intensité ?
</p>

<br><br><br><br><br>

---

{{< slide  background-image="/luneterre.png" background-size="contain" background-transition-in="none" background-transition-out="concave">}}


<p style="text-align:left">
D'après la 3<sup>e</sup> loi de Newton,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oui !
</p>

<br><br><br><br><br>


---


En utilisant [cette petite simulation](https://phet.colorado.edu/sims/html/gravity-force-lab-basics/latest/gravity-force-lab-basics_all.html?locale=fr) essayez<br>de déterminer comment l'intensité de la force d'attraction gravitationnelle varie en fonction<br>des masses en présence et en fonction<br>de la distance qui les sépare.


---



{{< slide  background-image="/fgravasurb.png" background-size="contain" background-transition="concave">}}

La force d'attraction gravitationnelle d'un système A de masse $m_A$ sur un système B de masse $m_B$<br>s'écrit vectoriellement :

<br><br><br><br>


---

<div style="display: flex;justify-content: center;">
<div style = "border: solid #B51700 5px;padding: 20px 20px 20px 20px; color: #FF644E; font-size:50px;border-radius:10px">
$\displaystyle \overrightarrow{F}_{A\rightarrow B} =  {\color{#73FDEA}-}G\frac{m_A\!\times\!m_B}{\mathrm{AB}^2}\, {\color{#73FDEA}\overrightarrow{u}_{\mathrm{AB}}}$
</div></div>

<br>

<ul>
<li> $G=\pu{6,67E-11 N*m2*kg-2}$<br>est la <span class="imp">constante de gravitation universelle</span></li>
<li> $m_A$ et $m_B$ en <b style="color:#FFF056">kg</b></li>
<li> $\mathrm{AB}$  en <b style="color:#FFF056">m</b> </li>
<li> $\vec{u}_{\mathrm{AB}}$ est le vecteur unitaire ($||\vec{u}_{\mathrm{AB}}||=1$) de direction (AB) et orienté de A vers B.</li>
</ul>

---

Pour faire les calculs, donc lorsqu'on cherche la norme de la force, on abandonne le ${\color{#73FDEA}-}$<br>et le vecteur unitaire ${\color{#73FDEA}\overrightarrow{u}_{\mathrm{AB}}}$ :

<br>

<div class="fragment fade-up" style="display: flex;justify-content: center;">
<div style = "padding: 20px 20px 20px 20px; color: #FF644E; font-size:50px;">
$\displaystyle F_{A\rightarrow B} =F_{B\rightarrow A} = G\frac{m_A\!\times\!m_B}{\mathrm{AB}^2}$
</div></div>


---

{{< slide  background-image="/fterrenounours.png" background-size="contain" background-transition="concave">}}

Appliquons cette définition à un système de masse $m$ posé sur la surface terrestre.
<br><br><br><br><br><br><br><br><br><br>

---

$$
\begin{aligned}
F_{Terre\rightarrow nounours} &= G\frac{m\times M_T}{R_T^2} \\\\
& = m\times \color{#FFD932}G\frac{M_T}{R_T^2} \\\\
& = m\times \color{#FFD932}g\\\\
\end{aligned}
$$

<p class="fragment fade-up">C'est la formule du poids !</p>

---

avec :

$$
g = 6,67\times10^{-11} \\,\color{#1DB100}{\text{N}\\!\cdot\\!\text{m}^2\\!\cdot\\!\text{kg}^{-2}}\color{white}\times\frac{\pu{5,97E24 \color{#1DB100}kg}}{\left(\pu{6,37E6 \color{#1DB100}m}\right)^2}
$$

<p class="fragment fade-up">
$\Rightarrow g = 9,81$ <span class="fragment">$\color{#1DB100}\text{N}\!\cdot\!\text{kg}^{-1}$</span>
</p>

<br>

<p class="fragment fade-up">On retrouve bien la valeur de la pesanteur terrestre !</p>

---

{{< slide class="question" >}}

Que vaut la pesanteur $g$ sur l'ISS ?

<br>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:-40px;">
<img src="/ISS.jpg" style="box-shadow:none;background:none;border-radius:15px;">
</div>

---

{{< slide class="question piege" >}}

L'ISS orbite à environ 400 km d'altitude.<br>Que vaut la pesanteur $g$ à cette altitude ?

<ol class="vote">
<li>$0$ («&nbsp;apesanteur&nbsp;»)</li>
<li>environ $\pu{1 N*kg-1}$</li>
<li class="fragment juste" data-fragment-index="3">environ $\pu{9 N*kg-1}$</li>
<li>$\pu{9,8 N*kg-1}$<br>comme au sol</li>
</ol>

<p class="consigne">🗳️ Votez (1 à 4 doigts) <span class="fragment" data-fragment-index="1">→ 💬 Convainquez votre voisin</span> <span class="fragment" data-fragment-index="2">→ 🗳️ Revotez !</span> <button class="indice-bouton">💡 Indice</button>
<span class="chrono fragment" data-fragment-index="1"></span></p>

<p class="indice">On peut réutiliser $g = G\dfrac{M_T}{d^2}$<br>avec $d$ la distance au centre de la Terre.</p>
<p class="indice">$d = R_T + h \approx \pu{6370 km} + \pu{400 km}$</p>

---

$$
g_{\text{ISS}} = G\frac{M_T}{(R_T+h)^2} = 6,67\times10^{-11}\times\frac{5,97\times10^{24}}{\left(6,77\times10^{6}\right)^2} \approx \pu{8,7 N*kg-1}
$$

<p class="fragment fade-up">Le poids des astronautes n'a presque pas changé<br>(environ 11 % de moins qu'au sol) !</p>

<p class="fragment fade-up">S'ils flottent, c'est que la station et eux<br><span class="imp">tombent ensemble</span> : tout est en <span class="imp">chute libre</span>.</p>


----

On parle de <span class="imp">chute libre</span> lorsqu'un système n'est soumis qu'à son propre poids.


{{< youtube-slide id="E43-CfukEgs" ratio="16x9" >}}


---

{{< slide class="question" >}}

Que peut-on dire du mouvement<br>d'un objet en chute libre ?

<br>

<ul>
<li class="fragment fade-up">il est accéléré vers le bas,</li>
<li class="fragment fade-up">il ne dépend pas de la masse.</li>
</ul>

---

Tentons maintenant d'expliquer<br>ce que l'on voit dans le gif qui suit.


---


{{< slide  background-image="https://media.tenor.com/kZh2R5EyEFQAAAAC/trampoline-fall.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/premierinstant.png" background-size="contain" background-transition="concave">}}

La vitesse des feuilles augmente dès le premier instant, mais au bout d'un temps très court,<br>la vitesse est encore très faible et<br>les feuilles nous apparaissent<br>donc immobiles.

<br><br><br><br><br><br>

---

{{< slide  background-video="/dinochutelibre.mp4" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="https://gifdb.com/images/thumbnail/wile-e-coyote-oops-falling-off-cliff-edge-sliu9qrfcz7qlo84.gif" background-size="contain" background-transition="concave">}}

{{%/section%}}

---
{{%section%}}

## Force  et variation<br>de la vitesse

---

Définissons le <span class="imp" style="color:#FEAE00">vecteur variation de vitesse $\overrightarrow{\Delta v}$</span> comme la variation de vitesse entre<br>deux instants  voisins : 

<p class="fragment fade-up">
$\color{#FEAE00}\overrightarrow{\Delta v} = \color{#FFD932}\overrightarrow{ v}_{M'} - \overrightarrow{v}_M$ avec M' proche de M.
</p>

---


Comme le stipule la contraposée du principe d'inertie, si $\color{#FEAE00}\Delta v \neq 0$ alors la somme des forces agissant<br>sur le système est non nulle.

<p class="fragment fade-up">Mais en plus, la direction et le sens de cette résultante des forces sont celles de $\textstyle\color{#FEAE00}\Delta \vec{v}$ comme on l'a vu<br>dans le cas d'une chute libre (activité Python).</p>

---

{{< slide class="question" >}}

La Lune tourne autour de la Terre sur une trajectoire<br>quasi circulaire, à vitesse de valeur constante.<br>Subit-elle une action non compensée ?

<ol class="vote">
<li>Non : sa vitesse est constante</li>
<li class="fragment juste" data-fragment-index="3">Oui</li>
<li>Non : elle est trop loin de la Terre</li>
<li>Impossible à dire</li>
</ol>

<p class="consigne">🗳️ Votez (1 à 4 doigts) <span class="fragment" data-fragment-index="1">→ 💬 Convainquez votre voisin</span> <span class="fragment" data-fragment-index="2">→ 🗳️ Revotez !</span> <button class="indice-bouton">💡 Indice</button>
<span class="chrono fragment" data-fragment-index="1"></span></p>

<p class="indice">Le vecteur vitesse de la Lune<br>garde-t-il toujours la même direction ?</p>
<p class="indice">Dessinez $\vec v$ en deux points voisins<br>de la trajectoire, puis $\overrightarrow{\Delta v}$.</p>

---

La valeur de la vitesse ne change pas,<br>mais sa <span class="imp">direction</span> change sans cesse :<br><span class="imp">$\overrightarrow{\Delta v} \neq \vec 0$</span>.

<p class="fragment fade-up">Une action non compensée s'exerce donc :<br>l'<b style="color:#FF644E">attraction gravitationnelle de la Terre</b>,<br>dirigée vers le centre de la Terre…<br>comme $\overrightarrow{\Delta v}$ !</p>

---

{{< youtube-slide id="fRNUbLc6U8s" ratio="16x9" >}}



{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/inertie/)