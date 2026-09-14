+++
title = "Thermodynamique"
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
font-weight:bold;
color:#FF968D;
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

th, td {
text-align:center !important;
vertical-align:middle !important;
}

.fragment.highlight-red.visible {
    color: #FF968D !important;
  }

</style>


{{%section%}}

# Thermodynamique

---

La thermodynamique est une branche récente de la physique (développée au 19<sup>e</sup> siècle) qui s'intéresse aux conversions d'énergie en lien avec la température.

{{%/section%}}

----

{{%section%}}

## Gaz parfaits 

---

**[Animation du Colorado](https://phet.colorado.edu/sims/html/gases-intro/latest/gases-intro_all.html?locale=fr)**

---

L'état gazeux est <span class="imp fragment">dispersé</span> et <span class="imp fragment">désordonné</span>.

---

À l'échelle microscopique, les entités qui le composent sont éloignées les unes des autres et ont<br>un mouvement aléatoire incessant.

<p class="fragment fade-up">Pour le décrire parfaitement, il faudrait connaître<br>la masse, la position et la vitesse de chacune<br>des milliards de milliards d'entités...</p>

---

À l'échelle macroscopique, on peut se contenter d'utiliser seulement trois grandeurs intensives<br>(ne dépendant pas du volume) qui moyennent<br>de manière complémentaire le chaos microscopique :

<br>

<ul>
<li class="fragment fade-up">la <span class="imp">masse volumique $\rho$</span><br>qui dit combien les entités sont serrées en moyenne</li>
</u>

---

<ul>
<li>la <span class="imp">pression $P$</span> qui renseigne sur la force moyenne par unité de surface due aux chocs incessants des entités</li>

<br>

<li class="fragment fade-up">la <span class="imp">température $T$</span> qui correspond à l'énergie cinétique moyenne des entités (traduisant<br>leur <span class="imp">agitation</span>)</li>
</ul>

---

Ces trois grandeurs sont liées entre elles<br>dans la <span class="imp">loi des gaz parfaits</span> :

<div class="fragment fade-up">
$$P=\frac R M \times \rho \times T$$
</div>

<p class="fragment fade-up">
Mais généralement, on lui préfère la forme faisant intervenir la quantité de matière et le volume<br>à la place de la masse volumique.
</p>

---

<span class="imp">Loi des gaz parfaits</span> :

<br>

<div class="fragment fade-up" style="display: flex; border: solid 5px #FF968D; border-radius: 20px; width:fit-content;margin-right:auto;margin-left:auto;">
<div style="padding:0px 30px 0px 30px; width:fit-content;">
$$PV = nRT$$
</div>
</div>

<br>

<ul>
<li class="fragment">$P$ : pression (en <span class="fragment">$\color{#FFF056}\pu{Pa}$</span>)</li>
<li class="fragment">$V$ : volume  (en <span class="fragment">$\color{#FFF056}\pu{m3}$</span>)</li>
<li class="fragment">$n$ : quantité de matière  (en <span class="fragment">$\color{#FFF056}\pu{mol}$</span>)</li>
<li class="fragment">$T$ : température  (en <span class="fragment">$\color{#FFF056}\pu{K}$</span>)</li>
<li class="fragment">$R$ : constante des gaz parfaits<br>
$R= 8,314$ <span class="fragment">$\color{#FFF056}\pu{Pa*m3*K-1*mol-1}$</span></li>
</ul>

---

<u>Rq</u> :

La pression est aussi une énergie par unité de volume.

<p class="fragment fade-up">$\Rightarrow \pu{Pa} = $ <b class="fragment" style="color:#FFF056">$\pu{J*m-3}$</b></p>

<p class="fragment fade-up">Et donc $R$ s'exprime en <b class="fragment" style="color:#FFF056">$\pu{J*K-1*mol-1}$</b></p>


---

### Limites du modèle

<p class="fragment fade-up">Dans le modèle du <span class="imp">gaz parfait</span>, </p>

<ul>

<li class="fragment fade-up">on néglige la taille des entités<br>devant la distance qui les sépare</li>

<li class="fragment fade-up">et on néglige leurs interactions.</li>

</ul>

<p class="fragment fade-up">Quand est-ce que ces approximations<br>deviennent-elles problématiques ?</p>


---

<ul>
<li>À haute pression, les entités deviennent si serrées que l'effet de leur volume devient non négligeable.</li>
<br>
<li class="fragment fade-up">À basse température, l'énergie cinétique des entités devient du même ordre de grandeurs que leur énergie de liaison.</li>

---

Moralité, le modèle du gaz parfait marche pour une <span class="imp">pression pas trop grande</span> (<span class="imp">$P<\pu{10 bar}=\pu{1 MPa}$</span>).

<p class="fragment fade-up">Et pour une <span class="imp">température très supérieure à la température d'ébullition</span> du gaz (<span class="imp">$T\gg T_{vap}$</span>).</p>

---

Qu'en déduire pour l'air dans des conditions<br>ordinaires de température et de pression ?

<p class="fragment fade-up">Comme l'air se liquéfie vers $-190$°C à pression atmosphérique ($P_{atm}\approx \pu{1 bar}$), l'air peut être considéré comme une GP aux conditions<br>ordinaires de température et de pression.</p>

{{%/section%}}

---

{{%section%}}

## Énergie interne

---

L'<span class="imp">énergie interne $U$</span> d'un système résulte<br>des <b style="color:#FFF056">énergie cinétique</b> (liée à l'<b style="color:#FFF056">agitation</b>)<br>et <b style="color:#56C1FF">potentielle</b> (liée aux interactions)<br>de l'ensemble des entités qui le composent.

---

La <span class="imp">variation d'énergie interne</span><br>d'un <b style="color:#16E7CF">système incompressible</b> (solide ou liquide)<br>est proportionnelle à sa variation de température. 

<p class="fragment fade-up">Le coefficient de proprortionnalité est<br>la <span class="imp">capacité thermique $C$</span> du système.</p>

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\Delta U = C\times \Delta T$$
</div>

<br>

<ul>
<li class="fragment fade-up">$\Delta U$ en <b class="fragment" style="color:#FFF056">J</b></li>
<li class="fragment fade-up">$\Delta T$ en <b class="fragment" style="color:#FFF056">K</b></li>
<li class="fragment fade-up">$C$ en <b class="fragment" style="color:#FFF056">$\pu{J*K-1}$</b></li>
</ul>

---

Naturellement, plus le système contient d'entités,<br>plus son énergie interne sera grande. 

<p class="fragment fade-up">Pour caractériser un matériau<br>indépendamment de sa masse, on utilise <br>la <span class="imp">capacité thermique massique $c$</span>.</p>

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\Delta U = m\times c \times \Delta T$$
</div>

<br>

<ul>
<li class="fragment fade-up">$\Delta U$ en <b  style="color:#FFF056">J</b></li>
<li class="fragment fade-up">$\Delta T$ en <b style="color:#FFF056">K</b></li>
<li class="fragment fade-up">$m$ en <b class="fragment" style="color:#FFF056">kg</b></li>
<li class="fragment fade-up">$c$ en <b class="fragment" style="color:#FFF056">$\pu{J*K-1*kg-1}$</b></li>
</ul>

---


Plus la capacité thermique d'un corps est grande,<br>plus il est <span class="fragment strike" data-fragment-index="1" >facile</span> / <span class="fragment highlight-red" data-fragment-index="1" >difficile</span> de modifier sa température.

---

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Matériau</th>
        <th>Capacité thermique massique (J·kg⁻¹·K⁻¹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Eau liquide</strong></td>
        <td>4 185</td>
      </tr>
      <tr>
        <td><strong>Glace</strong> (à 0°C)</td>
        <td>2 100</td>
      </tr>
      <tr>
        <td><strong>Huile</strong> (végétale)</td>
        <td>2 000</td>
      </tr>
      <tr>
        <td><strong>Aluminium</strong></td>
        <td>897</td>
      </tr>
      <tr>
        <td><strong>Brique</strong></td>
        <td>840</td>
      </tr>
      <tr>
        <td><strong>Acier</strong></td>
        <td>450 – 500</td>
      </tr>
    </tbody>
  </table>
</div>

{{%/section%}}

---

{{%section%}}

## Premier principe de la thermodynamique

---

L'<span class="imp">énergie totale</span> d'un système est la somme de son énergie mécanique et de son énergie interne :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$E_{tot} = E_m + U$$
</div>

---

L'énergie d'un système fermé (qui n'échange pas<br>de matière avec l'extérieur) peut varier par<br>échange d'énergie avec l'extérieur. 

---

Cet échange peut prendre deux formes :

<ul>
<li class="fragment fade-up"><b style="color:#FFF056">travail $W$</b> de forces non conservatives<br>(comme le travail des forces de pression)</li>
<li class="fragment fade-up"><span class="imp">transfert thermique $Q$</span></li>
</ul>

---

<span class="imp">Pemier principe de la thermodynamique</span>

<p class="fragment fade-up">Pour un système isolé :</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\Delta E_{tot} = W + Q$$
</div>

---

Et si le système est immobile :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\Delta U = W + Q$$
</div>

<br>

<p class="fragment fade-up">On a alors en effet $E_m=\text{cte}$, et donc :<p>
<p class="fragment fade-up">$\Delta E_{tot} = \cancel{\Delta E_m}+ \Delta U$</p>

---

Par convention, les transferts d'énergie sont comptés <span class="imp">positivement</span> lorsqu'ils <span class="imp">entrent</span> dans le système (dirigés de l'extérieur vers le système)<br>et <b style="color:#56C1FF">négativement</b> quand ils en sortent.

---

Prenons l'exemple du système<br>{résistance chauffante d'une bouilloire électrique} :

<ul>
<li class="fragment fade-up">Le travail électrique $W$<br>est compté <span class="imp fragment">positivement</span></li>
<li class="fragment fade-up">Le transfert thermique $Q$ avec l'eau<br>est compté <b class="fragment"style="color:#56C1FF">négativement</b></li>
</ul>

---

Si on considère le système<br>{eau de la bouilloire},<br>il n'y a plus de travail,<br>mais deux transferts thermiques :

<ul>
<li class="fragment fade-up">Le transfert thermique $Q_r$ avec<br>la résistance
compté <span class="imp fragment">positivement</b></li>
<li class="fragment fade-up">Le transfert thermique $Q_e$ avec<br>l'extérieur
compté <b class="fragment"style="color:#56C1FF">négativement</b></li>
</ul>

---

<u>Rq</u> :

<p class="fragment fade-up">Rien n'empêche que tous les transferts<br>soient positifs ou tous négatifs.</p>

<p class="fragment fade-up">Exemple ?</p>


{{%/section%}}

---

{{%section%}}

## Modes de transfert thermique

---

Il y a trois modes de transfert thermique :

<ul>
<li class="fragment fade-up">la <b style="color:#FF968D;">conduction</b></li>
<li class="fragment fade-up">la <b style="color:#56C1FF;">convection</b></li>
<li class="fragment fade-up">le <b style="color:#FFD932;">rayonnement</b></li>
</ul>


---

<h3 style="color:#FF968D";>La conduction<h3>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/LxJoLeeqk88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe width=750 height=600 src="https://www.edumedia.com/media/frame/fr/99/?auth=97c65277ed86063586415897215a6a81/27824" frameborder=0 style="border-radius:10px;"></iframe>

---

La conduction est due à la <span class="imp">diffusion de<br>l'agitation thermique dans la matière</span>.

---

Un transfert thermique par <span class="imp">conduction</span><br>a lieu <span class="imp">de proche en proche</span>, sans déplacement macroscopique de matière.</p>

<p class="fragment fade-up">L'agitation microscopique des entités<br>est communiquée de l'une à l'autre.</p>

---

Aérogel de silice, polystyrène expansé, laine de roche, laine de verre, liège expansé, ouate de cellulose... 

<p class="fragment fade-up">Qu'ont en commun les meilleurs isolants thermiques ?</p>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/AeJ9q45PfD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<h3 style="color:#56C1FF";>La convection<h3>

---

<iframe width=750 height=600 src="https://www.edumedia.com/media/frame/fr/428/?auth=88e553efb2b0037fe7e0d153f50db345/27824" frameborder=0 style="border-radius:10px;"></iframe>

---

Un transfert thermique par <b style="color:#56C1FF;">convection</b><br> ne peut avoir lieu que dans un <b style="color:#56C1FF;">fluide</b>.

<p class="fragment fade-up">Il correspond à un <b style="color:#56C1FF;">mouvement macroscopique de matière</b> : le fluide est animé d'un mouvement interne.</p>

<p class="fragment fade-up">Comment expliquer ce mouvement d'ensemble ?</p>

{{%note%}}
Le fluide chauffé se dilate et devient donc moins dense. Il s'élève sous l'action de la poussée d'Archimède et il est alors remplacé par de l'air plus froid.
{{%/note%}}

---

<video width="372" height="660" autoplay="true" loop="true"  preload="auto" muted style="border-radius:10px;"> 
  <source src="http://coursphychi.github.io/convection.mp4" type="video/mp4" >
</video>


---

<div style="position:relative;margin-left:auto;margin-right:auto;width:900px;max-width:100%;">
<img src="http://coursphychi.github.io/heatsinks.png" style="box-shadow:none;background:none;">
</div>

Qu'est-ce que c'est ? <br>Discuter le matériau, la forme et l'orientation.

{{%note%}}
Dissipateur thermique (ou contrintuitivement, radiateur)
{{%/note%}}

---

<u>Petite énigme</u>

<p class="fragment fade-up">Pourquoi un glaçon fond-il moins vite dans<br>de l'eau salée que dans de l'eau douce ?</p>

---

<h3 style="color:#FFD932";>Le rayonnement<h3>

---

<iframe width=800 height=509 src="https://www.edumedia.com/media/frame/fr/944/?auth=8b4fea5814c4af50a22d86df6fd9378e/27824" frameborder=0 style="border-radius:10px;"></iframe>

---

Le transfert thermique par <b style="color:#FFD932;">rayonnement</b> est<br>le seul à pouvoir se faire dans le <b style="color:#FFD932;">vide</b>.

<p class="fragment fade-up">Il correspond à l'<b style="color:#FFD932;">émission ou l'absorption<br>d'ondes électromagnétiques</b>.</p>


---

Comment marche une couverture de survie ?

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;border-radius:10px;">
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/RescueFoil.jpg" style="box-shadow:none;background:none;border-radius:10px;">
</div>

{{%note%}}
Space blanket en anglais. Développée par la NASA en 1964.
{{%/note%}}


---

Comment expliquer ce qu'on voit dans cette vidéo ?


<iframe width="560" height="420" src="https://www.youtube.com/embed/Pp9Yax8UNoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%note%}}
Dans ce matériau très isolant, le flux thermique dû à la conduction thermique du centre vers les bords (en particulier les coins) n'arrive pas à compenser le flux thermique radiatif sortant. Résultat : les coins se refroidissent rapidement ($\approx\pu{35 ^\circ C}$) malgré que le centre soit encore à plus de ($\pu{1200 ^\circ C}$)&nbsp;!
{{%/note%}}


{{%/section%}}

---

{{%section%}}

## Flux thermique

---

Le <span class="imp">flux thermique $\Phi$</span> est la puissance qui traverse<br>une surface au cours d'un transfert thermique.

<p class="fragment fade-up">C'est donc l'énergie thermique $Q$ par unité de temps.</p>

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$\Phi = \frac{Q}{\Delta t}$$
</div>

<br>

<ul>
<li class="fragment fade-up">$Q$ en <b class="fragment" style="color:#FFF056">J</b></li>
<li class="fragment fade-up">$\Delta t$ en <b class="fragment" style="color:#FFF056">s</b></li>
<li class="fragment fade-up">$\Phi$ en <b class="fragment" style="color:#FFF056">W</b></li>
</ul>

---

Comme pour le transfert thermique $Q$ et le travail $W$, le flux thermique $\Phi$ est compté positivement s'il entre dans le système et négativement s'il en sort.


{{%/section%}}

---

{{%section%}}

## Résistance thermique

---

Le flux thermique par conduction et/ou convection<br>à travers un milieu séparé par deux surfaces<br>aux températures $T_f$ et $T_c >T_f$ s'effectue<br><span class="imp">de la surface chaude</span> <b style="color:#56C1FF;">vers la surface froide</b>. 

---

Pour traduire l'aptitude du milieu à résister<br>au passage du flux thermique, on définit<br>la <span class="imp">résistance thermique $R_{th}$</span> comme :


<div  class="fragment fade-up"style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$R_{th} = \frac{\Delta T}{\Phi}=\frac{T_c - T_f}{\Phi}$$
</div>

<br>

<ul>
<li class="fragment fade-up">$\Delta T$ en <b class="fragment" style="color:#FFF056">$\pu{K}$</b></li>
<li class="fragment fade-up">$\Phi$ en <b class="fragment" style="color:#FFF056">$\pu{W}$</b></li>
<li class="fragment fade-up">$R_{th}$ en <b class="fragment" style="color:#FFF056">$\pu{K*W-1}$</b></li>
</ul>

---

{{< slide  background-image="/fluxtspe.png" background-size="contain" background-transition="concave">}}

---

<u style="color: #16E7CF;">Analogie électrique</span></u> :

<ul>
<li class="fragment fade-up"><b style="color:#FFF056">$R_{th}$</b> $\longleftrightarrow$  <b class="fragment"style="color:#16E7CF">$R$</b></li>
<li class="fragment fade-up"><b style="color:#FFF056">$\Phi$</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$\longleftrightarrow$  <b class="fragment"style="color:#16E7CF">$I$</b></li>
<li class="fragment fade-up"><b style="color:#FFF056">$\Delta T$</b> $\longleftrightarrow$  <b class="fragment"style="color:#16E7CF">$U$</b></li>
</ul>

---

Pour une même différence de température,<br>plus la résistance thermique du milieu est grande<br>et plus le flux thermique est <span class="fragment strike" data-fragment-index="1" >grand</span> / <span class="fragment highlight-red" data-fragment-index="1" >faible</span>.</span>



---

Si les parois du matériau sont planes (mur par exemple), la résistance thermique de conduction peut s'exprimer en fonction de la surface $S$ des parois, de l'épaisseur $e$ entre les deux parois et de la conductivité thermique $\lambda$ caractérisant le matériau :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px;padding:0 50px 0 50px;border-radius:10px">
$$R_\text{th cond}=\frac{e}{\lambda S}$$
</div>

<p class="fragment fade-up">$\lambda$ s'exprime en <span class="fragment">$\pu{W*m-1*K-1}$.</span></p>

<p class="fragment fade-up"><u>Rq</u> : cette formule sera toujours donnée.</p>

---

Dans le cas d'un contact avec un fluide, le flux thermique est dit <span class="imp">conducto-convectif</span>.

<p class="fragment fade-up">On peut construire une résistance thermique $R_\text{th cv}$<br>à l'aide d'un coefficient de transfert thermique $h$ :</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px;padding:0 50px 0 50px;border-radius:10px">

$$R_\text{th cv}=\frac{1}{hS}$$

</div>

<p class="fragment fade-up">unité de $h$ : <span class="fragment">$\pu{W*m-2*K-1}$</span></p>

{{%note%}}
On va voir dans la suite qu'utiliser R_{th cv} revient à appliquer la loi phénoménologique de Newton.
{{%/note%}}

---

Des résistances en série s'additionnent.

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-">
<img src="/resserie.png" style="box-shadow:none;background:none;">
</div>


{{%/section%}}

---

{{%section%}}

## Évolution temporelle de la température d'un système

---

La <span class="imp">loi phénoménologique de Newton</span> (aussi appelée loi du refroidissement de Newton) <span class="imp">modélise le transfert thermique</span> entre un système et le milieu extérieur<br>par <span class="imp">convection et conduction</span>.

<p class="fragment fade-up">Elle énonce que le flux thermique entre un système et le milieu extérieur est proportionnel à la différence de température entre ce système et le milieu extérieur.</p>

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">

$$\Phi = h S \left(T_\mathrm{ext}-T\right)$$

</div>

<p class="fragment fade-up">$T$ est la température du système.</p>

<p class="fragment fade-up"><u>Rq</u> : cette formule (ou une ressemblante)<br>sera toujours fournie.</p>


<ul>
<li class="fragment fade-up">$S$ (surface de la paroi) en <b class="fragment" style="color:#FFF056">$\pu{m2}$</b></li>
<li class="fragment fade-up">$h$ (coefficient d'échange conducto-convectif)<br>en<b class="fragment" style="color:#FFF056">$\pu{W*m-2*K-1}$</b></li>
</ul>


---

Si la température d'un système peut être considérée comme constante (il suffit qu'il soit suffisamment<br>gros par exemple), on parle de <span class="imp">thermostat</span>.

<p class="fragment fade-up">On considère très souvent le milieu extérieur<br>comme un <span class="imp"> thermostat</span> $\Rightarrow T_\mathrm{ext}\approx \mathrm{cte}$.</p>

---

Modélisons l'évolution de la température $T(t)$ d'un système incompressible en contact avec un thermostat.

---

Pour cela, réalisons un bilan d'énergie du système<br>entre les instants $t$ et $t+\Delta t$ :

<ul>
 <li class="fragment fade-up" style="color:#FFF056;">On suppose que le système est immobile.</li>
 <li class="fragment fade-up" style="color:#16E7CF;">On suppose que le système ne reçoit aucun travail.</li>
 <li class="fragment fade-up" style="color:#FF968D;">Le système échange une énergie thermique $Q$ avec le thermostat (l'extérieur).</li>
 </ul> 
 
 <p class="fragment fade-up">D'après le 1<sup>er</sup> principe de la thermodynamique :</p>
     
  <div class="fragment fade-up">
  $${\color{#FFF056}\cancel{\Delta E_m}}  + \Delta U   = {\color{#16E7CF}\cancel{W}} + \color{#FF968D}Q$$
  </div>
  
<div class="fragment fade-up">
$$\Rightarrow \quad \Delta U   = Q $$
</div>

  
  ---
  
Pendant la durée $\Delta t$, l'énergie thermique échangée s'exprime en fonction du flux thermique comme :

<div class="fragment fade-up">
$$Q = \Phi \times  \Delta t$$
</div>

---

Et comme le système est incompressible,<br>on peut écrire :

<div class="fragment fade-up">
$$\Delta U = mc \Delta T$$
</div>

<p class="fragment fade-up">$\Delta T$ est la variation de température du système<br>entre les instants $t$ et $t+\Delta t$.</p>

---

Enfin, d'après la loi phénoménologique de Newton :

<div class="fragment fade-up">
$$\Phi = hS\left(T_\mathrm{ext}-T(t)\right)$$
</div>

  
---

On a donc :

<div class="fragment fade-up">

$$
\begin{aligned}
\Delta U = mc\Delta T &= Q\\\\
&={\color{#FFF056}\Phi}\Delta t\\\\
&={\color{#FFF056}hS\left(T_\mathrm{ext}-T(t)\right)}\Delta t
\end{aligned}
$$

</div>

---

On obtient :

<div class="fragment fade-up">
$$mc{\color{#FF968D}\Delta T} = hS(T_\mathrm{ext}-T(t)){\color{#FF968D}\Delta t}$$
</div>

<p class="fragment fade-up">Et en réarrangeant :</p>

<div class="fragment fade-up">
$$mc{\color{#FF968D}\frac{\Delta T}{\Delta t}} = hST_\mathrm{ext}-hST(t)$$
</div>


---

Faisons tendre le laps de temps $\Delta t$ vers 0 :

<div class="fragment fade-up">
$${\color{#FF968D}\frac{\Delta T}{\Delta t}} \xrightarrow[\Delta t\to 0]{} {\color{#FF968D}\frac{\mathrm{d}T}{\mathrm{d}t}}$$
</div>

<p class="fragment fade-up">On obtient alors :</p>

<div class="fragment fade-up">
$$ mc {\color{#FF968D}\frac{\mathrm{d} T}{\mathrm{d} t}} = hS T_\mathrm{ext} - hS T(t) $$
</div>

---

D'où :


<div class="fragment fade-up">
$$mc {\color{#FFF056}\frac{\mathrm{d} T}{\mathrm{d} t}} + hS\, {\color{#FFF056}T(t)} =hS \,T_\mathrm{ext}$$
</div>

<p class="fragment fade-up">Et finalement :</p>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px ;padding:0 50px 0 50px;border-radius:10px">
$${\color{#FFF056}\frac{\mathrm{d} T}{\mathrm{d} t} }+ \frac{hS}{mc} {\color{#FFF056}T(t)}= \frac{hS}{mc} T_\mathrm{ext}$$
</div>

---

On reconnaît une équation différentielle du 1<sup>er</sup> ordre<br>à coefficients constants avec second membre :


<div class="fragment fade-up">
$$\frac{\mathrm{d} T}{\mathrm{d} t} + \frac{1}{\tau} T(t)= \frac{1}{\tau} T_\mathrm{ext}$$
</div>

<p class="fragment fade-up">Où <b style="color:#56C1FF">$ \tau = \frac{mc}{hS}$</b> est le temps caractéristique de l'évolution.</p>

---

Solution :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px ;padding:0 50px 0 50px;border-radius:10px">
$$T(t) = \left(T_0-T_\mathrm{ext}\right)\mathrm{e}^{-\frac t \tau} + T_\mathrm{ext}$$
</div>

<p class="fragment fade-up">où $T_0=T(0)$ est la température initiale.</p>

---

<iframe scrolling="no" title="Évolution de la température" src="https://www.geogebra.org/material/iframe/id/zwrwvtms/width/779/height/413/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="779px" height="413px" style="border:0px;border-radius:10px;"> </iframe>


---

On obtient logiquement que :

<br>

<ul>
<li class="fragment fade-up" data-fragment-index="1">Si <b style="color:#56C1FF">$T_0 < T_\mathrm{ext} $</b>, $T(t)$ est <b class="fragment" data-fragment-index="2" style="color:#FF968D">croissante</b>,<br>le système se <b class="fragment" data-fragment-index="2" style="color:#FF968D">réchauffe</b>.</li>
<li class="fragment fade-up" data-fragment-index="3">Si <b style="color:#FF968D">$T_0 > T_\mathrm{ext}$</b>,  $T(t)$ est <b class="fragment" data-fragment-index="4" style="color:#56C1FF">décroissante</b>,<br>le système se <b class="fragment" data-fragment-index="4" style="color:#56C1FF">refroidit</b>.</li>
</ul>

---

Et dans tous les cas, lorsque $t\to\infty$<br>(en pratique pour $t>5\tau$), le système est<br>à la température du thermostat $T_\mathrm{ext}$. 

<p class="fragment fade-up">On appelle cela l'<b style="color:#61D836">équilibre thermique</b>.</p>


{{%/section%}}

---

{{%section%}}

## Bilan thermique du système<br>{Terre, atmosphère}

---

<p class="fragment fade-up">Le système <span class="imp">reçoit</span> de l'énergie par<br><span class="imp">transfert thermique radiatif</span> du Soleil.</p>

<p class="fragment fade-up">Le système <b style="color:#56C1FF">perd</b> de l'énergie par<br><b style="color:#56C1FF">transfert thermique radiatif</b> vers l'espace.</p>

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;">
<img src="/bilanterre.png" style="box-shadow:none;background:none;">
</div>

---

Il y a donc un flux entrant (positif) <span class="imp">$\Phi_{\mathrm{entrant}}$</span><br>et un flux sortant (négatif) <b style="color:#56C1FF">$\Phi_{\mathrm{sortant}}$</b>.

<p class="fragment fade-up">Et plutôt que le flux total $\Phi$, on se concentre<br>sur le flux surfacique $\varphi$ (flux par $\pu{m^2}$).</p>

---

Une partie du flux entrant est rediffusé directement vers l'espace (par les nuages et le sol suivant sa nature).

<div class="fragment fade-up">
On appelle <span class="imp fragment">albedo A</span> le rapport<br>entre le flux diffusé $\varphi_D$ et le flux entrant :
<br><br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$A = \frac{\varphi_D}{\varphi_\mathrm{entrant}}$$
</div>

</div>


---

{{< slide  background-image="/tablalbedo.png" background-size="50vh" background-transition="concave">}}

---

{{< slide  background-image="/albedofeuille.jpeg" background-size="contain" background-transition="concave">}}

---

Grâce à sa couverture nuageuse, l'albédo de<br>la Terre est relativement élevé ($\approx$ 30%)<br>quand celui de la Lune vaut 7% seulement...


---

La carte suivante, réalisée à partir des données du projet CERES de la NASA, montre le rayonnement solaire directement diffusé $\varphi_D$.

---

{{< slide  background-video="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b9/NPP_Ceres_Shortwave_Radiation.ogv/NPP_Ceres_Shortwave_Radiation.ogv.1080p.vp9.webm" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

On a là une partie du flux sortant $\varphi_\mathrm{sortant}$. 

<p class="fragment fade-up">Mais il en manque beaucoup pour équilibrer<br>le flux solaire $\varphi_\mathrm{entrant} = \pu{340,4 W*m-2}$...</p>

<p class="fragment fade-up">D'où vient le reste ?</p>

<p class="fragment fade-up">Du rayonnement de la Terre !</p>

---

Tout corps à température $T$ émet un rayonnement électromagnétique dont le flux thermique<br>surfacique vérifie la loi de Stefan-Boltzman :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px;margin-bottom:0.5em;">
$$\varphi =\sigma T^4 $$
</div>


<ul>
<li class="fragment fade-up">$\varphi$ en <b class="fragment" style="color:#FFF056">$\pu{W*m-2}$</b></li>
<li class="fragment fade-up">$T$ en <b class="fragment" style="color:#FFF056">$\pu{K}$</b></li>
<li class="fragment fade-up">$\sigma =\pu{5,67E-8}$ <b class="fragment" style="color:#FFF056">$\pu{W*m^2*K^{-4}}$</b></li>
</ul>

<p class="fragment fade-up">$\sigma$ est la constante de Stefan-Boltzmann.<p>

---

<iframe 
    src="/spectre_corps_noir.html" 
    width="100%" 
    height="600px" 
    frameborder="0" 
    scrolling="no"
    style = "border-radius:10px;">
</iframe>


---

On voit que le Soleil rayonne dans le visible alors que<br>la Terre émet dans <span class="imp fragment">l'infrarouge</span>, autour de 10 μm.


<p class="fragment fade-up">Or une partie des gaz atmosphériques ($\ce{CO2}$, $\ce{H2O}$, $\ce{CH4}$, etc.) absorbe les infrarouges<br>(cf. spectroscopie infrarouge).</p>

<p class="fragment fade-up">Et ce rayonnement absorbé est diffusé dans toutes<br>les directions, donc pour moitié vers la surface.</p>

---

Il est alors plus difficile pour la Terre<br>d'évacuer sa chaleur, c'est <span class="imp">l'effet de serre</span>.

<p class="fragment fade-up">Conséquence : la surface se réchauffe jusqu'à ce que<br>le flux sortant $\varphi_\mathrm{sortant}$ redevienne suffisant<br>pour équilibrer le flux entrant.</p>

---

L'augmentation dans l'atmosphère de la concentration des gaz à effet de serre déplace à nouveau l'équilibre.

<p class="fragment fade-up">Le déséquilibre $\varphi_\mathrm{entrant} >\varphi_\mathrm{sortant}$  entraîne une  <span class="fragment imp">$\nearrow$</span><br>de la température de surface qui va à son tour<br><span class="fragment imp" >$\nearrow$</span> $\varphi_\mathrm{sortant}$ jusqu'à retour à l'équilibre.</p>

---

<iframe src="https://climatechangetracker.org/embedding/monthly-earths-energy-imbalance" scrolling="no" frameBorder="0" style="width:100%; height:400px;"></iframe>

---

Le déséquilibre par rapport à l'année de référence préindustrielle 1750 est appelé <span class="imp fragment">forçage radiatif</span><br>et vaut aujourd'hui plus de <span class="imp fragment">$\pu{3,0 W*m-2}$</span>.

---

<iframe src="https://climatechangetracker.org/embedding/monthly-greenhouse-gases-impact-on-energy-balance" scrolling="no" frameBorder="0" style="width:100%; height:400px;"></iframe>


---

[Tableau de bord interactif](https://climatechangetracker.org/global-warming)<br>du réchauffement climatique.

---

{{< slide  background-image="https://showyourstripes.info/stripes/GLOBE---1850-2025-MO.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-image="https://showyourstripes.info/stripes/GLOBE---1850-2025-MO-barslabel.png" background-size="contain" background-transition="concave">}}

---

{{< slide  background-video="/ceres.mp4" background-size="contain" background-transition="concave" background-video-loop="true">}}

---

{{< slide  background-image="/bilanradiatif.png" background-size="contain" background-transition="concave">}}

---

On peut réaliser un bilan radiatif simplifié<br>avec un modèle monocouche de l'atmosphère qui absorberait une proportion $\alpha$ du rayonnement infrarouge $\varphi_E$ émis par la Terre.

<p class="fragment fade-up">On appellera dans la suite $\varphi_S$ le flux solaire entrant.</p>

---


{{< slide  background-image="/bilanrad.png" background-size="contain" background-transition="concave" background-color="white">}}

---

D'après le schéma :

<div class="fragment fade-up">
$$\varphi_\mathrm{sortant} = A \varphi_S + \varphi_E(1-\alpha) + \frac{\alpha}{2}\varphi_E$$
</div>

<p class="fragment fade-up">Et à l'équilibre, on doit avoir :</p>

<div class="fragment fade-up">
$$\varphi_\mathrm{sortant} = \varphi_\mathrm{entrant} =\varphi_S$$
</div>

---

Cela permet d'exprimer $\varphi_E$ en fonction de $\varphi_S$ :

<div class="fragment fade-up">
$$\varphi_E = \frac{2\left(1-A\right)}{(2-\alpha)}\varphi_S$$
</div>


<p class="fragment fade-up">Et comme $\varphi_E=\sigma T^4$, on en déduit :</p>


<div class="fragment fade-up">
$$T_\mathrm{eq} = \left(\frac{2\left(1-A\right)}{\sigma(2-\alpha)}\varphi_S\right)^{\!1/4}$$
</div>

---

Influence de $\alpha$ :

<iframe scrolling="no" title="Influence de l'effet de serre" src="https://www.geogebra.org/material/iframe/id/hqqcs4jr/width/595/height/466/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="700px" height="548px" style="border:0px;border-radius:10px;"> </iframe>

---

Actuellement, la valeur de $\alpha$ est aux alentours de 80%.

---

Influence de $A$ :


<iframe scrolling="no" title="Influence albédo" src="https://www.geogebra.org/material/iframe/id/pxnrxj77/width/524/height/466/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="650px" height="578px" style="border:0px;border-radius:10px;"> </iframe>



{{%/section%}}


---

[Retour site](https://coursphychi.github.io/tspe/thermo/)