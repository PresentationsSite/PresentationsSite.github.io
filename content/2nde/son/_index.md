+++
title = "Son"
outputs = ["Reveal"]
son_css = "css/son.css"
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"
+++

<!--
  Présentation « Son » (2nde).
  Style    : static/css/son.css
  Scripts  : static/js/son/core.js (ambiance par partie, votes, boîte à outils)
             static/js/son/widgets.js (animations interactives)
  Widgets  : <div class="sw" data-w="sphere|onde|course|eclair|videoonce|periode|oscillation|generateur|chrono|pouls|trompettes"></div>
  Votes    : shortcode qcm (2 à 4 propositions). Touches 1 à 4 ou clic sur une carte = un vote
             (Maj + touche = retirer un vote) ; → ou « Voir la réponse » = correction.
  Cellule à révéler au clic : <td class="rv" data-v="réponse">?</td>
  Question posée à la classe : <span class="ask">…</span>
  Boîte à outils (bas à gauche) : 🎲 tirage au sort · ⏱️ minuteur · 🔴 pointeur laser
-->

<div class="hero">
<div class="eq"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
<h1>Le Son</h1>
<p class="sub">Émission, propagation et perception</p>
<p class="hint">↓ sous-parties &nbsp;·&nbsp; 🎲 ⏱️ 🔴 boîte à outils en bas à gauche</p>
</div>

---

{{% section %}}

<div class="part-title">
<i data-part="emission" hidden></i>
<span class="num">01</span>
<h2>Émission et perception<br>d'un son</h2>
<p>Comment naît un son et comment voyage-t-il ?</p>
</div>

---

{{< slide background-video="/htparleur.mp4" background-size="contain" background-transition="concave">}}

---

<div class="glass">
<p>Le son est produit par une vibration<br>qui se propage de proche en proche<br>dans un milieu matériel.</p>
<p class="fragment fade-up">Les particules du milieu lui-même<br>
    ne font qu'osciller sur place.</p>
</div>

---

<div class="sw" data-w="sphere"></div>

{{%note%}}
Une source pulsante émet une onde qui se propage radialement : chaque particule oscille sur place, c'est la perturbation qui voyage de proche en proche. Couleur et brillance = compression locale ; les anneaux marquent les crêtes de compression. Cliquer pour mettre en pause.
{{%/note%}}

---

<div class="glass">
<p>On est en présence d'une <span class="imp">onde</span> (l'onde sonore) caractérisée par un  <span class="imp" style="color:#FFD932">transport d'énergie et d'information</span> <span class="imp" style="color:#1DB100">sans qu'il y ait transport de matière</span>.</p>
</div>

---

{{< youtube-slide id="aDrs6EieFCM" ratio="16x9" >}}

---

{{< slide  background-image="https://media.tenor.com/dDspMfyVGBMAAAAC/star-wars-millenium-falcon.gif" background-size="contain" background-transition="concave">}}

<p style="color:#ED220D">Sans milieu matériel, pas de son !</p>

<p style="color:#ED220D	">$\Rightarrow$ Le vide spatial est silencieux.</p>

{{%note%}}
Pas de feu non plus d'ailleurs...
{{%/note%}}

---

Et la vitesse du signal sonore <span class="imp">dépend du milieu</span>.

---

{{< qcm
    q=`Dans quel milieu le son se propage-t-il <b>le plus vite</b>&nbsp;?`
    a1=`le vide`
    a2=`l’air`
    a3=`l’eau`
    a4=`l’acier`
    bonne="4"
    expl=`Réponse&nbsp;: <b>l’acier</b>. Vérifions-le avec les vitesses mesurées.` >}}

{{%note%}}
Vote aux doigts : les élèves lèvent 1, 2, 3 ou 4 doigts. Appuyer sur 1-4 (ou cliquer sur une carte) pour compter les votes, puis → pour la correction.
{{%/note%}}

---

{{< youtube-slide id="BYe4x3x35is" ratio="16x9" >}}

---

<h3>Voyons-le à l'échelle des particules</h3>

<div class="sw" data-w="onde"></div>

{{%note%}}
Changer de milieu : la particule rouge ne fait qu'osciller sur place, c'est l'onde (le front en pointillés) qui avance. Dans le vide, il n'y a rien pour transmettre la vibration. Les vitesses affichées sont à l'échelle (rapport 1 : 4,4 : 17) mais la fréquence de la source est très basse pour que l'on voie le mouvement.
{{%/note%}}

---

<table class="vit">
<tr><th>milieu</th><td>air</td><td>eau</td><td>acier</td></tr>
<tr class="v"><th>vitesse du son (m/s)</th><td>340</td><td>1500</td><td>5800</td></tr>
</table>

<p class="fragment fade-up"><span class="ask">Comment convertir ces vitesses en km/h&nbsp;?</span></p>

---

Commençons par convertir des km/h en m/s<br>en prenant l'exemple de $\pu{72 km/h}$ :

<span class="fragment">$\pu{72 km/h}$ </span><span class="fragment">$\displaystyle =\frac{\pu{72 km}}{\pu{1 h}}$</span>  <span class="fragment">$\displaystyle= \frac{\pu{72E3 m}}{\pu{3600 s}}$</span> <span class="fragment">$\displaystyle=\frac{\pu{72E3 m}}{\pu{3,6E3 s}}$</span> 

<span class="fragment">$$\Rightarrow \pu{72 km/h}=\frac{72}{\color{#E22146}{3,6}}\pu{ m/s}=\pu{20 m/s}$$</span>

---

Il faut donc <span class="imp">diviser par 3,6</span><br>pour passer <span class="imp">des km/h aux m/s</span>.

<p class="fragment fade-up"><span class="ask">Que doit-on alors faire pour passer des m/s aux km/h&nbsp;?</span></p>


<div class="conv" style="width:760px;max-width:100%;margin:.2em auto 0">
<svg style="display:block;width:100%;height:auto;overflow:visible" viewBox="0 -20 760 380" role="img" aria-label="Pour passer des km/h aux m/s on divise par 3,6, pour passer des m/s aux km/h on multiplie par 3,6">
<defs>
<linearGradient id="gb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2aa6ee"/><stop offset="1" stop-color="#0063a0"/></linearGradient>
<linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fdc22"/><stop offset="1" stop-color="#138a00"/></linearGradient>
</defs>
<g class="pill"><rect x="20" y="130" width="230" height="90" rx="45" fill="url(#gb)"/><text x="135" y="191" text-anchor="middle" fill="#fff" font-family="Outfit, sans-serif" font-weight="800" font-size="46">km/h</text></g>
<g class="pill"><rect x="510" y="130" width="230" height="90" rx="45" fill="url(#gg)"/><text x="625" y="191" text-anchor="middle" fill="#fff" font-family="Outfit, sans-serif" font-weight="800" font-size="46">m/s</text></g>
<g class="top">
<path class="arc" pathLength="1" fill="none" stroke="#ff644e" stroke-width="7" stroke-linecap="round" d="M135 126 C135 -10 625 -10 625 100"/>
<polygon class="head" points="625,128 610,100 640,100" fill="#ff644e"/>
<g class="lab"><rect x="305" y="-6" width="150" height="56" rx="28" fill="#ff644e"/><text x="380" y="33" text-anchor="middle" fill="#fff" font-family="Outfit, sans-serif" font-weight="800" font-size="34">÷ 3,6</text></g>
</g>
<g class="bot fragment">
<path class="arc" pathLength="1" fill="none" stroke="#ffc43a" stroke-width="7" stroke-linecap="round" d="M625 224 C625 358 135 358 135 252"/>
<polygon class="head" points="135,222 120,252 150,252" fill="#ffc43a"/>
<g class="lab"><rect x="305" y="300" width="150" height="56" rx="28" fill="#ffc43a"/><text x="380" y="339" text-anchor="middle" fill="#1b1300" font-family="Outfit, sans-serif" font-weight="800" font-size="34">× 3,6</text></g>
</g>
</svg>
</div>

---

<table class="vit">
<tr><th>milieu</th><td>air</td><td>eau</td><td>acier</td></tr>
<tr class="v"><th>vitesse du son (m/s)</th><td>340</td><td>1500</td><td>5800</td></tr>
<tr class="kmh"><th>vitesse du son (km/h)</th><td class="rv" data-v="1&#8239;224">?</td><td class="rv" data-v="5&#8239;400">?</td><td class="rv" data-v="20&#8239;880">?</td></tr>
</table>

<p class="mut"><span class="ask">À vous&nbsp;!</span> Convertissez, puis cliquez sur chaque «&nbsp;?&nbsp;» pour vérifier.</p>

---

Rappel :

En appelant $d$ la distance parcourue (en m)<br>et $\Delta t$ la durée écoulée (en s),<br>la vitesse $v$ d'un signal est<br>donnée par la relation :

<div class="fcard r fragment fade-up">
$$v = \frac{d}{\Delta t}$$
</div>

---

<u>Rq :</u>

On écrit $\Delta t$ car une durée est l'écart entre deux instants et le symbole $\Delta$ (Delta) symbolise, en physique, un écart : $\Delta t = t_{final} - t_{initial}$.

<p class="fragment fade-up">Symétriquement, on peut aussi considérer<br>la distance comme un écart entre deux positions<br>et au lieu de $d$, on aurait pu écrire $\Delta x$.</p>


---

<span class="ask">Si on connaît la vitesse et la durée,<br>comment obtient-on la distance&nbsp;?</span>

<div class="fcard b fragment fade-up">
$$d=v\times \Delta t$$
</div>

---

<span class="ask">Et si on connaît la distance et la vitesse,<br>comment obtient-on la durée&nbsp;?</span>

<div class="fcard g fragment fade-up">
$$\Delta t = \frac{d}{v}$$
</div>

---

<h3>La course du son</h3>

<div class="sw" data-w="course"></div>

{{%note%}}
Laisser les élèves estimer Δt avant l'arrivée de chaque point (distance au choix avec le curseur). La durée du trajet de l'air est affichée en accéléré (7 s), les autres milieux gardent les bons rapports de vitesse.
{{%/note%}}

---

<div class="sw" data-w="videoonce" data-mp4="/eclair.mp4" data-webm="/eclair.webm" data-sound="/tonnerre.mp3" data-delay="2"></div>

{{%note%}}
L'éclair est une vidéo locale (static/eclair.mp4 et eclair.webm, convertie depuis le gif d'origine) : elle ne se joue qu'une fois puis reste figée sur sa dernière image ; le tonnerre retentit seul 2 secondes après la fin.
Réglage dans la balise ci-dessus : data-delay (secondes entre la fin de la vidéo et le tonnerre).
{{%/note%}}

---

<p><span class="ask">Pourquoi doit-on compter approximativement 3 s<br>par km entre l'éclair et le tonnerre&nbsp;?</span></p>

<div class="sw" data-w="eclair"></div>

{{%note%}}
Régler la distance de l'orage, cliquer sur « Éclair ! » et faire compter les élèves à voix haute jusqu'au tonnerre. Le chronomètre affiche ensuite la valeur calculée avec Δt = d / v.
{{%/note%}}

---

{{< youtube-slide id="_BgJEXQkjNQ" ratio="16x9" start="65" >}}

<span class="ask">Qu'est-ce que cette vidéo<br>nous permet de déterminer&nbsp;?</span>

---

<iframe src="https://podeduc.apps.education.fr/video/20160-eruption-du-volcan-tavurvur-en-papouasie-nouvelle-guinee/?is_iframe=true" width="640" height="360" style="padding: 0; margin: 0; border:0;border-radius:10px;" allowfullscreen title="Eruption du volcan Tavurvur en Papouasie Nouvelle Guinée" ></iframe>

---

{{< slide  background-video="/murduson.mp4" background-size="contain" background-transition="fade-in concave-out">}}


{{% /section %}}

---

{{< slide background-video="/note.mp4" background-size="contain" background-transition="concave">}}

<i data-part="periode" hidden></i>

---

{{%section%}}

<div class="part-title">
<i data-part="periode" hidden></i>
<span class="num">02</span>
<h2>Signal sonore périodique</h2>
<p>Comment décrire les sons musicaux&nbsp;?</p>
</div>

---

Les sons musicaux sont des signaux <span class="imp">périodiques</span>.

<div class="glass fragment fade-up">
<p>Un <span class="imp">signal périodique</span> est un signal<br>qui se <span class="imp" style="color:#FFD932">répète à l'identique dans le temps</span>.</p>
</div>

<div class="glass fragment fade-up">
<p>La <span class="imp">période $T$</span> d'un signal périodique<br>est la <span class="imp" style="color:#FFD932">durée d'une répétition</span> (d'un motif).</p>
<p>Unité : <span class="fragment">la seconde</span></p>
</div>

---

{{< slide  background-image="/sansperiode.png" background-size="contain" background-transition="concave-in fade-out">}}

---

{{< slide  background-image="/periode.png" background-size="contain" background-transition="none">}}

---

{{< slide transition="none" >}}

<div class="sw" data-w="periode"></div>

{{%note%}}
Reproduction animée du gif : la bande rouge (une période) glisse le long du signal, on découpe le signal en 4 périodes identiques, puis on les superpose : elles coïncident exactement. Cliquer sur l'animation pour la mettre en pause.
{{%/note%}}

---

<p><span class="ask">Que vaut la période de ce signal&nbsp;?</span></p>

<div class="fig" style="position:relative">
<img class="fragment fade-out" data-fragment-index="0" style="display:block;width:100%;height:auto;margin:0" src="/exoper1.png" alt="Signal périodique">
<img class="corr-img fragment" data-fragment-index="0" style="display:block;width:100%;height:auto;margin:0;position:absolute;left:0;top:0" src="/exoper1corr.png" alt="Correction : une période du signal">
</div>

---

<p><span class="ask">Que vaut la période de ce signal&nbsp;?</span></p>

<div class="fig" style="position:relative">
<img class="fragment fade-out" data-fragment-index="0" style="display:block;width:100%;height:auto;margin:0" src="/exoper2.png" alt="Signal périodique">
<img class="corr-img fragment" data-fragment-index="0" style="display:block;width:100%;height:auto;margin:0;position:absolute;left:0;top:0" src="/exoper2corr.png" alt="Correction : une période du signal">
</div>

---

Pour des sons musicaux, la période est souvent très petite, de l'ordre de la cs ou ms. On lui préfère alors<br>le <span class="imp" style="color:#FFD932">nombre de répétitions (de motifs) par seconde</span><br>qui est l'inverse de la période et qu'on appelle<br>la <span class="imp">fréquence $f$</span>.

<div class="fcard r fragment fade-up">
$$f = \frac{1}{T}$$
</div>

<p class="fragment fade-up">Unité : le <span class="imp">hertz (Hz)</span></p>


---

<h3>Une oscillation et son signal</h3>

<div class="sw" data-w="oscillation"></div>


---

{{< slide  background-image="/exof.png" background-size="contain">}}

---

<p><span class="ask">Quelle est la période et la fréquence de ce signal&nbsp;?</span></p>

<div style="display:flex;align-items:center;justify-content:center;gap:40px;">
<canvas id="myCanvas" width="500" height="500" style="width:340px;height:340px;flex:none;"></canvas>
<div class="sw" data-w="chrono"></div>
</div>

<script src="/js/2son.js"></script>


{{%note%}}
5,3 secondes théoriquement
Faire mesurer sur une période puis sur 10 périodes.
Le chronomètre démarre au premier « Top » et s'arrête au second ; l'animation demande alors combien de périodes se sont écoulées et calcule T = Δt / N. Comparer une mesure sur 1 période et sur 10 périodes : l'incertitude affichée (≈ 0,2 s de temps de réaction, divisée par N) montre qu'un grand nombre de périodes donne une mesure plus précise.
{{%/note%}}


---

{{< qcm
    q=`<span class="coeurquibat" style="font-size:2.2em">🫀</span><br>Quand on «&nbsp;prend son pouls&nbsp;», mesure-t-on une <b>période</b> ou une <b>fréquence</b>&nbsp;?`
    a1=`une période`
    a2=`une fréquence`
    bonne="2"
    expl=`On compte des battements <span class="imp">par minute</span>&nbsp;: c’est une fréquence (environ 70 par minute, soit 1,2&nbsp;Hz).` >}}

---

<h3>Mesurons notre fréquence cardiaque</h3>

<div class="sw" data-w="pouls"></div>

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="perception" hidden></i>
<span class="num">03</span>
<h2>Perception d'un son</h2>
<p>Hauteur, timbre, intensité&nbsp;: que perçoit-on&nbsp;?</p>
</div>

---

<h3>Générateur de sons</h3>

<div class="sw" data-w="generateur"></div>

{{%note%}}
- piège de bien mesurer entre deux couleurs identiques
- Permet de parler de comment améliorer la précision lorsque phénomène répétitif :mesurer un nombre n de répétitions puis diviser le résultat par n (l'unique mesure a théoriquement la même précision que l'on mesure 1 ou 10 périodes mais par contre, dans le cas de 10, on divise cette précision d'une mesure unique par 10. Donc la mesure est 10 fois meilleure !)
- Défi classe : monter la fréquence jusqu'à ce que les élèves n'entendent plus rien (levez la main quand vous n'entendez plus !). Les plus âgés perdent les aigus en premier. Prévenir du volume avant de lancer le son.
- Changer la forme du signal : la hauteur (donc la période) ne change pas mais le son n'est plus le même, ce qui prépare la notion de timbre.
{{%/note%}}

---

{{< slide  background-image="/freqaudibles.png" background-size="contain" background-transition="concave">}}

Le domaine des fréquences des sons audibles<br>pour l'oreille humaine est situé<br>entre&nbsp;20&nbsp;et&nbsp;20000&nbsp;Hz.

<br><br><br><br><br><br><br>

{{%note%}}
Tous les animaux pareils ?
+ Vieillesse ou détérioration
{{%/note%}}

---

Pour un son musical, la <span class="imp">hauteur</span> désigne la note jouée (plus ou moins grave ou aigüe).

<div class="glass">
<span style="color:#61D836"><b>La hauteur est liée à la fréquence</b></span> :<br>
plus la fréquence est grande,<br><span class="fragment">plus la hauteur est <span class="fragment">grande</span></span><br><span class="fragment">et plus la note est <span class="fragment">aigüe.</span></span>
</div>

---

Le signal de deux notes identiques jouées par des instruments différents possède la même période<br>mais la <span class="imp">forme des signaux</span> est différente.

<div class="glass fragment fade-up">
<p>On appelle <span class="imp">timbre</span> ce qui distingue<br>deux notes de même hauteur.</p>
</div>

---

<iframe width=550 height=440 src="https://www.edumedia-sciences.com/fr/media/frame/320/?auth=8c1ba56b82bdf81fef2eb4ff1c4b50c7/27824" frameborder=0></iframe>

{{%note%}}
https://www.edumedia-sciences.com/fr/media/frame/320/?auth=8c1ba56b82bdf81fef2eb4ff1c4b50c7/27824
{{%/note%}}

---

Enfin, la troisième caractéristique<br>d'un son est son <span class="imp" style="color:#61D836">intensité</span>.

<div class="glass fragment fade-up">
<p>L'<span class="imp" style="color:#61D836">intensité sonore</span> est <span class="imp" style="color:#FF644E">liée</span><br>à l'<span class="imp">amplitude</span> du signal.</p>
</div>

---

{{< slide  background-image="/amplitude.png" background-size="contain" background-transition="concave" >}}

---

<div class="glass">
<p>Pour augmenter l'intensité du son émis,<br>beaucoup d’instruments et d’êtres vivants<br>sont dotés d’une <span class="imp">caisse de résonance</span> <br> qui amplifie et sélectionne les sons.</p>
</div>

---

{{< slide  background-image="/caisseres.jpg" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/vocalresonance.gif" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/timbreeducoupe.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}


---

{{< slide  background-video="/trompette1.mp4" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-video="/trompette2.mp4" background-size="contain" background-transition="concave" >}}


---

{{< slide  background-video="/trompette4.mp4" background-size="contain" background-transition="concave" >}}

---

{{< slide  background-image="/3amplitudes.png" background-size="contain" background-transition="concave" >}}

---

Si l'<span style="color:#61D836">intensité sonore</span> de la trompette seule vaut <span style="color:#61D836">$I_1$</span><br>à une certaine distance, alors l'intensité des 4 trompettes jouées ensemble vaudra <span class="fragment" style="color:#61D836">$4I_1$</span><br>à la même distance.

---

Mais cette relation de proportionnalité rend mal compte de notre <span class="imp" style="color:#FFD932">sensation auditive</span>.

<p class="fragment fade-up">On peut par exemple mesurer que l'<span style="color:#61D836"><b>intensité sonore</b></span> du son émis par quelqu'un qui parle fort est environ 10&nbsp;000 fois plus grande que celle d'une personne qui chuchote à la même distance ! Pourtant, on n'a<br>pas la <span class="imp" style="color:#FFD932">sensation</span> d'un son 10&nbsp;000 fois plus fort...</p>

<div class="glass fragment fade-up">
<p><span class="imp" style="color:#61D836">Intensité sonore</span> et <span class="imp" style="color:#FFD932">sensation auditive</span><br>ne sont pas <span class="imp" style="color:#FF644E">proportionnelles</span>&nbsp;!</p>
</div>

{{%note%}}
70dB pour parler fort
30dB pour chuchotement
{{%/note%}}


---

Pour tenir compte de cette échelle non proportionnelle, on utilise une autre grandeur :<br>le <span class="imp" style="color:#FF42A1">niveau d'intensité sonore</span>,<bR>mesuré en décibels (dB).

<p class="fragment fade-up">Lorsque l'<span class="imp" style="color:#61D836">intensité sonore</span> augmente, le <span class="imp" style="color:#FF42A1">niveau d'intensité sonore</span> augmente aussi,<br>mais beaucoup moins vite.</p>

---

{{< qcm
    q=`Une trompette seule produit un niveau sonore de 80&nbsp;dB. <span class="ask">Et quatre trompettes identiques ensemble&nbsp;?</span>`
    a1=`80 dB`
    a2=`86 dB`
    a3=`160 dB`
    a4=`320 dB`
    bonne="2"
    expl=`Intensité sonore multipliée par 4… mais niveau sonore augmenté de <span class="imp">6 dB</span> seulement&nbsp;!` >}}

---

<h3>Ajoutons des trompettes</h3>

<div class="sw" data-w="trompettes"></div>

{{%note%}}
Chaque fois que l'on double le nombre de trompettes (bouton « × 2 »), l'intensité double mais le niveau n'augmente que de 3 dB.
{{%/note%}}

---

{{< slide  background-video="/trompettedbfort.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

{{%note%}}
Une, deux puis 4 trompettes ensemble.
{{%/note%}}

{{%note%}}
Testons-le avec l'application Fizziq :
il faut 3 tel, 1 choisit le capteur "niveau de bruit" (qui moyenne le niveau sonore) et les deux autres jouent un bruit de rue passante (choisi dans outils). On règle chacun des émetteurs (distance et volume) pour qu'ils donnent la même valeur de niveau sonore puis on les fait jouer en même temps.
{{%/note%}}

---

{{< slide  background-image="/echelledb.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="/loudness.png" background-size="30%" background-transition="concave">}}

---

{{< youtube-slide id="DFGU0yaD9vo" ratio="16x9" >}}

---

<p>Durée limite d’exposition (sans protection)<br>avant dommages&nbsp;:</p>

<div class="expo">
<div class="expo-row d1 fragment fade-up"><span class="expo-db">120 à 140&nbsp;dB</span><span class="expo-t">quelques secondes suffisent à provoquer des <b>dégâts irréversibles</b></span></div>
<div class="expo-row d2 fragment fade-up"><span class="expo-db">95&nbsp;dB</span><span class="expo-t"><b>15 min</b> / jour</span></div>
<div class="expo-row d3 fragment fade-up"><span class="expo-db">86&nbsp;dB</span><span class="expo-t"><b>2 h</b> / jour</span></div>
<div class="expo-row d4 fragment fade-up"><span class="expo-db">80&nbsp;dB</span><span class="expo-t"><b>8 h</b> / jour</span></div>
</div>

{{%/section%}}

---

{{% section %}}

<div class="part-title">
<i data-part="bilan" hidden></i>
<span class="num">★</span>
<h2>Bilan : à vous de jouer&nbsp;!</h2>
<p>6 questions pour vérifier ce que l'on a retenu</p>
</div>

---

{{< qcm
    q=`Lorsqu’un signal sonore se propage&nbsp;:`
    a1=`les molécules ou les atomes du milieu se déplacent de l’émetteur du son jusqu’aux oreilles`
    a2=`les molécules ou les atomes du milieu oscillent sur place`
    bonne="2"
    expl=`L’onde sonore transporte de l’énergie et de l’information <b>sans transport de matière</b>.` >}}

---

{{< qcm
    q=`Un ultrason se déplace plus vite qu’un son audible.`
    a1=`vrai`
    a2=`faux`
    bonne="2"
    expl=`La vitesse du son dépend du <b>milieu</b>, pas de la fréquence.` >}}

---

{{< qcm
    q=`L’unité de la fréquence, le hertz (Hz), est équivalente à&nbsp;:`
    a1=`$\mathrm{s^{-1}}$`
    a2=`$\mathrm{m\cdot s^{-1}}$`
    a3=`$\mathrm{s\cdot m^{-1}}$`
    bonne="1"
    expl=`Une fréquence est un nombre de répétitions <b>par seconde</b>&nbsp;: $f=\dfrac{1}{T}$.` >}}

---

{{< qcm
    q=`Dans un stade, des enceintes sont placées à $d=102$&nbsp;m de la scène. De quelle valeur faut-il retarder leur signal pour que leur son se superpose à celui de la scène&nbsp;? <span class="mut">(dans l’air, $v_{son}=340\ \mathrm{m/s}$)</span>`
    a1=`$35$ ms`
    a2=`$300$ ms`
    a3=`$3{,}5$ s`
    a4=`$30$ s`
    bonne="2"
    expl=`$\Delta t=\tfrac{d}{v_{son}}=\tfrac{102}{340}=0{,}300\ \mathrm{s}=300\ \mathrm{ms}$` >}}

---

{{< qcm
    q=`Deux signaux de même fréquence, de même amplitude mais de formes différentes se distinguent par&nbsp;:`
    a1=`leur timbre`
    a2=`leur hauteur`
    a3=`leur niveau sonore`
    bonne="1"
    expl=`Même fréquence → même hauteur&nbsp;; même amplitude → même intensité&nbsp;; la forme du signal, c’est le <b>timbre</b>.` >}}

---

{{< qcm
    q=`Une source sonore émet un son. Si une deuxième source identique se met à émettre à la même distance, le niveau d’intensité sonore reçu&nbsp;:`
    a1=`double`
    a2=`ne varie pas`
    a3=`augmente de 3&nbsp;dB`
    a4=`est divisé par deux`
    bonne="3"
    expl=`L’intensité sonore double, mais le niveau n’augmente que de <b>3&nbsp;dB</b>.` >}}

{{%/section%}}

---

<i data-part="bilan" hidden></i>

[Retour site](https://coursphychi.github.io/2nde/son/)

{{< son-scripts >}}
