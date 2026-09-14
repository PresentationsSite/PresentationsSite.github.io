+++
title = "Signaux"
outputs = ["Reveal"]

+++



## Décomposition d'un signal et transmission


---

{{% section %}}


### Spectre d'amplitude<br>d'un signal périodique

---

{{< slide  background-image="/decomp.gif" background-size="contain" background-transition="concave">}}

---

Tout signal périodique (comme un son musical) peut se **décomposer** en une<br>**série de signaux sinusoïdaux**.

{{%fragment%}}<span style="font-weight:normal">En représentant l'</span>amplitude<span style="font-weight:normal"><br>de chacun de ces signaux sinusoïdaux</span><br>en fonction de leur fréquence<span style="font-weight:normal">, on obtient<br>le </span>spectre d'amplitude<span style="font-weight:normal"> du signal.</span>{{%/fragment%}}

---


Exemple : https://www.compadre.org/osp/pwa/soundanalyzer/


---

{{< slide  background-image="/spectreweb.png" background-size="contain" background-transition="concave">}}

---

- Le premier pic du spectre d'amplitude de fréquence non nulle se trouve à quelle fréquence particulière ?<br>

<br><br>

{{%fragment%}}<span style="font-weight:normal">Ce premier pic où $f>0$<br>est appelé le </span>fondamental<span style="font-weight:normal">.<br>Il se trouve à la </span>fréquence du signal.{{%/fragment%}}

---

- Que remarque-ton sur la fréquence des autres pics ?<br>

<br><br>


{{%fragment%}}<span style="font-weight:normal">Leur fréquence est un multiple de la fréquence<br>du fondamental. On  appelle ces autres pics<br>les </span>harmoniques<span style="font-weight:normal"> du signal.</span>{{%/fragment%}}

---

Dans [cet applet Geogebra](https://www.geogebra.org/m/s4jhpvt2), on voit qu'en plus<br>du **fondamental** et des **harmoniques**,<br>il peut y avoir une composante continue<br>(un signal continu ou "offset" qui décale le zéro).

---

[Une autre appliquette pour la route](https://www.geogebra.org/m/cgqfparq)

---

Le **rang** d'un harmonique correspond<br>à son multiple de la fréquence.

- Le fondamental est ainsi aussi l'harmonique de rang 1 car $f_1=1\times f$
- L'harmonique de rang $n$ correspond à la fréquence $f_n=n\times f$


---

<u>Remarque</u> :

Il se peut très bien que l'harmonique d'un certain rang ait une amplitude nulle (pas de pic)<br>sans que cela empèche des harmoniques<br>de rang supérieur d'exister.

---

{{< slide  background-image="/spectramp.png" background-size="contain" background-transition="concave">}}

---

Le spectre d'amplitude est une recette donnant<br>les ingrédients élémentaires d'un signal<br>et leurs proportions.

- les ingrédients élémentaires sont les sinusoïdes dont la fréquence est donnée<br>par la position horizontale des pics.
- leur proportion dans le mélange correspond<br>à la hauteur du pic.

{{% /section %}}

---

{{% section %}}

### Transmission d'un signal :<br>bande passante

---

Les canaux de transmission d'un signal ne laissent généralement pas passer toutes les fréquences mais seulement celles comprises entre deux fréquences limites : $f_{min}$ et $f_{max}$.

{{%fragment%}}<span style="font-weight:normal">On appelle l'intervalle $[f\_{min},f\_{max}]$<br>la </span>**bande passante**.{{%/fragment%}}

---

Le spectre d'amplitude du signal à transmettre nous permet de déterminer la bande passante dont on a besoin.

---

Si le rang le plus haut d'un harmonique notable<br>du signal est $n$, alors la bande passante<br>du canal de transmission doit être :

- $[f,f_n]$ si le signal ne possède pas de composante continue 
- et $[0,f_n]$ s'il y a une composante continue.


---
{{< slide  background-image="/exspectre.png" background-size="contain" background-transition="concave">}}

Exemple : quelle devra être la bande passante pour transmettre fidèlement le signal de fréquence 200&nbsp;Hz dont le spectre est donné ci-dessous ?
<br><br><br><br>

---

{{%youtube w7y-1eY0mcE%}}


---


{{< slide  background-image="/freqcom.png" background-size="contain" background-transition="concave">}}


[Lien vers pdf de l'ANFR](/freqcom.pdf)
<br><br><br><br><br><br><br><br><br><br>

---

Pour transmettre un signal dont les fréquences du spectre ne sont pas compatibles avec la bande passante, on le **transpose en fréquence**.


---

{{< slide  background-image="/transpfreq.png" background-size="80%" background-transition="concave">}}


---

Pour y parvenir, on utilise une **onde porteuse** dont la fréquence est dans la bande passante et on la **module** avec le signal qu'on veut transmettre<br>(en amplitude,  en fréquence, ou en phase).



{{% /section %}}

---

{{% section %}}

### Transmission d'un signal :<br>antennes

---

Pour émettre ou recevoir un signal électromagnétique, on utilise des **antennes**<br>dont les dimensions sont proches des<br>longueurs d'onde émises ou reçues<br>

<br>

<div style="border: solid 5px black;display: inline-block;padding:20px">
Taille antenne $\approx$ $\lambda$
</div>

---

Pour une réception ou émission optimale,<br>la taille de l'antenne vaut :
- $\lambda/2$ dans le cas d'une antenne demi-onde 
- $\lambda/4$ dans le cas d'une antenne quart-d'onde.


Plus l'antenne est petite ou grande par rapport<br>à sa taille optimale, plus elle perd en efficacité.

---

{{< slide  background-image="/antennehelico.png" background-size="contain" background-transition="concave">}}

---


{{< slide  background-image="/antennebateau.png" background-size="contain" background-transition="concave">}}

---

L'antenne de l'hélico est une antenne 2 à 23 MHz<br>et celle du bateau, 2 à 26 MHz.

La longueur est-elle adaptée ?

---

C'est pour ça que ces antennes sont reliées à des coupleurs qui permettent des les "rallonger" électriquement pour les adapter<br>à la fréquence reçue.

Image qui suit : coupleur reliée<br>à l'antenne long-fil d'un bateau

---

{{< slide  background-image="/couplageantenne.png" background-size="contain" background-transition="concave">}}

---

Cette antenne 4G doit capter de 700 à 2700 MHz.

Sa taille d'environ 30 cm est-elle adaptée ?

---

{{< slide  background-image="/antenne4g.png" background-size="10%" background-transition="concave">}}


---

{{%youtube g3aETl-9dfw%}}


{{% /section %}}

---

{{% section %}}

### Transmission d'un signal :<br>onde, cable, fibre optique

---

Les télécommunications (transmission d'informations à distance) entre un émetteur<br>et un récepteur utilisent 3 principaux médias :

- l'espace entre les deux antennes<br>pour les **radiocommunications**<br>(on parle d'espace hertzien)
- le **câble coaxial**
- la **fibre optique**

---

#### Câble coaxial


![](/cablecoax.png)


---

Il ne sont quasiment plus aujourd'hui utilisés que pour des transmission de petites distances entre l'antenne et l'appareil car ils ont été supplantés<br>par les fibres optiques.

---


#### Fibre optique

<img src="/fibreoptic.png" width="100%">

---


{{%youtube aFRnXB8DUm8%}}

---

{{%youtube Lic3gCS_bKo%}}

---



C'est à la fois le média des câbles sous-marins<br>et celui des raccords des particuliers.

---

{{%youtube LEM_I3HbIU8%}}

---

{{< slide  background-image="/sacnoeudsfibre.png" background-size="contain" background-transition="concave">}}




{{% /section %}}

---

[Retour site](https://coursphychi.github.io/tsti2d/signaux/)