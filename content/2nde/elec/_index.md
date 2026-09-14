+++
title = "Électricité"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#00A2FF;}

span {font-weight:normal;color:white;}

ul {
    color:#929292;
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
</style>





# Électricité


---

{{% section %}}

## Rappels

---


### intensité I

---

<ul>

<li>Définition : débit de charges électriques</li>

<li> Unité : <span class="imp fragment">ampère (A)</span> </li>

<li>Appareil de mesure : <span class="imp fragment">ampèremètre</span> 

<li>Branchement : <span class="imp fragment">série</span> </li>

<ul>

---

{{< slide  background-image="/commentmesi.png" background-size="contain" background-transition="concave-in" transition="zoom">}}

<br><br><br><br><br>
Comment effectuer les branchements<br>pour mesurer $I$ ?

---


{{< slide  background-image="/commentmesi.png" background-size="contain" transition="zoom-in">}}

<br><br><br><br><br>
Il faut "casser" le circuit ! Retirer un fil<br>et mettre l'ampèremètre à la place<br>
(l'ampèremètre doit être traversé par le courant).

----

{{< slide  background-image="/commentmesi2.png" background-size="contain" transition="fade-in fade-out">}}

<br><br><br><br><br>
Il faut "casser" le circuit ! Retirer un fil<br>et mettre l'ampèremètre à la place<br>
(l'ampèremètre doit être traversé par le courant).


---

<a href="https://www.edumedia.com/fr/media/94-quiz-multimetre?auth=db28a827883c07c3dcb80248bcdad8dc/27824"><b style="font-size:2em;">Quiz multimètre</b></a>

---

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️

Pour la borne A, il y a souvent deux choix possibles sur l'ampèremètre. Il faut toujours commencer par celle protégée par un gros fusible (10 ou 20 A)<br>et régler le calibre en conséquence.

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️

<p class="fragment">Si la valeur lue est inférieure au calibre qui précède,<br>on peut changer le branchement pour la borne<br>moins protégée et descendre le calibre.</p>

---

Exemple :

On lit 0,25 A sur le calibre 10 A.<br>
Le calibre qui précède indique "200m".<br> 
Peut-on changer de borne de branchement ?

<p class="fragment"> 0,25 A = 250 mA<br> et 250 mA $>$ 200 mA<br> Donc non !</p>


---

Quel que soit l'appareil de mesure, on commence toujours par le plus <span class="imp fragment">gros</span> calibre !

<p class="fragment">Et on descend progressivement<br>(lorsque la valeur lue est<br>inférieure au calibre<br>qui précède).</p>

<p class="fragment">Si un 1 s'affiche seul sur la gauche de l'écran, cela signal que vous êtes hors calibre. C'est mal 💀</p>

----


{{< slide  background-image="/intensriviere.png" background-size="contain" background-transition="concave">}}



Analogie : débit d'une rivière

<br><br><br><br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/loidesnoeuds.png" background-size="contain" background-transition="concave">}}

<span class="imp">Loi des nœuds :</span>

(aussi appelée au collège<br>"loi d'additivité des intensités")

<br><br><br><br><br><br><br><br><br><br><br>

---

### tension U

---

<ul>

<li>Définition : différence de densité de charge électrique entre deux points du circuit</li>

<li> Unité : <span class="imp fragment">volt (V)</span> </li>

<li>Appareil de mesure : <span class="imp fragment">voltmètre</span> 

<li>Branchement : <span class="imp fragment">dérivation</span> </li>

<ul>

---

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️

Lorsqu'on mesure la tension aux bornes<br>d'un générateur, toujours s'assurer de bien<br>être branché sur la borne V du voltmètre.<br>
Si branchement dans la borne A,<br>il y a court-circuit du générateur 💀.

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️

---


{{< slide  background-image="/tensionriviere.png" background-size="contain" background-transition="concave">}}



Analogie : dénivelé d'une rivière

<br><br><br><br><br><br><br><br><br><br><br>


---

{{< slide  background-image="/mesureu.png" background-size="contain" background-transition="concave">}}


On peut représenter une tension par une flèche.

Par convention, la flèche pointe<br>vers la borne V du voltmètre.


<br><br><br><br><br><br><br><br>

---

{{< slide  background-image="/loidesmailles.png" background-size="contain" background-transition="concave">}}

<span class="imp">Loi des mailles :</span>

(aussi appelée au collège<br>"loi d'additivité des tensions")

<br><br><br><br><br><br><br><br><br>



---

### résistance R

Elle lie entre elles la tension et l'intensité

---

<ul>

<li>Définition : <span class="fragment">c'est le rapport entre la tension et l'intensité</span><br>
<span class="fragment imp">$\displaystyle R=\frac{U}{I}$</li>

<li> Unité : <span class="imp fragment">ohm ($\Omega$)</span> </li>

<li>Appareil de mesure : <span class="imp fragment">ohmmètre</span> 

<ul>

---

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️

Branchement :

Pour mesurer la résistance d'un dipôle, il faut <u>sortir le dipôle du circuit</u> et brancher l'ohmmètre à ses bornes. 

⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️‼️⚠️



---

Peut-on avoir tension sans intensité ?

<p class="fragment" style="color:#1DB100">OUI</p>

<p class="fragment">Où ?</p>

<p class="fragment" style="color:#1DB100">Aux bornes d'une pile non branchée,<br>d'un interrupteur ouvert relié à un générateur, etc.</p>


---

Peut-on avoir intensité sans tension ?

<p class="fragment" style="color:#1DB100">OUI</p>

<p class="fragment">Où ?</p>

<p class="fragment" style="color:#1DB100">Aux bornes d'un fil, d'un interrupteur fermé,<br>d'un très bon conducteur, etc.<br>Il faut juste que la résistance du dipôle<br>soit <span class="fragment" style="color:#1DB100">nulle ou quasi nulle.</span></p>


{{%note%}}
La résistance n'est strictement nulle qu'aux bornes d'un fil idéal = parfaitement conducteur, ce qui n'est jamais le cas sauf si supraconducteur.
{{%/note%}}

---

- [Applet geogebra loi des nœuds](https://www.geogebra.org/m/kp2qtnqx)
- [Applet geogebra loi des mailles](https://www.geogebra.org/m/w7snw4aw)

{{%/section%}}

---

{{%section%}}


## Exercices

---

{{< slide  background-image="/exoelec1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/exoelec2.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---


{{%section%}}


## Caractéristique d'un dipôle

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#0076BA;padding:15px 10px 20px 10px; width:content; color:white;border-radius:10px;">
La <b>caractéristique</b> d’un dipôle électrique<br>est la relation existant entre l’intensité I<br>du courant traversant le dipôle<br>et la tension U aux bornes de celui-ci. 
</div>
</div>


---

Elle est générallement fournie<br>sous la forme d’un graphique représentant :

<br>

<ul style="margin-top:-1em;">
<li class="fragment fade-up">soit la tension aux bornes du dipôle<br>en fonction de l’intensité du courant<br>qui le traverse : $U = f(I)$ ;</li>
<li class="fragment fade-up" style="margin-top:1em;">soit l’intensité du courant traversant<br>le dipôle en fonction de la tension<br>appliquée à ses bornes : $I = g(U)$.</li>
</ul>

---

Il y a deux montages possibles<br>pour tracer une caractéristique :

<br>

<ul style="margin-top:-1em;">
<li class="fragment fade-up">soit on utilise un générateur variable ;</li>
<li class="fragment fade-up" style="margin-top:1em;">soit une résistance variable<br>en série avec le dipôle.</li>
</ul>



---

{{< slide  background-image="/montagecaracteristique.png" background-size="contain" background-transition="concave">}}


---

Fonctionnement d'un rhéostat :

<br>

{{< youtube-slide id="MzIkKmHrtDc" ratio="16x9" >}}

---


{{< slide  background-image="/exemplescarcteristiques.png" background-size="contain" background-transition="concave">}}

---

La caractéristique d'un <span class="imp">dipôle ohmique</span><br>a la particularité de pouvoir être modélisée<br>par une <span class="imp">fonction linéaire</span>.

---

Cela signifie que la tension $U_R$ aux bornes<br>d'un dipôle ohmique est <span class="imp">proportionnelle</span><br>à l'intensité $I_R$ le traversant.

---

C'est la <span class="imp" style="color:#FEAE00">loi d'Ohm</span> :

<br>

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#F27200;padding:15px 50px 20px 50px; width:content; color:white;border-radius:10px;">
$$U_R = R\times I_R$$
</div>
</div>

<br>

<p class="fragment">$R$ est la <span class="imp" style="color:#FEAE00">résistance</span> (constante) du dipôle.</p>

<p class="fragment">Unité : <span class="imp" style="color:#FEAE00">le ohm (Ω)</span></p>

---

<u>Rq</u> :

Un dipôle peut avoir le comportement électrique<br>d'un dipôle ohmique sur une plage restreinte d'intensité puis s'en éloigner lorsque l'intensité<br>sort de la plage (sa résistance varie alors). 

<br>

<p class="fragment" style='color:#929292'>cf. fin de l'activité 1</p>


---


La <b>superposition</b>  sur un même graphique<br>
de la caractéristique d'un générateur et de celle<br>
d'un récepteur permet de prévoir la valeur de l’intensité du courant délivré par le générateur<br>
et la valeur de la tension aux bornes du récepteur.

<p class="fragment">
    Ce sont les coordonnées du point<br>d'intersection des deux courbes, appelé<br><span class="imp">point de fonctionnement du circuit</span>.
</p>


---

{{< slide  background-image="/ptfctnmt.png" background-size="contain" background-transition="concave">}}



{{%/section%}}


---

[Retour site](https://coursphychi.github.io/2nde/elec/)