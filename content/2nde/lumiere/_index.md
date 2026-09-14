+++
title = "Lumière"
outputs = ["Reveal"]
[reveal_hugo]
theme = "moon"
highlight_theme = "atom-one-dark-reasonable"

+++


<style>
img {border: none !important}

.imp {font-weight:bold;color:#FF968D;}

.fragment {font-weight:normal;}

span {font-weight:normal;color:white;}

a {color:#56C1FF;}

ul {
color:#93a1a1;
margin-left: auto;
margin-right: auto;
text-align: left;
width: fit-content;
list-style-position: inside;
color:
}

ul li {
text-indent: -1em;
padding-left: 1em;
}

.short {
  height: 60vh; /* limite la hauteur à 80% de la fenêtre */
  width: calc(60vh * 9 / 16); /* largeur en fonction du ratio portrait */
  margin: 0 auto;
  position: relative;
}

.short iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius:10px;
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



# Lumière


---

{{% section %}}

## Propagation

---



Comment se propage la lumière dans un milieu transparent homogène (partout pareil) ?

---

{{< slide  background-image="https://i.pinimg.com/originals/1e/8a/37/1e8a37bb7374207a582df3ef2921c808.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://cdn.eso.org/images/screen/potw1136a.jpg" background-size="contain" background-transition="concave">}}


---


{{< slide  background-image="https://cdn.britannica.com/95/7595-050-9B4938DC/rays-clouds.jpg" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="https://birthingforlife.com/wp-content/uploads/2020/06/dusty-attic-old-1024x685.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://s1.1zoom.me/big0/200/Forests_Rays_of_light_474821.jpg" background-size="contain" background-transition="concave">}}

---

<div  style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#00AB8E;padding:15px 30px 20px 30px; width:content; color:white; border-radius:15px;">
La lumière se déplace en ligne droite<br>dans un milieu transparent homogène.
</div>
</div>

---

En temps normal, peut-on voir un faisceau lumineux ?

<p class="fragment imp">Non !</p>

{{%note%}}
Le prouver avec un laser dans la salle.
Le "en temps normal" n'est pas clair. Dans une pièce avec que de l'air. Ou dans le vide.
{{%/note%}}

<p class="fragment">Qu'est-ce qui les rend alors visibles<br>dans les photos précédentes ?</p>

<p class="fragment imp" >Des objets diffusants : poussière, gouttelettes d'eau...</p>


<p class="fragment">On ne voit pas le faisceau de lumière !<br>
On voit la poussière ou les goutelettes d'eau éclairées.</p>

---

À quelle vitesse se propage la lumière ?

---

La vitesse (ou célérité) $c$ de la lumière<br>dans le vide ou l'air vaut :


<div class="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="background-color:#00AB8E;padding:15px 50px 20px 50px; width:content; color:white; border-radius:15px;">
$$c = \pu{3,0E8 m*s-1}$$
</div>
</div>

<p class="fragment">Soit environ $\pu{300000 km/s}$</p>

<p class="fragment" style="color:#929292">C'est environ <span class="fragment">un million</span> de fois plus rapide<br>que la vitesse du son dans l'air !</p>

---

<u>Rq</u> :

La valeur de $c$ dans le vide est une des constantes fondamentales de l'univers (avec $G$, $h$, $e$, etc.).

On a décidé de fixer sa valeur en 1983<br>pour définir le mètre à partir d'elle.

Sa valeur exacte vaut : $\pu{299792458 m*s-1}$ 

{{%note%}}
BIPM Bureau International des Poids et Mesures
Organisation intergouvernementale créée en 1889
https://www.bipm.org/fr/
Organisme qui fixe les unités
{{%/note%}}

---

Comment l'a-t-on mesurée ?

---


<iframe width="600" height="450" src="https://www.youtube.com/embed/kkUdOE5G9Ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="600" height="450" src="https://www.youtube.com/embed/aLeWyoaPw3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---



Mesure de Fizeau


<iframe width="800" height="450" src="https://www.youtube.com/embed/Sck_bIocv5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%note%}}
il trouve 315 000 km/s
{{%/note%}}

---


<iframe width="600" height="450" src="https://www.youtube.com/embed/FY_6TmIbQt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Mesure de Foucault

<iframe width="800" height="450" src="https://www.youtube.com/embed/QV0YZRVXnYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


{{%note%}}
il trouve 298 000 km/s
{{%/note%}}


---


<iframe width="600" height="450" src="https://www.youtube.com/embed/nqWBd-ukvmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="600" height="450" src="https://www.youtube.com/embed/ZCeXHP5-skM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Comme on va le voir plus loin,<br>la vitesse de la lumière dépend du milieu :

---

{{< slide  background-image="/vereauair.png" background-size="contain" background-transition="concave">}}

<style>
  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  .line {
    width: 100%;
    height: 15px;
    border-radius: 8px;
    background-color: #ffff00;
    transform: translateX(100%);
    opacity:100%;
  }

  #vide {
    animation: slideLeftVide 15s linear infinite;
  }

  #air {
    animation: slideLeftAir 15s linear infinite;
  }

  #eau {
    animation: slideLeftEau 15s linear infinite;
  }

  #verre {
    animation: slideLeftVerre 15s linear infinite;
  }

  @keyframes slideLeftVide {
  0% {
    transform: translate(-100%, 0);
  }
  67% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}

  @keyframes slideLeftAir {
  0% {
    transform: translate(-100%, 0);
  }
  67% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}

  @keyframes slideLeftEau {
  0% {
    transform: translate(-100%, 0);
  }
  89% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}

  @keyframes slideLeftVerre {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
</style>



<div class="container">
 <p style="color:white;margin-bottom: 50px;">vitesse de la lumière dans le vide : $\approx$ 299 792 km/s</p>

<div class="line" id="vide" style="margin-bottom:50px;"></div>



  <p style="color:white;margin-bottom: 50px;">vitesse de la lumière dans l'air  : $\approx$ 299 702 km/s</p>

  <div class="line" id="air" style="margin-bottom:80px;"></div>



 <p style="color:white;margin-bottom: 40px;">vitesse de la lumière dans l'eau  : $\approx$ 225 000 km/s</p>

  <div class="line" id="eau" style="margin-bottom:60px;"></div>



 <p style="color:white;margin-bottom: 30px;">vitesse de la lumière dans le verre  : $\approx$ 200 000 km/s</p>

  <div class="line" id="verre"></div>

  <br>
</div>


<script>
/*
Pour le trick des délais voir ce site :
https://css-tricks.com/css-keyframe-animation-delay-iterations/ 
*/
</script>

{{%/section%}}

---

{{%section%}}

### Lumière blanche<br>Lumières colorées


---

On peut décomposer la lumière blanche<br>venant du soleil à l'aide d'un <span class="imp">prisme</span>.

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/yrRkJMHEcYE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

{{< slide  background-image="/prismfaux.png" background-size="contain" background-transition="concave">}}

---

On retrouve dans la lumière blanche<br>toutes les couleurs de l'arc-en-ciel.

---


{{< slide  background-image="https://www.farmersalmanac.com/wp-content/uploads/2020/11/rainbow-AdobeStock_2206323-1137x630.jpeg" background-size="contain" background-transition="concave">}}


---

On dit que le prisme <span class="imp">disperse</span> la lumière blanche<br>en l'ensemble de ses composantes colorées.

<p class="fragment">
On obtient alors le <span class="imp">spectre de la lumière blanche</span>.</p>

<p class="fragment">
À chaque lumière colorée de ce spectre (ou radiation) correspond <span class="imp">une longueur d'onde</span> $\lambda$ mesurée en nm.</p>

---

{{< slide  background-image="/spectreblanche.png" background-size="contain" background-transition="concave">}}

---


Explication de la dispersion :

<p class="fragment">Le prisme ou la goutte d'eau <span class="imp">réfracte</span> la lumière lui faisant changer de direction. Or cette <span class="imp">réfraction dépend de la longueur d'onde</span> et donc de la couleur.</p>

{{%note%}}
La réfraction qu'on verra plus loin est une déviation de la lumière lorsqu'elle change de milieu.
{{%/note%}}

<br>

<div class="fragment"><p>Résultat :</p>

<p>chaque couleur suit un chemin différent<br>après son passage dans le prisme.</p></div>


---


Est-ce que toutes les couleurs<br>qu'on est capable de percevoir sont présentes<br>dans le spectre de la lumière blanche ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-40px;margin-top:50px;">
<img src="/spectreblanche.png" style="box-shadow:none;background:none;">
</div>

---

{{< slide  background="#FF00FF" >}}

---

La lumière blanche est une lumière <span class="imp">polychromatique</span> car elle est composée de différentes lumières colorées à la différence de la lumière d'un laser qui n'est composée que d'une seule radiation et<br>qu'on dit donc <span class="imp">monochromatique</span>.


<img src="/3lasers.png" width="300px">

---

{{< slide  background-image="/lgdondelaser.png" background-size="contain" background-transition="concave">}}


----


[Vidéo CEA sur le spectre du Soleil](https://www.cea.fr/multimedia/Pages/videos/culture-scientifique/physique-chimie/spectres-composition-chimique-du-soleil.aspx)

---

L'appareil de mesure permettant de produire et d'analyser les spectres est le <span class="imp">spectroscope</span>.

---


{{< slide  background-video="/spectroscope.mp4" background-size="contain" background-transition="concave">}}

---

Il y a 3 types de spectres :

<ul>
<li class="fragment"><span class="imp">spectre continu</span>, émis par un corps chaud ;</li>
<li class="fragment"><span class="imp">spectre de raies d'émission</span>, constitué de quelques radiations émises par un gaz dans lequel on fait passer une décharge électrique ;</li>
<li class="fragment"><span class="imp">spectre de raies d'absorption</span>, obtenu en faisant traverser la lumière émise par un corps chaud à travers un gaz. Le résultat est un spectre continu dont il manque quelques radiations.</li>
</ul>

---

{{< slide  background-image="/3spectres.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lampedecharge.png" background-size="contain" background-transition="concave">}}

---

Les raies d'émission apparaissent aux mêmes longueurs d'ondes que les raies d'absorption<br>s'il s'agit du même gaz.

<p class="fragment">Les deux spectres sont donc complémentaires.</p>

---


{{< slide  background-image="/spectres3elements.png" background-size="contain" background-transition="concave">}}


---


Les longueurs d'onde de ces raies sont caractéristiques de l'élément qui émet ou qui absorbe la lumière.

<p class="fragment">C'est une sorte de code-barres<br>pour l'élément.</p>

---

Un spectre reconnaissable qu'on rencontre souvent :<br>le spectre du sodium, dominé par<br>une raie jaune très brillante.


{{%note%}}
Correspond à une transition 3p->3s, on parle des D lines du sodium
{{%/note%}}

---


{{< slide  background-video="https://www.physik.uni-konstanz.de/fileadmin/physik/vorlesungsdemonstrationen/fileserver/Atome%20und%20Quanten/vle-155_Na-Doppellinie_2K.mp4" background-size="contain" background-transition="concave">}}


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/7u3rRy97m9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<div class="short">
  <iframe src="https://www.youtube.com/embed/uUGzrS5tpLc?si=bCgnMbYAtIOeSrnp"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>

---

Pourquoi retrouve-t-on souvent le spectre du sodium dans les flammes (surtout près de la mer) ?



{{%/section%}}

---

{{%section%}}

## Réflexion<br>et réfraction<br>de la lumière

---

Que fait la lumière lorsqu'elle arrive à l'interface entre deux milieux transparents différents<br>(comme l'air et l'eau) ?

---

{{< slide  background-image="https://www.groundedlifetravel.com/wp-content/uploads/2020/11/37990984-O-Edit-scaled.jpg" background-size="contain" background-transition="concave">}}

---

Visiblement elle peut être réfléchie...

<br>

<p class="fragment">Mais elle peut aussi être transmise. Preuve ?</p>

---


Et cette transmission est un peu particulière.

<br>

<p class="fragment"><b>Expérience de la pièce</b></p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/3EsLH95KQl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

Au final, c'est comme si la pièce s'était<br>rapprochée de la surface de l'eau.


<br>

<p class="fragment">Tentez au brouillon de dessiner les rayons lumineux<br>qui expliquent ce qu'on observe.</p>

---

{{< slide  background-image="/illusionpiece.png" background-size="contain" background-transition="concave">}}

---

Un peu de vocabulaire :

<ul>
<li class="fragment">on appelle <b style="color:#61D836">rayon incident</b>, le rayon qui arrive<br>sur l'interface entre deux milieux ;</li>
<li class="fragment"><b style="color:#FF42A1">rayon réfléchi</b>, le rayon qui "rebondit" ;</li>
<li class="fragment">et <b style="color:#FFD932">rayon réfracté</b>, le rayon qui traverse<br>vers l'autre milieu ;</li>
</ul>

---

{{< slide  background-image="/normaledioptre.png" background-size="contain" background-transition="concave">}}

La droite perpendiculaire à la surface de séparation entre les deux milieux et qui passe par le point<br>où le rayon incident rencontre la surface<br>est appelé <b style="color:#fff">normale</b>.

<br><br><br><br><br><br>

---

{{< slide  background-image="/defrayonsangles.png" background-size="contain" background-transition="concave">}}


<b style="color:#61D836">L'angle incident</b>, <b style="color:#FF42A1">l'angle réfléchi</b> et <b style="color:#FFD932">l'angle réfracté</b><br>sont définis comme l'angle entre la <b style="color:#fff">normale</b> et<br>le <b style="color:#61D836">rayon incident</b>, le <b style="color:#FF42A1">rayon réfléchi</b> et le <b style="color:#FFD932">rayon réfracté</b>, respectivement.

<br><br><br><br><br>

{{%/section%}}

---

{{%section%}}

### Lois de la réflexion<br>de Snell-Descartes

---


<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
  <div style="position: relative; padding: 30px;">
<ul>
<li style="margin-bottom:1em;"> Le <b style="color:#61D836;">rayon incident</b>, le <b style="color:#FF42A1">rayon réfléchi</b><br>et la <b style="color:#fff">normale</b> sont dans un même plan. 
<li class="fragment"> L'<b style="color:#FF42A1">angle réfléchi</b> est égal à l'<b style="color:#61D836">angle incident</b>.
</li>
    <div class="fragment" 
         style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                border:solid 5px #00A2FF; border-radius: 20px;">
    </div>
</div>
</div>

---


{{< slide  background-image="/loireflexion.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

{{%section%}}

### Indice optique

---

L'<span class="imp">indice optique</span> (ou indice de réfraction)<br>est un nombre <u>sans dimension</u><br>qui caractérise un milieu transparent.

---

La lumière se propage à la vitesse $c$ dans le vide<br>mais va moins vite dans tout autre milieu transparent. 

<p class="fragment">L'indice optique est le ratio entre ces deux vitesses&nbsp;:</p>

<div class ="fragment" style="display: flex; justify-content: center; align-items: center; height: 100%;">
<div style="border:solid 5px #00AB8E;padding:15px 20px 20px 20px; width:content; color:white; border-radius:15px;">
$\displaystyle n=\frac{c}{c_{milieu}}$ avec $n≥1$
</div>
</div>


<p class="fragment">Dans le vide, $n=$ <span class="fragment">1</span> et dans l'air $n\approx$ <span class="fragment">1</span></p>

---

À quelle vitesse $c_{verre}$ se propage<br>la lumière dans le verre ? 

<p style="color:#929292">
indice optique du verre : $n_{verre} = 1,5$
</p>

<p class="fragment" style="color:#61D836">
$$
\begin{aligned}
c_{verre} &= \frac{c}{n_{verre}} \\
&\approx \frac{\pu{3,0E8 m*s-1}}{1,5} \\
&= \pu{2,0E8 m*s-1}
\end{aligned}
$$
</p>

---

{{< slide  background-video="/disappearingbeaker.mp4" background-size="contain" background-transition="concave">}}

---

Qu'implique la vidéo précédente ?

<p class="fragment"> Il y a réfraction (déviation des rayons lumineux) seulement s'il y a passage entre deux milieux transparents d'<span class="imp">indice optique différent</span>.</p>

{{%/section%}}

---

{{%section%}}

### Lois de la réfraction<br>de Snell-Descartes


---


<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
  <div style="position: relative; padding: 30px;">
    <!-- Le contenu qui apparaît d'abord -->
    <ul>
      <li style="margin-bottom:1em;">
        Le <b style="color:#61D836">rayon incident</b>, le <b style="color:#FFD932">rayon réfracté</b><br>
        et la <b style="color:#fff">normale</b> sont dans un même plan.
      </li>
      <li class="fragment">
        L'<b style="color:#FFD932">angle réfracté $i_2$</b> est lié à l'<b style="color:#61D836">angle incident $i_1$</b><br>
        par la relation :<br>
        $$\color{#61D836}n_1\times \sin(i_1)=\color{#FFD932}n_2\times \sin(i_2)$$
      </li>
    </ul>
    <!-- L'élément pour l'encadrement qui apparaît après -->
    <div class="fragment" 
         style="position: absolute; top: 0; left: 0; right: 0; bottom: 30px;
                border: solid 5px #00AB8E; border-radius: 20px;">
    </div>
  </div>
</div>

<p class="fragment">$\color{#61D836}n_1$ et $\color{#FFD932}n_2$ sont les <span class="imp">indices optiques</span><br>des milieu 1 et 2.</p>

---

{{< slide  background-image="/loirefraction.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/lumcas.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/caisseasavon.mp4" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="/rayonscas.png" background-size="contain" background-transition="concave">}}

---

Lorsqu'un rayon de lumière passe d'un milieu 1 à un milieu 2 d'<b style="color:#16E7CF">indice plus grand</b>, il se <span class="imp"><span class="imp fragment"><b>rapproche</b></span> de la normale</span> (son angle par rapport<br>à la normale <span class="fragment imp"><b>diminue</b></span>).

<p class="fragment">
Lorsqu'un rayon de lumière passe d'un milieu 1 à un milieu 2 d'<b style="color:#16E7CF">indice plus petit</b>, il <span class="imp">s'éloigne de la normale</span> (son angle par rapport à la normale <span class="imp"><b>augmente</b></span>)
</p>


---


{{< slide  background-image="/refrdiamant.png" background-size="contain" background-transition="concave-in fade-out">}}


---

{{< slide  background-image="/refrdiamantcorr.png" background-size="contain" background-transition="fade-in concave-out">}}


{{%note%}}
L'indice optique du diamant est énorme.
Ça plus la manière spécifique de le tailler permet de maximiser les réflexions totales internes 
-> le diamant brille
{{%/note%}}

---

{{< slide  background-video="/perchemoite.mp4" background-video-muted="true" background-size="contain"  background-transition="fade-in concave-out" >}}

---

Le bâton fait 1 m de long<br>et la partie peinte en jaune 50 cm.

Qu'observe-t-on ?

Comment l'expliquer ?

---

{{< slide  background-image="/tailleexpl.png" background-video-muted="true" background-size="contain"  background-transition="concave-in fade-out" >}}

---

{{< slide  background-video="/casse.mp4" background-video-muted="true" background-size="contain"  background-transition="concave" >}}

---

Pourquoi le bâton apparaît cassé ?

---

{{< slide  background-image="/casseexpl.png" background-video-muted="true" background-size="contain"  background-transition="fade-in concave-out" >}}

---


{{< slide  background-image="/viserpoisson.png" background-video-muted="true" background-size="contain"  background-transition="concave" transition-speed="fast" >}}

---

{{< slide  background-video="/pechelance.mp4" background-video-muted="true" background-size="contain"  background-transition="concave" >}}


---

{{< slide  background-video="/pechelance2.mp4" background-video-muted="true" background-size="contain"  background-transition="concave" >}}

---

Que remarquez-vous dans la vidéo suivante ?

Explication ?
{{%note%}}
Rangée de 7 -> rangée de 5
Avec un masque de plongée, on aurait le même effet, pour la même raison.
{{%/note%}}

---

{{< slide  background-video="/carreaux.mp4" background-video-muted="true" background-size="contain"  background-transition="concave" >}}

{{%/section%}}

---

{{%section%}}


### Réflexion totale interne

---

{{< slide  background-video="/refltot.mp4" background-video-muted="true" background-size="contain"  background-transition="concave" >}}


---

Comment expliquer ce qu'on voit<br>(ou qu'on ne voit pas plutôt) ?

---

<iframe scrolling="no" title="Réfraction" src="https://www.geogebra.org/material/iframe/id/k2Sz34cH/width/545/height/545/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="545px" height="545px" style="border:0px;"> </iframe>

---

Quelle phénomène peut-on observer seulement lorsque le rayon incident est dans un milieu d'indice plus grand que l'autre milieu ?

---

Au delà d'un certain angle, appelé <span class="imp">angle critique</span> $i_c$,<br>il n'y a plus de rayon réfracté entre un milieu transparent d'indice $n_1$ et un milieu<br>d'indice inférieur $n_2<n_1$.

<p class="fragment">On a alors <span class="imp">réflexion totale interne</span>.</p>

<ul>
<li class="fragment"><u>réflexion totale</u> car toute la lumière est réfléchie</li>
<li class="fragment"><u>interne</u> car cela se passe à l'intérieur du milieu transparent d'indice supérieur</li>
</ul>

---

{{< slide  background-video="/anglelim.mp4" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/totintrefl.jpg" background-size="contain" background-transition="concave">}}


---

Formule pour l'angle critique ?

---

Le phénomène de réflexion totale interne<br>se produit lorsque $i_2$ dépasse 90°.

On détermine donc $i_c$ pour $i_2 = 90°$ :

---

$$
\begin{aligned}
n_1\times\sin( i_1) &= n_2 \times\sin( i_2)\\\\
\sin (i_1) &= \frac{n_2\times \sin(i_2)}{n_1}\\\\
 i_1 &= \sin^{-1}\left(\frac{n_2}{n_1} \times \sin (i_2)\right)\\\\
\Rightarrow \color{#FFD932}{i_c} &= \sin^{-1}\left(\frac{n_2}{n_1} \times \sin ({\color{#FFD932 }90°})\right) \\\\
i_c &= \sin^{-1}\left(\frac{n_2}{n_1}\right) \\\\
\end{aligned}
$$


---

Déterminer l'angle critique pour une interface eau-air et pour une interface verre air.

<br> 

<ul style="color:#61D836">
<li class="fragment">eau$\leftrightarrow$air : $i_c=\sin^{-1}\left(\frac{1,0}{1,33}\right)=49°$</li>
<li class="fragment">eau$\leftrightarrow$verre : $i_c=\sin^{-1}\left(\frac{1,0}{1,5}\right)=42°$</li>
</ul>

---

Que voit-on en regardant au-dessus<br>de notre tête, dans l'eau ?


<p class="fragment" style="color:#61D836">Seuls les rayons faisant entre nos yeux et la normale un angle inférieur à $i_c=42°$ proviennent de l'extérieur. Au-delà, les rayons ont été réfléchis. Cela restreint l'ensemble de la lumière venant de l'extérieur dans un cône au-dessus de note tête&nbsp;: la fenêtre de Snell.</p>

---


{{< slide  background-image="/snellswindow.jpg" background-size="contain" background-transition="concave">}}

---

Applications de la réflexion totale interne :

<br>

<ul class="fragment"><li>Elle fait briller les pierres précieuses ! </li></ul>

<p class="fragment">On taille ces cailloux transparents pour que la lumière qui pénètre dans la pierre ressorte majoritairement vers l'avant après des réflexions totales internes<br>sur les facettes arrières.</p> 

<p class="fragment">Plus l'indice optique est élevé, plus $i_c$ est <span class="fragment strike" style="color:#93a1a1;">grand</span>/petit<br>
et donc plus la lumière est réfléchie.</p>

---

{{< slide  background-image="/totintdiam.png" background-size="contain" background-transition="concave">}}

---

<div class="short">
  <iframe src="https://www.youtube.com/embed/Ws8d07vnA-I"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>

---

Que peut-on prédire quant à l'indice<br>de réfraction de la moissonite ?

<p class="fragment" style="color:#61D836">Il doit être du même ordre que celui du diamant !</p>


---

{{< slide  background-image="/moissanite.png" background-size="contain" background-transition="concave">}}


---

- Autre application : les catadioptres

Comment ces bouts de plastique transparent<br>réfléchissent-ils la lumière ?

<img src="/catadioptre.png" style="width:300px;border-radius:20px">

<p class="fragment" style="color:#61D836">Comme les diamants.</p>

---

{{< slide  background-image="/cataexpl.png" background-size="contain" background-transition="concave">}}

---

Mais on a toujours pas vu l'application industrielle principale de la réflexion totale interne !<br>
Quelle est-elle ?

<p class="fragment" style="color:#61D836">Les fibres optiques !</p>


{{%note%}}
Insister sur le fait que quasiment toutes nos communications passent par elles.
Et quel est le chemin suivi par les signaux lors d'un appel téléphonique ?
onde radio jusqu'à l'antenne du relais le plus proche -> fibre optique jusqu'à l'antenne de l'interlocuteur -> onde radio jusqu'au téléphone
{{%/note%}}

---

{{%youtube aFRnXB8DUm8%}}

---

{{%youtube Lic3gCS_bKo%}}

---


{{< slide  background-video="/fibrechinois.mp4" background-size="contain" background-transition="concave">}}


---


<div class="short">
  <iframe src="https://www.youtube.com/embed/XyYa0CLjoSs"
          title="YouTube Short"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
</div>


{{%/section%}}

---

{{%section%}}

## Mirages


---

{{< slide  background-image="/mirageroute.jpg" background-size="contain" background-transition="concave">}}



---

Comment expliquer ce qu'on voit ?


---

{{< slide  background-image="/mirage1.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/mirage1expl.png" background-size="contain" background-transition="concave">}}


---


Et comment expliquer les mirages suivant ?

---

{{%youtube epeOGJcR2dE%}}


---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fata_morgana_archipel_des_Glénan.jpg/1280px-Fata_morgana_archipel_des_Glénan.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/mirboyart.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/mirildere.jpg" background-size="contain" background-transition="concave">}}


---

{{< slide  background-image="/mirildere2.jpg" background-size="contain" background-transition="concave">}}




{{%/section%}}

---

{{%section%}}

## Dispersion

---

On peut maintenant expliquer pourquoi le passage dans un prisme permet la <span class="imp">dispersion</span> la lumière :

<p cass="fragment"><span class="imp">L'indice optique $n$ dépend de la longueur d'onde $\lambda$ !</p>

---

Conséquence ?

---

<div style="display: flex; justify-content: center; align-items: center; height: 100%;">
  <div style="position: relative; padding: 30px;">
L'<span class="imp">angle de réfraction dépend de <span class="fragment" style="color:#FF968D;">$n$</span></span><br>et comme <span class="imp"><span class="fragment" style="color:#FF968D;">$n$</span> dépend de <span class="fragment" style="color:#FF968D;">$\lambda$</span></span>,<br><span class="imp" style="color:#FF968D;">l'angle dépend de <span class="fragment" style="color:#FF968D;">$\lambda$</span></span><br>et donc de la <span class="fragment" style="color:#FF968D;">couleur</span>.
    <div class="fragment" 
         style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                border: solid 5px #00AB8E; border-radius: 20px;">
    </div>
    </div></div>

---

La double réfraction dans le prisme entraîne des angles suffisamment différents entre les couleurs<br>pour que le spectre apparaisse.

---


{{< slide  background-video="/prisme.mp4" background-size="contain" background-transition="concave" background="#181818">}}


---


Et on a la même chose dans une goutte d'eau.<br>Avec une réflexion totale interne en plus.

---

{{< slide  background-video="/refrgoutte.mp4" background-size="contain" background-transition="concave" background="#181818">}}


{{%/section%}}

---

{{%section%}}

## Simulations

---

{{< runpython lang="vpython" mode="output" width="800"  height="600" file="snell.py" >}}
{{< /runpython >}}

---

[Lien vers appliquette geogebra](https://www.geogebra.org/m/wt6cpdwz)

{{%/section%}}

---

[Retour site](https://coursphychi.github.io/2nde/lumiere/)