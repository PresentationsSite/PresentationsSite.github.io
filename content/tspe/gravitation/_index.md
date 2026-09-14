+++
title = "Gravitation"
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




# Mouvement dans<br>un champ de gravitation

---

{{%section%}}

## Les lois de Kepler

---

Johannes Kepler a énoncé trois lois empiriques concernant les mouvement des planètes autour<br>du Soleil qu'on peut étendre aux mouvements<br>des satellites autour des planètes.

{{%note%}}
Lois valables pour tout problème à deux corps
{{%/note%}}

---

### Première loi -- Loi des orbites

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:10px 50px 20px 50px;border-radius:10px">
Dans le référentiel héliocentrique,<br>les trajectoires des planètes du système solaire sont des <span class="imp fragmennt">ellipses</span>, dont le Soleil<br>occupe l'un des foyers.
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/loidesorbites.png" style="box-shadow:none;background:none;">
</div>

---

Une <span class="imp">ellipse</span> est une sorte de cercle applati.

<p class="fragment fade-up">Elle est caractérisée par son <span class="imp">excentricité $e$</span><br>(écart au cercle) comprise entre 0 et 1.</p>

<p class="fragment fade-up">La plus grande distance entre deux points<bR>de l'ellipse est appelée <span class="imp">grand axe</span> et notée $2a$.</p>

<p class="fragment fade-up">La plus petite distance entre deux points<br>de l'ellipse est appelée <span class="imp">petit axe</span> et notée $2b$.</p>

---

<ul>
<li class="fragment fade-down" style="margin-bottom:1em;">$e=0$ $\rightarrow$ $a=b$</li>
</ul>

<br>

<iframe scrolling="no" title="ellipse" src="https://www.geogebra.org/material/iframe/id/g5e9n658/width/503/height/477/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="503px" height="477px" style="border:0px;border-radius:10px;margin-bottom:1em;"> </iframe>

<br>

<ul>
<li class="fragment fade-up">$ 0 < e < 1 \rightarrow a > b $</li>
</ul>

---

À part mercure, les planètes du système solaire<br>ont une très faible excentricité :

<table border="1" style="font-size:0.6em;">
  <tr>
    <th></th>
    <th>Mercure</th>
    <th>Vénus</th>
    <th>Terre</th>
    <th>Mars</th>
    <th>Jupiter</th>
    <th>Saturne</th>
    <th>Uranus</th>
    <th>Neptune</th>
  </tr>
  <tr>
    <th>$e$</th>
    <td>0,2056</td>
    <td>0,0068</td>
    <td>0,0167</td>
    <td>0,0934</td>
    <td>0,0489</td>
    <td>0,0565</td>
    <td>0,0457</td>
    <td>0,0113</td>
  </tr>
</table>

---

### Deuxième loi -- Loi des aires

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:10px 50px 20px 50px;border-radius:10px">
Le segment [SP] qui relie le centre P de la planète au centre S du Soleil balaie des <span class="imp">aires égales</span><br>sur des <span class="imp">durée égales</span>.
</div>

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:700px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/loidesaires.png" style="box-shadow:none;background:none;">
</div>

---

<iframe scrolling="no" title="Loi des aires" src="https://www.geogebra.org/material/iframe/id/kydwtcjk/width/966/height/602/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="966px" height="568px" style="border:0px;border-radius:10px;"> </iframe>

---

Conséquence sur la vitesse des planètes :

<p class="fragment fade-up">La <span class="imp">vitesse</span> de la planète évolue le long de son orbite<br>en fonction de la <span class="imp">distance</span> au Soleil :</p>

<ul>
<li class="fragment fade-up">elle est <span class="imp">maximale</span> au <span class="imp">périhélie</span><br>(point le plus proche du Soleil),</li>
<li class="fragment fade-up">et <span class="imp">minimale</span> à l'<span class="imp">aphélie</span><br>(point le plus loin du Soleil).</li>
</ul>

---

{{< slide  background-image="/2kepler.png" background-size="contain" background-transition="concave">}}

---

### Troisième loi -- Loi des périodes

<div class="fragment fade-up" class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:30px 50px 20px 50px;border-radius:10px">
Le quotient du <span style="color:#FFF056;">carré de la période de révolution $T$</span> d'une planète par le <span style="color:#56C1FF;">cube de la longueur $a$</span><br>du demi grand axe de son orbite est égal à une <span style="color:#88FA4E;">même constante</span> pour toutes les planètes<br>du système solaire.

<pan class="fragment">$$\frac{\color{#FFF056}T^2}{\color{#56C1FF}a^3} = \color{#88FA4E}k $$</span>
</div>

---

<u>Rq 1</u> :

La constante dépend de l'astre "central". 

<p class="fragment fade-up">Ainsi tous les satellites de la Terre partagent eux aussi un même quotient mais il est différent que pour<br>les planètes autour du soleil ($\frac{T^2}{a^3}=k'≠k$).</p>

---

<u>Rq 2</u> :

Ces lois ne sont qu'approximatives. Leur validité supposerait que la masse du Soleil soit infiniment<br>plus grande que celle des planètes.

<p class="fragment fade-up">En réalité, le petit astre ne tourne pas autour du gros mais les deux astres tournent autour<br>de leur centre de masse.</p>

{{%/section%}}

---

{{%section%}}

## Système en orbite circulaire

---

D'après la loi d'interaction gravitationnelle, un astre<br>de masse $M_\mathcal{A}$ et de centre de masse O crée en tout point M de l'espace un <span class="imp">champ de gravitation $\mathcal{G}$</span>.

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/grav1.png" style="box-shadow:none;background:none;">
</div>


---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:20px 50px 20px 50px;border-radius:10px">
$\displaystyle\vec{\mathcal{G}}=$&nbsp;<span>$\displaystyle G\frac{M_\mathcal{A}}{\mathrm{OM}^2}\vec{u}_N$</span>
</div>

<br>

<ul>
<li style="color:#aaa;">$M_\mathcal{A}$ en kg</li>
<li style="color:#aaa;">$\mathrm{OM}$ en m</li>
<li style="color:#aaa;">$G=\pu{6,67E-11 N*m^2*kg^-2}$</li>
<li style="color:#aaa;">$\vec{u}_N$ vecteur unitaire de direction (OM)<br>orienté vers O.</li>
</ul>

---


Si un système de masse $m$ n'est soumis qu'à<br>l'attraction d'un seul astre de masse $M_\mathcal{A}$, le champ<br>est dit <span class="imp">newtonien</span> ; la seule force est la force d'interaction gravitationnelle <span class="imp">$\vec{F}=m\vec{\mathcal{G}}$</span>.


---

On se place dans un <span class="imp">référentiel astrocentrique</span> :


<p class="fragment fade-up">il est lié à l'astre de centre de masse O<br>et 3 étoiles lointaines supposées fixes.

<p class="fragment fade-up">Le référentiel astrocentrique est supposé <span class="imp">galiléen</span>.</p> 

<p class="fragment fade-up"><u>Rq</u> :<br>si l'astre est la Terre $\rightarrow$ référentiel <span class="imp">géocentrique</span>,<br>et pour le Soleil $\rightarrow$ référentiel <span class="imp">héliocentrique</span>.

---

La trajectoire du système de masse $m$ et de<br>centre de masse M est appelée <span class="imp fragment">orbite</span>.

---

Étudions le mouvement de M<br>dans le cas d'une <span class="imp">orbite circulaire</span>.

<p class="fragment fade-up">Si $M_\mathcal{A}\gg m$, l'orbite pourra être considérée<br>comme centrée en O, le centre de l'astre.</p> 

---

La <span class="imp">deuxième loi de Newton</span> nous donne :

<p class="fragment fade-up">
$
m{\color{#61D836}\,\vec{a}}={\color{#FF644E}m\,\vec{\mathcal{G}}}\Rightarrow
$
$
{\color{#61D836}\,\vec{a}}=\color{#FF644E}\,\vec{\mathcal{G}}
$
</p>

---

On décompose sur le repère de Frenet :

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;">
<img src="/repfrenetgrav.png" style="box-shadow:none;background:none;">
</div>


---

<div>

$$
\displaystyle
\begin{cases}
{\color{#61D836}a_T=\frac{\mathrm{d}v}{\mathrm{d}t}}=\color{#FF644E}0\\\\
{\color{#61D836}a_N = \frac{v^2}{R}} = \color{#FF644E}G\frac{M_\mathcal{A}}{R^2}
\end{cases}
$$

</div>

<p class="fragment fade-up"><u>Rq</u> : $R$ est le rayon de l'orbite ($R=\mathrm{OM}=\mathrm{cte}$).</p>

---

On constante que le vecteur accélération<br>n'a pas de composante tangentielle. 

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$
\vec{a}=G\frac{M_\mathcal{A}}{R^2}\vec{u}_N
$$
</div>

<p class="fragment fade-up">On dit que l'accélération est <span class="imp">centripète</span>  (vers le centre).</p>

<p class="fragment fade-up">Et la <span class="imp">norme de l'accélération</span><br>
est <span class="imp">constante</span>.</p>

---

De plus, à partir de 

$$
\frac{\mathrm{d}v}{\mathrm{d}t} = 0,
$$

<p class="fragment fade-up">on déduit que le mouvement est <span class="imp fragment">uniforme</span><br><pan class="fragment">($v(t)=\text{cste}$).</span></p>

---

et de

$$
\frac{v^2}{R} = G\frac{M_\mathcal{A}}{R^2},
$$

<p class="fragment fade-up">on obtient la norme de la vitesse :</p>

<p class="fragment fade-up">
<span class="imp">$\displaystyle v = $</span> <span class="imp fragment">$\displaystyle \sqrt{\frac{GM_\mathcal{A}}{R}}$</span>
</p>

---

Le <b style="color:#FFD932">vecteur vitesse $\vec{v}$</b> du centre de masse M<br>d'un système en orbite circulaire s'écrit donc :

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FFD932;padding:0 50px 0 50px;border-radius:10px;color:#FFD932;">
$$
\vec{v}=\sqrt{\frac{G M_\mathcal{A}}{R}} \, \vec{u}_T
$$
</div>

<p class="fragment fade-up">
<u>Rq</u> :<br>
$\vec{v}$ ne dépend pas de la masse $m$ du système.
</p>

---

<span class="imp">Période de révolution $T$</span>

<p class="fragment fade-up"> $T$ est la durée pour parcourir<br>l'orbite circulaire de rayon $R$.</p>

<p class="fragment fade-up">On a donc :</p>

<div class="fragment fade-up">
$$
v\times T = 2\pi R
$$
</div>

---

Prenons le carré de chaque membre :

<div class="fragment fade-up">
$$
{\color{#FFD932}v^2} \times T^2 = 4\pi^2 R^2
$$
</div>

<div class="fragment fade-up">
$$
{\color{#FFD932}\frac{G M_\mathcal{A}}{R}}\times T^2 = 4\pi^2 R^2
$$
</div>

<p class="fragment fade-up">Et en réarrangeant, on obtient :</p>


<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;margin-top:1em;padding:10px 50px 20px 50px;border-radius:10px">

$\displaystyle \frac{T^2}{R^3} = $ <span class="fragment">$\displaystyle\frac{4\pi^2}{G M_\mathcal{A}}$</span>

</div>

---

Comme $\frac{T^2}{R^3}$ ne dépend pas de la masse $m$ du système, on vient de démontrer <span class="imp fragment">la troisième loi de Kepler</span><br>dans le cas d'une  orbite circulaire.

---

Isolons $T$ :

<div class="fragment fade-up">
$$
T = 2\pi \sqrt{\frac{R^3}{G M_\mathcal{A}}}
$$
</div>

<p class="fragment fade-up">On constate que la période de révolution est d'autant plus grande que la distance à l'astre est grande.</p> 

---

On peut en déduire l'altitude<br>d'un <span class="imp">satellite géostationnaire</span>.

<p class="fragment fade-up">Un satellite géostationnaire est un satellite<br><span class="imp">immobile</span> dans le référentiel <span class="imp fragment">terrestre</span>. </p>

<br>

<ul>
<li class="fragment fade-up">Son orbite est <span class="imp fragment">circulaire</span>,</li> 
<li class="fragment fade-up">dans le <span class="imp fragment">plan équatorial</span> de la Terre,</li>
<li class="fragment fade-up">et sa période vaut <span class="fragment"><span class="imp">la période de rotation de la Terre</span>.</span></li> 
</ul>

{{%note%}}
La période de rotation de la Terre (jour sidéral vaut 23h 56 min et 4s). Les 24h correspondent à un jour solaire !
{{%/note%}}

---

Posons $R=(R_T+h)$ où $R_T$ est le rayon<br>terrestre et $h$ l'altitude du satellite<br>puis isolons $h$ dans la formule :

<div class="fragment fade-up">
$$
\frac{T^2}{(R_T+h)^3} = \frac{4\pi^2}{{G}M_\mathrm{T}}
$$
</div>

<p class="fragment fade-up">$\Downarrow$</p>

<div class="fragment fade-up">
$$
h = \sqrt[3]{\frac{{G}M_\mathrm{T} T^2}{4\pi^2}}-R_T
$$
</div>


---

<u>Application numérique</u>

Données :
<ul>
<li style="color:#aaa;">$M_\mathrm{T}=\pu{6,0E24 kg}$</li>
<li style="color:#aaa;">$R_\mathrm{T}=\pu{6,4E6 m}$</li>
</ul>

<div  class="fragment fade-up" style="font-size:0.7em;">
$$
\begin{aligned}
h&=\left(\frac{(\pu{6,67E-11)\times(\pu{6,0E24})\times( 24 \times 3600)^2 }}{4\pi^2}\right)^{\!\frac 13}-\pu{6,4E6}\\
&=\pu{3,6E7 m}
\end{aligned}
$$
</div>

<p class="fragment fade-up">Les satellites géostationnaires<br>orbitent à une altitude de 36 000 km.</p>


---

{{< slide  background-video="/javelotobelix.mp4" background-size="contain" background-transition="concave">}}

---

Pourquoi n'est-ce pas réaliste ?

<p class="fragment fade-up">(à part la présence de frottements)</p>

---

Car tout objet qui orbite un "caillou" près<br>de sa surface le fait en environ 1h30 !


{{%note%}}
Super billet de blog de David Louapre : https://scienceetonnante.substack.com/p/orbiter-autour-dun-corps-rocheux
{{%/note%}}

---

En effet, supposons une boule rocheuse de densité uniforme égale à 5 (densité moyenne de la Terre).

<p class="fragment fade-up">On a alors $\rho\approx\pu{5E3 kg*m-3}$<br>
et la masse de l'astre vaut<br>
<span class="fragment fade-up">$M = \rho\times V= \rho\times\frac 43 \pi R^3$</span> 
</p>


---

Or on a obtenu plus haut : 

<div class="fragment fade-up">
$$T^2 = \frac{4\pi^2 R^3}{GM}$$
</div>

<p class="fragment fade-up">En remplaçant M :</p>

<div class="fragment fade-up">
$$T^2 = \frac{4\pi^2 R^3}{G \rho \frac 43 \pi R^3}$$
</div>

---

Et après simplification :

<div class="fragment fade-up">
$$T^2 = \frac{3\pi }{G \rho}$$
</div>

<div class="fragment fade-up">

<p>Soit</p>

<p>$\displaystyle T = \sqrt{\frac{3\pi}{G\rho}}$</p>

</div>

---

<img src="https://media1.tenor.com/m/3eIvVsG3yPYAAAAd/the-universe-tim-and-eric-mind-blown.gif" style="width:300px;box-shadow:none;background:none;border-radius:10px;">


Le résultat ne dépend plus de $R$ !!

<p class="fragment fade-up">Pour toute boule d'approximativement<br>la même densité, on aura la même période<br>de révolution $T$ près de sa surface !</p>

---

A.N. :

<p class="fragment fade-up">$T\displaystyle =\frac{3\pi}{\pu{6,67e-11}\times\pu{5,0e3}}$<br>
$\approx \pu{5E3 s}$</p>

<p class="fragment fade-up">Soit entre 1h et 2h.</p>

<p class="fragment fade-up">Si Obelix recommence la même expérience sur la Lune, il devrait trouver un temps comparable.</p>

{{%note%}}
En réalité la Lune est un peu moins dense (environ 3) puisque la densité est très liée au noyau de fer des planètes plus ou moins gros, voir absent.
{{%/note%}}

---

Et si Obelix lance le javelot plus fort ?

<p class="fragment fade-up">On change d'orbite (plus circulaire) !</p>

<p class="fragment fade-up">Et s'il envoie le javelot à plus de 11,2 km/s (vitesse<br>de libération), le javelot s'en va pour toujours ! Il échappe à l'attraction gravitationnelle de la Terre.</p>

{{%note%}}
Bien comprendre qu'une orbite circulaire à un rayon R donné correspond à une et une seule vitesse !!!
{{%/note%}}

{{%/section%}}

---


{{< slide  background-iframe="https://satellitetracker3d.com/track?norad-id=25544" background-size="contain" background-transition="concave" background-interactive="true">}}

{{%note%}}
à faire :
- constater que toujours des ellipses avec Terre comme foyer (les très excentriques sont chopables loin au-dessus des poles)
- constater que plus on est loin, moins ça va vite (et inversement)
- avec le mean motion et l'orbital périod, on peut tester la 3e loi de Kepler et trouver la masse de la Terre...
{{%/note%}}


---

{{< slide  background-iframe="https://stuffin-space.vader.zone" background-size="contain" background-transition="concave" background-interactive="true">}}

{{%note%}}
3 possibilités pour satellite type : PAYLOAD (en rouge) (le satellite est la charge utile originelle, les bouts de fusées (en bleu) sont désignés ROCKET BODY et les fragments ou éclats divers DEBRIS (en gris) .
Exemples
• Hubble (1990-037A) ⇒ payload
• Étape Centaur (1990-037B) ⇒ rocket body
• Fragment 1990-037E ⇒ debris

La collision entre les satellites Iridium-33 et Kosmos-2251 a eu lieu le 10 février 2009 à 16 h 56 TU[1] à 776 kilomètres au-dessus de la péninsule de Taïmyr en Sibérie. Cette collision impliquait le satellite commercial Iridium 33 (560 kg), de l'entreprise Iridium spécialisée dans la téléphonie par satellite, et le satellite Kosmos-2251 (900 kg), un satellite de télécommunications militaires russe de type Strela-2M retiré du service. C'est le premier événement répertorié de ce type.
La vitesse de collision est estimée à 11,6 km/s sur des trajectoires perpendiculaires. Un nombre important de débris spatiaux, environ 600, a été produit lors de l'impact.

Pourtant, la probabilité d'une telle rencontre brutale est extrêmement faible d'après les spécialistes de Thales Alenia Space, second constructeur européen de satellites.

D'habitude, le Norad prévoit ce genre d'incident et prévient les opérateurs de satellites, Boeing en l'occurrence pour Iridium, qui peuvent faire manœuvrer le satellite pour éviter la collision. Ainsi, cette organisation fait manœuvrer régulièrement, presque quotidiennement, la Station spatiale internationale.

https://fr.wikipedia.org/wiki/Collision_entre_les_satellites_Iridium-33_et_Kosmos-2251


Grandes familles d'orbites :

1. LEO (Low Earth Orbit)

160 – 2 000 km. Faible délai radio, lancement peu coûteux ; c’est la « zone » des constellations Internet et de la station spatiale.  ￼ ￼

2. MEO (Medium Earth Orbit)

2 000 – 35 786 km. Altitude intermédiaire, idéale pour la navigation ; GPS (20 200 km) et Galileo (23 200 km) y résident.  ￼ ￼

3. GEO / GSO (Geostationary / Geosynchronous)

35 786 km, période sidérale 24 h. Un satellite géostationnaire (0° inc, 0 eccentricité) reste « figé » au-dessus d’un point de l’équateur ; en GSO incliné il décrit un 8 dans le ciel.  ￼ ￼

4. HEO (High Earth Orbit)

Tout ce qui est au-delà de l’anneau GEO ou dont l’apogée dépasse GEO ; on y trouve des sondes scientifiques (IBEX, TESS) ou des orbites halo/lunaires (NRHO de Gateway).  ￼

5. Orbites particulières
	•	SSO (Sun-synchronous) : quasi polaire, l’orbite « tourne » avec la Terre pour toujours passer à la même heure solaire locale — idéal pour l’imagerie.  ￼
	•	Polar : inclinaison 90 ° ± 10 °, couverture globale à chaque révolution.  ￼
	•	Molniya / Tundra : ellipses de 12 h ou 24 h, apogée haut sur l’hémisphère nord pour des liaisons à haute latitude.  ￼
	•	GTO : orbite de transfert (200 × 35 786 km) servant uniquement d’étape avant GEO ; elle apparaît parfois dans les catalogues mais les objets y restent peu de temps.
{{%/note%}}

---


[Retour site](https://coursphychi.github.io/tspe/gravitation/)