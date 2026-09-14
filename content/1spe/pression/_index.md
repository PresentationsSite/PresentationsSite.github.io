+++
title = "Pression"
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

# Description<br>d'un fluide

<br>

<p class="imp" style="font-size:1.5em;">

---

Fluides = <span class="fragment imp">{liquides,gaz}</span>
</p>

---

### Échelle microscopique

---

{{< slide  background-image="/pressionmicro.png" background-size="contain" background-transition="concave">}}


---


### Échelle macroscopique


---

3 grandeurs permettent de décrire un fluide :

<ul>
<li class="fragment">la <b style="color:#FEAE00">masse volumique</b></li>
<li class="fragment">la <b style="color:#FF968D">température</b></li>
<li class="fragment">la <b style="color:#61D836">pression</b></li>

---

<h3 style="color:#FEAE00">masse volumique</h3>

Elle traduit à quel point les entités qui constituent<br>le fluide sont rapprochées et lourdes.

<p class="fragment">ODG qu'il est bon d'avoir en tête :<br>
Combien de fois approximativement la densité d'un liquide est-elle plus grande que celle d'un gaz ?
</p>

---

<h3 style="color:#FF968D">température</h3>

Elle traduit l'agitation thermique des entités.

<p class="fragment">Les molécules de diazote de l'air ont une vitesse moyenne d'environ $\pu{470 m*s-1}$ à 20°C<br>
et presque $\pu{980 m*s-1}$ à 1000°C.</p>

---

<h3 style="color:#61D836">pression</h3>

Elle traduit les chocs des entités sur une paroi.

<p class="fragment">Sur $\pu{1 cm2}$ de vitre, chaque seconde c'est environ $\pu{2E23}$ molécules d'air qui viennent taper !</p>


{{%/section%}}

---
 

{{%section%}}

## Pression et Force pressante

---


<div style="position:relative;margin:auto;padding:10px 30px 20px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
Un fluide exerce sur une surface une action modélisée par une <span class="imp">force pressante $\textstyle \overrightarrow{F_P}$</span>
<br><br>
<ul>
<li>dirigée perpendiculairement à la surface,</li> 
<li>orientée du fluide vers la surface,</li>
<li>et de valeur proportionnelle à la surface.</li> 
</ul>
</div>


---

{{< slide  background-image="/fpressballon.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/troustuyau.jpg" background-size="contain" background-transition="concave">}}

---

Le coefficient de proportionnalité entre la valeur de<br>la force pressante et la surface est appelée <span class="imp">pression</span>.<br>
La pression est donc une force par unité de surface.

<p class="fragment">
Unité : <span class="fragment imp">$\pu{N*m-2}$</span>
</p>

<p class="fragment"><span class="imp">$\pu{1 Pa}$</span> $\;= \pu{1 N*m-2}$<br>
<span class="fragment">$\pu{1 bar} = \pu{1E5 Pa}$</span><br>
<span class="fragment">$\pu{1 atm} = \pu{1013 hPa} = $</span><span class="fragment">$\pu{1,013E5 Pa}=\pu{1,013 bar}$</span>
</p> 

---

<div style="position:relative;margin:auto;padding:20px 30px 30px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
<span class="imp" style="font-size:1.5em;">$F_P = P\times S $</span>
</div>

<br>

<ul>
<li class="fragment">$F$ en N</li>
<li class="fragment">$P$ en Pa</li>
<li class="fragment">$S$ en $\pu{m^2}$</li>
</ul>

---

La force pressante exercée par l'air à la <span class="imp">pression atmosphérique</span> sur une surface de <b style="color:#FFD932">$\pu{1 cm2}$</b> est équivalente au poids exercé par une masse de <span class="fragment"><b style="color:#FFD932">$\pu{1 kg}$</b></span>

---

{{< youtube JsoE4F2Pb20>}}

{{%/section%}}

---

{{%section%}}

## Loi de Mariotte

{{%note%}}
Boyle's law en anglais
{{%/note%}}

---

<div id="player"></div>
<script src="https://www.youtube.com/iframe_api"></script>

<script>
  var player;
  var hasSeeked = false; // Variable pour suivre si nous avons déjà sauté au début spécifié

  // Cette fonction est appelée automatiquement par l'API de YouTube lorsqu'elle est prête
  function onYouTubeIframeAPIReady() {
    // Créez une nouvelle instance du lecteur
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: 'LhDi9r6mmKk', // Remplacez par l'ID de votre vidéo
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // Cette fonction est appelée lorsque le lecteur est prêt
  function onPlayerReady(event) {
    // Réglez la vitesse de lecture à x2
    player.setPlaybackRate(2);
  }

  // Cette fonction est appelée lorsqu'il y a un changement d'état du lecteur
  function onPlayerStateChange(event) {
    var startTime = 58; // Temps de début en secondes
    if (event.data == YT.PlayerState.PLAYING && !hasSeeked) {
      // Définissez le temps de début si la vidéo commence à jouer
      player.seekTo(startTime, true);
      hasSeeked = true; // Marquez que nous avons effectué le saut
    }
  }
</script>

---

<span class="imp">À température constante</span>,<br>dans une enceinte <span class="imp">fermée</span><br>contenant un gaz,

<div style="position:relative;margin:auto;padding:20px 30px 30px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
le produit de la pression<br>par le volume reste constant
</div>


---

<div style="position:relative;margin:auto;padding:20px 30px 30px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$P\times V = cte$$
</div>


$$\Leftrightarrow$$


<div style="position:relative;margin:auto;padding:20px 30px 30px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$P_1 V_1 = P_2 V_2$$
</div>



{{%/section%}}

---

{{%section%}}

## Loi fondamentale de<br>la statique des fluides

---

{{<youtube EkDhlzA-lwI>}}

{{%note%}}
Quelle est l'erreur à 3'23'' ?
{{%/note%}}

---

{{<youtube GgBE8_SyQCU>}}

---

Que vaut la pression en haut du tube ? 

Comment évolue la pression le long du tube ?

---

{{<youtube K5g6P8-GmBg>}}

---

Dans un fluide, du fait de la gravité,<br>plus on s'enfonce, plus la pression est grande.

<p class="fragment">Et si le fluide est <u>incompressible</u>,<br>on a <span class="imp">proportionnalité<br>entre variation d'altitude<br>et variation de pression</span>.</p>


{{%note%}}
Pourquoi ne pas dire liquide plutôt que fluide incompressible ? Car sur une petite variation de hauteur, l'air aussi peut être considéré comme incompressible (sa densité varie suffisamment peu).
{{%/note%}}

---

{{< slide  background-image="/loifondfluide.png" background-size="contain" background-transition="concave">}}

---

C'est la loi fondamentale de la statique des fluides :

<div style="position:relative;margin:auto;padding:20px 30px 30px 30px;border:solid 5px #FF968D;border-radius:15px; width:fit-content;">
$$P_2 - P_1 = \rho g (z_1 - z_2)$$
</div>

<p class="fragment">
⚠️ Attention à l'ordre inversé<br>entre la pression et l'altitude
</p>

---

Constantes 

<ul>
<li class="fragment">$g$ est la pesanteur terrestre (en $\pu{N*kg-1}$ ou $\pu{m*s-2}$)</li>
<li class="fragment">$\rho$ est la masse volumique du fluide (en <span class="imp fragment">$\pu{kg*m-3}$</span>)<br>(fluide incompressible $\Leftrightarrow$ $\rho=cste$)</li>
</ul>

<p class="fragment">
Variables :
</p>

<ul>
<li class="fragment">Pression $P$ en <span class="imp fragment">$\pu{Pa}$</span></li>
<li class="fragment">Altitude $z$ en <span class="imp fragment">$\pu{m}$</span></li>
</ul>

---

Comment fonctionne une pompe agissant<br><span class="imp">par aspiration</span> (équivalente à l'aspiration<br>d'une boisson par une paille) ?

---

Quelle est la hauteur maximale<br>de la colonne d'eau aspirée de cette façon ?

---

Comment expliquer alors que des arbres bien plus grands transpirent l'eau du sol par leurs feuilles ?

---

{{<youtube EV0E3pNkiDI>}}


---

{{< youtube -Zq_fmPz9IU >}}

---

<video width="350" controls style="display:block;max-width:100%;position:relative;margin-left:auto;margin-right: auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <source src="https://coursphychi.github.io/faucet.mp4" type="video/mp4">
</video>

{{%/section%}}



---

[Retour site](https://coursphychi.github.io/1spe/pression/)
