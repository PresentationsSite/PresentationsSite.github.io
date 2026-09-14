+++
title = "Son"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
+++



# Le son

---

{{% section %}}

## Un phénomène vibratoire


---

{{%youtube cK2-6cgqgYA%}}

---

{{<youtube 1cCObZzGo3E>}}

{{% /section %}}

---

{{% section %}}

## Son périodique ou non

---

{{< slide  background-video="/compspecperfort.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

Son périodique = pics !

<br>

Mais d'où viennent ces pics ?

{{%/section%}}

---

{{% section %}}

## Son pur et son complexe

---

<iframe class="embed" src="https://teropa.info/harmonics-explorer/" frameborder="0" width="60%" height="600px" style="background: #AAAAAA;border:solid #3EA0E4 10px"></iframe>

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 20px 20px 30px 20px; font-size:60px">
Un <b>son pur</b> est associé<br>à un signal sinusoïdal<br>= son spectre d'amplitude est composé d'une seule fréquence.
</div></div>

---


<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 20px 20px 30px 20px; font-size:60px">
Un <b>son complexe</b> est une somme<br>de signaux sinusoïdaux<br>de fréquences différentes<br>$\Leftrightarrow$ son spectre d'amplitude est composé de plusieurs fréquences.
</div></div>

---

{{< slide  background-image="/purcomplexe.png" background-size="contain" background-transition="concave">}}



---

{{<youtube UrBZsUBibtk>}}

{{%/section%}}


---

{{%section%}}

## Hauteur d'un son



---

{{< slide  background-video="/hauteursfilm.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 20px 20px 30px 20px; font-size:60px">
La <b>hauteur</b> d'un son est la <b>fréquence</b> de son <b>fondamental</b>.
</div></div>

---

{{< slide  background-image="/hauteurson.png" background-size="contain" background-transition="concave">}}

{{%/section%}}

---


{{%section%}}


## Timbre d'un son




---

Le timbre est ce qui distingue des sons<br>de la même hauteur (même note) jouées<br>sur des instruments différents.

<audio id="sound1" src="/trumpet-G5.wav" preload="auto"></audio><a onclick="document.getElementById('sound1').play();" style="font-size:100px;cursor: pointer">🎺 </a>
<audio id="sound2" src="/piano-G5.wav" preload="auto"></audio><a onclick="document.getElementById('sound2').play();" style="font-size:100px;cursor: pointer">🎹 </a>
<audio id="sound3" src="/violin-G5.wav" preload="auto"></audio><a onclick="document.getElementById('sound3').play();" style="font-size:100px;cursor: pointer">🎻 </a>
<audio id="sound4" src="/flute-G5.wav" preload="auto"></audio><a onclick="document.getElementById('sound4').play();" style="font-size:100px;cursor: pointer">🥂 </a>


---

{{< slide  background-video="/comptimbrefort.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


---

{{< slide  background-image="/differentspectres.png" background-size="contain" background-transition="concave">}}

---

Qu'est-ce qui reste identique entre les sons ?

---

- Ils sont périodiques (pics)
- Même hauteur (fréquence du fondamental)<br> = même note jouée


---

Qu'est-ce qui change ?

{{%fragment%}}Le reste du spectre d'amplitude<br>(pas le même nombre d'harmoniques <br>et/ou pas les mêmes amplitudes relatives){{%/fragment%}}


---

{{< slide background-video="/analysefreq.mp4" background-size="contain" background-transition="concave">}}

---

<iframe width=550 height=440 src="https://www.edumedia-sciences.com/fr/media/frame/320/?auth=8c1ba56b82bdf81fef2eb4ff1c4b50c7/27824" frameborder=0></iframe>

---

- [Synthétiseur simplifié permettant<br>de modifier le timbre](https://vagabond-grove-brook.glitch.me)

---

Deux même spectres peuvent sonner différemment.

C'est alors l'enveloppe (la variation de l'amplitude globale du son en fonction du temps) et en particulier l'attaque (le début de l'enveloppe)<br>qui change le timbre.

{{%/section%}}

---

{{%section%}}


## Intensité et niveau sonore

---

{{< slide  background-image="/trompettesint.png" background-size="contain" background-transition="concave">}}

L'intensité acoustique $I$<br>(en watt par mètre carré)<br>est additive&nbsp;:

s'il y a 2 ou 10 fois plus de sources sonores,<br>l'intensité est multipliée par 2 ou 10.

---

Mais notre sensation auditive ne semble pas, elle, proportionnelle au nombre de sources.<br>

C'est cette non proportionnalité qui permet<br>d'avoir une plage de sensibilité si étendue <br>(de $\pu{1E-12 W\*m-2}$ à $\pu{10 W\*m-2}$).

Notre sensibilité est logarithmique.

---

Pour quantifier notre sensation,<br>on utilise le **niveau sonore** $L$.

<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 30px 20px 30px 20px; font-size:60px">
$L=10\log\left(\frac{I}{I_0}\right)$
</div></div>

<br>

- $L$ en $\pu dB$
- $I$ en $\pu{W\*m-2}$
- $I_0 = \pu{1E-12 W*m-2}$ seuil d'audibilité<br>pour une fréquence de $\pu{1000 Hz}$

---

{{< slide  background-image="/trompettesdb.png" background-size="contain" background-transition="concave">}}

Doubler l'intensité acoustique revient ainsi<br>à ajouter 3 dB au niveau sonore<br>et **<span style="color:#43AFFA">multiplier</span>** l'intensité par 10<br>**<span style="color:#43AFFA">ajoute</span>** 10 dB.



---


Pour passer de $L$ à $I$ :

<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 30px 20px 30px 20px; font-size:60px">
$\displaystyle I = I_0\times 10^{\left(\frac{L}{10}\right)}$
</div></div>


---

<div style="display: flex;justify-content: center;">
<div style = "border:solid #43AFFA 10px;padding: 30px 20px 30px 20px; ">
<b>L'intensité acoustique varie<br>comme le carré inverse<br>de la distance à la source</b>
</div></div>

(sauf si la source est fortement directionnelle).

Prouvons-le grâce à [cette appliquette geogebra](https://www.geogebra.org/m/v22fbv4v).

---

<iframe scrolling="no" title="inversesquarelaw" src="https://www.geogebra.org/material/iframe/id/fbyk36y6/width/704/height/526/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="704px" height="526px" style="border:0px;"> </iframe>


---

Conséquences : 
- doubler la distance divise l'intensité acoustique par 4, ce qui correspond à une baisse de 6 dB<br>du niveau sonore.<br>$d\rightarrow 2d\Rightarrow I\rightarrow I/4 \Leftrightarrow L\rightarrow L-6$
- décupler la distance divise l'intensité acoustique par 100, ce qui correspond à une baisse de 20 dB du niveau sonore.<br>$d\rightarrow 10d\Rightarrow I\rightarrow I/100 \Leftrightarrow L\rightarrow L-20$

{{%/section%}}


---

{{%section%}}


## Sensibilité de<br>l'oreille humaine

---

{{< slide  background-image="/sensibiliteson.png" background-size="80%" background-transition="concave">}}

---

{{< slide  background-image="/loudness.png" background-size="30%" background-transition="concave">}}

{{%/section%}}


---


{{%section%}}


## Réverbération

---


{{<youtube mVLKQWImJH8>}}

---

{{< slide  background-video="/anechoique.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


{{%/section%}}

---

{{%section%}}


## Ondes stationnaires

---

### Lien hauteur du son<br>-<br>taille de l'instrument

---

|    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/wh-pBxeHE3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  |   <iframe width="100%" height="auto" src="https://www.youtube.com/embed/QXi1kyUclhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   |   <iframe width="100%" height="auto" src="https://www.youtube.com/embed/5q7YJhVmE08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   |  <iframe width="100%" height="auto" src="https://www.youtube.com/embed/RYDQmqsW9tA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    |
| ---- | ---- | ---- | ---- |
|  <iframe width="100%" height="auto" src="https://www.youtube.com/embed/3EFLa5dK-nU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    |   <iframe width="100%" height="auto" src="https://www.youtube.com/embed/NEzSJW8s-V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   |   <iframe width="100%" height="auto" src="https://www.youtube.com/embed/_t2q0lsUl4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   |  <iframe width="100%" height="auto" src="https://www.youtube.com/embed/QgNoTOgVxSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    |


---

La forme du piano (exponentielle)<br>est une autre illustration.

<img src="/pianoexp.png" style="border-radius:20px">



---



Origine de cette relation et du fait que<br>les fréquences des harmoniques sont toujours<br>des multiples du fondamental ?

{{%fragment%}}Les ondes stationnaires<br>se formant dans l'instrument{{%/fragment%}}

---

<iframe width="1000px" height="600px" src="https://alexanderchen.github.io/harmonics/"></iframe>

---

{{< slide background-video="/timbreedu.mp4" background-size="contain" background-transition="concave">}}

---

<iframe width=550 height=440 src="https://www.edumedia.com/media/frame/fr/369/?auth=38d173deaf17cc0296268cc434cb75d4/27824" frameborder=0></iframe>

---


{{<youtube 6JeyiM0YNo4>}}

---

{{<youtube cnH2ltfW48U>}}

---

{{<youtube uWoiMMLIvco>}}

---

{{<youtube eAXVa__XWZ8>}}

---

{{<youtube CdUoFIZSuX0>}}

---

{{<youtube 1yaqUI4b974>}}

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/1es/son/musique/)