+++
title = "Soleil"
outputs = ["Reveal"]
[reveal_hugo]
theme = "black"
custom_css = "css/soleil.css"
highlight_theme = "atom-one-dark-reasonable"
+++

<!--
  Présentation « Soleil » (1ère enseignement scientifique).
  Style : static/css/soleil.css · Animations interactives : static/js/soleil/*.js
  QCM : shortcode layouts/shortcodes/qcm.html (4 propositions numérotées 1 à 4, vote aux doigts ;
  → ou « Voir la réponse » pour révéler, touches 1-4 pour surligner une proposition).
  Chaque animation se place avec :  <div class="sw" data-w="nom" data-prevent-swipe></div>
-->

<div class="hero">
<div class="hero-sun"></div>
<h1>Le Soleil</h1>
<p class="sub">Rayonnement, couleur des étoiles<br>et bilan radiatif de la Terre</p>
<p class="hint">→ avancer &nbsp;·&nbsp; ↓ sous-parties</p>
</div>
<i data-part="intro" hidden></i>

---

{{% section %}}

<div class="part-title">
<span class="num">01</span><h2>Rayonnement solaire</h2>
<p>D’où vient la puissance phénoménale du Soleil ?</p>
</div>
<i data-part="intro" hidden></i>

---

<h3>Le Soleil, à l’échelle</h3>
<div class="sw" data-w="echelle" data-prevent-swipe></div>

---

<h3>Une étoile à 150 millions de kilomètres</h3>
<div class="sw" data-w="distance" data-prevent-swipe></div>

---

<p>Le Soleil, grâce à la <span class="imp">fusion nucléaire</span> de l’hydrogène<br>au sein de son cœur, délivre une<br>puissance phénoménale.</p>

---

<h3>La fusion de l’hydrogène</h3>
<div class="sw" data-w="ppchain" data-prevent-swipe></div>

---

<h3>La puissance rayonnée par le Soleil</h3>
<div class="sw" data-w="puissance" data-prevent-swipe></div>

---

<p>L’<span class="imp">énergie</span> $E$ mesure la capacité<br>à chauffer et à bouger un objet.</p>
<p class="fragment fade-up">La <span class="imp">puissance</span> $P$, c’est le taux de conversion<br>de l’énergie $E$, sa vitesse de variation.</p>

---

<p>On passe de l’une à l’autre grâce à la formule :</p>
<div class="formule">$E=P\times t$</div>
<p class="fragment fade-up">où $E$ est en joules (J)<br>si $P$ est en watts (W)<br>et $t$ en secondes (s).</p>

---

{{< qcm
    q=`La puissance du Soleil est $P\approx 3{,}85\times10^{26}\ \mathrm{W}$.<br>Quelle énergie libère-t-il en <b>une microseconde</b> (<span style="white-space:nowrap">$10^{-6}$ s</span>) ?`
    a1=`$3{,}85\times10^{17}$ J`
    a2=`$3{,}85\times10^{20}$ J`
    a3=`$3{,}85\times10^{26}$ J`
    a4=`$3{,}85\times10^{32}$ J`
    bonne="2"
    expl=`$E=P\times t=3{,}85\times10^{26}\times10^{-6}=3{,}85\times10^{20}$ J, soit environ <b>les deux tiers de la consommation énergétique annuelle de l’humanité</b> ($\approx 6\times10^{20}$ J) en un millionième de seconde !` >}}

---

<div style="display:flex;align-items:center;justify-content:center;gap:40px;max-width:900px;margin:0 auto">
<img src="/einstein.png" alt="Albert Einstein" style="height:260px;flex:none;filter:invert(1);mix-blend-mode:screen;-webkit-mask-image:radial-gradient(ellipse at center,#000 55%,transparent 100%);mask-image:radial-gradient(ellipse at center,#000 55%,transparent 100%);border:none;background:none;box-shadow:none;margin:0">
<div style="text-align:left;font-size:.78em;width:540px;flex:none">Grâce à la fameuse formule d’Einstein<br><span class="imp">$E=mc^2$</span> qui lie la masse à l’énergie,<br>on déduit que l’énergie libérée par le Soleil pendant une microseconde correspond à une <span class="imp">perte de masse</span> de $E/c^2=\ldots$</div>
</div>

---

{{< qcm
    q=`Cette énergie ($3{,}85\times10^{20}$ J) correspond à une perte de masse $m=E/c^2$.<br>Avec $c\approx3\times10^{8}$ m/s, on trouve environ…`
    a1=`4,3 g`
    a2=`4,3 kg`
    a3=`4,3 tonnes`
    a4=`4,3 kilotonnes`
    bonne="3"
    expl=`$m=\dfrac{E}{c^2}=\dfrac{3{,}85\times10^{20}}{(3\times10^{8})^2}\approx4{,}3\times10^{3}$ kg. Le Soleil perd donc <b>≈ 4,3 millions de tonnes de masse chaque seconde</b> (et il en a $2\times10^{30}$ kg : pas d’inquiétude pour quelques milliards d’années).` >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<span class="num">02</span><h2>Couleur des étoiles</h2>
<p>La température d’une étoile se lit dans sa lumière.</p>
</div>
<i data-part="etoiles" hidden></i>

---

<p>Dans l’espace, deux corps peuvent<br>échanger de l’énergie à distance<br>via un <span class="imp">transfert thermique radiatif</span>.</p>
<p class="fragment fade-up">Le corps émet alors un rayonnement électromagnétique lié à sa température<br>(rayonnement de <span class="imp">corps noir</span>).</p>

---

<p>En effet, tout corps ayant une température<br>supérieure au zéro absolu <span class="imp">rayonne</span>.</p>
<p class="fragment fade-up">zéro absolu : 0 K = −273,15 °C</p>

---

{{< qcm
    q=`Quand on <b>augmente la température</b> d’un corps noir, la longueur d’onde $\lambda_{max}$ du maximum de son spectre d’émission…`
    a1=`augmente`
    a2=`diminue`
    a3=`reste constante`
    a4=`augmente puis diminue`
    bonne="2"
    expl=`Plus le corps est chaud, plus son maximum d’émission se décale vers les <b>courtes longueurs d’onde</b> : il passe du rouge au jaune, puis au blanc-bleuté. Vérifions avec l’animation suivante.` >}}

---

<h3>Spectre d’un corps noir</h3>
<div class="sw" data-w="planck" data-prevent-swipe></div>

---

<p>La <span class="imp">loi de Wien</span> dit même que ces deux grandeurs sont inversement proportionnelles :</p>
<div class="formule">$$\lambda_{max}\propto \frac{1}{T}$$</div>
<p class="fragment fade-up" style="font-size:.7em">plus précisément : $\lambda_{max}\times T\approx 2{,}89\times10^{6}\ \text{nm}\cdot\text{K}$</p>

---

{{< qcm
    q=`D’après la loi de Wien, si on <b>double</b> la température d’une étoile, $\lambda_{max}$…`
    a1=`double`
    a2=`est divisée par 2`
    a3=`est divisée par 4`
    a4=`ne change pas`
    bonne="2"
    expl=`$\lambda_{max}\propto\dfrac1T$ : si $T$ est multipliée par 2, $\lambda_{max}$ est <b>divisée par 2</b>.` >}}

---

<h3>La constellation d’Orion</h3>
<div class="sw" data-w="orion" data-prevent-swipe></div>

{{%note%}}
Bételgeuse (supergéante rouge située à environ 500 al) en haut à gauche et Rigel (supergéante bleue environ 70 fois plus grosse que le Soleil et 40 000 fois plus lumineuse) en bas à droite.<br>
Betelgeuse est une des plus grandes étoiles connues. Son rayon s'étendrait entre l'orbite de Mars et Jupiter (mille fois plus grande que le Soleil !). Quand elle explosera, elle sera visible en plein jour pendant plusieurs jours avec une brillance comparable à celle de la Lune.
{{%/note%}}

---

<div class="photo white"><img src="/exwien.png" alt="Spectres d’Aldébaran et de Rigel" style="max-height:520px"></div>

{{%note%}}
Aldébaran est une étoile géante orangée située dans la constellation du Taureau. Comme Bételgeuse, elle a fini de brûler son hydrogène et maintenant elle brûle son hélium.<br>
Pour Rigel, le maximum du spectre mesuré (≈ 385 nm) n'est que le bord de la fenêtre d'observation : le vrai maximum est dans l'ultraviolet (T ≈ 12 000 K, λmax ≈ 240 nm). On n'obtient ici qu'une température minimale.
{{%/note%}}

---

<p>Trouver la température de ces deux étoiles, sachant que :</p>
<div class="formule">$$T(\text{en K}) = \frac{2{,}89\times10^6}{\lambda_{max}(\text{en nm})}$$</div>

---

{{< qcm
    q=`Le spectre d’<b>Aldébaran</b> passe par un maximum vers $\lambda_{max}\approx745$ nm.<br>Sa température de surface est d’environ…`
    a1=`390 K`
    a2=`3 900 K`
    a3=`7 700 K`
    a4=`39 000 K`
    bonne="2"
    expl=`$T=\dfrac{2{,}89\times10^{6}}{745}\approx3\,900$ K : Aldébaran est plus froide que le Soleil, ce qui explique sa couleur <b>orangée</b>.` >}}

---

<p>Avec sa température de surface de $5778\ \text{K}$,<br>le spectre du Soleil est centré<br>sur le rayonnement <span class="imp">visible</span>.</p>
<p class="fragment fade-up">Et la Terre rayonne dans l’<span class="imp">infrarouge</span>,<br>à une longueur d’onde maximale d’environ 10 μm.</p>

---

<h3>Soleil et Terre : deux corps noirs</h3>
<div class="sw" data-w="planck2" data-prevent-swipe></div>

---

<h3>Le spectre électromagnétique</h3>
<div class="sw" data-w="spectre-em" data-prevent-swipe></div>

---

{{< qcm
    q=`Au fait, de quelle couleur est le <b>Soleil</b> vu depuis l’espace ?`
    a1=`Jaune`
    a2=`Orange`
    a3=`Blanc`
    a4=`Rouge`
    bonne="3"
    expl=`<b>Blanc</b> : c’est le mélange de toutes les longueurs d’onde visibles. Il apparaît légèrement jaune (jusqu’à rouge) le matin et le soir à cause du filtre atmosphérique.` >}}

---

<p>On apprend plein de choses en<br>analysant la <span class="imp">lumière des étoiles</span> :</p>
<ul class="liste">
<li class="fragment fade-up">leur <span class="imp">température</span> de surface, comme on l’a vu</li>
<li class="fragment fade-up">leur <span class="imp">composition chimique</span><br>(raies d’absorption dans le spectre)</li>
<li class="fragment fade-up">leur <span class="imp">mouvement</span> par rapport à la Terre<br>(décalage Doppler)</li>
<li class="fragment fade-up">la présence d’<span class="imp">exoplanètes</span><br>(transit ou effet Doppler)</li>
</ul>

---

<h3>Composition chimique : les raies</h3>
<div class="sw" data-w="raies" data-prevent-swipe></div>

---

{{< qcm
    q=`Le spectre d’une étoile présente une raie d’absorption sombre à <b>656 nm</b>.<br>Quel élément est présent dans son atmosphère ?`
    a1=`Le sodium`
    a2=`L’hydrogène`
    a3=`Le calcium`
    a4=`Le fer`
    bonne="2"
    expl=`656 nm est la raie <b>Hα de l’hydrogène</b>. Le sodium absorbe vers 589 nm, le calcium vers 394 et 397 nm.` >}}

---

<h3>Mouvement : l’effet Doppler</h3>
<div class="sw" data-w="doppler" data-prevent-swipe></div>

---

{{< qcm
    q=`Le spectre d’une galaxie lointaine est <b>décalé vers le rouge</b> par rapport au spectre de référence.<br>Cela signifie qu’elle…`
    a1=`se rapproche de nous`
    a2=`s’éloigne de nous`
    a3=`est plus chaude que le Soleil`
    a4=`est immobile`
    bonne="2"
    expl=`Un décalage vers les grandes longueurs d’onde (rouge) traduit un <b>éloignement</b> : $\Delta\lambda/\lambda=v/c$. Vers le bleu, ce serait un rapprochement.` >}}

---

<h3>Exoplanètes : transit et vitesses radiales</h3>
<div class="sw" data-w="transit" data-prevent-swipe></div>

---

{{< qcm
    q=`Une planète géante comme <b>Jupiter</b> (rayon ≈ 1/10 de celui du Soleil) passe devant son étoile. De combien la luminosité de l’étoile baisse-t-elle ?`
    a1=`0,01 %`
    a2=`0,1 %`
    a3=`1 %`
    a4=`10 %`
    bonne="3"
    expl=`La baisse est le rapport des surfaces des disques : $\left(\dfrac{R_p}{R_\star}\right)^2\approx\left(\dfrac1{10}\right)^2=1\,\%$. Pour la Terre, ce n’est que 0,008 % : bien plus difficile à détecter !` >}}

---

{{< youtube-slide id="B-oZYm3L1JE" ratio="16x9" >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<span class="num">03</span><h2>Bilan radiatif 1</h2>
<p>L’énergie avec laquelle le Soleil arrose la Terre</p>
</div>
<i data-part="terre" hidden></i>

---

<h3>La Terre intercepte un disque de rayons</h3>
<div class="sw" data-w="disque" data-prevent-swipe></div>

---

<p>La puissance solaire totale arrivant<br>sur le sol terrestre vaut alors :</p>
<div class="formule">$\displaystyle 70\%\times K\times\pi R_T^2\approx \pu{1,2E17 W}$</div>
<p class="fragment fade-up">En un an, on peut donc récupérer une énergie de :</p>
<div class="fragment fade-up formule">$\pu{3,8E24 J}=\pu{3,8 YJ}$</div>
<p class="fragment fade-up" style="font-size:.7em">Comparons aux autres sources d’énergie.</p>

---

<h3>Le Soleil face aux autres sources</h3>
<div class="sw" data-w="energies" data-prevent-swipe></div>

---

{{< qcm
    q=`L’énergie solaire reçue par la Terre en un an ($3{,}8\times10^{24}$ J) est, par rapport à la consommation énergétique mondiale annuelle ($6\times10^{20}$ J), environ…`
    a1=`6 fois plus grande`
    a2=`60 fois plus grande`
    a3=`600 fois plus grande`
    a4=`6 000 fois plus grande`
    bonne="4"
    expl=`$\dfrac{3{,}8\times10^{24}}{6\times10^{20}}\approx6\,000$ : en une heure, la Terre reçoit du Soleil plus d’énergie que l’humanité n’en consomme en une année.` >}}

---

<iframe src="https://ourworldindata.org/grapher/energy-consumption-by-source-and-country?tab=chart" loading="lazy" style="width:100%;height:600px;border:0;border-radius:18px;box-shadow:0 0 50px -10px rgba(92,200,255,.5)" allow="web-share; clipboard-write"></iframe>

---

<h3>Irradiance et distance</h3>
<p style="font-size:.7em">L’<span class="imp">irradiance</span> du Soleil (la puissance du rayonnement reçue sur un panneau d’un mètre carré orienté face à lui) varie en raison inverse du carré de la distance au Soleil.</p>
<div class="formule">$$I\propto \frac{1}{d^2}$$</div>

---

<h3>Pourquoi 1/d² ?</h3>
<div class="sw" data-w="carre-inverse" data-prevent-swipe></div>

---

{{< qcm
    q=`Mars est 1,5 fois plus éloignée du Soleil que la Terre. L’irradiance qu’elle reçoit est…`
    a1=`1,5 fois plus faible`
    a2=`2,3 fois plus faible`
    a3=`3,4 fois plus faible`
    a4=`1,5 fois plus forte`
    bonne="2"
    expl=`$I\propto\dfrac1{d^2}$ et $1{,}5^2\approx2{,}3$ : Mars reçoit $\dfrac{1\,361}{2{,}3}\approx590$ W/m².` >}}

---

<p>La trajectoire de la Terre autour du Soleil n’est pas tout à fait circulaire ; elle est <span class="imp">elliptique</span>.</p>
<p class="fragment fade-up">L’excentricité de cette ellipse<br>est néanmoins très faible.</p>

---

{{< qcm
    q=`À quelle période de l’année la Terre est-elle <b>au plus proche</b> du Soleil ?`
    a1=`En janvier`
    a2=`En avril`
    a3=`En juillet`
    a4=`En octobre`
    bonne="1"
    expl=`<b>Début janvier</b> (périhélie : 147 millions de km), alors que c’est l’hiver dans l’hémisphère nord ! L’aphélie a lieu début juillet (152 millions de km).` >}}

---

<h3>Faisons varier l’excentricité</h3>
<div class="sw" data-w="excentricite" data-prevent-swipe></div>

---

<p><b class="imp">On ne peut pas expliquer les saisons par la variation de la distance Terre-Soleil !</b></p>
<p>Comment les expliquer alors ?</p>
<p class="fragment fade-up">Les saisons sont dues à l’<span class="imp">inclinaison de la Terre</span> !</p>

---

<h3>Irradiance et inclinaison</h3>
<p style="font-size:.7em">Le rayonnement solaire ne touche pas aussi efficacement toute la surface terrestre : l’<span class="imp">inclinaison des rayons</span> par rapport à la surface modifie la puissance par m² reçue.</p>

---

<h3>Inclinaison des rayons et irradiance</h3>
<div class="sw" data-w="inclinaison" data-prevent-swipe></div>

---

{{< qcm
    q=`Quand le Soleil est à <b>30°</b> au-dessus de l’horizon, un faisceau de 1 m² de section éclaire au sol une surface de…`
    a1=`0,5 m²`
    a2=`1 m²`
    a3=`2 m²`
    a4=`4 m²`
    bonne="3"
    expl=`$S=\dfrac1{\sin h}=\dfrac1{\sin30^\circ}=2$ m² : la puissance reçue par m² est <b>divisée par 2</b> ($I=K\sin h\approx680$ W/m²).` >}}

---

<h3>Éclairement selon la latitude</h3>
<div class="sw" data-w="insolation" data-prevent-swipe></div>

---

<p>Sans surprise, il y a un <span class="imp">maximum</span> d’énergie reçue au niveau de l’équateur et un <span class="imp">minimum</span><br>au niveau des pôles.</p>
<p class="fragment fade-up">Les températures moyennes au sol suivent logiquement (mais pas parfaitement)<br>ce gradient de l’équateur aux pôles.</p>

---

<div class="photo"><img src="/tempglobe.png" alt="Températures moyennes annuelles au sol" style="max-height:600px"></div>

---

<p>Regardons maintenant comment évolue l’irradiation<br>au cours de <span class="imp">l’année</span>.</p>

---

<h3>L’éclairement au fil de l’année</h3>
<div class="sw" data-w="insolation" data-play="1" data-prevent-swipe></div>

---

<p>Comment expliquer ces variations saisonnières ?</p>
<p class="fragment fade-up">C’est là que l’<span class="imp">inclinaison de l’axe de rotation</span><br>de la Terre entre en jeu.</p>

---

<h3>Orbite, axe incliné et saisons</h3>
<div class="sw" data-w="saisons" data-prevent-swipe></div>

---

<p>L’<span class="imp">élévation</span> (ou hauteur)<br>du Soleil est l’angle<br>(compris entre 0° et 90°)<br>entre les rayons du Soleil et le sol.</p>

---

<h3>Trajectoire du Soleil et élévation</h3>
<div class="sw" data-w="trajectoire" data-prevent-swipe></div>

---

<p>Au cours d’une journée, l’élévation du Soleil<br>est bien sûr maximale à <span class="fragment" style="font-weight:normal">midi</span>.</p>
<p class="fragment fade-up">On parle ici du <span class="imp">midi solaire</span> (moment où le Soleil<br>est à son zénith) qui peut être décalé<br>par rapport au midi administratif.</p>

---

<p>Au cours de l’année, l’élévation du Soleil<br>est maximale dans l’hémisphère Nord le jour<br><span class="fragment" style="font-weight:normal">du <span class="imp">solstice d’été</span> (autour du 21 juin).</span></p>
<p class="fragment fade-up">Et minimale le jour <span class="fragment" style="font-weight:normal">du <span class="imp">solstice d’hiver</span><br>(autour du 21 décembre).</span></p>

---

{{< qcm
    q=`À <b>Paris</b> (latitude ≈ 49° N), quelle est l’élévation maximale du Soleil le <b>21 juin</b> ?<br><span class="mut">(le 21 juin, le Soleil est à 23,4° au-dessus de l’équateur céleste)</span>`
    a1=`23°`
    a2=`41°`
    a3=`65°`
    a4=`90°`
    bonne="3"
    expl=`$h_{max}=90^\circ-\text{latitude}+\delta=90-49+23{,}4\approx65^\circ$. Le 21 décembre, ce serait $90-49-23{,}4\approx18^\circ$ seulement.` >}}

---

<p>La <span class="imp">durée du jour</span> au cours de l’année est en lien direct avec l’élévation du Soleil.</p>

---

<h3>Durée du jour selon la latitude et la date</h3>
<div class="sw" data-w="insolation" data-mode="duree" data-prevent-swipe></div>

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<span class="num">04</span><h2>Bilan radiatif 2</h2>
<p>Ce qui repart dans l’espace… et l’effet de serre</p>
</div>
<i data-part="serre" hidden></i>

---

{{< slide  background-video="/solarinsol.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

<p>La vidéo précédente montre l’irradiation<br>solaire <span class="imp">au niveau du sol</span>.</p>
<p class="fragment fade-up">Comment expliquer la différence par rapport à l’irradiation au niveau des hautes couches atmosphériques (beaucoup plus symétrique) ?</p>

---

<h3>Irradiation au sommet de l’atmosphère</h3>
<div class="sw" data-w="insolation" data-play="1" data-prevent-swipe></div>

---

<p>L’<span class="imp">albédo</span> est la proportion de rayonnement renvoyée par une surface.</p>
<div class="formule">$$A = \frac{P_{diff}}{P_{inc}}$$</div>

---

<h3>L’albédo de quelques surfaces</h3>
<div class="sw" data-w="albedo" data-prevent-swipe></div>

---

{{< qcm
    q=`Une surface de <b>neige fraîche</b> (albédo $A=0{,}85$) reçoit 1 000 W/m². Quelle puissance <b>absorbe</b>-t-elle par m² ?`
    a1=`85 W`
    a2=`150 W`
    a3=`850 W`
    a4=`1 000 W`
    bonne="2"
    expl=`$P_{abs}=(1-A)\times P_{inc}=0{,}15\times1\,000=150$ W/m² : la neige renvoie $850$ W/m² et reste froide.` >}}

---

<p>Grâce à sa couverture nuageuse, l’albédo de la Terre est relativement élevé (de 30 à 35 %)<br>quand celui de la Lune vaut 7 %…</p>

---

<div class="photo"><img src="/albedofeuille.jpeg" alt="Feuille sombre dans la glace" style="max-height:560px"></div>

---

{{< slide  background-video="/ceres.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

<p>La Terre étant chauffée par le Soleil, elle émet, comme on l’a vu, un rayonnement de <span class="imp">corps noir</span> déterminé par sa température de surface moyenne.</p>
<p class="fragment fade-up">Ce rayonnement est situé<br>dans <span class="imp">l’infrarouge</span><br>(autour de 10 μm).</p>

---

<h3>Effet de serre</h3>
<p style="font-size:.75em">Il se trouve que certains gaz atmosphériques,<br>les <span class="imp">gaz à effet de serre</span> (comme le dioxyde de carbone, le méthane ou la vapeur d’eau),<br>sont opaques à ces longueurs d’onde.</p>

---

<h3>Quels gaz absorbent l’infrarouge ?</h3>
<div class="sw" data-w="fenetre" data-prevent-swipe></div>

---

<h3>Le bilan radiatif de la Terre</h3>
<div class="sw" data-w="bilan" data-prevent-swipe></div>

---

<p>Les gaz à effet de serre <span class="imp">renvoient vers la surface</span> une partie du rayonnement infrarouge<br>émis par la Terre.</p>

---

{{< qcm
    q=`L’effet de serre est dû à des gaz qui…`
    a1=`absorbent le rayonnement solaire visible`
    a2=`absorbent le rayonnement infrarouge émis par la Terre et en renvoient une partie vers le sol`
    a3=`réfléchissent tout le rayonnement solaire`
    a4=`produisent eux-mêmes de la chaleur`
    bonne="2"
    expl=`Les gaz à effet de serre sont <b>transparents au visible</b> mais <b>opaques à l’infrarouge</b> : ils réémettent une partie de ce rayonnement vers la surface (le « contre-rayonnement », 333 W/m²).` >}}

---

<p>Si la quantité de gaz à effet de serre augmente,<br>une partie du budget radiatif est déséquilibré<br>(il y a plus d’énergie entrante que sortante).<br>On parle de <span class="imp">forçage radiatif</span>.</p>
<p class="fragment fade-up">La température de surface augmente alors (entraînant un plus fort flux sortant)<br>jusqu’à ce que l’équilibre soit rétabli.</p>

---

{{< qcm
    q=`Quand la quantité de gaz à effet de serre <b>augmente</b>, la température moyenne de surface…`
    a1=`diminue`
    a2=`reste constante`
    a3=`augmente jusqu’à un nouvel équilibre`
    a4=`augmente indéfiniment`
    bonne="3"
    expl=`Le déséquilibre ($N>0$) réchauffe la surface ; comme elle émet alors davantage ($\sigma T^4$), le déséquilibre diminue jusqu’à s’annuler : un <b>nouvel équilibre</b>, plus chaud. Vérifions avec le modèle.` >}}

---

<h3>Un modèle d’effet de serre</h3>
<div class="sw" data-w="serre" data-prevent-swipe></div>

---

{{< youtube-slide id="ewc8FBtEKPs" ratio="16x9" >}}

{{% /section %}}

---

<p><a href="https://coursphychi.github.io/1es/soleil/">↩ Retour au site</a></p>

<script src="/js/soleil/core.js"></script>
<script src="/js/soleil/astro1.js"></script>
<script src="/js/soleil/astro2.js"></script>
<script src="/js/soleil/spectre.js"></script>
<script src="/js/soleil/terre.js"></script>
<script src="/js/soleil/climat.js"></script>
