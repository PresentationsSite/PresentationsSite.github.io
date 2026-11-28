+++
title = "Maths"
outputs = ["Reveal"]
maths_css = "css/maths.css"
[reveal_hugo]
theme = "black"
highlight_theme = "atom-one-dark-reasonable"
+++

<!--
  Présentation « Maths et expressions numériques » (2nde).
  Style    : static/css/maths.css (feuille propre à cette présentation : fond quadrillé, ambiance par partie,
             listes, encadrés, votes, widgets, boîte à outils)
  Scripts  : static/js/son/core.js (votes aux doigts, boîte à outils, mise en page stable)
             static/js/maths/widgets.js (widgets) ; chargés par le shortcode maths-scripts
  Widgets  : <div class="sw" data-w="heroexp|echelle|unites|composes|regles"></div>
  Votes    : shortcode qcm (touches 1-4 ou clic = un vote ; → = correction)
  Réponses : flèche <span class="arr">→</span> puis réponse <span class="fragment corr">…</span> (toujours en vert)
  Règles   : opérateur coloré qui apparaît en zoom au clic : <span class="sg plus fragment zoom"></span>
  Contenu  : les diapos d'origine + le détail des blocs repliables de la page « entraînement »
             (coursphychi.github.io/2nde/entrainement).
-->

<div class="hero">
<div class="sw hero-sw" data-w="heroexp"></div>
<h1>Maths et<br><span class="nw">expressions numériques</span></h1>
<p class="sub">en sciences physiques</p>
<p class="topics">préfixes · unités composées · puissances de 10 · notation scientifique<br>ordres de grandeur · chiffres significatifs · rédaction d'un résultat</p>
<p class="hint">→ parties &nbsp;&nbsp;·&nbsp;&nbsp; ↓ sous-parties</p>
</div>

---

{{% section %}}

<div class="part-title">
<i data-part="regles" hidden></i>
<span class="num">01</span>
<h2>Rappels des règles avec<br>les puissances de 10</h2>
<p>Trois règles suffisent</p>
</div>

---

<div class="rcard b" style="padding:.45em 1.6em">
<div class="rl">10<sup><i>a</i></sup> × 10<sup><i>b</i></sup> = <span class="fragment">10<sup><i>a</i><span class="opw"><span class="sg plus fragment zoom"></span><span class="ph">?</span></span><i>b</i></sup></span></div>
<div class="rl"><span class="frac"><span>10<sup><i>a</i></sup></span><span>10<sup><i>b</i></sup></span></span> = <span class="fragment">10<sup><i>a</i><span class="opw"><span class="sg minus fragment zoom"></span><span class="ph">?</span></span><i>b</i></sup></span></div>
<div class="rl">(10<sup><i>a</i></sup>)<sup><i>b</i></sup> = <span class="fragment">10<sup><i>a</i><span class="opw"><span class="sg times fragment zoom"></span><span class="ph">?</span></span><i>b</i></sup></span></div>
</div>

---

<h3>Testez les règles</h3>

<div class="sw" data-w="regles"></div>

---

<h3>Exemples : les produits</h3>

<p class="petit">On <span class="op plus">additionne</span> les exposants.</p>

<ul class="ex">
<li>10<sup>3</sup> × 10<sup>5</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>8</sup></span></li>
<li>10<sup>−2</sup> × 10<sup>6</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>4</sup></span></li>
<li>10<sup>−4</sup> × 10<sup>−3</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>−7</sup></span></li>
<li>10<sup>5</sup> × 10<sup>−5</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>0</sup> = 1</span></li>
<li>10 × 10<sup>7</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>8</sup></span> <span class="fragment mut">(car 10 = 10<sup>1</sup>)</span></li>
</ul>

---

<h3>Exemples : les quotients</h3>

<p class="petit">On <span class="op minus">soustrait</span> les exposants.</p>

<ul class="ex">
<li>10<sup>7</sup> / 10<sup>3</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>4</sup></span></li>
<li>10<sup>2</sup> / 10<sup>5</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>−3</sup></span></li>
<li>10<sup>5</sup> / 10<sup>−2</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>7</sup></span></li>
<li>10<sup>−3</sup> / 10<sup>−6</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>3</sup></span></li>
<li>1 / 10<sup>4</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>−4</sup></span> <span class="fragment mut">(car 1 = 10<sup>0</sup>)</span></li>
</ul>

---

<h3>Exemples : les puissances de puissances</h3>

<p class="petit">On <span class="op times">multiplie</span> les exposants.</p>

<ul class="ex">
<li>(10<sup>3</sup>)<sup>2</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>6</sup></span></li>
<li>(10<sup>−2</sup>)<sup>3</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>−6</sup></span></li>
<li>(10<sup>4</sup>)<sup>−1</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>−4</sup></span></li>
<li>(10<sup>−3</sup>)<sup>−2</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>6</sup></span></li>
<li>(10<sup>2</sup>)<sup>0</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>0</sup> = 1</span></li>
</ul>

---

<h3>Un peu de tout</h3>

<p class="petit">On applique les règles dans l'ordre, étape par étape.</p>

<ul class="ex">
<li>10<sup>3</sup> × 10<sup>4</sup> / 10<sup>5</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>2</sup></span></li>
<li>(10<sup>−2</sup>)<sup>3</sup> × 10<sup>8</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>2</sup></span></li>
<li>10<sup>6</sup> × 10<sup>−2</sup> / (10<sup>−1</sup>)<sup>2</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>6</sup></span></li>
<li>(10<sup>5</sup> × 10<sup>−3</sup>)<sup>3</sup> <span class="arr">→</span> <span class="fragment corr">10<sup>6</sup></span></li>
<li>10<sup>−4</sup> / (10<sup>2</sup> × 10<sup>−5</sup>) <span class="arr">→</span> <span class="fragment corr">10<sup>−1</sup></span></li>
</ul>

---

<div class="carte piege">
<span class="ct">⚠ Les trois erreurs classiques</span>
<p>10<sup>−3</sup> × 10<sup>−2</sup> = 10<sup>−5</sup>&nbsp;: on additionne −3 et −2, on ne trouve pas 10<sup>−1</sup>.</p>
<p class="fragment fade-up">(10<sup>2</sup>)<sup>3</sup> = 10<sup>6</sup>&nbsp;: on <b>multiplie</b> les exposants (2 × 3), on ne trouve pas 10<sup>5</sup>.</p>
<p class="fragment fade-up">10<sup>0</sup> = 1&nbsp;: et non 0.</p>
</div>

---

{{< qcm
    q=`$10^{3}\times10^{-5}=$ ?`
    a1=`$10^{2}$`
    a2=`$10^{-2}$`
    a3=`$10^{-15}$`
    a4=`$10^{-8}$`
    bonne="2"
    expl=`On additionne les exposants : $3+(-5)=-2$, donc $10^{3}\times10^{-5}=10^{-2}$.` >}}

---

{{< qcm
    q=`$\left(10^{-2}\right)^{3}=$ ?`
    a1=`$10^{6}$`
    a2=`$10^{-5}$`
    a3=`$10^{-6}$`
    a4=`$10^{-8}$`
    bonne="3"
    expl=`On multiplie les exposants : $(-2)\times3=-6$, donc $\left(10^{-2}\right)^{3}=10^{-6}$.` >}}

---

{{< qcm
    q=`$\dfrac{10^{5}}{10^{-2}}=$ ?`
    a1=`$10^{3}$`
    a2=`$10^{7}$`
    a3=`$10^{-3}$`
    a4=`$10^{-7}$`
    bonne="2"
    expl=`On soustrait les exposants : $5-(-2)=7$, donc $\dfrac{10^{5}}{10^{-2}}=10^{7}$.` >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="prefixes" hidden></i>
<span class="num">02</span>
<h2>Multiples et<br>sous-multiples</h2>
<p>Pour remplacer les puissances de 10</p>
</div>

---

<div class="glass">
<p>Un préfixe n'est qu'un <span class="imp">facteur multiplicatif</span><br>collé devant l'unité.</p>
<p class="fragment fade-up">«&nbsp;<span class="imp">kilo</span>&nbsp;» veut dire «&nbsp;$\times\,10^{3}$&nbsp;»,<br>«&nbsp;<span class="imp">milli</span>&nbsp;» veut dire «&nbsp;$\times\,10^{-3}$&nbsp;».</p>
<p class="fragment fade-up">Convertir, c'est donc<br><span class="imp">remplacer le préfixe par sa puissance de 10</span>.</p>
</div>

---

<h3>Explorez l'échelle des préfixes</h3>

<div class="sw" data-w="echelle"></div>

{{%note%}}
Cliquer sur un préfixe pour voir son facteur, comment il se lit et un exemple ; « Visite guidée » les parcourt du femto au péta. Les préfixes en italique (hecto, déca, déci, centi) servent surtout dans la vie courante.
{{%/note%}}

---

### les multiples :

<table class="pref">
<thead><tr><th style="text-align:center;">Préfixe</th><th style="text-align:center;">Symbole</th><th style="text-align:center;">Facteur</th><th style="text-align:center;">Se lit</th><th style="text-align:center;">Exemple</th></tr></thead>
<tbody>
<tr class="up"><td>kilo</td><td class="sym">k</td><td>$10^{3}$</td><td class="lu">mille</td><td>$\pu{1 kg} = \pu{1E3 g}$</td></tr>
<tr class="up fragment fade-up"><td>méga</td><td class="sym">M</td><td>$10^{6}$</td><td class="lu">million</td><td>$\pu{1 MJ} = \pu{1E6 J}$</td></tr>
<tr class="up fragment fade-up"><td>giga</td><td class="sym">G</td><td>$10^{9}$</td><td class="lu">milliard</td><td>$\pu{1 GW} = \pu{1E9 W}$</td></tr>
<tr class="up fragment fade-up"><td>téra</td><td class="sym">T</td><td>$10^{12}$</td><td class="lu">mille milliards</td><td>$\pu{1 Ts} = \pu{1E12 s}$</td></tr>
<tr class="up fragment fade-up"><td>péta</td><td class="sym">P</td><td>$10^{15}$</td><td class="lu">million de milliards</td><td>$\pu{1 PV} = \pu{1E15 V}$</td></tr>
</tbody>
</table>

---

### les sous-multiples :

<table class="pref">
<thead><tr><th style="text-align:center;">Préfixe</th><th style="text-align:center;">Symbole</th><th style="text-align:center;">Facteur</th><th style="text-align:center;">Se lit</th><th style="text-align:center;">Exemple</th></tr></thead>
<tbody>
<tr class="down"><td>milli</td><td class="sym">m</td><td>$10^{-3}$</td><td class="lu">millième</td><td>$\pu{1 ms} = \pu{1E-3 s}$</td></tr>
<tr class="down fragment fade-up"><td>micro</td><td class="sym">μ</td><td>$10^{-6}$</td><td class="lu">millionième</td><td>$\pu{1 μW} = \pu{1E-6 W}$</td></tr>
<tr class="down fragment fade-up"><td>nano</td><td class="sym">n</td><td>$10^{-9}$</td><td class="lu">milliardième</td><td>$\pu{1 ng} = \pu{1E-9 g}$</td></tr>
<tr class="down fragment fade-up"><td>pico</td><td class="sym">p</td><td>$10^{-12}$</td><td class="lu">millième de milliardième</td><td>$\pu{1 pJ} = \pu{1E-12 J}$</td></tr>
<tr class="down fragment fade-up"><td>femto</td><td class="sym">f</td><td>$10^{-15}$</td><td class="lu">millionième de milliardième</td><td>$\pu{1 fm} = \pu{1E-15 m}$</td></tr>
</tbody>
</table>

---

<p>Les préfixes qui vont <span class="imp">de mille en mille</span><br>(puissances de 10 multiples de 3) sont<br>les plus utilisés en sciences.</p>

<p class="fragment fade-up petit">Quatre autres servent surtout dans la vie courante :</p>

<table class="pref fragment fade-up">
<tbody>
<tr class="up"><td>hecto</td><td class="sym">h</td><td>$10^{2}$</td><td class="lu">cent</td><td>$\pu{1 hL} = \pu{1E2 L}$</td></tr>
<tr class="up"><td>déca</td><td class="sym">da</td><td>$10^{1}$</td><td class="lu">dix</td><td>$\pu{1 dam} = \pu{1E1 m}$</td></tr>
<tr class="down"><td>déci</td><td class="sym">d</td><td>$10^{-1}$</td><td class="lu">dixième</td><td>$\pu{1 dL} = \pu{1E-1 L}$</td></tr>
<tr class="down"><td>centi</td><td class="sym">c</td><td>$10^{-2}$</td><td class="lu">centième</td><td>$\pu{1 cm} = \pu{1E-2 m}$</td></tr>
</tbody>
</table>


{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="conversions" hidden></i>
<span class="num">03</span>
<h2>Conversions</h2>
<p>Remplacer, calculer, vérifier</p>
</div>

---

<div class="carte methode">
<span class="ct">La méthode : remplacer le préfixe</span>
<p class="fragment fade-up">$\pu{4,7 {\color{#FFC43A}k}m} = 4{,}7{\color{#FFC43A} \times 10^{3}}\ \mathrm{m}$</p>
<p class="fragment fade-up">$\pu{250 {\color{#FFC43A}m}L} = 250 {\color{#FFC43A}\times 10^{-3}}\ \mathrm{L} = \pu{0,250 L}$</p>
<p class="fragment fade-up">Dans l'autre sens, on fait apparaître la puissance de 10 du préfixe voulu :<br>$\pu{5,8E-7 m} = 580 {\color{#4FD8FF}\times 10^{-9}}\ \mathrm{m} = \pu{580 {\color{#4FD8FF}n}m}$</p>
</div>

---

Convertir 34 pm en km

<div class="steps">
<div class="st fragment fade-up"><div class="f">$\pu{34 {\color{#FFC43A}p}m} = 34 {\color{#FFC43A}\times 10^{-12}}\ \mathrm{m}$</div><div class="c">on remplace le préfixe <b>pico</b> par <b>10<sup>−12</sup></b></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 pm}} = 34\times 10^{-12}\times {\color{#4FD8FF}10^{-3}}\ \mathrm{{\color{#4FD8FF}k}m}$</div><div class="c">1&nbsp;m = <b>10<sup>−3</sup></b>&nbsp;<b>k</b>m (car 1&nbsp;km = 10<sup>3</sup>&nbsp;m)</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 pm}} = 34\times 10^{-12+(-3)}\ \mathrm{km}$</div><div class="c">on additionne les exposants</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 pm}} = {\color{#4CF09A}\pu{34E-15 km}}$</div><div class="c"></div></div>
</div>

---

Convertir 34 μg en fg (femtogramme)

<div class="steps">
<div class="st fragment fade-up"><div class="f">$\pu{34 {\color{#FFC43A}μ}g} = 34 {\color{#FFC43A}\times 10^{-6}}\ \mathrm{g}$</div><div class="c">on remplace le préfixe <b>micro</b> par <b>10<sup>−6</sup></b></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 μg}} = 34\times 10^{-6}\times {\color{#4FD8FF}10^{15}}\ \mathrm{{\color{#4FD8FF}f}g}$</div><div class="c">1&nbsp;g = <b>10<sup>15</sup></b>&nbsp;<b>f</b>g (car 1&nbsp;fg = 10<sup>−15</sup>&nbsp;g)</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 μg}} = 34\times 10^{-6+15}\ \mathrm{fg}$</div><div class="c">on additionne les exposants</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 μg}} = {\color{#4CF09A}\pu{34E9 fg}}$</div><div class="c"></div></div>
</div>

---

<h3>Aires et volumes : attention aux exposants</h3>

<div class="duo">
<div class="carte methode fragment fade-up">
<span class="ct">Aires : on élève au carré</span>
$\begin{aligned}\pu{1 dm2} &= \pu{1 dm}\times\pu{1 dm}\\ &= {\color{#4FD8FF}\pu{10^2 mm}}\times{\color{#4FD8FF}\pu{10^2 mm}}\\ &= \left({\color{#4FD8FF}10^2}\right)^2\ \pu{mm2}\\ &= \pu{1E4 mm2}\end{aligned}$
</div>
<div class="carte savoir fragment fade-up">
<span class="ct">Volumes : on élève au cube</span>
$\begin{aligned}\pu{1 dm3} &= \pu{1 dm}\times\pu{1 dm}\times\pu{1 dm}\\ &= {\color{#4FD8FF}\pu{10^2 mm}}\times{\color{#4FD8FF}\pu{10^2 mm}}\times{\color{#4FD8FF}\pu{10^2 mm}}\\ &= \left({\color{#4FD8FF}10^2}\right)^3\ \pu{mm3}\\ &= \pu{1E6 mm3}\end{aligned}$
</div>
</div>

---

<div class="glass">
<p>L'idée : entre dm et mm, les <span class="imp">longueurs</span> sont multipliées par $10^2$.</p>
<p class="fragment fade-up">Une <span class="imp" style="color:#FFD932">aire</span> est une longueur $\times$ une longueur :<br>elle est multipliée par $\left(10^2\right)^2$.</p>
<p class="fragment fade-up">Un <span class="imp" style="color:#FF644E">volume</span> est longueur $\times$ longueur $\times$ longueur :<br>il est multiplié par $\left(10^2\right)^3$.</p>
</div>

---

{{< qcm
    q=`Combien y a-t-il de $\mathrm{mm}^3$ dans $1\ \mathrm{m}^3$&nbsp;?`
    a1=`$10^3$`
    a2=`$10^6$`
    a3=`$10^9$`
    a4=`$10^{12}$`
    bonne="3"
    expl=`$1\ \mathrm{m}^3 = \left(10^3\ \mathrm{mm}\right)^3 = 10^9\ \mathrm{mm}^3$` >}}

---

Convertir 34 m$^3$ en nm$^3$

<div class="steps">
<div class="st fragment fade-up"><div class="f">$\pu{34 m^3} = 34\times\left({\color{#4FD8FF}10^{9}}\ \mathrm{{\color{#4FD8FF}n}m}\right)^3$</div><div class="c">1&nbsp;m = <b>10<sup>9</sup></b>&nbsp;<b>n</b>m (car 1&nbsp;nm = 10<sup>−9</sup>&nbsp;m), puis on met au cube</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 m^3}} = 34\times 10^{9\times 3}\ \mathrm{nm^3}$</div><div class="c">(10<sup>a</sup>)<sup>b</sup> = 10<sup>a×b</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 m^3}} = {\color{#4CF09A}34\times 10^{27}\ \mathrm{nm^3}}$</div><div class="c"></div></div>
</div>

---


Convertir 34 nm$^2$ en μm$^2$

<div class="steps">
<div class="st fragment fade-up"><div class="f">$\pu{34 {\color{#FFC43A}n}m^2} = 34\times\left({\color{#FFC43A}10^{-9}}\ \mathrm m\right)^2$</div><div class="c">1&nbsp;<b>n</b>m = <b>10<sup>−9</sup></b>&nbsp;m, puis on met au carré</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 nm^2}} = 34\times 10^{-18}\ \mathrm{m^2}$</div><div class="c">(10<sup>−9</sup>)<sup>2</sup> = 10<sup>−18</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 nm^2}} = 34\times 10^{-18}\times\left({\color{#4FD8FF}10^{6}}\ \mathrm{{\color{#4FD8FF}μ}m}\right)^2$</div><div class="c">1&nbsp;m = <b>10<sup>6</sup></b>&nbsp;<b>µ</b>m, puis on met au carré</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 nm^2}} = 34\times 10^{-18}\times 10^{12}\ \mathrm{μm^2}$</div><div class="c">(10<sup>6</sup>)<sup>2</sup> = 10<sup>12</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{34 nm^2}} = {\color{#4CF09A}\pu{34E-6 μm2}}$</div><div class="c">on additionne les exposants : −18 + 12 = −6</div></div>
</div>

---

<div class="carte piege">
<span class="ct">⚠ Piège classique</span>
<p>$\pu{1 m2}$ ne vaut <b>pas</b> $\pu{100 cm2}$ !</p>
<p class="fragment fade-up">Le facteur $10^2$ des longueurs doit être élevé au carré :<br>$\pu{1 m2} = \left(10^2\right)^2\ \pu{cm2} = \pu{1E4 cm2}$.</p>
</div>

---

<h3>Le tableau de conversion des litres</h3>

<table class="unites">
<thead><tr><th>hL</th><th>daL</th><th class="u0">L</th><th>dL</th><th>cL</th><th>mL</th></tr></thead>
<tbody><tr><td></td><td></td><td class="u0">1</td><td class="fragment fade-up">0</td><td class="fragment fade-up">0</td><td class="fragment fade-up">0</td></tr></tbody>
</table>

<p class="fragment fade-up petit">Chaque colonne vers la droite correspond à un facteur 10.<br>On lit : $\pu{1 L = 10 dL = 100 cL = 1000 mL}$,<br>et de même $\pu{1 hL = 100 L}$.</p>

---

<div class="carte savoir">
<span class="ct">À savoir</span>
<p>$\pu{1 L} = \pu{1 dm3}$, et donc (en divisant par 1000) $\pu{1 mL} = \pu{1 cm3}$.</p>
<p class="fragment fade-up">Un <b>are</b> est l'aire d'un carré de $\pu{10 m}$ de côté :<br>$\pu{1 a} = \pu{10 m}\times\pu{10 m} = \pu{1E2 m2}$.</p>
<p class="fragment fade-up">Un <b>hectare</b> vaut 100 ares, soit un carré de $\pu{100 m}$ de côté :<br>$\pu{1 ha} = \pu{100 m}\times\pu{100 m} = \pu{1E4 m2}$.</p>
</div>

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="unites" hidden></i>
<span class="num">04</span>
<h2>Unités composées<br>et exposants négatifs</h2>
<p>m·s<sup>−1</sup>, kg·m<sup>−3</sup>, mol·L<sup>−1</sup>… pas de panique</p>
</div>

---

<div class="glass">
<p>Dans une unité, «&nbsp;<span class="imp">par</span>&nbsp;» veut dire «&nbsp;<span class="imp">divisé par</span>&nbsp;».</p>
<p class="fragment fade-up">$\pu{72 km/h}$ se lit «&nbsp;72 kilomètres <b>par</b> heure&nbsp;» :<br>72 km parcourus pour <b>1 h</b>.</p>
<p class="fragment fade-up">$\pu{0,79 g/mL}$ se lit «&nbsp;0,79 gramme <b>par</b> millilitre&nbsp;» :<br>0,79 g pour <b>1 mL</b>.</p>
<p class="fragment fade-up petit">Le nombre se rapporte toujours à <b>une</b> unité de ce qui est «&nbsp;sous la barre&nbsp;».</p>
</div>

---

<div class="regle">
<span class="rh">Exposant négatif = division</span>
<span class="rb">$x^{-1} = \dfrac{1}{x}$ &nbsp;&nbsp; $x^{-2} = \dfrac{1}{x^{2}}$ &nbsp;&nbsp; $x^{-3} = \dfrac{1}{x^{3}}$</span>
<span class="rw">C'est la même idée que $10^{-3} = \dfrac{1}{10^{3}} = 0{,}001$ : on peut l'appliquer à n'importe quel symbole, unité comprise.</span>
</div>

<div class="fragment fade-up">

$$\mathrm{m\cdot s^{-1}} = \mathrm m\times\frac{1}{\mathrm s} = \frac{\mathrm m}{\mathrm s}
\qquad
\mathrm{kg\cdot m^{-3}} = \frac{\mathrm{kg}}{\mathrm m^{3}}$$

</div>

---

<h3>Décodez les unités</h3>

<div class="sw" data-w="unites"></div>

{{%note%}}
Chaque bouton est écrit « avec une barre ». Le panneau montre l'écriture avec exposants (exposants négatifs en bleu, positifs en jaune), la façon de la lire et ce que ça veut dire concrètement.
{{%/note%}}

---

<div class="carte piege">
<span class="ct">⚠ Plusieurs unités sous la barre</span>
<p>$\dfrac{\mathrm J}{\mathrm{kg}\cdot\mathrm K}$ s'écrit $\mathrm{J\cdot kg^{-1}\cdot K^{-1}}$.</p>
<p class="fragment fade-up"><b>Chaque</b> unité du dénominateur reçoit son propre exposant négatif.</p>
<p class="fragment fade-up">Écrire «&nbsp;J/kg·K&nbsp;» est ambigu : on lirait $\dfrac{\mathrm J}{\mathrm{kg}}\times\mathrm K$. Avec une barre, on met des <b>parenthèses</b> : $\mathrm{J/(kg\cdot K)}$.</p>
</div>

---

{{< qcm
    q=`Que signifie $\mathrm{g\cdot mL^{-1}}$&nbsp;?`
    a1=`gramme fois millilitre`
    a2=`gramme par millilitre`
    a3=`millilitre par gramme`
    a4=`gramme moins un millilitre`
    bonne="2"
    expl=`$\mathrm{mL^{-1}}=\dfrac{1}{\mathrm{mL}}$ : on divise par le millilitre, soit des grammes <b>par</b> millilitre.` >}}

---

{{< qcm
    q=`Quelle écriture désigne la même unité que $\mathrm{kg/m^3}$&nbsp;?`
    a1=`$\mathrm{kg\cdot m^{3}}$`
    a2=`$\mathrm{kg\cdot m^{-3}}$`
    a3=`$\mathrm{kg^{-1}\cdot m^{3}}$`
    a4=`$\mathrm{kg\cdot m^{-1}}$`
    bonne="2"
    expl=`Le $\mathrm{m^3}$ est sous la barre : il passe en exposant négatif, $\mathrm{m^{-3}}$. Le kg reste en haut, sans changement.` >}}

---

{{< qcm
    q=`Une fréquence de $50\ \mathrm{s^{-1}}$ signifie&nbsp;:`
    a1=`un phénomène qui dure 50 s`
    a2=`50 répétitions chaque seconde (50 Hz)`
    a3=`50 m parcourus par seconde`
    a4=`une période de 50 s`
    bonne="2"
    expl=`$\mathrm{s^{-1}}=\dfrac{1}{\mathrm s}$ : «&nbsp;par seconde&nbsp;». Le hertz est justement $1\ \mathrm{Hz}=1\ \mathrm{s^{-1}}$.` >}}

---

<h3>Convertir une unité composée</h3>

<ol class="etapes">
<li class="fragment fade-up"><span class="et-t">Le haut (numérateur)</span><p>On le convertit comme d'habitude : on remplace le préfixe par sa puissance de 10.</p></li>
<li class="fragment fade-up"><span class="et-t">Le bas (dénominateur)</span><p>On le convertit aussi… mais il agit <b>« à l'envers&nbsp;»</b> : une unité du bas 1000 fois plus petite donne un résultat 1000 fois plus grand.</p></li>
<li class="fragment fade-up"><span class="et-t">On regroupe et on calcule</span><p>On écrit une seule fraction, avec les puissances de 10 (et, pour le temps, 60 ou 3 600).</p></li>
</ol>

---

Convertir 72 km/h en m/s

<div class="fragment fade-up">

$$
\begin{aligned}
\pu{72 km/h} &= \frac{72\times\pu{10^{3} m}}{\pu{3600 s}}\\\\
&= \frac{72\\,000\ \mathrm m}{3\\,600\ \mathrm s}\\\\
&= \pu{20 m/s}
\end{aligned}
$$

</div>

<p class="fragment fade-up petit">car $\pu{1 km} = \pu{10^3 m}$ et $\pu{1 h} = \pu{3600 s}$.</p>

---

<div class="carte savoir">
<span class="ct">À savoir : le facteur 3,6</span>
<p>$\pu{1 m/s} = \dfrac{10^{-3}\ \mathrm{km}}{\dfrac{1}{3600}\ \mathrm{h}} = \pu{3,6 km/h}$</p>
<p class="fragment fade-up">Pour passer des <b>m/s</b> aux <b>km/h</b> : on <b>multiplie</b> par 3,6.</p>
<p class="fragment fade-up">Pour passer des <b>km/h</b> aux <b>m/s</b> :<br>on <b>divise</b> par 3,6. &nbsp;Ex. : $\dfrac{72}{3{,}6}=20$ m/s.</p>
</div>

---

Convertir 1,0 g/cm$^3$ en kg/m$^3$

<div class="steps dense">
<div class="st fragment fade-up"><div class="f">$\pu{1,0 g/cm3} = \dfrac{1{,}0\ \mathrm{g}}{1\ \mathrm{cm}^3}$</div><div class="c">des grammes pour 1&nbsp;cm<sup>3</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{1,0 g/cm3}} = \dfrac{1{,}0\times{\color{#FFC43A}10^{-3}}\ \mathrm{{\color{#FFC43A}k}g}}{1\ \mathrm{cm}^3}$</div><div class="c">en haut : 1&nbsp;g = <b>10<sup>−3</sup></b>&nbsp;<b>k</b>g</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{1,0 g/cm3}} = \dfrac{1{,}0\times10^{-3}\ \mathrm{kg}}{\left({\color{#4FD8FF}10^{-2}}\ \mathrm{m}\right)^3}$</div><div class="c">en bas : 1&nbsp;cm = <b>10<sup>−2</sup></b>&nbsp;m, puis on met au cube</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{1,0 g/cm3}} = \dfrac{1{,}0\times10^{-3}\ \mathrm{kg}}{{\color{#4FD8FF}10^{-6}}\ \mathrm{m^3}}$</div><div class="c">(10<sup>−2</sup>)<sup>3</sup> = 10<sup>−6</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{1,0 g/cm3}} = 1{,}0\times 10^{-3-(-6)}\ \mathrm{kg/m^3}$</div><div class="c">diviser, c'est soustraire les exposants</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{1,0 g/cm3}} = {\color{#4CF09A}\pu{1,0E3 kg*m-3}}$</div><div class="c"></div></div>
</div>

---

<div class="glass" style="font-size:.84em">
<p>Le plus important :<br><span class="imp">donner du sens</span> au résultat.</p>
<p class="fragment fade-up">$\pu{1 g/cm3}$ : <b>1 g dans chaque cm$^3$</b>.</p>
<p class="fragment fade-up">Or $1\ \mathrm{m^3}$ contient $10^{6}\ \mathrm{cm^3}$&nbsp;: cela fait $10^{6}\ \mathrm g$ dans $1\ \mathrm{m^3}$.</p>
<p class="fragment fade-up">Et $10^{6}\ \mathrm g = 10^{3}\ \mathrm{kg}$ : $\pu{1 g/cm3} = \pu{1E3 kg/m3}$.</p>
<p class="fragment fade-up">L'eau pèse donc <b>1 000 kg par m$^3$</b>, soit 1 tonne&nbsp;!</p>
<p class="fragment fade-up petit">Et comme $\pu{1 mL} = \pu{1 cm3}$ : $\pu{1 g/mL} = \pu{1 g/cm3} = \pu{1E3 kg/m3}$.</p>
</div>

---

Convertir 0,10 mol/L en mol/m$^3$

<div class="steps dense">
<div class="st fragment fade-up"><div class="f">$\pu{0,10 mol/L} = \dfrac{0{,}10\ \mathrm{mol}}{1\ \mathrm{L}}$</div><div class="c">des moles pour 1&nbsp;L</div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{0,10 mol/L}} = \dfrac{0{,}10\ \mathrm{mol}}{{\color{#4FD8FF}10^{-3}}\ \mathrm{{\color{#4FD8FF}m^3}}}$</div><div class="c">en bas : 1&nbsp;L = 1&nbsp;dm<sup>3</sup> = <b>10<sup>−3</sup></b>&nbsp;m<sup>3</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{0,10 mol/L}} = 0{,}10\times 10^{3}\ \mathrm{mol/m^3}$</div><div class="c">diviser par 10<sup>−3</sup>, c'est multiplier par 10<sup>3</sup></div></div>
<div class="st fragment fade-up"><div class="f">$\phantom{\pu{0,10 mol/L}} = {\color{#4CF09A}\pu{1,0E2 mol*m-3}}$</div><div class="c"></div></div>
</div>

---

{{< qcm
    q=`$36\ \mathrm{km/h}$ valent&nbsp;:`
    a1=`$129{,}6\ \mathrm{m/s}$`
    a2=`$10\ \mathrm{m/s}$`
    a3=`$36\,000\ \mathrm{m/s}$`
    a4=`$0{,}6\ \mathrm{m/s}$`
    bonne="2"
    expl=`$\dfrac{36\times10^{3}\ \mathrm m}{3600\ \mathrm s}=10\ \mathrm{m/s}$ (ou $36 \div 3{,}6$).` >}}

---

{{< qcm
    q=`L'éthanol a une masse volumique de $0{,}79\ \mathrm{g/mL}$. En $\mathrm{kg/m^3}$, cela fait&nbsp;:`
    a1=`$0{,}79\ \mathrm{kg/m^3}$`
    a2=`$79\ \mathrm{kg/m^3}$`
    a3=`$790\ \mathrm{kg/m^3}$`
    a4=`$790\,000\ \mathrm{kg/m^3}$`
    bonne="3"
    expl=`$1\ \mathrm{g/mL}=1\ \mathrm{g/cm^3}=10^{3}\ \mathrm{kg/m^3}$, donc $0{,}79\times10^{3}=790\ \mathrm{kg/m^3}$ (moins dense que l'eau).` >}}

---

{{< qcm
    q=`$0{,}50\ \mathrm{mol\cdot L^{-1}}$ valent, en $\mathrm{mmol\cdot L^{-1}}$&nbsp;:`
    a1=`$0{,}50$`
    a2=`$5{,}0\times10^{2}$`
    a3=`$5{,}0\times10^{-4}$`
    a4=`$5{,}0\times10^{-1}$`
    bonne="2"
    expl=`$1\ \mathrm{mol}=10^{3}\ \mathrm{mmol}$ (le haut) et le litre ne change pas : $0{,}50\times10^{3}=5{,}0\times10^{2}\ \mathrm{mmol\cdot L^{-1}}$.` >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="sci" hidden></i>
<span class="num">05</span>
<h2>Notation scientifique</h2>
<p>Écrire les très grands et les très petits nombres</p>
</div>

---

Les physiciens manipulent des nombres<br>très grands ou très petits :

<ul style="font-size:0.75em">
<li class="fragment fade-up">masse de la Terre :<br>$5\,970\,000\,000\,000\,000\,000\,000\,000\ \text{kg}$</li>
<li class="fragment fade-up">masse d'un électron :<br>$0{,}000\,000\,000\,000\,000\,000\,000\,000\,000\,000\,91\ \text{kg}$</li>
</ul>

<p class="fragment fade-up">Illisible ! D'où la <span class="imp">notation scientifique</span> :<br>$5{,}97\times10^{24}\ \text{kg}$ et $9{,}1\times10^{-31}\ \text{kg}$.</p>

---

Un nombre est écrit en <span class="imp">notation scientifique</span><br>lorsqu'il est sous la forme :

<div class="rcard r fragment fade-up" style="font-size:1.5em">$a\times10^{n}$</div>

<ul>
<li class="fragment fade-up">$a$ est un nombre décimal avec <span class="imp">un seul chiffre<br>non nul avant la virgule</span> : $1\leqslant a \lt 10$ ;</li>
<li class="fragment fade-up">$n$ est un <span class="imp">entier relatif</span> : $n\in\mathbb{Z}$.</li>
</ul>

<p class="fragment fade-up petit">Rq : pour un nombre négatif, le signe se place devant :<br>charge de l'électron $=-1{,}6\times10^{-19}\ \text{C}$.</p>

---

<u>Méthode</u> : on place la virgule juste après<br>le <span class="imp">premier chiffre non nul</span>, puis on compte<br>de combien de rangs on l'a déplacée :

<ul style="font-size:.78em">
<li class="fragment fade-up">vers la gauche : <span class="imp">$n$ positif</span> (grand nombre)</li>
<li class="fragment fade-up">vers la droite : <b style="color:#FFF056">$n$ négatif</b> (nombre plus petit que 1)</li>
</ul>

<p class="fragment fade-up" style="font-size:.78em">Exemples :</p>

<ul style="font-size:.78em">
<li class="fragment fade-up">$340$ <span class="arr">→</span> <span class="fragment corr">$3{,}4\times10^{2}$</span></li>
<li class="fragment fade-up">$6\,370\,000$ <span class="arr">→</span> <span class="fragment corr">$6{,}37\times10^{6}$</span></li>
<li class="fragment fade-up">$0{,}052$ <span class="arr">→</span> <span class="fragment corr">$5{,}2\times10^{-2}$</span></li>
<li class="fragment fade-up">$0{,}000\,8$ <span class="arr">→</span> <span class="fragment corr">$8\times10^{-4}$</span></li>
</ul>

---

Et si le nombre comporte déjà<br>une puissance de 10 ?

<ul>
<li class="fragment fade-up">${\color{#4FD8FF}632}\times10^{5}$<br><span class="arr">→</span> <span class="fragment corr">${\color{#4FD8FF}6{,}32\times10^{2}}\times10^{5}$</span> <span class="fragment corr">$=6{,}32\times10^{7}$</span></li>
<li class="fragment fade-up">${\color{#4FD8FF}0{,}25}\times10^{-3}$<br><span class="arr">→</span> <span class="fragment corr">${\color{#4FD8FF}2{,}5\times10^{-1}}\times10^{-3}$</span> <span class="fragment corr">$=2{,}5\times10^{-4}$</span></li>
</ul>

<p class="fragment fade-up">Si on multiplie $a$ par 10, on retire 1 à $n$<br>(et inversement) : le nombre ne change pas !</p>

---

{{< qcm
    q=`Ces quatre écritures valent toutes 25 000. <span class="ask">Laquelle est en notation scientifique&nbsp;?</span>`
    a1=`$250\times10^{2}$`
    a2=`$25\times10^{3}$`
    a3=`$2{,}5\times10^{4}$`
    a4=`$0{,}25\times10^{5}$`
    bonne="3"
    expl=`Seule $2{,}5\times10^{4}$ a un seul chiffre non nul avant la virgule&nbsp;: $1\leqslant 2{,}5<10$.` >}}

---

{{< qcm
    q=`Comment s'écrit $0{,}0045$ en notation scientifique&nbsp;?`
    a1=`$4{,}5\times10^{3}$`
    a2=`$4{,}5\times10^{-3}$`
    a3=`$45\times10^{-4}$`
    a4=`$4{,}5\times10^{-2}$`
    bonne="2"
    expl=`La virgule glisse de 3 rangs vers la droite&nbsp;: $n=-3$.` >}}

---

<span class="ask">Écrire en notation scientifique :</span>

<ul style="font-size:0.85em">
<li>rayon de la Terre : $6\,370\ \text{km}$ <span class="arr">→</span> <span class="fragment corr">$6{,}37\times10^{3}\ \text{km}$</span></li>
<li>épaisseur d'un cheveu : $0{,}000\,07\ \text{m}$ <span class="arr">→</span> <span class="fragment corr">$7\times10^{-5}\ \text{m}$</span></li>
<li>vitesse de la lumière : $300\,000\ \text{km/s}$ <span class="arr">→</span> <span class="fragment corr">$3\times10^{5}\ \text{km/s}$</span></li>
<li>$48{,}5\times10^{3}\ \text{J}$ <span class="arr">→</span> <span class="fragment corr">$4{,}85\times10^{4}\ \text{J}$</span></li>
<li>$0{,}032\times10^{-5}\ \text{m}$ <span class="arr">→</span> <span class="fragment corr">$3{,}2\times10^{-7}\ \text{m}$</span></li>
</ul>

---

<span class="ask">Calculer et donner le résultat<br>en notation scientifique :</span>

<ul style="font-size:0.85em">
<li>$(3\times10^{4})\times(2\times10^{-7})$ <span class="fragment corr">$=6\times10^{-3}$</span></li>
<li>$\dfrac{8\times10^{5}}{4\times10^{-2}}$ <span class="fragment corr">$=2\times10^{7}$</span></li>
<li>$(2\times10^{-3})^{2}$ <span class="fragment corr">$=4\times10^{-6}$</span></li>
<li>$(2{,}5\times10^{3})\times(6\times10^{2})$ <span class="fragment corr">$=15\times10^{5}$</span> <span class="fragment corr">$=1{,}5\times10^{6}$</span></li>
</ul>

<p class="fragment fade-up" style="font-size:0.7em">Attention : $15$ n'est pas compris entre 1 et 10,<br>il faut encore transformer l'écriture !</p>

---

Deux petites vidéos qui reprennent tout ça :

---

{{< youtube-slide id="bBT1hOYQPnY" ratio="16x9" >}}


---


{{< youtube-slide id="PtftD6sU-Sc" ratio="16x9" >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="og" hidden></i>
<span class="num">06</span>
<h2>Ordre de grandeur<br>et puissances de 10</h2>
<p>Estimer « à la louche »</p>
</div>

---

<span class="imp">Ordre de grandeur ?</span>

<div class="glass">
<p>L'ordre de grandeur d'un nombre est une <span class="imp">puissance de 10</span><br>qui en donne une idée «&nbsp;à la louche&nbsp;».</p>
<p class="fragment fade-up">Il permet de comparer d'un coup d'œil des grandeurs<br>très différentes, de la taille d'un atome à celle d'une galaxie.</p>
</div>

---

<ol class="etapes">
<li><span class="et-t">Écrire le nombre en notation scientifique</span><p>$a\times 10^{n}$, avec $1 \leqslant a < 10$ et $n$ entier.</p></li>
<li class="fragment fade-up"><span class="et-t">Comparer $a$ à 5</span><p>Si $a < 5$, l'ordre de grandeur est $10^{n}$.<br>Si $a \geqslant 5$, c'est la puissance suivante&nbsp;: $10^{n+1}$.</p></li>
</ol>

---

<p>L'ordre de grandeur d'un nombre $a\times 10^b$<br>écrit en notation scientifique ($1≤a<10$) vaut :</p>

<ul>
<li class="fragment fade-up"><span class="imp">$10^b$</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;si <span class="imp">$a<5$</span></li>
<li class="fragment fade-up"><b style="color:#FFF056">$10^{b+1}$</b>&nbsp;&nbsp;si <b style="color:#FFF056">$a≥5$</b></li>
</ul>

---

<ul>
<li>$\pu{3E5}$ <span class="arr">→</span> <span class="fragment corr">$10^5$</span></li>
<li>$\pu{5E5}$ <span class="arr">→</span> <span class="fragment corr">$10^6$</span></li>
<li>$\pu{8E-5}$ <span class="arr">→</span> <span class="fragment corr">$10^{-4}$</span></li>
<li>$\pu{2E-5}$ <span class="arr">→</span> <span class="fragment corr">$10^{-5}$</span></li>
<li>$\pu{3,5}$ <span class="arr">→</span> <span class="fragment corr">$10^0$ ou $1$</span></li>
</ul>


---

<table class="tbl">
<tr><th>Nombre</th><th>Notation scientifique</th><th>Comparaison</th><th>Ordre de grandeur</th></tr>
<tr><td>$499$</td><td>$4{,}99\times 10^{2}$</td><td>$4{,}99 < 5$</td><td><b style="color:#4aa8ff">$10^{2}$</b></td></tr>
<tr class="fragment fade-up"><td>$500$</td><td>$5{,}00\times 10^{2}$</td><td>$5{,}00 \geqslant 5$</td><td><b style="color:#ffa23a">$10^{3}$</b></td></tr>
<tr class="fragment fade-up"><td>$0{,}0087$</td><td>$8{,}7\times 10^{-3}$</td><td>$8{,}7 \geqslant 5$</td><td><b style="color:#ffa23a">$10^{-2}$</b></td></tr>
<tr class="fragment fade-up"><td>$\pu{6371 km}$<br><span class="mut">rayon de la Terre</span></td><td>$\pu{6,371E6 m}$</td><td>$6{,}371 \geqslant 5$</td><td><b style="color:#ffa23a">$\pu{1E7 m}$</b></td></tr>
</table>

---

<div class="carte piege">
<span class="ct">⚠ Avec les puissances négatives</span>
<p>«&nbsp;La puissance suivante&nbsp;» de $10^{-3}$ est $10^{-2}$<br>(car $-3+1=-2$), et non $10^{-4}$.</p>
<p class="fragment fade-up">On monte <b>toujours vers le plus grand</b>.</p>
</div>

---

D'autres ordres de grandeur à trouver :


<ul>
<li>$\pu{632E5}$ <span class="arr">→</span> <span class="fragment corr">$10^8$</span></li>
<li>$\pu{632E-4}$ <span class="arr">→</span> <span class="fragment corr">$10^{-1}$</span></li>
<li>$\left(\pu{2E1}\right)^3$ <span class="arr">→</span> <span class="fragment corr">$10^4$</span></li>
<li>$\pu{5,0E-4}/1000$ <span class="arr">→</span> <span class="fragment corr">$10^{-6}$</span></li>
<li>$\frac{9800}{\pu{1060000}}$ <span class="arr">→</span> <span class="fragment corr">$10^{-2}$</span></li>
</ul>


{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="cs" hidden></i>
<span class="num">07</span>
<h2>Chiffres significatifs</h2>
<p>Dire la précision d'une mesure</p>
</div>

---

Une longueur mesurée avec une règle<br>graduée en millimètres s'écrit $12{,}3\ \text{cm}$,<br>et non $12{,}3000\ \text{cm}$.

<p class="fragment fade-up">Les chiffres d'une valeur renseignent sur sa <span class="imp">précision</span> :<br>on n'écrit que ceux qui ont un sens,<br>les <span class="imp">chiffres significatifs</span>.</p>

---

<div class="glass">
<p>Écrire $\pu{3,50 kg}$ plutôt que $\pu{3,5 kg}$ n'est pas un détail :</p>
<p class="fragment fade-up">le zéro final affirme que la masse est connue<br><span class="imp">au centième de kilogramme près</span>.</p>
<p class="fragment fade-up">Le nombre de chiffres significatifs <span class="imp">raconte la précision</span> de la mesure.</p>
</div>

---

Pour compter les chiffres significatifs :

<ul>
<li class="fragment fade-up">tous les chiffres <span class="imp">non nuls</span> comptent ;</li>
<li class="fragment fade-up">les zéros placés <span class="imp">entre</span> ou <span class="imp">après</span><br>des chiffres non nuls comptent ;</li>
<li class="fragment fade-up">les zéros placés <b style="color:#FF644E">au début</b> ne comptent pas<br>(ils servent seulement à placer la virgule).</li>
</ul>

---

<ul>
<li>$4{,}52$ <span class="arr">→</span> <span class="fragment corr">3 chiffres significatifs</span></li>
<li>$1{,}050$ <span class="arr">→</span> <span class="fragment corr">4 chiffres significatifs</span></li>
<li>$0{,}0045$ <span class="arr">→</span> <span class="fragment corr">2 chiffres significatifs</span></li>
<li>$3{,}0\times10^{8}$ <span class="arr">→</span> <span class="fragment corr">2 chiffres significatifs</span></li>
</ul>

<p class="fragment fade-up"><u>Rq</u> : en notation scientifique $a\times10^{n}$,<br>il suffit de compter les chiffres de $a$ (la puissance de 10 ne compte pas).</p>

---

Combien de chiffres significatifs<br>compte $1\\,500\ \text{m}$ ?

<p class="fragment fade-up">Impossible à dire : 2, 3 ou 4 !</p>

<p class="fragment fade-up">La notation scientifique lève l'ambiguïté :</p>

<ul>
<li class="fragment fade-up">$1{,}5\times10^{3}\ \text{m}$ : 2 chiffres significatifs</li>
<li class="fragment fade-up">$1{,}50\times10^{3}\ \text{m}$ : 3 chiffres significatifs</li>
<li class="fragment fade-up">$1{,}500\times10^{3}\ \text{m}$ : 4 chiffres significatifs</li>
</ul>

---

{{< qcm
    q=`Combien de chiffres significatifs compte $0{,}0320$&nbsp;?`
    a1=`2`
    a2=`3`
    a3=`4`
    a4=`5`
    bonne="2"
    expl=`Les zéros du début ne comptent pas, mais le zéro final, lui, compte&nbsp;: $3{,}20\times10^{-2}$.` >}}

---

Pour <span class="imp">arrondir</span>, on regarde le chiffre suivant :<br>s'il vaut 5 ou plus, on arrondit au-dessus.

<p class="fragment fade-up">Arrondir à 2 chiffres significatifs :</p>

<ul>
<li class="fragment fade-up">$9{,}81$ <span class="arr">→</span> <span class="fragment corr">$9{,}8$</span></li>
<li class="fragment fade-up">$0{,}0347$ <span class="arr">→</span> <span class="fragment corr">$0{,}035$</span></li>
<li class="fragment fade-up">$6\,371$ <span class="arr">→</span> <span class="fragment corr">$6{,}4\times10^{3}$</span></li>
<li class="fragment fade-up">$2{,}96$ <span class="arr">→</span> <span class="fragment corr">$3{,}0$</span> <span class="fragment corr">(on garde le zéro !)</span></li>
</ul>

---

<div class="regle">
<span class="rh">⚖ Calcul ne contenant que des multiplications et des divisions</span>
<span class="rb">On garde dans le résultat <br><b>autant de chiffres significatifs</b> que <br> la mesure qui en contient <b>le moins</b>.</span>
<span class="rw fragment fade-up">Un calcul ne peut pas être plus précis que sa donnée la moins précise : c'est le maillon faible qui décide.</span>
</div>

<p class="fragment fade-up petit">Rq : on garde tous les chiffres pendant le calcul<br>et on n'arrondit qu'à la fin.</p>

---

<h3>Exemple guidé : une énergie cinétique</h3>

<ol class="etapes">
<li><span class="et-t">Repérer la précision des données</span><p>$m = \pu{3,50 kg}$ <span class="badge">3</span> &nbsp;&nbsp; $v = \pu{2,3 m*s-1}$ <span class="badge min">2</span></p><p>C'est la vitesse, la moins précise, qui impose <b>2 chiffres significatifs</b> au résultat.</p></li>
<li class="fragment fade-up"><span class="et-t">Calculer sans arrondir en cours de route</span><p>La calculatrice affiche <span class="brouillon">9,2575</span>&nbsp;: cette valeur reste au brouillon.</p><p class="petit">Si le calcul a plusieurs étapes, on réutilise les résultats non arrondis (touche <b>Ans</b> ou mémoire).</p></li>
<li class="fragment fade-up"><span class="et-t">Écrire le résultat arrondi sur la copie</span><p><span class="resultat">$E_c = \tfrac 12\, m\times v^2 = \tfrac 12 \times 3{,}50\times 2{,}3^2 = \pu{9,3 J}$</span></p></li>
</ol>

---

<div class="carte piege">
<span class="ct">⚠ Attention au facteur ½</span>
<p>Le $2$ de $\frac 12$ n'est pas une mesure mais un <b>coefficient mathématique exact</b>.</p>
<p class="fragment fade-up">Son nombre de chiffres significatifs est infini (c'est $2{,}00000\ldots$) :<br>il ne limite jamais la précision du résultat.</p>
</div>

---

Un son parcourt $d = 1{,}7\ \text{km}$ en $\Delta t = 5{,}00\ \text{s}$.

<p class="fragment fade-up">$v = \dfrac{d}{\Delta t} = \dfrac{1\,700\ \text{m}}{5{,}00\ \text{s}}$ : la calculatrice affiche $340$.</p>

<p class="fragment fade-up">$d$ n'a que <span class="imp">2 chiffres significatifs</span>, donc :<br><span class="imp">$v = 3{,}4\times10^{2}\ \text{m/s}$</span></p>

---

{{< qcm
    q=`Éthanol&nbsp;: $\rho = 0{,}79\ \text{g/mL}$ et $V = 12{,}0\ \text{mL}$. La calculatrice affiche $m = \rho\times V = 9{,}48$.<br><span class="ask">Quel résultat écrire&nbsp;?</span>`
    a1=`$9{,}48\ \text{g}$`
    a2=`$9{,}5\ \text{g}$`
    a3=`$9\ \text{g}$`
    a4=`$10\ \text{g}$`
    bonne="2"
    expl=`$\rho$ n'a que 2 chiffres significatifs&nbsp;: le résultat aussi.` >}}

---

<span class="ask">Calculer en donnant le résultat avec<br>le bon nombre de chiffres significatifs :</span>

<ul style="font-size:0.85em">
<li>Poids : $m = 2{,}5\ \text{kg}$ et $g = 9{,}81\ \text{N/kg}$<br><span class="fragment corr">$P = m\times g = 24{,}525\ldots$</span> <span class="fragment corr">$\Rightarrow P = 25\ \text{N}$</span></li>
<li>Vitesse : $d = 100{,}0\ \text{m}$ et $\Delta t = 9{,}58\ \text{s}$<br><span class="fragment corr">$v = \dfrac{d}{\Delta t} = 10{,}438\ldots$</span> <span class="fragment corr">$\Rightarrow v = 10{,}4\ \text{m/s}$</span></li>
</ul>

---

<ul style="font-size:0.85em">
<li>Concentration : $m = 4{,}5\ \text{g}$ et $V = 0{,}500\ \text{L}$<br><span class="fragment corr">$C_m = \dfrac{m}{V} = 9$</span> <span class="fragment corr">$\Rightarrow C_m = 9{,}0\ \text{g/L}$</span> <span class="fragment">(on garde le zéro !)</span></li>
<li>Quantité de matière : $N = 3{,}2\times10^{25}$<br>et $N_A = 6{,}02\times10^{23}\ \text{mol}^{-1}$<br><span class="fragment corr">$n = \dfrac{N}{N_A} = 53{,}156\ldots$</span> <span class="fragment corr">$\Rightarrow n = 53\ \text{mol}$</span></li>
</ul>

---

Vidéo riche (un peu trop) sur les cs : 

---

{{< youtube-slide id="KOvHirpl7vk" ratio="16x9" >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="redac" hidden></i>
<span class="num">08</span>
<h2>Rédiger un résultat</h2>
<p>Ce que l'on écrit vraiment sur la copie</p>
</div>

---

<h3>Les 5 réflexes</h3>

<ol class="etapes compact">
<li class="fragment fade-up"><span class="et-t">La formule littérale d'abord</span><p>On écrit la relation avec les symboles : $\rho = \dfrac{m}{V}$.</p></li>
<li class="fragment fade-up"><span class="et-t">Des unités qui «&nbsp;se parlent&nbsp;»</span><p>On convertit les données <b>avant</b> de calculer (SI, ou unités cohérentes).</p></li>
<li class="fragment fade-up"><span class="et-t">L'application numérique, unités comprises</span><p>On remplace chaque symbole par sa valeur <b>et</b> son unité.</p></li>
<li class="fragment fade-up"><span class="et-t">Le calcul, sans arrondir en route</span><p>La calculatrice garde tout en mémoire ; l'arrondi ne vient qu'à la fin.</p></li>
<li class="fragment fade-up"><span class="et-t">Le résultat arrondi, avec son unité</span><p>Bon nombre de chiffres significatifs, notation scientifique si besoin, unité écrite correctement.</p></li>
</ol>

---

Un bloc d'aluminium de masse $m=\pu{54,0 g}$ occupe un volume $V=\pu{20,0 cm3}$.

<span class="fragment fade-up">Calculer sa masse volumique $\rho$ en $\pu{kg*m-3}$.</span>

---

<h3>Une rédaction complète</h3>

<div class="copie fragment fade-up"><p><span class="tag">1</span> $\rho = \dfrac{m}{V}$</p></div>
<div class="copie fragment fade-up"><p><span class="tag">2</span> $m = \pu{54,0 g} = 54{,}0\times10^{-3}\ \mathrm{kg}$ &nbsp; et &nbsp; $V = \pu{20,0 cm3} = 20{,}0\times10^{-6}\ \mathrm{m^3}$</p></div>
<div class="copie fragment fade-up"><p><span class="tag">3</span> $\rho = \dfrac{54{,}0\times10^{-3}\ \mathrm{kg}}{20{,}0\times10^{-6}\ \mathrm{m^3}}$</p></div>
<div class="copie fragment fade-up"><p><span class="tag">4</span> <span class="brouillon">2700</span> <span class="petit">au brouillon : on ne l'écrit pas tel quel</span></p></div>
<div class="copie fragment fade-up"><p><span class="tag">5</span> <span class="resultat">$\rho = 2{,}70\times10^{3}\ \pu{kg*m-3}$</span> <span class="petit">3 chiffres significatifs</span></p></div>

---

<div class="carte methode">
<span class="ct">Pourquoi $2{,}70\times10^{3}$ et pas $2700$ ?</span>
<p>Les données ont <b>3 chiffres significatifs</b> : le résultat aussi.</p>
<p class="fragment fade-up">Mais «&nbsp;2 700&nbsp;» peut avoir 2, 3 ou 4 chiffres significatifs : <b>c'est ambigu</b>.</p>
<p class="fragment fade-up">La notation scientifique lève le doute : $2{,}70\times10^{3}$ a bien 3 chiffres significatifs.</p>
</div>

---

<div class="carte ok" style="width:90%">
<span class="ct">Le test du bon sens</span>
<p>Le résultat est-il plausible ? On le compare à un ordre de grandeur que l'on connaît :</p>
<p class="vals fragment fade-up"><span>eau&nbsp;: 1,0&nbsp;×&nbsp;10<sup>3</sup>&nbsp;kg·m<sup>−3</sup></span> <span>aluminium&nbsp;: 2,7&nbsp;×&nbsp;10<sup>3</sup></span> <span>fer&nbsp;: 7,9&nbsp;×&nbsp;10<sup>3</sup></span></p>
<p class="vals fragment fade-up"><span>marche&nbsp;: 1,4&nbsp;m·s<sup>−1</sup> (5&nbsp;km/h)</span> <span>son&nbsp;: 3,4&nbsp;×&nbsp;10<sup>2</sup>&nbsp;m·s<sup>−1</sup></span> <span>lumière&nbsp;: 3,0&nbsp;×&nbsp;10<sup>8</sup>&nbsp;m·s<sup>−1</sup></span></p>
<p class="fragment fade-up petit">Un résultat de <span class="nw">2,7&nbsp;×&nbsp;10<sup>−3</sup></span> ou de <span class="nw">2,7&nbsp;×&nbsp;10<sup>6</sup>&nbsp;kg·m<sup>−3</sup></span> doit alerter&nbsp;: une conversion a dérapé.</p>
</div>

---

<h3>Écrire les unités : symboles (1/2)</h3>

<table class="fix">
<thead><tr><th style="text-align:center;">Faux</th><th style="text-align:center;">Juste</th><th >Pourquoi</th></tr></thead>
<tbody>
<tr class="fragment fade-up"><td>5 kms</td><td>5 km</td><td>un symbole n'a jamais de «&nbsp;s&nbsp;» de pluriel</td></tr>
<tr class="fragment fade-up"><td>2,5 Kg</td><td>2,5 kg</td><td>le préfixe kilo s'écrit k minuscule</td></tr>
<tr class="fragment fade-up"><td>30 ml</td><td>30 mL</td><td>le litre s'écrit L (majuscule)</td></tr>
<tr class="fragment fade-up"><td>50 hz</td><td>50 Hz</td><td>nom propre (Hertz, Newton, Joule…)&nbsp;: majuscule</td></tr>
<tr class="fragment fade-up"><td>3 sec</td><td>3 s</td><td>le symbole de la seconde est s</td></tr>
</tbody>
</table>

---

<h3>Écrire les unités : nombres (2/2)</h3>

<table class="fix">
<thead><tr><th style="text-align:center;">Faux</th><th style="text-align:center;">Juste</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr class="fragment fade-up"><td>12cm</td><td>12 cm</td><td>une espace entre le nombre et l'unité</td></tr>
<tr class="fragment fade-up"><td>2.7 kg</td><td>2,7 kg</td><td>en français, la virgule est décimale</td></tr>
<tr class="fragment fade-up"><td>3 m.s-1</td><td>3 m·s<sup>−1</sup></td><td>exposant en haut, point médian entre unités</td></tr>
<tr class="fragment fade-up"><td>2,7E3 kg</td><td>2,7 × 10<sup>3</sup> kg</td><td>le «&nbsp;E&nbsp;» est un affichage de calculatrice</td></tr>
<tr class="fragment fade-up"><td>20°c</td><td>20 °C</td><td>espace, degré, C majuscule</td></tr>
</tbody>
</table>

---

{{< qcm
    q=`La calculatrice affiche <b>3.5E-4</b> pour une longueur en mètres. Sur la copie, on écrit&nbsp;:`
    a1=`$3{,}5\mathrm{E}{-4}\ \mathrm m$`
    a2=`$3{,}5\times10^{-4}\ \mathrm m$`
    a3=`$3{,}5\times10^{4}\ \mathrm m$`
    a4=`$3{,}5\times4\ \mathrm m$`
    bonne="2"
    expl=`«&nbsp;E-4&nbsp;» veut dire «&nbsp;× 10<sup>−4</sup>&nbsp;». Le «&nbsp;E&nbsp;» ne s'écrit pas sur la copie.` >}}

---

{{< qcm
    q=`Quelle écriture est <b>correcte</b>&nbsp;?`
    a1=`12.5 Kg`
    a2=`12,5 kg`
    a3=`12,5kgs`
    a4=`12,5 Kgs`
    bonne="2"
    expl=`Virgule décimale, espace entre nombre et unité, k minuscule, pas de «&nbsp;s&nbsp;» de pluriel.` >}}

---

{{< qcm
    q=`Rédaction&nbsp;: $\rho = \dfrac{54{,}0}{20{,}0} = 2{,}7 = 2\,700\ \mathrm{kg\cdot m^{-3}}$<br>Quelle est l'erreur principale&nbsp;?`
    a1=`la formule est fausse`
    a2=`les «&nbsp;=&nbsp;» sont faux (unités oubliées)`
    a3=`il manque une virgule`
    a4=`il n'y a aucune erreur`
    bonne="2"
    expl=`Un «&nbsp;=&nbsp;» doit relier deux écritures <b>égales</b> : $2{,}7\neq2\,700$, et les unités ont disparu en route.` >}}

{{% /section %}}

---

{{% section %}}

<div class="part-title">
<i data-part="bilan" hidden></i>
<span class="num">★</span>
<h2>Bilan : à vous de jouer&nbsp;!</h2>
<p>9 questions pour vérifier ce que l'on a retenu</p>
</div>

---

{{< qcm
    q=`$\pu{5,8E-7 m}$ s'écrit aussi&nbsp;:`
    a1=`$58\ \text{nm}$`
    a2=`$580\ \text{nm}$`
    a3=`$5{,}8\ \mu\text{m}$`
    a4=`$5\,800\ \text{nm}$`
    bonne="2"
    expl=`$5{,}8\times10^{-7}\ \text{m}=580\times10^{-9}\ \text{m}=580\ \text{nm}$.` >}}

---

{{< qcm
    q=`Combien y a-t-il de $\mathrm{cm}^2$ dans $1\ \mathrm{m}^2$&nbsp;?`
    a1=`$10^{2}$`
    a2=`$10^{4}$`
    a3=`$10^{3}$`
    a4=`$10^{6}$`
    bonne="2"
    expl=`$1\ \mathrm{m}^2=\left(10^{2}\ \mathrm{cm}\right)^2=10^{4}\ \mathrm{cm}^2$.` >}}

---

{{< qcm
    q=`$48{,}5\times10^{3}\ \text{J}$ s'écrit en notation scientifique&nbsp;:`
    a1=`$4{,}85\times10^{3}\ \text{J}$`
    a2=`$4{,}85\times10^{4}\ \text{J}$`
    a3=`$485\times10^{2}\ \text{J}$`
    a4=`$4{,}85\times10^{5}\ \text{J}$`
    bonne="2"
    expl=`$48{,}5=4{,}85\times10^{1}$, donc $48{,}5\times10^{3}=4{,}85\times10^{4}$.` >}}

---

{{< qcm
    q=`Quel est l'ordre de grandeur du rayon de la Terre, $6\,371\ \text{km}$, exprimé en mètres&nbsp;?`
    a1=`$10^{6}\ \text{m}$`
    a2=`$10^{7}\ \text{m}$`
    a3=`$10^{4}\ \text{m}$`
    a4=`$10^{3}\ \text{m}$`
    bonne="2"
    expl=`$6\,371\ \text{km}=6{,}371\times10^{6}\ \text{m}$ et $6{,}371\geqslant5$ : l'ordre de grandeur est $10^{7}\ \text{m}$.` >}}

---

{{< qcm
    q=`Combien de chiffres significatifs compte $3{,}50$&nbsp;?`
    a1=`1`
    a2=`2`
    a3=`3`
    bonne="3"
    expl=`Le zéro final compte&nbsp;: la valeur est connue au centième près.` >}}

---

{{< qcm
    q=`$E_c=\tfrac12\,m\,v^2$ avec $m=3{,}50\ \text{kg}$ et $v=2{,}3\ \text{m/s}$ (la calculatrice affiche $9{,}2575$). <span class="ask">Quel résultat écrire&nbsp;?</span>`
    a1=`$9{,}2575\ \text{J}$`
    a2=`$9{,}3\ \text{J}$`
    a3=`$9\ \text{J}$`
    a4=`$9{,}26\ \text{J}$`
    bonne="2"
    expl=`La donnée la moins précise est $v$ (2 chiffres significatifs)&nbsp;: $E_c=9{,}3\ \text{J}$.` >}}

---

{{< qcm
    q=`$\mathrm{J\cdot kg^{-1}\cdot K^{-1}}$ se lit&nbsp;:`
    a1=`joule fois kilogramme fois kelvin`
    a2=`joule par kilogramme et par kelvin`
    a3=`joule par kilogramme fois kelvin`
    a4=`kilogramme par joule et par kelvin`
    bonne="2"
    expl=`Chaque unité à exposant négatif est «&nbsp;sous la barre&nbsp;» : $\dfrac{\mathrm J}{\mathrm{kg}\cdot\mathrm K}$.` >}}

---

{{< qcm
    q=`$54\ \mathrm{km/h}$ valent, en $\mathrm{m\cdot s^{-1}}$&nbsp;:`
    a1=`$15$`
    a2=`$194$`
    a3=`$54\,000$`
    a4=`$0{,}015$`
    bonne="1"
    expl=`$\dfrac{54\times10^{3}\ \mathrm m}{3600\ \mathrm s}=15\ \mathrm{m\cdot s^{-1}}$ (ou $54\div3{,}6$).` >}}

---

{{< qcm
    q=`Laquelle de ces écritures est <b>correcte</b> pour une masse volumique&nbsp;?`
    a1=`$2.7E3\ \mathrm{kg/m3}$`
    a2=`$2{,}7\times10^{3}\,\mathrm{kg\cdot m^{-3}}$`
    a3=`$2{,}7\times10^{3}\,\mathrm{kgs\cdot m^{-3}}$`
    a4=`$2{,}7\times10^{3}$`
    bonne="2"
    expl=`Virgule décimale, notation scientifique, unité sans «&nbsp;s&nbsp;», exposant en haut et unité toujours présente.` >}}

{{% /section %}}

---

<i data-part="bilan" hidden></i>

[Retour à la page entraînement](https://coursphychi.github.io/2nde/entrainement/)

{{< maths-scripts >}}
