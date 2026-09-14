+++
title = "Circuit RC"
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




# Condensateurs<br>et circuit RC

----

{{%section%}}

## Intensité

---

L'<span class="imp">intensité $i(t)$</span> d'un courant électrique en un point d'un circuit est donnée par le <span class="imp">débit de charges électriques</span> en ce point à l'instant $t$.

---

En régime permanent (indépendant du temps), 

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
i = \frac{Q}{\Delta t}
$$
</div>

<p class="fragment fade-up">
où $Q$ est la variation de charge<br>pendant le laps de temps $\Delta t$ ($Q=\Delta q$)
</p>

<ul>
<li class="fragment fade-up">$i$ en <b class="fragment" style="color:#FFF056">A</b></li>
<li class="fragment fade-up">$\Delta t$ en <b class="fragment" style="color:#FFF056">s</b></li>
<li class="fragment fade-up">$Q$ en <b class="fragment" style="color:#FFF056">coulombs C</b></li>
</ul>

{{%note%}}
Analogue au DV = V/Delta t du débit volumique
{{%/note%}}

---

En régime variable (dépendant du temps),<br>l'intensité s'obtient en dérivant l'évolution $q(t)$<br>de la charge par rapport au temps. 

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
i(t)=\frac{\mathrm{d}q}{\mathrm{d}t}
$$
</div>


{{%/section%}}

---

{{%section%}}

## Comportement capacitif

---

On parle de <span class="imp">comportement capacitif</span> lorsqu'il y a <span class="imp">accumulation de
charges de signes opposés<br>sur des surfaces en regard</span>.


---

{{< slide  background-image="/orage.png" background-size="contain" background-transition="concave">}}


{{%note%}}
Le mécanisme de charge par collision (Électrification non-inductive)
Le moteur principal est la collision entre deux types de particules d'eau solide dans les zones du nuage où la température est comprise entre 0 °C et -40 °C :
- Le grésil (graupel) : de grosses particules de glace lourdes et poreuses.
- Les cristaux de glace : des particules beaucoup plus petites et légères.
Lorsqu'un cristal de glace et une particule de grésil entrent en collision en présence d'eau surfondue (eau restant liquide malgré une température négative), un transfert de charge s'opère par effet triboélectrique.

Le grésil se charge négativement lors de la collision, tandis que les petits cristaux de glace se chargent positivement.

La séparation mécanique : Gravité vs Convection
C'est ici que la géométrie du nuage se structure. Une fois les charges transférées par collision, les particules sont triées selon leur masse par les forces dynamiques du nuage :
L'ascendance (Updraft) : Les courants ascendants violents (pouvant atteindre 100 km/h) entraînent les petits cristaux de glace, très légers et chargés positivement, vers le sommet du nuage (l'enclume).
La sédimentation (Gravité) : Le grésil, beaucoup plus lourd et chargé négativement, résiste mieux à l'ascendance ou finit par tomber sous l'effet de son propre poids. Il se concentre donc dans la partie médiane et inférieure du cumulonimbus.

On obtient alors une structure globalement stratifiée :
Sommet (enclume) : Une vaste zone de charge positive (cristaux de glace).
Base : Une zone de charge négative intense (grésil).

Cette séparation crée des champs électriques colossaux (plusieurs dizaines de kV/m) qui finissent par provoquer le claquage de l'air : l'éclair.
{{%/note%}}

---

{{< slide  background-image="/wimshurst.png" background-size="contain" background-transition="concave">}}

{{%note%}}
Explication machine de Wimshurst
https://youtu.be/Zilvl9tS0Og
Avec bouteilles de Leyde connectées, on a une capacité de 50 à 100 pF.
La charge atteinte si ça claque à 1 cm est d'environ 2 μC.
Déduisons-en la tension :
Q = C*U -> U = Q/C  = 2 μC / 50 pF = 40 kV  
{{%/note%}}

---

{{< slide background-image="https://upload.wikimedia.org/wikipedia/commons/5/56/Hindenburg_disaster,_1937.jpg" background-size="contain" >}}

{{%note%}}
Le 6 mai 1937 à New York, un câble déchire l'enveloppe en toile d'un des réservoirs du ballon dirigeable LZ 129 Hindenburg, provoquant une fuite de dihydrogène qui se mélange alors à l'air.
Au moment où le commandant largue les deux cordes d'ancrage au sol, elles se mouillent sous l'effet de la pluie et deviennent conductrices.
Instantanément, l'armature métallique de l'aéronef est mise à la terre, ce qui crée une accumulation de charges opposées sur les surfaces en regard constituées par l'armature métallique et l'enveloppe extérieure, bien moins conductrice.
Cette différence de potentiel fait surgir une étincelle entre l'armature et l'enveloppe, qui enflamme instantanément le dihydrogène mélangé à l'air.
Wikipedia
{{%/note%}}

{{%/section%}}

---

{{%section%}}

## Qu'est-ce qu'un condensateur ?

---

{{< slide  background-image="/condensateurs.png" background-size="contain" background-transition="concave">}}

---

À quoi peuvent bien servir servir ces trucs ?

---

Ce sont des sortes de chateau d'eau<br>à charges électriques.


---

Ils peuvent servir à délivrer une certaine charge électrique en un court laps de temps (défibrillateur, flashs, supercondensateurs d'autobus, etc.).

---

{{< slide  background-image="/appconden.png" background-size="contain" background-transition="concave">}}

---

Ils peuvent aussi servir d'amortisseur pour<br>les variations de tensions afin de protéger<br>des composants ou pour filtrer des signaux.

---

{{< slide  background-image="/compcapa.png" background-size="contain" background-transition="concave">}}

{{%note%}}
La résistance  est montée en parallèle avec les deux DEL pour permettre une charge et une décharge complètes du condensateur.
•	Le problème du seuil de tension : Une DEL ne conduit le courant que si la tension à ses bornes est supérieure à sa tension de seuil  (environ 1,8 V pour une DEL rouge et 2,1 V pour une DEL verte).
•	Sans  : Lors de la charge, dès que la tension aux bornes du condensateur atteint , l'intensité devient trop faible pour maintenir la DEL passante. Le circuit s'ouvre et la charge s'arrête prématurément. Le condensateur ne parviendrait jamais à la tension finale .
•	Avec  : Elle offre un chemin résistif permanent. Même quand la tension devient inférieure au seuil des DEL (et qu'elles s'éteignent), le courant continue de circuler à travers  jusqu'à ce que l'équilibre soit atteint (uC = E ou uC = 0).
{{%/note%}}

---

Enfin, comme leurs caractéristiques<br>électriques dépendent de leur géométrie,<br>ils peuvent servir de capteurs.

<p class="fragment fade-up">On trouve des capteurs capacitifs pour la mesure d'épaisseur, de niveau de liquide, d'humidité, comme détecteur de présence, dans les micros, etc.</p>

---

<iframe width=833 height=625 src="https://www.edumedia.com/media/frame/fr/793/?auth=73fa8b06d8f5b850d5f9e8c1b7eb25b4/27824" frameborder=0 style="border-radius:10px;"></iframe>

---


<iframe width="800" height="450" src="https://www.youtube.com/embed/KuekQ-m9xpw?start=78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%/section%}}

---

{{%section%}}

## Modèle du condensateur

---

Un <span class="imp">condensateur</span> est un dipôle électrique constitué de deux surfaces conductrices en regard (les armatures), séparées par un matériau isolant (le diélectrique).

<p class="fragment fade-up">Symbole électrique :</p>

<div class="fragment fade-up" style="position:relative;margin-left:auto;margin-right:auto;width:300px;max-width:100%;">
<img src="/symbelc.png" style="box-shadow:none;background:none;">
</div>


---

Le condensateur a un <span class="imp">comportement capacitif</span> : lorsqu'il est soumis à une tension électrique non nulle, les charges électriques ${\color{#FF968D}q_A}$ et ${\color{#56C1FF}q_B}$ portées par ses deux armatures A et B sont opposées : ${\color{#FF968D}q_A}=-{\color{#56C1FF}q_B}$.


---

{{< slide  background-image="/condcharges.png" background-size="contain" background-transition="concave">}}

---

La charge $q$ portée par l'armature A d'un condensateur est <span class="imp">proportionnelle</span> à la tension $u_C = u_\mathrm{AB}$<br>mesurée entre ses bornes. 

---


Et on nomme <span class="imp">capacité C</span> du condensateur le coefficient de proportionnalité entre la charge et la tension.

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
q = C\times u_C
$$
</div>


<ul style="margin-top:0.5em;">
<li class="fragment fade-up">$u_C$ en <b class="fragment" style="color:#FFF056">V</b></li>
<li class="fragment fade-up">$q$ en <b class="fragment" style="color:#FFF056">C</b></li>
<li class="fragment fade-up">$C$ en <b class="fragment" style="color:#FFF056">farads F</b><br><sapn class="fragment">(1 F =<span class="fragment">1 C/V</span>)</span></li>
</ul>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/convcond.png" style="box-shadow:none;background:none;">
</div>

Une tension $u_C$ est positive si elle pointe<br>vers l'armature de charge $q$ positive.

---

Hormis les supercondensateurs qui peuvent avoir<br>des capacités de l'ordre de la centaine de farads,<br>les capacités s'étalent typiquement de la dizaine<br>de picofarads à la dizaine de millifarads.

---

{{< slide  background-image="/echellecapacite.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

## Circuit RC série

---

{{< slide  background-image="/schemgencond.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---

{{%section%}}

### Charge

On charge un condensateur de capacité $C$<br>initialement déchargé à travers un dipôle ohmique<br>de résistance $R$ sous une tension $E$.

---

{{< slide  background-image="/circuitcharge.png" background-size="contain" background-transition="concave">}}

---

À l'instant initial ($t=0$), on ferme l'interrupteur K.

<p class="fragment fade-up">D'après la loi des mailles :</p>

<div class="fragment fade-up">
$$
{\color{#88FA4E}E}={\color{#FFF056}u_R(t)}+{\color{#FF95CA}u_C(t)}
$$
</div>

---

Appliquons la loi d'Ohm aux bornes du dipôle ohmique :

<div class="fragment fade-up">
$$
{\color{#FFF056}u_R(t)}= R \times {\color{#FF968D}i(t)}
$$
</div> 

---

Puis rappelons la définition de l'intensité<br>en fonction de la charge $q(t)$ :


<div class="fragment fade-up">
$$
 {\color{#FF968D}i(t)}= {\color{#FF968D}\frac{\mathrm{d}q}{\mathrm{d}t}(t)}
$$
</div>

---

Et le lien entre la tension aux bornes<br>du condensateur et la charge :


<div class="fragment fade-up">
$$
q(t)= C\times  u_C(t)
$$
</div>

<p class="fragment fade-up">On en déduit que :</p>

<div class="fragment fade-up">
$$
{\color{#FF968D}\frac{\mathrm{d}q}{\mathrm{d}t}}= {\color{#FF968D} C\times  \frac{\mathrm{d}u_C}{\mathrm{d}t} }
$$
</div>


---  


En réinjectant dans la loi des mailles, on obtient :

<div class="fragment fade-up">
$$
 R \times {\color{#FF968D} C\times  \frac{\mathrm{d}u_C}{\mathrm{d}t} }  + u_C = E
$$
</div>

---

Après division par $RC$ :

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
  \frac{\mathrm{d}u_C}{\mathrm{d}t}  + \frac{1}{RC} u_C(t) = \frac{E}{RC}
$$
</div>

<p class="fragment fade-up">
Équation différentielle du premier ordre  à coefficients constants et avec second membre constant.
</p>

---

La solution générale de cette équation s'écrit :

<div class="fragment fade-up">
$$
 u_C(t) = A\mathrm{e}^{-\frac{t}{\tau}} + B
$$
</div>

<p class="fragment fade-up">On a par conséquent :</p>


<div class="fragment fade-up">
$\displaystyle  \frac{\mathrm{d}u_C}{\mathrm{d}t} = $<span class="fragment">$\displaystyle -\frac{1}{\tau}A\mathrm{e}^{-\frac{t}{\tau}} + 0$</span>
</div>

---

Injectons la solution dans l'équation différentielle :

<div class="fragment fade-up">
$$
-\frac{1}{\tau}A\mathrm{e}^{-\frac{t}{\tau}} + \frac{1}{RC}\left( A\mathrm{e}^{-\frac{t}{\tau}} + B\right) = \frac{E}{RC}
$$
</div>

<div class="fragment fade-up">
$$
{\color{#FF968D}\mathrm{e}^{-\frac{t}{\tau}}}\left( {\color{#56C1FF} -\frac{A}{\tau} + \frac{A}{RC} }\right)=  \frac{1}{RC}\left( {\color{#61D836} E-B}\right)
$$
</div>

---


Comme le membre de gauche dépend du temps,<br>il ne peut pas être égal pour tout instant $t≥0$<br>au membre de droite, qui lui est constant,<br>sauf si les deux sont nuls indépendamment.

<div class="fragment fade-up">
$$
\displaystyle
\Rightarrow \begin{cases}
{\color{#56C1FF} -\frac{A}{\tau} + \frac{A}{RC} } = 0\\
{\color{#61D836} E-B} =0
\end{cases}
$$
</div>


---

La première équation implique :

<div class="fragment fade-up" class="fragment fade-up">
$$
{\color{#56C1FF} \tau } = {\color{#56C1FF} RC } 
$$
</div>

<p class="fragment fade-up">Et la seconde :</p>

<div class="fragment fade-up">
$$
{\color{#61D836} B } = {\color{#61D836} E } 
$$
</div>

---

On a ainsi :

<div class="fragment fade-up">
$$
u_C(t) = A\,\mathrm{e}^{-\frac{t}{RC}} + E
$$
</div>

<p class="fragment fade-up">
Il ne reste plus qu'à déterminer $A$<br>grâce aux conditions initiales.
</p>

---

On sait que le condensateur est initialement déchargé. 

<p class="fragment fade-up">
$\Rightarrow u_C(t=0)=0$</p>

<p class="fragment fade-up">
D'où</p>

<div class="fragment fade-up">
$$
 A\,\mathrm{e}^{-\frac{0}{RC}} + E = 0
$$
</div>

<div class="fragment fade-up">
$$
\Rightarrow A = -E
$$
</div>


---

Finalement :

<div class="fragment fade-up">
$$
u_C(t) =  -E \,\mathrm{e}^{-\frac{t}{RC}} + E 
$$
</div>

<p class="fragment fade-up">
Qu'on peut réécrire plus élégamment :
</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
u_C(t) =  E\left(1 - \mathrm{e}^{-\frac{t}{\tau}}\right)
$$
</div>

---

<u>Autre méthode</u>

<br>

<p class="fragment fade-up">Repartons de :</p>

<p class="fragment fade-up"> $ u_C(t) = A\mathrm{e}^{-\frac{t}{\tau}} + B$</p>

---

<b style="color:#FFF056">Plaçons-nous en $t\rightarrow \infty$.</b>

<p class="fragment fade-up">On atteint alors le <b style="color:#FFF056">régime permanent</b>.</p>

<p class="fragment fade-up">Que vaut l'intensité dans le circuit en $t\rightarrow \infty$ ? <span class="fragment imp">0 !</span></p>

<p class="fragment fade-up">En effet, le condensateur est alors entièrement chargé et se comporte comme un interrupteur ouvert. </p>

<p class="fragment fade-up">
La loi des mailles donne alors <span class="fragment">$u_c(t\to\infty)=E$</span>.<br><span class="fragment">($u_R(t\to\infty)=R\times i(t\to\infty) = 0$)</p>

---

Or puisque $\displaystyle \lim_{t\to\infty} \mathrm{e}^{-\frac{t}{\tau}} = 0$


<div class="fragment fade-up">
$$
\lim_{t\to\infty} u_C(t) = B
$$
</div>

<p class="fragment fade-up">On obtient ainsi :</p>

<div class="fragment fade-up">
$$
B = E
$$
</div>

---

On détermine $A$ grâce aux conditions initiales :

<div class="fragment fade-up">
$$
u_c(0) = A\,\mathrm{e}^{-\frac{0}{\tau}} + E = 0
$$
</div>

<p class="fragment fade-up">(condensateur initialement déchargé)</p>

<div class="fragment fade-up">
$$
\Rightarrow A = -E
$$
</div>

---

Enfin, on injecte $u_C(t) = -E\\,\mathrm{e}^{-\frac{t}{\tau}} + E$<br>
dans l'équation différentielle :

<div class="fragment fade-up">
$$
\frac{E}{\tau} \mathrm{e}^{-\frac{t}{\tau}} + \frac{1}{RC}\left(-E\,\mathrm{e}^{-\frac{t}{\tau}} + E\right) = \frac{E}{RC}
$$
</div>

<div class="fragment fade-up">
$$
\Rightarrow \mathrm{e}^{-\frac{t}{\tau}} \left( \frac{1}{\tau} - \frac{1}{RC}\right) = 0
$$
</div>

---

Or un produit ne peut être nul<br>que si un de ses facteurs est nul.

<p class="fragment fade-up">Et comme $\mathrm{e}^{-\frac{t}{\tau}} > 0$, alors $\tau = RC$</p>

---

Le plus souvent, au bac, la démarche est plus simple :

<br>

<ul>
<li class="fragment fade-up">On vous demande d'abord d'établir l'équation différentielle régissant l'évolution de $u_C$, souvent<br>en proposant la forme $\frac{\mathrm{d}u_C}{\mathrm{d}t}+\frac{u_C}{\tau} = \frac{E}{\tau}$ et en demandant alors d'expliciter $\tau$ en fonction de $R$ et $C$.</li>
</ul>

---

<ul>
<li>On vous demande ensuite de vérifier que $u_C(t)=E\times\left(1-\mathrm{e}^{-\frac{t}{\tau}}\right)$ est solution.<br>Il suffit d'injecter la solution dans l'équation et de vérifier que ses deux membres sont bien égaux.</li>
</li>
</ul>

<br><br>

<p class="fragment fade-up"><u>Exemple</u> de ce type d'enchainement :<br>
<a href="https://coursphychi.github.io/act-defibrillateur.pdf" target="_blank">"Défibrillateur cardiaque"</a></p>

---

Mais des démonstrations complètes<br>sont parfois demandées 💀
<br>

<p class="fragment fade-up"><u>Exemple</u> :<br>
<a href="https://coursphychi.github.io/act-vigneron.pdf" target="_blank">"La physique au service du vigneron"</a></p>


{{%/section%}}

---

{{%section%}}

### Décharge


On décharge un condensateur de capacité $C$ initialement chargé à la tension $E$ à travers<br>un dipôle ohmique de résistance $R$.

<p class="fragment fade-up">À $t=0$, on ferme l'interrupteur.</p>

---

{{< slide  background-image="/circuitdecharge.png" background-size="contain" background-transition="concave">}}

---

$$
\begin{cases}
\text{loi des mailles} : u_C(t) + u_R(t) ={\color{#FFF056}0}\\\\
\text{loi d'Ohm} : u_R = R\times i(t)\\\\
i(t)=\frac{\mathrm{d}q}{\mathrm{d}t}\\\\
q(t)=C\times u_C(t) 
\end{cases}
$$


<div class="fragment fade-up">
$$
\Downarrow
$$
</div>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
\frac{\mathrm{d}u_C}{\mathrm{d}t} + \frac{1}{RC}u_C = {\color{#FFF056}0}
$$
</div>

---

On obtient à nouveau une équation différentielle<br>du premier ordre à coefficient constant.

<p class="fragment fade-up">Mais celle-ci est <span class="imp">homogène</span><br>(sans seconde membre).</p>

<p class="fragment fade-up">La solution est de la forme :</p>

<div class="fragment fade-up">
$$
u_C(t) = A\,\mathrm{e}^{-\frac{t}{\tau}}
$$
</div>

---

On injectant dans l'équation différentielle,<br>on obtient $\tau = RC$.

<p class="fragment fade-up">Et en utilisant le fait que le condensateur est initialement chargé sous la tension $E$ :</p>

<div class="fragment fade-up">
$$
u_C(0) = A\,\mathrm{e}^{-\frac{0}{\tau}} = A = E
$$
</div>

---

D'où finalement :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
u_C(t) = E\,\mathrm{e}^{-\frac{t}{RC}}
$$
</div>


{{%/section%}}

---

{{%section%}}

## Simulations

---


{{< slide background-iframe="/rc.html" background-size="contain" background-transition="concave" background-interactive="true">}}

---

<iframe width=780 height=625 src="https://www.edumedia.com/media/frame/fr/763/?auth=3bc2c1a79e95711655afd1e4d45df273/27824" frameborder=0 style="border-radius:10px;"></iframe>

{{%/section%}}

---


{{%section%}}

## Temps caractéristique

---

On peut vérifier sur l'équation différentielle<br>que le temps caractéristique $\tau=RC$<br>a bien la dimension d'un temps.


<div class="fragment fade-up">
$$\frac{\color{#FF95CA}\mathrm{d}u_C}{\color{#FFF056}\mathrm{d}t}+\frac{\color{#FF95CA} u_C}{\color{#FFF056}\tau} = \frac{\color{#FF95CA} E}{\color{#FFF056}\tau}$$
</div>

---

$\tau$ caractérise la durée caractéristique du<br><span class="imp">régime transitoire</span> (partie de l'évolution<br>où les variations sont grandes).

---

Pour obtenir $\tau$ graphiquement :

<ul>
<li class="fragment fade-up">on trace la tangente à l'origine ;</li>
<li class="fragment fade-up">$\tau$ est alors l'abscisse du point d'intersection de la tangente et de l'asymptote horizontale $u_C=E$ (pour la charge) ou $u_C = 0$ (pour la décharge).</li>

---

<iframe width=780 height=625 src="https://www.edumedia.com/media/frame/fr/503/?auth=48a8b9028d992a59b88095c7fec9d4e2/27824" frameborder=0 style="border-radius:10px;"></iframe>

---

Autre méthode :

<p class="fragment fade-up">
On regarde le temps au bout duquel $u_C(t)$<br>dépasse 63&nbsp;% de $E$ (pour la charge)<br>ou passe sous 37&nbsp;% de $E$ (pour la décharge).
</p>

---

On peut prouver qu'on approche le régime permanent<br>($E$ pour la charge ou 0 pour la décharge)<br>à mieux de 99&nbsp;% au bout de <span class="imp">$5\tau$</span>.

<p class="fragment fade-up">Cela donne un critère de séparation entre<br><b style="color:#FFD932">régime transitoire</b> et <b style="color:#56C1FF">régime permanent</b>.</p>

---

<iframe scrolling="no" title="Influence de τ" src="https://www.geogebra.org/material/iframe/id/fxxxrjcf/width/880/height/572/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="880px" height="572px" style="border:0px;border-radius:10px;"> </iframe>



{{%/section%}}


---

[Retour site](https://coursphychi.github.io/tspe/rc/)