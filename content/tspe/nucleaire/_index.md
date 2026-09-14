+++
title = "Transformations nucléaires"
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



# Transformations nucléaires

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/clRcF7emyiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{%section%}}

## Diagramme (N,Z)

---

Rappel notation symbolique d'un élément :

<div style="font-size:2em;">
$$\ce{^{\color{#56C1FF}A}_{\color{#FF968D}Z} X}$$
</div>

<ul>
<li class="fragment fade-up">$\ce{X}$ est le symbole chimique de l'élément</li>
<li class="fragment fade-up">$\ce{\color{#FF968D}Z}$ est le nombre de <span class="imp fragment">protons</span> du noyau.</li>
<li class="fragment fade-up">$\ce{\color{#56C1FF}A}$ est le nombre de <b class="fragment" style="color:#56C1FF">nucléons</b> du noyau.</li>
</ul>

---

<u>Rq</u> :

<ul>
<li class="fragment fade-up">$\ce{\color{#FF968D}Z}$ (le numéro atomique), permet de<br>déterminer <span class="imp fragment">la charge</span> du noyau :<br>
<span class="fragment">$Q=\ce{\color{#FF968D}Z}\times e$</span></li>
<br>
<li class="fragment fade-up">$\ce{\color{#56C1FF}A}$ (aussi appelé <b style="color:#56C1FF" class="fragment">nombre de masse</b>)<br>permet de déterminer approximativement<br><b style="color:#56C1FF" class="fragment">la masse</b> du noyau :<br>
<span class="fragment">$m\approx\ce{\color{#56C1FF}A}\times m$ (avec $m_p\approx m_n\approx m$)</span>
</li>

</ul>



---

Le nombre <b style="color:#FFF056">$\ce{N}$</b> de <b style="color:#FFF056">neutrons</b> du noyau est donné par :

<div class="fragment fade-up" style="font-size:1.5em;">
$$\ce{{\color{#FFF056}N} = {\color{#56C1FF}A}-{\color{#FF968D}Z}}$$
</div>

---

On appelle <span class="imp">isotopes</span> <span class="fragment">deux noyaux<br>ayant le même nombre de protons $\ce{\color{#FF968D}Z}$<br>mais un nombre différent de neutrons $\ce{\color{#FFF056}N}$.<span>

<p class="fragment fade-up">(ou, ce qui revient au même,<br>un nombre différent de nucléons $\ce{\color{#56C1FF}A}$)</p>

<p class="fragment fade-up">On désigne généralement un isotope<br>par son nom chimique suivi de son nombre $\ce{\color{#56C1FF}A}$.</p> 

<p class="fragment fade-up">Le carbone 14 ou l'uranium 235 par exemple.</p>

----

On peut ranger tous les isotopes<br>connus dans un <span class="imp">diagramme $\ce{(N,Z)}$</span><br>(avec $\ce{\color{#FF968D}Z}$ en abscisse et $\ce{\color{#FFF056}N}$ en ordonnée).

---


{{< slide  background-image="/stabilitenoyau.png" background-size="contain" background-transition="concave">}}

---


{{< slide  background-iframe="https://www.edumedia.com/fr/media/993-isotopes?auth=a2cc4f36320aae25398ee4c862975e19/27824" background-size="contain" background-transition="concave" background-interactive="true" background-color="white">}}

---

{{< slide  background-iframe="https://physique.ostralo.net/diagramme_NZ/" background-size="contain" background-transition="concave" background-interactive="true" background-color="white">}}

---

On constate que les noyaux <span class="imp">stables</span><br>sont très minoritaires et se concentrent dans<br>une <span class="imp">vallée de la stabilité</span> (autour de $\ce{N=Z}$)<br>pour les petits noyaux puis se décalent vers $\ce{N>Z}$.

<p class="fragment fade-up">À partir du bismuth ($\ce{Z=83}$),<br>il n'y a plus d'isotopes stables.</p>


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/VZHpAwSGYZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/mqgmKzRneic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


{{%/section%}}

---

{{%section%}}

## Transformations nucléaires

---

Les noyaux instables subissent<br>des <span class="imp">désintégrations radioactives</span><br>mettant en jeu une ou plusieurs<br><span class="imp">transformation(s) nucléaire(s)</span> du noyau<br>visant à le rapprocher de la vallée de la stabilité.

---

<span class="imp" style="font-size:1.2em;">Lois de conservations</span>

<p class="fragment fade-up">Lors d'une <span class="imp">transformation nucléaire</span>, il y a</p>

<ul>
<li class="fragment fade-up"><b style="color:#FFF056">conservation de la charge</b>,</li>
<li class="fragment fade-up"><b style="color:#56C1FF">conservation du nombre de nucléons</b>,</li>
</ul>

---

Exemple :

Lorsqu'un noyau d'uranium 235 absorbe un neutron,<br>il peut fissioner en deux noyaux fils dont l'un est <br>le strontium 94 tout en émettant 2 neutrons.

<p class="fragment fade-up">Déterminer l'autre noyau fils.</p>

<div class="fragment fade-up" style=font-size:1.2em;">
$$\ce{1 ^\square_\square n + ^\square_\square U -> ^\square_\square Sr + ^\square_\square ? + 2 ^\square_\square n}$$
</div>

{{%note%}}
1 0 n + 235 92 U -> 94 38 Sr + 140 54 Xe + 2 1 0 n
{{%/note%}}

{{%/section%}}

---

{{%section%}}

## Types de radioactivité

---

Lors d'une désintégration radioactive,<br>différentes transformations nucléaires peuvent permettre de rapprocher le noyau fils de la stabilité.

<p class="fragment fade-up">Historiquement, on a classé ces différents types de radioactivité en fonction du rayonnement émis :<br><b style="color:#FF968D">α</b>, <b style="color:#56C1FF">β<sup>-</sup></b>, <b style="color:#FF95CA">β<sup>+</sup></b> et <b style="color:#FFF056">γ</b>.
</p>

---

<span class="imp">Radioactivité alpha $\alpha$ </span>

Exemple : 

$$\ce{^{238}\_{92} U -> ^{234}\_{90} Th +\color{#FF968D} \alpha}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons alpha.

---


La <span class="imp">radioactivité alpha</span> correspond à l'émission<br>de <span class="imp">noyaux d'Hélium $\ce{^4\_2He}$</span> (particule α).

---

<b style="color:#56C1FF">Radioactivité bêta moins $\beta^-$</b>

Exemple :

$$\ce{^{14}\_{6} C -> ^{14}\_{7} N + \color{#56C1FF}\beta^-} + \\; ^0_0\bar{\nu_e}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons $\beta^-$.

---

La radioactivité <b style="color:#56C1FF">$\beta^-$</b> correspond à<br>la transformation d'un neutron en proton<br>en émettant <b style="color:#56C1FF">un électron $^{\\;\\; 0}_{-1}e$</b> (particule $\beta^-$).

<p class="fragment fade-up">Elle concerne des noyaux<br>comportant trop de <span class="fragment">neutrons</span>.</p>

---

<b style="color:#FF95CA">Radioactivité bêta plus $\beta^+$</b>

Exemple :

$$\ce{^{18}\_{9} F -> ^{18}\_{8} O + \color{#FF95CA}{\beta^+} + \\; ^0_0\nu_e }$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons $\beta^+$.

---

La radioactivité <b style="color:#FF95CA">$\beta^+$</b> correspond à<br>la transformation d'un proton en neutron<br>en émettant <b style="color:#FF95CA">un positron $^{\\;\\; 0}_{+1}e$</b><br>(antiparticule de l'électron).

<p class="fragment fade-up">Elle concerne des noyaux<br>comportant trop de <span class="fragment">protons</span>.</p>

---

<b style="color:#FFF056">Radioactivité gamma $\gamma$</b>

Exemple :

$$\ce{^{60}\_{28} Ni^* -> ^{60}\_{28} Ni + \color{#FFF056}\gamma}$$

Par conservation de la charge et du nombre de nucléons, déterminer la nature des rayons gamma.

---

La radioactivité gamma correspond à la désexcitation d'un noyau en émettant un <b style="color:#FFF056">photon</b> (généralement dans le domaine électromagnétique des rayons gamma).

---

<div style="position:relative;margin-left:auto;margin-right:auto;width:500px;max-width:100%;margin-bottom:-1em;margin-top:-1em;">
<img src="/desgamma.png" style="box-shadow:none;background:none;">
</div>

L'énergie est typiquement de l'ordre du MeV<br>($\approx\pu{1E-13 J}$)

---

{{< slide  background-image="/diffrayons.png" background-size="80%" background-transition="concave">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/i15ef618DP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/1_zwLuNJ5Ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>



{{%/section%}}

---

{{%section%}}

## Loi de décroissance radioactive

---

Un noyau radioactif a une certaine probabilité $\lambda \mathrm{d}t$<br>de se désintégrer pendant le prochain<br>petit laps de temps $\mathrm{d} t$ (avec $\mathrm{d} t \ll 1/\lambda$).

<p class="fragment fade-up"><span class="imp">$\lambda$ (en $\pu{s^-1})$ est la constante radioactive</span>.<br>Elle est indépendante du temps !</p>

<p class="fragment fade-up">Après 1 s ou 1000 ans, la probabilité<br>pour un noyau de se désintégrer<br>pendant les prochains $\mathrm{d} t$<br>vaut toujours $\lambda\mathrm{d} t$.</p>

---

Tous les mêmes isotopes ont<br>la même constante radioactive $\lambda$<br>et donc la même probabilité de se désintégrer<br>pendant le prochain laps de temps infinitésimal $\mathrm{d} t$.

<p class="fragment fade-up">La désintégration d'un noyau radioactif est donc<br>un phénomène <span class="imp">aléatoire</span> et l'évolution d'une population de noyau suit une loi <span class="imp">statistique</span>.

---

Soit $N(t)$ la population de noyaux non désintégrés<br>à un instant $t$. La variation $\mathrm{d} N=N(t+\mathrm{d}t)-N(t)$ de la population pendant le laps de temps<br>infinitésimal $\mathrm{d} t$ vaut :

<div class="fragment fade-up">
$$
\mathrm{d}N=-N(t) \lambda \mathrm{d}t
$$
</div>

<p class="fragment fade-up">Qu'on peut réécrire :</p>

<div class="fragment fade-up">
$$\frac{\mathrm{d}N}{\mathrm{d}t} =-\lambda N(t)$$
</div>

---

On reconnaît une <span class="imp">équation différentielle</span> linéaire homogène <span class="imp">du premier ordre</span> à coefficient constant.

<p class="fragment fade-up">Les solutions sont de la forme :</p>

<div class="fragment fade-up">
$$N(t)=C\mathrm{e}^{-\lambda t}$$
</div>


{{%note%}}
Une équation différentielle est une équation qui lie une fonction avec ses dérivées.
L'équation différentielle considérée ici est dite « du premier ordre» car la seule dérivée mise en jeu est la dérivée première de la fonction. Elle se note y'+ ay=0. Si la fonction f vérifie cette équation différentielle,
alors f(x) = f_0 exp(-ax) avec f_0= f(0).
{{%/note%}}

---

Or si on connaît la population à l'instant initial :

<div class="fragment fade-up">
$$N(t=0)=N_0$$
</div>

<p class="fragment fade-up">On en déduit $C$ :</p>

<div class="fragment fade-up">
$$N(t=0)=C\mathrm{e}^{-\lambda \times 0} = C = N_0$$
</div>

---

D'où la <span class="imp">loi de décroissance radioactive</span> :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$N(t)=N_0\,\mathrm{e}^{-\lambda  t} $$
</div>

<br>

<ul>
<li class="fragment fade-up">$N$ sans unité</li>
<li class="fragment fade-up">$t$ en $\pu{s}$ (ou l'inverse de l'unité de $\lambda)$</li>
</ul>

---

[Appliquette geogebra](https://www.geogebra.org/m/Yg8fGWdm)

---

<u>Rq</u> :

On peut aussi écrire :

<div class="fragment fade-up">
$$
N(t) = N_0\mathrm{e}^{-\frac{t}{\tau}}
$$
</div>

<p class="fragment fade-up">où $\tau=1/\lambda$ est le temps de vie moyen d'un noyau.</p>

{{%note%}}
La population survivante suit N(t)=N_0 e^{-\lambda t}.
Le temps total vécu par tous les noyaux est
\int_0^\infty N(t)\,dt = \int_0^\infty N_0 e^{-\lambda t}\,dt=\frac{N_0}{\lambda}.
Le temps moyen par noyau est ce total divisé par N_0 :
\tau=\frac{1}{\lambda}.
{{%/note%}}



{{%/section%}}

---

{{%section%}}

## Activité

---

L'<span class="imp">activité $A$</span> d'un échantillon radioactif est l'opposée<br>de la dérivée temporelle du nombre de noyaux :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$A(t)=-\frac{\mathrm{d}N}{\mathrm{d}t}$$
</div>


<br>


<p class="fragment fade-up">$A$ s'exprime en <span class="imp fragment">becquerel (Bq)</span></p>

<p class="fragment fade-up">1 becquerel correspond<br>à 1 désintégration par seconde.</p>


---

On déduit $A(t)$ de la loi de décroissance radioactive :

<br>

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0px 50px;border-radius:10px">
$$A(t)=\lambda N_0\,\mathrm{e}^{-\lambda  t} = A_0\,\mathrm{e}^{-\lambda  t} $$
</div>

<br>

<p class="fragment fade-up">
${\color{#FF968D}{A_0 = \lambda N_0}} = A(t=0)$ est l'activité initiale.
</p>

{{%note%}}
Pour une fonction u dérivable :
(exp(u))' = u' exp(u)
et (- lambda t)' = -lambda
{{%/note%}}


{{%/section%}}

---

{{%section%}}

## Temps de demi-vie

---

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:10px 50px 20px 50px;border-radius:10px">
La demi-vie mesure la durée au bout de laquelle la population radioactive est divisée par deux.
</div>


---

On peut obtenir $t_{1/2}$ graphiquement<br>ou à partir de $\lambda$ (ou $\tau$) :

<div style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
$$t_{1/2}= \frac{\ln(2)}{\lambda} = \tau\times \ln(2) $$
</div>

---

[Appliquette geogebra](https://www.geogebra.org/m/tscgbnpn)

---

{{< slide  background-image="/expdiv22.png" background-size="contain" background-transition="concave">}}

---

Population restante au bout de <span class="imp">n</span> demi-vies ?

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
<div>
$$\frac{N_0}{2^{\color{#FF968D}n}}$$
</div>
</div>


{{%/section%}}

---

{{%section%}}

## Déterminer l'âge d'un échantillon 

---

On connaît $A_0$ et $A(t)$ (ou $N_0$ et $N(t)$).

<p class="fragment fade-up">Que vaut $t$ ?</p>

---

On prend le logarithme de l'activité :

<p class="fragment fade-up">$\ln (A(t)) = \ln\left(A_0\mathrm{e}^{-\lambda t}\right)$</p>
<p class="fragment fade-up">$\ln (A(t)) = \ln (A_0) + \ln\left(\mathrm{e}^{-\lambda t}\right)$</p>
<p class="fragment fade-up" style="color:#56C1FF;">car $\ln(a\times b)=\ln(a)+\ln(b)$</p>
<p class="fragment fade-up">$ \ln (A(t)) = \ln (A_0) + (-\lambda t)$</p>

---

$$ t = -\frac{ \ln (A(t)) - \ln (A_0)} {\lambda}$$

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
<p>
$\displaystyle   t = \frac1\lambda \times \ln \left(\frac{A_0}{A(t)} \right)$</p>
</div>
<br>

<p class="fragment fade-up" style="color:#56C1FF;">car $\ln(\frac ab)=\ln(a)-\ln(b)$</p>

---

On trouve de même

<div class="fragment fade-up" style="position:relative;margin:auto;width:fit-content;border:solid 5px #FF968D;padding:0 50px 0 50px;border-radius:10px">
<p>
$\displaystyle   t = \frac1\lambda \times \ln \left(\frac{N_0}{N(t)} \right)$</p>
</div>
<br>


{{%/section%}}

---

{{%section%}}


{{< runpython lang="python" mode="toggle" >}}
from random import random

N0 = 100000
N = N0
t = 0
dt = 1E-2
lbda = 2

while N:
    print(f"{t:.2f}\t{N}")
    for i in range(N) :
        if random() < lbda*dt :
            N -= 1
    t += dt

print(f"{t:.2f}\t{0}")
{{< /runpython >}}

---

Comment pourrait-on afficher<br>aussi le temps de demi-vie ?


{{%/section%}}

---

{{%section%}}

## Applications

---

### Datation

---

On utilise la loi de décroissance radioactive<br>pour déterminer une date.

<p class="fragment fade-up"><u>Exemples</u> : </p>

<ul>
<li class="fragment fade-up">Datation de matière organique au carbone 14</li>
<li class="fragment fade-up">Datation de roche au rubidium-strontium</li>
</ul>

---

### Domaine médical

La médecine nucléaire fournit à la fois<br>des techniques d'imagerie et de traitement.

---

<ul>
<li><b style="color:#FFF056">Imagerie médicale</b> : contrairement à la radiographie traditionnelle où on observe l'ombre d'un rayonnement extérieur, le rayonnement est ici émis directement au niveau des organes en faisant ingérer ou en injectant au patient une substance radioactive.</li>
<ul>
<br>
<li class="fragment fade-up">Scintigraphie :<br>utilisation de gamma cameras à scintillation</li>
<li class="fragment fade-up">Tomographies à émission de positons (PET scan)</li>
</ul>
</ul>

{{%note%}}
PET et SPECT sont deux tomographies “fonctionnelles” mais avec des compromis très différents. On ne fait pas “uniquement du PET” parce que le SPECT reste indispensable pour des raisons de physique, de radio­pharmacie, de coût et… d’indication clinique.

1) Physique de formation d’image
	•	PET (coïncidences 511 keV) → “collimation électronique” : pas de collimateur en plomb, donc sensibilité élevée et meilleure résolution (≈ 3–5 mm aujourd’hui). Limites intrinsèques : portée du positon avant annihilation (p.ex. plus faible avec ¹⁸F, plus forte avec ⁸²Rb), non-colinéarité (~0,5° FWHM) et profondeur d’interaction.
	•	SPECT (photon unique, p.ex. 140 keV pour ⁹⁹ᵐTc) → collimation mécanique (plaque trouée) : forte perte de photons ⇒ sensibilité plus faible et résolution typique ≈ 7–12 mm (meilleure sur systèmes CZT dédiés cœur). Il y a un compromis géométrique :
	•	résolution collim. R \approx \frac{d}{L}(z+L)
	•	sensibilité S \propto \frac{d^4}{L^2}
(trous plus fins ⇒ meilleure résolution mais sensibilité qui chute).

2) Radio­pharmacie et demi-vies
	•	SPECT dispose d’un immense catalogue d’agents faciles à produire : ⁹⁹ᵐTc (générateur ⁹⁹Mo/⁹⁹ᵐTc, T½ = 6 h), ¹²³I, ¹¹¹In, ²⁰¹Tl… chimie robuste, logistique simple.
	•	PET nécessite souvent un cyclotron (¹⁸F 110 min, ¹¹C 20 min…) ou quelques générateurs (⁶⁸Ga, ⁸²Rb). Pour des cinétiques lentes (immuno-imagerie, infections), des isotopes SPECT à longue T½ (¹¹¹In, ¹²³I) restent très adaptés. Les analogues PET à longue T½ (⁸⁹Zr) existent mais avec des doses et des contraintes différentes.

3) Coût, accès, logistique
	•	Caméras SPECT/CT : moins chères et très répandues → accès large, délais courts.
	•	PET/CT : plus coûteux (scanner + chimie + distribution), disponibilité encore inégale selon territoires. Beaucoup d’hôpitaux n’auraient pas l’activité/plateforme pour tout basculer en PET.

4) Indications où le SPECT est (encore) la référence
	•	Os (⁹⁹ᵐTc-HDP/MDP), thyroïde (¹²³I), perfusion pulmonaire V/Q, biliaire (HIDA), reins (DMSA, MAG3), ganglion sentinelle, certaines infections/inflammations (¹¹¹In-leucocytes), cardio (perfusion SPECT très répandue).
Le PET a des alternatives (FDG, ⁶⁸Ga, ¹³N-ammoniac, ⁸²Rb…), souvent excellentes, mais pas toujours disponibles/nécessaires.

5) Quantification et dose
	•	PET est naturellement quantitatif (SUV, cinétique, TOF), atout majeur en oncologie/cardiologie.
	•	SPECT devient de plus en plus quantitatif (SPECT/CT avec correction d’atténuation, de diffusion, “resolution recovery”), suffisant pour de nombreuses décisions.
	•	Dose : variable selon traceur/protocole ; on ne peut pas dire “PET = moins de dose” ou l’inverse de façon générale.

6) Theranostique et dosimétrie
	•	En thérapie interne (¹³¹I, ¹⁷⁷Lu, ²²³Ra…), le SPECT est clé pour imager et dosimétrer le même radionucléide (ou son analogue gamma) chez le patient. C’est difficile à remplacer partout par PET.

⸻

En bref
	•	PET : meilleure résolution/sensibilité et quantification → imbattable pour beaucoup d’usages (oncologie FDG, perfusion cardiaque quantitative, neuro, infection/inflammation ciblée).
	•	SPECT : indispensable car moins coûteux, ultra-disponible, énorme palette de traceurs (dont longs T½), logistique simple, et suffisant (voire optimal) pour quantité d’indications clinique courantes—et crucial en dosimétrie thérapeutique.
{{%/note%}}


---

<iframe width=550 height=440 src="https://www.edumedia.com/media/frame/fr/774/?auth=67d67cf6b18ae30db040dd0613077b97/27824" frameborder=0 style="border-radius:10px;"></iframe>


---

<iframe width="800" height="450" src="https://www.youtube.com/embed/QoS1H7J-86w?si=EBc2P8Av62KoMTVD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/yrTy03O0gWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

{{%note%}}
La raison pour laquelle les cellules cancéreuses sont des grandes consommatrices de sucre est encore un mystère. Pour une raison inconnue, la plupart des cellules cancéreuses préfèrent la fermentation aérobie (en présence de dioxygène) à la respiration. La fermentation est bien plus rapide mais aussi bien moins efficace (6% par rapport à respiration) -> beaucoup de glucose nécessaire.
{{%/note%}}

---

{{< slide  background-image="/pet.gif" background-size="contain" background-transition="concave">}}

---

<iframe width="800" height="450" src="https://www.youtube.com/embed/TYGa4KBu5oo?start=132" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

<ul>
<li><b style="color:#FFF056">Radiothérapie</b> :</li>
<br>
<ul>
<li class="fragment fade-up">Radiothérapie externe : on focalise un faisceau de particule (photons X, électrons, neutrons, protons, ions carbone) issu d'un accélérateur linéaire sur les cellules cancéreuses.</li>
<li class="fragment fade-up">Curie thérapie : une source radioactive scellée est placée à l'intérieur ou à proximité immédiate de la zone à traiter.</li>
</ul>
</ul>

{{%note%}}
Technique mise au point à l'Institut Curie.
{{%/note%}}

---

{{< slide  background-image="https://upload.wikimedia.org/wikipedia/commons/8/81/BrachytherapybeadsNo.png?20160528132630" background-size="contain" background-transition="concave">}}

{{%note%}}
https://en.wikipedia.org/wiki/Prostate_brachytherapy
Isotopes used include iodine 125 (half-life 59.4 days) palladium 103 (half-life 17 days) and cesium-131 (half life 9.7 days).
{{%/note%}}


---

### Radioprotection :<br>protection contre les rayonnements ionisants

---

[Estimation de votre exposition<br>aux rayonnements ionisants](https://expop.asnr.fr)


---

<iframe width="800" height="600" src="https://www.youtube.com/embed/x_UtBSJtF30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius:10px;"></iframe>

---

{{< slide  background-image="http://imgs.xkcd.com/blag/radiation.png" background-size="contain" background-transition="concave">}}


{{%/section%}}

---

[Retour site](https://coursphychi.github.io/tspe/nucleaire/)